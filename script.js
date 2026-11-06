// Centralized Brand & Menu Data
const brandConfig = {
  brandName: "Maison Polow",
  tagline: "Persian Rice Atelier",
  location: "New Delhi, India",
  pricingStatus: "Price to be announced",
  dishes: [
    {
      id: "zereshk-polo",
      name: "Zereshk Polo",
      subtitle: "Barberry Rice",
      category: "jeweled",
      description: "Fluffy saffron-infused basmati rice layered or topped with tart, jewel-like red barberries, traditionally served with braised or roasted chicken.",
      longDescription: "Zereshk Polo is one of Persia's most beloved celebratory dishes. The shimmering ruby-red barberries (zereshk) are gently sautéed with a touch of butter and sugar to balance their natural tartness, then paired with fragrant, saffron-infused long-grain basmati rice.",
      ingredients: ["Basmati Rice", "Wild Barberries", "Persian Saffron", "Butter", "Sugar", "Suggested: Braised Chicken"],
      pairingNotes: "Traditionally served alongside slow-braised chicken infused with turmeric and onion broth.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%23C59B27' opacity='0.1'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3EZereshk Polo%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3EBARBERRY RICE%3E%3C/text%3E%3C/svg%3E",
      price: null
    },
    {
      id: "baghali-polo",
      name: "Baghali Polo",
      subtitle: "Dill and Fava Bean Rice",
      category: "herbs",
      description: "An aromatic rice dish with fresh chopped dill and tender fava beans, traditionally served at celebrations alongside slow-cooked lamb shanks, known as mahicheh.",
      longDescription: "Baghali Polo marries the earthy richness of tender fava beans (baghali) with the refreshing herbaceous aroma of freshly chopped dill folded into steamed basmati rice.",
      ingredients: ["Basmati Rice", "Fresh Dill", "Fava Beans", "Garlic", "Saffron", "Suggested: Slow-cooked Lamb Shank"],
      pairingNotes: "Traditionally paired with slow-cooked lamb shank (mahicheh) braised in aromatic broth.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%237A8B74' opacity='0.15'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3EBaghali Polo%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3EDILL & FAVA BEAN RICE%3E%3C/text%3E%3C/svg%3E",
      price: null
    },
    {
      id: "tahchin",
      name: "Tahchin",
      subtitle: "Saffron Rice Cake",
      category: "saffron",
      description: "A rich, savoury rice cake made with basmati rice, yogurt, eggs, and saffron, often layered with chicken or lamb and baked to develop a crisp, golden crust.",
      longDescription: "Tahchin is a culinary showpiece. Parboiled rice is bound with rich Greek yogurt, egg yolks, and concentrated saffron infusion, then baked until the exterior forms a thick, golden crust (tahdig) enclosing tender spiced meat.",
      ingredients: ["Basmati Rice", "Yogurt", "Egg Yolks", "Saffron", "Ghee", "Tender Chicken or Lamb"],
      pairingNotes: "Served sliced into wedges, garnished with barberries and pistachios.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%23C59B27' opacity='0.15'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3ETahchin%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3ESAFFRON RICE CAKE%3E%3C/text%3E%3C/svg%3E",
      price: null
    },
    {
      id: "shirin-polo",
      name: "Shirin Polo",
      subtitle: "Sweet Jeweled Rice",
      category: "jeweled",
      description: "A celebratory rice preparation with ingredients such as slivered pistachios, almonds, orange peel, carrots, and golden raisins or barberries, lightly scented with rosewater and saffron.",
      longDescription: "Known as the wedding rice, Shirin Polo is an exquisite tapestry of sweet and savory notes. Candied orange peel, julienned carrots, almonds, and pistachios create a jewel-like presentation scented delicately with rosewater.",
      ingredients: ["Basmati Rice", "Slivered Pistachios", "Almonds", "Candied Orange Peel", "Carrots", "Golden Raisins", "Rosewater"],
      pairingNotes: "Traditionally served during weddings and major celebrations with roast poultry.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%23A65D4B' opacity='0.15'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3EShirin Polo%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3ESWEET JEWELED RICE%3E%3C/text%3E%3C/svg%3E",
      price: null
    },
    {
      id: "chelo",
      name: "Chelo",
      subtitle: "Steamed Rice with Saffron",
      category: "saffron",
      description: "Separate, tender grains of steamed white rice, often finished with butter and saffron, traditionally paired with kebabs or Iranian stews.",
      longDescription: "Chelo is the foundation of Persian culinary art. Achieving separate, fluffy, perfectly long grains requires precise soaking, boiling, and steam-infusing (dam-keshi), finished with pure butter and saffron crust.",
      ingredients: ["Aged Basmati Rice", "Pure Butter", "Saffron", "Sea Salt"],
      pairingNotes: "The essential accompaniment to grilled kebabs (Koobideh, Jujeh) and hearty stews (Khoresh).",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%23C59B27' opacity='0.1'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3EChelo%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3ESTEAMED SAFFRON RICE%3E%3C/text%3E%3C/svg%3E",
      price: null
    },
    {
      id: "adas-polo",
      name: "Adas Polo",
      subtitle: "Lentil Rice",
      category: "comfort",
      description: "A comforting combination of rice, lentils, sweet raisins, and dates, sometimes prepared with minced meat.",
      longDescription: "Adas Polo is a deeply nourishing homestyle dish combining earthy brown lentils with fragrant basmati rice, balanced with the natural sweetness of sautéed dates and raisins.",
      ingredients: ["Basmati Rice", "Brown Lentils", "Dates", "Raisins", "Onions", "Warm Spices"],
      pairingNotes: "Enjoyed on its own or accompanied by cooling mast-o-cucumber (yogurt dip).",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%237A8B74' opacity='0.15'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3EAdas Polo%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3ELENTIL RICE%3E%3C/text%3E%3C/svg%3E",
      price: null
    },
    {
      id: "kateh",
      name: "Kateh",
      subtitle: "Homestyle Persian Rice",
      category: "comfort",
      description: "An everyday style associated with northern Iran’s Caspian region, cooked by absorption without parboiling and draining, producing a softer texture.",
      longDescription: "Kateh is the traditional homestyle cooking method where rice is simmered gently with water, butter, and salt until all liquid is absorbed, preserving maximum starch and natural fragrance.",
      ingredients: ["Basmati Rice", "Butter", "Water", "Salt"],
      pairingNotes: "Wonderful with northern stews, fresh herbs, and feta cheese.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%23C59B27' opacity='0.1'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3EKateh%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3EHOMESTYLE PERSIAN RICE%3E%3C/text%3E%3C/svg%3E",
      price: null
    },
    {
      id: "gheymeh-nesar",
      name: "Gheymeh Nesar",
      subtitle: "Qazvin-Style Jeweled Rice",
      category: "jeweled",
      description: "A festive rice dish associated with Qazvin, featuring saffron rice, tender meat, barberries, and almond and pistachio garnishes.",
      longDescription: "Originating from Qazvin, Gheymeh Nesar is a magnificent festive dish featuring delicately spiced tender meat buried under vibrant saffron rice and encrusted with slivered almonds, pistachios, and orange peel.",
      ingredients: ["Basmati Rice", "Tender Lamb or Beef", "Saffron", "Almond Slivers", "Pistachios", "Orange Peel", "Barberries"],
      pairingNotes: "Served as a centerpiece dish for grand gatherings and celebrations.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect width='500' height='400' fill='%231B1816'/%3E%3Ccircle cx='250' cy='200' r='120' fill='%23A65D4B' opacity='0.15'/%3E%3Ctext x='250' y='190' font-family='serif' font-size='22' fill='%23C59B27' text-anchor='middle'%3EGheymeh Nesar%3E%3C/text%3E%3Ctext x='250' y='220' font-family='sans-serif' font-size='12' fill='%23F4EFEA' letter-spacing='2' text-anchor='middle'%3EQAZVIN JEWELED RICE%3E%3C/text%3E%3C/svg%3E",
      price: null
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sticky Header Scroll Effect
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-md', 'bg-ivory/95');
    } else {
      header.classList.remove('shadow-md', 'bg-ivory/95');
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Render Menu Grid
  const menuGrid = document.getElementById('menu-grid');
  const menuEmpty = document.getElementById('menu-empty');

  function renderMenu(filter = 'all') {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    const filteredDishes = filter === 'all' 
      ? brandConfig.dishes 
      : brandConfig.dishes.filter(d => d.category === filter);

    if (filteredDishes.length === 0) {
      menuEmpty.classList.remove('hidden');
      return;
    } else {
      menuEmpty.classList.add('hidden');
    }

    filteredDishes.forEach(dish => {
      const card = document.createElement('div');
      card.className = 'bg-ivory border border-aubergine/15 p-6 flex flex-col justify-between transition-all duration-300 hover:border-gold group';
      card.innerHTML = `
        <div>
          <div class="aspect-[4/3] w-full bg-aubergine mb-6 overflow-hidden relative">
            <img src="${dish.image}" alt="${dish.name} - ${dish.subtitle}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
            <div class="absolute top-3 right-3 bg-aubergine/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-gold border border-gold/30">
              ${dish.category}
            </div>
          </div>
          <h3 class="font-serif text-2xl font-normal text-aubergine group-hover:text-gold transition-colors">${dish.name}</h3>
          <p class="text-xs uppercase tracking-wider text-gold font-medium mt-1 mb-3">${dish.subtitle}</p>
          <p class="text-aubergine/70 font-light text-sm line-clamp-2 mb-4">${dish.description}</p>
        </div>
        <div class="pt-4 border-t border-aubergine/10 flex items-center justify-between">
          <span class="text-xs uppercase tracking-widest font-semibold text-aubergine/50">${brandConfig.pricingStatus}</span>
          <button class="discover-btn px-4 py-2 bg-aubergine text-ivory text-xs uppercase tracking-widest font-medium hover:bg-gold hover:text-aubergine transition-all" data-id="${dish.id}">
            Discover
          </button>
        </div>
      `;
      menuGrid.appendChild(card);
    });

    // Re-bind discover buttons
    document.querySelectorAll('.discover-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dishId = e.currentTarget.getAttribute('data-id');
        openDishModal(dishId);
      });
    });
  }

  renderMenu();

  // Menu Filtering
  const filterButtons = document.querySelectorAll('.menu-filter');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-aubergine', 'text-ivory');
        b.classList.add('bg-ivory', 'text-aubergine');
        b.setAttribute('aria-selected', 'false');
      });
      e.currentTarget.classList.remove('bg-ivory', 'text-aubergine');
      e.currentTarget.classList.add('bg-aubergine', 'text-ivory');
      e.currentTarget.setAttribute('aria-selected', 'true');

      const filter = e.currentTarget.getAttribute('data-filter');
      renderMenu(filter);
    });
  });

  // Dish Detail Modal Logic
  const modal = document.getElementById('dish-modal');
  const modalContainer = document.getElementById('modal-container');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  let lastActiveElement = null;

  function openDishModal(dishId) {
    const dish = brandConfig.dishes.find(d => d.id === dishId);
    if (!dish) return;

    lastActiveElement = document.activeElement;

    modalBody.innerHTML = `
      <div class="space-y-4">
        <div class="inline-block px-2.5 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-widest border border-gold/30">
          ${dish.subtitle}
        </div>
        <h2 id="modal-title" class="font-serif text-3xl sm:text-4xl text-aubergine">${dish.name}</h2>
        <p class="text-aubergine/80 font-light leading-relaxed text-base">${dish.longDescription}</p>
        
        <div class="pt-4 border-t border-aubergine/10 space-y-3">
          <h3 class="text-xs uppercase tracking-widest text-gold font-semibold">Key Ingredients & Highlights</h3>
          <div class="flex flex-wrap gap-2">
            ${dish.ingredients.map(ing => `<span class="px-3 py-1 bg-aubergine/5 border border-aubergine/10 text-xs text-aubergine">${ing}</span>`).join('')}
          </div>
        </div>

        <div class="pt-2 space-y-1">
          <h3 class="text-xs uppercase tracking-widest text-gold font-semibold">Traditional Pairing Notes</h3>
          <p class="text-sm text-aubergine/70 font-light italic">${dish.pairingNotes}</p>
        </div>

        <div class="pt-6 border-t border-aubergine/10 flex items-center justify-between">
          <span class="text-xs uppercase tracking-widest font-semibold text-aubergine/60">${brandConfig.pricingStatus}</span>
          <button id="modal-dismiss" class="px-6 py-2.5 bg-aubergine text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-gold hover:text-aubergine transition-all">
            Close
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
      modalContainer.classList.remove('scale-95', 'opacity-0');
      modalContainer.classList.add('scale-100', 'opacity-100');
    }, 10);

    const dismissBtn = document.getElementById('modal-dismiss');
    if (dismissBtn) dismissBtn.focus();

    document.addEventListener('keydown', handleModalKeyDown);
  }

  function closeDishModal() {
    modalContainer.classList.remove('scale-100', 'opacity-100');
    modalContainer.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      if (lastActiveElement) lastActiveElement.focus();
    }, 200);
    document.removeEventListener('keydown', handleModalKeyDown);
  }

  function handleModalKeyDown(e) {
    if (e.key === 'Escape') {
      closeDishModal();
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeDishModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDishModal();
    });
  }

  // FAQ Accordion Logic
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const svg = toggle.querySelector('svg');
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

      // Close all other accordions
      faqToggles.forEach(t => {
        if (t !== toggle) {
          t.setAttribute('aria-expanded', 'false');
          t.nextElementSibling.classList.add('hidden');
          t.querySelector('svg').classList.remove('rotate-180');
        }
      });

      toggle.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('hidden');
      svg.classList.toggle('rotate-180');
    });
  });

  // Contact Form Validation & Honest Demo Behaviour
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const errName = document.getElementById('error-name');
      const errEmail = document.getElementById('error-email');
      const errMessage = document.getElementById('error-message');

      // Reset errors
      [errName, errEmail, errMessage].forEach(el => el.classList.add('hidden'));
      [nameInput, emailInput, messageInput].forEach(el => el.classList.remove('border-red-400'));

      if (!nameInput.value.trim()) {
        errName.classList.remove('hidden');
        nameInput.classList.add('border-red-400');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        errEmail.classList.remove('hidden');
        emailInput.classList.add('border-red-400');
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        errMessage.classList.remove('hidden');
        messageInput.classList.add('border-red-400');
        isValid = false;
      }

      if (isValid) {
        formFeedback.className = 'p-4 mb-6 text-sm bg-gold/20 border border-gold text-ivory';
        formFeedback.textContent = 'Thank you for your inquiry. [Demo Mode]: No backend is connected, so no message was transmitted or stored. We look forward to welcoming you when Maison Polow opens.';
        formFeedback.classList.remove('hidden');
        contactForm.reset();
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        formFeedback.className = 'p-4 mb-6 text-sm bg-red-900/40 border border-red-500 text-ivory';
        formFeedback.textContent = 'Please correct the highlighted fields above before submitting.';
        formFeedback.classList.remove('hidden');
      }
    });
  }
});