import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Leaf,
  Users,
  Calendar,
  Trophy,
  Target,
  Award,
  Clock,
  AlertTriangle,
  Phone,
  CheckCircle,
  Recycle,
  TreePine,
  Sparkles
} from 'lucide-react';

export default function LombaLingkungan() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <Leaf className="w-10 h-10 text-green-600" />
          <h1 className="text-4xl font-bold text-gray-900">
            Lomba Lingkungan Hidup
          </h1>
          <TreePine className="w-10 h-10 text-green-600" />
        </div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          HUT RI ke-80 RW IX REWWIN - Meningkatkan kesadaran warga terhadap pentingnya menjaga lingkungan hidup
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
            <div className="text-2xl font-bold text-yellow-600">Rp 7,5M</div>
            <div className="text-sm text-gray-600">Total Hadiah</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">55</div>
            <div className="text-sm text-gray-600">Hari Lomba</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Kategori</div>
          </CardContent>
        </Card>
      </div>

      {/* Latar Belakang & Tujuan */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-green-600" />
            Latar Belakang & Tujuan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Latar Belakang Umum</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Sebagai respon atas isu global perihal kerusakan lingkungan dunia</li>
              <li>• Partisipasi aktif dalam turut serta melestarikan alam</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tujuan Khusus</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Meningkatkan kesadaran warga RT se RW 09 terhadap pentingnya menjaga lingkungan hidup</li>
              <li>• Mendorong kreativitas dan kerja sama antarwarga dalam menciptakan lingkungan yang bersih, hijau, dan sehat</li>
              <li>• Memberikan penghargaan kepada individu/kelompok yang berkontribusi dalam pelestarian lingkungan</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Jadwal Pelaksanaan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-blue-800">Periode Lomba</div>
              <div className="text-sm text-blue-600">1 Juli - 24 Agustus 2025</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-purple-800">Penjurian</div>
              <div className="text-sm text-purple-600">24 Agustus 2025</div>
              <div className="text-xs text-purple-500">Pagi: 08:00 & Sore: 17:00</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-green-800">Pengumuman</div>
              <div className="text-sm text-green-600">31 Agustus 2025</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Kategori Lomba */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Jenis Lomba & Kriteria Penilaian</h2>
        
        {/* Kategori 1: Kebersihan */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-600" />
                1. Lomba Kebersihan Lingkungan RT
              </CardTitle>
              <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">Bobot: 30%</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Setiap RT atau kelompok warga membersihkan dan mempercantik area lingkungan masing-masing 
              (contoh: saluran air, taman, jalan)
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Kriteria Penilaian:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <strong>Kebersihan area</strong> - tingkat kebersihan keseluruhan lingkungan RT</li>
                  <li>• <strong>Pengelolaan sampah</strong> - implementasi daur ulang dan pemilahan sampah</li>
                  <li>• <strong>Estetika lingkungan</strong> - penataan taman dan tanaman yang indah</li>
                  <li>• <strong>Partisipasi warga</strong> - tingkat keterlibatan warga RT dalam kegiatan</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Recycle className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <div className="text-center text-sm text-blue-700">
                  Focus pada kebersihan dan pengelolaan sampah berkelanjutan
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Kategori 2: Hias Lingkungan */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
                2. Lomba Hias Lingkungan RT
              </CardTitle>
              <Badge className="bg-purple-100 text-purple-800 text-lg px-3 py-1">Bobot: 30%</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Warga membuat karya seni, menghias lingkungan RT masing-masing dengan meriah. 
              Contoh: Gapura, Penjor, dan Lampu-lampu hias
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Kriteria Penilaian:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <strong>Kreativitas dan inovasi</strong> - keunikan dan keaslian ide dekorasi</li>
                  <li>• <strong>Manfaat produk</strong> - nilai guna dari hiasan yang dibuat</li>
                  <li>• <strong>Penggunaan bahan daur ulang</strong> - pemanfaatan material bekas/limbah</li>
                  <li>• <strong>Penyampaian pesan lingkungan</strong> - seberapa jelas tema lingkungan disampaikan</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <div className="text-center text-sm text-purple-700">
                  Kreativitas dengan bahan ramah lingkungan
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Kategori 3: Penanaman Pohon */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <TreePine className="w-6 h-6 text-green-600" />
                3. Lomba Penanaman Pohon Lingkungan RT
              </CardTitle>
              <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">Bobot: 40%</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Setiap RT menanam pohon/tanaman di area lingkungan RT masing-masing dan merawatnya selama periode lomba
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Kriteria Penilaian:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <strong>Kuantitas pohon</strong> - seberapa banyak pohon yang sudah tertanam</li>
                  <li>• <strong>Jenis pohon</strong> - pohon produktif (buah/peneduh) lebih diutamakan</li>
                  <li>• <strong>Tingkat perawatan</strong> - kondisi dan kesehatan pohon yang ditanam</li>
                  <li>• <strong>Edukasi warga</strong> - program sosialisasi tentang manfaat pohon kepada warga</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <TreePine className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <div className="text-center text-sm text-green-700">
                  Kategori dengan bobot tertinggi - Focus pada penghijauan berkelanjutan
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

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
              <div className="text-xl font-bold text-yellow-800">JUARA 1</div>
              <div className="text-2xl font-bold text-yellow-900 mt-2">Rp 3.000.000</div>
              <div className="text-sm text-yellow-600 mt-1">(Rp 2.500.000 + Rp 500.000 dari RT 11)</div>
              <div className="text-sm text-yellow-700 mt-1">+ Piagam Penghargaan</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300">
              <Award className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-gray-800">JUARA 2</div>
              <div className="text-2xl font-bold text-gray-900 mt-2">Rp 2.500.000</div>
              <div className="text-sm text-gray-600 mt-1">(Rp 2.000.000 + Rp 500.000 dari RT 11)</div>
              <div className="text-sm text-gray-700 mt-1">+ Piagam Penghargaan</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg border-2 border-orange-300">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-orange-800">JUARA 3</div>
              <div className="text-2xl font-bold text-orange-900 mt-2">Rp 2.000.000</div>
              <div className="text-sm text-orange-600 mt-1">(Rp 1.500.000 + Rp 500.000 dari RT 11)</div>
              <div className="text-sm text-orange-700 mt-1">+ Piagam Penghargaan</div>
            </div>
          </div>
          <div className="text-center mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="text-sm text-blue-700">
              💡 <strong>Bonus:</strong> Hadiah Apresiasi Rp 500.000,- dari RT 11 untuk setiap pemenang
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ketentuan Khusus */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Ketentuan Khusus & Informasi Penting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Ketentuan Wajib
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Semua kegiatan harus mematuhi prinsip ramah lingkungan</li>
                <li>• Tidak menggunakan bahan berbahaya atau merusak lingkungan</li>
                <li>• Dokumentasi kegiatan wajib dilakukan oleh masing-masing RT</li>
                <li>• Laporan progress dapat disampaikan kepada RW secara berkala</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Catatan Penting
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Keputusan juri bersifat mutlak dan tidak dapat diganggu gugat</li>
                <li>• Lomba dianggap selesai sejak pemenang diumumkan dan hadiah diserahkan</li>
                <li>• Dewan juri akan ditentukan dan diberitahukan oleh RW</li>
                <li>• Contact person akan diinformasikan lebih lanjut oleh RW</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Info */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="text-center p-8">
          <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Butuh Informasi Lebih Lanjut?</h3>
          <p className="text-gray-600 mb-4">Contact person akan diinformasikan lebih lanjut oleh RW</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi RW IX
            </Button>
            <Button variant="outline">
              <CheckCircle className="w-4 h-4 mr-2" />
              Daftar Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}