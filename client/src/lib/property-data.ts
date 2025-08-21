import type { Property } from "@shared/schema";

export const propertyData: Property[] = [
  {
    id: "glamping-diyanis",
    name: "Glamping Diyanis",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday - Kolam renang air dingin", price: 500000 },
      { label: "Weekday - Kolam renang air hangat", price: 600000 },
      { label: "Jumat - Kolam renang air dingin", price: 600000 },
      { label: "Jumat - Kolam renang air hangat", price: 700000 },
      { label: "Weekend - Kolam renang air dingin", price: 700000 },
      { label: "Weekend - Kolam renang air hangat", price: 800000 }
    ],
    units: 11,
    facilities: [
      "Smart TV",
      "Free Wi-Fi", 
      "Kamar mandi air hangat",
      "Private pool hangat",
      "1 bed besar",
      "Dispenser",
      "Free mie instan, kopi, gula, teh",
      "Dapur mini",
      "Perlengkapan masak & makan",
      "Free breakfast untuk 2 orang",
      "Tempat parkir luas"
    ],
    capacity: "2-5 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang", 
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "glamping"
  },
  {
    id: "villa-dita",
    name: "Villa Dita", 
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Minggu – Kamis", price: 2000000 },
      { label: "Jumat", price: 2500000 },
      { label: "Sabtu", price: 3000000 }
    ],
    units: 1,
    facilities: [
      "4 Kamar tidur",
      "3 Kamar mandi",
      "Bangunan 2 lantai",
      "Free Wi-Fi",
      "Kolam renang", 
      "Karaoke keluarga",
      "TV LED",
      "Alat bakar lengkap",
      "View perbukitan Sekipan",
      "Halaman luas",
      "Parkir luas hingga 6 mobil",
      "Kitchen set lengkap",
      "Alat makan lengkap",
      "Free 2 extra bed",
      "Free teh, kopi & mie"
    ],
    capacity: "Maksimal 25 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan", 
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "mongkrang-story-cottage",
    name: "Mongkrang Story Cottage",
    location: "Tawangmangu", 
    rates: [
      { label: "Weekday", price: 400000 },
      { label: "Weekend", price: 600000 }
    ],
    units: 1,
    facilities: [
      "1 Bed",
      "Sofa",
      "Karpet tebal",
      "TV Android",
      "Wi-Fi",
      "Teko listrik",
      "Kamar mandi dalam",
      "Air panas & dingin",
      "Kopi dan teh",
      "Include sarapan pagi untuk 2 orang",
      "View Gunung Lawu"
    ],
    capacity: "Maksimal 6 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras", 
      "No mesum",
      "No drugs",
      "Super cantik dengan view Gunung Lawu"
    ],
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "villa-alami",
    name: "Villa Alami",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday", price: 1500000 },
      { label: "Jumat", price: 1700000 },
      { label: "Sabtu", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "3 kamar tidur",
      "Kamar mandi air hangat",
      "Alat dapur komplit",
      "10 mie instan, kopi, teh, air galon",
      "TV LED",
      "Sound karaoke keluarga", 
      "Free Wi-Fi",
      "Alat bakaran dan arang",
      "Berlangganan Netflix",
      "Kolam renang"
    ],
    capacity: "Maksimal 20 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum", 
      "No drugs",
      "Lokasi dekat wisata Bukit Sekipan - cuma 5 langkah"
    ],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "villa-teduh-jiwa",
    name: "Villa Teduh Jiwa",
    location: "Sekipan, Tawangmangu",
    rates: [],
    units: 1,
    facilities: [
      "3 Kamar tidur",
      "4 Kamar mandi (2 luar, 2 dalam)",
      "Ruang keluarga",
      "Wi-Fi",
      "Smart TV",
      "Karaoke",
      "Dapur lengkap (magicom, peralatan masak dan makan, kompor, kulkas, galon air mineral)",
      "Kopi, gula, teh",
      "Alat BBQ",
      "Genset",
      "Free BBQ",
      "Extra bed 1",
      "PS 3",
      "Sepeda motor",
      "Meja biliar",
      "Kolam renang"
    ],
    capacity: "25 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "diza-glamping",
    name: "Diza Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Weekday", price: 550000 },
      { label: "Jumat", price: 700000 },
      { label: "Weekend", price: 800000 }
    ],
    units: 3,
    facilities: [
      "Private Pool Air Hangat",
      "1 Bed Type Queen Size",
      "1 Kamar Mandi Dalam",
      "Water Heater",
      "Handuk & Amenities",
      "Wi-Fi Available",
      "Smart TV",
      "Kursi Outdoors",
      "Mini Kitchen",
      "Free Breakfast 2 Pax",
      "Free Mineral Water, Gula, Teh & Kopi",
      "Area Parkir"
    ],
    capacity: "2-4 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Price From Owner, No Mark Up",
      "Dekat Wisata Buper Pleseran & Telaga Asmara"
    ],
    image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "glamping"
  },
  {
    id: "karismaya",
    name: "Karismaya",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday", price: 2000000 },
      { label: "Weekend", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "Ruang tamu",
      "Smart TV",
      "Wi-Fi",
      "Karaoke",
      "Dapur lengkap",
      "3 Kamar Tidur",
      "3 Kamar Mandi",
      "Balkon"
    ],
    capacity: "25-30 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Cocok untuk Keluarga besar, Partai besar",
      "Pas untuk Acara-acara besar",
      "Dekat Wisata",
      "Dekat Kebun Strawberry"
    ],
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "villa-ku",
    name: "Villa \"KU\"",
    location: "Sekipan, dekat wisata",
    rates: [
      { label: "Harga 1 jutaan", price: 1000000 }
    ],
    units: 1,
    facilities: [
      "3 Kamar tidur",
      "2 Kamar mandi (1 kamar mandi dalam)",
      "Bangunan 2 lantai",
      "Karaoke keluarga",
      "Ruang tamu",
      "Alat BBQ lengkap",
      "Kitchen set",
      "Free Wi-Fi",
      "Water heater",
      "TV LED",
      "Balkon view",
      "Parkir 3 mobil"
    ],
    capacity: "15-20 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs"
    ],
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c53a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "villa-andromeda",
    name: "Villa Andromeda",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Weekday", price: 2000000 },
      { label: "Weekend", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "Ruang tamu",
      "Smart TV",
      "Wi-Fi",
      "Karaoke",
      "Dapur lengkap",
      "3 Kamar tidur",
      "3 Kamar mandi",
      "Balkon"
    ],
    capacity: "25-30 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Cocok untuk keluarga besar, partai besar",
      "Pas untuk acara-acara besar",
      "Dekat wisata",
      "Dekat kebun strawberry"
    ],
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "zheyuri-glamping",
    name: "Zheyuri Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Harga start 500K", price: 500000 }
    ],
    units: 1,
    facilities: [
      "1 Bed di lantai 2, bawahnya sofa",
      "1 Kamar mandi dalam – air hangat, handuk & amenities",
      "Wi-Fi available",
      "Smart TV",
      "Gula, teh & kopi",
      "Mini freezer",
      "Sofa",
      "Mini kitchen",
      "Private pool",
      "View adem"
    ],
    capacity: "2-4 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Glamping baru di Tawangmangu dengan view cantik",
      "Dekat wisata"
    ],
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "glamping"
  },
  {
    id: "azalea-glamping",
    name: "Azalea Glamping",
    location: "Pleseran, Tawangmangu",
    rates: [
      { label: "Weekday", price: 500000 },
      { label: "Weekend", price: 800000 }
    ],
    units: 5,
    facilities: [
      "Bed ukuran 160x200",
      "1 Kamar mandi dengan water heater",
      "Smart TV 43\"",
      "Free Wi-Fi",
      "Mini kitchen",
      "Alat masak & makan lengkap",
      "Handuk + amenities",
      "Cermin + hair dryer",
      "Free sarapan untuk 2 orang",
      "Welcome drink (teh, gula, kopi)",
      "Dispenser (panas, biasa, dingin)",
      "Mini private pool cukup besar",
      "View bukit dan hutan pinus",
      "Dekat sungai, bisa untuk ciblon",
      "Diskon 50% tiket masuk wisata Buper Pleseran",
      "Free BBQ",
      "Free tenda"
    ],
    capacity: "2-6 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "Bukti nikah untuk pasangan",
      "No miras",
      "No mesum",
      "No drugs",
      "Cocok untuk keluarga kecil, dan pasangan suami istri",
      "Pas juga untuk honeymoon",
      "Dekat wisata Pleseran"
    ],
    image: "https://images.unsplash.com/photo-1531116055003-5e6c5bb0f5d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "glamping"
  },
  {
    id: "villa-kemandoan",
    name: "Villa Kemandoan",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "Mulai 2 Jutaan / Malam", price: 2000000 }
    ],
    units: 1,
    facilities: [
      "4 Kamar tidur",
      "Ruang keluarga",
      "Ruang karaoke",
      "Private pool",
      "Balkon",
      "Rooftop",
      "Dapur peralatan komplit",
      "Rice cooker",
      "Kulkas",
      "Dispenser",
      "Alat bakaran",
      "Free mie, teh, kopi, gula"
    ],
    capacity: "30-35 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Rooftop dengan view sunset & bukit Sekipan",
      "Cocok untuk relaksasi dari hiruk pikuk kota"
    ],
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "2r-glamping",
    name: "2R Glamping",
    location: "Kalisoro, Tawangmangu",
    rates: [
      { label: "Senin–Kamis", price: 550000 },
      { label: "Jumat", price: 650000 },
      { label: "Sabtu", price: 750000 }
    ],
    units: 3,
    facilities: [
      "Kasur ukuran queen size",
      "Kamar mandi dengan water heater",
      "Welcome drink",
      "Welcome snack",
      "Smart TV",
      "Free kopi, gula & teh",
      "Sharing pool"
    ],
    capacity: "2-4 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Dekat wisata Bukit Sekipan"
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "glamping"
  },
  {
    id: "villa-ziezo",
    name: "Villa Ziezo",
    location: "Sekipan, Tawangmangu",
    rates: [
      { label: "3 Kamar - Minggu–Kamis", price: 1300000 },
      { label: "3 Kamar - Jumat", price: 1500000 },
      { label: "3 Kamar - Sabtu", price: 2000000 },
      { label: "4 Kamar - Minggu–Kamis", price: 1500000 },
      { label: "4 Kamar - Jumat", price: 1750000 },
      { label: "4 Kamar - Sabtu", price: 2250000 }
    ],
    units: 2,
    facilities: [
      "3 & 4 kamar tidur",
      "2 kamar mandi air panas",
      "1 kamar mandi air dingin",
      "Private pool",
      "Free 1 extrabed",
      "Dapur & alat masak lengkap + kulkas",
      "Peralatan shalat",
      "Free 2 ekor ayam broiler (mentah/ungkep pilih salah satu)",
      "Free kopi, gula & teh",
      "Karaoke",
      "Wifi",
      "Smart TV",
      "Alat bakaran arang",
      "Alat grill (gas portable bawa sendiri)",
      "Ruang keluarga luas",
      "View pegunungan Sekipan"
    ],
    capacity: "15-25 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Parkir muat 5 mobil (mobil besar seperti Alphard/Elf tidak bisa masuk, karena lebar jalan hanya 2 meter)"
    ],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "dava-glamping",
    name: "Dava Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Minggu–Kamis", price: 400000 },
      { label: "Jumat", price: 500000 },
      { label: "Sabtu", price: 700000 }
    ],
    units: 1,
    facilities: [
      "Mini pool",
      "Kamar mandi dengan water heater & shower",
      "1 kasur (queen size)",
      "1 sofa bed",
      "Wi-Fi available",
      "Smart TV + Netflix",
      "Dapur umum (sharing)",
      "Kettle listrik",
      "Free Popmie / biskuit, air mineral, gula, teh & kopi (free refill)",
      "Area parkir luas",
      "View full alam pegunungan yang asri"
    ],
    capacity: "2-4 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Price from Owner, No Mark Up",
      "Dekat dengan Buper Pleseran & Telaga Asmara"
    ],
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "glamping"
  },
  {
    id: "villa-royal",
    name: "Villa Royal",
    location: "Tawangmangu",
    rates: [
      { label: "Weekday", price: 2000000 },
      { label: "Weekend", price: 2500000 }
    ],
    units: 1,
    facilities: [
      "2 ruang tamu dengan sofa",
      "3 kamar tidur",
      "4 kamar mandi (dengan water heater)",
      "Private pool",
      "Smart TV + Karaoke sound",
      "Free Wi-Fi",
      "Dapur lengkap (magicom, dispenser, kompor & kulkas)",
      "Parkiran luas",
      "Free alat BBQ",
      "Free 1 galon",
      "Free kopi, teh, gula & snack"
    ],
    capacity: "Maksimal 20 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Price from owner, no mark up"
    ],
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "villa"
  },
  {
    id: "bumwa-glamping",
    name: "BUMWA Glamping",
    location: "Tawangmangu",
    rates: [
      { label: "Harga mulai 600 ribuan", price: 600000 }
    ],
    units: 3,
    facilities: [
      "Mini pool air hangat",
      "1 kasur queen size",
      "Sofa bed",
      "1 kamar mandi dalam (water heater, handuk & amenities)",
      "Wi-Fi available",
      "Smart TV",
      "Dispenser hot & cold",
      "Free breakfast 2 pax",
      "Free gula, teh & kopi",
      "Area parkir luas"
    ],
    capacity: "Maksimal 5 orang",
    notes: [
      "Check in jam 2 siang",
      "Check out jam 12 siang",
      "No miras",
      "No mesum",
      "No drugs",
      "Dekat wisata Bukit Sekipan & kebun stroberi (bisa petik sendiri)"
    ],
    image: "https://images.unsplash.com/photo-1607627000458-210e8d31c6d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    type: "glamping"
  }
];