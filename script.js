const shopUrl = 'https://shopee.com.br/93giazbazt';

const products = [
  {
    name: 'Kit lembrancinhas de agradecimento',
    category: 'lembrancas', categoryLabel: 'Lembranças', price: 'R$ 13,46', rating: '4,7', badge: 'Mais vendido',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    alt: 'Mesa de celebração preparada com detalhes delicados',
    url: 'https://shopee.com.br/Kit-Lembrancinhas-De-Agradecimento-Casamento-Noivado-Festas-de-aniversario-Mdf-Branco-i.1660094839.58254502689'
  },
  {
    name: 'Kit com 12 quebra-cabeças infantis',
    category: 'infantil', categoryLabel: 'Infantil', price: 'R$ 29,16', rating: '4,2', badge: 'Aprender brincando',
    image: 'https://images.unsplash.com/photo-1599629954294-14df9ec41f29?auto=format&fit=crop&w=900&q=85',
    alt: 'Brinquedos infantis de madeira em cores suaves',
    url: 'https://shopee.com.br/Kit-12-Jogos-Quebra-Cabe%C3%A7a-Infantil-%2812-unidades%29-brinquedo-pedagogo-para-crian%C3%A7a-aprendizado-i.1660094839.58204507690'
  },
  {
    name: 'Quadro decorativo personalizado',
    category: 'decoracao', categoryLabel: 'Decoração', price: 'R$ 10,80', rating: '4,5', badge: 'Do seu jeito',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85',
    alt: 'Obra decorativa emoldurada em uma parede clara',
    url: 'https://shopee.com.br/Placa-Quadro-Decorativo-Personalizado-Com-Sua-Foto-Imagem-MDF-Familia-ora%C3%A7%C3%A3o-frases-Decora%C3%A7%C3%A3o-i.1660094839.58201085007'
  },
  {
    name: 'Quadro decorativo águia em voo',
    category: 'decoracao', categoryLabel: 'Decoração', price: 'R$ 10,80', rating: '4,7', badge: 'Arte para sua casa',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85',
    alt: 'Pintura expressiva em uma galeria de arte',
    url: 'https://shopee.com.br/Quadro-Decorativo-Sala-%C3%81guia-em-Voo-Decora%C3%A7%C3%A3o-Arte-Realista-Decora%C3%A7%C3%A3o-Quarto-Escrit%C3%B3rio-i.1660094839.58250755047'
  },
  {
    name: 'Lembrancinhas personalizadas para casamento',
    category: 'lembrancas', categoryLabel: 'Lembranças', price: 'R$ 25,39', rating: '5,0', badge: 'Feito para celebrar',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85',
    alt: 'Detalhes de uma recepção de casamento com flores brancas',
    url: shopUrl
  },
  {
    name: 'Quadro dourado Santa Ceia',
    category: 'decoracao', categoryLabel: 'Decoração', price: 'R$ 166,25', rating: '—', badge: 'Destaque da loja',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=85',
    alt: 'Pintura clássica emoldurada com acabamento dourado',
    url: 'https://shopee.com.br/Quadro-decorativo-grande-santa-ceia-dourada-religiosa-jesus-e-disc%C3%ADpulos-luxo-dourada-com-moldura-i.1660094839.58215713238'
  }
];

const grid = document.querySelector('#product-grid');
const search = document.querySelector('#product-search');
let selectedFilter = 'todos';

function renderProducts() {
  const term = search.value.trim().toLocaleLowerCase('pt-BR');
  const visible = products.filter((product) => {
    const matchesFilter = selectedFilter === 'todos' || product.category === selectedFilter;
    const matchesSearch = !term || `${product.name} ${product.categoryLabel}`.toLocaleLowerCase('pt-BR').includes(term);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = visible.length ? visible.map((product, index) => `
    <article class="product-card" style="animation-delay:${index * 65}ms">
      <a class="product-photo" href="${product.url}" target="_blank" rel="noreferrer" aria-label="Ver ${product.name} na Shopee">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" />
        <span class="product-tag">${product.badge}</span>
        <span class="product-open" aria-hidden="true">↗</span>
      </a>
      <div class="product-meta"><span>${product.categoryLabel}</span><span class="rating">★ ${product.rating}</span></div>
      <h3>${product.name}</h3>
      <div class="product-bottom"><span class="product-price">${product.price} <small>na Shopee</small></span><a href="${product.url}" target="_blank" rel="noreferrer">Ver produto ↗</a></div>
    </article>`).join('') : '<p class="empty-state">Não encontramos essa peça. Tente outra busca.</p>';
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
renderProducts();

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
