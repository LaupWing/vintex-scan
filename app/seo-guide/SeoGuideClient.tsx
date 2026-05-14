"use client";

import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
  { ssr: false, loading: () => <span className="text-white/50 text-xs">Laden...</span> }
);

import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

const gold = "#C09A4E";
const dark = "#111111";
const cream = "#F5F0EA";
const gray = "#6b6b6b";
const lightGray = "#d4d4d4";
const white = "#ffffff";

const styles = StyleSheet.create({
  page: { backgroundColor: cream, paddingHorizontal: 48, paddingVertical: 48, fontFamily: "Helvetica" },
  // Cover
  cover: { backgroundColor: dark, padding: 40, marginBottom: 32 },
  coverLabel: { color: gold, fontSize: 7, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 },
  coverTitle: { color: white, fontSize: 28, fontFamily: "Helvetica-Bold", marginBottom: 10 },
  coverSubtitle: { color: "#aaaaaa", fontSize: 12, lineHeight: 1.6, marginBottom: 24 },
  coverDivider: { borderTopWidth: 1, borderTopColor: "#333333", paddingTop: 16, flexDirection: "row", justifyContent: "space-between" },
  coverMetaLabel: { color: "#666666", fontSize: 6, letterSpacing: 2, textTransform: "uppercase", marginBottom: 3 },
  coverMetaValue: { color: gold, fontSize: 10, fontFamily: "Helvetica-Bold" },
  coverMetaSub: { color: "#888888", fontSize: 9 },
  // Intro
  introText: { color: gray, fontSize: 10, lineHeight: 1.7, marginBottom: 8 },
  introBold: { color: dark, fontFamily: "Helvetica-Bold" },
  introGold: { color: gold, fontFamily: "Helvetica-Bold" },
  introBlock: { marginBottom: 28 },
  // Section
  sectionWrap: { marginBottom: 28 },
  sectionHeader: { flexDirection: "row", alignItems: "flex-end", borderBottomWidth: 1, borderBottomColor: gold, paddingBottom: 6, marginBottom: 14 },
  sectionNumber: { color: gold, fontSize: 22, fontFamily: "Helvetica-Bold", marginRight: 10, lineHeight: 1 },
  sectionTitle: { color: dark, fontSize: 14, fontFamily: "Helvetica-Bold" },
  card: { backgroundColor: white, padding: 14, marginBottom: 10 },
  cardHeading: { color: dark, fontSize: 9, fontFamily: "Helvetica-Bold", letterSpacing: 0.5, marginBottom: 5 },
  cardBody: { color: gray, fontSize: 9, lineHeight: 1.65 },
  // Action plan
  actionBlock: { backgroundColor: dark, padding: 32, marginBottom: 28 },
  actionLabel: { color: gold, fontSize: 7, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 },
  actionTitle: { color: white, fontSize: 16, fontFamily: "Helvetica-Bold", marginBottom: 18 },
  actionRow: { flexDirection: "row", marginBottom: 10 },
  actionWeek: { color: gold, fontSize: 7, letterSpacing: 1.5, textTransform: "uppercase", width: 56, marginTop: 1, fontFamily: "Helvetica-Bold" },
  actionTask: { color: "#cccccc", fontSize: 9, lineHeight: 1.6, flex: 1 },
  // Footer
  footer: { borderTopWidth: 1, borderTopColor: lightGray, paddingTop: 20, flexDirection: "row", justifyContent: "space-between" },
  footerLogo: { color: dark, fontSize: 12, fontFamily: "Helvetica-Bold" },
  footerLogoGold: { color: gold },
  footerSub: { color: gray, fontSize: 8 },
  footerRight: { alignItems: "flex-end" },
  footerRightLabel: { color: dark, fontSize: 9, fontFamily: "Helvetica-Bold", marginBottom: 2 },
  footerRightGold: { color: gold, fontSize: 9 },
});

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
        body: "Richt je op long-tail zoekwoorden:\n• 'vintage horloge waarde bepalen'\n• 'antiek servies wat is het waard'\n• 'oude sieraden laten schatten'\n• 'vintage camera verkopen waarde'\n• 'tweedehands spullen inschatten'\n\nDeze zijn minder competitief en trekken bezoekers die klaar zijn om actie te ondernemen.",
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
        body: "• 'Hoe weet je of vintage sieraden echt goud zijn?'\n• 'Wat bepaalt de waarde van een antiek horloge?'\n• 'Vintage camera's: welke merken zijn het meest waard?'\n• 'Hoe herken je Delfts blauw aardewerk?'\n• 'Vintage kleding verkopen: wat is populair in 2026?'",
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
        body: "Een backlink is een link van een andere website naar jouw site. Google ziet dit als een aanbeveling. Hoe meer kwalitatieve sites naar VintexScan linken, hoe hoger je rankt.",
      },
      {
        heading: "Concrete manieren om backlinks te krijgen",
        body: "• Schrijf een gastblog op een vintage- of antiekplatform\n• Registreer VintexScan in directories (Trustpilot, Google Business Profile)\n• Neem contact op met vintage blogs of YouTube-kanalen voor een vermelding\n• Deel je tool in Facebook-groepen over vintage en antiek\n• Word vermeld op forums als Marktplaats-community of Reddit r/vintage",
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
        body: "Post:\n• 'Before/after' scans van vintage items\n• Korte Reels: 'Wat is dit waard?' met VintexScan-resultaat\n• Tips over het herkennen van echte vintage stukken\n• User-generated content: volgers die hun scan delen\n\nGebruik hashtags als #vintage #antiek #vintagewaarde #VintexScan.",
      },
      {
        heading: "Pinterest: onderschat kanaal",
        body: "Pinterest is een zoekmachine voor inspiratie en heeft een lange levensduur per post. Pin afbeeldingen van vintage categorieën met een link naar VintexScan.",
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
        body: "• Controleer maandelijks Search Console op fouten\n• Houd 'Coverage' in de gaten: zijn alle pagina's geïndexeerd?\n• Bekijk in GA4 welke pagina's het meest bezocht worden",
      },
      {
        heading: "Pagina-titels en meta descriptions",
        body: "Elke pagina die je toevoegt heeft een unieke titel en beschrijving nodig. De titel verschijnt in Google-resultaten — maak hem pakkend en relevant. Vermijd generieke titels als 'Pagina 1'.",
      },
    ],
  },
];

const actionItems = [
  { week: "Week 1–2", task: "Google Analytics 4 + Search Console dagelijks checken. Bekijk welke pagina's bezocht worden." },
  { week: "Week 3–4", task: "Schrijf je eerste blog. Kies een zoekwoord uit de lijst in hoofdstuk 01." },
  { week: "Maand 2", task: "Maak een Instagram-account aan voor VintexScan. Post 3× per week een vintage item met scan-resultaat." },
  { week: "Maand 2–3", task: "Vraag 5 backlinks: registreer in directories, neem contact op met 2 vintage blogs." },
  { week: "Maand 3", task: "Evalueer in Search Console welke zoekwoorden verkeer brengen. Schrijf nieuwe blogs op basis van die data." },
];

function SeoGuidePDF() {
  return (
    <Document title="VintexScan SEO Fundamentals Gids">
      <Page size="A4" style={styles.page}>
        {/* Cover */}
        <View style={styles.cover}>
          <Text style={styles.coverLabel}>VintexScan · Persoonlijke Gids</Text>
          <Text style={styles.coverTitle}>SEO Fundamentals</Text>
          <Text style={styles.coverSubtitle}>
            Hoe VintexScan hoger rankt in Google en meer bezoekers aantrekt — stap voor stap.
          </Text>
          <View style={styles.coverDivider}>
            <View>
              <Text style={styles.coverMetaLabel}>Opgesteld door</Text>
              <Text style={styles.coverMetaValue}>Loc Nguyen — Snelstack</Text>
              <Text style={styles.coverMetaSub}>snelstack.com</Text>
            </View>
            <View>
              <Text style={styles.coverMetaLabel}>Datum</Text>
              <Text style={[styles.coverMetaSub, { color: white }]}>Mei 2026</Text>
            </View>
          </View>
        </View>

        {/* Intro */}
        <View style={styles.introBlock}>
          <Text style={styles.introText}>
            Deze gids is speciaal samengesteld voor VintexScan.com — jouw tool voor het inschatten van vintage items. De technische basis staat. Nu gaat het om zichtbaarheid: gevonden worden door de juiste mensen op het juiste moment.
          </Text>
          <Text style={styles.introText}>
            Voor verdieping, lees ook: blog.snelstack.com/7-seo-fouten-die-je-maakt-en-hoe-ai-kan-helpen en blog.snelstack.com/6-seo-fouten-die-ik-vond-op-een-echte-webshop
          </Text>
        </View>

        {/* Sections 01–02 */}
        {sections.slice(0, 2).map((section) => (
          <View key={section.number} style={styles.sectionWrap}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>{section.number}</Text>
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            {section.content.map((item) => (
              <View key={item.heading} style={styles.card}>
                <Text style={styles.cardHeading}>{item.heading}</Text>
                <Text style={styles.cardBody}>{item.body}</Text>
              </View>
            ))}
          </View>
        ))}
      </Page>

      <Page size="A4" style={styles.page}>
        {/* Sections 03–05 */}
        {sections.slice(2).map((section) => (
          <View key={section.number} style={styles.sectionWrap}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionNumber}>{section.number}</Text>
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            {section.content.map((item) => (
              <View key={item.heading} style={styles.card}>
                <Text style={styles.cardHeading}>{item.heading}</Text>
                <Text style={styles.cardBody}>{item.body}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Action plan */}
        <View style={styles.actionBlock}>
          <Text style={styles.actionLabel}>Actieplan</Text>
          <Text style={styles.actionTitle}>De eerste 90 dagen</Text>
          {actionItems.map((item) => (
            <View key={item.week} style={styles.actionRow}>
              <Text style={styles.actionWeek}>{item.week}</Text>
              <Text style={styles.actionTask}>{item.task}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerLogo}>
              <Text style={styles.footerLogoGold}>VINTEX</Text>SCAN
            </Text>
            <Text style={styles.footerSub}>vintexscan.com</Text>
          </View>
          <View style={styles.footerRight}>
            <Text style={styles.footerRightLabel}>Vragen? Neem contact op:</Text>
            <Text style={styles.footerRightGold}>Loc Nguyen — Snelstack</Text>
            <Text style={styles.footerSub}>snelstack.com</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default function SeoGuideClient() {
  return (
    <div className="min-h-screen bg-[#F5F0EA] font-sans">
      {/* Nav */}
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
        <PDFDownloadLink
          document={<SeoGuidePDF />}
          fileName="VintexScan_SEO_Fundamentals_Gids.pdf"
          className="bg-[#C09A4E] text-white text-xs tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-[#a8843e] transition-colors"
        >
          Download PDF
        </PDFDownloadLink>
      </div>

      {/* Preview content */}
      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="bg-[#111111] text-white px-12 py-16 mb-12">
          <div className="text-[#C09A4E] text-xs tracking-[0.3em] uppercase mb-6">VintexScan · Persoonlijke Gids</div>
          <h1 className="font-serif text-4xl font-bold leading-tight mb-4">SEO Fundamentals</h1>
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

        <div className="mb-12">
          <p className="text-[#6b6b6b] text-base leading-relaxed mb-4">
            Deze gids is speciaal samengesteld voor <strong className="text-[#1a1a1a]">VintexScan.com</strong>.
            De technische basis staat. Nu gaat het om zichtbaarheid.
          </p>
          <p className="text-[#6b6b6b] text-base leading-relaxed">
            Voor verdieping:{" "}
            <span className="text-[#C09A4E] font-medium">blog.snelstack.com/7-seo-fouten-die-je-maakt-en-hoe-ai-kan-helpen</span>
          </p>
        </div>

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
                  <p className="text-[#6b6b6b] text-sm leading-relaxed whitespace-pre-line">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-[#111111] text-white px-10 py-10 mb-12">
          <div className="text-[#C09A4E] text-xs tracking-[0.3em] uppercase mb-4">Actieplan</div>
          <h2 className="font-serif text-2xl font-bold mb-6">De eerste 90 dagen</h2>
          <div className="space-y-3">
            {actionItems.map((item) => (
              <div key={item.week} className="flex gap-4 items-start">
                <span className="text-[#C09A4E] text-xs tracking-widest uppercase min-w-[80px] mt-0.5 font-medium">{item.week}</span>
                <span className="text-white/80 text-sm leading-relaxed">{item.task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#d4d4d4] pt-8 flex items-start justify-between">
          <div>
            <div className="font-serif font-bold text-[#1a1a1a] mb-1">
              <span className="text-[#C09A4E]">VINTEX</span>SCAN
            </div>
            <div className="text-[#737373] text-xs">vintexscan.com</div>
          </div>
          <div className="text-right">
            <div className="text-[#404040] text-sm font-medium mb-1">Vragen? Neem contact op:</div>
            <div className="text-[#C09A4E] text-sm">Loc Nguyen — Snelstack</div>
            <div className="text-[#737373] text-xs">snelstack.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
