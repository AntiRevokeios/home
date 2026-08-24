// ========================================
// APP.JS - DNS ESIGN CATALOG
// ========================================

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initApp();
});

// State
let currentSort = 'latest';
let currentSearch = '';
let filteredItems = [...items];

// ========================================
// INITIALIZE APP
// ========================================
function initApp() {
    renderDnsCards();
    renderItems(items);
    setupEventListeners();
}

// ========================================
// RENDER DNS CARDS
// ========================================
function renderDnsCards() {
    const container = document.getElementById('dnsCards');
    if (!container || !dnsProfiles || dnsProfiles.length === 0) return;

    container.innerHTML = dnsProfiles.map(profile => `
        <div class="dns-card">
            <div class="dns-card-icon">
                <i data-lucide="shield-check"></i>
            </div>
            <div class="dns-card-info">
                <div class="dns-card-name">
                    ${profile.name}
                    <span class="dns-tag">${profile.tag}</span>
                </div>
                <div class="dns-card-desc">${profile.desc}</div>
            </div>
            <button class="action-btn btn-cert dns-download-btn" onclick="handleDnsDownload('${profile.id}')" aria-label="Tải ${profile.name}">
                <i class="bi bi-cloud-download"></i>
                <span>Download</span>
            </button>
        </div>
    `).join('');

    lucide.createIcons();
}

// ========================================
// HANDLE DNS DOWNLOAD
// ========================================
function handleDnsDownload(profileId) {
    const profile = dnsProfiles.find(p => p.id === profileId);
    if (!profile) return;
    window.open(profile.download, '_blank');
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Sort dropdown
    const sortBtn = document.getElementById('sortBtn');
    const sortMenu = document.getElementById('sortMenu');
    sortBtn.addEventListener('click', toggleSortMenu);

    // Sort options
    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
        option.addEventListener('click', (e) => handleSort(e.target.dataset.sort));
    });

    // Modal close
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // Lightbox close
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);

    // ESC key handler
    document.addEventListener('keydown', handleEscKey);

    // Close sort menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sort-dropdown')) {
            sortMenu.classList.remove('active');
        }
    });
}

// ========================================
// RENDER ITEMS
// ========================================
function renderItems(itemsToRender) {
    const gamesGrid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');

    if (itemsToRender.length === 0) {
        gamesGrid.innerHTML = '';
        noResults.style.display = 'block';
        lucide.createIcons();
        return;
    }

    noResults.style.display = 'none';
    gamesGrid.innerHTML = itemsToRender.map(item => renderItemCard(item)).join('');

    lucide.createIcons();
}

// ========================================
// RENDER ITEM CARD
// ========================================
function renderItemCard(item) {
    const formattedDate = formatDate(item.updated);
    return `
        <div class="game-card" data-game-id="${item.id}">
            <div class="game-icon">
                <img src="${item.icon}" alt="${item.name}" loading="lazy">
            </div>
            <div class="game-details">
                <div class="game-name">${item.name}</div>
                <div class="game-meta">
                    <span class="meta-cert">${item.certName || 'Cert'}</span>
                    <span class="meta-dot">·</span>
                    <span class="meta-date">${formattedDate}</span>
                </div>
            </div>
            <div class="card-actions">
                <button class="action-btn btn-esign" onclick="handleItemDownload(event, '${item.id}', 'esign')" aria-label="Tải eSign">
                    <i class="bi bi-cloud-arrow-down"></i>
                    <span>eSign</span>
                </button>
                <button class="action-btn btn-cert" onclick="handleItemDownload(event, '${item.id}', 'cert')" aria-label="Tải Cert">
                    <i class="bi bi-patch-check"></i>
                    <span>Cert</span>
                </button>
            </div>
        </div>
    `;
}

// ========================================
// SEARCH HANDLER
// ========================================
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase().trim();
    applyFilters();
}

// ========================================
// SORT HANDLER
// ========================================
function handleSort(sortType) {
    currentSort = sortType;

    const sortLabel = document.getElementById('sortLabel');
    const sortOptions = document.querySelectorAll('.sort-option');

    sortOptions.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.sort === sortType) {
            option.classList.add('active');
            sortLabel.textContent = option.textContent;
        }
    });

    document.getElementById('sortMenu').classList.remove('active');
    applyFilters();
}

// ========================================
// TOGGLE SORT MENU
// ========================================
function toggleSortMenu(e) {
    e.stopPropagation();
    document.getElementById('sortMenu').classList.toggle('active');
}

// ========================================
// APPLY FILTERS (SEARCH + SORT)
// ========================================
function applyFilters() {
    filteredItems = items.filter(item => {
        if (!currentSearch) return true;
        return item.name.toLowerCase().includes(currentSearch) ||
            item.version.toLowerCase().includes(currentSearch);
    });

    filteredItems.sort((a, b) => {
        switch (currentSort) {
            case 'latest':
                return new Date(b.updated) - new Date(a.updated);
            case 'oldest':
                return new Date(a.updated) - new Date(b.updated);
            case 'a-z':
                return a.name.localeCompare(b.name);
            case 'z-a':
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    });

    renderItems(filteredItems);
}

// ========================================
// CLOSE MODAL
// ========================================
function closeModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// OPEN LIGHTBOX
// ========================================
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
}

// ========================================
// CLOSE LIGHTBOX
// ========================================
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Link quảng cáo — thay bằng link affiliate của bạn
const AD_URL = 'https://s.shopee.vn/1gI4HVwTJ2';

// API wrap link gốc
const API_PREFIX = 'https://vuotnhanh.com/st?api=e29bd46a-78cd-4c6a-a626-a28528f37040&url=';

// Đã xem QC toàn trang chưa (1 lần duy nhất)
let adWatched = false;

// ========================================
// HANDLE ITEM DOWNLOAD (esign hoặc cert)
// ========================================
function handleItemDownload(e, itemId, type) {
    e.stopPropagation();
    const item = items.find(g => g.id === itemId);
    if (!item) return;

    // Cert: mở thẳng, không cần qua quảng cáo
    if (type === 'cert') {
        window.open(item.cert, '_blank');
        return;
    }

    // eSign: chỉ cần xem QC 1 lần cho cả trang
    if (!adWatched) {
        adWatched = true;
        window.open(AD_URL, '_blank');

        // Đánh dấu tất cả nút eSign thành ready
        document.querySelectorAll('.btn-esign').forEach(btn => {
            btn.classList.add('ready');
            btn.title = 'Nhấn lại để tải';
        });
    } else {
        const wrappedUrl = API_PREFIX + encodeURIComponent(item.download);
        window.open(wrappedUrl, '_blank');
    }
}

// ========================================
// HANDLE ESC KEY
// ========================================
function handleEscKey(e) {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            closeLightbox();
            return;
        }
        const modal = document.getElementById('gameModal');
        if (modal.classList.contains('active')) {
            closeModal();
            return;
        }
    }
}

// ========================================
// FORMAT DATE — ngắn gọn: "24/08/26"
// ========================================
function formatDate(dateString) {
    const d = new Date(dateString);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yy = String(d.getFullYear()).slice(2);
    return `${dd}/${mm}/${yy}`;
}
