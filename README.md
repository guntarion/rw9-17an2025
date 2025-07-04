# <� HUT RI Ke-80 RW IX Sidoarjo 2025

Website resmi peringatan HUT RI Ke-80 di RW IX Desa Wedoro, Sidoarjo dengan tema **"Lingkungan Hidup dan Penghijauan"**.

## < Overview

Platform digital untuk mendukung kegiatan HUT RI Ke-80 yang berlangsung pada **30-31 Agustus 2025**. Website ini menjadi pusat informasi, media publikasi, dan dokumentasi untuk seluruh rangkaian acara di lingkungan RW IX.

### <� Tujuan
- **Information Hub**: Sumber informasi lengkap untuk warga RW IX
- **Media Publication**: Platform publikasi foto dan updates kegiatan
- **Documentation Center**: Dokumentasi pra-lomba dan hari-H
- **Community Engagement**: Meningkatkan partisipasi warga

### <� Event Details
- **Tanggal**: 30-31 Agustus 2025
- **Tema**: Lingkungan Hidup dan Penghijauan
- **Lokasi**: RW IX Desa Wedoro, Sidoarjo
- **Panitia Utama**: RT 11 dengan dukungan Pengurus RW IX
- **Budget per RT**: Rp 1.000.000

## <� Kompetisi & Lomba

### 1. Lomba Hias Kampung/RT
- **Koordinator**: H. Suleman
- **Periode**: 1 Juli - 24 Agustus 2025
- **Tema**: Lingkungan Hidup
- **Kriteria**: Penghijauan, Kebersihan, Kreativitas Hiasan

### 2. Lomba Bulu Tangkis Keluarga
- **Koordinator**: Bpk. Yusri
- **Waktu**: Malam Sabtu dan Minggu (30-31 Agustus)
- **Konsep**: Campuran laki-laki dan perempuan dalam satu keluarga
- **Kriteria**: Skor Pertandingan, Kostum Unik, Sportivitas

### 3. Lomba Jalan Sehat
- **Koordinator**: dr. Edi Subagyo
- **Hari**: 30 Agustus 2025
- **Kategori**: Anak-anak, Remaja, Dewasa
- **Kriteria**: Kekompakan, Kostum Lingkungan Hidup, Spanduk

### 4. Lomba Bazar
- **Koordinator**: Ibu Titik W.P
- **Periode**: 30-31 Agustus 2025
- **Kriteria**: Edukasi Lingkungan Hidup, Kreativitas, Kostum Penjaga

## <� Program Hiburan

### Malam Puncak (31 Agustus 2025)
- **Angklung Performance**: Ibu PKK RW IX
- **Pentas Seni RT**: Setiap RT menampilkan 1 pertunjukan
- **Doorprize Utama**: Hadiah menarik untuk warga
- **Waktu**: 19:00 - 22:00 WIB

## =� Tech Stack

### Frontend
- **Framework**: Next.js 15 dengan App Router
- **Styling**: Tailwind CSS dengan tema lingkungan hidup
- **UI Components**: shadcn/ui + custom components
- **Icons**: Lucide React + environmental themes
- **Typography**: Inter (sans-serif), Poppins (display)

### Design System
- **Primary**: Forest Green (#22c55e)
- **Secondary**: Earth Brown (#ca9a7c)
- **Accent**: Fresh Green (#84cc16)
- **Theme**: Environmental dengan nuansa alami

### Data Management
- **Phase 1**: JSON files (static data)
- **Phase 2**: Headless CMS integration
- **Images**: Next.js Image Optimization
- **State**: React Context + Custom Hooks

### Deployment
- **Platform**: Vercel
- **Domain**: TBD (rewwinmerdeka.id / semarakrewix.com)
- **Performance**: CDN, Image optimization, Code splitting
- **Analytics**: Google Analytics (optional)

## =� Quick Start

### Prerequisites
- Node.js 18+ dan npm
- Git untuk version control

### Installation
```bash
# Clone repository
git clone [repository-url]
cd rw9-17an2025

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Development Server
```bash
npm run dev
```
Akses website di `http://localhost:3000`

## =� Project Structure

```
src/
   app/                    # Next.js App Router
      css/               # Global styles & themes
      lomba/             # Competition pages
      galeri/            # Gallery pages
      panitia/           # Committee pages
      page.tsx           # Homepage
   components/
      features/          # Feature components
         CountdownTimer.tsx
         CompetitionCard.tsx
         GalleryGrid.tsx
      ui/                # Reusable UI components
      layout/            # Layout components
   data/                  # Static data files
      competitions.json  # Competition data
      committee.json     # Committee & coordinators
      events.json        # Events & timeline
      gallery.json       # Gallery structure
   types/                 # TypeScript definitions
   lib/                   # Utilities & helpers
```

## <� Features

###  Phase 1 (Completed)
- [x] Project setup dan basic structure
- [x] Green environmental theme implementation
- [x] Homepage dengan countdown timer
- [x] Data structure untuk semua konten
- [x] Responsive design foundation
- [x] TypeScript types definition

### =� Phase 2 (In Progress)
- [ ] Competition detail pages
- [ ] Gallery dengan Instagram-like functionality
- [ ] Committee profiles
- [ ] FAQ dengan search
- [ ] Contact forms
- [ ] Mobile optimization

### =� Phase 3 (Planned)
- [ ] Admin panel untuk content management
- [ ] Real-time updates system
- [ ] Performance optimization
- [ ] SEO enhancements
- [ ] Analytics integration

### =. Phase 4 (Future)
- [ ] Judge login system
- [ ] Digital scoring forms
- [ ] Real-time results calculation
- [ ] Competition leaderboards

## < Design Philosophy

### Environmental Theme
Website menggunakan tema **Lingkungan Hidup dan Penghijauan** yang tercermin dalam:
- **Color Palette**: Gradasi hijau natural dan earth tones
- **Visual Elements**: Ikon daun, pohon, recycle, earth-themed
- **Typography**: Clean, readable untuk konten Indonesia
- **Animations**: Subtle, nature-inspired movements

### User Experience
- **Mobile-First**: Dioptimalkan untuk penggunaan di smartphone
- **Indonesian Content**: Semua teks dalam Bahasa Indonesia
- **Accessibility**: WCAG compliant untuk semua pengguna
- **Performance**: Loading time < 3 detik

## =� Performance Targets

| Metric | Target | Status |
|--------|--------|---------|
| Page Load Speed | < 3 seconds | � In Progress |
| Mobile Responsive | 100% |  Complete |
| Accessibility Score | > 90 | =� Planned |
| SEO Score | > 90 | =� Planned |

## =e Tim & Kontak

### Panitia Utama (RT 11)
- **Ketua Panitia**: RT 11
- **Koordinator IT**: Development Team
- **Dukungan**: Pengurus RW IX

### Koordinator Lomba
- **H. Suleman**: Lomba Hias Kampung
- **Bpk. Yusri**: Lomba Bulu Tangkis Keluarga
- **dr. Edi Subagyo**: Lomba Jalan Sehat
- **Ibu Titik W.P**: Lomba Bazar

## =� Development Progress

Lihat progress detail di:
- [docs/progress.md](docs/progress.md) - Overall progress tracking
- [docs/Progress/](docs/Progress/) - Phase-by-phase documentation

## > Contributing

### For Committee Members
- **Content Updates**: Kontak tim IT untuk update konten
- **Photo Upload**: Gunakan admin panel (Phase 3)
- **Feedback**: Report issues melalui WhatsApp grup panitia

### For Developers
1. Fork repository
2. Create feature branch
3. Make changes following code style
4. Test thoroughly
5. Submit pull request

## = Security & Privacy

- **Data Protection**: Tidak ada data pribadi sensitif
- **Content Moderation**: Photo uploads akan dimoderasi
- **Access Control**: Admin features protected
- **HTTPS**: Semua traffic encrypted

## =� Browser Support

-  Chrome 90+
-  Firefox 88+
-  Safari 14+
-  Edge 90+
-  Mobile browsers (iOS Safari, Chrome Mobile)

## =� License

Project ini dikembangkan untuk kepentingan komunitas RW IX Desa Wedoro, Sidoarjo.

## <� Acknowledgments

- **RT 11**: Panitia utama pelaksana
- **RW IX**: Dukungan dan koordinasi
- **Warga RW IX**: Partisipasi dan antusiasme
- **Development Team**: Technical implementation

---

**Last Updated**: June 19, 2025  
**Next Review**: June 26, 2025  
**Status**: Phase 1 Complete, Phase 2 In Progress

---

*Website ini dibuat dengan d untuk warga RW IX dalam rangka memperingati HUT RI Ke-80 dengan tema Lingkungan Hidup dan Penghijauan* <1