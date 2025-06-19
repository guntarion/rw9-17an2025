import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import {
  Calendar,
  Users,
  Trophy,
  Clock,
  Phone,
  CheckCircle,
  Target,
  Award,
  ChevronRight
} from 'lucide-react';
import competitionsData from '@/data/competitions.json';

export const metadata: Metadata = {
  title: 'Lomba & Kompetisi - HUT RI Ke-80 RW IX Sidoarjo',
  description: 'Informasi lengkap lomba dan kompetisi HUT RI Ke-80 RW IX dengan tema Lingkungan Hidup dan Penghijauan.',
  keywords: ['lomba', 'kompetisi', 'HUT RI', 'RW IX', 'lingkungan hidup'],
};

const { competitions } = competitionsData;

const categoryColors = {
  decoration: 'bg-blue-100 text-blue-800',
  sports: 'bg-green-100 text-green-800',
  health: 'bg-emerald-100 text-emerald-800',
  bazaar: 'bg-purple-100 text-purple-800',
};

const statusColors = {
  upcoming: 'bg-yellow-100 text-yellow-800',
  ongoing: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
};

export default function LombaPage() {
  const totalParticipants = competitions.reduce((total, comp) => total + comp.participants, 0);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Trophy className="w-8 h-8 text-primary-500" />
            <h1 className="text-4xl font-bold text-gray-900">
              Lomba & Kompetisi
            </h1>
            <Trophy className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Empat kategori lomba dengan tema <strong>Lingkungan Hidup dan Penghijauan</strong> 
            untuk memeriahkan HUT RI Ke-80 RW IX Sidoarjo
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-primary-600">{competitions.length}</div>
              <div className="text-sm text-gray-600">Total Lomba</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent-600">{totalParticipants}</div>
              <div className="text-sm text-gray-600">Total Peserta</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-secondary-600">12</div>
              <div className="text-sm text-gray-600">RT Peserta</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-success-600">2</div>
              <div className="text-sm text-gray-600">Hari Acara</div>
            </div>
          </div>
        </div>

        {/* Competition Tabs */}
        <Tabs defaultValue="semua" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="semua">Semua</TabsTrigger>
            <TabsTrigger value="decoration">Hias Kampung</TabsTrigger>
            <TabsTrigger value="sports">Olahraga</TabsTrigger>
            <TabsTrigger value="health">Kesehatan</TabsTrigger>
            <TabsTrigger value="bazaar">Bazar</TabsTrigger>
          </TabsList>

          {/* All Competitions */}
          <TabsContent value="semua" className="space-y-6">
            <div className="grid gap-6">
              {competitions.map((competition) => (
                <CompetitionCard key={competition.id} competition={competition} />
              ))}
            </div>
          </TabsContent>

          {/* Individual Category Tabs */}
          {['decoration', 'sports', 'health', 'bazaar'].map((category) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <div className="grid gap-6">
                {competitions
                  .filter((comp) => comp.category === category)
                  .map((competition) => (
                    <CompetitionCard key={competition.id} competition={competition} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Important Notes */}
        <div className="mt-12 bg-gradient-nature rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📋 Informasi Penting
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Pendaftaran
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Pendaftaran melalui koordinator masing-masing RT</li>
                <li>• Setiap RT wajib mengikuti minimal 3 lomba</li>
                <li>• Batas pendaftaran: 25 Agustus 2025</li>
                <li>• Konfirmasi peserta kepada koordinator lomba</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <Award className="w-5 h-5 text-yellow-500 mr-2" />
                Penilaian & Hadiah
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Juri dari luar RW IX untuk objektivitas</li>
                <li>• Hadiah untuk juara 1, 2, 3 setiap kategori</li>
                <li>• Piala bergilir untuk juara umum</li>
                <li>• Sertifikat untuk semua peserta</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Butuh Informasi Lebih Lanjut?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/panitia">
              <Button size="lg" className="bg-gradient-green hover:shadow-green">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Panitia
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" size="lg">
                Tanya Jawab
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetitionCard({ competition }: { competition: typeof competitions[0] }) {
  return (
    <Card className="group hover:shadow-green transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">{competition.icon}</div>
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{competition.name}</CardTitle>
              <p className="text-gray-600 mb-3">{competition.description}</p>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge className={categoryColors[competition.category as keyof typeof categoryColors]}>
                  {competition.category === 'decoration' && 'Dekorasi'}
                  {competition.category === 'sports' && 'Olahraga'}
                  {competition.category === 'health' && 'Kesehatan'}
                  {competition.category === 'bazaar' && 'Bazar'}
                </Badge>
                <Badge className={statusColors[competition.status as keyof typeof statusColors]}>
                  {competition.status === 'upcoming' && 'Akan Datang'}
                  {competition.status === 'ongoing' && 'Berlangsung'}
                  {competition.status === 'completed' && 'Selesai'}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="bg-primary-50 rounded-lg p-3 mb-3">
              <div className="text-sm text-gray-600">Koordinator</div>
              <div className="font-semibold text-primary-700">{competition.coordinator.name}</div>
            </div>
            <Link href={`/lomba/${competition.id}`}>
              <Button className="w-full group-hover:bg-primary-600">
                Lihat Detail
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <div>
              <div className="font-medium">Periode</div>
              <div>
                {new Date(competition.timeline.start).toLocaleDateString('id-ID')} - 
                {new Date(competition.timeline.end).toLocaleDateString('id-ID')}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <div>
              <div className="font-medium">Peserta</div>
              <div>{competition.participants} {competition.id === 'jalan-sehat' ? 'orang' : 'RT'}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <div>
              <div className="font-medium">Pendaftaran</div>
              <div>Hingga {new Date(competition.timeline.registration).toLocaleDateString('id-ID')}</div>
            </div>
          </div>
        </div>
        
        {/* Criteria */}
        <div className="mt-4">
          <h4 className="font-medium text-gray-800 mb-2 flex items-center">
            <Target className="w-4 h-4 mr-2" />
            Kriteria Penilaian
          </h4>
          <div className="flex flex-wrap gap-2">
            {competition.criteria.map((criterion, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {criterion}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}