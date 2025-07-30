import { Metadata } from 'next';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Leaf, Zap, MapPin, ShoppingBag, Calendar, Award } from 'lucide-react';

// Import lomba components
import LombaLingkungan from '@/components/lomba/LombaLingkungan';
import LombaBadminton from '@/components/lomba/LombaBadminton';
import LombaJalanSehat from '@/components/lomba/LombaJalanSehat';
import LombaBazaar from '@/components/lomba/LombaBazaar';

export const metadata: Metadata = {
  title: 'Lomba & Kompetisi - HUT RI Ke-80 RW IX Sidoarjo',
  description: 'Informasi lengkap lomba dan kompetisi HUT RI Ke-80 RW IX dengan tema Lingkungan Hidup dan Penghijauan.',
  keywords: ['lomba', 'kompetisi', 'HUT RI', 'RW IX', 'lingkungan hidup'],
};

export default function LombaPage() {
  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container-custom'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          {/* RW IX Logo */}
          <div className='flex justify-center mb-6'>
            <Image src='/images/logos/Logo_RW_IX_nobg.png' alt='Logo RW IX' width={80} height={73} className='drop-shadow-md' />
          </div>

          <div className='flex justify-center items-center space-x-3 mb-6'>
            <Trophy className='w-8 h-8 text-primary-500' />
            <h1 className='text-4xl font-bold text-gray-900'>Lomba & Kompetisi</h1>
            <Trophy className='w-8 h-8 text-primary-500' />
          </div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-8'>
            Empat kategori lomba dengan tema <strong>Lingkungan Hidup dan Penghijauan</strong>
            untuk memeriahkan HUT RI Ke-80 RW IX Sidoarjo
          </p>

          {/* Quick Overview Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto'>
            <Card className='text-center'>
              <CardContent className='p-4'>
                <div className='text-2xl font-bold text-primary-600'>4</div>
                <div className='text-sm text-gray-600'>Kategori Lomba</div>
              </CardContent>
            </Card>
            <Card className='text-center'>
              <CardContent className='p-4'>
                <div className='text-2xl font-bold text-accent-600'>11</div>
                <div className='text-sm text-gray-600'>RT Peserta</div>
              </CardContent>
            </Card>
            <Card className='text-center'>
              <CardContent className='p-4'>
                <div className='text-2xl font-bold text-secondary-600'>13,2M</div>
                <div className='text-sm text-gray-600'>Total Hadiah</div>
              </CardContent>
            </Card>
            <Card className='text-center'>
              <CardContent className='p-4'>
                <div className='text-2xl font-bold text-success-600'>Jul-Aug</div>
                <div className='text-sm text-gray-600'>Periode</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Competition Tabs */}
        <Tabs defaultValue='lingkungan' className='w-full'>
          <TabsList className='grid w-full grid-cols-2 md:grid-cols-4 mb-8'>
            <TabsTrigger value='lingkungan' className='flex items-center gap-2 text-sm'>
              <Leaf className='w-4 h-4' />
              <span className='hidden sm:inline'>Lomba</span> Lingkungan
            </TabsTrigger>
            <TabsTrigger value='badminton' className='flex items-center gap-2 text-sm'>
              <Zap className='w-4 h-4' />
              <span className='hidden sm:inline'>Fun</span> Badminton
            </TabsTrigger>
            <TabsTrigger value='jalan-sehat' className='flex items-center gap-2 text-sm'>
              <MapPin className='w-4 h-4' />
              Parade Jalan Sehat
            </TabsTrigger>
            <TabsTrigger value='bazaar' className='flex items-center gap-2 text-sm'>
              <ShoppingBag className='w-4 h-4' />
              Bazaar
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value='lingkungan' className='space-y-6'>
            <LombaLingkungan />
          </TabsContent>

          <TabsContent value='badminton' className='space-y-6'>
            <LombaBadminton />
          </TabsContent>

          <TabsContent value='jalan-sehat' className='space-y-6'>
            <LombaJalanSehat />
          </TabsContent>

          <TabsContent value='bazaar' className='space-y-6'>
            <LombaBazaar />
          </TabsContent>
        </Tabs>

        {/* Overall Competition Info */}
        <div className='mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>📋 Informasi Umum Lomba</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h3 className='font-semibold text-gray-800 flex items-center'>
                <Calendar className='w-5 h-5 text-blue-500 mr-2' />
                Periode & Pendaftaran
              </h3>
              <ul className='space-y-2 text-gray-600 text-sm'>
                <li>
                  • <strong>Lomba Lingkungan:</strong> 1 Juli - 24 Agustus 2025
                </li>
                <li>
                  • <strong>Fun Badminton:</strong> 9-10 Agustus 2025 (Daftar: 7 Agustus)
                </li>
                <li>
                  • <strong>Jalan Sehat:</strong> 31 Agustus 2025
                </li>
                <li>
                  • <strong>Bazaar:</strong> 30-31 Agustus 2025 (Daftar: 25 Agustus)
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='font-semibold text-gray-800 flex items-center'>
                <Award className='w-5 h-5 text-yellow-500 mr-2' />
                Penilaian & Penyelenggaraan
              </h3>
              <ul className='space-y-2 text-gray-600 text-sm'>
                <li>
                  • Semua lomba bertemakan <strong>Lingkungan Hidup</strong>
                </li>
                <li>• Juri dari luar dan internal RW IX untuk objektivitas</li>
                <li>• Setiap RT wajib mengikuti minimal 1 lomba</li>
                <li>• Dokumentasi kegiatan wajib oleh masing-masing RT</li>
              </ul>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <div className='bg-white rounded-lg p-6 inline-block'>
              <Trophy className='w-12 h-12 text-yellow-500 mx-auto mb-3' />
              <div className='text-2xl font-bold text-gray-800'>Total Hadiah</div>
              <div className='text-3xl font-bold text-yellow-600'>Rp 13.200.000</div>
              <div className='text-sm text-gray-600 mt-1'>Across all competitions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-12 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Siap Berkompetisi?</h2>
          <p className='text-gray-600 mb-6'>Hubungi koordinator masing-masing lomba atau panitia RW untuk informasi pendaftaran</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <div className='text-center'>
              <div className='text-sm text-gray-500 mb-1'>Contact untuk</div>
              <div className='space-y-1'>
                <div className='text-sm'>
                  <strong>Badminton:</strong> Makmur Yusri (0818.515.363)
                </div>
                <div className='text-sm'>
                  <strong>Lainnya:</strong> Koordinator RW/PKK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
