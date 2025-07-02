import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ShoppingBag,
  Users,
  Calendar,
  Trophy,
  Clock,
  Award,
  Phone,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Lightbulb,
  Recycle,
  Target,
  Leaf,
  DollarSign,
  Eye,
  Coffee,
  Briefcase,
  TrendingUp,
  Shield,
  FileText
} from 'lucide-react';

export default function LombaBazaar() {
  const judgesCriteria = [
    {
      category: "EDUKASI",
      weight: "25%",
      color: "blue",
      icon: BookOpen,
      subcriteria: [
        { name: "Ilmu yang didapat masyarakat", points: "≥10 topik = 10 poin, 5-9 topik = 7 poin, <5 topik = 4 poin" },
        { name: "Alat peraga, brosur, leaflet", points: "≥3 jenis = 5 poin, 1-2 jenis = 3 poin, tidak ada = 0 poin" }
      ]
    },
    {
      category: "PENJUALAN PRODUK",
      weight: "35%",
      color: "green",
      icon: ShoppingBag,
      subcriteria: [
        { name: "Makanan & minuman ramah lingkungan", points: "Menggunakan bahan alami = 5-10 poin" },
        { name: "Kerajinan dari bahan daur ulang", points: "≥5 macam = 10 poin, hingga 1 macam = 2 poin" },
        { name: "Produk untuk kelestarian alam", points: "≥3 macam = 10 poin, hingga tidak ada = 0 poin" }
      ]
    },
    {
      category: "KREATIVITAS & INOVASI",
      weight: "40%",
      color: "purple",
      icon: Lightbulb,
      subcriteria: [
        { name: "Desain & dekorasi ramah lingkungan", points: "Estetika & kreativitas = 5-10 poin" },
        { name: "Penjaga stand (3 orang) berpakaian ramah lingkungan", points: "Estetik = 5-10 poin" },
        { name: "Keikutsertaan Karang Taruna", points: "3 orang = 5 poin, 2 orang = 3 poin, 1 orang = 2 poin" }
      ]
    }
  ];

  const timeline = [
    { date: "Juli 2025", activity: "Penjelasan kisi-kisi saat pertemuan PKK RW", icon: BookOpen, color: "blue" },
    { date: "Agustus 2025", activity: "Penentuan nama juri dari masing-masing RT di pertemuan PKK", icon: Users, color: "green" },
    { date: "30 Agustus 2025 - 08:00", activity: "Penataan meja dan dekorasi stand oleh masing-masing RT", icon: Coffee, color: "orange" },
    { date: "30 Agustus 2025 - 17:00", activity: "Penilaian stand oleh juri internal (1 juri per RT)", icon: Eye, color: "red" },
    { date: "31 Agustus 2025", activity: "Bazaar tema bebas (fokus penjualan)", icon: ShoppingBag, color: "purple" }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <ShoppingBag className="w-10 h-10 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">
            Lomba Bazaar
          </h1>
          <Leaf className="w-10 h-10 text-green-600" />
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-green-100 rounded-lg p-4 max-w-3xl mx-auto">
          <div className="text-2xl font-bold text-purple-800 mb-2">
            Tema: &quot;LINGKUNGAN&quot;
          </div>
          <p className="text-gray-700">HUT RI ke-80 RW IX REWWIN</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-600">12</div>
            <div className="text-sm text-gray-600">RT Peserta</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">Rp 3M</div>
            <div className="text-sm text-gray-600">Total Hadiah</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-gray-600">Hari Acara</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">3.015.000</div>
            <div className="text-sm text-gray-600">Total Anggaran</div>
          </CardContent>
        </Card>
      </div>

      {/* Peserta & Sistem */}
      <Card className="bg-gradient-to-br from-purple-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" />
            Peserta & Sistem
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Peserta</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Seluruh RT 01 - 11 di wilayah RW 09 Rewwin</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">RT 11 di bagian barat kanopi (1 bagian)</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Sistem Undian</h4>
              <div className="bg-purple-100 p-3 rounded-lg">
                <div className="text-sm text-purple-700">
                  <Briefcase className="w-4 h-4 inline mr-1" />
                  RT ditambah RT 11 mendapat alokasi area khusus di bagian barat kanopi
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Pelaksanaan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            Timeline Pelaksanaan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center gap-4 p-4 bg-${item.color}-50 rounded-lg border-l-4 border-l-${item.color}-500`}>
                <div className={`w-12 h-12 bg-${item.color}-500 rounded-full flex items-center justify-center`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`font-semibold text-${item.color}-800`}>{item.date}</div>
                  <div className={`text-sm text-${item.color}-700`}>{item.activity}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Tahap Penutupan:
            </div>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Penataan kembali meja dan bangku seperti kondisi semula</li>
              <li>• Perlengkapan dan dekorasi menjadi tanggung jawab RT masing-masing</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Kriteria Penilaian */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Kriteria Penilaian</h2>
        
        {judgesCriteria.map((criteria, index) => (
          <Card key={index} className={`border-l-4 border-l-${criteria.color}-500`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <criteria.icon className={`w-6 h-6 text-${criteria.color}-600`} />
                  {index + 1}. {criteria.category}
                </CardTitle>
                <Badge className={`bg-${criteria.color}-100 text-${criteria.color}-800 text-lg px-3 py-1`}>
                  Bobot: {criteria.weight}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {criteria.subcriteria.map((sub, subIndex) => (
                  <div key={subIndex} className={`p-3 bg-${criteria.color}-50 rounded-lg`}>
                    <div className={`font-semibold text-${criteria.color}-800 mb-1`}>{sub.name}</div>
                    <div className={`text-sm text-${criteria.color}-700`}>{sub.points}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Kategori Produk */}
      <Card className="bg-gradient-to-br from-green-50 to-teal-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            Kategori Produk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border-2 border-green-200">
              <Coffee className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="font-bold text-green-800">Makanan & Minuman</div>
              <div className="text-sm text-green-600">Dengan bahan alami dan ramah lingkungan</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-blue-200">
              <Recycle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="font-bold text-blue-800">Kerajinan Daur Ulang</div>
              <div className="text-sm text-blue-600">Produk dari bahan daur ulang atau limbah</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border-2 border-purple-200">
              <Leaf className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="font-bold text-purple-800">Produk Kelestarian</div>
              <div className="text-sm text-purple-600">Untuk menjaga kelestarian alam</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sistem Juri */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-6 h-6 text-red-600" />
            Sistem Juri
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-red-200">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <div className="font-bold text-red-800 mb-2">Juri Internal</div>
              <div className="text-sm text-red-600">1 juri dari masing-masing RT</div>
              <div className="text-xs text-red-500 mt-1">(Ditentukan di pertemuan PKK Agustus)</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
              <Clock className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="font-bold text-orange-800 mb-2">Waktu Penilaian</div>
              <div className="text-sm text-orange-600">30 Agustus 2025</div>
              <div className="text-sm text-orange-600">Pukul 17:00 WIB</div>
            </div>
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
              <div className="text-2xl font-bold text-yellow-900 mt-2">Rp 1.500.000</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300">
              <Award className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-gray-800">JUARA II</div>
              <div className="text-2xl font-bold text-gray-900 mt-2">Rp 1.000.000</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg border-2 border-orange-300">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-xl font-bold text-orange-800">JUARA III</div>
              <div className="text-2xl font-bold text-orange-900 mt-2">Rp 500.000</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Anggaran Kegiatan */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-indigo-600" />
            Anggaran Kegiatan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-indigo-800">Rp 3.015.000</div>
              <div className="text-lg text-indigo-600">Total Anggaran</div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Kertas Manila dan spidol</span>
                <span className="font-semibold text-indigo-800">Rp 15.000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                <span className="text-gray-700">Hadiah lomba</span>
                <span className="font-semibold text-indigo-800">Rp 3.000.000</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ketentuan Umum */}
      <Card className="border-l-4 border-l-teal-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-teal-600" />
            Ketentuan Umum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                Registrasi & Persiapan
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Konfirmasi partisipasi ke panitia sebelum 25 Agustus 2025</li>
                <li>• Setiap RT bertanggung jawab atas dekorasi dan penataan stand</li>
                <li>• Ukuran stand sesuai alokasi area yang ditentukan panitia</li>
                <li>• Tema wajib: semua elemen berkaitan dengan &quot;Lingkungan&quot;</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-500" />
                Keamanan & Dokumentasi
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Menjaga kebersihan area stand dan sekitarnya</li>
                <li>• Barang berharga menjadi tanggung jawab masing-masing RT</li>
                <li>• Tidak menggunakan bahan berbahaya atau merusak lingkungan</li>
                <li>• Dokumentasi proses pembuatan produk kerajinan daur ulang</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Persyaratan Stand */}
      <Card className="bg-gradient-to-br from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-gray-600" />
            Persyaratan Stand
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Ukuran sesuai alokasi area panitia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Tema wajib berkaitan dengan &quot;Lingkungan&quot;</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Tidak menggunakan bahan berbahaya</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Harga produk wajar dan terjangkau</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="text-center p-8">
          <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Butuh Informasi Lebih Lanjut?</h3>
          <p className="text-gray-600 mb-4">Contact person akan diinformasikan melalui koordinator PKK masing-masing RT</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Koordinator PKK
            </Button>
            <Button variant="outline">
              <CheckCircle className="w-4 h-4 mr-2" />
              Daftar Stand
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
              <DollarSign className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="font-semibold text-yellow-800 mb-1">Harga Wajar</div>
              <div className="text-sm text-yellow-700">Harga produk harus wajar dan terjangkau untuk warga</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-green-800 mb-1">Keberlanjutan</div>
              <div className="text-sm text-green-700">Diharapkan dapat berlanjut sebagai program rutin RT</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-blue-800 mb-1">Networking</div>
              <div className="text-sm text-blue-700">Kesempatan membangun jaringan usaha antar warga RT</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}