import { STATES, OUTLINE, CITIES } from '@/data/indiaMap';

/** Cities where a listed brand is based (real). Everything else is the illustrative network layer. */
export const BRAND_PINS: { city: string; label: string; sub: string }[] = [
  { city: 'gurugram', label: 'EVeez', sub: 'Gurugram · 10+ outlets' },
  { city: 'noida', label: 'Chargze', sub: 'Noida' },
  { city: 'nashik', label: 'QSR client', sub: 'Nashik · 20 → 55+ outlets' },
];

const HUBS = ['delhi', 'mumbai', 'bengaluru', 'kolkata', 'hyderabad'];
const ARC_TARGETS: Record<string, string[]> = {
  delhi: ['chandigarh', 'jaipur', 'lucknow', 'dehradun', 'amritsar', 'agra', 'kanpur', 'ludhiana', 'jodhpur'],
  mumbai: ['pune', 'nashik', 'surat', 'ahmedabad', 'goa', 'indore', 'aurangabad', 'kolhapur', 'vadodara', 'nagpur'],
  bengaluru: ['chennai', 'kochi', 'mysuru', 'coimbatore', 'madurai', 'thiruvananthapuram'],
  kolkata: ['patna', 'bhubaneswar', 'ranchi', 'guwahati', 'siliguri', 'gaya', 'muzaffarpur'],
  hyderabad: ['visakhapatnam', 'raipur', 'bhopal', 'varanasi'],
};
const BACKBONE: [string, string][] = [['delhi', 'mumbai'], ['mumbai', 'bengaluru'], ['bengaluru', 'hyderabad'], ['hyderabad', 'kolkata'], ['kolkata', 'delhi'], ['delhi', 'hyderabad']];

function arc(a: string, b: string, lift = 0.22) {
  const [x1, y1] = CITIES[a], [x2, y2] = CITIES[b];
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1;
  const cx = mx - dy * lift, cy = my + dx * lift * 0.2 - Math.hypot(dx, dy) * lift;
  return `M${x1} ${y1}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2} ${y2}`;
}

const brandCities = new Set(BRAND_PINS.map(p => p.city));
const HL: Record<string, string[]> = { mh: ['maharashtra'], ncr: ['delhi', 'haryana'], br: ['bihar'] };

export default function IndiaMap() {
  const stateD = (id: string) => STATES.find(s => s.id === id)?.d ?? '';
  return (
    <svg className="imap" viewBox="0 0 1000 1100" preserveAspectRatio="xMidYMid meet" role="img"
      aria-label="Map of India showing Scale100x.ai brand locations in Maharashtra, Delhi NCR and Bihar, and a network of cities">
      <defs>
        <linearGradient id="slab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#C7D5F2" /><stop offset="1" stopColor="#9FB6E6" /></linearGradient>
        <radialGradient id="pinGlow"><stop offset="0" stopColor="#1F5BFF" stopOpacity=".45" /><stop offset="1" stopColor="#1F5BFF" stopOpacity="0" /></radialGradient>
      </defs>
      {/* extruded slab for depth */}
      <g className="m-slab" aria-hidden="true">
        {[14, 11, 8, 5, 2].map(o => <path key={o} d={OUTLINE} transform={`translate(0 ${o})`} fill="url(#slab)" opacity={0.35 + (14 - o) / 30} />)}
      </g>
      <g className="m-states">
        {STATES.map(s => <path key={s.id} d={s.d} data-state={s.id} />)}
      </g>
      <g className="m-hl" aria-hidden="true">
        {Object.entries(HL).map(([k, ids]) => (
          <g key={k} className={`hl hl-${k}`}>{ids.map(id => <path key={id} d={stateD(id)} />)}</g>
        ))}
      </g>
      <path className="m-outline" d={OUTLINE} aria-hidden="true" />
      <g className="m-arcs" aria-hidden="true">
        {BACKBONE.map(([a, b]) => <path key={a + b} className="arc backbone" d={arc(a, b, 0.18)} pathLength={1} />)}
        {HUBS.flatMap(h => ARC_TARGETS[h].map(t => <path key={h + t} className="arc" d={arc(h, t)} pathLength={1} />))}
      </g>
      <g className="m-pins" aria-hidden="true">
        {Object.entries(CITIES).filter(([k]) => !brandCities.has(k)).map(([k, [x, y]]) => (
          <g key={k} transform={`translate(${x} ${y})`}>
            <g className={`pin${HUBS.includes(k) ? ' hub' : ''}`} data-city={k}>
              <circle className="halo" r="9" />
              <circle className="dot" r="4.2" />
            </g>
          </g>
        ))}
        {BRAND_PINS.map(p => {
          const [x, y] = CITIES[p.city];
          const tw = Math.max(p.label.length, p.sub.length) * 7.4 + 24, left = p.city === 'gurugram';
          const rx = left ? -14 - tw : 14;
          return (
            <g key={p.city} transform={`translate(${x} ${y})`}>
              <g className="pin brand" data-city={p.city}>
                <circle className="glow" r="26" fill="url(#pinGlow)" />
                <circle className="ring" r="13" />
                <circle className="dot" r="7" />
                <g className={`tag tag-${p.city}`}>
                  <rect x={rx} y="-36" width={tw} height="44" rx="10" />
                  <text x={rx + 12} y="-17" className="t1">{p.label}</text>
                  <text x={rx + 12} y="-1" className="t2">{p.sub}</text>
                </g>
              </g>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
