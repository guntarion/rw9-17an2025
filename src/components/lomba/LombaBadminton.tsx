import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Zap,
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
  Timer,
  Target,
  ShirtIcon
} from 'lucide-react';

export default function LombaBadminton() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <Zap className="w-10 h-10 text-orange-600" />
          <h1 className="text-4xl font-bold text-gray-900">
            Lomba Fun Badminton
          </h1>
          <Zap className="w-10 h-10 text-orange-600" />
        </div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          HUT RI ke-80 RW IX REWWIN - Mempererat hubungan kekeluargaan & kebersamaan antar RT
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-600">11</div>
            <div className="text-sm text-gray-600">RT Peserta</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">Rp 1,2M</div>
            <div className="text-sm text-gray-600">Total Hadiah</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">Hari Turnamen</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-600">Keluarga</div>
            <div className="text-sm text-gray-600">Format Ganda</div>
          </CardContent>
        </Card>
      </div>

      {/* Tujuan */}
      <Card className="bg-gradient-to-br from-orange-50 to-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            Tujuan Lomba
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Heart className="w-16 h-16 text-red-500" />
            <div>
              <p className="text-lg text-gray-700">
                <strong>Mempererat hubungan kekeluargaan & kebersamaan antar RT</strong> di dalam wilayah RW 09 Rewwin
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Lomba ini dirancang untuk memperkuat ikatan keluarga melalui olahraga yang menyenangkan
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Format & Peserta */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Peserta & Syarat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Seluruh RT 01 - 11 di wilayah RW 09 Rewwin</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Setiap RT hanya diwakilkan <strong>1 tim pasangan</strong> saja</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Peserta harus <strong>berdomisili di RT setempat</strong></span>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg mt-4">
              <div className="font-semibold text-blue-800 mb-1">Format Ganda Campuran:</div>
              <div className="text-sm text-blue-700">Suami Istri / Bapak Anak / Kakak Adik</div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShirtIcon className="w-6 h-6 text-purple-600" />
              Kostum & Penampilan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Kostum bebas</span>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Nilai Tambah</span>
                </div>
                <p className="text-sm text-green-700">
                  Kostum dengan unsur <strong>tema lingkungan hidup</strong> akan mendapat nilai tambah
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Jadwal Pertandingan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Jadwal Pelaksanaan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Babak Penyisihan */}
            <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800">Babak Penyisihan</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hari/Tanggal:</span>
                  <span className="font-semibold">Sabtu, 9 Agustus 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Waktu:</span>
                  <span className="font-semibold">19:30 WIB - Selesai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Toleransi:</span>
                  <span className="font-semibold text-yellow-600">Maksimal 15 menit</span>
                </div>
                <div className="bg-red-50 p-2 rounded mt-3">
                  <div className="text-xs text-red-700">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    <strong>Sanksi:</strong> Jika tidak hadir, dianggap gugur/WO
                  </div>
                </div>
              </div>
            </div>

            {/* Babak Final */}
            <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800">Babak Final</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hari/Tanggal:</span>
                  <span className="font-semibold">Minggu, 10 Agustus 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Waktu:</span>
                  <span className="font-semibold">09:00 WIB - Selesai</span>
                </div>
                <div className="bg-green-100 p-2 rounded mt-3">
                  <div className="text-xs text-green-700">
                    <Star className="w-4 h-4 inline mr-1" />
                    3 tim terbaik bertanding untuk menentukan juara
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sistem Pertandingan */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            Sistem Pertandingan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Timer className="w-5 h-5 text-blue-500" />
                Babak Penyisihan
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sistem gugur</li>
                <li>• Setiap RT diundi untuk mendapatkan nomor urut 1-11</li>
                <li>• <strong>3 tim terbaik masuk final</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-green-500" />
                Babak Final
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 3 tim pemenang babak penyisihan bertanding</li>
                <li>• Menentukan juara 1, 2, dan 3</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Kriteria Penilaian */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-6 h-6 text-purple-600" />
            Kriteria Penilaian
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border-2 border-green-200">
              <Trophy className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="font-bold text-green-800 mb-2">Point Kemenangan</div>
              <div className="text-sm text-gray-600">Menang = 3 point</div>
              <div className="text-sm text-gray-600">Kalah = 0 point</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-blue-200">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="font-bold text-blue-800 mb-2">Kekompakan</div>
              <div className="text-sm text-gray-600">Kompak = 1 point</div>
              <div className="text-sm text-gray-600">Tidak kompak = 0 point</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-purple-200">
              <ShirtIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="font-bold text-purple-800 mb-2">Penampilan/Kostum</div>
              <div className="text-sm text-gray-600">Kreatif inovatif = 2 point</div>
              <div className="text-sm text-gray-600">Seragam biasa = 1 point</div>
              <div className="text-sm text-gray-600">Tidak seragam = 0 point</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-sm text-yellow-800">
              <AlertTriangle className="w-4 h-4 inline mr-1" />
              <strong>Tiebreaker:</strong> Jika nilai sama, point kemenangan tertinggi yang menjadi juara
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wasit & Juri */}
      <Card className="border-l-4 border-l-gray-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-gray-600" />
            Wasit & Juri Pertandingan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Wasit pertandingan ditunjuk panitia, tidak boleh dari RT yang sedang bertanding:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {['Pak Amir', 'Pak Hadi', 'Pak Nanang', 'Pak Sutikno', 'Pak Edo'].map((wasit, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                <Users className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-800">{wasit}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hadiah */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            Hadiah Pemenang
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg border-2 border-yellow-300">
              <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-yellow-800">JUARA I</div>
              <div className="text-2xl font-bold text-yellow-900 mt-2">Rp 600.000</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300">
              <Award className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-gray-800">JUARA II</div>
              <div className="text-2xl font-bold text-gray-900 mt-2">Rp 400.000</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg border-2 border-orange-300">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-orange-800">JUARA III</div>
              <div className="text-2xl font-bold text-orange-900 mt-2">Rp 200.000</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pendaftaran */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-red-600" />
            Persyaratan Pendaftaran
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-red-800">Batas Pendaftaran</div>
                  <div className="text-xl font-bold text-red-900">7 Agustus 2025</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Syarat Peserta:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mewakili RT di lingkup RW IX (berdomisili di RT setempat)</li>
                <li>• Merupakan pasangan: <strong>Suami Istri / Bapak Anak / Kakak Adik</strong></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-6 h-6 text-blue-600" />
            Contact Person
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-white rounded-lg border-2 border-blue-200">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="font-bold text-blue-800">Makmur Yusri</div>
              <div className="text-blue-600">0818.515.363</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-green-200">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="font-bold text-green-800">Singgih Prayoga</div>
              <div className="text-green-600">0822.2800.7600</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button className="bg-orange-600 hover:bg-orange-700 mr-3">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Koordinator
            </Button>
            <Button variant="outline">
              <CheckCircle className="w-4 h-4 mr-2" />
              Daftar Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Catatan Penting */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            Catatan Penting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Timer className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-semibold text-yellow-800 mb-1">Kehadiran</div>
              <div className="text-sm text-yellow-700">Peserta wajib hadir tepat waktu</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-blue-800 mb-1">Perlengkapan</div>
              <div className="text-sm text-blue-700">Membawa perlengkapan sendiri (kecuali shuttlecock)</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-green-800 mb-1">Sportivitas</div>
              <div className="text-sm text-green-700">Menjaga sportivitas selama pertandingan</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}