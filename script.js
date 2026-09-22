/* ==================================================
   NOMOR WHATSAPP TOKO
================================================== */
const WHATSAPP_NUMBER = "6285781468348";


/* ==================================================
   DATA PRODUK (LENGKAP DENGAN BADGE & DESKRIPSI)
================================================== */
const products = [
  {
    id:1,
    name:"AMER AL-OUDH 6ml Roll on Original parfum",
    category:"Original",
    price:20000,
    oldPrice:25000,
    sold:2,
    rating:"4.9",
    discount:"32%",
    badge:"terlaris", // Opsi: "terlaris", "baru", atau ""
    image: "ameraloud.jpg",
    isSoldOut: false,
    desc: "Aroma khas Oud manis kayu dengan sentuhan rempah lembut. Non-alkohol, tahan 12+ jam. Cocok untuk sholat & majlis."
  },
  {
    id:2,
    name:"HARAMAIN OUD 12ml Roll on PREMIUM PARFUM",
    category:"Premium",
    price:25000,
    oldPrice:30000,
    sold:4,
    rating:"4.9",
    discount:"29%",
    badge:"terlaris",
    image: "Haramainoud.jpg",
    isSoldOut: false,
    desc: "Aroma Oud mewah dipadu dengan wangi segar khas Arab. Kemasan 12ml tahan seharian."
  },
  {
    id:3,
    name:"DALAL 6ml Roll on original parfum",
    category:"Original",
    price:20000,
    oldPrice:25000,
    sold:3,
    rating:"4.8",
    discount:"28%",
    badge:"",
    image: "DALAL.jpg",
    isSoldOut: false,
    desc: "Wangi manis vanila berpadu dengan karamel dan jeruk segar. Sangat lembut dan tidak bikin pusing."
  },
  {
    id:4,
    name:"KASTURI KIJANG 6ml Roll on Original parfum",
    category:"Original",
    price:20000,
    oldPrice:27000,
    sold:2,
    rating:"5.0",
    discount:"30%",
    badge:"baru",
    image: "kasturikijang.jpg",
    isSoldOut: false,
    desc: "Minyak Kasturi Kijang murni dengan aroma tajam & berkarakter. Sangat dianjurkan untuk ibadah."
  },
  {
    id:5,
    name:"BLACK OUD 6ml Roll on Original parfum",
    category:"Original",
    price:20000,
    oldPrice:25000,
    sold:1,
    rating:"4.9",
    discount:"29%",
    badge:"",
    image: "blackoud.jpg",
    isSoldOut: false,
    desc: "Kombinasi harum rempah maskulin & kayu gaharu hitam. Memberikan kesan gagah dan elegan."
  },
  {
    id:6,
    name:"Parfum Roll on 6ml Reguler (request)",
    category:"Reguler",
    price:12000,
    oldPrice:15000,
    sold:7,
    rating:"4.9",
    discount:"30%",
    badge:"terlaris",
    image: "minyak.jpg",
    isSoldOut: false,
    desc: "Pilihan aroma reguler variatif (bisa request via catatan WA). Harum segar dan ekonomis."
  },
  {
    id:7,
    name:"KHAMRAH NOIR 12ML Roll on PREMIUM PARFUM",
    category:"Premium",
    price:25000,
    oldPrice:30000,
    sold:2,
    rating:"4.9",
    discount:"27%",
    badge:"baru",
    image: "khamrahnoir.jpg",
    isSoldOut: false,
    desc: "Aroma manis kayu manis dan vanila gelap yang hangat dan mewah."
  },
  {
    id:8,
    name:"AL HARAMAIN 6ML Roll on PREMIUM PARFUM",
    category:"Premium",
    price:25000,
    oldPrice:34000,
    sold:3,
    rating:"4.9",
    discount:"30%",
    badge:"",
    image: "alharamain.jpg",
    isSoldOut: true,
    desc: "Parfum Timur Tengah favorit dengan keharuman bungaan dan kayu yang tahan lama."
  },
  {
    id:9,
    name:"RED ROSE 6ml Roll on Original parfum",
    category:"Original",
    price:20000,
    oldPrice:25000,
    sold:10,
    rating:"5.0",
    discount:"33%",
    badge:"",
    image: "redrose.jpg",
    isSoldOut: true,
    desc: "Aroma mawar merah segar yang murni dan menenangkan."
  },
  {
    id:10,
    name:"KHAMRAH DUBAI 12ML Roll on PREMIUM parfum",
    category:"Premium",
    price:25000,
    oldPrice:35000,
    sold:5,
    rating:"4.9",
    discount:"25%",
    badge:"baru",
    image: "khamrahdubai.jpg",
    isSoldOut: false,
    desc: "Sentuhan aroma khas sultan Dubai yang rempah manis dan mewah."
  },
  {
    id:11,
    name:"MUSK MADAWI 12ML Roll on PREMIUM parfum",
    category:"Premium",
    price:25000,
    oldPrice:28000,
    sold:1,
    rating:"4.9",
    discount:"21%",
    badge:"",
    image: "muskmadawi.jpg",
    isSoldOut: false,
    desc: "Perpaduan musk lembut dan buah peach segar khas parfum Madawi."
  },
  {
    id:12,
    name:"MUSK MAKKAH 6ML Roll on PREMIUM",
    category:"Premium",
    price:25000,
    oldPrice:35000,
    sold:4,
    rating:"4.9",
    discount:"22%",
    badge:"",
    image: "muskmakkah.jpg",
    isSoldOut: true,
    desc: "Aroma khas tanah suci Makkah yang menyejukkan hati."
  },
  {
    id:13,
    name:"HAJAR ASWAD 6Ml Roll on Original parfum",
    category:"Reguler",
    price:20000,
    oldPrice:25000,
    sold:3,
    rating:"4.8",
    discount:"25%",
    badge:"",
    image: "hajaraswad.jpg",
    isSoldOut: true,
    desc: "Aroma legendaris Hajar Aswad yang kuat, tegas, dan tahan lama."
  },
  {
    id:14,
    name:"BUBBLEGUM 6ML Roll on Original parfum",
    category:"Original",
    price:20000,
    oldPrice:25000,
    sold:2,
    rating:"5.0",
    discount:"23%",
    badge:"",
    image: "bubblegum.jpg",
    isSoldOut: true,
    desc: "Aroma permen karet yang manis, ceria, dan disukai anak muda."
  },
  {
    id:15,
    name:"MISK THAHARA 6ML Roll on Original parfum",
    category:"Original",
    price:20000,
    oldPrice:25000,
    sold:2,
    rating:"5.0",
    discount:"23%",
    badge:"",
    image: "misktahara.jpg",
    isSoldOut: true,
    desc: "Misk putih kental dengan wangi lembut, bersih, dan higienis."
  },
  {
    id:16,
    name:"BAKHOR 6ML Roll on Original parfum",
    category:"Original",
    price:20000,
    oldPrice:25000,
    sold:2,
    rating:"5.0",
    discount:"23%",
    badge:"",
    image: "bakhor.jpg",
    isSoldOut: true,
    desc: "Aroma asap kayu bakhoor tradisi Arab yang khas dan khusyu."
  },
  {
    id:17,
    name:"SIWAK Asli Miswak 12cm",
    category:"Lainnya",
    price:5000,
    oldPrice:10000,
    sold:2,
    rating:"5.0",
    discount:"23%",
    badge:"",
    image: "siwak.jpg",
    isSoldOut: true,
    desc: "Kayu siwak asli untuk menjaga kebersihan mulut sesuai sunnah."
  },
  {
    id:18,
    name:"KAOS BAND METAL LINKIN PARK SIZE L",
    category:"Lainnya",
    price:108000,
    oldPrice:120000,
    sold:1,
    rating:"5.0",
    discount:"23%",
    badge:"",
    image: "kaoslp.jpg",
    isSoldOut: true,
    desc: "Kaos band distro bahan katun combbed nyaman ukuran L."
  }
];

let cart = [];
let wishlist = JSON.parse(localStorage.getItem("najib_wishlist")) || [];
let currentCategory = "Semua";


/* ==================================================
   HELPER LOCK SCROLL LAYAR BELAKANG
================================================== */
function checkLockScroll() {
  const hasOpenModal = document.querySelector(".modal-overlay.show");
  const hasOpenCart = document.getElementById("cart").classList.contains("show");
  
  if (hasOpenModal || hasOpenCart) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}


/* ==================================================
   FORMAT RUPIAH
================================================== */
function rupiah(number){
  return new Intl.NumberFormat("id-ID", {
    style:"currency",
    currency:"IDR",
    maximumFractionDigits:0
  }).format(number);
}


/* ==================================================
   TAMPILKAN PRODUK
================================================== */
function displayProducts(list){
  const container = document.getElementById("produk");

  if(list.length === 0){
    container.innerHTML = `<div class="no-result">😢<br><br>Produk tidak ditemukan.</div>`;
    return;
  }

  container.innerHTML = list.map(product => {
    const isFav = wishlist.includes(product.id);
    
    let badgeHTML = "";
    if (product.badge === "terlaris") {
      badgeHTML = `<span class="badge-tag best">🔥 Terlaris</span>`;
    } else if (product.badge === "baru") {
      badgeHTML = `<span class="badge-tag new">✨ Baru</span>`;
    }

    return `
      <div class="product" ${product.isSoldOut ? 'style="opacity: 0.65;"' : ''} onclick="openProductModal(${product.id})">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          
          <span class="discount" ${product.isSoldOut ? 'style="background:#666;"' : ''}>
            ${product.isSoldOut ? 'HABIS' : '-' + product.discount}
          </span>

          ${badgeHTML}

          <button class="wishlist-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <div class="product-body">
          <div class="product-name">${product.name}</div>
          <div class="price">${rupiah(product.price)}</div>
          <div><span class="old-price">${rupiah(product.oldPrice)}</span></div>
          <div class="sold"><span class="rating">★ ${product.rating}</span> &nbsp;•&nbsp; ${product.sold} terjual</div>

          ${product.isSoldOut ? `
            <button class="add" style="background:#ccc; color:#666; border-color:#ccc; cursor:not-allowed;" disabled>Stok Habis</button>
          ` : `
            <button class="add" onclick="event.stopPropagation(); addToCart(${product.id})">+ Tambah</button>
          `}
        </div>
      </div>
    `;
  }).join("");
}


/* ==================================================
   TOGGLE WISHLIST (FAVORIT)
================================================== */
function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(favId => favId !== id);
    showToastText("Dihapus dari favorit 🤍");
  } else {
    wishlist.push(id);
    showToastText("Disimpan ke favorit ❤️");
  }
  
  localStorage.setItem("najib_wishlist", JSON.stringify(wishlist));
  searchProduct();
}


/* ==================================================
   FITUR BAGIKAN PRODUK (SHARE) WITH AUTOMATIC LINK
================================================== */
function shareProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const currentUrl = window.location.href;
  const shareText = `Yuk cek *${product.name}* di NajibStore! ✨\n\n💰 *Harga:* ${rupiah(product.price)}\n📝 *Deskripsi:* ${product.desc}\n\n🛍️ *Beli / Lihat Katalog Lengkap:* \n${currentUrl}`;

  if (navigator.share) {
    navigator.share({
      title: product.name,
      text: shareText,
      url: currentUrl
    }).catch(() => {});
  } else {
    const waUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, "_blank");
  }
}


/* ==================================================
   SEARCH & SORTING
================================================== */
function searchProduct(){
  const keyword = document.getElementById("search").value.toLowerCase();
  
  let result = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(keyword);
    const categoryMatch = currentCategory === "Semua" || product.category === currentCategory;
    return nameMatch && categoryMatch;
  });

  const sortValue = document.getElementById("sortSelect").value;
  if(sortValue === "price-low"){
    result.sort((a,b) => a.price - b.price);
  } else if(sortValue === "price-high"){
    result.sort((a,b) => b.price - a.price);
  } else if(sortValue === "best-seller"){
    result.sort((a,b) => b.sold - a.sold);
  }

  displayProducts(result);
}

function sortProducts(){
  searchProduct();
}


/* ==================================================
   FILTER CATEGORY
================================================== */
function filterCategory(category, element){
  currentCategory = category;
  document.querySelectorAll(".category").forEach(item => item.classList.remove("active"));
  element.classList.add("active");
  searchProduct();
}


/* ==================================================
   POP-UP DETAIL PRODUK
================================================== */
function openProductModal(id){
  const product = products.find(p => p.id === id);
  if(!product) return;

  const isFav = wishlist.includes(product.id);

  const body = document.getElementById("modalDetailBody");
  body.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-detail-img">
    <div class="modal-detail-title">${product.name}</div>
    <div class="modal-detail-price">${rupiah(product.price)} <span class="old-price">${rupiah(product.oldPrice)}</span></div>
    <div class="modal-detail-desc"><b>Aroma & Deskripsi:</b><br>${product.desc}</div>
    
    <div style="display:flex; gap:8px; margin-bottom:10px;">
      <button class="add" style="flex:1;" onclick="toggleWishlist(${product.id}); openProductModal(${product.id});">
        ${isFav ? '❤️ Favorit Saya' : '🤍 Simpan Favorit'}
      </button>
      <button class="add" style="flex:1; border-color:#25d366; color:#25d366;" onclick="shareProduct(${product.id})">
        📲 Bagikan
      </button>
    </div>

    ${product.isSoldOut ? `
      <button class="checkout" style="width:100%; background:#ccc; cursor:not-allowed;" disabled>Stok Habis</button>
    ` : `
      <button class="checkout" style="width:100%;" onclick="addToCart(${product.id}); closeProductModal();">🛒 Tambah ke Keranjang</button>
    `}
  `;

  document.getElementById("productModal").classList.add("show");
  checkLockScroll();
}

function closeProductModal(){
  document.getElementById("productModal").classList.remove("show");
  checkLockScroll();
}

function closeProductModalOutside(e){
  if(e.target.id === "productModal") closeProductModal();
}


/* ==================================================
   MODAL CARA ORDER
================================================== */
function openInfoModal(){
  document.getElementById("infoModal").classList.add("show");
  checkLockScroll();
}

function closeInfoModal(){
  document.getElementById("infoModal").classList.remove("show");
  checkLockScroll();
}

function closeInfoModalOutside(e){
  if(e.target.id === "infoModal") closeInfoModal();
}


/* ==================================================
   KERANJANG & FORM CHECKOUT
================================================== */
function addToCart(id){
  const product = products.find(p => p.id === id);
  if(!product || product.isSoldOut) return;

  const existing = cart.find(item => item.id === id);
  if(existing){
    existing.qty++;
  } else {
    cart.push({ ...product, qty:1 });
  }

  updateCart();
  showToastText("Produk ditambahkan ke keranjang ✓");
}

function updateCart(){
  const count = document.getElementById("cartCount");
  const items = document.getElementById("cartItems");
  const total = document.getElementById("total");

  let totalQty = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalQty += item.qty;
    totalPrice += item.price * item.qty;
  });

  count.textContent = totalQty;
  total.textContent = rupiah(totalPrice);

  if(cart.length === 0){
    items.innerHTML = `<div class="empty">🛒<br><br>Keranjang kamu masih kosong.<br>Yuk pilih parfum favoritmu!</div>`;
    document.getElementById("cartForm").style.display = "none";
    return;
  }

  document.getElementById("cartForm").style.display = "flex";

  items.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-img"><img src="${item.image}" alt="${item.name}"></div>
      <div class="cart-info">
        <div class="cart-name">${item.name}</div>
        <div class="cart-price">${rupiah(item.price)}</div>
        <div class="qty">
          <button onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id},1)">+</button>
        </div>
        <span class="remove" onclick="removeItem(${item.id})">Hapus</span>
      </div>
    </div>
  `).join("");
}

function changeQty(id, amount){
  const item = cart.find(item => item.id === id);
  if(!item) return;

  item.qty += amount;
  if(item.qty <= 0) cart = cart.filter(item => item.id !== id);
  updateCart();
}

function removeItem(id){
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function openCart(){
  document.getElementById("cart").classList.add("show");
  document.getElementById("overlay").classList.add("show");
  checkLockScroll();
}

function closeCart(){
  document.getElementById("cart").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
  checkLockScroll();
}

function showToastText(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1500);
}


/* ==================================================
   CHECKOUT AUTOMATIC FORM TO WHATSAPP
================================================== */
function checkout(){
  if(cart.length === 0){
    alert("Keranjang masih kosong!");
    return;
  }

  const name = document.getElementById("buyerName").value.trim();
  const address = document.getElementById("buyerAddress").value.trim();
  const courier = document.getElementById("buyerCourier").value;

  if(!name || !address){
    alert("Mohon isi Nama Lengkap dan Alamat Pengiriman terlebih dahulu!");
    return;
  }

  let message = "Halo NajibStore 👋\n\nSaya ingin memesan produk berikut:\n\n";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    message += `🧴 ${item.name}\n   Jumlah: ${item.qty}\n   Subtotal: ${rupiah(subtotal)}\n\n`;
  });

  message += `💰 TOTAL: ${rupiah(total)}\n\n`;
  message += `📋 DATA PENGIRIMAN:\n`;
  message += `👤 Nama: ${name}\n`;
  message += `📍 Alamat: ${address}\n`;
  message += `🚚 Pilihan Kurir: ${courier}\n\n`;
  message += `Mohon info total ongkir dan nomor rekening pembayarannya. Terima kasih! 🙏`;

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}


/* ==================================================
   AUTO SLIDER BANNER (4 DETIK)
================================================== */
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function nextSlide() {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 4000);


/* ==================================================
   INIT
================================================== */
displayProducts(products);
updateCart();


/* ==================================================
   MODAL ALAMAT TOKO
================================================== */
function openAddressModal(){
  document.getElementById("addressModal").classList.add("show");
  checkLockScroll();
}

function closeAddressModal(){
  document.getElementById("addressModal").classList.remove("show");
  checkLockScroll();
}

function closeAddressModalOutside(e){
  if(e.target.id === "addressModal") closeAddressModal();
}


/* ==================================================
   MODAL TENTANG TOKO
================================================== */
function openAboutModal(){
  document.getElementById("aboutModal").classList.add("show");
  checkLockScroll();
}

function closeAboutModal(){
  document.getElementById("aboutModal").classList.remove("show");
  checkLockScroll();
}

function closeAboutModalOutside(e){
  if(e.target.id === "aboutModal") closeAboutModal();
}
