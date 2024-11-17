const loadQuote = [
  {
    text: "Jadilah perubahan yang ingin kamu lihat di dunia.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Tidak ada keberhasilan tanpa kerja keras.",
    author: "Sophocles",
  },
  {
    text: "Kesempatan sering kali menyamar sebagai kerja keras, sehingga banyak orang melewatkannya.",
    author: "Thomas Edison",
  },
  {
    text: "Hidup adalah 10% apa yang terjadi pada kita dan 90% bagaimana kita meresponnya.",
    author: "Charles R. Swindoll",
  },
  {
    text: "Pikiran adalah akar dari semua tindakan.",
    author: "Buddha",
  },
  {
    text: "Kesabaran adalah kunci menuju kedamaian.",
    author: "Ali bin Abi Thalib",
  },
  {
    text: "Jangan pernah takut untuk mencoba sesuatu yang baru.",
    author: "Albert Einstein",
  },
  {
    text: "Keberanian bukanlah ketiadaan rasa takut, melainkan keberanian untuk terus maju meskipun takut.",
    author: "Nelson Mandela",
  },
  {
    text: "Impian adalah peta untuk mencapai tujuan.",
    author: "Anonim",
  },
  {
    text: "Tidak ada kata terlambat untuk menjadi apa yang kamu inginkan.",
    author: "George Eliot",
  },
  {
    text: "Belajarlah dari kemarin, hiduplah untuk hari ini, berharaplah untuk esok.",
    author: "Albert Einstein",
  },
  {
    text: "Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih cerdas.",
    author: "Henry Ford",
  },
  {
    text: "Jangan biarkan apa yang tidak bisa kamu lakukan menghalangi apa yang bisa kamu lakukan.",
    author: "John Wooden",
  },
  {
    text: "Kebahagiaan tidak ditemukan, kebahagiaan diciptakan.",
    author: "Anonim",
  },
  {
    text: "Keraguan adalah pembunuh peluang.",
    author: "Suzy Kassem",
  },
  {
    text: "Ketika satu pintu tertutup, pintu lain terbuka.",
    author: "Alexander Graham Bell",
  },
  {
    text: "Pendidikan adalah kunci untuk membuka dunia.",
    author: "Oprah Winfrey",
  },
  {
    text: "Setiap perjalanan dimulai dengan satu langkah kecil.",
    author: "Lao Tzu",
  },
  {
    text: "Jangan menunggu kesempatan, ciptakan kesempatan.",
    author: "George Bernard Shaw",
  },
  {
    text: "Kreativitas adalah kecerdasan yang bersenang-senang.",
    author: "Albert Einstein",
  },
  {
    text: "Ketika kamu percaya pada dirimu sendiri, segalanya menjadi mungkin.",
    author: "Anonim",
  },
  {
    text: "Mimpi besar dimulai dari langkah kecil.",
    author: "Anonim",
  },
  {
    text: "Waktu adalah aset yang paling berharga, gunakanlah dengan bijak.",
    author: "Anonim",
  },
  {
    text: "Hanya mereka yang berani gagal yang dapat mencapai keberhasilan besar.",
    author: "Robert F. Kennedy",
  },
  {
    text: "Keberhasilan adalah perjalanan, bukan tujuan akhir.",
    author: "Ben Sweetland",
  },
  {
    text: "Belajar dari kemarin, hiduplah untuk hari ini, dan berharap untuk besok.",
    author: "Albert Einstein",
  },
  {
    text: "Hidup adalah seni menggambar tanpa penghapus.",
    author: "John W. Gardner",
  },
  {
    text: "Cintailah pekerjaanmu, maka kesuksesan akan mencintaimu.",
    author: "Anonim",
  },
  {
    text: "Jika kamu ingin berjalan cepat, berjalanlah sendiri. Jika ingin berjalan jauh, berjalanlah bersama-sama.",
    author: "Pepatah Afrika",
  },
  {
    text: "Hidup ini seperti mengendarai sepeda. Untuk menjaga keseimbangan, kamu harus terus bergerak.",
    author: "Albert Einstein",
  },
  {
    text: "Setiap orang adalah arsitek dari nasibnya sendiri.",
    author: "Anonim",
  },
  {
    text: "Kebaikan adalah bahasa universal yang dapat didengar oleh semua orang.",
    author: "Mark Twain",
  },
  {
    text: "Ketika kamu berhenti bermimpi, kamu berhenti hidup.",
    author: "Malcolm Forbes",
  },
  {
    text: "Hidup adalah tentang menciptakan diri, bukan menemukannya.",
    author: "George Bernard Shaw",
  },
  {
    text: "Bakat adalah hadiah, tetapi karakter adalah pilihan.",
    author: "John C. Maxwell",
  },
  {
    text: "Berani bermimpi besar adalah langkah pertama menuju kesuksesan.",
    author: "Anonim",
  },
  {
    text: "Kesabaran dan ketekunan dapat menaklukkan gunung.",
    author: "Anonim",
  },
  {
    text: "Percayalah pada dirimu sendiri, karena kamu lebih kuat dari yang kamu pikirkan.",
    author: "Anonim",
  },
  {
    text: "Setiap hari adalah kesempatan baru untuk belajar.",
    author: "Anonim",
  },
  {
    text: "Tidak ada yang mustahil jika kamu percaya pada dirimu sendiri.",
    author: "Anonim",
  },
  {
    text: "Kesuksesan dimulai dengan keputusan untuk mencoba.",
    author: "Anonim",
  },
  {
    text: "Hidup yang penuh makna adalah hidup yang memberi manfaat pada orang lain.",
    author: "Anonim",
  },
  {
    text: "Cobalah lagi, gagal lebih baik daripada tidak mencoba sama sekali.",
    author: "Anonim",
  },
  {
    text: "Semua mimpi kita dapat menjadi nyata jika kita memiliki keberanian untuk mengejarnya.",
    author: "Walt Disney",
  },
  {
    text: "Keberanian adalah awal dari kebijaksanaan.",
    author: "Anonim",
  },
  {
    text: "Hidup adalah petualangan yang berani atau tidak sama sekali.",
    author: "Helen Keller",
  },
  {
    text: "Ketekunan mengalahkan bakat ketika bakat tidak bekerja keras.",
    author: "Kevin Durant",
  },
  {
    text: "Jangan pernah menyerah pada apa yang kamu inginkan.",
    author: "Walt Disney",
  },
  {
    text: "Kesuksesan adalah kombinasi antara kemampuan dan kesempatan.",
    author: "Oprah Winfrey",
  },
  {
    text: "Hidupmu adalah hasil dari pilihanmu.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Setiap kegagalan adalah langkah menuju kesuksesan.",
    author: "William Whewell",
  },
  {
    text: "Bekerjalah dengan keras dalam diam, biarkan kesuksesanmu berbicara.",
    author: "Frank Ocean",
  },
  {
    text: "Kegagalan bukan akhir dari segalanya, justru awal dari sesuatu yang lebih besar.",
    author: "Michael Jordan",
  },
  {
    text: "Jadilah dirimu sendiri, semua orang sudah ada yang lain.",
    author: "Oscar Wilde",
  },
  {
    text: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan.",
    author: "Steve Jobs",
  },
  {
    text: "Keberhasilan adalah kemampuan untuk melangkah dari kegagalan ke kegagalan tanpa kehilangan semangat.",
    author: "Winston Churchill",
  },
  {
    text: "Satu-satunya batasan yang ada adalah batasan yang kamu tetapkan pada dirimu sendiri.",
    author: "Anonim",
  },
  {
    text: "Cinta adalah kekuatan yang dapat mengubah dunia.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Jangan biarkan kegagalan hari ini menghalangimu untuk sukses di masa depan.",
    author: "Anonim",
  },
  {
    text: "Tidak ada jalan pintas menuju tempat yang layak dikunjungi.",
    author: "Anonim",
  },
  {
    text: "Jangan takut untuk mengubah arah, karena sering kali itu adalah jalan menuju impianmu.",
    author: "Anonim",
  },
  {
    text: "Jika kamu tidak mencoba, kamu tidak akan tahu apa yang bisa kamu capai.",
    author: "Anonim",
  },
  {
    text: "Sukses bukan tentang seberapa banyak uang yang kamu hasilkan, tetapi tentang seberapa banyak hidup yang kamu ubah.",
    author: "Michelle Obama",
  },
  {
    text: "Setiap orang memiliki potensi untuk menjadi hebat.",
    author: "Les Brown",
  },
  {
    text: "Hidup ini tidak datang dengan petunjuk, tetapi kita bisa memilih untuk menciptakan arah kita sendiri.",
    author: "Anonim",
  },
  {
    text: "Tantangan terbesar dalam hidup adalah menemukan siapa dirimu dan menjadi itu.",
    author: "Anonim",
  },
  {
    text: "Cinta adalah kekuatan yang menggerakkan dunia.",
    author: "Paulo Coelho",
  },
  {
    text: "Hidup adalah kesempatan untuk tumbuh, bukan untuk tetap statis.",
    author: "Anonim",
  },
  {
    text: "Untuk bisa sukses, kamu harus berani gagal.",
    author: "Anonim",
  },
  {
    text: "Setiap hari adalah kesempatan baru untuk memulai lagi.",
    author: "Anonim",
  },
  {
    text: "Jangan biarkan ketakutan menghalangimu untuk bergerak maju.",
    author: "Anonim",
  },
  {
    text: "Hal-hal besar dimulai dari langkah kecil.",
    author: "Anonim",
  },
  {
    text: "Kesuksesan datang ketika persiapan bertemu dengan kesempatan.",
    author: "Seneca",
  },
  {
    text: "Kamu adalah apa yang kamu pikirkan.",
    author: "Buddha",
  },
  {
    text: "Mimpi besar akan mengarah pada kehidupan yang luar biasa.",
    author: "Anonim",
  },
  {
    text: "Mencoba hal baru adalah kunci untuk perkembangan diri.",
    author: "Anonim",
  },
  {
    text: "Jika kamu ingin sukses, jangan pernah takut gagal.",
    author: "Anonim",
  },
  {
    text: "Hidupmu berubah ketika kamu mulai mengubah dirimu.",
    author: "Anonim",
  },
  {
    text: "Kesuksesan adalah hasil dari disiplin dan tekad.",
    author: "Dwayne Johnson",
  },
  {
    text: "Hidup ini seperti roda, kadang kita di atas, kadang kita di bawah, namun kita harus terus berputar.",
    author: "Anonim",
  },
  {
    text: "Tindakan berbicara lebih keras daripada kata-kata.",
    author: "Anonim",
  },
  {
    text: "Jadilah seseorang yang membuat perbedaan dalam hidup orang lain.",
    author: "Anonim",
  },
  {
    text: "Keberanian adalah keberhasilan terbesar yang bisa dicapai dalam hidup.",
    author: "Anonim",
  },
  {
    text: "Setiap hari adalah kesempatan untuk memperbaiki diri.",
    author: "Anonim",
  },
  {
    text: "Hidup adalah tentang pilihan, pilihlah dengan bijak.",
    author: "Anonim",
  },
  {
    text: "Kesuksesan dimulai dari niat yang kuat.",
    author: "Anonim",
  },
  {
    text: "Berhenti mengeluh dan mulailah bertindak.",
    author: "Anonim",
  },
  {
    text: "Jadilah orang yang menginspirasi, bukan yang mengeluh.",
    author: "Anonim",
  },
  {
    text: "Waktu adalah aset yang paling berharga.",
    author: "Anonim",
  },
  {
    text: "Keberhasilan dimulai dengan keyakinan diri.",
    author: "Anonim",
  },
  {
    text: "Kesuksesan adalah hasil dari ketekunan.",
    author: "Anonim",
  },
  {
    text: "Pikiran positif akan membawa hidup yang positif.",
    author: "Anonim",
  },
  {
    text: "Jangan menunggu peluang, ciptakan peluangmu sendiri.",
    author: "Anonim",
  },
  {
    text: "Tantangan adalah kesempatan untuk belajar dan tumbuh.",
    author: "Anonim",
  },
  {
    text: "Mimpi besar dimulai dari langkah pertama.",
    author: "Anonim",
  },
  {
    text: "Jangan pernah menyerah, karena usaha tidak akan pernah mengkhianati hasil.",
    author: "Anonim",
  },
  {
    text: "Kita bukanlah produk dari keadaan kita, kita adalah hasil dari pilihan kita.",
    author: "Stephen R. Covey",
  },
  {
    text: "Peluang tidak datang setiap hari, maksimalkan setiap kesempatan yang ada.",
    author: "Anonim",
  },
  {
    text: "Keberhasilan datang kepada mereka yang tidak takut gagal.",
    author: "Anonim",
  },
  {
    text: "Hidup ini seperti sebuah buku, jika kamu tidak pernah membuka halaman baru, kamu hanya akan berada di satu bab.",
    author: "Anonim",
  },
  {
    text: "Jangan hanya bermimpi, wujudkan impianmu.",
    author: "Anonim",
  },
  {
    text: "Setiap kegagalan adalah batu loncatan menuju kesuksesan.",
    author: "Anonim",
  },
  {
    text: "Tidak ada yang tidak mungkin jika kamu percaya dan berusaha.",
    author: "Anonim",
  },
  {
    text: "Tidak ada yang bisa menghalangimu kecuali dirimu sendiri.",
    author: "Anonim",
  },
  {
    text: "Kebahagiaan datang dari dalam diri kita sendiri.",
    author: "Anonim",
  },
  {
    text: "Setiap orang memiliki kesempatan untuk meraih impian mereka.",
    author: "Anonim",
  },
  {
    text: "Jika kamu tidak berani mengejar impianmu, orang lain akan melakukannya.",
    author: "Anonim",
  },
  {
    text: "Beranilah untuk gagal, karena setiap kegagalan adalah pelajaran berharga.",
    author: "Anonim",
  },
  {
    text: "Kesuksesan adalah hasil dari usaha yang tak kenal lelah.",
    author: "Anonim",
  },
  {
    text: "Jangan menunggu untuk merasa siap, lakukanlah sekarang.",
    author: "Anonim",
  },
  {
    text: "Apa yang kamu pikirkan adalah apa yang kamu ciptakan.",
    author: "Anonim",
  },
  {
    text: "Masa depan adalah milik mereka yang percaya pada keindahan impian mereka.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Jadilah versi terbaik dari dirimu, bukan versi orang lain.",
    author: "Anonim",
  },
  {
    text: "Hidup adalah anugerah, nikmati setiap detiknya.",
    author: "Anonim",
  },
  {
    text: "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
    author: "Anonim",
  },
];
