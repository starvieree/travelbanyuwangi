# PRD — Website Travel Wisata Banyuwangi

| | |
|---|---|
| **Versi** | 1.1 (penambahan domain & konfigurasi SEO/AEO/GEO detail) |
| **Tanggal** | 30 September 2026 |
| **Status** | Draft untuk review |
| **Stack** | HTML5, CSS3, JavaScript ringan, Bootstrap (template BootstrapMade) |
| **Domain utama** | `https://wisatabanyuwangi.web.id` (non-www, HTTPS) |
| **Kanal konversi** | WhatsApp — 088989643555 (`6288989643555`) |

---

## 1. Ringkasan Produk

### 1.1 Latar Belakang
Wisata Banyuwangi (Kawah Ijen, Taman Nasional Baluran, Pantai Pulau Merah, Djawatan Benculuk, dll.) memiliki permintaan pencarian yang tinggi dan kompetitif. Pola pencarian wisatawan kini bergeser: selain Google klasik, mereka bertanya lewat AI (Google AI Overviews/SGE, Gemini, ChatGPT, Perplexity) dan voice search. Website harus ditemukan, dikutip, dan dipercaya di semua kanal tersebut, lalu mengonversi pengunjung menjadi chat WhatsApp.

### 1.2 Tujuan Produk
1. Membangun kehadiran digital layanan travel di wilayah Banyuwangi.
2. Menempati peringkat atas untuk kata kunci target (SEO), muncul sebagai jawaban langsung (AEO), dan menjadi sumber kutipan AI (GEO).
3. Memaksimalkan konversi prospek melalui WhatsApp dengan friksi sekecil mungkin.
4. Membangun kepercayaan (E-E-A-T) lewat profil tim lokal, testimoni, dan foto asli.

### 1.3 Indikator Keberhasilan (KPI)

| KPI | Target 3 bulan | Target 6 bulan | Cara ukur |
|---|---|---|---|
| Skor Lighthouse (mobile & desktop) | ≥ 90 | ≥ 90 | PageSpeed Insights |
| Core Web Vitals "Good" | 100% URL | 100% URL | Search Console |
| Halaman terindeks | 100% halaman publik | 100% | Search Console |
| Klik CTA WhatsApp / bulan | 100 | 300 | GA4 event `whatsapp_click` |
| Conversion rate (sesi → klik WA) | ≥ 3% | ≥ 5% | GA4 |
| Keyword di top 10 (long-tail) | 10 | 30 | Search Console / rank tracker |
| Artikel blog terbit | 6 | 15 | Internal |

> Angka target bersifat asumsi awal dan perlu disesuaikan dengan kondisi bisnis.

---

## 2. Target Audiens & Persona

**Audiens utama:** wisatawan domestik (Jakarta, Surabaya, Malang, Bali, Yogyakarta) dan mancanegara yang merencanakan liburan ke Banyuwangi.

| Persona | Karakteristik | Kebutuhan | Halaman masuk umum |
|---|---|---|---|
| **Rina, 27, karyawan Surabaya** | Trip akhir pekan, grup 3–6 orang | Open trip murah, itinerary jelas | Paket Open Trip |
| **Keluarga Budi, 40+, Jakarta** | Bawa anak/balita, butuh kenyamanan | Private trip, mobil + driver, info ramah anak | Private Trip, FAQ |
| **Mark, 32, turis asing** | Backpacker, mendaki Ijen | Info dalam bahasa Inggris, harga transparan | Blog panduan, Destinasi Ijen |
| **Dinda, 24, pencari informasi** | Riset via AI/voice search | Jawaban cepat (jam buka, tiket, cuaca) | Blog, FAQ |

**Perilaku kunci:** 80%+ memakai smartphone; sering membandingkan beberapa penyedia; memutuskan setelah chat langsung.

---

## 3. Ruang Lingkup

### 3.1 In-Scope (Rilis 1.0)
- Website statis multi-halaman (HTML/CSS/JS) responsif.
- Seluruh halaman pada Sitemap (Bagian 4).
- CTA WhatsApp universal + tombol floating.
- Implementasi SEO teknis, AEO (FAQ), GEO (konten entitas & struktur semantik), dan JSON-LD.
- Analytics dan pelacakan klik CTA.
- Sitemap XML, robots.txt, dan `llms.txt`.

### 3.2 Out-of-Scope (Rilis 1.0)
- Sistem pemesanan/pembayaran online dan akun pengguna.
- CMS/backend dinamis (konten diubah lewat edit file).
- Multi-bahasa penuh (disiapkan struktur untuk versi Inggris pada rilis berikutnya).
- Integrasi chatbot AI.

### 3.3 Asumsi & Ketergantungan
- Admin menyediakan data paket (harga, itinerary, fasilitas), foto asli, dan testimoni.
- Domain, hosting statis (mis. Netlify/Cloudflare Pages/hosting biasa dengan HTTPS) tersedia.
- Nomor WhatsApp 088989643555 aktif dan dipantau.

---

## 4. Sitemap & Struktur URL

```
/                                   Beranda
/destinasi/                         Katalog destinasi
  /destinasi/kawah-ijen.html
  /destinasi/taman-nasional-baluran.html
  /destinasi/pantai-pulau-merah.html
  /destinasi/djawatan-benculuk.html
  /destinasi/(destinasi lain).html
/paket/                             Katalog paket wisata
  /paket/open-trip/                 Daftar open trip
    /paket/open-trip/ijen-baluran-2h1m.html
  /paket/private-trip/              Private trip & custom itinerary
/layanan/sewa-mobil.html            Sewa mobil / transportasi
/blog/                              Indeks blog
  /blog/persiapan-mendaki-kawah-ijen.html
  /blog/kuliner-wajib-banyuwangi.html
/tentang-kami.html                  Profil tim
/galeri-testimoni.html              Galeri & testimoni
/kontak-faq.html                    Kontak & FAQ
/sitemap.xml
/robots.txt
/llms.txt
/404.html
```

**Aturan URL:** huruf kecil, kata dipisah tanda hubung, deskriptif, mengandung keyword utama, maksimal 3 level kedalaman, tanpa parameter.

---

## 5. Kebutuhan Fungsional per Halaman

### 5.1 Beranda
- **Hero:** gambar/video latar ringan (poster `.webp`, video opsional dan *lazy*), H1 yang memuat keyword utama (mis. "Paket Wisata Banyuwangi: Open Trip & Private Trip Kawah Ijen, Baluran, Pulau Merah"), CTA utama "Konsultasi".
- **USP:** harga transparan, guide lokal, itinerary fleksibel, armada terawat (4 poin ikon).
- **Highlight destinasi populer:** kartu Ijen, Baluran, Djawatan, Pulau Merah.
- **Paket unggulan:** 3 kartu dengan harga mulai dari + CTA.
- **Testimoni singkat** dan **preview blog terbaru**.
- **FAQ ringkas** (3–5 pertanyaan).
- **Footer:** alamat, jam operasional, tautan penting.
- **Schema:** `TravelAgency` + `WebSite` + `Organization`.

### 5.2 Destinasi Wisata (Katalog & Detail)
**Katalog:** grid kartu (foto, nama, deskripsi 1–2 kalimat, tombol "Lihat Detail").

**Template halaman detail destinasi (wajib):**
1. Ringkasan cepat (*key facts box*) — lokasi, jarak & waktu tempuh dari pusat kota/Stasiun Karangasem/Bandara Banyuwangi, tiket masuk, jam buka, waktu terbaik, tingkat kesulitan.
2. Deskripsi orisinal dengan data spesifik (angka, jarak, ketinggian).
3. Tips & hal yang perlu disiapkan.
4. Galeri foto asli (min. 4).
5. Peta (Google Maps embed, *lazy-loaded*).
6. Paket terkait + CTA WhatsApp.
7. Blok FAQ (min. 4 pertanyaan) + `FAQPage` schema.
8. Breadcrumb + `BreadcrumbList` schema.
9. Tanggal "Terakhir diperbarui".

### 5.3 Paket Wisata (Halaman Konversi Utama)
**Open Trip** dan **Private Trip**. Setiap halaman paket wajib memuat:

| Elemen | Keterangan |
|---|---|
| Judul & ringkasan | Durasi, kategori (open/private), jumlah peserta |
| Harga | Mulai dari Rp X per orang (tampilkan tabel harga per jumlah peserta untuk private trip) |
| Itinerary | Timeline per hari/jam |
| Include / Exclude | Dua kolom daftar |
| Jadwal keberangkatan | Untuk open trip |
| Meeting point | Lokasi penjemputan |
| Syarat & ketentuan | Pembatalan, kondisi cuaca/penutupan Ijen |
| Testimoni | Ulasan klien untuk paket tersebut |
| FAQ paket | Min. 3 pertanyaan |
| CTA | "Pesan via WhatsApp" (sticky di mobile) |
| Schema | `Product` (+ `Offer`, `AggregateRating` bila ulasan valid) dan `FAQPage` |

### 5.4 Layanan Lain — Sewa Mobil / Transportasi
Daftar armada (jenis mobil, kapasitas, harga per hari dengan/tanpa driver), area layanan, ketentuan, FAQ, CTA WhatsApp.

### 5.5 Blog / Panduan Wisata
- Indeks blog dengan kategori (Panduan, Kuliner, Tips, Itinerary).
- Template artikel: H1, penulis + bio singkat, tanggal terbit & diperbarui, daftar isi, isi dengan subjudul H2/H3 berbentuk pertanyaan bila relevan, ringkasan jawaban singkat (40–60 kata) di awal artikel, FAQ di akhir, artikel terkait, CTA kontekstual.
- Schema: `Article`/`BlogPosting` + `BreadcrumbList` (+ `FAQPage` bila ada FAQ).
- Topik awal (prioritas): persiapan mendaki Kawah Ijen, jam & harga tiket Ijen, waktu terbaik melihat blue fire, itinerary Banyuwangi 3 hari 2 malam, kuliner wajib Banyuwangi, Baluran untuk anak/balita, rute dari Surabaya/Malang/Bali ke Banyuwangi.

### 5.6 Tentang Kami
Profil perusahaan, tim lokal (foto + peran), pengalaman, legalitas/izin usaha (bila ada), nilai layanan, CTA. Schema `Organization` dan `Person` untuk anggota kunci.

### 5.7 Galeri & Testimoni
Galeri foto asli trip (grid, lightbox ringan, lazy-load), testimoni dengan nama, asal kota, paket yang diambil, dan tanggal trip.

### 5.8 Kontak & FAQ
Alamat lengkap, jam operasional, Google Maps embed, tombol WhatsApp, FAQ umum (pemesanan, pembayaran, pembatalan, kebijakan anak, perlengkapan), `FAQPage` schema.

### 5.9 Halaman Pendukung
- **404** dengan tautan ke halaman utama dan CTA WhatsApp.
- **Kebijakan Privasi** dan **Syarat & Ketentuan** (diperlukan bila memakai analytics).

---

## 6. Spesifikasi CTA WhatsApp

### 6.1 Aturan Umum
- **Semua** tombol aksi (Pesan Sekarang, Tanya Paket, Hubungi Kami, dsb.) mengarah ke WhatsApp nomor **088989643555**.
- Format API: `https://wa.me/6288989643555?text=<pesan ter-encode>` (kode negara 62, tanpa angka 0 di depan).
- Link dibuka di tab baru: `target="_blank" rel="noopener noreferrer"`.
- Nomor cukup dikelola di satu tempat (konstanta JS) atau konsisten di semua file agar mudah diubah.

### 6.2 Template Pesan per Halaman

| Konteks halaman | Pesan (sebelum di-encode) |
|---|---|
| Beranda / umum | Halo, saya tertarik dengan paket wisata Banyuwangi. Boleh minta info lengkapnya? |
| Destinasi: Kawah Ijen | Halo, saya ingin tanya paket wisata ke Kawah Ijen. |
| Open Trip Ijen–Baluran | Halo, saya tertarik dengan Open Trip Ijen Baluran 2H1M. Apakah masih ada slot? |
| Private Trip | Halo, saya ingin merencanakan Private Trip Banyuwangi. Tanggal: …, jumlah peserta: … |
| Sewa Mobil | Halo, saya ingin sewa mobil wisata di Banyuwangi. Tanggal: …, jumlah penumpang: … |
| Blog (artikel) | Halo, saya baru baca artikel "[judul artikel]" dan ingin tanya paket wisatanya. |
| Kontak | Halo, saya ingin bertanya tentang layanan wisata Banyuwangi. |

**Contoh URL ter-encode:**
```
https://wa.me/6288989643555?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20wisata%20Banyuwangi.
```

### 6.3 Floating Button
- Posisi tetap di **kanan bawah** (desktop & mobile), ukuran minimal 56×56 px, `z-index` di atas konten.
- Memiliki `aria-label="Chat WhatsApp"`.
- Tidak menutupi konten penting atau sticky CTA paket (beri jarak/offset di mobile).
- Pesan awal menyesuaikan halaman aktif.

### 6.4 Pelacakan
Setiap klik CTA mengirim event GA4 `whatsapp_click` dengan parameter `page_path`, `cta_location` (hero / floating / paket / footer), dan `package_name` (bila ada).

---

## 7. Strategi SEO, AEO & GEO (Requirement Implementasi)

> Konfigurasi detail yang siap diimplementasikan (template `<head>`, robots.txt, sitemap.xml, llms.txt, redirect, header, schema, FAQ, dan matriks per halaman) ada di **Lampiran A–K** di akhir dokumen. Domain: **wisatabanyuwangi.web.id**.

### 7.1 SEO Klasik & Teknis
| Requirement | Detail |
|---|---|
| Title & meta description | Unik per halaman; title ≤ 60 karakter, description ≤ 155 karakter, memuat keyword + CTA |
| `<meta name="keywords">` | Boleh disertakan sesuai draft awal, tetapi Google tidak menggunakannya sebagai sinyal peringkat — prioritas ada pada title, heading, dan konten |
| Heading | Satu H1 per halaman, hierarki H2/H3 logis |
| Canonical | `<link rel="canonical">` self-referencing di semua halaman |
| Open Graph & Twitter Card | `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type` |
| Breadcrumbs | Visual + `BreadcrumbList` JSON-LD |
| Internal linking | Blog ↔ destinasi ↔ paket; anchor text deskriptif |
| Gambar | Format `.webp`, kompres, atribut `width`/`height`, `alt` deskriptif, nama file deskriptif (mis. `blue-fire-kawah-ijen-banyuwangi.webp`) |
| Sitemap & robots | `sitemap.xml` terkirim ke Search Console; `robots.txt` mengizinkan crawler utama |
| Local SEO | Google Business Profile, NAP (nama, alamat, telepon) konsisten di website dan profil, embed peta |
| Hreflang | Disiapkan bila versi Inggris dirilis |

**Keyword target awal (contoh):**
- Paket wisata Banyuwangi / paket wisata Banyuwangi 2026
- Open trip Ijen Baluran / open trip Baluran Pulau Merah
- Private trip Kawah Ijen 2026
- Sewa mobil wisata Banyuwangi murah / sewa mobil Banyuwangi dengan driver
- Tour guide Kawah Ijen / harga tiket Kawah Ijen

### 7.2 AEO (Answer Engine Optimization)
- Blok FAQ pada setiap halaman destinasi, paket, dan kontak, memakai pertanyaan sebagaimana orang bertanya (mis. "Jam berapa Kawah Ijen dibuka?", "Apakah balita bisa ke Taman Nasional Baluran?").
- Jawaban langsung pada 1–2 kalimat pertama (40–60 kata), baru dijelaskan lebih detail.
- Gaya bahasa percakapan, bukan bahasa brosur.
- `FAQPage` JSON-LD yang **sama persis** dengan teks FAQ yang tampil di halaman.
- Gunakan tabel/daftar untuk info yang mudah diekstrak (jam buka, tarif, jarak).
- Catatan: Google telah membatasi tampilan *rich result* FAQ untuk sebagian besar situs, tetapi markup dan format tanya-jawab tetap membantu AI dan voice assistant memahami konten.

### 7.3 GEO (Generative Engine Optimization)
- **Data spesifik & dapat diverifikasi:** angka, jarak, waktu tempuh, ketinggian, tarif. Contoh: "Pantai Pulau Merah berjarak ±60 km dari pusat kota Banyuwangi, sekitar 1,5 jam berkendara." Verifikasi seluruh angka sebelum publikasi dan cantumkan tanggal pembaruan.
- **First-hand experience:** foto asli, catatan lapangan guide, testimoni nyata dengan nama dan asal kota.
- **E-E-A-T:** halaman penulis/tim, kredensial guide, legalitas usaha, kebijakan jelas.
- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>/<figcaption>`, `<time datetime>`.
- **Konsistensi entitas:** nama brand, alamat, telepon, dan deskripsi seragam di seluruh website dan profil eksternal (Google Business Profile, Instagram, TripAdvisor, dll.); gunakan `sameAs` pada schema.
- **Kemudahan dikutip:** paragraf ringkasan yang berdiri sendiri, definisi jelas, daftar bernomor untuk langkah.
- **`llms.txt`** (opsional): ringkasan situs dan tautan halaman kunci di root domain.
- **Izinkan crawler AI** yang relevan di `robots.txt` (mis. GPTBot, PerplexityBot, Google-Extended) sesuai kebijakan bisnis.
- **Pembaruan berkala:** tinjau info harga, jam buka, dan kebijakan taman nasional setiap kuartal.

---

## 8. Structured Data (JSON-LD)

Seluruh markup ditempatkan di `<head>` (atau sebelum `</body>`) dan wajib lolos Schema Markup Validator.

| Halaman | Schema |
|---|---|
| Beranda | `TravelAgency` (atau `LocalBusiness`), `WebSite`, `Organization` |
| Destinasi | `TouristAttraction`, `BreadcrumbList`, `FAQPage` |
| Paket wisata | `Product` + `Offer` (+ `AggregateRating` bila ada ulasan nyata), `BreadcrumbList`, `FAQPage` |
| Blog | `BlogPosting`, `BreadcrumbList`, `FAQPage` (bila ada) |
| Kontak & FAQ | `FAQPage`, `ContactPoint` |
| Tentang Kami | `Organization`, `Person` |

**Contoh — `TravelAgency` (Beranda):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "[Nama Brand]",
  "url": "https://wisatabanyuwangi.web.id/",
  "logo": "https://wisatabanyuwangi.web.id/assets/img/logo.webp",
  "image": "https://wisatabanyuwangi.web.id/assets/img/og-home.webp",
  "description": "Paket wisata Banyuwangi: open trip dan private trip ke Kawah Ijen, Baluran, dan Pulau Merah dengan guide lokal.",
  "telephone": "+6288989643555",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Alamat lengkap]",
    "addressLocality": "Banyuwangi",
    "addressRegion": "Jawa Timur",
    "addressCountry": "ID"
  },
  "areaServed": "Banyuwangi",
  "openingHours": "Mo-Su 07:00-21:00",
  "sameAs": ["https://www.instagram.com/[akun]"]
}
</script>
```

**Contoh — `Product` (Halaman Paket):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Open Trip Ijen Baluran 2H1M",
  "description": "Open trip 2 hari 1 malam ke Kawah Ijen dan Taman Nasional Baluran dengan guide lokal.",
  "image": "https://wisatabanyuwangi.web.id/assets/img/open-trip-ijen-baluran.webp",
  "brand": { "@type": "Brand", "name": "[Nama Brand]" },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "IDR",
    "price": "[harga]",
    "availability": "https://schema.org/InStock",
    "url": "https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html"
  }
}
</script>
```

**Contoh — `FAQPage`:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Apakah balita bisa ke Taman Nasional Baluran?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[Jawaban singkat dan jelas yang sama dengan teks di halaman]"
    }
  }]
}
</script>
```

> Hanya sertakan `AggregateRating`/`Review` bila ulasan benar-benar ada dan tampil di halaman; markup ulasan palsu melanggar pedoman Google.

---

## 9. Kebutuhan Teknis & Performa

### 9.1 Stack & Struktur Proyek
```
/
├─ index.html
├─ destinasi/ paket/ blog/ layanan/
├─ assets/
│  ├─ css/   (bootstrap.min.css, main.css)
│  ├─ js/    (main.js, whatsapp.js)
│  ├─ img/   (.webp)
│  └─ fonts/ (self-hosted, WOFF2)
├─ sitemap.xml  robots.txt  llms.txt  404.html
```

### 9.2 Performa (Target)
| Metrik | Target |
|---|---|
| Lighthouse Performance / SEO / Accessibility / Best Practices | ≥ 90 (mobile & desktop) |
| LCP | ≤ 2,5 detik |
| INP | ≤ 200 ms |
| CLS | ≤ 0,1 |
| Total ukuran halaman awal | ≤ 1 MB (di luar video) |

**Teknik wajib:**
- Tidak ada *render-blocking resources*: CSS kritis di-*inline*, sisanya dimuat non-blocking; JS memakai `defer`.
- Hapus CSS/JS template yang tidak dipakai (purge); minify CSS/JS.
- Gambar: `.webp` (dengan `srcset` responsif), `loading="lazy"` untuk di bawah *fold*, gambar hero memakai `fetchpriority="high"` dan tidak di-*lazy*.
- Font: *self-host*, `font-display: swap`, batasi jumlah varian.
- Video: hindari *autoplay* berat di mobile; gunakan poster dan muat setelah interaksi.
- Embed Google Maps/YouTube dimuat *lazy* (`loading="lazy"` atau muat saat diklik).
- Caching & kompresi (Brotli/Gzip) dan HTTP/2 atau HTTP/3 di hosting; CDN bila memungkinkan.
- Wajib HTTPS dan redirect `http → https` serta `www` ↔ non-`www` konsisten.

### 9.3 Kompatibilitas
Browser modern 2 versi terakhir (Chrome, Safari, Firefox, Edge), Android & iOS; breakpoint minimal 360, 768, 1024, 1440 px.

### 9.4 Aksesibilitas
Kontras warna WCAG AA, navigasi keyboard, `alt` pada gambar informatif, label ARIA pada tombol ikon, target sentuh ≥ 44×44 px, `lang="id"` pada `<html>`.

---

## 10. Panduan Konten & Media

- **Bahasa:** Indonesia (utama), nada ramah dan percakapan; hindari klaim berlebihan ("terbaik", "termurah") tanpa bukti.
- **Panjang konten:** halaman destinasi 600–1.000 kata; artikel blog 1.000–1.800 kata; paket 400–700 kata.
- **Orisinalitas:** tidak menyalin dari situs lain; sebutkan sumber untuk data resmi (mis. tarif tiket dari pengelola).
- **Foto:** foto asli trip diutamakan; rasio konsisten (16:9 untuk hero, 4:3 untuk kartu); hak cipta jelas.
- **Penamaan file gambar:** `kata-kunci-deskriptif.webp`.
- **Transparansi harga:** cantumkan apa yang termasuk/tidak termasuk, syarat pembatalan, dan catatan biaya tambahan (tiket masuk, dll.).

---

## 11. Desain & UX

- **Mobile-first:** layout 100% responsif; CTA mudah dijangkau ibu jari.
- **Hierarki visual:** CTA berwarna kontras (hijau WhatsApp), konsisten di seluruh halaman.
- **Navigasi:** menu utama — Beranda, Destinasi, Paket Wisata, Blog, Tentang Kami, Kontak; menu mobile berupa *hamburger* yang ringan.
- **Pola konversi:** CTA di hero, setelah itinerary, *sticky bar* di halaman paket (mobile), dan di footer.
- **Trust signal:** testimoni, foto tim, legalitas, jumlah trip/tamu (bila datanya benar).
- **Template:** manfaatkan komponen BootstrapMade (hero, card, accordion untuk FAQ, tab untuk itinerary), lalu kustomisasi warna/tipografi agar tidak tampil seperti template default.

---

## 12. Analytics, Pemantauan & Operasional

- **Google Search Console:** verifikasi domain, kirim sitemap, pantau cakupan indeks, Core Web Vitals, dan kinerja kueri.
- **Google Analytics 4:** event `whatsapp_click`, `scroll_depth`, `outbound_click`; tandai `whatsapp_click` sebagai *key event*.
- **Google Business Profile:** buat/klaim profil, tautkan website, unggah foto, kumpulkan ulasan.
- **Pemantauan AI:** uji berkala pertanyaan target di Google AI Overviews, ChatGPT, Gemini, dan Perplexity; catat apakah situs dikutip.
- **Pemeliharaan:** audit bulanan (tautan rusak, kecepatan, konten kedaluwarsa); update harga dan jadwal setiap kuartal.

---

## 13. Keamanan & Kepatuhan

- HTTPS wajib; header keamanan dasar (CSP, X-Content-Type-Options, Referrer-Policy) bila hosting mendukung.
- Tidak ada pengumpulan data pribadi di sisi website (form diganti WhatsApp); tetap sediakan Kebijakan Privasi karena memakai analytics.
- Banner persetujuan cookie bila diperlukan oleh kebijakan analytics yang dipakai.
- Hindari menyimpan nomor pribadi lain di kode; verifikasi bahwa nomor WhatsApp yang tampil adalah nomor bisnis.

---

## 14. Kriteria Penerimaan (Acceptance Criteria)

### 14.1 Fungsional
- [ ] Seluruh halaman pada sitemap dirender rapi tanpa *broken layout* di mobile, tablet, dan desktop.
- [ ] Seluruh tautan menu, breadcrumb, dan footer berfungsi (tidak ada 404 internal).
- [ ] Setiap tombol CTA membuka WhatsApp (aplikasi atau web) ke nomor **088989643555** dengan *pre-filled text* sesuai halaman.
- [ ] Tombol floating WhatsApp tampil di kanan bawah di semua halaman (mobile & desktop) dan tidak menutupi konten penting.
- [ ] Setiap halaman paket memuat itinerary, harga, include/exclude, FAQ, dan CTA.
- [ ] Halaman 404 kustom berfungsi.

### 14.2 SEO / AEO / GEO
- [ ] Setiap halaman memiliki `<title>`, meta description, dan canonical yang unik; satu H1 per halaman.
- [ ] Tag Open Graph tampil benar saat tautan dibagikan di WhatsApp/Facebook (uji dengan Facebook Sharing Debugger).
- [ ] Seluruh gambar berformat `.webp`, memiliki `alt` deskriptif, serta `width`/`height`.
- [ ] Breadcrumb tampil di halaman dalam beserta `BreadcrumbList` schema.
- [ ] Blok FAQ + `FAQPage` schema tersedia di halaman destinasi, paket, dan kontak.
- [ ] JSON-LD (`TravelAgency`, `Product`, `FAQPage`, `BlogPosting`) tervalidasi **tanpa error** di Schema Markup Validator.
- [ ] `sitemap.xml` valid dan telah dikirim ke Search Console; `robots.txt` benar.
- [ ] Struktur HTML memakai tag semantik (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`).
- [ ] Seluruh variasi URL (`http://`, `www.`) redirect 301 ke `https://wisatabanyuwangi.web.id` dalam satu lompatan.
- [ ] Domain terverifikasi di Google Search Console (properti Domain) dan Bing Webmaster Tools.
- [ ] `robots.txt`, `sitemap.xml`, dan `llms.txt` dapat diakses di root domain.
- [ ] Konfigurasi pada Lampiran A–K telah diterapkan dan lolos checklist Lampiran K.

### 14.3 Performa & Kualitas
- [ ] Skor Lighthouse ≥ 90 untuk Performance, SEO, Accessibility, dan Best Practices (mobile & desktop) pada halaman Beranda, satu halaman destinasi, satu halaman paket, dan satu artikel.
- [ ] Core Web Vitals memenuhi ambang "Good" (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1).
- [ ] Tidak ada *render-blocking resources* pada laporan PageSpeed Insights.
- [ ] Lulus pengujian *mobile-friendly* (Lighthouse/inspeksi URL di Search Console).
- [ ] Event `whatsapp_click` tercatat di GA4 (uji lewat DebugView).

---

## 15. Rencana Rilis (Milestone)

| Fase | Cakupan | Estimasi |
|---|---|---|
| **0. Persiapan** | Pengumpulan konten, foto, harga, itinerary; pilih template; domain & hosting | Minggu 1 |
| **1. Fondasi** | Setup template, bersihkan aset tak terpakai, layout global, floating WA, komponen CTA, struktur URL | Minggu 2 |
| **2. Halaman inti** | Beranda, Destinasi (3–4 halaman), Paket (open/private), Kontak & FAQ, Tentang Kami | Minggu 3–4 |
| **3. SEO/AEO/GEO** | Meta, Open Graph, JSON-LD, FAQ, sitemap, robots, llms.txt, optimasi gambar | Minggu 4–5 |
| **4. Konten blog** | 5–6 artikel awal | Minggu 5–6 |
| **5. QA & peluncuran** | Uji lintas perangkat, Lighthouse, validasi schema, uji CTA, deploy, kirim ke Search Console | Minggu 6 |
| **6. Pasca-rilis** | Pemantauan, tambah artikel, kumpulkan ulasan, optimasi berdasarkan data | Berkelanjutan |

---

## 16. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Template BootstrapMade membawa CSS/JS berat | Skor performa turun | Purge aset tak terpakai, *defer* JS, *inline* CSS kritis |
| Konten tipis/duplikat | Sulit bersaing di SEO & GEO | Konten orisinal dengan data spesifik dan foto sendiri |
| Data kedaluwarsa (harga, jam buka, aturan Ijen/Baluran) | Menurunkan kepercayaan | Jadwal tinjauan kuartalan; tanggal "diperbarui" di halaman |
| Situs statis sulit diperbarui banyak halaman | Pemeliharaan lambat | Gunakan komponen berulang konsisten; pertimbangkan *static site generator* (mis. Eleventy/Astro) di fase berikutnya |
| Ketergantungan pada WhatsApp saja | Prospek hilang bila nomor tidak dibalas | SLA respons maksimal 15 menit jam kerja; tambah kanal telepon/email cadangan |
| AI tidak mengutip situs | Visibilitas GEO rendah | Perkuat entitas, backlink lokal, ulasan, dan konten *citable* |

---

## 17. Pertanyaan Terbuka (Perlu Keputusan)

1. Nama brand final dan logo? (Domain sudah ditetapkan: `wisatabanyuwangi.web.id`; judul di Lampiran memakai nama "Wisata Banyuwangi" sebagai nama situs sementara.)
2. Daftar paket awal, harga, dan jadwal keberangkatan open trip?
3. Alamat kantor/basecamp dan jam operasional resmi?
4. Apakah akan ada versi bahasa Inggris pada rilis awal?
5. Apakah tersedia legalitas usaha (NIB, izin biro perjalanan) untuk ditampilkan?
6. Siapa penanggung jawab konten & pembaruan berkala?
7. Apakah ada akun media sosial / Google Business Profile yang sudah ada?

---

## 18. Checklist Pra-Peluncuran

- [ ] Nomor WhatsApp 088989643555 diuji di setiap jenis halaman
- [ ] Semua placeholder `[ ... ]` sudah diganti
- [ ] Favicon, logo, dan gambar OG terpasang
- [ ] Redirect HTTPS & versi domain utama benar
- [ ] Sitemap dikirim ke Search Console
- [ ] GA4 & Search Console aktif
- [ ] Validasi JSON-LD bersih
- [ ] Uji Lighthouse mobile & desktop ≥ 90
- [ ] Proofreading seluruh konten
- [ ] Backup kode dan aset

---

# LAMPIRAN — Konfigurasi Detail SEO, AEO & GEO

> Domain: **https://wisatabanyuwangi.web.id** · Nama situs (sementara): **Wisata Banyuwangi** · Nomor WhatsApp: **6288989643555**
> Ganti nilai `[...]` dengan data final sebelum rilis.

---

## Lampiran A — Konfigurasi Domain & Hosting

### A.1 Keputusan Host Kanonis
| Aspek | Ketetapan |
|---|---|
| Domain utama (kanonis) | `https://wisatabanyuwangi.web.id` (**tanpa www**) |
| Protokol | HTTPS wajib (sertifikat TLS valid, perpanjangan otomatis) |
| `http://wisatabanyuwangi.web.id` | 301 → `https://wisatabanyuwangi.web.id` |
| `https://www.wisatabanyuwangi.web.id` | 301 → `https://wisatabanyuwangi.web.id` |
| Jumlah lompatan redirect | Maksimal 1 (hindari rantai redirect) |
| Trailing slash | Konsisten (halaman `.html` tanpa slash; folder indeks dengan slash) |
| Huruf URL | Huruf kecil semua |

### A.2 Catatan Domain `.web.id`
- `.web.id` adalah domain tingkat kedua di bawah ccTLD Indonesia (`.id`), sehingga Google umumnya membaca situs ini sebagai **target Indonesia** tanpa pengaturan geotarget manual. Cocok untuk audiens utama domestik.
- Untuk audiens mancanegara, siapkan versi Inggris di subfolder `/en/` (bukan domain terpisah) dengan `hreflang` (lihat Lampiran B.3).
- Registrasi `.web.id` umumnya memerlukan verifikasi identitas pemilik; pastikan data registrar valid dan masa aktif domain tidak kedaluwarsa (aktifkan *auto-renew*).
- Aktifkan perlindungan: kunci transfer domain dan 2FA di akun registrar.

### A.3 DNS & Email
| Record | Fungsi |
|---|---|
| `A` / `AAAA` atau `CNAME` | Mengarah ke hosting/CDN |
| `CNAME www` | Mengarah ke domain utama (lalu di-redirect 301) |
| `TXT` (verifikasi) | Verifikasi properti Domain di Google Search Console & Bing Webmaster |
| `CAA` (opsional) | Membatasi penerbit sertifikat TLS |
| Email bisnis | Contoh: `info@wisatabanyuwangi.web.id`, dengan **SPF, DKIM, DMARC** aktif agar email tidak masuk spam |

### A.4 Layanan Pihak Ketiga yang Harus Terhubung
Google Search Console (properti **Domain**), Google Analytics 4, Google Business Profile (website = `https://wisatabanyuwangi.web.id/`), Bing Webmaster Tools.

---

## Lampiran B — Template `<head>` Standar

### B.1 Template Lengkap (contoh Halaman Detail Paket)
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- SEO inti -->
  <title>Open Trip Ijen Baluran 2H1M Banyuwangi | Wisata Banyuwangi</title>
  <meta name="description" content="Open trip Ijen Baluran 2 hari 1 malam dengan guide lokal. Cek itinerary, harga, fasilitas, dan pesan langsung via WhatsApp.">
  <meta name="keywords" content="open trip ijen baluran, paket wisata banyuwangi, open trip banyuwangi 2026">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="Wisata Banyuwangi">
  <link rel="canonical" href="https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html">

  <!-- Geo & bahasa -->
  <meta name="geo.region" content="ID-JI">
  <meta name="geo.placename" content="Banyuwangi">
  <link rel="alternate" hreflang="id" href="https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html">
  <link rel="alternate" hreflang="x-default" href="https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Wisata Banyuwangi">
  <meta property="og:locale" content="id_ID">
  <meta property="og:title" content="Open Trip Ijen Baluran 2H1M Banyuwangi">
  <meta property="og:description" content="Itinerary, harga, dan fasilitas open trip Ijen Baluran 2H1M. Pesan via WhatsApp.">
  <meta property="og:url" content="https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html">
  <meta property="og:image" content="https://wisatabanyuwangi.web.id/assets/img/og/open-trip-ijen-baluran.webp">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Wisatawan menikmati blue fire Kawah Ijen saat open trip Banyuwangi">

  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Open Trip Ijen Baluran 2H1M Banyuwangi">
  <meta name="twitter:description" content="Itinerary, harga, dan fasilitas open trip Ijen Baluran 2H1M.">
  <meta name="twitter:image" content="https://wisatabanyuwangi.web.id/assets/img/og/open-trip-ijen-baluran.webp">

  <!-- Warna & ikon -->
  <meta name="theme-color" content="#0b6e4f">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/assets/img/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.jpg">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Performa -->
  <link rel="preload" as="image" href="/assets/img/hero-ijen.webp" fetchpriority="high">
  <link rel="preload" href="/assets/fonts/[font].woff2" as="font" type="font/woff2" crossorigin>
  <style>/* CSS kritis di-inline di sini */</style>
  <link rel="stylesheet" href="/assets/css/main.min.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/assets/css/main.min.css"></noscript>

  <!-- JSON-LD ditaruh di sini (lihat Lampiran G) -->
</head>
```

### B.2 Aturan Pengisian Meta
| Elemen | Aturan |
|---|---|
| `<title>` | Maks. 60 karakter; keyword utama di depan; diakhiri nama situs; unik per halaman |
| `meta description` | 120–155 karakter; ada keyword + manfaat + ajakan bertindak; unik |
| `canonical` | Selalu URL absolut `https://wisatabanyuwangi.web.id/...`, mengarah ke dirinya sendiri |
| `og:image` | 1200×630 px, `.webp`/`.jpg` di bawah 300 KB, URL absolut; **WhatsApp & Facebook lebih stabil membaca `.jpg`/`.png`** — sediakan versi `.jpg` khusus OG bila `.webp` tidak tampil saat diuji |
| `meta robots` | `noindex` hanya untuk halaman terima kasih/uji; halaman publik `index, follow` |

### B.3 Persiapan Versi Inggris (Rilis Berikutnya)
Struktur `/en/...` dan tambahkan pada setiap halaman:
```html
<link rel="alternate" hreflang="id" href="https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html">
<link rel="alternate" hreflang="en" href="https://wisatabanyuwangi.web.id/en/packages/open-trip/ijen-baluran-2d1n.html">
<link rel="alternate" hreflang="x-default" href="https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html">
```

---

## Lampiran C — `robots.txt`

Letakkan di `https://wisatabanyuwangi.web.id/robots.txt`:
```txt
# Wisata Banyuwangi — robots.txt
User-agent: *
Allow: /
Disallow: /404.html

# Crawler mesin pencari
User-agent: Googlebot
Allow: /
User-agent: Bingbot
Allow: /

# Crawler & agen AI (izinkan agar konten dapat dikutip)
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: https://wisatabanyuwangi.web.id/sitemap.xml
```
**Catatan:** `Google-Extended` adalah token kontrol untuk penggunaan konten pada Gemini; mengizinkannya tidak memengaruhi peringkat pencarian Google biasa. Bila bisnis tidak ingin kontennya dipakai untuk pelatihan model AI, ubah menjadi `Disallow: /` pada agen terkait — keputusan ini terpisah dari pengindeksan pencarian.

---

## Lampiran D — `sitemap.xml`

Letakkan di `https://wisatabanyuwangi.web.id/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://wisatabanyuwangi.web.id/</loc>
    <lastmod>2026-10-01</lastmod>
  </url>
  <url>
    <loc>https://wisatabanyuwangi.web.id/destinasi/</loc>
    <lastmod>2026-10-01</lastmod>
  </url>
  <url>
    <loc>https://wisatabanyuwangi.web.id/destinasi/kawah-ijen.html</loc>
    <lastmod>2026-10-01</lastmod>
    <image:image>
      <image:loc>https://wisatabanyuwangi.web.id/assets/img/blue-fire-kawah-ijen-banyuwangi.webp</image:loc>
    </image:image>
  </url>
  <url>
    <loc>https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html</loc>
    <lastmod>2026-10-01</lastmod>
  </url>
  <!-- Tambahkan seluruh halaman publik lain: destinasi, paket, layanan, blog, tentang, galeri, kontak -->
</urlset>
```
**Aturan:** hanya URL kanonis berstatus 200; `lastmod` diisi tanggal perubahan konten **yang sebenarnya** (jangan diperbarui otomatis tanpa perubahan); tidak memuat URL redirect, 404, atau `noindex`; maksimal 50.000 URL per file. `priority` dan `changefreq` boleh dihilangkan karena diabaikan Google.

---

## Lampiran E — `llms.txt` (GEO)

Letakkan di `https://wisatabanyuwangi.web.id/llms.txt`. File ini bersifat opsional dan belum menjadi standar yang dijamin dibaca semua AI, tetapi berguna sebagai ringkasan terstruktur situs:
```markdown
# Wisata Banyuwangi

> Layanan travel lokal di Banyuwangi, Jawa Timur: open trip dan private trip ke Kawah Ijen, Taman Nasional Baluran, Pantai Pulau Merah, dan Djawatan Benculuk, serta sewa mobil wisata dengan driver. Pemesanan melalui WhatsApp.

## Informasi Utama
- Lokasi layanan: Banyuwangi, Jawa Timur, Indonesia
- Kontak: WhatsApp +62 897-0624-723
- Bahasa: Indonesia

## Halaman Penting
- [Paket Wisata](https://wisatabanyuwangi.web.id/paket/): Open trip & private trip, lengkap dengan itinerary, harga, dan fasilitas
- [Destinasi](https://wisatabanyuwangi.web.id/destinasi/): Panduan destinasi dengan jarak, jam buka, tiket, dan tips
- [Sewa Mobil](https://wisatabanyuwangi.web.id/layanan/sewa-mobil.html): Armada dan tarif sewa mobil wisata
- [Blog Panduan](https://wisatabanyuwangi.web.id/blog/): Panduan persiapan, kuliner, dan itinerary
- [Kontak & FAQ](https://wisatabanyuwangi.web.id/kontak-faq.html): Pertanyaan umum dan cara memesan

## Opsional
- [Tentang Kami](https://wisatabanyuwangi.web.id/tentang-kami.html)
- [Galeri & Testimoni](https://wisatabanyuwangi.web.id/galeri-testimoni.html)
```

---

## Lampiran F — Redirect, Kompresi, Cache & Header Keamanan

### F.1 Apache (`.htaccess`)
```apache
# Paksa HTTPS + non-www dalam satu lompatan
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^ https://wisatabanyuwangi.web.id%{REQUEST_URI} [L,R=301]

ErrorDocument 404 /404.html

# Kompresi
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml application/xml
</IfModule>

# Cache aset statis
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png  "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/html "access plus 10 minutes"
</IfModule>

# Header keamanan
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), camera=(), microphone=()"
</IfModule>
```
> Aktifkan `includeSubDomains` pada HSTS hanya bila seluruh subdomain sudah HTTPS. Aset ber-cache 1 tahun sebaiknya diberi *versioning* nama file (mis. `main.min.20261001.css`).

### F.2 Alternatif Netlify / Cloudflare Pages (`_redirects` & `_headers`)
```txt
# _redirects
https://www.wisatabanyuwangi.web.id/*  https://wisatabanyuwangi.web.id/:splat  301!
```
```txt
# _headers
/*
  Strict-Transport-Security: max-age=31536000
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

---

## Lampiran G — JSON-LD Lengkap

### G.1 Beranda: `TravelAgency`, `WebSite`, `Organization`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://wisatabanyuwangi.web.id/#website",
      "url": "https://wisatabanyuwangi.web.id/",
      "name": "Wisata Banyuwangi",
      "inLanguage": "id-ID",
      "publisher": { "@id": "https://wisatabanyuwangi.web.id/#organization" }
    },
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": "https://wisatabanyuwangi.web.id/#organization",
      "name": "Wisata Banyuwangi",
      "url": "https://wisatabanyuwangi.web.id/",
      "logo": "https://wisatabanyuwangi.web.id/assets/img/logo.webp",
      "image": "https://wisatabanyuwangi.web.id/assets/img/og/home.jpg",
      "description": "Layanan open trip, private trip, dan sewa mobil wisata di Banyuwangi dengan guide lokal.",
      "telephone": "+6288989643555",
      "email": "info@wisatabanyuwangi.web.id",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Alamat lengkap]",
        "addressLocality": "Banyuwangi",
        "addressRegion": "Jawa Timur",
        "postalCode": "[kode pos]",
        "addressCountry": "ID"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "[lat]", "longitude": "[long]" },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Banyuwangi" },
        { "@type": "AdministrativeArea", "name": "Situbondo" }
      ],
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "07:00",
        "closes": "21:00"
      }],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+6288989643555",
        "contactType": "customer service",
        "areaServed": "ID",
        "availableLanguage": ["id", "en"]
      },
      "sameAs": [
        "https://www.instagram.com/[akun]",
        "https://www.facebook.com/[akun]",
        "https://www.tiktok.com/@[akun]",
        "https://g.page/[google-business-profile]"
      ]
    }
  ]
}
</script>
```

### G.2 Breadcrumb (semua halaman dalam)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://wisatabanyuwangi.web.id/" },
    { "@type": "ListItem", "position": 2, "name": "Paket Wisata", "item": "https://wisatabanyuwangi.web.id/paket/" },
    { "@type": "ListItem", "position": 3, "name": "Open Trip Ijen Baluran 2H1M" }
  ]
}
</script>
```

### G.3 Destinasi: `TouristAttraction`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Kawah Ijen",
  "description": "[Deskripsi singkat dan faktual, sama dengan isi halaman]",
  "url": "https://wisatabanyuwangi.web.id/destinasi/kawah-ijen.html",
  "image": "https://wisatabanyuwangi.web.id/assets/img/blue-fire-kawah-ijen-banyuwangi.webp",
  "touristType": ["Pendaki", "Fotografer", "Wisata alam"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Banyuwangi",
    "addressRegion": "Jawa Timur",
    "addressCountry": "ID"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "[lat]", "longitude": "[long]" },
  "isAccessibleForFree": false
}
</script>
```

### G.4 Paket: `Product` + `Offer`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Open Trip Ijen Baluran 2H1M",
  "description": "Open trip 2 hari 1 malam ke Kawah Ijen dan Taman Nasional Baluran dengan guide lokal.",
  "image": [
    "https://wisatabanyuwangi.web.id/assets/img/open-trip-ijen-baluran.webp"
  ],
  "sku": "OT-IJBL-2H1M",
  "brand": { "@type": "Brand", "name": "Wisata Banyuwangi" },
  "offers": {
    "@type": "Offer",
    "url": "https://wisatabanyuwangi.web.id/paket/open-trip/ijen-baluran-2h1m.html",
    "priceCurrency": "IDR",
    "price": "[harga per orang]",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": { "@id": "https://wisatabanyuwangi.web.id/#organization" }
  }
}
</script>
```
`aggregateRating` / `review` **hanya** ditambahkan jika ulasan nyata tampil di halaman dan dapat diverifikasi.

### G.5 Blog: `BlogPosting`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Persiapan Mendaki Kawah Ijen: Panduan Lengkap",
  "description": "[Ringkasan 1–2 kalimat]",
  "image": "https://wisatabanyuwangi.web.id/assets/img/blog/persiapan-mendaki-kawah-ijen.webp",
  "datePublished": "2026-10-01",
  "dateModified": "2026-10-01",
  "inLanguage": "id-ID",
  "author": { "@type": "Person", "name": "[Nama penulis/guide]", "url": "https://wisatabanyuwangi.web.id/tentang-kami.html" },
  "publisher": { "@id": "https://wisatabanyuwangi.web.id/#organization" },
  "mainEntityOfPage": "https://wisatabanyuwangi.web.id/blog/persiapan-mendaki-kawah-ijen.html"
}
</script>
```

### G.6 Aturan Schema
- Satu sumber kebenaran: data di JSON-LD harus **sama** dengan yang terlihat di halaman (harga, FAQ, alamat).
- Gunakan `@id` agar entitas saling terhubung antar halaman.
- Validasi di **Schema Markup Validator** dan **Rich Results Test** setiap kali template berubah.

---

## Lampiran H — Matriks SEO per Halaman

| Halaman | URL | Title (≤ 60 karakter) | H1 | Keyword utama | Schema |
|---|---|---|---|---|---|
| Beranda | `/` | Paket Wisata Banyuwangi 2026 \| Open Trip & Private Trip | Paket Wisata Banyuwangi: Open Trip & Private Trip | paket wisata banyuwangi | TravelAgency, WebSite |
| Katalog Destinasi | `/destinasi/` | Destinasi Wisata Banyuwangi: Ijen, Baluran, Pulau Merah | Destinasi Wisata Banyuwangi Terlengkap | tempat wisata banyuwangi | CollectionPage, Breadcrumb |
| Kawah Ijen | `/destinasi/kawah-ijen.html` | Kawah Ijen Banyuwangi: Tiket, Jam Buka & Tips Blue Fire | Panduan Wisata Kawah Ijen Banyuwangi | kawah ijen banyuwangi | TouristAttraction, FAQ, Breadcrumb |
| Baluran | `/destinasi/taman-nasional-baluran.html` | Taman Nasional Baluran: Tiket, Savana & Tips Kunjungan | Panduan Wisata Taman Nasional Baluran | taman nasional baluran | TouristAttraction, FAQ, Breadcrumb |
| Pulau Merah | `/destinasi/pantai-pulau-merah.html` | Pantai Pulau Merah Banyuwangi: Rute, Tiket & Ombak | Panduan Wisata Pantai Pulau Merah | pantai pulau merah banyuwangi | TouristAttraction, FAQ, Breadcrumb |
| Djawatan | `/destinasi/djawatan-benculuk.html` | Djawatan Benculuk Banyuwangi: Tiket & Spot Foto | Panduan Wisata Djawatan Benculuk | djawatan banyuwangi | TouristAttraction, FAQ, Breadcrumb |
| Katalog Paket | `/paket/` | Paket Wisata Banyuwangi: Harga, Itinerary & Fasilitas | Pilih Paket Wisata Banyuwangi | paket tour banyuwangi | CollectionPage, Breadcrumb |
| Open Trip | `/paket/open-trip/ijen-baluran-2h1m.html` | Open Trip Ijen Baluran 2H1M Banyuwangi \| Wisata Banyuwangi | Open Trip Ijen Baluran 2 Hari 1 Malam | open trip ijen baluran | Product, FAQ, Breadcrumb |
| Private Trip | `/paket/private-trip/` | Private Trip Banyuwangi 2026: Custom Itinerary Keluarga | Private Trip Banyuwangi untuk Keluarga & Rombongan | private trip banyuwangi | Product, FAQ, Breadcrumb |
| Sewa Mobil | `/layanan/sewa-mobil.html` | Sewa Mobil Wisata Banyuwangi + Driver, Harga Transparan | Sewa Mobil Wisata Banyuwangi dengan Driver | sewa mobil banyuwangi | Service, FAQ, Breadcrumb |
| Blog (indeks) | `/blog/` | Blog Panduan Wisata Banyuwangi \| Wisata Banyuwangi | Panduan & Tips Wisata Banyuwangi | panduan wisata banyuwangi | Blog, Breadcrumb |
| Tentang Kami | `/tentang-kami.html` | Tentang Kami \| Tim Travel Lokal Banyuwangi | Tentang Wisata Banyuwangi | travel banyuwangi terpercaya | Organization, Person |
| Galeri & Testimoni | `/galeri-testimoni.html` | Galeri & Testimoni Trip Banyuwangi \| Wisata Banyuwangi | Galeri & Testimoni Tamu Kami | testimoni travel banyuwangi | ImageGallery, Breadcrumb |
| Kontak & FAQ | `/kontak-faq.html` | Kontak & FAQ Wisata Banyuwangi \| Chat WhatsApp | Hubungi Kami & Pertanyaan Umum | kontak travel banyuwangi | FAQPage, ContactPoint |

**Contoh meta description:**
- **Beranda:** "Paket wisata Banyuwangi: open trip & private trip ke Ijen, Baluran, Pulau Merah. Guide lokal, harga transparan. Tanya via WhatsApp."
- **Kawah Ijen:** "Panduan Kawah Ijen: jam buka, tiket, waktu terbaik melihat blue fire, dan tips pendakian. Booking trip Ijen via WhatsApp."
- **Sewa Mobil:** "Sewa mobil wisata Banyuwangi dengan driver berpengalaman. Armada terawat, harga jelas. Cek tarif dan pesan via WhatsApp."

---

## Lampiran I — Standar AEO (FAQ & Jawaban Langsung)

### I.1 Pola Jawaban "Answer-First"
Setiap pertanyaan dijawab **langsung di kalimat pertama** (40–60 kata), baru diikuti detail:

> **Q: Jam berapa Kawah Ijen dibuka?**
> A: [Jawaban singkat dan langsung berisi jam buka terkini beserta catatan bahwa jam dapat berubah mengikuti kebijakan pengelola.] [Detail tambahan: waktu terbaik, kondisi cuaca, tips.]

> Jam buka, tarif, dan aturan pengelola harus dicek ke sumber resmi sebelum publikasi dan diberi tanggal "terakhir diperbarui".

### I.2 Markup HTML FAQ (Semantik & Aksesibel)
```html
<section aria-labelledby="faq-title">
  <h2 id="faq-title">Pertanyaan yang Sering Diajukan</h2>
  <details>
    <summary>Apakah balita bisa ke Taman Nasional Baluran?</summary>
    <p>[Jawaban langsung 1–2 kalimat.] [Detail tambahan.]</p>
  </details>
  <details>
    <summary>Berapa jarak Pantai Pulau Merah dari pusat kota Banyuwangi?</summary>
    <p>[Jawaban dengan angka jarak dan waktu tempuh yang sudah diverifikasi.]</p>
  </details>
</section>
```
Gunakan `<details>/<summary>` (tanpa JavaScript) agar ringan dan teks tetap terbaca crawler.

### I.3 Daftar Pertanyaan Target per Halaman
| Halaman | Contoh pertanyaan (gaya percakapan) |
|---|---|
| Kawah Ijen | Jam berapa Kawah Ijen dibuka? · Kapan waktu terbaik melihat blue fire? · Apakah perlu guide untuk naik Ijen? · Apa yang harus dibawa saat mendaki Ijen? · Apakah anak-anak boleh naik Ijen? |
| Baluran | Apakah balita bisa ke Baluran? · Kapan musim terbaik ke Baluran? · Berapa lama menjelajah Baluran? · Boleh membawa mobil pribadi ke dalam savana? |
| Pulau Merah | Berapa jarak Pulau Merah dari pusat kota? · Apakah Pulau Merah cocok untuk pemula surfing? · Kapan waktu terbaik berkunjung? |
| Djawatan | Berapa tiket masuk Djawatan? · Jam terbaik untuk foto? |
| Paket | Apa saja yang termasuk dalam paket? · Apakah harga sudah termasuk tiket masuk? · Bagaimana jika cuaca buruk atau Ijen ditutup? · Bagaimana cara pembayaran dan pembatalan? |
| Sewa Mobil | Berapa harga sewa mobil per hari? · Apakah sudah termasuk BBM dan driver? · Apakah melayani antar-jemput bandara/stasiun? |
| Kontak | Bagaimana cara memesan? · Berapa lama respons WhatsApp? · Apakah bisa custom itinerary? |

### I.4 Aturan AEO
- Judul H2/H3 memakai bentuk pertanyaan bila memungkinkan.
- Info faktual (jam buka, tarif, jarak) disajikan dalam **tabel atau daftar** agar mudah diekstrak.
- Setiap artikel diawali **ringkasan jawaban** (TL;DR) 2–3 kalimat.
- Optimasi voice search: kalimat natural, pertanyaan lengkap ("Berapa lama perjalanan dari Surabaya ke Banyuwangi?").
- Teks di `FAQPage` JSON-LD identik dengan teks yang tampil.

---

## Lampiran J — Standar GEO (Dikutip oleh AI)

### J.1 Prinsip Konten
| Prinsip | Implementasi |
|---|---|
| **Fakta spesifik & terverifikasi** | Cantumkan angka (jarak, durasi, ketinggian, tarif), satuan jelas, dan tanggal verifikasi |
| **Pengalaman langsung (Experience)** | Catatan lapangan guide, foto/video asli, "Kami mendaki Ijen pada [bulan/tahun] dan menemukan…" |
| **Keahlian & otoritas** | Halaman penulis dengan bio dan pengalaman; legalitas usaha; kolaborasi dengan pengelola/komunitas lokal |
| **Kepercayaan** | Harga transparan, kebijakan pembatalan, testimoni nyata, kontak yang dapat diverifikasi |
| **Kemudahan dikutip** | Paragraf ringkas yang berdiri sendiri, definisi jelas, daftar bernomor, tabel perbandingan |
| **Kesegaran** | `dateModified` di schema + tanggal "diperbarui" yang terlihat; tinjau tiap kuartal |
| **Konsistensi entitas** | Nama, alamat, nomor telepon, deskripsi sama di website, Google Business Profile, media sosial, dan direktori |

### J.2 Aset Otoritas di Luar Website (Off-Page)
1. **Google Business Profile** terverifikasi (kategori: *Travel agency / Tour agency*), tautkan `https://wisatabanyuwangi.web.id/`.
2. Profil di TripAdvisor, Google Maps, dan direktori travel Indonesia (NAP konsisten).
3. Media sosial dengan tautan balik (Instagram, TikTok, YouTube, Facebook) dan cantumkan di `sameAs`.
4. Kumpulkan **ulasan nyata** secara rutin (minta ulasan setelah trip, sertakan tautan ulasan Google).
5. Backlink relevan: komunitas travel, blogger perjalanan, instansi pariwisata daerah, media lokal.
6. Konten video singkat (YouTube/TikTok) yang di-*embed* pada halaman destinasi terkait.

### J.3 Pengujian Visibilitas AI (Bulanan)
Uji prompt berikut di Google (AI Overviews/AI Mode), ChatGPT, Gemini, dan Perplexity, lalu catat apakah situs disebut atau dikutip:
- "Paket wisata Banyuwangi terbaik untuk open trip Ijen Baluran"
- "Rekomendasi travel private trip Kawah Ijen"
- "Sewa mobil wisata Banyuwangi dengan driver"
- "Berapa lama perjalanan dari Surabaya ke Kawah Ijen?"
- "Apakah balita boleh ke Taman Nasional Baluran?"
- "Itinerary Banyuwangi 3 hari 2 malam"

Catat hasil dalam tabel pemantauan (tanggal, platform, prompt, dikutip ya/tidak, sumber pesaing yang muncul) untuk menentukan konten yang perlu diperkuat.

---

## Lampiran K — Checklist Validasi & Tools

### K.1 Checklist Teknis Pra-Peluncuran
- [ ] `http://` dan `www.` redirect 301 ke `https://wisatabanyuwangi.web.id` (satu lompatan)
- [ ] Sertifikat TLS valid; HSTS aktif
- [ ] `robots.txt`, `sitemap.xml`, `llms.txt` dapat diakses (status 200)
- [ ] Properti **Domain** terverifikasi di Google Search Console; sitemap dikirim
- [ ] Bing Webmaster Tools terverifikasi; sitemap dikirim
- [ ] Setiap halaman: `title`, `description`, `canonical`, OG, Twitter Card unik dan benar
- [ ] Satu H1 per halaman; hierarki heading logis
- [ ] Seluruh gambar `.webp`, ber-`alt`, ber-`width`/`height`; hero tidak di-*lazy*
- [ ] Breadcrumb tampil + `BreadcrumbList` valid
- [ ] FAQ tampil + `FAQPage` identik dengan teks halaman
- [ ] `TravelAgency`, `Product`, `TouristAttraction`, `BlogPosting` lolos validator tanpa error
- [ ] Tidak ada halaman yatim (semua dapat dicapai ≤ 3 klik dari beranda)
- [ ] Tidak ada tautan rusak internal/eksternal
- [ ] Halaman 404 mengembalikan status HTTP 404 (bukan 200)
- [ ] CTA WhatsApp ke `6288989643555` benar di semua halaman; event `whatsapp_click` tercatat

### K.2 Tools Validasi
| Tujuan | Tool |
|---|---|
| Kecepatan & Core Web Vitals | PageSpeed Insights, Lighthouse, Search Console (laporan Core Web Vitals) |
| Schema | Schema Markup Validator, Google Rich Results Test |
| Mobile & indeks | Inspeksi URL di Search Console |
| Pratinjau berbagi | Facebook Sharing Debugger, uji tautan langsung di WhatsApp |
| Crawl & tautan rusak | Screaming Frog (versi gratis hingga 500 URL), Search Console |
| Keamanan header | securityheaders.com |
| Pelacakan | GA4 DebugView |
| Peringkat | Search Console (kueri & posisi), rank tracker pilihan |

### K.3 Jadwal Pemeliharaan SEO/AEO/GEO
| Frekuensi | Tindakan |
|---|---|
| Mingguan | Cek Search Console (error indeks, kueri baru), balas ulasan, publikasikan konten baru |
| Bulanan | Audit tautan rusak & kecepatan, uji prompt AI (J.3), perbarui artikel berperforma rendah |
| Kuartalan | Tinjau harga, jam buka, aturan taman nasional; perbarui `dateModified`; tambah FAQ dari pertanyaan nyata pelanggan WhatsApp |
| Tahunan | Audit SEO menyeluruh, perbarui keyword & rencana konten, perpanjang domain |
