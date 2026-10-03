/* ==================================================
   NOMOR WHATSAPP TOKO
================================================== */
const WHATSAPP_NUMBER = "6285781468348";

/* UNICODE EMOJI CONSTANTS */
const EMOJI = {
  waving: "\u{1F44B}", // 👋
  bottle: "\u{1F9E4}", // 🧴
  money:  "\u{1F4B0}", // 💰
  clip:   "\u{1F4CB}", // 📋
  user:   "\u{1F464}", // 👤
  pin:    "\u{1F4CD}", // 📍
  truck:  "\u{1F69A}", // 🚚
  pray:   "\u{1F64F}", // 🙏
  sparkles: "\u{2728}",// ✨
  note:   "\u{1F4DD}", // 📝
  bag:    "\u{1F6CD}", // 🛍️
  fire:   "\u{1F525}", // 🔥
  heart:  "\u{2764}\u{FE0F}", // ❤️
  whiteHeart: "\u{1F90D}",    // 🤍
  crying: "\u{1F622}", // 😢
  cart:   "\u{1F6D2}", // 🛒
  phone:  "\u{1F4F2}"  // 📲
};


/* ==================================================
   DATA PRODUK
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
    badge:"terlaris",
    image: "ameraloud.jpg",
    isSoldOut: false,
    desc: "Aroma khas Oud manis kayu dengan sentuhan rempah lembut. Non-alkohol, tahan 12+ jam. Cocok untuk sholat dan bepergian."
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
    desc: "Minyak Kasturi Kijang murni dengan aroma tajam & berkarakter. Sangat dianjurkan untuk dipakai  beribadah."
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
  },
  {
    id:19,
    name:"Mykonos - California Club Extrait De Parfum 50ml - Default",
    category:"Premium",
    price:220000,
    oldPrice:309000,
    sold:1,
    rating:"5.0",
    discount:"23%",
    badge:"",
    image: "mykonos1.jpg",
    isSoldOut: false,
    desc: "Mykonos parfum yang sering dibilang goib, wanginya sangat segar dan tentu tahan lama,gas order sekarang! keburu Goib!"
  },
  {
    id:20,
    name:"Mykonos - Bonfire Vanilla Extrait de Parfum 50ml - Default",
    category:"Premium",
    price:159000,
    oldPrice:229000,
    sold:1,
    rating:"5.0",
    discount:"23%",
    badge:"",
    image: "mykonos2.jpg",
    isSoldOut: false,
    desc: "Mykonos parfum yang sering dibilang goib, wanginya sangat segar dan tentu tahan lama,gas order sekarang! keburu Goib!."
  }
];

let cart = [];
let wishlist = (JSON.parse(localStorage.getItem("najib_wishlist")) || [])
  .map(Number)
  .filter(Number.isFinite);
let currentCategory = "Semua";
localStorage.setItem("najib_wishlist", JSON.stringify(wishlist));


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
    container.innerHTML = `<div class="no-result">${EMOJI.crying}<br><br>Produk tidak ditemukan.</div>`;
    return;
  }

  container.innerHTML = list.map(product => {
    const isFav = wishlist.includes(product.id);
    
    let badgeHTML = "";
    if (product.badge === "terlaris") {
      badgeHTML = `<span class="badge-tag best">${EMOJI.fire} Terlaris</span>`;
    } else if (product.badge === "baru") {
      badgeHTML = `<span class="badge-tag new">${EMOJI.sparkles} Baru</span>`;
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
            ${isFav ? EMOJI.heart : EMOJI.whiteHeart}
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
  id = Number(id);
  if (!Number.isFinite(id)) return;

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(favId => favId !== id);
    showToastText(`Dihapus dari favorit ${EMOJI.whiteHeart}`);
  } else {
    wishlist.push(id);
    showToastText(`Disimpan ke favorit ${EMOJI.heart}`);
  }

  localStorage.setItem("najib_wishlist", JSON.stringify(wishlist));
  searchProduct();
  renderRecommendations();
  renderWishlistModal();
}


/* ==================================================
   FITUR BAGIKAN PRODUK (SAFE UNICODE SHARE)
================================================== */
function shareProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const currentUrl = window.location.href;
  const shareText = `Yuk cek *${product.name}* di NajibStore! ${EMOJI.sparkles}\n\n${EMOJI.money} *Harga:* ${rupiah(product.price)}\n${EMOJI.note} *Deskripsi:* ${product.desc}\n\n${EMOJI.bag} *Beli / Lihat Katalog Lengkap:* \n${currentUrl}`;

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
        ${isFav ? EMOJI.heart + ' Favorit Saya' : EMOJI.whiteHeart + ' Simpan Favorit'}
      </button>
      <button class="add" style="flex:1; border-color:#25d366; color:#25d366;" onclick="shareProduct(${product.id})">
        ${EMOJI.phone} Bagikan
      </button>
    </div>

    ${product.isSoldOut ? `
      <button class="checkout" style="width:100%; background:#ccc; cursor:not-allowed;" disabled>Stok Habis</button>
    ` : `
      <button class="checkout" style="width:100%;" onclick="addToCart(${product.id}); closeProductModal();">${EMOJI.cart} Tambah ke Keranjang</button>
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
    items.innerHTML = `<div class="empty">${EMOJI.cart}<br><br>Keranjang kamu masih kosong.<br>Yuk pilih parfum favoritmu!</div>`;
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
   CHECKOUT AUTOMATIC FORM TO WHATSAPP (UNICODE EMOJI)
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

  let message = `Halo NajibStore ${EMOJI.waving}\n\nSaya ingin memesan produk berikut:\n\n`;
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    message += `${EMOJI.bottle} ${item.name}\n   Jumlah: ${item.qty}\n   Subtotal: ${rupiah(subtotal)}\n\n`;
  });

  message += `${EMOJI.money} TOTAL: ${rupiah(total)}\n\n`;
  message += `${EMOJI.clip} DATA PENGIRIMAN:\n`;
  message += `${EMOJI.user} Nama: ${name}\n`;
  message += `${EMOJI.pin} Alamat: ${address}\n`;
  message += `${EMOJI.truck} Pilihan Kurir: ${courier}\n\n`;
  message += `Mohon info total ongkir dan nomor rekening pembayarannya. Terima kasih! ${EMOJI.pray}`;

  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}


/* ==================================================
   AUTO SLIDER BANNER (5 DETIK)
================================================== */
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');

function nextSlide() {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 5000);




/* ==================================================
   LAYANAN DIGITAL — KUOTA & GAME TOP UP
================================================== */
const kuotaPackages = {
  Telkomsel:[{name:"Internet 3GB",price:15000},{name:"Internet 8GB",price:25000},{name:"Internet 15GB",price:40000},{name:"Internet 25GB",price:60000}],
  Indosat:[{name:"Internet 3GB",price:15000},{name:"Internet 8GB",price:25000},{name:"Internet 15GB",price:40000},{name:"Internet 25GB",price:60000}],
  XL:[{name:"Internet 3GB",price:15000},{name:"Internet 8GB",price:25000},{name:"Internet 15GB",price:40000},{name:"Internet 25GB",price:60000}],
  Tri:[{name:"Internet 3GB",price:15000},{name:"Internet 8GB",price:25000},{name:"Internet 15GB",price:40000},{name:"Internet 25GB",price:60000}],
  Smartfren:[{name:"Internet 3GB",price:15000},{name:"Internet 8GB",price:25000},{name:"Internet 15GB",price:40000},{name:"Internet 25GB",price:60000}]
};
const gameTopupPackages = {
  "Mobile Legends":[{name:"86 Diamonds",price:25000},{name:"172 Diamonds",price:49000},{name:"257 Diamonds",price:72000},{name:"344 Diamonds",price:95000}],
  "Free Fire":[{name:"70 Diamonds",price:10000},{name:"140 Diamonds",price:20000},{name:"355 Diamonds",price:50000},{name:"720 Diamonds",price:100000}],
  "PUBG Mobile":[{name:"60 UC",price:15000},{name:"325 UC",price:70000},{name:"660 UC",price:135000},{name:"1800 UC",price:350000}],
  "Clash of Clans":[{name:"Gold Pass",price:90000},{name:"Gems 500",price:75000},{name:"Gems 1200",price:160000},{name:"Gems 2500",price:320000}],
  "Honor of Kings":[{name:"80 Tokens",price:15000},{name:"240 Tokens",price:45000},{name:"500 Tokens",price:90000},{name:"1000 Tokens",price:175000}],
  "Roblox":[{name:"80 Robux",price:15000},{name:"400 Robux",price:70000},{name:"800 Robux",price:135000},{name:"1700 Robux",price:270000}]
};
const gameIcons={"Mobile Legends":"⚔️","Free Fire":"🔥","PUBG Mobile":"🔫","Clash of Clans":"🏰","Honor of Kings":"👑","Roblox":"🧱"};
let selectedKuota=kuotaPackages.Telkomsel[0];
let selectedGame="Mobile Legends";
let selectedGamePackage=gameTopupPackages[selectedGame][0];
function switchDigitalTab(tab,button){document.querySelectorAll(".digital-tab").forEach(b=>b.classList.remove("active"));document.querySelectorAll(".digital-panel").forEach(p=>p.classList.remove("active"));button.classList.add("active");document.getElementById("digital-"+tab).classList.add("active");}
function updateKuotaPackages(){const provider=document.getElementById("kuotaProvider").value,list=kuotaPackages[provider]||[];selectedKuota=list[0];document.getElementById("kuotaPackages").innerHTML=list.map((pkg,i)=>`<button type="button" class="package-option ${i===0?"selected":""}" onclick="selectKuota(${i})"><strong>${pkg.name}</strong><small>${rupiah(pkg.price)}</small></button>`).join("");}
function selectKuota(index){const list=kuotaPackages[document.getElementById("kuotaProvider").value]||[];if(!list[index])return;selectedKuota=list[index];document.querySelectorAll("#kuotaPackages .package-option").forEach((el,i)=>el.classList.toggle("selected",i===index));}
function renderGameList(){const c=document.getElementById("gameList");if(!c)return;c.innerHTML=Object.keys(gameTopupPackages).map(game=>`<button type="button" class="game-option ${game===selectedGame?"selected":""}" onclick='selectGame(${JSON.stringify(game)})'><span class="game-icon">${gameIcons[game]||"🎮"}</span><span>${game}</span></button>`).join("");}
function renderGamePackages(){const list=gameTopupPackages[selectedGame]||[];selectedGamePackage=list[0];const c=document.getElementById("gamePackages");if(!c)return;c.innerHTML=list.map((pkg,i)=>`<button type="button" class="package-option ${i===0?"selected":""}" onclick="selectGamePackage(${i})"><strong>${pkg.name}</strong><small>${rupiah(pkg.price)}</small></button>`).join("");const sf=document.getElementById("gameServerField"),si=document.getElementById("gameServerId"),label=document.getElementById("gameUserLabel"),ui=document.getElementById("gameUserId");if(selectedGame==="Mobile Legends"){sf.style.display="block";label.textContent="User ID";ui.placeholder="Masukkan User ID ML";si.placeholder="Masukkan Server ID";}else if(selectedGame==="Clash of Clans"){sf.style.display="none";label.textContent="Player Tag / ID";ui.placeholder="Contoh: #ABC123";si.value="";}else{sf.style.display="none";label.textContent="User ID / Player ID";ui.placeholder="Masukkan User ID";si.value="";}}
function selectGame(game){if(!gameTopupPackages[game])return;selectedGame=game;renderGameList();renderGamePackages();document.getElementById("gameUserId").value="";document.getElementById("gameServerId").value="";}
function selectGamePackage(index){const list=gameTopupPackages[selectedGame]||[];if(!list[index])return;selectedGamePackage=list[index];document.querySelectorAll("#gamePackages .package-option").forEach((el,i)=>el.classList.toggle("selected",i===index));}
function normalizePhone(value){return value.replace(/[^0-9]/g,"").trim();}
function orderKuota(){const provider=document.getElementById("kuotaProvider").value,number=normalizePhone(document.getElementById("kuotaNumber").value);if(number.length<10||number.length>15){alert("Masukkan nomor HP yang valid terlebih dahulu.");return;}const message=`Halo NajibStore 👋\n\nSaya ingin membeli KUOTA 📱\n\nProvider: ${provider}\nNomor HP: ${number}\nPaket: ${selectedKuota.name}\nHarga paket: ${rupiah(selectedKuota.price)}\n\nMohon konfirmasi ketersediaan, harga akhir, dan cara pembayarannya. Terima kasih 🙏`;window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank");}
function orderGameTopup(){const userId=document.getElementById("gameUserId").value.trim(),serverId=document.getElementById("gameServerId").value.trim();if(!userId){alert("Masukkan User ID / Player ID terlebih dahulu.");document.getElementById("gameUserId").focus();return;}if(selectedGame==="Mobile Legends"&&!serverId){alert("Masukkan Server ID Mobile Legends terlebih dahulu.");document.getElementById("gameServerId").focus();return;}const idLine=selectedGame==="Mobile Legends"?`Server ID: ${serverId}`:selectedGame==="Clash of Clans"?"Player Tag / ID: "+userId:"Player ID: "+userId;const message=`Halo NajibStore 👋\n\nSaya ingin TOP UP GAME 🎮\n\nGame: ${selectedGame}\nUser ID / Player ID: ${userId}\n${idLine}\n\nNominal: ${selectedGamePackage.name}\nHarga: ${rupiah(selectedGamePackage.price)}\n\nMohon konfirmasi ketersediaan, harga akhir, dan cara pembayarannya. Terima kasih 🙏`;window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank");}
/* ==================================================
   INIT
================================================== */
displayProducts(products);updateCart();updateKuotaPackages();renderGameList();renderGamePackages();


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


/* ==================================================
   SMART SHOPPING — VOUCHER, WISHLIST PRO & REKOMENDASI
================================================== */
const voucherList = {
  MIFKHOR48: {type:"percent", value:10, min:50000, maxDiscount:2000, label:"Diskon 10% (maks. Rp2.000)"},
  NAJIBSTORE26: {type:"percent", value:15, min:200000, maxDiscount:10000, label:"Diskon 15% (maks. Rp10.000)"},
  ONGKIR0: {type:"fixed", value:10000, min:100000, maxDiscount:10000, label:"Potongan Rp10.000"}
};
let activeVoucher = null;
let orderHistory = JSON.parse(localStorage.getItem("najib_orders")) || [];

function getCartSubtotal(){ return cart.reduce((sum,item)=>sum + (item.price * item.qty), 0); }
function getVoucherDiscount(subtotal){
  if(!activeVoucher || subtotal < activeVoucher.min) return 0;
  if(activeVoucher.type === "percent") return Math.min(Math.round(subtotal * activeVoucher.value / 100), activeVoucher.maxDiscount || Infinity);
  return Math.min(activeVoucher.value, subtotal);
}
function applyVoucher(){
  const input=document.getElementById("voucherInput");
  const result=document.getElementById("voucherResult");
  const code=(input.value||"").trim().toUpperCase();
  const voucher=voucherList[code];
  const subtotal=getCartSubtotal();
  if(!code){ result.textContent="Masukkan kode voucher dulu."; result.className="voucher-result error"; return; }
  if(!voucher){ activeVoucher=null; result.textContent="Kode voucher tidak ditemukan."; result.className="voucher-result error"; updateCart(); return; }
  if(subtotal < voucher.min){ activeVoucher=null; result.textContent=`Minimal belanja ${rupiah(voucher.min)}.`; result.className="voucher-result error"; updateCart(); return; }
  activeVoucher={...voucher, code};
  result.textContent=`✓ ${voucher.label} berhasil dipakai.`; result.className="voucher-result success";
  updateCart();
}

function renderRecommendations(){
  const c=document.getElementById("recommendProducts");
  if(!c) return;
  const favProducts=products.filter(p=>wishlist.includes(p.id) && !p.isSoldOut);
  const source=favProducts.length ? favProducts : products.filter(p=>!p.isSoldOut).slice().sort((a,b)=>b.sold-a.sold);
  const pool=[];
  source.forEach(p=>{ if(!pool.some(x=>x.id===p.id)) pool.push(p); });
  products.filter(p=>!p.isSoldOut && !pool.some(x=>x.id===p.id)).slice(0,6).forEach(p=>pool.push(p));
  c.innerHTML=pool.slice(0,6).map(p=>{
    const fav=wishlist.includes(p.id);
    return `<div class="product recommendation-card" onclick="openProductModal(${p.id})">
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="discount">-${p.discount}</span>
      <button class="wishlist-btn ${fav?'active':''}" onclick="event.stopPropagation();toggleWishlist(${p.id})">${fav?EMOJI.heart:EMOJI.whiteHeart}</button></div>
      <div class="product-body"><div class="product-name">${p.name}</div><div class="price">${rupiah(p.price)}</div><div class="sold"><span class="rating">★ ${p.rating}</span> • ${p.sold} terjual</div><button class="add" onclick="event.stopPropagation();addToCart(${p.id})">+ Tambah</button></div>
    </div>`;
  }).join("");
}
function renderWishlistModal(){
  const c=document.getElementById("wishlistModalBody");
  const fav=products.filter(p=>wishlist.includes(p.id));
  const count=document.getElementById("wishlistCountText");
  if(count) count.textContent=`${fav.length} produk tersimpan`;
  if(!c) return;
  if(!fav.length){ c.innerHTML=`<div class="wishlist-empty">❤️<br><b>Wishlist masih kosong</b><small>Tekan ❤️ pada produk yang kamu suka.</small></div>`; return; }
  c.innerHTML=`<div class="wishlist-grid">${fav.map(p=>`<div class="wishlist-item">
    <img src="${p.image}" alt="${p.name}"><div class="wishlist-info"><b>${p.name}</b><strong>${rupiah(p.price)}</strong><small>${p.isSoldOut?'Stok habis':'★ '+p.rating+' • '+p.sold+' terjual'}</small>
    <div class="wishlist-actions"><button onclick="openProductModal(${p.id})">Lihat</button>${p.isSoldOut?'':'<button onclick="addToCart('+p.id+')">+ Keranjang</button>'}<button class="danger" type="button" onclick="toggleWishlist(${p.id})">Hapus</button></div></div></div>`).join("")}</div>`;
}
function openWishlistModal(){ renderWishlistModal(); document.getElementById("wishlistModal").classList.add("show"); checkLockScroll(); }
function closeWishlistModal(){ document.getElementById("wishlistModal").classList.remove("show"); checkLockScroll(); }
function closeWishlistModalOutside(e){ if(e.target.id==="wishlistModal") closeWishlistModal(); }
function scrollToRecommendations(){ document.getElementById("recommendSection")?.scrollIntoView({behavior:"smooth"}); }

/* ==================================================
   TRACKING PESANAN LOKAL
================================================== */
function makeOrderCode(){ return "NS-"+Math.random().toString(36).slice(2,8).toUpperCase(); }
function saveOrderForTracking(code,total){
  const order={code,total,status:"Menunggu Konfirmasi",createdAt:new Date().toISOString()};
  orderHistory.unshift(order); orderHistory=orderHistory.slice(0,10); localStorage.setItem("najib_orders",JSON.stringify(orderHistory)); return order;
}
function openTrackingModal(){ document.getElementById("trackingModal").classList.add("show"); checkLockScroll(); const latest=orderHistory[0]; if(latest){document.getElementById("trackingCodeInput").value=latest.code; trackOrder();} }
function closeTrackingModal(){ document.getElementById("trackingModal").classList.remove("show"); checkLockScroll(); }
function closeTrackingModalOutside(e){ if(e.target.id==="trackingModal") closeTrackingModal(); }
function trackOrder(){
  const code=(document.getElementById("trackingCodeInput").value||"").trim().toUpperCase();
  const result=document.getElementById("trackingResult"); const order=orderHistory.find(o=>o.code===code);
  if(!order){ result.innerHTML=`<div class="tracking-empty">❓ Kode pesanan tidak ditemukan.</div>`; return; }
  result.innerHTML=`<div class="tracking-card"><div class="tracking-code">${order.code}</div><div class="tracking-status">🟡 ${order.status}</div><p>Total pesanan: <b>${rupiah(order.total)}</b></p><small>Dibuat: ${new Date(order.createdAt).toLocaleString('id-ID')}</small><div class="tracking-steps"><span class="done">✓ Pesanan dibuat</span><span class="current">● Menunggu konfirmasi admin</span><span>○ Diproses</span><span>○ Dikirim / selesai</span></div></div>`;
}

/* ==================================================
   CHECKOUT OVERRIDE — VOUCHER + PAYMENT + TRACKING
================================================== */
function checkout(){
  if(cart.length===0){alert("Keranjang masih kosong!");return;}
  const name=document.getElementById("buyerName").value.trim();
  const address=document.getElementById("buyerAddress").value.trim();
  const courier=document.getElementById("buyerCourier").value;
  const payment=document.getElementById("buyerPayment").value;
  if(!name||!address){alert("Mohon isi Nama Lengkap dan Alamat Pengiriman terlebih dahulu!");return;}
  const subtotal=getCartSubtotal(); const discount=getVoucherDiscount(subtotal); const total=Math.max(0,subtotal-discount); const code=makeOrderCode();
  saveOrderForTracking(code,total);
  let message=`Halo NajibStore ${EMOJI.waving}\n\nSaya ingin memesan produk berikut:\n\n`;
  cart.forEach(item=>{message+=`${EMOJI.bottle} ${item.name}\n   Jumlah: ${item.qty}\n   Subtotal: ${rupiah(item.price*item.qty)}\n\n`;});
  message+=`${EMOJI.money} SUBTOTAL: ${rupiah(subtotal)}\n`;
  if(discount>0) message+=`🎟️ VOUCHER ${activeVoucher.code}: -${rupiah(discount)}\n`;
  message+=`${EMOJI.money} TOTAL: ${rupiah(total)}\n\n${EMOJI.clip} DATA PENGIRIMAN:\n${EMOJI.user} Nama: ${name}\n${EMOJI.pin} Alamat: ${address}\n${EMOJI.truck} Kurir: ${courier}\n💳 Pembayaran: ${payment}\n📦 Kode Pesanan: ${code}\n\nMohon konfirmasi pesanan dan detail pembayaran. Terima kasih! ${EMOJI.pray}`;
  window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank");
}

/* ==================================================
   UPDATE CART — TAMPILKAN DISKON VOUCHER
================================================== */
const _updateCartOriginal=updateCart;
updateCart=function(){
  _updateCartOriginal();
  const subtotal=getCartSubtotal();
  const discount=getVoucherDiscount(subtotal);
  const totalEl=document.getElementById("total");
  if(totalEl) totalEl.textContent=rupiah(Math.max(0,subtotal-discount));
  const line=document.getElementById("discountLine");
  const amount=document.getElementById("discountAmount");
  if(line&&amount){ line.style.display=discount>0?"flex":"none"; amount.textContent="-"+rupiah(discount); }
};

/* ==================================================
   PAYMENT INFO — LOCAL FRONTEND ONLY
================================================== */
function updatePaymentInfo(){}

/* init smart features */
setTimeout(()=>{renderRecommendations();renderWishlistModal();},0);


/* ==================================================
   IKLAN PRODUK — 2 SLIDE
================================================== */
let productAdIndex=0;
function renderProductAd(i){const slides=document.querySelectorAll('.product-ad-slide'),dots=document.querySelectorAll('.product-ad-dot');if(!slides.length)return;productAdIndex=(i+slides.length)%slides.length;slides.forEach((x,n)=>x.classList.toggle('active',n===productAdIndex));dots.forEach((x,n)=>x.classList.toggle('active',n===productAdIndex));}
function changeProductAd(step){renderProductAd(productAdIndex+step)}
function goProductAd(i){renderProductAd(i)}
function openFeaturedProduct(id){openProductModal(id)}
setInterval(()=>changeProductAd(1),5000);
