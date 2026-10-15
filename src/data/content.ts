export type Brand = { n: string; c: 'food' | 'mobility' | 'edu' | 'retail' | 'agro'; cat: string; d: string; inv: string; loc: string; out?: string; state: 'maharashtra' | 'ncr' | 'bihar' };

export const BRANDS: Brand[] = [
  { n: 'Banjos The Food Chain', c: 'food', cat: 'Food & Beverage', d: 'Bun-based quick-service chain from Maharashtra, founded in 2017.', inv: '₹13 L', loc: 'Maharashtra', state: 'maharashtra' },
  { n: 'Mi Hi Koli', c: 'food', cat: 'Food & Beverage', d: "Maharashtra's first authentic Koli restaurant and artisanal spice brand, bringing Mumbai's coastal fishing food to your plate.", inv: '₹50 L', loc: 'Maharashtra', state: 'maharashtra' },
  { n: 'EVeez', c: 'mobility', cat: 'EV & Automotive', d: 'EV subscription platform by TravelTech Experiences, making urban mobility cleaner and more efficient.', inv: '₹90 L–1 Cr', loc: 'Gurugram', out: '10+', state: 'ncr' },
  { n: 'Chargze', c: 'mobility', cat: 'EV & Automotive', d: 'Intelligent EV charging network making charging accessible, smart and profitable.', inv: '₹13 L', loc: 'Noida', state: 'ncr' },
  { n: 'Garagewalle', c: 'mobility', cat: 'EV & Automotive', d: 'Doorstep two-wheeler servicing with expert mechanics and zero wait.', inv: '₹13 L', loc: 'Maharashtra', state: 'maharashtra' },
  { n: 'RFG – Roar for Good', c: 'retail', cat: 'Retail', d: 'Sustainable fashion for men and women, made from hemp, organic cotton and bamboo.', inv: '₹55 L', loc: 'Maharashtra', out: '45+', state: 'maharashtra' },
  { n: 'Abhinav Institute', c: 'edu', cat: 'Education', d: "Industry-aligned education, skills development and training programs for India's workforce.", inv: '₹5 L', loc: 'Maharashtra', state: 'maharashtra' },
  { n: 'Gomini', c: 'agro', cat: 'Agro', d: 'Managed cow-care platform connecting urban families to indigenous cows while supporting rural women farmers.', inv: '₹25 L', loc: 'Bihar', state: 'bihar' },
];

export const FAQ = [
  { q: 'What is Scale100x.ai?', a: 'Scale100x.ai is an AI-powered growth accelerator that helps Indian brands scale offline through franchise expansion, channel partner networks, strategic co-build and strategic co-investment.' },
  { q: 'Is my business ready to franchise?', a: 'Brands usually franchise well when existing outlets are profitable, processes are documented and repeatable, and customers recognise the brand. The free AI Scalability Score checks these areas and shows the gaps.' },
  { q: 'How much does it cost to buy a franchise listed on Scale100x.ai?', a: 'Investment depends on the brand. Brands currently featured range from about ₹5 lakh to ₹1 crore.' },
  { q: 'Does Scale100x.ai work with investors?', a: 'Yes. Investors can connect with brands that are ready to expand, and brands can access the Scale100x.ai investor network for growth capital.' },
];

export const SITE = {
  url: 'https://scale100x.ai',
  name: 'Scale100x.ai',
  title: 'Scale100x.ai: Franchise Your Brand Across India | AI Growth Accelerator',
  description: 'Scale100x.ai helps Indian brands franchise and grow from a few outlets to 100x locations with AI-led partner acquisition, franchise strategy and growth capital.',
};
