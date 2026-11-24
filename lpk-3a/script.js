// ==========================================
// PERTEMUAN 4: JavaScript Fundamentals & DOM
// ==========================================

// Tunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------
    // FITUR 1: Jam Digital (SetInterval & Date Object)
    // --------------------------------------------------
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        const jam = String(now.getHours()).padStart(2, '0');
        const menit = String(now.getMinutes()).padStart(2, '0');
        const detik = String(now.getSeconds()).padStart(2, '0');
        
        clockElement.textContent = `Waktu Sekarang: ${jam}:${menit}:${detik}`;
    }

    // Panggil langsung saat dimuat, lalu ulangi setiap 1 detik
    updateClock();
    setInterval(updateClock, 1000);

    // --------------------------------------------------
    // FITUR 2: Toggle Dark Mode (ClassList & Event Listener)
    // --------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        // Tambah/hapus class 'dark-mode' pada tag <body>
        bodyElement.classList.toggle('dark-mode');

        // Ubah teks tombol berdasarkan mode saat ini
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Mode Terang';
        } else {
            themeToggleBtn.textContent = '🌙 Mode Gelap';
        }
    });

    // --------------------------------------------------
    // FITUR 3: Validasi & Simulasi Form (Form Events)
    // --------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const feedbackElement = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (event) => {
        // Mencegah form agar tidak me-refresh halaman
        event.preventDefault();

        // Ambil nilai dari input
        const nama = document.getElementById('nama').value;
        const pesan = document.getElementById('pesan').value;

        // Manipulasi DOM: Tampilkan pesan sukses
        feedbackElement.textContent = `Terima kasih, ${nama}! Pesanmu ("${pesan}") telah berhasil dikirim.`;
        
        // Reset form setelah dikirim
        contactForm.reset();

        // Hilangkan pesan sukses setelah 4 detik
        setTimeout(() => {
            feedbackElement.textContent = '';
        }, 4000);
    });

    // --------------------------------------------------
    // FITUR 4: Efek Ketik pada Subtitle (DOM Manipulation)
    // --------------------------------------------------
    const subtitleElement = document.querySelector('.subtitle');
    const originalText = subtitleElement.textContent;
    subtitleElement.textContent = ''; // Kosongkan dulu

    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            subtitleElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Kecepatan ketik 100ms
        }
    }
    
    // Mulai efek ketik setelah 500ms
    setTimeout(typeWriter, 500);

});