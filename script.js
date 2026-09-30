const products = [
  {
    id: 'favor-agradecimento', name: 'Kit lembrancinhas de agradecimento',
    category: 'lembrancas', categoryLabel: 'Lembranças', price: 1346, rating: '4,7', badge: 'Mais vendido',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    alt: 'Mesa de celebração preparada com detalhes delicados'
  },
  {
    id: 'quebra-cabeca', name: 'Kit com 12 quebra-cabeças infantis',
    category: 'infantil', categoryLabel: 'Infantil', price: 2916, rating: '4,2', badge: 'Aprender brincando',
    image: 'assets/quebra-cabeca-infantil.svg',
    alt: 'Ilustração de peças de quebra-cabeça infantil em madeira'
  },
  {
    id: 'quadro-personalizado', name: 'Quadro decorativo personalizado',
    category: 'decoracao', categoryLabel: 'Decoração', price: 1080, rating: '4,5', badge: 'Do seu jeito',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85',
    alt: 'Obra decorativa emoldurada em uma parede clara'
  },
  {
    id: 'quadro-aguia', name: 'Quadro decorativo águia em voo',
    category: 'decoracao', categoryLabel: 'Decoração', price: 1080, rating: '4,7', badge: 'Arte para sua casa',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85',
    alt: 'Pintura expressiva em uma galeria de arte'
  },
  {
    id: 'lembranca-casamento', name: 'Lembrancinhas personalizadas para casamento',
    category: 'lembrancas', categoryLabel: 'Lembranças', price: 2539, rating: '5,0', badge: 'Feito para celebrar',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85',
    alt: 'Detalhes de uma recepção de casamento com flores brancas'
  },
  {
    id: 'quadro-santa-ceia', name: 'Quadro dourado Santa Ceia',
    category: 'decoracao', categoryLabel: 'Decoração', price: 16625, rating: '—', badge: 'Destaque da loja',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85',
    alt: 'Pintura clássica emoldurada com acabamento dourado'
  }
];

const money = (cents) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);
const grid = document.querySelector('#product-grid');
const search = document.querySelector('#product-search');
const cartPanel = document.querySelector('#cart-panel');
const cartBackdrop = document.querySelector('#cart-backdrop');
const cartContent = document.querySelector('#cart-content');
let selectedFilter = 'todos';
let cart = readCart();
let lastFocusedElement = null;

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('studio-versatil-cart') || '[]');
    if (!Array.isArray(saved)) return [];
    return saved.filter((row) => products.some((product) => product.id === row.id) && Number.isInteger(row.quantity) && row.quantity > 0);
  } catch {
    return [];
  }
}

function saveCart() {
  try { localStorage.setItem('studio-versatil-cart', JSON.stringify(cart)); } catch { /* Carrinho continua disponível nesta sessão. */ }
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach((badge) => { badge.textContent = count; });
}

function renderProducts() {
  const term = search.value.trim().toLocaleLowerCase('pt-BR');
  const visible = products.filter((product) => {
    const matchesFilter = selectedFilter === 'todos' || product.category === selectedFilter;
    const matchesSearch = !term || `${product.name} ${product.categoryLabel}`.toLocaleLowerCase('pt-BR').includes(term);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = visible.length ? visible.map((product, index) => `
    <article class="product-card" style="animation-delay:${index * 65}ms">
      <div class="product-photo">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" />
        <span class="product-tag">${product.badge}</span>
      </div>
      <div class="product-meta"><span>${product.categoryLabel}</span><span class="rating">★ ${product.rating}</span></div>
      <h3>${product.name}</h3>
      <div class="product-bottom"><span class="product-price">${money(product.price)} <small>valor demonstrativo</small></span><button class="add-to-cart" type="button" data-add="${product.id}">Adicionar à sacola <span aria-hidden="true">＋</span></button></div>
    </article>`).join('') : '<p class="empty-state">Não encontramos essa peça. Tente outra busca.</p>';
}

function addToCart(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ id: productId, quantity: 1 });
  saveCart();
  renderCart();
  openCart();
}

function getCartRows() {
  return cart.map((item) => ({ ...products.find((product) => product.id === item.id), quantity: item.quantity }));
}

function renderCart() {
  const rows = getCartRows();
  const subtotal = rows.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!rows.length) {
    cartContent.innerHTML = `<div class="cart-empty"><span class="empty-bag" aria-hidden="true">⌑</span><h3>Sua sacola está vazia.</h3><p>Explore a coleção e adicione suas peças favoritas.</p><button class="button button-gold continue-shopping" type="button">Ver coleção <span>↘</span></button></div>`;
    return;
  }

  cartContent.innerHTML = `
    <div class="cart-step-label"><span class="step-current">01</span><i></i><span>02</span><span>Minha sacola</span></div>
    <div class="cart-items">${rows.map((item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="" />
        <div class="cart-item-info"><h3>${item.name}</h3><span>${money(item.price)}</span><div class="quantity-control" aria-label="Quantidade de ${item.name}"><button type="button" data-quantity="${item.id}" data-change="-1" aria-label="Diminuir quantidade">−</button><span>${item.quantity}</span><button type="button" data-quantity="${item.id}" data-change="1" aria-label="Aumentar quantidade">+</button></div></div>
        <button class="remove-item" type="button" data-remove="${item.id}" aria-label="Remover ${item.name}">×</button>
      </article>`).join('')}</div>
    <div class="cart-summary"><div><span>Subtotal (${rows.reduce((sum, item) => sum + item.quantity, 0)} ${rows.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'item' : 'itens'})</span><strong>${money(subtotal)}</strong></div><div><span>Entrega</span><span>A combinar</span></div><div class="summary-total"><span>Total dos produtos</span><strong>${money(subtotal)}</strong></div><p class="checkout-disclaimer">Valores demonstrativos. Frete e pagamento ainda não são calculados neste site.</p><button class="button button-gold checkout-start" type="button">Continuar para entrega <span>→</span></button><button class="keep-shopping" type="button">Continuar escolhendo</button></div>`;
}

function renderCheckout() {
  const rows = getCartRows();
  if (!rows.length) { renderCart(); return; }
  const subtotal = rows.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartContent.innerHTML = `
    <div class="cart-step-label"><button class="step-back" type="button" data-back-cart>01</button><i></i><span class="step-current">02</span><span>Entrega e contato</span></div>
    <div class="checkout-order-preview"><span>Seu pedido (${rows.reduce((sum, item) => sum + item.quantity, 0)} itens)</span><strong>${money(subtotal)}</strong><button type="button" data-back-cart>Editar sacola</button></div>
    <form class="checkout-form" id="checkout-form">
      <h3>Para onde enviamos?</h3>
      <label>Nome completo<input name="name" autocomplete="name" required maxlength="100" placeholder="Seu nome" /></label>
      <div class="form-row"><label>WhatsApp<input name="phone" autocomplete="tel" type="tel" required maxlength="20" placeholder="(00) 00000-0000" /></label><label>CEP<input name="postalCode" autocomplete="postal-code" required maxlength="9" placeholder="00000-000" /></label></div>
      <label>Endereço<input name="address" autocomplete="street-address" required maxlength="140" placeholder="Rua e bairro" /></label>
      <div class="form-row"><label>Número<input name="number" required maxlength="12" placeholder="Nº" /></label><label>Complemento <span>(opcional)</span><input name="complement" autocomplete="address-line2" maxlength="60" placeholder="Apto, bloco..." /></label></div>
      <label>Cidade e estado<input name="city" autocomplete="address-level2" required maxlength="100" placeholder="Sua cidade — UF" /></label>
      <label>Preferência de pagamento<select name="payment" required><option value="">Escolha uma opção</option><option value="Pix">Pix</option><option value="Cartão">Cartão</option><option value="Combinar depois">Combinar depois</option></select></label>
      <div class="checkout-local-note"><span aria-hidden="true">◇</span><p>Esta é uma demonstração: os dados não são enviados nem armazenados. Frete, pagamento e confirmação real precisam ser conectados depois.</p></div>
      <button class="button button-gold checkout-submit" type="submit">Revisar pedido <span>→</span></button>
    </form>`;
  cartContent.querySelector('#checkout-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    renderOrderReview(Object.fromEntries(new FormData(event.currentTarget)));
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderOrderReview(details) {
  const rows = getCartRows();
  const subtotal = rows.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartContent.innerHTML = `
    <div class="cart-step-label"><button class="step-back" type="button" data-back-checkout>02</button><i></i><span class="step-current">03</span><span>Revisão</span></div>
    <div class="review-card"><div class="review-mark" aria-hidden="true">✓</div><p class="eyebrow dark"><span></span> Pedido demonstrativo</p><h3>Seu pedido está<br />pronto para revisão.</h3><div class="review-address"><strong>${escapeHtml(details.name)}</strong>${escapeHtml(details.address)}, ${escapeHtml(details.number)}${details.complement ? ` — ${escapeHtml(details.complement)}` : ''}<br />${escapeHtml(details.city)} · CEP ${escapeHtml(details.postalCode)}<br />WhatsApp: ${escapeHtml(details.phone)}<br />Preferência de pagamento: ${escapeHtml(details.payment)}</div><div class="review-products">${rows.map((item) => `<div><span>${item.quantity} × ${item.name}</span><strong>${money(item.price * item.quantity)}</strong></div>`).join('')}</div><div class="review-total"><span>Total dos produtos</span><strong>${money(subtotal)}</strong></div><p class="review-note">Pedido apenas demonstrativo. Sem backend, os dados não serão enviados, o frete não é calculado e não há cobrança. Ao fechar esta etapa, as informações preenchidas serão descartadas.</p><button class="button button-gold checkout-finish" type="button">Fechar revisão <span>✓</span></button></div>`;
  cartContent.querySelector('.checkout-finish').addEventListener('click', () => {
    closeCart();
    document.querySelector('#colecao').scrollIntoView({ behavior: 'smooth' });
  });
}

function openCart() {
  lastFocusedElement = document.activeElement;
  cartBackdrop.hidden = false;
  requestAnimationFrame(() => {
    cartBackdrop.classList.add('visible');
    cartPanel.classList.add('open');
    cartPanel.setAttribute('aria-hidden', 'false');
    cartPanel.querySelector('.cart-close').focus();
  });
  document.body.classList.add('cart-open');
}

function closeCart() {
  cartPanel.classList.remove('open');
  cartBackdrop.classList.remove('visible');
  cartPanel.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('cart-open');
  window.setTimeout(() => { cartBackdrop.hidden = true; }, 300);
  lastFocusedElement?.focus?.();
}

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    renderProducts();
  });
});
search.addEventListener('input', renderProducts);
grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-add]');
  if (button) addToCart(button.dataset.add);
});

document.querySelectorAll('.cart-trigger, .cart-inline-trigger').forEach((button) => button.addEventListener('click', () => { renderCart(); openCart(); }));
document.querySelector('.cart-close').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && cartPanel.classList.contains('open')) closeCart(); });
cartContent.addEventListener('click', (event) => {
  const quantityButton = event.target.closest('[data-quantity]');
  const removeButton = event.target.closest('[data-remove]');
  if (quantityButton) {
    const item = cart.find((row) => row.id === quantityButton.dataset.quantity);
    if (item) item.quantity += Number(quantityButton.dataset.change);
    cart = cart.filter((row) => row.quantity > 0);
    saveCart(); renderCart();
    return;
  }
  if (removeButton) {
    cart = cart.filter((row) => row.id !== removeButton.dataset.remove);
    saveCart(); renderCart();
    return;
  }
  if (event.target.closest('.checkout-start')) renderCheckout();
  if (event.target.closest('[data-back-cart]')) renderCart();
  if (event.target.closest('[data-back-checkout]')) renderCheckout();
  if (event.target.closest('.continue-shopping')) closeCart();
  if (event.target.closest('.keep-shopping')) closeCart();
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  nav.classList.toggle('open', !isOpen);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  nav.classList.remove('open');
}));

renderProducts();
updateCartCount();
renderCart();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.13 });
  document.querySelectorAll('.intro, .categories, .products, .manifesto').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
