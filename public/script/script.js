

//_____________________________________________________________ 🔽

const toggle = document.getElementsByClassName('toggle')[0];
const menu = document.getElementsByClassName('menu')[0];

// Menambahkan event listener untuk tombol toggle
toggle.addEventListener('click', function(event) {
    // Toggle class hidden pada menu
    menu.classList.toggle('hidden');
    
    // Mencegah event bubbling agar klik di toggle tidak dianggap sebagai klik di luar menu
    event.stopPropagation();
});

// Event listener untuk klik di luar elemen menu
document.addEventListener('click', function(event) {
    // Jika menu terbuka (tidak ada class hidden) dan pengguna mengklik di luar menu
    if (!menu.classList.contains('hidden') && !menu.contains(event.target)) {
        // Tambahkan class hidden untuk menyembunyikan menu
        menu.classList.add('hidden');
    }
});

//_____________________________________________________________ 🔼





  