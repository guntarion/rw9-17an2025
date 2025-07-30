import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, Calendar, MapPin, Users, Leaf, TreePine, Recycle, Target, Heart, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Acara - HUT RI Ke-80 RW IX Rewwin Wedoro Sidoarjo',
  description: 'Informasi lengkap tentang acara HUT RI Ke-80 RW IX dengan tema Lingkungan Hidup dan Penghijauan.',
  keywords: ['tentang', 'about', 'HUT RI', 'RW IX', 'lingkungan hidup'],
};

export default function TentangPage() {
  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container-custom'>
        {/* Header */}
        <div className='text-center mb-12'>
          {/* RW IX Logo */}
          <div className='flex justify-center mb-6'>
            <Image src='/images/logos/Logo_RW_IX_nobg.png' alt='Logo RW IX' width={80} height={73} className='drop-shadow-md' />
          </div>

          <div className='flex justify-center items-center space-x-3 mb-6'>
            <Info className='w-8 h-8 text-primary-500' />
            <h1 className='text-4xl font-bold text-gray-900'>Tentang Acara</h1>
            <Info className='w-8 h-8 text-primary-500' />
          </div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Mengenal lebih dekat acara HUT RI Ke-80 RW IX Sidoarjo dengan tema
            <strong> Lingkungan Hidup dan Penghijauan</strong>
          </p>
        </div>

        {/* Chairman's Greeting */}
        <div className='mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-100'>
          <div className='max-w-4xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8'>
              {/* Chairman Photo */}
              <div className='flex-shrink-0'>
                <div className='w-32 h-32 bg-green-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-green-200 relative'>
                  <Image src='/images/committee/made-ascaya.jpg' alt='Made Ascaya' fill className='object-cover' sizes='128px' />
                </div>
                <div className='text-center mt-4'>
                  <h3 className='font-bold text-gray-800'>Made Ascaya</h3>
                  <p className='text-sm text-gray-600'>Ketua RW IX</p>
                </div>
              </div>

              {/* Message Content */}
              <div className='flex-1 text-center md:text-left'>
                <div className='flex items-center justify-center md:justify-start space-x-2 mb-4'>
                  <Heart className='w-6 h-6 text-red-500' />
                  <h2 className='text-2xl font-bold text-gray-800'>Sambutan Ketua RW IX</h2>
                </div>

                <blockquote className='text-gray-700 leading-relaxed mb-6 italic'>
                  &ldquo;Assalamualaikum Warahmatullahi Wabarakatuh dan Salam sejahtera bagi kita semua,
                  <br />
                  <br />
                  Alhamdulillahirabbil&apos;alamin, dengan penuh rasa syukur kepada Allah SWT, kita dapat merayakan HUT RI ke-80 di lingkungan RW IX
                  Sidoarjo dengan tema yang sangat bermakna:
                  <strong>&lsquo;Lingkungan Hidup dan Penghijauan&rsquo;</strong>.
                  <br />
                  <br />
                  Saya berharap acara ini dapat menjadi momentum istimewa bagi seluruh warga RW IX untuk semakin mempererat keakraban dan kebersamaan.
                  Mari kita jadikan peringatan kemerdekaan ini sebagai ajang untuk memperkuat silaturahmi, menjalin persahabatan yang lebih erat, dan
                  bersama-sama membangun lingkungan yang hijau dan asri.
                  <br />
                  <br />
                  Kepada seluruh warga, marilah kita berpartisipasi aktif dalam setiap kegiatan dengan semangat gotong royong yang tinggi. Semoga
                  acara ini dapat memberikan kebahagiaan dan manfaat bagi kita semua. <strong>Merdeka!</strong>&rdquo;
                </blockquote>

                <div className='flex flex-wrap items-center justify-center md:justify-start space-x-4 text-sm text-gray-600'>
                  <div className='flex items-center space-x-1'>
                    <Target className='w-4 h-4 text-green-500' />
                    <span>Keakraban Warga</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Handshake className='w-4 h-4 text-blue-500' />
                    <span>Gotong Royong</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Leaf className='w-4 h-4 text-green-500' />
                    <span>Lingkungan Hijau</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Overview */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          <Card className='lg:col-span-2'>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Heart className='w-5 h-5 mr-2 text-red-500' />
                Latar Belakang Acara
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='text-gray-600 leading-relaxed'>
                HUT RI Ke-80 RW IX Sidoarjo merupakan acara tahunan yang diselenggarakan untuk memperingati Hari Kemerdekaan Indonesia. Tahun ini,
                acara mengangkat tema khusus
                <strong> &ldquo;Lingkungan Hidup dan Penghijauan&rdquo;</strong> sebagai bentuk kepedulian warga terhadap kelestarian lingkungan.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                Acara ini bertujuan untuk mempererat persatuan dan kesatuan warga RW IX, meningkatkan rasa nasionalisme, serta menumbuhkan kesadaran
                kolektif tentang pentingnya menjaga lingkungan hidup untuk generasi mendatang.
              </p>
              <p className='text-gray-600 leading-relaxed'>
                Dengan melibatkan seluruh RT dalam berbagai kompetisi dan kegiatan, acara ini diharapkan dapat menjadi momentum untuk memperkuat
                gotong royong dan kebersamaan dalam membangun lingkungan yang hijau dan asri.
              </p>
            </CardContent>
          </Card>

          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Informasi Acara</CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <Calendar className='w-5 h-5 text-blue-500' />
                  <div>
                    <div className='font-medium'>Tanggal</div>
                    <div className='text-sm text-gray-600'>30-31 Agustus 2025</div>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <MapPin className='w-5 h-5 text-green-500' />
                  <div>
                    <div className='font-medium'>Lokasi</div>
                    <div className='text-sm text-gray-600'>RW IX Desa Wedoro</div>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <Users className='w-5 h-5 text-purple-500' />
                  <div>
                    <div className='font-medium'>Penyelenggara</div>
                    <div className='text-sm text-gray-600'>Panitia RT 11</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-lg flex items-center'>
                  <Leaf className='w-5 h-5 mr-2 text-green-500' />
                  Tema Acara
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-center'>
                  <div className='flex justify-center items-center space-x-2 mb-3'>
                    <TreePine className='w-6 h-6 text-green-600' />
                    <Leaf className='w-6 h-6 text-green-500' />
                    <Recycle className='w-6 h-6 text-green-400' />
                  </div>
                  <h3 className='font-semibold text-green-800 mb-2'>Lingkungan Hidup dan Penghijauan</h3>
                  <p className='text-sm text-gray-600'>Menciptakan lingkungan yang hijau, asri, dan berkelanjutan</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Target className='w-5 h-5 mr-2 text-blue-500' />
                Visi Acara
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600 leading-relaxed'>
                Menjadikan peringatan HUT RI Ke-80 sebagai momentum untuk membangun kesadaran kolektif warga RW IX dalam menjaga kelestarian
                lingkungan hidup dan menciptakan lingkungan yang hijau, asri, dan berkelanjutan.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center'>
                <Heart className='w-5 h-5 mr-2 text-red-500' />
                Misi Acara
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2 text-gray-600'>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  Meningkatkan rasa nasionalisme dan persatuan warga
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  Menumbuhkan kesadaran tentang pentingnya lingkungan hidup
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  Memperkuat gotong royong antar RT
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  Menciptakan aksi nyata untuk penghijauan lingkungan
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Theme Explanation */}
        <Card className='mb-12'>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <Leaf className='w-5 h-5 mr-2 text-green-500' />
              Mengapa Tema Lingkungan Hidup dan Penghijauan?
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <TreePine className='w-8 h-8 text-green-600' />
                </div>
                <h3 className='font-semibold mb-2'>Kelestarian Lingkungan</h3>
                <p className='text-sm text-gray-600'>Menjaga dan melestarikan lingkungan untuk generasi mendatang</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Recycle className='w-8 h-8 text-blue-600' />
                </div>
                <h3 className='font-semibold mb-2'>Gaya Hidup Berkelanjutan</h3>
                <p className='text-sm text-gray-600'>Menerapkan praktik ramah lingkungan dalam kehidupan sehari-hari</p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Users className='w-8 h-8 text-yellow-600' />
                </div>
                <h3 className='font-semibold mb-2'>Gotong Royong Hijau</h3>
                <p className='text-sm text-gray-600'>Bersama-sama menciptakan lingkungan yang hijau dan asri</p>
              </div>
            </div>

            <div className='bg-gradient-nature rounded-lg p-6'>
              <p className='text-gray-700 leading-relaxed'>
                <strong>Tema ini dipilih</strong> sebagai respons terhadap tantangan lingkungan global dan sebagai bentuk kontribusi nyata warga RW IX
                dalam menjaga bumi. Melalui berbagai lomba dan kegiatan bertema lingkungan, diharapkan setiap warga dapat menjadi agen perubahan untuk
                menciptakan lingkungan yang lebih hijau dan berkelanjutan.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Preview */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <Calendar className='w-5 h-5 mr-2 text-blue-500' />
              Jadwal Acara Singkat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <div className='flex items-center space-x-3 mb-3'>
                  <Badge className='bg-blue-100 text-blue-800'>Hari 1</Badge>
                  <span className='font-medium'>30 Agustus 2025</span>
                </div>
                {/* <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Upacara Pembukaan (08:00)</li>
                  <li>• Parade Jalan Sehat (09:00)</li>
                  <li>• Lomba Bulu Tangkis Keluarga (Malam)</li>
                  <li>• Bazar Kreatif (Sepanjang Hari)</li>
                </ul> */}
              </div>

              <div>
                <div className='flex items-center space-x-3 mb-3'>
                  <Badge className='bg-green-100 text-green-800'>Hari 2</Badge>
                  <span className='font-medium'>31 Agustus 2025</span>
                </div>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Penilaian Lomba Hias Lingkungan</li>
                  <li>• Bazar Kreatif (Lanjutan)</li>
                  <li>• Malam Puncak & Hiburan (19:00)</li>
                  <li>• Pengumuman Pemenang & Doorprize</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
