import { Metadata } from 'next';
import Image from 'next/image';
import { CountdownHero } from '@/components/features/CountdownTimer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Camera, 
  Leaf, 
  TreePine,
  Recycle,
  Heart,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'HUT RI Ke-80 RW IX Sidoarjo - Lingkungan Hidup dan Penghijauan',
  description: 'Situs resmi peringatan HUT RI Ke-80 RW IX Desa Wedoro, Sidoarjo dengan tema Lingkungan Hidup dan Penghijauan. Informasi lomba, acara, dan dokumentasi.',
  keywords: ['HUT RI', 'RW IX', 'Sidoarjo', 'Lingkungan Hidup', 'Penghijauan', 'Lomba', '17 Agustus'],
  openGraph: {
    title: 'HUT RI Ke-80 RW IX Sidoarjo',
    description: 'Peringatan HUT RI Ke-80 dengan tema Lingkungan Hidup dan Penghijauan',
    type: 'website',
    locale: 'id_ID',
  },
};

// Target date: August 30, 2025, 8:00 AM WIB (UTC+7)
const TARGET_DATE = new Date('2025-08-30T08:00:00+07:00');

const competitions = [
  {
    id: 'hias-kampung',
    title: 'Lomba Hias Kampung/RT',
    description: 'Lomba menghias kampung dengan tema Lingkungan Hidup',
    coordinator: 'H. Suleman',
    icon: '🏡',
    color: 'primary',
    period: '1 Juli - 24 Agustus 2025',
    participants: 12,
  },
  {
    id: 'bulu-tangkis-keluarga',
    title: 'Lomba Bulu Tangkis Keluarga',
    description: 'Lomba bulu tangkis dengan konsep keluarga',
    coordinator: 'Bpk. Yusri',
    icon: '🏸',
    color: 'accent',
    period: 'Malam Sabtu & Minggu',
    participants: 16,
  },
  {
    id: 'jalan-sehat',
    title: 'Lomba Jalan Sehat',
    description: 'Jalan sehat dengan tema kostum Lingkungan Hidup',
    coordinator: 'dr. Edi Subagyo',
    icon: '🚶‍♂️',
    color: 'success',
    period: '30 Agustus 2025',
    participants: 150,
  },
  {
    id: 'bazar',
    title: 'Lomba Bazar',
    description: 'Bazar kreatif dengan tema edukasi lingkungan hidup',
    coordinator: 'Ibu Titik W.P',
    icon: '🛍️',
    color: 'secondary',
    period: '30-31 Agustus 2025',
    participants: 12,
  },
];

const quickStats = [
  { label: 'Total Lomba', value: '4', icon: Trophy },
  { label: 'RT Peserta', value: '12', icon: Users },
  { label: 'Hari Acara', value: '2', icon: Calendar },
  { label: 'Total Peserta', value: '190+', icon: Heart },
];

const latestUpdates = [
  {
    id: 1,
    title: 'Rapat Koordinasi Panitia RT 11',
    content: 'Persiapan terakhir menjelang pelaksanaan HUT RI Ke-80',
    date: '15 Juni 2025',
    category: 'Panitia',
  },
  {
    id: 2,
    title: 'Pendaftaran Lomba Dibuka',
    content: 'Semua RT dapat mulai mendaftarkan peserta lomba',
    date: '20 Juni 2025',
    category: 'Lomba',
  },
  {
    id: 3,
    title: 'Koordinasi dengan Pengurus RW IX',
    content: 'Dukungan penuh dari pengurus RW IX untuk kesuksesan acara',
    date: '18 Juni 2025',
    category: 'Koordinasi',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            {/* RW IX Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/images/logos/Logo_RW_IX_nobg.png"
                  alt="Logo RW IX"
                  width={120}
                  height={109}
                  className="drop-shadow-md"
                  priority
                />
              </div>
            </div>
            
            {/* Environmental Icons */}
            <div className="flex justify-center items-center space-x-4 mb-8 animate-fade-in">
              <Leaf className="w-8 h-8 text-primary-500 animate-bounce-gentle" />
              <TreePine className="w-10 h-10 text-primary-600" />
              <Recycle className="w-8 h-8 text-accent-500 animate-bounce-gentle" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-responsive-xl font-bold text-gray-900 mb-6 text-indonesia">
              <span className="text-gradient-green">Semarak Kemerdekaan</span>
              <br />
              <span className="text-3xl md:text-5xl">HUT RI Ke-80</span>
              <br />
              <span className="text-2xl md:text-4xl text-gray-700">RW IX Sidoarjo</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-responsive-md text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dengan Semangat <span className="font-semibold text-primary-600">Lingkungan Hidup dan Penghijauan</span>, 
              Kita Bangun Lingkungan yang Asri dan Guyub Bersama Warga RW IX
            </p>
            
            {/* Event Info Badge */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Calendar className="w-4 h-4 mr-2" />
                30-31 Agustus 2025
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <MapPin className="w-4 h-4 mr-2" />
                RW IX Desa Wedoro
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Users className="w-4 h-4 mr-2" />
                Panitia RT 11
              </Badge>
            </div>
            
            {/* Countdown Timer */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Countdown Menuju Hari H
              </h2>
              <CountdownHero targetDate={TARGET_DATE} />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lomba">
                <Button size="lg" className="bg-gradient-green hover:shadow-green">
                  <Trophy className="w-5 h-5 mr-2" />
                  Lihat Lomba
                </Button>
              </Link>
              <Link href="/galeri">
                <Button variant="outline" size="lg" className="border-primary-300 text-primary-700 hover:bg-primary-50">
                  <Camera className="w-5 h-5 mr-2" />
                  Galeri Kegiatan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat) => (
              <Card key={stat.label} className="text-center group hover:shadow-green transition-all duration-300">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-nature">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lomba & Kompetisi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empat kategori lomba dengan tema Lingkungan Hidup dan Penghijauan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((competition) => (
              <Card key={competition.id} className="group hover:shadow-green transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{competition.icon}</div>
                  <CardTitle className="text-lg mb-2">{competition.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {competition.coordinator}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    {competition.description}
                  </p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center justify-between">
                      <span>Periode:</span>
                      <span className="font-medium">{competition.period}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Peserta:</span>
                      <span className="font-medium">{competition.participants} {competition.id === 'jalan-sehat' ? 'orang' : 'RT'}</span>
                    </div>
                  </div>
                  {/* <Link href={`/lomba/${competition.id}`}>
                    <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-primary-50">
                      Lihat Detail
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link> */}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/lomba">
              <Button size="lg" className="bg-gradient-green hover:shadow-green">
                Lihat Semua Lomba
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Update Terbaru
              </h2>
              <p className="text-lg text-gray-600">
                Informasi terkini dari panitia pelaksana
              </p>
            </div>
            <Link href="/galeri">
              <Button variant="outline" className="mt-4 md:mt-0">
                Lihat Semua Update
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestUpdates.map((update) => (
              <Card key={update.id} className="group hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">
                      {update.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{update.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary-600 transition-colors">
                    {update.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{update.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Malam Puncak Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-green text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              🎭 Malam Puncak & Panggung Hiburan
            </h2>
            <p className="text-lg mb-8 opacity-90">
              <strong>31 Agustus 2025, 19:00 WIB</strong>
              <br />
              Saksikan penampilan Angklung PKK RW IX, Pentas Seni dari setiap RT, 
              dan jangan lewatkan <strong>DOORPRIZE UTAMA</strong>!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🎵</div>
                <h3 className="font-semibold mb-2">Angklung PKK</h3>
                <p className="text-sm opacity-80">Penampilan angklung oleh Ibu PKK RW IX</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎭</div>
                <h3 className="font-semibold mb-2">Pentas Seni RT</h3>
                <p className="text-sm opacity-80">Setiap RT menampilkan 1 pertunjukan</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="font-semibold mb-2">Doorprize Utama</h3>
                <p className="text-sm opacity-80">Hadiah menarik untuk warga RW IX</p>
              </div>
            </div>
            
            {/* <Link href="/hiburan">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Lihat Jadwal Lengkap
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-nature rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mari Bergabung dalam Perayaan Kemerdekaan!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dukung tema <strong>Lingkungan Hidup dan Penghijauan</strong> dengan 
                berpartisipasi aktif dalam setiap kegiatan HUT RI Ke-80 RW IX
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/panitia">
                  <Button size="lg" className="bg-gradient-green hover:shadow-green">
                    <Users className="w-5 h-5 mr-2" />
                    Hubungi Panitia
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" size="lg" className="border-primary-300 text-primary-700 hover:bg-primary-50">
                    Tanya Jawab
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}