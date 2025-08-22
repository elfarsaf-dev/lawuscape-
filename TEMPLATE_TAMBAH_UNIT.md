# Template Menambah Villa/Glamping Baru

## 📝 Langkah-langkah:

### 1. Buka File Data
- Edit file: `client/src/lib/property-data.ts`
- Scroll ke bagian paling bawah array `propertyData`

### 2. Copy Template Ini
```typescript
{
  id: "nama-unit-baru",
  name: "Nama Villa/Glamping",
  location: "Lokasi, Tawangmangu",
  rates: [
    { label: "Weekday", price: 500000 },
    { label: "Weekend", price: 700000 }
    // Atau format harga lain sesuai kebutuhan
  ],
  units: 1,
  facilities: [
    "Fasilitas 1",
    "Fasilitas 2",
    "Fasilitas 3",
    // Tambah fasilitas lainnya
  ],
  capacity: "2-4 orang",
  notes: [
    "Check in jam 2 siang",
    "Check out jam 12 siang",
    "No miras",
    "No mesum",
    "No drugs",
    // Tambah catatan lainnya
  ],
  image: "https://link-gambar-unit.jpg",
  type: "villa" // atau "glamping"
}
```

### 3. Isi Data Sesuai Unit Baru
- **id**: nama unik (huruf kecil, pakai dash)
- **name**: nama villa/glamping yang tampil
- **location**: alamat lengkap
- **rates**: daftar harga dengan kategori
- **units**: jumlah unit tersedia
- **facilities**: daftar fasilitas lengkap
- **capacity**: kapasitas maksimal
- **notes**: aturan dan catatan penting
- **image**: URL foto unit
- **type**: "villa" atau "glamping"

### 4. Format Harga Fleksibel
```typescript
// Contoh format harga berbeda:

// Format standar weekday/weekend
rates: [
  { label: "Weekday", price: 500000 },
  { label: "Weekend", price: 700000 }
]

// Format hari spesifik
rates: [
  { label: "Senin-Kamis", price: 550000 },
  { label: "Jumat", price: 650000 },
  { label: "Sabtu", price: 750000 }
]

// Format dengan kategori khusus
rates: [
  { label: "Weekday - Air dingin", price: 500000 },
  { label: "Weekday - Air hangat", price: 600000 },
  { label: "Weekend - Air dingin", price: 700000 },
  { label: "Weekend - Air hangat", price: 800000 }
]

// Format harga mulai dari
rates: [
  { label: "Harga mulai 800 ribuan", price: 800000 }
]

// Villa tanpa info harga
rates: []
```

### 5. Contoh Lengkap Villa Baru
```typescript
{
  id: "villa-sejahtera",
  name: "Villa Sejahtera",
  location: "Kalisoro, Tawangmangu",
  rates: [
    { label: "Weekday", price: 1200000 },
    { label: "Jumat", price: 1500000 },
    { label: "Weekend", price: 2000000 }
  ],
  units: 1,
  facilities: [
    "3 Kamar tidur",
    "2 Kamar mandi",
    "Private pool",
    "Free Wi-Fi",
    "Smart TV",
    "Karaoke",
    "Dapur lengkap",
    "Kulkas",
    "Alat BBQ",
    "Free kopi, teh, gula",
    "Parkir luas"
  ],
  capacity: "15-20 orang",
  notes: [
    "Check in jam 2 siang",
    "Check out jam 12 siang",
    "Bukti nikah untuk pasangan",
    "No miras",
    "No mesum",
    "No drugs",
    "Dekat wisata Grojogan Sewu"
  ],
  image: "https://i.ibb.co/xxxxx/villa-sejahtera.jpg",
  type: "villa"
},
```

### 6. Cara Menambahkan ke File
1. Buka `client/src/lib/property-data.ts`
2. Cari `];` di bagian paling bawah
3. Tambahkan koma `,` setelah unit terakhir
4. Paste template yang sudah diisi
5. Pastikan ada `];` di paling akhir

### 7. Setelah Menambah Unit
1. **Build ulang**: `npm run build`
2. **Upload ke GitHub** (jika pakai auto deploy)
3. **Atau upload `dist/public/`** ke hosting manual

## 🎯 Tips:
- **ID harus unik** - jangan sama dengan unit lain
- **Gunakan foto asli** - upload ke image hosting seperti imgbb.com
- **Fasilitas detail** - tulis lengkap biar menarik
- **Harga jelas** - sesuai format yang konsisten
- **Catatan lengkap** - semua aturan penting

## 📱 Upload Foto:
1. Upload foto ke **imgbb.com** atau **imgur.com**
2. Copy link langsung gambar
3. Paste ke field `image`