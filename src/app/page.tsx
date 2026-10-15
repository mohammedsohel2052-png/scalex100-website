import Header from '@/components/Header';
import MapStory from '@/components/MapStory';
import IndiaMap from '@/components/IndiaMap';
import ScrollFx from '@/components/ScrollFx';
import { BRANDS } from '@/data/content';

const initials = (n: string) => n.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();

const jsonLd = {"@context":"https://schema.org","@graph":[
 {"@type":"Organization","@id":"https://scale100x.ai/#org","name":"Scale100x.ai","url":"https://scale100x.ai/","description":"AI-powered growth accelerator helping brands scale offline through franchise expansion, channel partner networks, strategic co-build and co-investment.","areaServed":"IN"},
 {"@type":"WebSite","@id":"https://scale100x.ai/#site","url":"https://scale100x.ai/","name":"Scale100x.ai","publisher":{"@id":"https://scale100x.ai/#org"}},
 {"@type":"ItemList","name":"Franchise brands expanding now","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Banjos The Food Chain"},{"@type":"ListItem","position":2,"name":"Mi Hi Koli"},{"@type":"ListItem","position":3,"name":"EVeez"},{"@type":"ListItem","position":4,"name":"Chargze"},{"@type":"ListItem","position":5,"name":"Garagewalle"},{"@type":"ListItem","position":6,"name":"RFG - Roar for Good"},{"@type":"ListItem","position":7,"name":"Abhinav Institute of Technology & Management"},{"@type":"ListItem","position":8,"name":"Gomini"}]},
 {"@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"What is Scale100x.ai?","acceptedAnswer":{"@type":"Answer","text":"Scale100x.ai is an AI-powered growth accelerator that helps Indian brands scale offline through franchise expansion, channel partner networks, strategic co-build and strategic co-investment."}},
  {"@type":"Question","name":"Is my business ready to franchise?","acceptedAnswer":{"@type":"Answer","text":"Brands usually franchise well when their existing outlets are profitable, their processes are documented and repeatable, and customers recognise the brand. The free AI Scalability Score checks these areas and shows the gaps."}},
  {"@type":"Question","name":"How much does it cost to buy a franchise listed on Scale100x.ai?","acceptedAnswer":{"@type":"Answer","text":"Investment depends on the brand. Brands currently featured range from about ₹5 lakh to ₹1 crore."}},
  {"@type":"Question","name":"Does Scale100x.ai work with investors?","acceptedAnswer":{"@type":"Answer","text":"Yes. Investors can connect with brands that are ready to expand, and brands can access the Scale100x.ai investor network for growth capital."}}]}
]};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <MapStory map={<IndiaMap />} />

  

  <div className="marquee" aria-label="Brands on the platform">
    <div className="wrap marquee-inner">
      <small>On the platform</small>
      <div className="mq-rows">
        <div className="mq-row"><div className="track" data-dir="-1"><span>Chargze</span><span>EVeez</span><span>Banjos</span><span>Garagewalle</span><span>Roar for Good</span><span>Mi Hi Koli</span><span>Gomini</span><span>Abhinav Institute</span><span aria-hidden="true">Chargze</span><span aria-hidden="true">EVeez</span><span aria-hidden="true">Banjos</span><span aria-hidden="true">Garagewalle</span><span aria-hidden="true">Roar for Good</span><span aria-hidden="true">Mi Hi Koli</span><span aria-hidden="true">Gomini</span><span aria-hidden="true">Abhinav Institute</span></div></div>
        <div className="mq-row alt" aria-hidden="true"><div className="track" data-dir="1"><span aria-hidden="true">Chargze</span><span aria-hidden="true">EVeez</span><span aria-hidden="true">Banjos</span><span aria-hidden="true">Garagewalle</span><span aria-hidden="true">Roar for Good</span><span aria-hidden="true">Mi Hi Koli</span><span aria-hidden="true">Gomini</span><span aria-hidden="true">Abhinav Institute</span><span aria-hidden="true">Chargze</span><span aria-hidden="true">EVeez</span><span aria-hidden="true">Banjos</span><span aria-hidden="true">Garagewalle</span><span aria-hidden="true">Roar for Good</span><span aria-hidden="true">Mi Hi Koli</span><span aria-hidden="true">Gomini</span><span aria-hidden="true">Abhinav Institute</span></div></div>
      </div>
    </div>
  </div>

  <section className="manifesto" aria-labelledby="mf-title">
    <div className="wrap">
      <span className="label">Why brands choose us</span>
      <h2 id="mf-title" className="mf-text" data-words>Unlike traditional franchise consultants, we become your <em className="hl">long-term growth partner.</em> We combine AI, proven franchise systems, sales automation, marketing and <em className="hl">strategic capital</em> so your business expands faster, with lower risk.</h2>
      <div className="mf-sign"><i></i>Scale100x.ai growth team</div>
    </div>
  </section>

  <section className="stats" aria-label="Results so far" data-scroll>
    <div className="watermark" aria-hidden="true">100x</div>
    <div className="wrap stats-row">
      <div className="stat tilt reveal"><b data-count="20" data-suffix="+">20+</b><span>brands scaled</span></div>
      <div className="stat tilt reveal"><b data-count="500" data-suffix="+">500+</b><span>franchise and channel partners</span></div>
      <div className="stat tilt reveal"><b data-count="50" data-suffix="+">50+</b><span>cities activated</span></div>
      <div className="stat tilt reveal"><b data-count="100" data-prefix="₹" data-suffix="+ Cr">₹100+ Cr</b><span>revenue enabled</span></div>
    </div>
  </section>

  <section id="results" aria-labelledby="results-title" style={{paddingTop: '24px'}}>
    <div className="wrap">
      <div className="g12"><div className="sec-head reveal">
        <span className="label">Client results</span>
        <h2 id="results-title" data-split>Franchise growth you can count, outlet by outlet.</h2>
        <p>Two founders on what changed when expansion stopped being guesswork.</p>
      </div></div>
      <div className="cases">
        <div className="reveal"><article className="case tilt">
          <span className="sector">Electric mobility</span>
          <div className="jump"><span className="from">3</span><svg width="34" height="20" viewBox="0 0 34 20" aria-hidden="true"><path d="M2 10h28M22 3l8 7-8 7" fill="none" stroke="#1F5BFF" strokeWidth="2.4"/></svg><span className="to">65+</span><small>outlets</small></div>
          <ul><li>Presence across 30+ cities</li><li>Support in securing a $5.4M (₹46.6 Cr) Series A</li></ul>
          <blockquote>"We knew where we wanted to go, but not exactly how to get there. Scale100x.ai helped us build a roadmap that gave us the confidence to scale."</blockquote>
          <cite>Founder, electric mobility brand</cite>
        </article></div>
        <div className="reveal reveal-d"><article className="case tilt">
          <span className="sector">QSR · Food &amp; beverage</span>
          <div className="jump"><span className="from">20</span><svg width="34" height="20" viewBox="0 0 34 20" aria-hidden="true"><path d="M2 10h28M22 3l8 7-8 7" fill="none" stroke="#1F5BFF" strokeWidth="2.4"/></svg><span className="to">55+</span><small>outlets</small></div>
          <ul><li>Local Nashik brand turned national QSR</li><li>Presence across 7 cities</li></ul>
          <blockquote>"Taking that experience to more locations needed a different level of planning. Scale100x.ai made our growth plan practical and execution-ready."</blockquote>
          <cite>Co-founder, QSR brand</cite>
        </article></div>
        <div className="reveal reveal-d"><article className="case cta tilt">
          <span className="sector">Your brand next</span>
          <h3>How far can your model scale?</h3>
          <p>The AI Scalability Score shows where your business stands today and what has to be true before you open the next 10 outlets.</p>
          <a className="btn" href="#score">Get your Score</a>
        </article></div>
      </div>
    </div>
  </section>

  <section className="journey" id="journey" aria-labelledby="journey-title" data-scroll="pin">
    <div className="j-pin">
      <div className="wrap j-head">
        <div style={{display: 'grid', gap: '14px'}}>
          <span className="label">The growth journey</span>
          <h2 id="journey-title">How a brand grows from 1 to 100 outlets.</h2>
        </div>
        <div className="j-count" aria-hidden="true"><small>Outlets</small><output id="jCount">1</output></div>
      </div>
      <div className="j-viewport"><div className="wrap" style={{width: '100%'}}><div className="j-track" id="jTrack">
        <article className="j-card active"><div className="stage-n"><span>Stage <b>01</b></span><span>1 outlet</span></div><h3>Prove the model</h3><p>Profitable unit economics, repeat customers and a brand people ask for by name. This is what the Scalability Score checks first.</p><div className="dots" data-n="1"></div></article>
        <article className="j-card"><div className="stage-n"><span>Stage <b>02</b></span><span>3–10 outlets</span></div><h3>Systemise</h3><p>SOPs, training, supply chain and tech that let an outlet run well without the founder in the room.</p><div className="dots" data-n="8"></div></article>
        <article className="j-card"><div className="stage-n"><span>Stage <b>03</b></span><span>10–50 outlets</span></div><h3>Build the franchise network</h3><p>AI-led partner acquisition, franchise sales and onboarding, with marketing that runs city by city.</p><div className="dots" data-n="40"></div></article>
        <article className="j-card"><div className="stage-n"><span>Stage <b>04</b></span><span>100+ outlets</span></div><h3>Become a national brand</h3><p>Strategic capital, an investor network and IPO support to fund the next phase of growth.</p><div className="dots" data-n="100"></div></article>
      </div></div></div>
      <div className="wrap"><div className="j-rail"><i></i></div><div className="j-labels"><span>Prove</span><span>Systemise</span><span>Network</span><span>National</span></div></div>
    </div>
  </section>

  <section className="wwd" id="how" aria-labelledby="wwd-title">
    <div className="wrap g12 wwd-grid">
      <div className="wwd-copy reveal">
        <span className="label">What we do</span>
        <h2 id="wwd-title" data-split>A franchise growth partner that stays until the outlets open.</h2>
        <p>Most franchise consultants hand over documents and leave. We recruit partners, run marketing and bring in capital, until your outlets are open and performing.</p>
        <div className="vs" role="table" aria-label="Scale100x.ai compared with a traditional franchise consultant">
          <div className="h" role="columnheader">Typical consultant</div><div className="h us" role="columnheader">Scale100x.ai</div>
          <div className="them" role="cell">Franchise documents only</div><div className="us" role="cell">Documents plus partner recruitment</div>
          <div className="them" role="cell">One-time project</div><div className="us" role="cell">Long-term growth partner</div>
          <div className="them" role="cell">Manual lead follow-up</div><div className="us" role="cell">AI agents run lead gen and sales</div>
          <div className="them" role="cell">No access to capital</div><div className="us" role="cell">Investor and advisor network</div>
        </div>
      </div>
      <div className="pillars" id="pillars">
        <article className="pillar" style={{'--i': '0'}}><div className="cube" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div><h3>Franchise growth engine</h3><p>Turn a proven outlet into a franchise model, with expansion systems, partner acquisition and on-ground execution.</p></div></article>
        <article className="pillar" style={{'--i': '1'}}><div className="cube" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div><h3>AI growth intelligence</h3><p>AI agents run lead generation, campaigns, franchise sales follow-up and reporting, so a small team can manage a large rollout.</p></div></article>
        <article className="pillar" style={{'--i': '2'}}><div className="cube" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div><h3>Capital and strategic network</h3><p>Introductions to investors, advisors and expansion experts when growth needs more than franchise fees.</p></div></article>
        <article className="pillar" style={{'--i': '3'}}><div className="cube" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div><h3>Execution, end to end</h3><p>Franchisee recruitment, onboarding, SOPs, marketing and operations at every stage of the rollout.</p></div></article>
      </div>
    </div>
  </section>

  <section className="engine" aria-labelledby="engine-title">
    <div className="wrap">
      <div className="g12"><div className="sec-head">
        <span className="label">AI growth intelligence</span>
        <h2 id="engine-title" data-split>AI agents that run your franchise sales.</h2>
        <p>Each stage of partner acquisition has an agent working on it, so leads keep moving while your team focuses on opening outlets.</p>
      </div></div>
      <div className="pipe rv">
        <span className="packet" aria-hidden="true"></span><span className="packet b" aria-hidden="true"></span>
        <article className="node" style={{'--i': '0'}}><span className="ico" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></span><span className="agent">Agent active</span><h3>Lead generation</h3><p>Campaigns find prospective franchise partners in your target cities.</p></article>
        <article className="node" style={{'--i': '1'}}><span className="ico" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5h18l-7 8v6l-4-2v-4z"/></svg></span><span className="agent">Agent active</span><h3>Qualification</h3><p>Leads are scored and followed up automatically, day and night.</p></article>
        <article className="node" style={{'--i': '2'}}><span className="ico" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12l5 5L20 6"/></svg></span><span className="agent">Agent active</span><h3>Franchise sales</h3><p>Sales automation moves qualified partners towards signing.</p></article>
        <article className="node" style={{'--i': '3'}}><span className="ico" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 12h6M12 9v6"/></svg></span><span className="agent">Agent active</span><h3>Onboarding</h3><p>SOPs and training get new partners operational quickly.</p></article>
        <article className="node" style={{'--i': '4'}}><span className="ico" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></span><span className="agent">Agent active</span><h3>Analytics</h3><p>Business intelligence across every outlet and every city.</p></article>
      </div>
      <div className="engine-foot"><a className="btn btn-primary" href="#score">See where AI fits your rollout</a><span>Included with every growth engagement.</span></div>
    </div>
  </section>

  <section aria-labelledby="steps-title">
    <div className="wrap">
      <div className="g12"><div className="sec-head reveal">
        <span className="label">How it works</span>
        <h2 id="steps-title" data-split>How to franchise your business in four steps.</h2>
      </div></div>
      <ol className="steps" id="steps" data-scroll style={{listStyle: 'none', margin: '0', padding: '0'}}><li className="steps-fill" aria-hidden="true"></li>
        <li className="step reveal"><span className="n">01</span><h3>Score</h3><p>Take the AI Scalability Score to see how ready your unit economics, systems and brand are to replicate.</p></li>
        <li className="step reveal reveal-d"><span className="n">02</span><h3>Strategy</h3><p>Choose the right growth model and build the franchise structure, SOPs and expansion plan around it.</p></li>
        <li className="step reveal reveal-d"><span className="n">03</span><h3>Partner acquisition</h3><p>AI-led campaigns find, qualify and convert franchise and channel partners in your target cities.</p></li>
        <li className="step reveal reveal-d"><span className="n">04</span><h3>Launch and scale</h3><p>Onboard partners, open outlets and bring in capital to keep the expansion funded.</p></li>
      </ol>
    </div>
  </section>

  <section className="models-band" aria-labelledby="models-title">
    <div className="wrap">
      <div className="g12"><div className="sec-head reveal">
        <span className="label">Growth models</span>
        <h2 id="models-title" data-split>Four ways to expand, matched to your margins.</h2>
        <p>Not every brand should franchise. Tap or hover a card to see how each model works.</p>
      </div></div>
      <div className="models">
        <div className="flip reveal" tabIndex={0}><div className="flip-inner">
          <div className="face front"><span className="tag">Asset-light</span><span className="big">01</span><div><h3>Franchise expansion</h3><span className="hint">How it works ↻</span></div></div>
          <div className="face back"><h3>Franchise expansion</h3><p>Partners invest in and run outlets under your brand, systems and SOPs. You grow without funding every outlet yourself.</p></div>
        </div></div>
        <div className="flip reveal reveal-d" tabIndex={0}><div className="flip-inner">
          <div className="face front"><span className="tag">Distribution</span><span className="big">02</span><div><h3>Channel partner networks</h3><span className="hint">How it works ↻</span></div></div>
          <div className="face back"><h3>Channel partner networks</h3><p>Dealers, distributors and resellers take your product into new regions and build reach quickly.</p></div>
        </div></div>
        <div className="flip reveal reveal-d" tabIndex={0}><div className="flip-inner">
          <div className="face front"><span className="tag">Shared build</span><span className="big">03</span><div><h3>Strategic co-build</h3><span className="hint">How it works ↻</span></div></div>
          <div className="face back"><h3>Strategic co-build</h3><p>We build new locations or business lines alongside you and share the work of getting them running.</p></div>
        </div></div>
        <div className="flip reveal reveal-d" tabIndex={0}><div className="flip-inner">
          <div className="face front"><span className="tag">Capital</span><span className="big">04</span><div><h3>Strategic co-investment</h3><span className="hint">How it works ↻</span></div></div>
          <div className="face back"><h3>Strategic co-investment</h3><p>Equity or structured capital from our network to fund faster growth once the model is proven.</p></div>
        </div></div>
      </div>
    </div>
  </section>

  <section aria-labelledby="planner-title" style={{paddingTop: '0'}}>
    <div className="wrap">
      <div className="g12"><div className="sec-head">
        <span className="label">Expansion planner</span>
        <h2 id="planner-title" data-split>Plan your outlet growth.</h2>
        <p>Move the sliders to see the size of the jump you are planning. Your Scalability Score shows what it takes to get there.</p>
      </div></div>
      <div className="planner rv">
        <div className="pl-controls">
          <div className="rng"><div className="top"><label htmlFor="pToday">Outlets today</label><output id="oToday" htmlFor="pToday">5</output></div><input type="range" id="pToday" min="1" max="50" defaultValue="5" /></div>
          <div className="rng"><div className="top"><label htmlFor="pGoal">Target outlets</label><output id="oGoal" htmlFor="pGoal">100</output></div><input type="range" id="pGoal" min="10" max="500" step="5" defaultValue="100" /></div>
          <div className="mult"><small>Growth multiple</small><b id="oMult">20x</b><span id="oNew">95 new outlets to open</span></div>
          <a className="btn btn-primary" href="#score" style={{width: 'fit-content'}}>Check if your model can scale</a>
        </div>
        <div className="pl-viz">
          <div className="legend"><span><i style={{background: 'var(--blue-100)', border: '1px solid #C6D5FF'}}></i>Open today</span><span><i style={{background: 'var(--blue)'}}></i>To open</span><span id="oUnit">Each square = 1 outlet</span></div>
          <div className="grid100" id="grid100" aria-hidden="true"></div>
          <p className="pl-note">Illustration only. Actual timelines depend on your category, margins and growth model.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="brands" aria-labelledby="brands-title">
    <div className="wrap">
      <div className="list-top">
        <div className="sec-head reveal" style={{gridColumn: 'auto'}}>
          <span className="label">Franchise opportunities in India</span>
          <h2 id="brands-title" data-split>Franchise brands expanding now.</h2>
          <p>Compare verified brands by industry, investment and location.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter brands by industry">
          <button className="chip" aria-pressed="true" data-f="all">All</button>
          <button className="chip" aria-pressed="false" data-f="food">Food &amp; Beverage</button>
          <button className="chip" aria-pressed="false" data-f="mobility">EV &amp; Automotive</button>
          <button className="chip" aria-pressed="false" data-f="edu">Education</button>
          <button className="chip" aria-pressed="false" data-f="retail">Retail</button>
          <button className="chip" aria-pressed="false" data-f="agro">Agro</button>
        </div>
      </div>
      <div className="brands" id="brandGrid">
        {BRANDS.map(b => (
          <article className="brand tilt" key={b.n} data-c={b.c}>
            <div className="top"><span className="monogram" aria-hidden="true">{initials(b.n)}</span><div style={{ display: 'grid', gap: '4px', justifyItems: 'end' }}><span className="cat">{b.cat}</span><span className="verified">✓ Verified</span></div></div>
            <h3>{b.n}</h3>
            <p>{b.d}</p>
            <dl className="facts"><div><dt>Investment</dt><dd>{b.inv}</dd></div><div><dt>{b.out ? 'Outlets' : 'Based in'}</dt><dd>{b.out || b.loc}</dd></div></dl>
            <div className="act"><a href="#score">Request info</a><a className="go" href="#brands" aria-label={`View ${b.n} franchise`}>View brand</a></div>
          </article>
        ))}
      </div>
      <div className="view-all"><a className="btn btn-line" href="#brands">View all franchise opportunities →</a></div>
    </div>
  </section>

  <section id="partners" aria-label="For investors and growth partners" style={{paddingTop: '0'}}>
    <div className="wrap aud">
      <article className="inv tilt reveal">
        <div className="deco" aria-hidden="true"><i></i><i></i><i></i></div>
        <span className="label">For investors</span>
        <h3>Back offline brands with proven unit economics.</h3>
        <p>Meet brands that have been through our scalability assessment and are ready to expand, with support from first call to close, up to IPO readiness.</p>
        <a className="btn btn-primary" href="#top">Become an investor</a>
      </article>
      <article className="tilt reveal reveal-d">
        <span className="label">For growth partners</span>
        <h3>Bring franchise opportunities to your region.</h3>
        <p>Consultants, brokers and regional operators can partner with us to connect brands with franchise buyers in their networks.</p>
        <a className="btn btn-line" href="#top">Become a growth partner</a>
      </article>
    </div>
  </section>

  <section id="faq" aria-labelledby="faq-title" style={{paddingTop: '0'}}>
    <div className="wrap g12 faq-grid">
      <div className="sec-head reveal">
        <span className="label">FAQ</span>
        <h2 id="faq-title" data-split style={{fontSize: 'clamp(32px,4vw,48px)'}}>Questions founders ask first.</h2>
      </div>
      <div className="faq">
        <details open><summary>What is Scale100x.ai?</summary><p>Scale100x.ai is an AI-powered growth accelerator that helps Indian brands scale offline through franchise expansion, channel partner networks, strategic co-build and strategic co-investment.</p></details>
        <details><summary>Is my business ready to franchise?</summary><p>Brands usually franchise well when existing outlets are profitable, processes are documented and repeatable, and customers recognise the brand. The free AI Scalability Score checks these areas and shows the gaps.</p></details>
        <details><summary>How much does it cost to buy a franchise listed here?</summary><p>Investment depends on the brand. Brands currently featured range from about ₹5 lakh to ₹1 crore.</p></details>
        <details><summary>Does Scale100x.ai work with investors?</summary><p>Yes. Investors can connect with brands that are ready to expand, and brands can access our investor network for growth capital.</p></details>
      </div>
    </div>
  </section>

  <section className="score" id="score" aria-labelledby="score-title">
    <div className="wrap">
      <div className="score-card reveal">
        <div className="g12 score-inner">
          <div className="score-copy">
            <span className="label">AI Scalability Score</span>
            <h2 id="score-title" data-split>Is your brand ready for 100x?</h2>
            <p>Answer a few questions about your business. You get a score, the gaps holding back expansion, and the growth model that fits.</p>
            <ul className="ticks"><li>Free, takes about 5 minutes</li><li>Reviewed by a growth expert</li><li>No commitment</li></ul>
          </div>
          <form className="sf" id="scoreForm" noValidate>
            <div className="field"><label htmlFor="f-brand">Brand name</label><input id="f-brand" name="brand" required placeholder="e.g. Chai Corner" autoComplete="organization" /></div>
            <div className="row2">
              <div className="field"><label htmlFor="f-outlets">Outlets today</label><select id="f-outlets" name="outlets" defaultValue="6–20"><option>1</option><option>2–5</option><option>6–20</option><option>21–50</option><option>50+</option></select></div>
              <div className="field"><label htmlFor="f-ind">Industry</label><select id="f-ind" name="industry"><option>Food &amp; Beverage</option><option>Retail</option><option>Education</option><option>EV &amp; Automotive</option><option>Health &amp; Wellness</option><option>Other</option></select></div>
            </div>
            <div className="row2">
              <div className="field"><label htmlFor="f-city">City</label><input id="f-city" name="city" placeholder="e.g. Pune" autoComplete="address-level2" /></div>
              <div className="field"><label htmlFor="f-phone">Mobile number</label><input id="f-phone" name="phone" inputMode="tel" placeholder="+91" autoComplete="tel" /></div>
            </div>
            <button className="btn btn-primary" type="submit">Get my Score</button>
            <p className="form-msg" id="formMsg" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </div>
  </section>

</main>
<footer>
  <div className="wrap">
    <div className="foot">
      <div>
        <a className="logo" href="#top"><span className="mark" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 13h3V8H2zM6.5 13h3V5h-3zM11 13h3V2h-3z" fill="#fff"/></svg></span><span>Scale100x<b>.ai</b></span></a>
        <p>The AI-powered growth accelerator helping Indian brands scale offline through franchising, partner networks and strategic capital.</p>
      </div>
      <nav aria-label="Franchises"><h4>Franchises</h4><ul><li><a href="#brands">Browse all brands</a></li><li><a href="#brands">Top rated</a></li><li><a href="#brands">New listings</a></li></ul></nav>
      <nav aria-label="For brands"><h4>For brands</h4><ul><li><a href="#how">How it works</a></li><li><a href="#score">AI Scalability Score</a></li><li><a href="#top">Claim your listing</a></li><li><a href="#top">Apply</a></li></ul></nav>
      <nav aria-label="Partners"><h4>Partners</h4><ul><li><a href="#partners">For investors</a></li><li><a href="#partners">Growth partners</a></li></ul></nav>
      <nav aria-label="Company"><h4>Company</h4><ul><li><a href="#top">About us</a></li><li><a href="#faq">Blog</a></li><li><a href="#top">Careers</a></li><li><a href="#top">Contact</a></li></ul></nav>
    </div>
    <div className="legal"><span>© 2026 Scale100x.ai</span><div><a href="#top">Terms</a><a href="#top">Privacy</a><a href="#top">Cookies</a></div></div>
  </div>
</footer>

<a className="totop" id="totop" href="#top" aria-label="Back to top"><svg className="ring" width="58" height="58" viewBox="0 0 58 58" aria-hidden="true"><circle cx="29" cy="29" r="26"/></svg><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></a>
<a className="chat" href="#score" aria-label="Chat with us"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.5 1.2 4.7 3.2 6.3L4.5 21l3.9-1.8c1.1.3 2.3.5 3.6.5 5.5 0 10-3.9 10-8.7S17.5 3 12 3z"/></svg></a>


      <ScrollFx />
    </>
  );
}
