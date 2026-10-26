// Golden Paradise Salon — English / Albanian (Shqip) language switcher
//
// How it works:
// - Plain text is translated by exact match: any text on the page that equals
//   an English entry in SQ.text is swapped for its Albanian version.
// - Text that contains markup (line breaks, italics) uses a data-i18n="key"
//   attribute on the element, translated from SQ.html.
// To add or fix a translation, edit the lists below.

var SQ = {
  titles: {
    'Golden Paradise Salon | Luxury Hair & Beauty Studio': 'Golden Paradise Salon | Studio Luksoze Flokësh & Bukurie',
    'Services | Golden Paradise Salon': 'Shërbimet | Golden Paradise Salon',
    'About Us | Golden Paradise Salon': 'Rreth Nesh | Golden Paradise Salon',
    'Gallery | Golden Paradise Salon': 'Galeria | Golden Paradise Salon',
    'Contact & Booking | Golden Paradise Salon': 'Kontakt & Rezervime | Golden Paradise Salon'
  },

  html: {
    'home.h1': 'Ku bukuria<br>takon <em class="text-shimmer">parajsën</em>',
    'home.services.h2': 'Shërbimet <em>tona</em>',
    'home.quote': 'Bukuria fillon në çastin kur vendos të jesh <em>vetvetja</em>.',
    'home.story.h2': 'Një studio e ndërtuar mbi mjeshtëri, kujdes dhe <em>qetësi</em>',
    'home.cta.h2': 'Gati për një <em>ditë të bukur flokësh?</em>',
    'services.h1': 'Katër mënyra për të <em class="text-shimmer">shkëlqyer</em>',
    'services.cta.h2': 'Nuk e dini <em>çfarë ju duhet?</em>',
    'about.h1': 'Bukuri, e krijuar <em class="text-shimmer">për ju</em>',
    'about.story.h2': 'Një sallon më i qetë dhe më <em>personal</em>',
    'about.values.h2': 'Premtimi <em>ynë</em>',
    'about.team.h2': 'Artistë për çdo <em>detaj</em>',
    'about.ig.h2': 'Shihni më shumë në <em>Instagram</em>',
    'about.cta.h2': 'Ejani ta shihni studion <em>vetë</em>',
    'gallery.h1': 'Bukuri në <em class="text-shimmer">çdo detaj</em>',
    'gallery.cta.h2': 'Ju pëlqen ajo që <em>shihni?</em>',
    'contact.h1': 'Le t\'ju bëjmë të <em class="text-shimmer">shkëlqeni</em>',
    'contact.form.h2': 'Na tregoni çfarë <em>dëshironi</em>',
    'nano.h2': 'Arti i <em>Nanoplastisë</em>'
  },

  text: {
    // Header, menu & footer (all pages)
    'Services': 'Shërbimet',
    'About': 'Rreth nesh',
    'Gallery': 'Galeria',
    'Contact': 'Kontakt',
    'Book Now': 'Rezervo tani',
    'A hair and beauty studio dedicated to expert craft and an elevated guest experience.': 'Një studio flokësh dhe bukurie, e përkushtuar ndaj mjeshtërisë dhe një përvoje të veçantë për çdo klient.',
    'A luxury hair and beauty studio dedicated to expert craft and an elevated guest experience.': 'Një studio luksoze flokësh dhe bukurie, e përkushtuar ndaj mjeshtërisë dhe një përvoje të veçantë për çdo klient.',
    'Explore': 'Eksploro',
    'Hours': 'Orari',
    'Wed – Mon': 'Mër – Hën',
    'Tuesday': 'E martë',
    '9am – 7pm': '9:00 – 19:00',
    'Closed': 'Mbyllur',
    '© 2026 Golden Paradise Salon. All rights reserved.': '© 2026 Golden Paradise Salon. Të gjitha të drejtat e rezervuara.',
    'Designed with care for beautiful hair.': 'Krijuar me kujdes për flokë të bukura.',

    // Service categories & services (used on several pages)
    'Hair': 'Flokë',
    'Nails': 'Thonj',
    'Lashes & Brows': 'Qerpikë & Vetulla',
    'Nanoplasty': 'Nanoplasti',
    'Balayage': 'Balayage',
    'Hair Colour': 'Ngjyrosje flokësh',
    'Professional Makeup': 'Make-up profesional',
    'Manicure': 'Manikyr',
    'Pedicure': 'Pedikyr',
    'Professional Treatments': 'Trajtime profesionale',
    'Lash Lift': 'Lash lift',
    'Lash Lift & Brows': 'Lash lift & Vetulla',
    'Microblading': 'Microblading',
    'Microblading & Brows': 'Microblading & Vetulla',
    'Lymphatic Drainage': 'Limfodrenazh',
    'Anti-Cellulite': 'Anticelulit',
    'Face Lifting Massage': 'Masazh lifting fytyre',
    'Relax Massage': 'Masazh relax',
    'Request an Appointment': 'Kërkoni një rezervim',

    // Nanoplasty spotlight (homepage + services)
    'Signature Treatment': 'Trajtimi ynë kryesor',
    'Our signature hair treatment. Nanoplasty uses nano-sized molecules of amino acids and nourishing actives that penetrate deep into the hair fibre, repairing it from within and leaving it smooth, soft and full of shine.': 'Trajtimi ynë kryesor për flokët. Nanoplastia përdor molekula në madhësi nano të aminoacideve dhe përbërësve ushqyes, që depërtojnë thellë në fijen e flokut, e riparojnë nga brenda dhe e lënë të lëmuar, të butë dhe plot shkëlqim.',
    '2–4 hours': '2–4 orë',
    'Treatment time': 'Kohëzgjatja e trajtimit',
    'Up to 6 months': 'Deri në 6 muaj',
    'Long-lasting results': 'Rezultate afatgjata',
    'All hair types': 'Çdo lloj flokësh',
    'Incl. coloured & blonde': 'Edhe të ngjyrosura & bjonde',
    'Book Nanoplasty': 'Rezervo Nanoplastinë',
    'See our results': 'Shihni rezultatet tona',
    'Discover Nanoplasty': 'Zbuloni Nanoplastinë',
    'Frizz-free, silky hair': 'Flokë të lëmuara si mëndafshi, pa fryrje',
    'Tames frizz and unruly volume for a sleek, polished look — even on humid days.': 'Zbut fryrjen dhe volumin e tepërt për një pamje të lëmuar dhe elegante — edhe në ditët me lagështi.',
    'Mirror-like shine': 'Shkëlqim si pasqyrë',
    'A smoother hair surface reflects light for a healthy, glass-like gloss.': 'Sipërfaqja e lëmuar e flokut reflekton dritën për një shkëlqim të shëndetshëm, si xhami.',
    'Deep repair from within': 'Riparim i thellë nga brenda',
    'Nano-molecules fill damaged areas of the hair fibre, restoring strength, softness and elasticity.': 'Molekulat nano mbushin pjesët e dëmtuara të fijes së flokut dhe i rikthejnë forcën, butësinë dhe elasticitetin.',
    'Defined, healthy curls': 'Kaçurrela të përcaktuara dhe të shëndetshme',
    'Curly hair stays curly — just softer, more defined and free of frizz.': 'Flokët kaçurrela mbeten kaçurrela — vetëm më të butë, më të përcaktuar dhe pa fryrje.',
    'Before': 'Para',
    'After': 'Pas',
    'How it works': 'Si funksionon',
    'Consultation': 'Konsultimi',
    'We look at your hair\'s condition and the result you want.': 'Vlerësojmë gjendjen e flokëve tuaj dhe rezultatin që dëshironi.',
    'Deep cleanse': 'Larje e thellë',
    'A clarifying wash prepares the hair to absorb the treatment.': 'Një larje pastruese i përgatit flokët për të thithur trajtimin.',
    'Application': 'Aplikimi',
    'The nanoplasty formula is applied strand by strand and left to work.': 'Formula e nanoplastisë aplikohet tufë pas tufe dhe lihet të veprojë.',
    'Seal & shine': 'Fiksim & shkëlqim',
    'A blow-dry and flat iron seal the treatment in for a smooth, glossy finish.': 'Fëni dhe pllaka e fiksojnë trajtimin për një rezultat të lëmuar dhe me shkëlqim.',
    'Aftercare tip: use a sulphate-free shampoo to make your results last longer.': 'Këshillë: përdorni shampo pa sulfate që rezultati të zgjasë më shumë.',

    // Homepage
    'Golden Paradise · Hair & Beauty Studio': 'Golden Paradise · Studio Flokësh & Bukurie',
    'Step into a golden-lit sanctuary where every cut, color, and treatment is crafted to leave you feeling radiant, relaxed, and entirely transformed.': 'Hyni në një strehë të ndriçuar në ar, ku çdo prerje, ngjyrosje dhe trajtim krijohet që të ndiheni rrezatuese, të çlodhur dhe plotësisht të transformuar.',
    'Book Your Appointment': 'Rezervoni takimin tuaj',
    'Explore Our Services': 'Zbuloni shërbimet tona',
    'Loved by our guests': 'Të vlerësuar nga klientët',
    'By appointment': 'Me rezervim',
    'BOOK NOW · GOLDEN PARADISE ·': 'REZERVO · GOLDEN PARADISE ·',
    'What We Do': 'Çfarë bëjmë',
    'From hair and nails to lashes and body care, every service is a tailored ritual — not a rush job.': 'Nga flokët dhe thonjtë te qerpikët dhe kujdesi për trupin, çdo shërbim është një ritual i personalizuar — jo një punë me nxitim.',
    'Our Story': 'Historia jonë',
    'Golden Paradise Salon was founded on a simple idea: a salon visit should feel restorative, not rushed. Our stylists train continuously in the latest cutting, color, and treatment techniques so every guest leaves looking — and feeling — their best.': 'Golden Paradise Salon u themelua mbi një ide të thjeshtë: një vizitë në sallon duhet t\'ju rigjallërojë, jo t\'ju nxitojë. Stilistët tanë trajnohen vazhdimisht në teknikat më të reja të prerjes, ngjyrosjes dhe trajtimeve, që çdo klient të largohet duke u dukur — dhe duke u ndier — në formën më të mirë.',
    'Step inside our warm, gold-lit studio and let our team craft a look that\'s entirely yours.': 'Hyni në studion tonë të ngrohtë, të ndriçuar në ar, dhe lërini ekipit tonë t\'ju krijojë një pamje krejtësisht tuajën.',
    'Meet Our Team': 'Njihuni me ekipin',
    'Your chair is waiting': 'Karrigia juaj ju pret',
    'Reserve your spot with one of our stylists — appointments fill quickly.': 'Rezervoni vendin tuaj me një nga stilistët tanë — vendet plotësohen shpejt.',
    'Call 067 628 9840': 'Telefononi 067 628 9840',

    // Services page
    'Our Menu': 'Menuja jonë',
    'Hair, nails, lashes and body treatments — each one a ritual designed around you.': 'Flokë, thonj, qerpikë dhe trajtime trupi — secili një ritual i krijuar për ju.',
    'Restorative treatments, dimensional colour and flawless makeup — all under one roof.': 'Trajtime rigjeneruese, ngjyra me dimension dhe make-up i përsosur — të gjitha në një vend.',
    'Polished, healthy hands and feet, finished with care and precision.': 'Duar dhe këmbë të kujdesura e të shëndetshme, të përfunduara me shumë kujdes.',
    'Lifted lashes and defined brows that frame your face naturally.': 'Qerpikë të ngritur dhe vetulla të përcaktuara që e kornizojnë fytyrën tuaj natyrshëm.',
    'Sculpting and relaxing treatments that leave body and face renewed.': 'Trajtime formësuese dhe relaksuese që e lënë trupin dhe fytyrën të rinovuar.',
    'Book': 'Rezervo',
    'Nanoplasty · Balayage · Hair Colour · Professional Makeup': 'Nanoplasti · Balayage · Ngjyrosje flokësh · Make-up profesional',
    'Manicure · Pedicure · Professional Treatments': 'Manikyr · Pedikyr · Trajtime profesionale',
    'Lash Lift & Brows · Microblading & Brows': 'Lash lift & Vetulla · Microblading & Vetulla',
    'Lymphatic Drainage · Anti-Cellulite · Face Lifting · Relax Massage': 'Limfodrenazh · Anticelulit · Lifting fytyre · Masazh relax',
    'Free consultation': 'Konsultim falas',
    'A smoothing treatment that reduces frizz and restores softness and shine.': 'Trajtim drejtues që pakëson fryrjen e flokëve dhe rikthen butësinë dhe shkëlqimin.',
    'Hand-painted, natural-looking color with a soft grow-out.': 'Ngjyrë e pikturuar me dorë, me pamje natyrale dhe rritje të butë.',
    'Full color, root touch-ups, and tone refreshes.': 'Ngjyrosje e plotë, ngjyrosje rrënjësh dhe rifreskim i tonit.',
    'Makeup for weddings, events, and special occasions.': 'Make-up për dasma, evente dhe raste të veçanta.',
    'Shaping, cuticle care, and polish for beautiful hands.': 'Kujdes i plotë për thonjtë dhe kutikulat, me ngjyrën që dëshironi, për duar të bukura.',
    'Relaxing foot care with shaping and polish.': 'Kujdes relaksues për këmbët dhe thonjtë, me ngjyrën që dëshironi.',
    'Strengthening and restorative treatments for healthy nails.': 'Trajtime forcuese dhe rigjeneruese për thonj të shëndetshëm.',
    'Lifted, curled lashes paired with beautifully shaped brows.': 'Qerpikë të ngritur dhe të përkulur, me vetulla të formësuara bukur.',
    'Semi-permanent, hair-stroke brows for natural fullness.': 'Vetulla gjysmë të përhershme me teknikën qime-qime, për një pamje të plotë dhe natyrale.',
    'A gentle massage that reduces swelling and supports circulation.': 'Masazh i butë që pakëson ënjtjen dhe nxit qarkullimin.',
    'A targeted treatment to smooth and firm the skin.': 'Trajtim i synuar për të lëmuar dhe forcuar lëkurën.',
    'A toning facial massage that lifts and refreshes.': 'Masazh tonifikues i fytyrës që ngre dhe rifreskon.',
    'A calming full-body massage to release tension.': 'Masazh qetësues i gjithë trupit për të liruar tensionin.',
    'Prices vary by treatment. Contact us for a personalised quote.': 'Çmimet ndryshojnë sipas trajtimit. Na kontaktoni për një ofertë të personalizuar.',
    'Not sure what you need?': 'Nuk e dini çfarë ju duhet?',
    'Book a complimentary consultation and we\'ll help you choose the right service.': 'Rezervoni një konsultim falas dhe ne do t\'ju ndihmojmë të zgjidhni shërbimin e duhur.',

    // About page
    'About Us': 'Rreth nesh',
    'Golden Paradise Salon is a hair and beauty studio where every guest is welcomed, listened to, and cared for — from the first consultation to the final touch.': 'Golden Paradise Salon është një studio flokësh dhe bukurie ku çdo klient mirëpritet, dëgjohet dhe kujdeset — nga konsultimi i parë deri te prekja e fundit.',
    'Book a Visit': 'Rezervoni një vizitë',
    'Our Services': 'Shërbimet tona',
    'Golden Paradise Salon opened its doors with a clear mission: create a studio where guests feel genuinely cared for, not rushed through an appointment.': 'Golden Paradise Salon hapi dyert me një mision të qartë: të krijojë një studio ku klientët ndihen vërtet të kujdesur, jo të nxituar gjatë takimit.',
    'Today our artists cover hair, nails, lashes and brows, and body treatments — all under one roof, all with the same attention to detail.': 'Sot artistët tanë kujdesen për flokët, thonjtë, qerpikët e vetullat dhe trajtimet e trupit — të gjitha në një vend, me të njëjtin kujdes për çdo detaj.',
    'Every stylist on our team trains continuously in modern cutting, color, and treatment techniques, so you always leave with a look that\'s current, healthy, and unmistakably yours.': 'Çdo stilist në ekipin tonë trajnohet vazhdimisht në teknikat moderne të prerjes, ngjyrosjes dhe trajtimeve, që ju të largoheni gjithmonë me një pamje bashkëkohore, të shëndetshme dhe padyshim tuajën.',
    'What we believe': 'Çfarë besojmë',
    'Craft First': 'Mjeshtëria në radhë të parë',
    'Every service starts with a real consultation, not a guess.': 'Çdo shërbim nis me një konsultim të vërtetë, jo me hamendje.',
    'Healthy Beauty, Always': 'Bukuri e shëndetshme, gjithmonë',
    'We prioritize the long-term health of your hair, skin and nails over quick fixes.': 'I japim përparësi shëndetit afatgjatë të flokëve, lëkurës dhe thonjve tuaj mbi zgjidhjet e shpejta.',
    'An Elevated Experience': 'Një përvojë e veçantë',
    'Warm, unhurried, and detail-oriented from check-in to check-out.': 'E ngrohtë, pa nxitim dhe e kujdesshme në çdo detaj, nga mbërritja deri në largim.',
    'Our Signature': 'Firma jonë',
    'Beauty by Myself is the signature of our make-up and hair artists — the name behind every look we create, and a reminder that true beauty starts with being yourself.': 'Beauty by Myself është firma e artistëve tanë të make-up-it dhe flokëve — emri pas çdo pamjeje që krijojmë, dhe një kujtesë se bukuria e vërtetë fillon kur je vetvetja.',
    'Meet the Team': 'Njihuni me ekipin',
    'A team of specialists across hair, nails, lashes and body care.': 'Një ekip specialistësh për flokë, thonj, qerpikë dhe kujdes për trupin.',
    'Hair & Makeup Artists': 'Artistë flokësh & make-up',
    'Nanoplasty, balayage, colour and makeup for every occasion.': 'Nanoplasti, balayage, ngjyrosje dhe make-up për çdo rast.',
    'Nail Artists': 'Artistë thonjsh',
    'Manicures, pedicures and nail art with a golden touch.': 'Manikyr, pedikyr dhe art thonjsh me një prekje të artë.',
    'Lash & Brow Specialists': 'Specialistë qerpikësh & vetullash',
    'Lash lifts and microblading that frame your face.': 'Lash lift dhe microblading që e kornizojnë fytyrën tuaj.',
    'Body Therapists': 'Terapistë trupi',
    'Lymphatic drainage, anti-cellulite and relaxing massages.': 'Limfodrenazh, anticelulit dhe masazhe relaksuese.',
    'Follow Our Work': 'Ndiqni punën tonë',
    'New looks, nail sets and moments from the studio.': 'Pamje të reja, punime thonjsh dhe momente nga studio.',
    'Salon': 'Sallon',
    'We\'d love to welcome you in for a consultation and show you the Golden Paradise experience.': 'Do të na gëzonte t\'ju mirëpresim për një konsultim dhe t\'ju tregojmë përvojën Golden Paradise.',

    // Gallery page
    'Our Work': 'Puna jonë',
    'A look at real work and moments from our studio — hair, nails, lashes and more.': 'Një vështrim në punën e vërtetë dhe momentet nga studio jonë — flokë, thonj, qerpikë dhe më shumë.',
    'All': 'Të gjitha',
    'Gold flake almond nails': 'Thonj bajame me fletë ari',
    'Silky blonde finish': 'Bjonde e lëmuar si mëndafsh',
    'Long & glass-smooth': 'E gjatë & e lëmuar',
    'Classic red': 'E kuqe klasike',
    'Milky almond': 'Bajame në ngjyrë qumështi',
    'Red stiletto': 'Stileto e kuqe',
    'Cobalt blue': 'Blu kobalt',
    'Pink pedicure': 'Pedikyr rozë',
    'Soft waves & shine': 'Valë të buta & shkëlqim',
    'Lash lift — before & after': 'Lash lift — para & pas',
    'Laminated brows': 'Vetulla të laminuara',
    'Lash extensions': 'Zgjatime qerpikësh',
    'Lifted lashes': 'Qerpikë të ngritur',
    'Brows & lashes': 'Vetulla & qerpikë',
    'Sculpting massage': 'Masazh formësues',
    'Wood therapy': 'Terapi me dru',
    'Before & after': 'Para & pas',
    'Body treatment': 'Trajtim trupi',
    'Our latest lash & brow work': 'Punimet tona më të fundit të qerpikëve & vetullave',
    'Body treatments & results': 'Trajtime trupi & rezultate',
    'More looks on Instagram': 'Më shumë pamje në Instagram',
    'Our latest nail sets': 'Punimet tona më të fundit të thonjve',
    'More photos coming soon.': 'Më shumë foto së shpejti.',
    'Follow us on Instagram': 'Na ndiqni në Instagram',
    'Book an appointment and let\'s create your next look together.': 'Rezervoni një takim dhe le të krijojmë së bashku pamjen tuaj të re.',

    // Contact page
    'Get In Touch': 'Na kontaktoni',
    'Book your appointment, ask a question, or simply come say hello — we\'d love to hear from you.': 'Rezervoni takimin tuaj, bëni një pyetje ose thjesht ejani të na përshëndetni — do të na gëzonte t\'ju dëgjojmë.',
    'Call us': 'Na telefononi',
    'Message us': 'Na shkruani',
    'Visit us': 'Na vizitoni',
    'Fill in the form and send it straight to us on WhatsApp — we\'ll confirm your appointment time.': 'Plotësoni formularin dhe na e dërgoni direkt në WhatsApp — ne do t\'ju konfirmojmë orarin e takimit.',
    'Thank you! WhatsApp has opened with your request — just press send and we\'ll confirm your appointment shortly.': 'Faleminderit! WhatsApp u hap me kërkesën tuaj — thjesht shtypni dërgo dhe ne do t\'ju konfirmojmë takimin së shpejti.',
    'Full Name': 'Emri i plotë',
    'Phone Number': 'Numri i telefonit',
    'Service Interested In': 'Shërbimi që ju intereson',
    'Select a service': 'Zgjidhni një shërbim',
    'Not sure yet': 'Ende pa vendosur',
    'Preferred Date': 'Data e preferuar',
    'Preferred Time': 'Ora e preferuar',
    'Additional Notes': 'Shënime shtesë',
    'Stylist preference, hair goals, allergies, etc.': 'Stilisti i preferuar, qëllimet për flokët, alergjitë, etj.',
    'Send via WhatsApp': 'Dërgo në WhatsApp',
    'Opening Hours': 'Orari i punës',
    'Get directions': 'Merr udhëzimet',
    'Tiranë, Albania': 'Tiranë, Shqipëri'
  }
};

(function () {
  var STORAGE_KEY = 'gp-lang';
  var textNodes = [];   // { node, en, sq }
  var htmlEls = [];     // { el, en, sq }
  var placeholders = []; // { el, en, sq }
  var titleEn = document.title;

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        if (p === 'SCRIPT' || p === 'STYLE') return NodeFilter.FILTER_REJECT;
        if (n.parentNode.closest && n.parentNode.closest('[data-i18n]')) return NodeFilter.FILTER_REJECT;
        return SQ.text.hasOwnProperty(norm(n.nodeValue)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var key = norm(n.nodeValue);
      var lead = n.nodeValue.match(/^\s*/)[0];
      var trail = n.nodeValue.match(/\s*$/)[0];
      textNodes.push({ node: n, en: n.nodeValue, sq: lead + SQ.text[key] + trail });
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var sq = SQ.html[el.getAttribute('data-i18n')];
      if (sq) htmlEls.push({ el: el, en: el.innerHTML, sq: sq });
    });

    document.querySelectorAll('[placeholder]').forEach(function (el) {
      var en = el.getAttribute('placeholder');
      if (SQ.text[en]) placeholders.push({ el: el, en: en, sq: SQ.text[en] });
    });
  }

  function apply(lang) {
    var sq = lang === 'sq';
    textNodes.forEach(function (t) { t.node.nodeValue = sq ? t.sq : t.en; });
    htmlEls.forEach(function (h) { h.el.innerHTML = sq ? h.sq : h.en; });
    placeholders.forEach(function (p) { p.el.setAttribute('placeholder', sq ? p.sq : p.en); });
    document.title = sq && SQ.titles[titleEn] ? SQ.titles[titleEn] : titleEn;
    document.documentElement.lang = sq ? 'sq' : 'en';

    document.querySelectorAll('.lang-current').forEach(function (el) {
      el.textContent = sq ? 'SQ' : 'EN';
    });
    document.querySelectorAll('.lang-menu [data-lang]').forEach(function (b) {
      b.setAttribute('aria-checked', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  function saved() {
    try { return localStorage.getItem(STORAGE_KEY) === 'sq' ? 'sq' : 'en'; } catch (e) { return 'en'; }
  }

  function save(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode: choice lasts this page only */ }
  }

  function initMenu() {
    document.querySelectorAll('.lang-switch').forEach(function (sw) {
      var btn = sw.querySelector('.lang-select');
      function close() { sw.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !sw.classList.contains('open');
        sw.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      sw.querySelectorAll('[data-lang]').forEach(function (opt) {
        opt.addEventListener('click', function () {
          var lang = opt.getAttribute('data-lang');
          save(lang);
          apply(lang);
          close();
        });
      });

      document.addEventListener('click', function (e) { if (!sw.contains(e.target)) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    });
  }

  collect();
  initMenu();
  if (saved() === 'sq') apply('sq');
})();
