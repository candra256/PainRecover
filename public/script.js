



//_____________________________________________________________ 🔽

const toggle = document.getElementsByClassName("toggle")[0];
const menu = document.getElementsByClassName("menu")[0];

// Menambahkan event listener untuk tombol toggle
toggle.addEventListener("click", function (event) {
  // Toggle class hidden pada menu
  menu.classList.toggle("hidden");

  // Mencegah event bubbling agar klik di toggle tidak dianggap sebagai klik di luar menu
  event.stopPropagation();
});

// Event listener untuk klik di luar elemen menu
document.addEventListener("click", function (event) {
  // Jika menu terbuka (tidak ada class hidden) dan pengguna mengklik di luar menu
  if (!menu.classList.contains("hidden") && !menu.contains(event.target)) {
    // Tambahkan class hidden untuk menyembunyikan menu
    menu.classList.add("hidden");
  }
});

//_____________________________________________________________ 🔼

//_____________________________________________________________ 🔽

function loadVideo(element) {
  // Dapatkan ID video dari atribut data-video-id
  var videoId = element.getAttribute("data-video-id");
  var iframe = document.createElement("iframe");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "236rem");
  iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
  iframe.setAttribute("allowfullscreen", true);

  // Ganti thumbnail dengan iframe
  element.parentNode.replaceChild(iframe, element);
}

//_____________________________________________________________ 🔼
