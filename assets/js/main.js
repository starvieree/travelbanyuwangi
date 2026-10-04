/**
* Template Name: Tour
* Template URL: https://bootstrapmade.com/tour-bootstrap-travel-website-template/
* Updated: Jul 01 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Filter Tours
   */
  const filterDestination = document.getElementById('filter-destination');
  const filterType = document.getElementById('filter-type');
  const filterDuration = document.getElementById('filter-duration');
  const filterPrice = document.getElementById('filter-price');
  const tourCards = document.querySelectorAll('.tour-card');

  function filterTours() {
    const destination = filterDestination.value;
    const type = filterType.value;
    const duration = filterDuration.value;
    const priceRange = filterPrice.value;

    tourCards.forEach(card => {
      const title = card.querySelector('h4').innerText.toLowerCase();
      const priceText = card.querySelector('.tour-price').innerText.replace(/[^0-9]/g, '');
      const price = parseInt(priceText);
      const durationText = card.querySelector('.tour-details span').innerText;
      
      const matchesDestination = destination === '' || title.includes(destination.replace('-', ' '));
      const matchesType = type === '' || (type === 'open-trip' ? title.includes('open trip') : title.includes('private trip'));
      const matchesDuration = duration === '' || (duration === '1' ? durationText.includes('1 Hari') : durationText.includes('2 Hari'));
      
      let matchesPrice = true;
      if (priceRange === '0-500') matchesPrice = price < 500000;
      else if (priceRange === '500-1000') matchesPrice = price >= 500000 && price <= 1000000;
      else if (priceRange === '1000-2000') matchesPrice = price > 1000000 && price <= 2000000;
      else if (priceRange === '2000+') matchesPrice = price > 2000000;

      if (matchesDestination && matchesType && matchesDuration && matchesPrice) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  }

  if (filterDestination && filterType && filterDuration && filterPrice) {
    filterDestination.addEventListener('change', filterTours);
    filterType.addEventListener('change', filterTours);
    filterDuration.addEventListener('change', filterTours);
    filterPrice.addEventListener('change', filterTours);
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Floating WhatsApp Button
   */
  function createWhatsAppButton() {
    const waButton = document.createElement('a');
    
    // Determine message based on current page
    let message = 'Halo, saya tertarik dengan paket wisata Banyuwangi. Boleh minta info lengkapnya?';
    const path = window.location.pathname;
    
    if (path.includes('kawah-ijen')) {
      message = 'Halo, saya ingin tanya paket wisata ke Kawah Ijen.';
    } else if (path.includes('ijen-baluran-2h1m')) {
      message = 'Halo, saya tertarik dengan Open Trip Ijen Baluran 2H1M. Apakah masih ada slot?';
    } else if (path.includes('private-trip')) {
      message = 'Halo, saya ingin merencanakan Private Trip Banyuwangi. Tanggal: ..., jumlah peserta: ...';
    } else if (path.includes('sewa-mobil')) {
      message = 'Halo, saya ingin sewa mobil wisata di Banyuwangi. Tanggal: ..., jumlah penumpang: ...';
    } else if (path.includes('blog/')) {
      const title = document.title.split('|')[0].trim();
      message = `Halo, saya baru baca artikel "${title}" dan ingin tanya paket wisatanya.`;
    } else if (path.includes('contact')) {
      message = 'Halo, saya ingin bertanya tentang layanan wisata Banyuwangi.';
    }

    waButton.href = `https://wa.me/628970624723?text=${encodeURIComponent(message)}`;
    waButton.target = '_blank';
    waButton.rel = 'noopener noreferrer';
    waButton.className = 'floating-wa-btn';
    waButton.setAttribute('aria-label', 'Chat WhatsApp');
    
    const waIcon = document.createElement('i');
    waIcon.className = 'bi bi-whatsapp';
    
    waButton.appendChild(waIcon);
    document.body.appendChild(waButton);
  }

  window.addEventListener('load', createWhatsAppButton);

})();