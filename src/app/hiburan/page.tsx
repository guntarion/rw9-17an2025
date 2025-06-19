import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Music, 
  Calendar, 
  Clock, 
  MapPin, 
  Star,
  Gift,
  Users,
  Mic,
  Camera,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hiburan & Pentas Seni - HUT RI Ke-80 RW IX Sidoarjo',
  description: 'Jadwal hiburan, pentas seni, dan malam puncak HUT RI Ke-80 RW IX dengan penampilan dari setiap RT.',
  keywords: ['hiburan', 'pentas seni', 'malam puncak', 'HUT RI', 'RW IX'],
};

const rtPerformances = [
  { rt: 'RT 01', performance: 'Drama Musikal', description: 'Pertunjukan drama dengan iringan musik tradisional' },
  { rt: 'RT 02', performance: 'Tari Kreasi', description: 'Tarian kreasi modern dengan tema lingkungan' },
  { rt: 'RT 03', performance: 'Grup Vokal', description: 'Paduan suara lagu-lagu nasional dan daerah' },
  { rt: 'RT 04', performance: 'Stand Up Comedy', description: 'Komedi tunggal dengan tema kehidupan bertetangga' },
  { rt: 'RT 05', performance: 'Band Akustik', description: 'Musik akustik dengan lagu-lagu populer' },
  { rt: 'RT 06', performance: 'Tari Tradisional', description: 'Tarian tradisional Jawa Timur' },
  { rt: 'RT 07', performance: 'Fashion Show', description: 'Peragaan busana dari bahan daur ulang' },
  { rt: 'RT 08', performance: 'Orkestra Kampung', description: 'Musik orkestra dengan alat musik tradisional' },
  { rt: 'RT 09', performance: 'Teater Rakyat', description: 'Pertunjukan teater dengan cerita rakyat' },
  { rt: 'RT 10', performance: 'Dance Cover', description: 'Tarian modern cover lagu-lagu hits' },
  { rt: 'RT 11', performance: 'Pembawa Acara', description: 'Tim MC dan koordinator acara malam puncak' },
  { rt: 'RT 12', performance: 'Qasidah Modern', description: 'Grup qasidah dengan aransemen modern' }
];

const schedule = [
  { time: '19:00', event: 'Pembukaan Malam Puncak', description: 'Sambutan dari Ketua RW IX dan Panitia' },
  { time: '19:15', event: 'Penampilan Angklung PKK', description: 'Pembuka dengan musik angklung oleh Ibu PKK' },
  { time: '19:30', event: 'Pentas Seni RT (Sesi 1)', description: 'Penampilan RT 01, 02, 03, 04' },
  { time: '20:30', event: 'Istirahat & Doorprize 1', description: 'Pengumuman doorprize kategori pertama' },
  { time: '20:45', event: 'Pentas Seni RT (Sesi 2)', description: 'Penampilan RT 05, 06, 07, 08' },
  { time: '21:45', event: 'Istirahat & Doorprize 2', description: 'Pengumuman doorprize kategori kedua' },
  { time: '22:00', event: 'Pentas Seni RT (Sesi 3)', description: 'Penampilan RT 09, 10, 12' },
  { time: '22:45', event: 'Pengumuman Pemenang Lomba', description: 'Pengumuman juara semua kategori lomba' },
  { time: '23:00', event: 'Doorprize Utama', description: 'Pengundian doorprize utama dan penutupan' }
];

export default function HiburanPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Music className="w-8 h-8 text-primary-500" />
            <h1 className="text-4xl font-bold text-gray-900">
              Hiburan & Pentas Seni
            </h1>
            <Music className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Malam puncak HUT RI Ke-80 RW IX dengan penampilan spektakuler dari setiap RT 
            dan doorprize menarik!
          </p>
          
          {/* Event Info */}
          <div className="bg-gradient-green text-white rounded-xl p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">🎭 Malam Puncak</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>31 Agustus 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>19:00 - 23:00 WIB</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Panggung Utama RW IX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Performance */}
        <Card className="mb-12 border-primary-200 bg-primary-50">
          <CardHeader>
            <CardTitle className="flex items-center text-primary-700">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Penampilan Pembuka Spesial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🎵 Angklung PKK RW IX
                </h3>
                <p className="text-gray-600 mb-4">
                  Pembuka malam puncak dengan penampilan musik angklung yang dimainkan 
                  oleh Ibu-Ibu PKK RW IX. Pertunjukan ini akan membawakan lagu-lagu 
                  nasional dan daerah yang meriah.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>19:15 - 19:30</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Ibu PKK RW IX</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-16 h-16 text-yellow-600" />
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">
                  Penampilan Pembuka
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RT Performances */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎨 Pentas Seni Setiap RT
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Setiap RT akan menampilkan 1 pertunjukan dengan durasi 6-8 menit. 
            Kreativitas dan semangat gotong royong menjadi penilaian utama.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rtPerformances.map((rt, index) => (
              <Card key={rt.rt} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{rt.rt}</CardTitle>
                    <Badge variant="outline">
                      {Math.floor(index / 4) + 1} Sesi {index % 4 + 1}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary-700 mb-2">
                      {rt.performance}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {rt.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              Jadwal Malam Puncak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-b-0">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="font-mono">
                      {item.time}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {item.event}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    {item.event.includes('Doorprize') && (
                      <Gift className="w-5 h-5 text-yellow-500" />
                    )}
                    {item.event.includes('Pentas') && (
                      <Music className="w-5 h-5 text-green-500" />
                    )}
                    {item.event.includes('Angklung') && (
                      <Star className="w-5 h-5 text-purple-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Doorprize Information */}
        <Card className="mb-12 border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-700">
              <Gift className="w-6 h-6 mr-2" />
              Doorprize & Hadiah
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Doorprize Kategori 1</h3>
                <p className="text-sm text-gray-600">
                  Hadiah elektronik, voucher belanja, dan produk rumah tangga
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Doorprize Kategori 2</h3>
                <p className="text-sm text-gray-600">
                  Sembako, tanaman hias, dan perlengkapan kebun
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Doorprize Utama</h3>
                <p className="text-sm text-gray-600">
                  Hadiah utama yang sangat dinanti - Rahasia sampai malam puncak!
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-yellow-700 font-medium">
                💰 Total hadiah senilai lebih dari Rp 10.000.000,-
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Semua warga RW IX berhak mendapatkan doorprize. Semakin aktif berpartisipasi, 
                semakin besar peluang mendapatkan hadiah!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="w-5 h-5 mr-2 text-purple-500" />
              Petunjuk Malam Puncak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Untuk Peserta Pentas</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Durasi penampilan maksimal 8 menit
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Koordinasi sound system dengan panitia H-1
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Kostum dan properti sesuai tema lingkungan hidup
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hadir 30 menit sebelum jadwal tampil
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Untuk Penonton</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Datang tepat waktu pukul 19:00 WIB
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bawa tiket doorprize dari RT masing-masing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Dukung semua penampilan dengan antusias
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Jaga kebersihan area acara
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Jangan Sampai Terlewat!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/galeri">
              <Button size="lg" className="bg-gradient-green hover:shadow-green">
                <Camera className="w-5 h-5 mr-2" />
                Lihat Dokumentasi
              </Button>
            </Link>
            <Link href="/panitia">
              <Button variant="outline" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Hubungi Panitia
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}