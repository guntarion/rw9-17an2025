import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Users,
  Trophy,
  Phone,
  CheckCircle,
  Target,
  Award,
  Clock,
  MapPin,
  FileText,
  Star,
  AlertCircle
} from 'lucide-react';
import competitionsData from '@/data/competitions.json';
import { Competition } from '@/types';

const { competitions } = competitionsData as { competitions: Competition[] };

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competition = competitions.find(comp => comp.id === slug);
  
  if (!competition) {
    return {
      title: 'Lomba Tidak Ditemukan - HUT RI Ke-80 RW IX',
    };
  }

  return {
    title: `${competition.name} - HUT RI Ke-80 RW IX Sidoarjo`,
    description: competition.description,
    keywords: ['lomba', competition.name, 'HUT RI', 'RW IX', 'lingkungan hidup'],
  };
}

export async function generateStaticParams() {
  return competitions.map((competition) => ({
    slug: competition.id,
  }));
}

const categoryLabels = {
  decoration: 'Dekorasi & Hias',
  sports: 'Olahraga',
  health: 'Kesehatan',
  bazaar: 'Bazar & Edukasi',
};


export default async function CompetitionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const competition = competitions.find(comp => comp.id === slug);

  if (!competition) {
    notFound();
  }

  const registrationOpen = competition.timeline.registration 
    ? new Date() < new Date(competition.timeline.registration)
    : false;
  const competitionActive = new Date() >= new Date(competition.timeline.start) && 
                           new Date() <= new Date(competition.timeline.end);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/lomba" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Lomba
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-6xl">{competition.icon}</div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {competition.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {competition.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="bg-primary-100 text-primary-800">
                    {categoryLabels[competition.category as keyof typeof categoryLabels]}
                  </Badge>
                  <Badge 
                    className={`${competitionActive ? 'bg-green-100 text-green-800' : 
                      registrationOpen ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {competitionActive ? 'Berlangsung' : registrationOpen ? 'Pendaftaran Dibuka' : 'Akan Datang'}
                  </Badge>
                  {competition.theme && (
                    <Badge variant="outline">
                      Tema: {competition.theme}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            {/* Registration Status */}
            <div className="text-center md:text-right">
              {registrationOpen ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-800">Pendaftaran Dibuka</div>
                  <div className="text-xs text-green-600">
                    Hingga {competition.timeline.registration 
                      ? new Date(competition.timeline.registration).toLocaleDateString('id-ID')
                      : 'Akan diinformasikan'}
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-yellow-800">Pendaftaran Ditutup</div>
                </div>
              )}
              
              <Button size="lg" className="w-full bg-gradient-green hover:shadow-green">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Koordinator
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Competition Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Detail Lomba
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Timeline */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Jadwal & Timeline
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm text-blue-600 font-medium">Pendaftaran</div>
                      <div className="text-sm text-gray-700">
                        Hingga {competition.timeline.registration 
                      ? new Date(competition.timeline.registration).toLocaleDateString('id-ID')
                      : 'Akan diinformasikan'}
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-sm text-green-600 font-medium">Mulai</div>
                      <div className="text-sm text-gray-700">
                        {new Date(competition.timeline.start).toLocaleDateString('id-ID')}
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="text-sm text-red-600 font-medium">Selesai</div>
                      <div className="text-sm text-gray-700">
                        {new Date(competition.timeline.end).toLocaleDateString('id-ID')}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Criteria */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Kriteria Penilaian
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {competition.criteria.map((criterion, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-700">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Additional Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Informasi Tambahan
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">Jumlah Peserta</div>
                      <div className="font-medium">
                        {competition.participants} {competition.id === 'jalan-sehat' ? 'orang' : 'RT'}
                      </div>
                    </div>
                    
                    {competition.judges && (
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">Juri</div>
                        <div className="font-medium">{competition.judges}</div>
                      </div>
                    )}
                    
                    {competition.schedule && (
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">Jadwal</div>
                        <div className="font-medium">
                          {typeof competition.schedule === 'string' 
                            ? competition.schedule 
                            : Object.keys(competition.schedule).length > 0 
                            ? `${competition.schedule.day || ''} ${competition.schedule.time || ''}`.trim()
                            : 'Akan diinformasikan'
                          }
                        </div>
                      </div>
                    )}
                    
                    {competition.duration && (
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600">Durasi</div>
                        <div className="font-medium">{competition.duration}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Specific Competition Details */}
                {competition.rules && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Aturan Khusus</h3>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{competition.rules}</p>
                      </div>
                    </div>
                  </>
                )}

                {competition.categories && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Kategori Peserta</h3>
                      <div className="flex flex-wrap gap-2">
                        {competition.categories.map((category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {competition.dressCode && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Dress Code</h3>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{competition.dressCode}</p>
                      </div>
                    </div>
                  </>
                )}

                {competition.focus && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Fokus Utama</h3>
                      <div className="bg-primary-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{competition.focus}</p>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Prizes & Awards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Hadiah & Penghargaan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center bg-yellow-50 rounded-lg p-4">
                    <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="font-semibold text-yellow-800">Juara 1</div>
                    <div className="text-sm text-gray-600">Piala + Hadiah Utama</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-4">
                    <Trophy className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Juara 2</div>
                    <div className="text-sm text-gray-600">Piala + Hadiah</div>
                  </div>
                  <div className="text-center bg-orange-50 rounded-lg p-4">
                    <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="font-semibold text-orange-800">Juara 3</div>
                    <div className="text-sm text-gray-600">Piala + Hadiah</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Sertifikat untuk semua peserta • Piala bergilir untuk juara umum
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Coordinator Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Koordinator Lomba</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{competition.coordinator.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">Koordinator {competition.name}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      {competition.coordinator.contact}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Aksi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/panitia">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Hubungi Panitia
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    FAQ Lomba
                  </Button>
                </Link>
                <Link href="/galeri">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="w-4 h-4 mr-2" />
                    Galeri Kegiatan
                  </Button>
                </Link>
                <Link href="/lomba">
                  <Button variant="outline" className="w-full justify-start">
                    <Trophy className="w-4 h-4 mr-2" />
                    Lomba Lainnya
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="border-primary-200 bg-primary-50">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <AlertCircle className="w-8 h-8 text-primary-600 mx-auto" />
                  <h3 className="font-semibold text-primary-800">Penting!</h3>
                  <p className="text-sm text-primary-700">
                    Semua peserta wajib mengikuti protokol kesehatan dan 
                    mematuhi tema <strong>Lingkungan Hidup dan Penghijauan</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Competitions */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Lomba Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competitions
              .filter(comp => comp.id !== competition.id)
              .slice(0, 3)
              .map((relatedComp) => (
                <Card key={relatedComp.id} className="group hover:shadow-green transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-3">{relatedComp.icon}</div>
                    <CardTitle className="text-lg">{relatedComp.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {relatedComp.coordinator.name}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      {relatedComp.description}
                    </p>
                    <Link href={`/lomba/${relatedComp.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Lihat Detail
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}