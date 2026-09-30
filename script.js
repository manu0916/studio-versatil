const products = [
  { id: 'quadro-botanico', name: 'Quadro botânico folhas douradas', category: 'decoracao', categoryLabel: 'Decoração', price: 1080, badge: 'Arte decorativa', visual: 'folhas' },
  { id: 'quadro-leao', name: 'Quadro leão e filhote', category: 'decoracao', categoryLabel: 'Decoração', price: 1290, badge: 'Arte decorativa', visual: 'leao' },
  { id: 'quadro-aguia', name: 'Quadro decorativo águia em voo', category: 'decoracao', categoryLabel: 'Decoração', price: 1080, badge: 'Arte decorativa', visual: 'aguia' },
  { id: 'quadro-familia', name: 'Placa decorativa nossa família', category: 'decoracao', categoryLabel: 'Decoração', price: 1346, badge: 'Para sua casa', visual: 'familia' },
  { id: 'quadro-santa-ceia', name: 'Quadro Santa Ceia moldura dourada', category: 'decoracao', categoryLabel: 'Decoração', price: 16625, badge: 'Arte decorativa', visual: 'santaceia' },
  { id: 'kit-coracoes', name: 'Kit corações de agradecimento em MDF', category: 'lembrancas', categoryLabel: 'Lembranças', price: 1346, badge: 'Lembrança em MDF', visual: 'coracoes' },
  { id: 'lembranca-noivos', name: 'Lembrancinha de noivos em MDF', category: 'lembrancas', categoryLabel: 'Lembranças', price: 3200, badge: 'Para celebrar', visual: 'noivos' },
  { id: 'enfeites-natal', name: 'Enfeites de Natal em MDF', category: 'lembrancas', categoryLabel: 'Lembranças', price: 2880, badge: 'Lembrança em MDF', visual: 'natal' },
  { id: 'placa-gratidao', name: 'Mini placa de gratidão em MDF', category: 'lembrancas', categoryLabel: 'Lembranças', price: 2539, badge: 'Para presentear', visual: 'gratidao' },
  { id: 'lembranca-borboleta', name: 'Lembrancinha borboleta vazada', category: 'lembrancas', categoryLabel: 'Lembranças', price: 1346, badge: 'Lembrança em MDF', visual: 'borboleta' },
  { id: 'puzzle-animais', name: 'Kit 12 quebra-cabeças de animais', category: 'infantil', categoryLabel: 'Infantil', price: 2916, badge: 'Brincar e aprender', visual: 'animais' },
  { id: 'puzzle-mini', name: 'Kit 20 mini quebra-cabeças', category: 'infantil', categoryLabel: 'Infantil', price: 3969, badge: 'Brincar e aprender', visual: 'mini' },
  { id: 'puzzle-formas', name: 'Quebra-cabeça formas e cores', category: 'infantil', categoryLabel: 'Infantil', price: 2490, badge: 'Brincar e aprender', visual: 'formas' },
  { id: 'puzzle-alfabeto', name: 'Quebra-cabeça alfabeto', category: 'infantil', categoryLabel: 'Infantil', price: 2590, badge: 'Brincar e aprender', visual: 'alfabeto' },
  { id: 'puzzle-safari', name: 'Quebra-cabeça safari de madeira', category: 'infantil', categoryLabel: 'Infantil', price: 2916, badge: 'Brincar e aprender', visual: 'safari' }
].map((product) => ({ ...product, alt: `${product.name}, ilustração demonstrativa` }));

function renderIllustration(product) {
  const art = {
    folhas: '<path d="M205 265c0-75 42-117 91-130-1 58-27 100-91 130Zm3 5c14-57 61-88 112-89-16 53-48 82-112 89Zm-2-4c-13-43-4-79 22-109 18 41 14 74-22 109Z" fill="#75856a" stroke="#465544" stroke-width="3"/><path d="M206 271 281 150M211 264l88-79" fill="none" stroke="#d8ba78" stroke-width="3"/>',
    leao: '<circle cx="250" cy="214" r="74" fill="#b2783f"/><circle cx="250" cy="218" r="52" fill="#e6c895"/><path d="m216 202 12 9m44-9-12 9m-20 22q10 8 20 0m-10-9v13" fill="none" stroke="#49372a" stroke-width="5" stroke-linecap="round"/><circle cx="188" cy="294" r="31" fill="#d0a46a"/><circle cx="188" cy="296" r="22" fill="#edcf9c"/><path d="m180 292 5 4m10-4-5 4m-3 5 5 3" fill="none" stroke="#49372a" stroke-width="3" stroke-linecap="round"/>',
    aguia: '<path d="M118 239q55-13 99-68l33 30 35-27q35 48 97 60-53 9-97-22l-35 29-33-28q-45 34-99 26Z" fill="#665347" stroke="#3f362d" stroke-width="4"/><path d="m241 202 19-34 13 39-25 13Z" fill="#d0a455"/><circle cx="263" cy="198" r="3" fill="#f6eddb"/>',
    familia: '<path d="M143 150h214v166H143z" fill="#f5f0e5"/><path d="M166 280q14-67 44-67t44 67m19 0q14-67 44-67t44 67" fill="#b28b57"/><circle cx="210" cy="197" r="24" fill="#b28b57"/><circle cx="298" cy="197" r="24" fill="#b28b57"/><path d="M208 266q19-38 39 0m23 0q19-38 39 0" fill="#d7ba7d"/><text x="250" y="302" text-anchor="middle" font-size="15" fill="#635640">NOSSA FAMÍLIA</text>',
    santaceia: '<path d="M141 164h218v138H141z" fill="#bc9b60"/><path d="M151 174h198v118H151z" fill="#493b30"/><circle cx="250" cy="204" r="19" fill="#e2c88f"/><path d="M224 273q4-49 26-49t26 49m-100 0q4-37 21-37 14 0 18 37m67 0q4-37 21-37 14 0 18 37" fill="#d7c5a3"/><path d="M166 241h36m96 0h36" stroke="#d7c5a3" stroke-width="5"/>',
    coracoes: '<path d="M196 188c-34-37-86 13 0 82l4 3 4-3c86-69 34-119 0-82l-4 5Z" fill="#d49b75" stroke="#8b604c" stroke-width="4"/><path d="M289 197c-26-28-66 10 0 63l3 3 4-3c66-53 26-91 0-63l-4 4Z" fill="#e4c9a2" stroke="#9a7952" stroke-width="4"/><text x="248" y="309" text-anchor="middle" font-size="18" fill="#765e47">OBRIGADO</text>',
    noivos: '<circle cx="217" cy="197" r="24" fill="#c79b72"/><circle cx="278" cy="197" r="24" fill="#d5b993"/><path d="M184 286q3-63 33-63t33 63m-11 0q4-63 39-63t39 63" fill="#f0e9dd" stroke="#93734f" stroke-width="4"/><path d="m250 231 7 11 13 2-10 9 3 13-13-7-12 7 3-13-10-9 13-2Z" fill="#c99c50"/>',
    natal: '<path d="m250 139 17 38 42 4-31 29 9 42-37-22-37 22 9-42-31-29 42-4Z" fill="#d7af61"/><path d="m250 202 67 76h-42l29 38h-108l29-38h-42Z" fill="#59715b" stroke="#40533f" stroke-width="4"/><path d="M246 306h9v19h-9" fill="#886143"/><circle cx="218" cy="265" r="5" fill="#f0dbac"/><circle cx="278" cy="278" r="5" fill="#f0dbac"/>',
    gratidao: '<rect x="153" y="171" width="194" height="134" rx="7" fill="#e7d9ba" stroke="#a38a5d" stroke-width="5"/><path d="M180 197h140m-140 22h110" stroke="#a98c5b" stroke-width="3"/><path d="M241 271q9-15 18 0-9 11-18 0Zm10-2q-25-32-37-14m37 14q25-32 37-14" fill="#829073" stroke="#62715c" stroke-width="3"/><text x="250" y="253" text-anchor="middle" font-size="15" fill="#5d5342">GRATIDÃO</text>',
    borboleta: '<path d="M247 228c-62-91-118-24-55 16-64 45-3 103 55 20 59 83 119 25 55-20 64-40 7-107-55-16Z" fill="#d4b178" stroke="#8d7047" stroke-width="4"/><path d="M250 224v63m0-55q-18-18-15-29m15 29q18-18 15-29" fill="none" stroke="#735e40" stroke-width="4" stroke-linecap="round"/><circle cx="208" cy="225" r="8" fill="#f4e8ca"/><circle cx="291" cy="225" r="8" fill="#f4e8ca"/>',
    animais: '<path d="M170 252q0-57 52-57t52 57q0 34-52 34t-52-34Zm91-5q0-48 45-48t45 48q0 29-45 29t-45-29Z" fill="#d4ac70" stroke="#8b704a" stroke-width="4"/><circle cx="205" cy="247" r="4"/><circle cx="236" cy="247" r="4"/><circle cx="290" cy="241" r="4"/><circle cx="324" cy="241" r="4"/><path d="M199 265q7 7 14 0m87 0q7 7 14 0" fill="none" stroke="#5d5040" stroke-width="3"/>',
    mini: '<g fill="#d8b77e" stroke="#99784c" stroke-width="3"><rect x="151" y="169" width="88" height="75" rx="8"/><rect x="261" y="169" width="88" height="75" rx="8"/><rect x="151" y="257" width="88" height="75" rx="8"/><rect x="261" y="257" width="88" height="75" rx="8"/></g><g fill="#78856c"><circle cx="195" cy="206" r="17"/><path d="M305 190 324 223h-38Z"/><path d="M172 295h46v7h-46zm10-15h26v10h-26z"/><circle cx="305" cy="294" r="18" fill="#c88665"/></g>',
    formas: '<path d="M167 276v-67q0-11 11-11h49q11 0 11 11v67q0 11-11 11h-49q-11 0-11-11Zm112-78h57v89h-57z" fill="#d7b779" stroke="#927344" stroke-width="4"/><circle cx="200" cy="239" r="18" fill="#829276"/><path d="m308 214 25 44h-50Z" fill="#c27d62"/><path d="M180 306h141" stroke="#97794f" stroke-width="4" stroke-linecap="round"/>',
    alfabeto: '<g fill="#e4d2ae" stroke="#98794e" stroke-width="3"><rect x="159" y="170" width="59" height="59" rx="7"/><rect x="220" y="170" width="59" height="59" rx="7"/><rect x="281" y="170" width="59" height="59" rx="7"/><rect x="190" y="232" width="59" height="59" rx="7"/><rect x="251" y="232" width="59" height="59" rx="7"/></g><g fill="#66755d" font-size="31" font-weight="bold" text-anchor="middle"><text x="188" y="210">A</text><text x="249" y="210">B</text><text x="310" y="210">C</text><text x="219" y="272">D</text><text x="280" y="272">E</text></g>',
    safari: '<path d="M181 270q0-53 54-53t54 53q0 25-54 25t-54-25Zm85-15q0-44 42-44t42 44q0 24-42 24t-42-24Z" fill="#d4ac70" stroke="#8d704a" stroke-width="4"/><circle cx="216" cy="265" r="4"/><circle cx="246" cy="265" r="4"/><path d="M283 249v-37l20 13 19-13v37" fill="#e2c88f" stroke="#8d704a" stroke-width="4"/><circle cx="299" cy="247" r="3"/><circle cx="309" cy="247" r="3"/>'
  }[product.visual];
  const puzzle = product.category === 'infantil';
  const bg = puzzle ? '#e8dec6' : product.category === 'lembrancas' ? '#eee5d4' : '#e7e0d1';
  const surface = puzzle ? '#d4bc91' : '#d9d0bd';
  const frame = puzzle ? '#aa8855' : product.category === 'lembrancas' ? '#b99a6d' : '#b49358';
  return `<svg viewBox="0 0 500 500" role="img" aria-label="${product.alt}" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="${bg}"/><path d="M0 355Q250 315 500 355v145H0Z" fill="${surface}"/><circle cx="408" cy="92" r="49" fill="#f5eddd" opacity=".58"/>${puzzle ? `<rect x="115" y="117" width="270" height="245" rx="12" fill="#f0e5cc" stroke="${frame}" stroke-width="15"/><rect x="130" y="132" width="240" height="215" rx="7" fill="#f8f1e2"/>` : product.category === 'decoracao' ? `<rect x="112" y="99" width="276" height="277" fill="${frame}"/><rect x="128" y="115" width="244" height="245" fill="#f1eadc"/><rect x="143" y="130" width="214" height="215" fill="#e5ddcb"/>` : `<rect x="102" y="125" width="296" height="240" rx="20" fill="#f6efe1" opacity=".62"/>`}<g>${art}</g><path d="M65 393h370" stroke="#b6a88e" stroke-width="2" opacity=".65"/></svg>`;
}

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
        ${renderIllustration(product)}
        <span class="product-tag">${product.badge}</span>
      </div>
      <div class="product-meta"><span>${product.categoryLabel}</span><span class="demo-label">Peça demonstrativa</span></div>
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
        <div class="cart-item-thumb" aria-hidden="true">${renderIllustration(item)}</div>
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
