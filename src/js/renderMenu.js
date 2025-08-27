export function renderMenu(menu, containerSelector) {
  const container = document.querySelector(containerSelector);

  menu.forEach(category => {
    const categoryEl = document.createElement('li');
    categoryEl.classList.add('menu-category');

    categoryEl.innerHTML = `
    <h2 class="menu-cat-title">${category.name}</h2>
    <ul class="menu-items">
      ${category.items
        .map(
          item => `
        <li class="menu-item">
          ${
            item.imgUrl && item.imgUrl.trim() !== ''
              ? `
            <img src="${item.imgUrl}" alt="${item.product}"/>
            <div>
              <p class="menu-name">${item.product}</p>
              <p class="menu-price">${item.price}</p>
            </div>`
              : `
            <div class="menu-info">
              <p class="menu-name">${item.product}</p>
              <p class="menu-price">${item.price}</p>
            </div>
            `
          }
        </li>
        `
        )
        .join('')}
    </ul>
    `;

    container.appendChild(categoryEl);
  });
}

export function renderFilters(menu, filterSelector, listContainer) {
  const container = document.querySelector(filterSelector);
  const list = document.querySelector(listContainer);

  if (menu.length <= 1) {
    container.innerHTML = '';
    return;
  }
  
  const categories = ['All', ...menu.map(cat => cat.name)];

  container.innerHTML = categories
    .map(
      cat => `
    <li>
      <button class="filter-btn"  data-filter="${cat}">${cat}</button>
    </li>
  `
    )
    .join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container
        .querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      list.innerHTML = '';
      if (btn.dataset.filter === 'All') {
        renderMenu(menu, listContainer);
      } else {
        const filtered = menu.filter(cat => cat.name === btn.dataset.filter);
        renderMenu(filtered, listContainer);
      }
    });
  });

  const allBtn = container.querySelector('.filter-btn[data-filter="All"]');
  if (allBtn) {
    allBtn.classList.add('active');
  }
}
