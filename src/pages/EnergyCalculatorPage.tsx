import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2, RotateCcw, Printer, Calculator, Info } from 'lucide-react';

type Appliance = { id: number; name: string; quantity: string; watts: string; hours: string; surge: string; simultaneous: boolean };
type Assumptions = { sunHours: string; pvFactor: string; autonomy: string; inverterEfficiency: string; headroom: string; panelWatts: string; battery: string; customDod: string };

const presets = [
  { name: 'LED bulb', watts: 10 }, { name: 'Ceiling fan', watts: 75 }, { name: 'Television', watts: 100 },
  { name: 'Refrigerator', watts: 150 }, { name: 'Laptop', watts: 65 }, { name: 'Wi-Fi router', watts: 12 },
  { name: 'Electric iron', watts: 1000 }, { name: 'Water pump', watts: 750 },
];
const initialAssumptions: Assumptions = { sunHours: '4.5', pvFactor: '0.75', autonomy: '1', inverterEfficiency: '92', headroom: '25', panelWatts: '550', battery: 'lifepo4', customDod: '80' };
const number = (value: string) => value.trim() === '' ? NaN : Number(value);
const fmt = (value: number, digits = 2) => new Intl.NumberFormat('en', { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(value);

export const EnergyCalculatorPage: React.FC = () => {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [assumptions, setAssumptions] = useState<Assumptions>(initialAssumptions);
  const nextId = React.useRef(0);
  const addAppliance = (preset?: { name: string; watts: number }) => setAppliances((rows) => [...rows, { id: nextId.current++, name: preset?.name ?? '', quantity: '1', watts: preset ? String(preset.watts) : '', hours: '', surge: '', simultaneous: true }]);
  const changeRow = (id: number, field: keyof Appliance, value: string | boolean) => setAppliances((rows) => rows.map((row) => row.id === id ? { ...row, [field]: value } : row));
  const changeAssumption = (field: keyof Assumptions, value: string) => setAssumptions((a) => ({ ...a, [field]: value }));
  const reset = () => { setAppliances([]); setAssumptions(initialAssumptions); nextId.current = 0; };

  const calculation = useMemo(() => {
    const active = appliances.filter((r) => r.name.trim() || r.quantity || r.watts || r.hours || r.surge);
    const rowErrors: Record<number, string> = {};
    for (const row of active) {
      const quantity = number(row.quantity); const watts = number(row.watts); const hours = number(row.hours); const surge = row.surge.trim() ? number(row.surge) : watts;
      if (!row.name.trim()) rowErrors[row.id] = 'Enter an appliance name.';
      else if (!Number.isInteger(quantity) || quantity <= 0) rowErrors[row.id] = 'Quantity must be a positive whole number.';
      else if (!Number.isFinite(watts) || watts <= 0) rowErrors[row.id] = 'Rated power must be greater than zero.';
      else if (!Number.isFinite(hours) || hours < 0 || hours > 24) rowErrors[row.id] = 'Hours must be from 0 to 24.';
      else if (row.surge.trim() && (!Number.isFinite(surge) || surge < 0)) rowErrors[row.id] = 'Starting power cannot be negative.';
    }
    const sun = number(assumptions.sunHours), pv = number(assumptions.pvFactor), autonomy = number(assumptions.autonomy);
    const efficiency = number(assumptions.inverterEfficiency) / 100, headroom = number(assumptions.headroom) / 100;
    const panel = number(assumptions.panelWatts);
    const dod = assumptions.battery === 'lead' ? 0.5 : assumptions.battery === 'custom' ? number(assumptions.customDod) / 100 : 0.8;
    const assumptionErrors: string[] = [];
    if (!Number.isFinite(sun) || sun <= 0) assumptionErrors.push('Peak sun hours must be greater than zero.');
    if (!Number.isFinite(pv) || pv <= 0 || pv > 1) assumptionErrors.push('PV performance factor must be above 0 and at most 1.');
    if (!Number.isFinite(autonomy) || autonomy <= 0) assumptionErrors.push('Battery autonomy must be greater than zero.');
    if (!Number.isFinite(efficiency) || efficiency <= 0 || efficiency > 1) assumptionErrors.push('Inverter efficiency must be above 0 and at most 100%.');
    if (!Number.isFinite(headroom) || headroom < 0) assumptionErrors.push('Inverter headroom cannot be negative.');
    if (!Number.isFinite(panel) || panel <= 0) assumptionErrors.push('Panel wattage must be greater than zero.');
    if (!Number.isFinite(dod) || dod <= 0 || dod > 1) assumptionErrors.push('Usable battery DoD must be above 0 and at most 100%.');
    const energyWh = active.reduce((total, row) => total + (number(row.quantity) * number(row.watts) * number(row.hours)), 0);
    const simultaneous = active.filter((row) => row.simultaneous && !rowErrors[row.id]);
    if (active.length && simultaneous.length === 0) assumptionErrors.push('Include at least one valid appliance in the simultaneous load to size the inverter.');
    const peak = simultaneous.reduce((total, row) => total + number(row.quantity) * number(row.watts), 0);
    const surgeLoad = simultaneous.reduce((total, row) => total + number(row.quantity) * Math.max(number(row.watts), row.surge.trim() ? number(row.surge) : number(row.watts)), 0);
    const hasValidAppliance = active.length > 0 && Object.keys(rowErrors).length === 0 && energyWh > 0;
    const valid = hasValidAppliance && assumptionErrors.length === 0;
    if (!active.length) return { active, rowErrors, assumptionErrors, valid: false, hasValidAppliance: false, hasDailyEnergy: false, results: null as null | Record<string, number> };
    if (!valid) return { active, rowErrors, assumptionErrors, valid: false, hasValidAppliance, hasDailyEnergy: energyWh > 0, results: null as null | Record<string, number> };
    const dailyKwh = energyWh / 1000;
    const pvKw = dailyKwh / (sun * pv);
    const panels = Math.ceil(pvKw * 1000 / panel);
    const inverterW = peak * (1 + headroom);
    return { active, rowErrors, assumptionErrors, valid, hasValidAppliance, hasDailyEnergy: energyWh > 0, results: { dailyKwh, peak, surgeLoad, pvKw, panels, installedKw: panels * panel / 1000, batteryKwh: dailyKwh * autonomy / (dod * efficiency), inverterW, inverterKva: inverterW / (1000 * 0.8) } };
  }, [appliances, assumptions]);

  const fieldClass = 'mt-1 w-full rounded-lg border border-brand-dark/20 bg-white px-3 py-2.5 text-sm text-brand-dark focus:border-brand-primary';
  const labelClass = 'block text-xs font-semibold text-brand-charcoal';
  return <div>
    <section className="bg-brand-dark text-white py-14 sm:py-18"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-4"><p className="text-xs font-bold uppercase tracking-widest text-brand-accent">Plan Your Energy Needs</p><h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Energy Requirement Calculator</h1><p className="text-base sm:text-lg text-gray-300 leading-relaxed">Not sure what size solar system your home needs? Use our Energy Requirement Calculator to estimate your daily electricity consumption and obtain an initial recommendation for solar panel capacity, battery storage and inverter size. Add the appliances you intend to power, enter their estimated usage and adjust the system assumptions to see your estimated requirements.</p></div></section>
    <section className="py-10 sm:py-14 bg-brand-cream"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="rounded-2xl border border-brand-primary/20 bg-white p-4 text-sm text-brand-charcoal/80 flex gap-3"><Info className="text-brand-primary shrink-0"/><p>Appliance wattages below are illustrative estimates only. Check the appliance nameplate or manufacturer specifications and replace the values with your actual details. Calculations run locally in this browser; appliance data is not submitted to or stored by Renerr.</p></div>
      <section className="rounded-3xl border border-brand-dark/10 bg-white p-5 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"><div><h2 className="text-xl sm:text-2xl font-bold text-brand-dark">Your Appliances</h2><p className="mt-1 text-sm text-brand-muted">Add each appliance and estimate its typical daily use.</p></div><div className="flex flex-wrap gap-2"><button type="button" onClick={()=>addAppliance()} className="inline-flex items-center gap-2 rounded-lg bg-brand-dark px-4 py-2.5 text-sm font-semibold text-white"><Plus size={16}/> Add appliance</button></div></div>
        <div className="flex flex-wrap gap-2"><span className="self-center text-xs font-semibold text-brand-muted">Quick add estimates:</span>{presets.map(p=><button key={p.name} type="button" onClick={()=>addAppliance(p)} className="rounded-full border border-brand-primary/30 px-3 py-1.5 text-xs text-brand-primary hover:bg-brand-light">{p.name} · {p.watts} W</button>)}</div>
        {appliances.length === 0 ? <div className="rounded-2xl border border-dashed border-brand-dark/20 bg-brand-cream p-8 text-center text-sm text-brand-muted">Add an appliance or select a quick-add estimate to begin.</div> : <div className="space-y-4">{appliances.map((row,index)=><div key={row.id} className="grid grid-cols-2 sm:grid-cols-6 gap-3 rounded-2xl border border-brand-dark/10 bg-brand-cream p-4">
          <label className={`${labelClass} col-span-2 sm:col-span-2`}>Appliance name<input className={fieldClass} value={row.name} onChange={e=>changeRow(row.id,'name',e.target.value)} placeholder={`Appliance ${index+1}`} /></label>
          <label className={labelClass}>Quantity<input className={fieldClass} type="number" min="1" step="1" value={row.quantity} onChange={e=>changeRow(row.id,'quantity',e.target.value)} /></label>
          <label className={labelClass}>Rated power (W)<input className={fieldClass} type="number" min="0" step="any" value={row.watts} onChange={e=>changeRow(row.id,'watts',e.target.value)} placeholder="e.g. 100" /></label>
          <label className={labelClass}>Hours per day<input className={fieldClass} type="number" min="0" max="24" step="any" value={row.hours} onChange={e=>changeRow(row.id,'hours',e.target.value)} placeholder="0–24" /></label>
          <label className={labelClass}>Starting power (W)<span className="font-normal text-brand-muted"> · optional</span><input className={fieldClass} type="number" min="0" step="any" value={row.surge} onChange={e=>changeRow(row.id,'surge',e.target.value)} placeholder="If known" /></label>
          <div className="col-span-2 sm:col-span-5 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-x-5 gap-y-2"><label className="inline-flex items-center gap-2 text-xs text-brand-charcoal"><input type="checkbox" checked={row.simultaneous} onChange={e=>changeRow(row.id,'simultaneous',e.target.checked)} className="accent-brand-primary"/> Include in simultaneous load</label>{!calculation.rowErrors[row.id] && <span className="text-xs text-brand-muted">Estimated daily energy: {fmt(number(row.quantity)*number(row.watts)*number(row.hours)/1000)} kWh/day</span>}</div><button type="button" onClick={()=>setAppliances(rows=>rows.filter(item=>item.id!==row.id))} className="inline-flex items-center gap-1 text-xs font-semibold text-red-700"><Trash2 size={14}/> Remove</button></div>
          {calculation.rowErrors[row.id] && <p className="col-span-2 sm:col-span-6 text-xs font-medium text-red-700" role="alert">{calculation.rowErrors[row.id]}</p>}
        </div>)}</div>}
      </section>

      <section className="rounded-3xl border border-brand-dark/10 bg-white p-5 sm:p-8 space-y-6"><div><h2 className="text-xl sm:text-2xl font-bold text-brand-dark">System Design Assumptions</h2><p className="mt-1 text-sm text-brand-muted">All assumptions can be changed to reflect your planning scenario.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <label className={labelClass}>Peak sun hours per day<input className={fieldClass} type="number" min="0.01" step="any" value={assumptions.sunHours} onChange={e=>changeAssumption('sunHours',e.target.value)}/><span className="mt-1 block font-normal text-brand-muted">4.5 hours is illustrative, not a site-specific guarantee. Use an appropriate worst-month value for your location.</span></label>
          <label className={labelClass}>PV-to-load performance factor<input className={fieldClass} type="number" min="0.01" max="1" step="0.01" value={assumptions.pvFactor} onChange={e=>changeAssumption('pvFactor',e.target.value)}/><span className="mt-1 block font-normal text-brand-muted">Accounts for practical losses from temperature, dust, wiring, controller and conversion.</span></label>
          <label className={labelClass}>Desired battery autonomy (days)<input className={fieldClass} type="number" min="0.01" step="any" value={assumptions.autonomy} onChange={e=>changeAssumption('autonomy',e.target.value)}/></label>
          <label className={labelClass}>Inverter efficiency (%)<input className={fieldClass} type="number" min="0.01" max="100" step="any" value={assumptions.inverterEfficiency} onChange={e=>changeAssumption('inverterEfficiency',e.target.value)}/></label>
          <label className={labelClass}>Inverter sizing headroom (%)<input className={fieldClass} type="number" min="0" step="any" value={assumptions.headroom} onChange={e=>changeAssumption('headroom',e.target.value)}/></label>
          <label className={labelClass}>Solar panel rating (W)<input className={fieldClass} type="number" min="0.01" step="any" value={assumptions.panelWatts} onChange={e=>changeAssumption('panelWatts',e.target.value)}/></label>
          <label className={labelClass}>Battery technology<select className={fieldClass} value={assumptions.battery} onChange={e=>changeAssumption('battery',e.target.value)}><option value="lifepo4">Lithium iron phosphate (LiFePO4) — 80% DoD</option><option value="lead">Lead-acid — 50% DoD</option><option value="custom">Custom</option></select><span className="mt-1 block font-normal text-brand-muted">Planning assumptions only. The manufacturer's recommended usable DoD takes precedence.</span></label>
          {assumptions.battery==='custom' && <label className={labelClass}>Custom usable DoD (%)<input className={fieldClass} type="number" min="0.01" max="100" step="any" value={assumptions.customDod} onChange={e=>changeAssumption('customDod',e.target.value)}/></label>}
        </div>
        {calculation.assumptionErrors.length>0 && <div role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-800">{calculation.assumptionErrors.map(e=><p key={e}>{e}</p>)}</div>}
      </section>

      {calculation.valid && calculation.results && <section className="rounded-3xl border border-brand-primary/20 bg-white p-5 sm:p-8 space-y-6" aria-live="polite"><div className="flex items-center gap-3"><Calculator className="text-brand-primary"/><div><h2 className="text-xl sm:text-2xl font-bold text-brand-dark">Your Estimated Solar System Requirements</h2><p className="text-sm text-brand-muted">Preliminary estimates update as you change the inputs.</p></div></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
          ['Daily electricity consumption',`${fmt(calculation.results.dailyKwh)} kWh/day`,'Total estimated daily energy use across the appliances entered.'],
          ['Maximum simultaneous running load',`${fmt(calculation.results.peak)} W`,'Conservative running power if all included appliances operate at once.'],
          ['Simultaneous starting / surge load',`${fmt(calculation.results.surgeLoad)} W`,'Uses entered starting power where supplied; actual motor starting demand is otherwise unverified.'],
          ['Recommended solar array capacity',`${fmt(calculation.results.pvKw,3)} kWp`,'Estimated minimum array based on your sun-hours and performance assumptions.'],
          ['Solar panels',`${calculation.results.panels} ${calculation.results.panels === 1 ? 'panel' : 'panels'}`,'Rounded up to whole panels at your selected panel rating.'],
          ['Total installed panel capacity',`${fmt(calculation.results.installedKw,3)} kWp`,'Number of panels multiplied by the selected panel wattage.'],
          ['Nominal battery storage',`${fmt(calculation.results.batteryKwh)} kWh`,'Energy-based estimate; check discharge limits, BMS, temperature and manufacturer specifications.'],
          ['Continuous inverter output',`${fmt(calculation.results.inverterW)} W / ${fmt(calculation.results.inverterW/1000,3)} kW`,'Suggested continuous rating with your selected headroom.'],
          ['Approximate inverter rating',`${fmt(calculation.results.inverterKva,3)} kVA`,'Uses an explicitly assumed 0.8 power factor. Inverter must also support required surge capacity.'],
        ].map(([title,value,description])=><article key={title} className="rounded-2xl bg-brand-cream p-4"><h3 className="text-xs font-semibold text-brand-muted">{title}</h3><p className="mt-2 text-xl font-extrabold text-brand-dark">{value}</p><p className="mt-2 text-xs leading-relaxed text-brand-charcoal/75">{description}</p></article>)}</div>
        <div className="flex flex-wrap gap-3 print:hidden"><button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-lg border border-brand-dark/20 px-4 py-2.5 text-sm font-semibold text-brand-dark"><RotateCcw size={16}/> Reset calculator</button><button type="button" onClick={()=>window.print()} className="inline-flex items-center gap-2 rounded-lg border border-brand-dark/20 px-4 py-2.5 text-sm font-semibold text-brand-dark"><Printer size={16}/> Print results</button><Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-brand-dark px-4 py-2.5 text-sm font-semibold text-white">Discuss Your Energy Requirements with Renerr</Link></div>
      </section>}
      {calculation.active.length>0 && !calculation.valid && calculation.hasValidAppliance && <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Please correct the system assumptions above to view valid estimates.</p>}
      {calculation.active.length>0 && Object.keys(calculation.rowErrors).length===0 && !calculation.hasDailyEnergy && <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">Enter daily operating hours above zero for at least one appliance to calculate system requirements.</p>}
      <section className="rounded-2xl border border-brand-dark/10 bg-white p-5 sm:p-7 space-y-3 text-xs sm:text-sm leading-relaxed text-brand-muted"><h2 className="font-bold text-brand-dark">Important planning disclaimer</h2><p>Disclaimer: This calculator provides preliminary solar system sizing estimates for planning purposes only. Actual system design depends on site conditions, location-specific solar resources, appliance characteristics, load profiles, equipment specifications, shading, temperature, wiring, protection systems and installation requirements. Motor starting currents and other surge loads must be verified. A professional technical assessment is required before purchasing or installing equipment.</p><p>These calculations do not provide a certified engineering design or guarantee uninterrupted electricity. A selected inverter must support both the continuous power requirement and the required surge capacity; a momentary surge rating is not its continuous rating.</p></section>
    </div></section>
  </div>;
};
