import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Users,
  Calendar,
  Trophy,
  Clock,
  Award,
  Phone,
  CheckCircle,
  AlertTriangle,
  Heart,
  Star,
  ShirtIcon,
  Route,
  Flag,
  Coffee,
  MapPinIcon,
  Shield,
  FileText,
  Sun,
} from 'lucide-react';

export default function LombaJalanSehat() {
  const routeSteps = [
    { step: 'START', location: 'Depan Masjid At Taqwa', icon: Flag, bgColor: 'bg-green-500' },
    { step: 'POS 1', location: 'Depan rumah Pak Rozak (Jl. Waru Indah)', icon: MapPinIcon, bgColor: 'bg-blue-500' },
    { step: 'POS 2', location: 'Pintu masuk Jatayu timur', icon: MapPinIcon, bgColor: 'bg-purple-500' },
    { step: 'POS 3', location: 'Pojok barat Jatayu', icon: MapPinIcon, bgColor: 'bg-orange-500' },
    { step: 'POS 4', location: 'Panggung', icon: MapPinIcon, bgColor: 'bg-red-500' },
    { step: 'FINISH', location: 'Area Balai RW IX', icon: Trophy, bgColor: 'bg-yellow-500' },
  ];

  return (
    <div className='space-y-8'>
      {/* Header Section */}
      <div className='text-center'>
        <div className='flex justify-center items-center space-x-3 mb-4'>
          <MapPin className='w-10 h-10 text-blue-600' />
          <h1 className='text-4xl font-bold text-gray-900'>Parade Jalan Sehat</h1>
          <Route className='w-10 h-10 text-blue-600' />
        </div>
        <div className='bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-4 max-w-3xl mx-auto'>
          <div className='text-2xl font-bold text-blue-800 mb-2'>&quot;Generasi Muda Semangat dan Kreatif&quot;</div>
          <p className='text-gray-700'>HUT RI ke-80 RW IX REWWIN</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <Card className='text-center'>
          <CardContent className='p-4'>
            <Calendar className='w-8 h-8 text-primary-600 mx-auto mb-2' />
            <div className='text-2xl font-bold text-primary-600'>31</div>
            <div className='text-sm text-gray-600'>Agustus 2025</div>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardContent className='p-4'>
            <Clock className='w-8 h-8 text-blue-600 mx-auto mb-2' />
            <div className='text-2xl font-bold text-blue-600'>06:00</div>
            <div className='text-sm text-gray-600'>WIB Start</div>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardContent className='p-4'>
            <Trophy className='w-8 h-8 text-yellow-600 mx-auto mb-2' />
            <div className='text-2xl font-bold text-yellow-600'>Rp 4,5M</div>
            <div className='text-sm text-gray-600'>Total Hadiah</div>
          </CardContent>
        </Card>
        <Card className='text-center'>
          <CardContent className='p-4'>
            <MapPin className='w-8 h-8 text-green-600 mx-auto mb-2' />
            <div className='text-2xl font-bold text-green-600'>4</div>
            <div className='text-sm text-gray-600'>Pos Kupon</div>
          </CardContent>
        </Card>
      </div>

      {/* Peserta & Kategori */}
      <Card className='bg-gradient-to-br from-blue-50 to-indigo-50'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Users className='w-6 h-6 text-blue-600' />
            Peserta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-3 gap-4'>
            <div className='text-center p-4 bg-white rounded-lg border-2 border-blue-200'>
              <Users className='w-12 h-12 text-blue-600 mx-auto mb-3' />
              <div className='font-bold text-blue-800'>RT Peserta</div>
              <div className='text-sm text-blue-600'>RT 01 - 09</div>
              <div className='text-xs text-red-500 mt-1'>*Perlu konfirmasi RT 10-11</div>
            </div>
            <div className='text-center p-4 bg-white rounded-lg border-2 border-green-200'>
              <CheckCircle className='w-12 h-12 text-green-600 mx-auto mb-3' />
              <div className='font-bold text-green-800'>Wajib Ikut</div>
              <div className='text-sm text-green-600'>Setiap RT harus mengirim perwakilan</div>
            </div>
            <div className='text-center p-4 bg-white rounded-lg border-2 border-purple-200'>
              <Heart className='w-12 h-12 text-purple-600 mx-auto mb-3' />
              <div className='font-bold text-purple-800'>Semua Usia</div>
              <div className='text-sm text-purple-600'>Diperbolehkan ikut serta</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Jadwal Detail */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Calendar className='w-6 h-6 text-blue-600' />
            Jadwal Pelaksanaan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border-2 border-orange-200'>
            <div className='text-center mb-6'>
              <Sun className='w-16 h-16 text-orange-500 mx-auto mb-3' />
              <div className='text-2xl font-bold text-orange-800'>Minggu, 31 Agustus 2025</div>
              <div className='text-lg text-orange-600'>Start: 06:00 WIB</div>
              <div className='text-sm text-orange-500'>Tempat: Depan Masjid At Taqwa</div>
              <div className='text-xs text-orange-400'>Sesuai nomor urut undian</div>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
              <div className='text-center p-4 bg-white rounded-lg border border-blue-200'>
                <Coffee className='w-8 h-8 text-blue-600 mx-auto mb-2' />
                <div className='font-semibold text-blue-800'>Registrasi</div>
                <div className='text-sm text-blue-600'>05:30 - 05:55 WIB</div>
                <div className='text-xs text-gray-500'>Di area start</div>
              </div>
              <div className='text-center p-4 bg-white rounded-lg border border-green-200'>
                <FileText className='w-8 h-8 text-green-600 mx-auto mb-2' />
                <div className='font-semibold text-green-800'>Briefing</div>
                <div className='text-sm text-green-600'>05:55 - 06:00 WIB</div>
                <div className='text-xs text-gray-500'>Penjelatan rute</div>
              </div>
              <div className='text-center p-4 bg-white rounded-lg border border-red-200'>
                <Flag className='w-8 h-8 text-red-600 mx-auto mb-2' />
                <div className='font-semibold text-red-800'>Start</div>
                <div className='text-sm text-red-600'>06:00 WIB</div>
                <div className='text-xs text-gray-500'>Dimulai bersama</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rute Jalan Sehat */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Route className='w-6 h-6 text-purple-600' />
            Rute Jalan Sehat & Pos Kupon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {routeSteps.map((step, index) => (
              <div key={index} className='flex items-center gap-4 p-4 bg-gray-50 rounded-lg'>
                <div className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center`}>
                  <step.icon className='w-6 h-6 text-white' />
                </div>
                <div className='flex-1'>
                  <div className='font-semibold text-gray-800'>{step.step}</div>
                  <div className='text-sm text-gray-600'>{step.location}</div>
                </div>
                {index < routeSteps.length - 1 && <div className='text-gray-400'>→</div>}
              </div>
            ))}
          </div>

          <div className='mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200'>
            <div className='font-semibold text-blue-800 mb-2 flex items-center gap-2'>
              <AlertTriangle className='w-5 h-5' />
              Petunjuk Rute Lengkap:
            </div>
            <p className='text-sm text-blue-700'>
              <strong>Start:</strong> Depan Masjid At Taqwa (sesuai nomor urut undian) → Berjalan ke timur sesuai formasi masing-masing →
              <strong> Pos Kupon 1</strong> (sampai di timur - rumah Pak Rozak) → Lanjut ke utara menuju Jalan Jatayu →<strong> Pos Kupon 2</strong>{' '}
              (ada pengumpulan kupon 2) → Masuk Jalan Jatayu lurus ke barat sampai pintu keluar →<strong> Pos Kupon 3</strong> (pengumpulan kupon 3) →
              Jalan lanjut ke arah acara di Balai RW 09 →<strong> Pos Kupon 4</strong> (di panggung) → <strong>Finish</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Petugas Pos */}
      <Card className='border-l-4 border-l-indigo-500'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Shield className='w-6 h-6 text-indigo-600' />
            Petugas Pos Kupon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 p-3 bg-blue-50 rounded-lg'>
                <MapPinIcon className='w-8 h-8 text-blue-600' />
                <div>
                  <div className='font-semibold text-blue-800'>Pos Kupon 1</div>
                  <div className='text-sm text-blue-600'>Rumah Pak Rozak (Timur)</div>
                </div>
              </div>
              <div className='flex items-center gap-3 p-3 bg-purple-50 rounded-lg'>
                <MapPinIcon className='w-8 h-8 text-purple-600' />
                <div>
                  <div className='font-semibold text-purple-800'>Pos Kupon 2</div>
                  <div className='text-sm text-purple-600'>Jalan Jatayu (Utara)</div>
                </div>
              </div>
            </div>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 p-3 bg-orange-50 rounded-lg'>
                <MapPinIcon className='w-8 h-8 text-orange-600' />
                <div>
                  <div className='font-semibold text-orange-800'>Pos Kupon 3</div>
                  <div className='text-sm text-orange-600'>Pintu Keluar Jatayu (Barat)</div>
                </div>
              </div>
              <div className='flex items-center gap-3 p-3 bg-red-50 rounded-lg'>
                <MapPinIcon className='w-8 h-8 text-red-600' />
                <div>
                  <div className='font-semibold text-red-800'>Pos Kupon 4</div>
                  <div className='text-sm text-red-600'>Panggung Balai RW 09</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Kostum & Penampilan */}
      <Card className='bg-gradient-to-br from-green-50 to-teal-50'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <ShirtIcon className='w-6 h-6 text-green-600' />
            Kostum & Penampilan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-semibold text-gray-800 mb-3'>Kostum</h4>
              <p className='text-gray-600 mb-3'>
                Dipasrahkan kepada masing-masing RT untuk mengelola tampilan yang
                <strong> rapi, unik, menarik, dan meriah</strong>
              </p>
              <div className='bg-blue-100 p-3 rounded-lg mb-3'>
                <div className='font-semibold text-blue-800 mb-1'>Penataan Formasi:</div>
                <div className='text-sm text-blue-700'>
                  <strong>Anak-anak paling depan</strong>, kemudian menyesuaikan formasi
                </div>
              </div>
              <div className='bg-green-100 p-3 rounded-lg'>
                <div className='font-semibold text-green-800 mb-1'>Anjuran:</div>
                <div className='text-sm text-green-700'>
                  Kostum dengan tema <strong>lingkungan hidup</strong> sesuai tema keseluruhan HUT RI
                </div>
              </div>
            </div>
            <div className='text-center'>
              <ShirtIcon className='w-24 h-24 text-green-500 mx-auto mb-4' />
              <div className='text-lg font-semibold text-green-800'>Kreativitas Tanpa Batas</div>
              <div className='text-sm text-green-600'>Tampilkan identitas RT dengan bangga!</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Kriteria Penilaian */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Star className='w-6 h-6 text-purple-600' />
            Kriteria Penilaian
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div className='p-4 bg-blue-50 rounded-lg border-l-4 border-l-blue-500'>
                <div className='font-semibold text-blue-800 mb-2'>1. Kekompakan Barisan (30%)</div>
                <ul className='text-sm text-blue-700 space-y-1'>
                  <li>• Kerapian formasi</li>
                  <li>• Keseragaman gerakan</li>
                  <li>• Kedisiplinan peserta</li>
                </ul>
              </div>
              <div className='p-4 bg-purple-50 rounded-lg border-l-4 border-l-purple-500'>
                <div className='font-semibold text-purple-800 mb-2'>2. Kreativitas Kostum & Penampilan (40%)</div>
                <ul className='text-sm text-purple-700 space-y-1'>
                  <li>• Originalitas desain kostum</li>
                  <li>• Kesesuaian dengan tema</li>
                  <li>• Daya tarik visual</li>
                </ul>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500'>
                <div className='font-semibold text-green-800 mb-2'>3. Semangat & Antusiasme (20%)</div>
                <ul className='text-sm text-green-700 space-y-1'>
                  <li>• Energi peserta</li>
                  <li>• Yel-yel atau chant</li>
                  <li>• Partisipasi aktif</li>
                </ul>
              </div>
              <div className='p-4 bg-orange-50 rounded-lg border-l-4 border-l-orange-500'>
                <div className='font-semibold text-orange-800 mb-2'>4. Kedisiplinan & Sportivitas (10%)</div>
                <ul className='text-sm text-orange-700 space-y-1'>
                  <li>• Ketepatan waktu</li>
                  <li>• Mengikuti aturan rute</li>
                  <li>• Mengambil kupon di setiap pos</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hadiah */}
      <Card className='bg-gradient-to-br from-yellow-50 to-orange-50'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Trophy className='w-6 h-6 text-yellow-600' />
            Hadiah Pemenang
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-3 gap-4'>
            <div className='text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg border-2 border-yellow-300'>
              <Trophy className='w-12 h-12 text-yellow-600 mx-auto mb-3' />
              <div className='text-xl font-bold text-yellow-800'>JUARA 1</div>
              <div className='text-2xl font-bold text-yellow-900 mt-2'>Rp 2.000.000</div>
            </div>
            <div className='text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300'>
              <Award className='w-12 h-12 text-gray-600 mx-auto mb-3' />
              <div className='text-xl font-bold text-gray-800'>JUARA 2</div>
              <div className='text-2xl font-bold text-gray-900 mt-2'>Rp 1.500.000</div>
            </div>
            <div className='text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg border-2 border-orange-300'>
              <Award className='w-12 h-12 text-orange-600 mx-auto mb-3' />
              <div className='text-xl font-bold text-orange-800'>JUARA 3</div>
              <div className='text-2xl font-bold text-orange-900 mt-2'>Rp 1.000.000</div>
            </div>
          </div>
          <div className='text-center mt-4 p-3 bg-blue-50 rounded-lg'>
            <div className='text-sm text-blue-700'>
              💰 <strong>Total Hadiah:</strong> Rp 4.500.000,-
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ketentuan Umum */}
      <Card className='border-l-4 border-l-teal-500'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CheckCircle className='w-6 h-6 text-teal-600' />
            Ketentuan Umum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                <Shield className='w-5 h-5 text-blue-500' />
                Keamanan & Kesehatan
              </h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>• Setiap RT wajib ada koordinator yang mendampingi</li>
                <li>• Panitia menyediakan P3K di sepanjang rute</li>
                <li>• Peserta dengan riwayat penyakit jantung harap berkonsultasi dokter</li>
                <li>• Jika hujan deras, acara akan ditunda</li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                <FileText className='w-5 h-5 text-green-500' />
                Dokumentasi & Kebersihan
              </h4>
              <ul className='space-y-2 text-sm text-gray-600'>
                <li>
                  • <strong>Wajib:</strong> Meletakkan kupon di setiap pos yang telah ditentukan
                </li>
                <li>• Setiap RT dianjurkan mendokumentasikan kegiatan</li>
                <li>• Jaga kebersihan sepanjang rute jalan sehat</li>
                <li>• Koordinator bertanggung jawab atas peserta RT masing-masing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className='bg-gradient-to-br from-blue-50 to-indigo-50'>
        <CardContent className='text-center p-8'>
          <Phone className='w-12 h-12 text-blue-600 mx-auto mb-4' />
          <h3 className='text-xl font-bold text-gray-900 mb-2'>Butuh Informasi Lebih Lanjut?</h3>
          <p className='text-gray-600 mb-4'>Contact person akan diinformasikan lebih lanjut oleh panitia RW</p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button className='bg-blue-600 hover:bg-blue-700'>
              <Phone className='w-4 h-4 mr-2' />
              Hubungi Panitia RW
            </Button>
            <Button variant='outline'>
              <CheckCircle className='w-4 h-4 mr-2' />
              Daftar Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Info Juri */}
      <Card className='border-l-4 border-l-gray-500'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Star className='w-6 h-6 text-gray-600' />
            Dewan Juri
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='mb-6'>
            <h4 className='font-semibold text-gray-800 mb-4'>Tim Juri Penilai Masing-masing RT:</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              {[
                { rt: 'RT 01', nama: 'Bu Heni' },
                { rt: 'RT 02', nama: 'Hery Saptono' },
                { rt: 'RT 03', nama: 'Pak Ulijadi' },
                { rt: 'RT 04', nama: 'Hapsari Haniditya' },
                { rt: 'RT 05', nama: 'Pak Eric' },
                { rt: 'RT 06', nama: 'Bu Erliyana' },
                { rt: 'RT 07', nama: 'Ridayati Nani' },
                { rt: 'RT 08', nama: 'Pak Charles H' },
                { rt: 'RT 09', nama: 'Pak Windarto' },
                { rt: 'RT 10', nama: 'Bu Rita' },
                { rt: 'RT 11', nama: 'Pak H. Yusri' },
              ].map((juri, index) => (
                <div key={index} className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
                  <Star className='w-6 h-6 text-blue-600' />
                  <div>
                    <div className='font-semibold text-gray-800'>{juri.rt}</div>
                    <div className='text-sm text-gray-600'>{juri.nama}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='space-y-4'>
            <div className='p-4 bg-blue-50 rounded-lg border border-blue-200'>
              <div className='font-semibold text-blue-800 mb-2'>Sistem Penilaian:</div>
              <div className='text-sm text-blue-700'>
                • Juri akan menyebar di titik yang sudah ditentukan
                <br />
                • Koordinator lomba akan ada briefing khusus untuk tim juri
                <br />• Untuk penilaian parade tidak ada penilaian khusus, tetap jalan sesuai barisan yang sudah ditentukan
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
