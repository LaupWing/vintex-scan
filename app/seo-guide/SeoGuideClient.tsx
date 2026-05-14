"use client";

import { usePDF } from "react-to-pdf";

const sections = [
  {
    number: "01",
    title: "Zoekwoordenonderzoek voor Vintage",
    content: [
      {
        heading: "Denk zoals je klant, niet zoals een expert",
        body: "Mensen zoeken niet op 'art deco sieraad' — ze zoeken op 'oude gouden broche waarde' of 'vintage ring verkopen wat is het waard'. Gebruik de taal van je bezoeker, niet de taal van de kenner.",
      },
      {
        heading: "Gratis tools om mee te starten",
        body: "Google Search Console (nu opgezet) toont je al welke zoekwoorden bezoekers gebruiken. Gebruik daarnaast Google Suggest: typ een term in Google en kijk wat er automatisch verschijnt. Dit zijn echte zoekopdrachten van echte mensen.",
      },
      {
        heading: "Specifieke zoekwoorden voor VintexScan",
        body: "Richt je op long-tail zoekwoorden:\n• 'vintage horloge waarde bepalen'\n• 'antiek servies wat is het waard'\n• 'oude sieraden laten schatten'\n• 'vintage camera verkopen waarde'\n• 'tweedehands spullen inschatten'\n\nDeze zijn minder competitief dan algemene termen en trekken bezoekers die klaar zijn om actie te ondernemen.",
      },
    ],
  },
  {
    number: "02",
    title: "Blogstrategie: Content die Gevonden Wordt",
    content: [
      {
        heading: "Waarom blogs essentieel zijn voor VintexScan",
        body: "70% van alle Google-zoekopdrachten zijn long-tail vragen. Die worden beantwoord door blogteksten, niet door productpagina's. Elke blog is een extra ingang naar je site.",
      },
      {
        heading: "Onderwerpen die werken voor jouw niche",
        body: "• 'Hoe weet je of vintage sieraden echt goud zijn?'\n• 'Wat bepaalt de waarde van een antiek horloge?'\n• 'Vintage camera's: welke merken zijn het meest waard?'\n• 'Hoe herken je Delfts blauw aardewerk?'\n• 'Vintage kleding verkopen: wat is populair in 2026?'\n\nElke blog trekt een specifieke bezoeker met een specifieke vraag — en VintexScan geeft het antwoord.",
      },
      {
        heading: "Publicatieritmiek",
        body: "Begin met 1 blog per twee weken. Kwaliteit boven kwantiteit. Een grondige blog van 800 woorden doet meer dan 5 korte stukjes. Google beloont consistentie: een site die regelmatig publiceert wordt als 'actief' gezien.",
      },
    ],
  },
  {
    number: "03",
    title: "Backlinks: Autoriteit Opbouwen",
    content: [
      {
        heading: "Wat zijn backlinks en waarom tellen ze?",
        body: "Een backlink is een link van een andere website naar jouw site. Google ziet dit als een aanbeveling. Hoe meer kwalitatieve sites naar VintexScan linken, hoe hoger je rankt. Het is digitaal mond-tot-mondreclame.",
      },
      {
        heading: "Concrete manieren om backlinks te krijgen",
        body: "• Schrijf een gastblog op een vintage- of antiekplatform\n• Registreer VintexScan in relevante directories (Trustpilot, Google Business Profile)\n• Neem contact op met vintage blogs of YouTube-kanalen voor een vermelding\n• Deel je tool in Facebook-groepen over vintage en antiek\n• Word vermeld op forums als Marktplaats-community of Reddit r/vintage",
      },
      {
        heading: "Kwaliteit boven kwantiteit",
        body: "1 link van een gerespecteerde vintage-website is meer waard dan 100 links van willekeurige sites. Focus op relevantie: links uit de vintage/antiek wereld tellen het zwaarst voor VintexScan.",
      },
    ],
  },
  {
    number: "04",
    title: "Social Media als SEO-versterker",
    content: [
      {
        heading: "Social media rankt zelf ook",
        body: "Instagram- en Pinterest-posts verschijnen in Google-resultaten. Een actieve Instagram-pagina voor VintexScan zorgt voor extra zichtbaarheid buiten je eigen website.",
      },
      {
        heading: "Instagram strategie voor vintage",
        body: "Vintage is visueel — dat is jouw voordeel. Post:\n• 'Before/after' scans van vintage items\n• Korte Reels: 'Wat is dit waard?' met VintexScan-resultaat\n• Tips over het herkennen van echte vintage stukken\n• User-generated content: volgers die hun scan delen\n\nGebruik hashtags als #vintage #antiek #vintagewaarde #VintexScan.",
      },
      {
        heading: "Pinterest: onderschat kanaal",
        body: "Pinterest is een zoekmachine voor inspiratie en heeft een lange levensduur per post. Pin afbeeldingen van vintage categorieën met een link naar VintexScan. Ideaal voor 'what is my vintage worth' zoekopdrachten.",
      },
    ],
  },
  {
    number: "05",
    title: "Technische SEO: De Basis op Orde",
    content: [
      {
        heading: "Wat al gedaan is voor VintexScan",
        body: "✓ robots.txt geconfigureerd\n✓ sitemap.xml aangemaakt en ingediend bij Google\n✓ JSON-LD schema markup actief\n✓ Google Analytics 4 gekoppeld\n✓ Google Search Console geverifieerd\n✓ HTTPS actief",
      },
      {
        heading: "Wat je zelf in de gaten houdt",
        body: "• Controleer maandelijks Search Console op fouten\n• Houd 'Coverage' in de gaten: zijn alle pagina's geïndexeerd?\n• Bekijk in GA4 welke pagina's het meest bezocht worden\n• Reageer op Core Web Vitals meldingen als ze verschijnen",
      },
      {
        heading: "Pagina-titels en meta descriptions",
        body: "Elke pagina die je toevoegt aan VintexScan heeft een unieke titel en beschrijving nodig. De titel verschijnt in Google-resultaten — maak hem pakkend en relevant. Vermijd generieke titels als 'Pagina 1'.",
      },
    ],
  },
];

export default function SeoGuideClient() {
  const { toPDF, targetRef } = usePDF({
    filename: "VintexScan_SEO_Fundamentals_Gids.pdf",
    page: { margin: 20, format: "a4" },
  });

  return (
    <div className="min-h-screen bg-[#F5F0EA] font-sans">
      {/* Sticky nav — not included in PDF */}
      <div className="bg-[#111111] px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <div className="text-xl font-bold tracking-[0.12em] font-serif leading-none">
            <span className="text-[#C09A4E]">VINTEX</span>
            <span className="text-white">SCAN</span>
          </div>
          <div className="text-[9px] tracking-[0.25em] text-[#C09A4E]/70 uppercase mt-0.5">
            SEO Fundamentals Gids
          </div>
        </div>
        <button
          onClick={() => toPDF()}
          className="bg-[#C09A4E] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#a8843e] transition-colors"
        >
          Download PDF
        </button>
      </div>

      {/* PDF content */}
      <div ref={targetRef} className="bg-[#F5F0EA]">
        <div className="max-w-3xl mx-auto px-8 py-12">

          {/* Cover */}
          <div className="bg-[#111111] text-white px-12 py-16 mb-12">
            <div className="text-[#C09A4E] text-xs tracking-[0.3em] uppercase mb-6">VintexScan · Persoonlijke Gids</div>
            <h1 className="font-serif text-4xl font-bold leading-tight mb-4">
              SEO Fundamentals
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Hoe VintexScan hoger rankt in Google en meer bezoekers aantrekt — stap voor stap.
            </p>
            <div className="border-t border-white/10 pt-6 flex items-center justify-between">
              <div>
                <div className="text-white/40 text-xs tracking-widest uppercase mb-1">Opgesteld door</div>
                <div className="text-[#C09A4E] font-semibold">Loc Nguyen — Snelstack</div>
                <div className="text-white/50 text-sm">snelstack.com</div>
              </div>
              <div className="text-right">
                <div className="text-white/40 text-xs tracking-widest uppercase mb-1">Datum</div>
                <div className="text-white text-sm">Mei 2026</div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="mb-12">
            <p className="text-stone-600 text-base leading-relaxed mb-4">
              Deze gids is speciaal samengesteld voor <strong className="text-[#1a1a1a]">VintexScan.com</strong> — jouw tool voor het inschatten van vintage items. De technische basis staat. Nu gaat het om zichtbaarheid: gevonden worden door de juiste mensen op het juiste moment.
            </p>
            <p className="text-stone-600 text-base leading-relaxed">
              De tips in deze gids zijn gebaseerd op bewezen SEO-principes en praktijkervaring met Nederlandse websites. Voor verdieping, lees ook:{" "}
              <span className="text-[#C09A4E] font-medium">blog.snelstack.com/7-seo-fouten-die-je-maakt-en-hoe-ai-kan-helpen</span>{" "}
              en{" "}
              <span className="text-[#C09A4E] font-medium">blog.snelstack.com/6-seo-fouten-die-ik-vond-op-een-echte-webshop</span>.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.number} className="mb-12">
              <div className="flex items-baseline gap-4 mb-6 border-b border-[#C09A4E]/30 pb-3">
                <span className="font-serif text-[#C09A4E] text-3xl font-bold leading-none">{section.number}</span>
                <h2 className="font-serif text-xl font-bold text-[#1a1a1a]">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.content.map((item) => (
                  <div key={item.heading} className="bg-white px-6 py-5">
                    <h3 className="font-semibold text-[#1a1a1a] text-sm tracking-wide mb-2">{item.heading}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Action checklist */}
          <div className="bg-[#111111] text-white px-10 py-10 mb-12">
            <div className="text-[#C09A4E] text-xs tracking-[0.3em] uppercase mb-4">Actieplan</div>
            <h2 className="font-serif text-2xl font-bold mb-6">De eerste 90 dagen</h2>
            <div className="space-y-3">
              {[
                { week: "Week 1–2", task: "Google Analytics 4 + Search Console dagelijks checken. Bekijk welke pagina's bezocht worden." },
                { week: "Week 3–4", task: "Schrijf je eerste blog. Kies een zoekwoord uit de lijst in hoofdstuk 01." },
                { week: "Maand 2", task: "Maak een Instagram-account aan voor VintexScan. Post 3× per week een vintage item met scan-resultaat." },
                { week: "Maand 2–3", task: "Vraag 5 backlinks: registreer in directories, neem contact op met 2 vintage blogs." },
                { week: "Maand 3", task: "Evalueer in Search Console welke zoekwoorden verkeer brengen. Schrijf nieuwe blogs op basis van die data." },
              ].map((item) => (
                <div key={item.week} className="flex gap-4 items-start">
                  <span className="text-[#C09A4E] text-xs tracking-widest uppercase min-w-[80px] mt-0.5 font-medium">{item.week}</span>
                  <span className="text-white/80 text-sm leading-relaxed">{item.task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-stone-300 pt-8 flex items-start justify-between">
            <div>
              <div className="font-serif font-bold text-[#1a1a1a] mb-1">
                <span className="text-[#C09A4E]">VINTEX</span>SCAN
              </div>
              <div className="text-stone-500 text-xs">vintexscan.com</div>
            </div>
            <div className="text-right">
              <div className="text-stone-700 text-sm font-medium mb-1">Vragen? Neem contact op:</div>
              <div className="text-[#C09A4E] text-sm">Loc Nguyen — Snelstack</div>
              <div className="text-stone-500 text-xs">snelstack.com</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
