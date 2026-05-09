# VintexScan — MVP Oplevering

Hey Johan,

Hieronder een overzicht van alles wat er is opgeleverd, welke keuzes ik heb gemaakt en waarom, en wat de volgende stap is om dit echt live te zetten met AI.

---

## ✅ Wat je gevraagd hebt — wat er staat

| Jouw eis | Status |
|---|---|
| Clean premium uitstraling | ✅ |
| Mobile first | ✅ |
| Snelle en soepele gebruikerservaring | ✅ |
| Afbeelding altijd zichtbaar houden | ✅ |
| Geen page refreshes | ✅ |
| Flow: upload → analyzing → resultaat | ✅ |
| Moderne AI-tool uitstraling | ✅ |
| Resultaat zichtbaar binnen 2–3 seconden | ✅ |
| Makkelijk koppelbaar aan echte AI/API | ✅ |

---

## ➕ Extra's — meer dan gevraagd

Dit zijn keuzes die ik zelf heb gemaakt, los van wat je hebt gevraagd. Kleine details die het verschil maken tussen een tool die eruitziet als een side-project en een tool die aanvoelt als een serieus product.

### 1. De uploadpagina verdwijnt na gebruik
Zodra je een foto uploadt, verdwijnt de hero-sectie (de grote kop met de uploadknop) volledig. Je ziet daarna alleen nog het resultaat. Dit klinkt simpel, maar de meeste tools laten alles staan waardoor het scherm rommelig aanvoelt. Hier is de focus 100% op jouw scan.

### 2. Teller loopt op bij het resultaat
De geschatte waarde telt op van €0 naar het eindgetal. De confidence-balk schuift van links naar rechts. Dit zijn micro-animaties — ze kosten minder dan een uur om te bouwen maar voegen een "wauw-moment" toe dat gebruikers onthouden. Apps als Revolut en Duolingo zijn hier groot mee geworden.

### 3. Bevestiging bij een succesvolle scan
Rechtsonder verschijnt een kleine melding: *"Scan complete · Leather jacket · €100–€250"*. Kleine bevestiging, grote UX-winst. Gebruikers willen weten dat iets gelukt is zonder dat ze het scherm af moeten zoeken.

### 4. Skeleton-schermen tijdens het laden
Terwijl de AI werkt zie je grijze blokken op de plek waar straks de naam, categorie, prijs en confidence komen. Dit heet een "skeleton loader" — het is de standaard aanpak bij Netflix, LinkedIn en Airbnb. Het voelt sneller aan dan een lege pagina of een spinner alleen.

### 5. Professionele UI-component bibliotheek
De knoppen, badges en meldingen zijn gebouwd met **shadcn/ui** — een open-source bibliotheek die gebruikt wordt door bedrijven als Vercel (de makers van Next.js), Linear en Resend. Dit betekent dat elk interactief element automatisch toegankelijk is voor mensen met een beperking, correct werkt op toetsenbord, en consistent is in stijl. Geen zelfgebakken knoppen die na drie updates beginnen te breken.

### 6. Drag & drop
Naast de knop kun je ook een foto direct op het scherm slepen. Standaard verwachting voor moderne webtools.

---

## 🤖 API-aanbeveling — zo koppel je de echte AI

Op dit moment geeft de tool een nep-resultaat terug na 2,5 seconden. De interface is volledig klaar — er hoeft alleen nog maar één functie vervangen te worden door een echte API-call.

**Mijn aanbeveling: GPT-4o van OpenAI (Vision)**

Dit is hetzelfde model achter ChatGPT. Het kan afbeeldingen begrijpen en analyseren. Wat het doet:
- Herkent het vintage item op de foto
- Geeft een naam, categorie en prijsschatting terug
- Doet dit in een gestructureerd formaat dat de interface direct kan gebruiken

**Hoe het werkt (zonder technisch jargon):**
1. Gebruiker uploadt een foto
2. De foto gaat naar jouw server
3. Jouw server stuurt de foto naar OpenAI
4. OpenAI stuurt een JSON-antwoord terug (naam, prijs, confidence)
5. De interface toont het resultaat

De instructies hiervoor staan al uitgeschreven in de code — een backend-developer hoeft alleen maar die stappen te volgen. Er is geen ruimte voor interpretatie.

**Kosten OpenAI:**
- Ca. €0,01–0,03 per scan (afhankelijk van afbeeldingsgrootte)
- Bij 1.000 scans per maand: ca. €10–30/maand aan API-kosten

---

## 🗄️ Database-aanbeveling — gebruikers, scans en history

Zodra de echte AI erin zit, wil je ook bijhouden wie wat scant. Daarvoor heb je een database en een inlogsysteem nodig.

**Mijn aanbeveling: Supabase**

Supabase is de meest gebruikte database-oplossing voor dit type AI-tools. Het wordt gebruikt door duizenden startups en is gebouwd op PostgreSQL — de gouden standaard voor databases.

Wat Supabase regelt:
- **Authenticatie** — gebruikers kunnen inloggen via e-mail, Google of Apple. Geen wachtwoord-gedoe zelf bouwen.
- **Database** — elke scan wordt opgeslagen: foto, resultaat, datum, gebruiker.
- **Scan-history** — gebruikers zien hun vorige scans terug in een overzicht.
- **Beveiliging** — toegangsregels zijn ingebouwd, niemand kan andermans scans zien.

**Wat dit mogelijk maakt voor VintexScan:**
- Gebruikers aanmaken en beheren
- Scan-limieten instellen (bijv. 3 gratis scans, daarna betaald)
- Een dashboard voor jou als eigenaar: hoeveel scans per dag, welke items, populaire categorieën
- Later: premium abonnementen, scan-history exporteren, etc.

**Kosten Supabase:**
- Gratis tot 50.000 gebruikers en 500MB database
- Pro plan: €25/maand — meer dan genoeg voor een groeiende MVP

---

## 🐙 GitHub — jouw code, jouw eigendom

De volledige code staat op GitHub: [github.com/LaupWing/vintex-scan](https://github.com/LaupWing/vintex-scan)

**Live preview (tijdelijk):** [vintex-scan.vercel.app](https://vintex-scan.vercel.app/)

Heb je nog geen GitHub-account? **Ik maak er gratis een aan voor je.** Dan staat de repository op jouw naam en heb jij altijd volledige toegang en eigenaarschap over de code — ongeacht wie er verder aan werkt.

Stuur me even je gewenste gebruikersnaam en e-mailadres, dan regel ik het.

---

## 🚀 Volgende stap

De frontend staat. Het enige wat ontbreekt is de echte AI-koppeling (backend + OpenAI). Dat is **fase 2** — wil je dat ik ook dat oppak?

Groet,
Loc
