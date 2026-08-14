"use client";

// Signal / Shelf direction: a dark editorial publishing stage, paper-white proof cards,
// cobalt action signals, and a product-first conversion flow. This page owns the shelf,
// blueprint cards, prompt specimen, and launch timeline signature elements.
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Menu,
  Play,
  Quote,
  Sparkles,
  X,
} from "lucide-react";

const blueprints = [
  ["01", "Real estate follow-up", "A 30-prompt kit for independent agents who want a starting point for everyday lead messages.", "PROMPT KIT"],
  ["02", "Local beauty content", "Two weeks of caption, story, and booking-CTA starting points for solo professionals.", "CONTENT KIT"],
  ["03", "Mobile car detailing", "A client-facing starter folder for inquiries, reminders, handoffs, and review requests.", "SERVICE KIT"],
  ["04", "Entry-level job search", "A careful response pack for tailoring real experience into clearer applications and interview stories.", "WORKSHEET"],
  ["05", "Student assignment reset", "A weekly reset, assignment map, and next-action system for crowded semesters.", "PLANNER"],
  ["06", "Freelance designer ops", "A human-in-the-loop workflow map for briefs, revisions, and project handoffs.", "WORKFLOW"],
  ["07", "Pet-sitter tracker", "An editable client-information and visit log that keeps important details visible.", "TRACKER"],
  ["08", "Home-baker content", "Menu announcements, order reminders, and FAQ starters for a weekly rhythm.", "CONTENT KIT"],
  ["09", "Weekend micro-guide", "A focused itinerary framework with packing, verification, and local-note prompts.", "GUIDE"],
  ["10", "One-person service kit", "A clearer offer, inquiry reply, onboarding checklist, and first-week content plan.", "STARTER KIT"],
];

const faqs = [
  ["Is this suitable for a complete beginner?", "Yes. The guide starts with customer and problem selection, then gives you blueprints, prompts, worksheets, and a timed first-version workflow."],
  ["Do I need paid AI tools?", "No paid tool is required. The guide suggests free plans or free tiers where available, but tool features and access can change."],
  ["Does it guarantee sales or income?", "No. It does not promise sales, reach, or income. It helps you build a clearer first product and learn from a small, honest launch."],
  ["Is it only for Gumroad?", "No. Gumroad is a familiar example in the offer section. The product-building system can be adapted to other platforms that support your format."],
  ["What do I get?", "A 35-page PDF ebook, a 25-prompt bonus, a validation checklist, and a one-page product builder."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cobalt">
      <span className="h-px w-8 bg-cobalt" />
      {children}
    </div>
  );
}

function SignalMark({ small = false }: { small?: boolean }) {
  return (
    <span aria-hidden="true" className={`signal-mark ${small ? "signal-mark--small" : ""}`}>
      <i /><i /><i /><b />
    </span>
  );
}

function GuideCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`guide-card ${compact ? "guide-card--compact" : ""}`} aria-label="AI Side Hustles field guide cover">
      <div className="guide-card__eyebrow">THE NO-BUDGET PRODUCT SPRINT</div>
      <h3>AI SIDE<br /><span>HUSTLES</span></h3>
      <p>10 Digital Products You Can Create With Free AI Tools and Sell Online</p>
      <div className="guide-card__chips"><span>01 CREATE</span><span>02 PACKAGE</span><span>03 PUBLISH</span></div>
      <div className="guide-card__rule" />
      <div className="guide-card__footer">CREATE. PACKAGE. PUBLISH. START.</div>
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <header className="site-header">
        <div className="shell flex h-[76px] items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" onClick={closeMobile} aria-label="AI Side Hustles home">
            <SignalMark small />
            <span className="brand-lockup font-display text-[15px] font-bold tracking-[-0.04em] text-white">AI SIDE HUSTLES</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a href="#inside" className="nav-link">Inside the guide</a>
            <a href="#blueprints" className="nav-link">10 blueprints</a>
            <a href="#launch" className="nav-link">Launch plan</a>
          </nav>
          <a href="#buy" className="hidden items-center gap-2 rounded-full bg-cobalt px-4 py-2.5 font-display text-xs font-bold text-white shadow-signal transition hover:-translate-y-0.5 hover:bg-[#3d7af3] md:flex">
            Get the guide <ArrowUpRight size={14} />
          </a>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-white/10 bg-navy px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="shell flex flex-col gap-4">
              <a href="#inside" onClick={closeMobile} className="nav-link">Inside the guide</a>
              <a href="#blueprints" onClick={closeMobile} className="nav-link">10 blueprints</a>
              <a href="#launch" onClick={closeMobile} className="nav-link">Launch plan</a>
              <a href="#buy" onClick={closeMobile} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-cobalt px-4 py-3 font-display text-xs font-bold text-white">Get the guide <ArrowUpRight size={14} /></a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section relative isolate overflow-hidden">
          <div className="hero-grid" />
          <div className="shell relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-24">
            <div className="max-w-[650px] animate-enter">
              <div className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
                <span className="rounded-full border border-blue-300/25 bg-blue-300/10 px-3 py-1.5">No-budget product sprint</span>
                <span className="text-white/35">/</span>
                <span>35-page field guide</span>
              </div>
              <h1 className="max-w-[720px] font-display text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.08em] text-white">
                One useful product beats <em className="text-cobalt">one hundred</em> vague ideas.
              </h1>
              <p className="mt-8 max-w-[545px] text-[1.08rem] leading-8 text-blue-100/75 sm:text-[1.2rem]">
                A practical, no-budget guide to turning AI, simple ideas, and free tools into digital products people can understand, use, and buy.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#buy" className="button-primary group">
                  Build the first version <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#inside" className="button-quiet group">
                  See what’s inside <ArrowDown size={15} className="transition group-hover:translate-y-1" />
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-blue-100/50">
                <span className="flex items-center gap-2"><Check size={14} className="text-cobalt" /> Complete beginner friendly</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-cobalt" /> No income promises</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-cobalt" /> Built to ship</span>
              </div>
            </div>

            <div className="hero-shelf animate-enter-delay relative mx-auto w-full max-w-[480px] lg:ml-auto">
              <div className="shelf-label absolute -left-2 top-[-28px] font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/70">The field guide / 01</div>
              <div className="hero-cover-wrap">
                <div className="hero-cover-shadow" />
                <GuideCard />
                <div className="cover-sticker cover-sticker--top">CREATE</div>
                <div className="cover-sticker cover-sticker--bottom">PACKAGE / PUBLISH</div>
              </div>
              <div className="shelf-note absolute -bottom-6 -left-3 hidden w-48 rotate-[-4deg] border border-white/15 bg-[#10224a]/90 p-4 shadow-xl backdrop-blur sm:block">
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.17em] text-cobalt">Field note 01</div>
                <p className="mt-2 font-display text-sm leading-5 text-white">Start with the customer, not the tool.</p>
              </div>
              <div className="absolute -right-5 top-12 hidden h-28 w-24 rotate-[8deg] border border-white/15 bg-violet/80 p-3 shadow-2xl sm:block">
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white/70">bonus</div>
                <div className="mt-3 font-display text-2xl font-bold leading-none text-white">25<br />prompts</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-paper to-transparent" />
        </section>

        <section className="border-b border-ink/10 bg-paper">
          <div className="shell grid grid-cols-2 divide-x divide-ink/10 sm:grid-cols-4">
            <div className="proof-stat"><strong>10</strong><span>specific product<br />blueprints</span></div>
            <div className="proof-stat"><strong>25</strong><span>copy-and-paste<br />AI prompts</span></div>
            <div className="proof-stat"><strong>60</strong><span>minute first-version<br />workflow</span></div>
            <div className="proof-stat"><strong>07</strong><span>day learning<br />launch plan</span></div>
          </div>
        </section>

        <section id="inside" className="section-paper section-offset">
          <div className="shell grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative mx-auto w-full max-w-[410px] lg:mx-0">
              <div className="paper-visual paper-visual--back" />
              <div className="paper-visual paper-visual--mid" />
              <div className="paper-visual paper-visual--front">
                <GuideCard compact />
                <div className="paper-caption"><span>AI SIDE HUSTLES</span><span>FIELD GUIDE / 2026</span></div>
              </div>
              <div className="absolute -bottom-8 -right-4 z-10 w-40 rotate-[4deg] bg-navy p-4 text-white shadow-2xl sm:-right-10">
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-blue-200">Read. Make. Ship.</div>
                <div className="mt-3 font-display text-lg font-bold leading-tight">Your first product can be small.</div>
              </div>
            </div>
            <div className="max-w-[640px]">
              <SectionLabel>Inside the guide</SectionLabel>
              <h2 className="section-title mt-5">A field manual for going from blank page to <span className="text-cobalt">first offer.</span></h2>
              <p className="section-copy mt-6">AI is useful when it helps you move faster through a real workflow. It is not the product. This guide keeps the customer, the problem, and the final quality check in the driver’s seat.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                <div className="mini-proof"><span>01</span><strong>Choose</strong><p>Find a narrow job worth making easier.</p></div>
                <div className="mini-proof"><span>02</span><strong>Create</strong><p>Use structured prompts to build the first version.</p></div>
                <div className="mini-proof"><span>03</span><strong>Launch</strong><p>Show the proof, learn, and improve the offer.</p></div>
              </div>
              <a href="#blueprints" className="text-link mt-9">Explore the ten blueprints <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="blueprints" className="section-navy relative overflow-hidden">
          <div className="section-navy-glow" />
          <div className="shell relative">
            <div className="max-w-[760px]">
              <SectionLabel>Product blueprints / 01–10</SectionLabel>
              <h2 className="section-title section-title--light mt-5">Ten specific places to start when “make a digital product” feels <span className="text-cobalt">too vague.</span></h2>
              <p className="section-copy section-copy--light mt-6">Each blueprint starts with a customer, a recurring job, a clear format, and a reason the product might be useful. Pick the one you can understand well enough to review.</p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {blueprints.map(([number, title, description, type], index) => (
                <article key={number} className={`blueprint-card ${index === 0 ? "blueprint-card--featured" : ""}`}>
                  <div className="flex items-start justify-between gap-3"><span className="blueprint-num">{number}</span><span className="blueprint-type">{type}</span></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="mt-auto pt-6 text-cobalt"><ArrowUpRight size={18} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-paper section-tint">
          <div className="shell grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <SectionLabel>Proof of usefulness</SectionLabel>
              <h2 className="section-title mt-5">The product gets specific where generic AI advice gets <span className="text-cobalt">fuzzy.</span></h2>
              <p className="section-copy mt-6">A prompt is not a product until it has context, constraints, and a usable output. The guide gives you the structure to make AI-assisted work more careful and more useful.</p>
              <div className="mt-9 flex flex-wrap gap-2">
                {['Customer', 'Task', 'Constraint', 'Output'].map((chip, index) => <span key={chip} className={`chip ${index === 2 ? 'chip--violet' : ''}`}>{String(index + 1).padStart(2, '0')} / {chip}</span>)}
              </div>
            </div>
            <div className="prompt-card">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-3"><span className="window-dots"><i /><i /><i /></span><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-100/55">prompt_07.txt</span></div><Sparkles size={16} className="text-cobalt" /></div>
              <p className="mt-7 font-mono text-[11px] leading-7 text-blue-100/60"><span className="text-cobalt">ROLE:</span> operations-template designer<br /><span className="text-cobalt">CONTEXT:</span> [customer] needs to complete [task]<br /><span className="text-cobalt">TASK:</span> create a minimum-field template<br /><span className="text-cobalt">CONSTRAINTS:</span> mobile-readable, bracketed placeholders,<br />no invented business or client details<br /><span className="text-violet-300">OUTPUT:</span> copy-ready template + field instructions</p>
              <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-blue-100/60"><Check size={15} className="text-cobalt" /> Structured for a real use moment</div>
            </div>
          </div>
        </section>

        <section id="launch" className="section-paper section-offset">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
              <div><SectionLabel>The first seven days</SectionLabel><h2 className="section-title mt-5">Launch like a researcher, not a <span className="text-cobalt">hype machine.</span></h2></div>
              <p className="section-copy lg:pb-2">The first week is for noticing what people understand, where they hesitate, and which examples make the product click. The guide gives you one useful action for every day.</p>
            </div>
            <div className="launch-rail mt-14">
              {[['01', 'Prepare', 'Test the file, write the offer, and show one useful page.'], ['02', 'Teach', 'Share one small lesson from the problem you solve.'], ['03', 'Preview', 'Show the buyer what the editable version feels like.'], ['04', 'Demo', 'Record blank input → customized outcome.'], ['05', 'Answer', 'Clarify fit, format, tools, and limitations.'], ['06', 'Use case', 'Describe a realistic moment without fake proof.'], ['07', 'Improve', 'Turn recurring questions into the next revision.']].map(([number, title, copy], index) => (
                <div className={`launch-step ${index === 6 ? 'launch-step--last' : ''}`} key={number}><span className="launch-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-navy section-navy--compact">
          <div className="shell grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div><SectionLabel>What’s in the box</SectionLabel><h2 className="section-title section-title--light mt-5">Not another list of ideas. A <span className="text-cobalt">first version system.</span></h2></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {['10 blueprints', '25 AI prompts', 'Validation checklist', 'One-page builder'].map((item, index) => <div key={item} className="box-item"><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}
            </div>
          </div>
        </section>

        <section className="section-paper section-tint">
          <div className="shell max-w-[1030px]">
            <div className="faq-stage">
              <div className="faq-margin-note">Field notes / read before you ship</div>
              <div><SectionLabel>Questions before you start</SectionLabel><h2 className="section-title mt-5">Clear on what it is. Clear on what it <span className="text-cobalt">isn’t.</span></h2></div>
              <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
                {faqs.map(([question, answer], index) => <div key={question} className="faq-row"><button className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-bold tracking-[-0.03em] text-ink sm:text-xl" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>{question}<ChevronDown size={20} className={`shrink-0 text-cobalt transition-transform ${openFaq === index ? 'rotate-180' : ''}`} /></button>{openFaq === index && <p className="max-w-[700px] pb-6 pr-10 text-[15px] leading-7 text-ink/65">{answer}</p>}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="buy" className="buy-section relative isolate overflow-hidden">
          <div className="buy-orbit buy-orbit--one" /><div className="buy-orbit buy-orbit--two" />
          <div className="buy-field-note">FINAL PAGE / START HERE</div>
          <div className="shell relative grid items-center gap-12 py-24 lg:grid-cols-[1fr_0.75fr] lg:py-32">
            <div><div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200"><SignalMark small /> Ready when you are</div><h2 className="mt-6 max-w-[720px] font-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.08em] text-white">Make the first version. <span className="text-cobalt">Then learn.</span></h2><p className="mt-7 max-w-[560px] text-lg leading-8 text-blue-100/70">A small, useful product is enough to start. The rest gets clearer when someone can actually see it, use it, and tell you what is missing.</p></div>
            <div className="buy-card"><div className="flex items-start justify-between gap-5"><div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-ink/45">AI SIDE HUSTLES / PDF</div><h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-[-0.05em]">The Field Guide</h3></div><FileText className="text-cobalt" size={26} /></div><div className="mt-7 flex items-end justify-between border-b border-ink/10 pb-6"><div><span className="font-display text-4xl font-bold tracking-[-0.06em]">$9–15</span><span className="ml-2 text-xs text-ink/50">suggested launch test</span></div><span className="rounded-full bg-cobalt/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-cobalt">35 pages</span></div><ul className="mt-6 space-y-3 text-sm text-ink/65"><li className="flex gap-3"><Check size={17} className="shrink-0 text-cobalt" /> Ten practical blueprints</li><li className="flex gap-3"><Check size={17} className="shrink-0 text-cobalt" /> Twenty-five structured prompts</li><li className="flex gap-3"><Check size={17} className="shrink-0 text-cobalt" /> Launch plan + printable worksheets</li></ul><a href="https://gumroad.com/" target="_blank" rel="noreferrer" className="button-dark mt-8 w-full justify-center group">Publish your version on Gumroad <ExternalLink size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><p className="mt-4 text-center text-[11px] leading-5 text-ink/40">Replace the button link with your live product URL before launch.</p></div>
          </div>
        </section>
      </main>

      <footer className="footer-shell"><div className="shell flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="flex items-center gap-3"><SignalMark small /><span className="font-display text-sm font-bold tracking-[-0.03em] text-white">AI SIDE HUSTLES</span></a><p className="text-xs text-white/40">A practical field guide for your first useful digital product.</p><div className="flex items-center gap-5 text-xs text-white/45"><a href="#inside" className="transition hover:text-white">Inside</a><a href="#blueprints" className="transition hover:text-white">Blueprints</a><a href="#buy" className="transition hover:text-white">Start</a></div></div></footer>
    </div>
  );
}
