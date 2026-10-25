// Golden Paradise Salon — shared behavior

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('mobile-open');
      toggle.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Fade elements marked data-reveal into view as they scroll on screen
  var revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Services page: highlight the category you're scrolled to in the sticky bar
  var jumpLinks = document.querySelectorAll('.svc-jump a');
  if (jumpLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        jumpLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('.svc-cat').forEach(function (cat) { spy.observe(cat); });
  }

  // Contact page: "Book" buttons link here with ?cat=hair|nails|lashes|body,
  // which pre-selects that category in the service dropdown
  var serviceSelect = document.getElementById('service');
  var cat = new URLSearchParams(window.location.search).get('cat');
  var catIndex = { hair: 1, nails: 2, lashes: 3, body: 4 }[cat];
  if (serviceSelect && catIndex && serviceSelect.options[catIndex]) {
    serviceSelect.selectedIndex = catIndex;
  }

  // Gallery: category filters
  var galButtons = document.querySelectorAll('.gal-filters button');
  var galTiles = document.querySelectorAll('.gal-grid > *');
  var galEmpty = document.querySelector('.gal-empty');
  function galFilter(filter) {
    var photos = 0;
    galTiles.forEach(function (tile) {
      var show;
      if (tile.classList.contains('gal-ig')) {
        // one Instagram account per view; these tiles sit first in the grid
        show = (' ' + tile.getAttribute('data-ig-for') + ' ').indexOf(' ' + filter + ' ') !== -1;
      } else {
        show = filter === 'all' || tile.getAttribute('data-cat') === filter;
        if (show) photos++;
      }
      tile.hidden = !show;
    });
    // no photos in this category yet: hide the Instagram tile too and show the note
    if (!photos) galTiles.forEach(function (tile) { tile.hidden = true; });
    if (galEmpty) galEmpty.hidden = photos > 0;
  }

  galButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      galButtons.forEach(function (b) { b.classList.toggle('active', b === btn); });
      galFilter(btn.getAttribute('data-filter'));
    });
  });
  if (galButtons.length) galFilter('all');

  // Gallery: full-screen viewer
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCap = lightbox.querySelector('figcaption');
    var lbItems = [];
    var lbIndex = 0;

    function lbShow(i) {
      lbIndex = (i + lbItems.length) % lbItems.length;
      var item = lbItems[lbIndex];
      var img = item.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = item.querySelector('figcaption').lastChild.textContent;
    }

    function lbClose() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.gal-open').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lbItems = Array.prototype.filter.call(document.querySelectorAll('.gal-item'), function (el) { return !el.hidden; });
        lbShow(lbItems.indexOf(btn.closest('.gal-item')));
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('.lb-close').focus();
      });
    });

    lightbox.querySelector('.lb-close').addEventListener('click', lbClose);
    lightbox.querySelector('.lb-prev').addEventListener('click', function () { lbShow(lbIndex - 1); });
    lightbox.querySelector('.lb-next').addEventListener('click', function () { lbShow(lbIndex + 1); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lbClose(); });
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') lbClose();
      if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
      if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
    });
  }

  // Booking form: sends the request to the salon on WhatsApp (no server needed)
  var SALON_WHATSAPP = '355676289840';
  var bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var sq = document.documentElement.lang === 'sq';
      var f = bookingForm.elements;
      var service = f.service.options[f.service.selectedIndex].text;
      var lines = sq
        ? ['Përshëndetje Golden Paradise! Dëshiroj të rezervoj një takim.', '',
           'Emri: ' + f.name.value, 'Telefoni: ' + f.phone.value, 'Shërbimi: ' + service,
           'Data: ' + f.date.value, 'Ora: ' + f.time.value]
        : ['Hello Golden Paradise! I would like to book an appointment.', '',
           'Name: ' + f.name.value, 'Phone: ' + f.phone.value, 'Service: ' + service,
           'Date: ' + f.date.value, 'Time: ' + f.time.value];
      if (f.message.value.trim()) lines.push((sq ? 'Shënime: ' : 'Notes: ') + f.message.value.trim());
      window.open('https://wa.me/' + SALON_WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');

      var successBox = document.getElementById('form-success');
      if (successBox) {
        successBox.classList.add('show');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      bookingForm.reset();
    });
  }
});
