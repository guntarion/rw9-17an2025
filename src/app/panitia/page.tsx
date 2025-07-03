import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
  Users,
  Phone,
  Mail,
  MessageCircle,
  Trophy,
  Star,
  Shield,
  Crown,
  Music,
  Contact,
  Award,
  Heart,
  Handshake,
  Target,
  Flag
} from 'lucide-react';
import committeeData from '@/data/committee.json';
import { CommitteeMember } from '@/types';

export const metadata: Metadata = {
  title: 'Panitia Pelaksana - HUT RI Ke-80 RW IX Sidoarjo',
  description: 'Susunan panitia pelaksana dan tim dukungan HUT RI Ke-80 RW IX dengan tema Lingkungan Hidup dan Penghijauan.',
  keywords: ['panitia', 'organizer', 'HUT RI', 'RW IX', 'committee'],
};

const { committee } = committeeData;

const roleIcons = {
  'Ketua Panitia Pelaksana': Crown,
  'Sekretaris Panitia': Contact,
  'Bendahara Panitia': Shield,
  'Sie Dana/Kupon': Trophy,
  'Sie Kegiatan dan Acara': Trophy,
  'Sie Jalan Sehat': Trophy,
  'Sie Panggung': Music,
  'Sie Bazaar': Trophy,
  'Sie Senam': Trophy,
  'Sie Konsumsi': Trophy,
  'Sie Publikasi': Contact,
  'Sie Umum dan Lingkungan': Shield,
  'Sie Kesehatan': Shield,
  'Sie Keamanan': Shield,
  'Sie Lomba': Trophy,
  'Sie Lomba Lingkungan Hidup': Trophy,
  'Sie Dokumentasi': Contact,
  'Dirigen Lagu Indonesia Raya': Music,
  'MC Pendamping': Music,
  'Penanggung Jawab': Crown,
};

export default function PanitiaPage() {
  const totalMembers = committee.main.length + committee.coordinators.length + 
                      (committee.specialSections?.length || 0) + committee.support.length;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          {/* RW IX Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logos/Logo_RW_IX_nobg.png"
              alt="Logo RW IX"
              width={80}
              height={73}
              className="drop-shadow-md"
            />
          </div>
          
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Flag className="w-8 h-8 text-red-500" />
            <h1 className="text-4xl font-bold text-gray-900">
              Panitia Pelaksana
            </h1>
            <Flag className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Struktur organisasi dan tim pelaksana HUT RI Ke-80 RW IX Sidoarjo 
            dengan tema <strong>Lingkungan Hidup dan Penghijauan</strong>
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Berdasarkan Surat Tugas Nomor: 108/ST/RWIX/VI/2025 - Tanggal: 14 Juni 2025
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-primary-600">{totalMembers}</div>
              <div className="text-sm text-gray-600">Total Anggota</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent-600">{(committee.specialSections?.length || 0) + committee.coordinators.length}</div>
              <div className="text-sm text-gray-600">Sie & Koordinator</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-secondary-600">15</div>
              <div className="text-sm text-gray-600">Bidang Kerja</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-success-600">12</div>
              <div className="text-sm text-gray-600">RT Peserta</div>
            </div>
          </div>
        </div>

        {/* Welcome Message from Chairman */}
        <div className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Chairman Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center overflow-hidden border-4 border-green-200 relative">
                  <Image
                    src={committee.main.find(member => member.role === "Ketua Panitia Pelaksana")?.photo || "/images/person-default.jpg"}
                    alt="Arif Rachman Hakim"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-bold text-gray-800">Arif Rachman Hakim</h3>
                  <p className="text-sm text-gray-600">Ketua Panitia</p>
                </div>
              </div>
              
              {/* Message Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-800">Sambutan Ketua Panitia</h2>
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;Assalamualaikum Warahmatullahi Wabarakatuh dan Salam sejahtera bagi kita semua,
                  <br /><br />
                  Dengan penuh rasa syukur kepada Allah SWT, kami menyatakan kesiapan panitia dalam melaksanakan 
                  tanggung jawab untuk mensukseskan peringatan HUT RI ke-80 di lingkungan RW IX Rewwin dengan 
                  tema <strong>&lsquo;Lingkungan Hidup dan Penghijauan&rsquo;</strong>.
                  <br /><br />
                  Sesuai dengan tujuan guyub rukun RWIX yang bertempat di Fasum Grha RWIX dan Kuliner RWIX Rewwin, 
                  mari kita bersatu padu mewujudkan acara yang berkesan dan bermakna. Kepada seluruh rekan-rekan 
                  panitia, mari kita bergandengan tangan dengan semangat kebersamaan untuk memberikan yang terbaik 
                  bagi masyarakat RW IX kita tercinta.
                  <br /><br />
                  <strong>Bersama kita bisa, bersama kita kuat, Merdeka!</strong>&rdquo;
                </blockquote>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Target className="w-4 h-4 text-green-500" />
                    <span>Komitmen Penuh</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Handshake className="w-4 h-4 text-blue-500" />
                    <span>Kerja Sama Tim</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Kualitas Terbaik</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Committee Tabs */}
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="main">Panitia Inti</TabsTrigger>
            <TabsTrigger value="coordinators">Koordinator</TabsTrigger>
            <TabsTrigger value="sections">Seksi Kerja</TabsTrigger>
            <TabsTrigger value="support">Penanggung Jawab</TabsTrigger>
            <TabsTrigger value="structure">Struktur</TabsTrigger>
          </TabsList>

          {/* Main Committee */}
          <TabsContent value="main" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Crown className="w-6 h-6 text-yellow-500 mr-2" />
                Panitia Inti RWIX Rewwin
              </h2>
              <p className="text-gray-600">
                Tim inti yang bertanggung jawab atas koordinasi dan pelaksanaan keseluruhan acara HUT RI Ke-80 
                sesuai dengan Surat Tugas Panitia HUT RI KE-80 (TAHUN 2025).
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committee.main.map((member) => (
                <CommitteeMemberCard key={member.id} member={member} isPrimary />
              ))}
            </div>
          </TabsContent>

          {/* Coordinators */}
          <TabsContent value="coordinators" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="w-6 h-6 text-green-500 mr-2" />
                Koordinator Kegiatan
              </h2>
              <p className="text-gray-600">
                Koordinator yang bertanggung jawab atas bidang-bidang strategis dalam pelaksanaan HUT RI Ke-80.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {committee.coordinators.map((member) => (
                <CommitteeMemberCard key={member.id} member={member} showCompetition />
              ))}
            </div>
          </TabsContent>

          {/* Special Sections */}
          <TabsContent value="sections" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-2" />
                Seksi-Seksi Kerja
              </h2>
              <p className="text-gray-600">
                Seksi-seksi kerja yang menangani aspek teknis dan operasional dari setiap kegiatan.
              </p>
            </div>
            
            {/* Group by role for better organization */}
            <div className="space-y-8">
              {/* Konsumsi Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 text-orange-500 mr-2" />
                  Sie Konsumsi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {committee.specialSections?.filter(member => member.role.includes('Konsumsi')).map((member) => (
                    <CommitteeMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              {/* Umum dan Lingkungan Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-2" />
                  Sie Umum dan Lingkungan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {committee.specialSections?.filter(member => member.role.includes('Umum dan Lingkungan')).map((member) => (
                    <CommitteeMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              {/* Lomba Sections */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                  Sie Lomba & Lingkungan Hidup
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {committee.specialSections?.filter(member => member.role.includes('Lomba')).map((member) => (
                    <CommitteeMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              {/* Other Sections */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Star className="w-5 h-5 text-purple-500 mr-2" />
                  Sie Lainnya
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {committee.specialSections?.filter(member => 
                    !member.role.includes('Konsumsi') && 
                    !member.role.includes('Umum dan Lingkungan') && 
                    !member.role.includes('Lomba')
                  ).map((member) => (
                    <CommitteeMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Support Team */}
          <TabsContent value="support" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-500 mr-2" />
                Penanggung Jawab
              </h2>
              <p className="text-gray-600">
                Penanggung jawab yang memberikan dukungan dan supervisi untuk kesuksesan acara.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committee.support.map((member) => (
                <CommitteeMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>

          {/* Organizational Structure */}
          <TabsContent value="structure" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Struktur Organisasi
              </h2>
              <p className="text-gray-600">
                Bagan organisasi Panitia HUT RI ke-80 RWIX Rewwin berdasarkan Surat Tugas resmi.
              </p>
            </div>

            <div className="bg-gradient-nature rounded-xl p-8">
              <div className="space-y-8">
                {/* Top Level - Penanggung Jawab */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Penanggung Jawab</h3>
                  <div className="flex justify-center">
                    {committee.support.map((member) => (
                      <div key={member.id} className="bg-white rounded-lg p-4 shadow-md text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Crown className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-gray-600">{member.role}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>

                {/* Main Committee */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Panitia Inti</h3>
                  <div className="flex justify-center space-x-4">
                    {committee.main.map((member) => (
                      <div key={member.id} className="bg-white rounded-lg p-4 shadow-md text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          {roleIcons[member.role as keyof typeof roleIcons] && 
                            React.createElement(roleIcons[member.role as keyof typeof roleIcons], {
                              className: "w-8 h-8 text-green-600"
                            })
                          }
                        </div>
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-gray-600">{member.role}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gray-300"></div>
                </div>

                {/* Coordinators and Sections */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Koordinator & Seksi Kerja</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 justify-center">
                    {[...committee.coordinators, ...(committee.specialSections?.slice(0, 8) || [])].map((member) => (
                      <div key={member.id} className="bg-white rounded-lg p-3 shadow-md text-center">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Trophy className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div className="text-xs font-medium">{member.name}</div>
                        <div className="text-xs text-gray-600">{member.role}</div>
                      </div>
                    ))}
                  </div>
                  {(committee.specialSections?.length || 0) > 8 && (
                    <p className="text-sm text-gray-500 mt-4">
                      +{(committee.specialSections?.length || 0) - 8} anggota lainnya
                    </p>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
              <Flag className="w-8 h-8 mr-3" />
              Tugas Utama Panitia
              <Flag className="w-8 h-8 ml-3" />
            </h2>
            <p className="text-lg mb-8 opacity-90 italic">
              &ldquo;Melaksanakan kegiatan peringatan HUT RI ke 80 dengan baik dan sukses serta 
              sesuai dengan tujuan guyub rukun RWIX bertempat di fasum Grha RWIX dan Kuliner RWIX Rewwin&rdquo;
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Tujuan Jelas</h3>
                <p className="text-sm opacity-80">Melaksanakan HUT RI dengan sukses</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Guyub Rukun</h3>
                <p className="text-sm opacity-80">Memperkuat persatuan warga RWIX</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Dedikasi</h3>
                <p className="text-sm opacity-80">Mengabdi untuk masyarakat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        {/* <div className="mt-16 bg-gradient-green text-white rounded-xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              📞 Hubungi Panitia
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ada pertanyaan tentang acara atau lomba? Jangan ragu untuk menghubungi panitia pelaksana.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-sm opacity-80">+62 xxx xxxx xxxx</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm opacity-80">Chat langsung dengan panitia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm opacity-80">panitia.rwix@gmail.com</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/kontak">
                <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Formulir Kontak Lengkap
                </Button>
              </Link>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}

function CommitteeMemberCard({ 
  member, 
  isPrimary = false, 
  showCompetition = false, 
  showPerformance = false 
}: { 
  member: CommitteeMember; 
  isPrimary?: boolean;
  showCompetition?: boolean;
  showPerformance?: boolean;
}) {
  const RoleIcon = roleIcons[member.role as keyof typeof roleIcons] || Users;
  
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${isPrimary ? 'ring-2 ring-primary-200' : ''}`}>
      <CardHeader className="text-center">
        <div className="relative">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={member.photo || "/images/person-default.jpg"}
                alt={member.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            {isPrimary && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>
        
        <CardTitle className="text-lg mb-2">{member.name}</CardTitle>
        
        <div className="flex flex-col items-center space-y-2">
          <Badge variant="outline" className="flex items-center space-x-1">
            <RoleIcon className="w-3 h-3" />
            <span className="text-xs">{member.role}</span>
          </Badge>
          
          {member.rt && (
            <Badge variant="secondary" className="text-xs">
              {member.rt}
            </Badge>
          )}
          
          {showCompetition && member.competition && (
            <Badge className="bg-yellow-100 text-yellow-800 text-xs">
              <Trophy className="w-3 h-3 mr-1" />
              {member.competition}
            </Badge>
          )}
          
          {showPerformance && member.performance && (
            <Badge className="bg-purple-100 text-purple-800 text-xs">
              <Music className="w-3 h-3 mr-1" />
              {member.performance}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {member.bio && (
          <p className="text-sm text-gray-600 mb-4 text-center">{member.bio}</p>
        )}
        
        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2 text-sm flex items-center">
            <Award className="w-4 h-4 mr-1" />
            Tanggung Jawab
          </h4>
          <ul className="space-y-1">
            {member.responsibilities.slice(0, 3).map((responsibility, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start">
                <span className="w-1 h-1 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <span>{responsibility}</span>
              </li>
            ))}
            {member.responsibilities.length > 3 && (
              <li className="text-xs text-gray-500 italic">
                +{member.responsibilities.length - 3} lainnya
              </li>
            )}
          </ul>
        </div>
        
        {/* Contact */}
        <Separator className="my-4" />
        <div className="space-y-2">
          {member.contact.phone && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{member.contact.phone}</span>
            </div>
          )}
          {member.contact.whatsapp && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span>WhatsApp tersedia</span>
            </div>
          )}
          {member.contact.email && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span className="text-xs">{member.contact.email}</span>
            </div>
          )}
        </div>
        
        {/* Quick Contact Button */}
        {(member.contact.whatsapp || member.contact.phone) && (
          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}