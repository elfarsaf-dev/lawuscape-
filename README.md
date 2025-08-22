# LAWUSCAPE - Villa & Glamping Booking Platform

Website pencarian dan booking villa serta glamping di area Tawangmangu dengan fitur WhatsApp booking otomatis.

## 🏞️ Fitur Utama

- **Katalog Properti**: 18+ villa dan glamping dengan foto asli
- **Pencarian Cerdas**: Search berdasarkan nama, lokasi, fasilitas, kapasitas
- **Harga Fleksibel**: Format harga sesuai kategori (weekday/weekend, air dingin/hangat, dll)
- **WhatsApp Booking**: Pesan otomatis dengan detail lengkap properti
- **Design Responsif**: Optimal untuk desktop dan mobile

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
# Output: dist/public/
```

## 📦 Deploy ke Hosting

### GitHub + Netlify (Recommended)
1. Upload project ke GitHub
2. Connect GitHub ke Netlify
3. Auto deploy dengan settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`

### GitHub + Vercel
1. Upload project ke GitHub  
2. Import ke Vercel
3. Auto deploy dengan konfigurasi `vercel.json`

## 🏗️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Data**: Static data in TypeScript files
- **Deployment**: Static hosting (Netlify/Vercel)

## 📁 Struktur Project

```
├── client/src/
│   ├── components/     # UI components
│   ├── lib/           # Utilities & data
│   └── pages/         # Route pages
├── shared/            # Type definitions
├── dist/public/       # Build output
└── netlify.toml       # Netlify config
```

## 🏡 Data Properti

Data villa dan glamping tersimpan di `client/src/lib/property-data.ts`. 
Setiap properti memiliki:
- Informasi dasar (nama, lokasi, kapasitas)
- Harga dengan format fleksibel
- Fasilitas lengkap
- Catatan penting
- Foto asli properti

## 📱 WhatsApp Integration

Tombol booking otomatis mengarah ke WhatsApp dengan pesan berformat:
- Detail properti lengkap
- Semua kategori harga
- Fasilitas utama
- Nomor tujuan: +62 822-4181-9991

## 🎨 Customization

### Menambah Villa/Glamping Baru
1. Edit `client/src/lib/property-data.ts`
2. Tambah object properti baru
3. Build ulang: `npm run build`

### Mengubah Style
1. Edit Tailwind classes di components
2. Modify `client/src/index.css` untuk custom styles

## 📞 Contact

WhatsApp Booking: +62 822-4181-9991