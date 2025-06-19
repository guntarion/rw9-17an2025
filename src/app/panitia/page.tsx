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
  Award
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
  'Koordinator Lomba Hias Kampung': Trophy,
  'Koordinator Lomba Bulu Tangkis Keluarga': Trophy,
  'Koordinator Lomba Jalan Sehat': Trophy,
  'Koordinator Lomba Bazar': Trophy,
  'Ketua RW IX': Crown,
  'Wakil Ketua RW IX': Star,
  'Sekretaris RW IX': Contact,
  'Koordinator Angklung': Music,
};

export default function PanitiaPage() {
  const totalMembers = committee.main.length + committee.coordinators.length + 
                      committee.support.length + (committee.entertainment?.length || 0);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-primary-500" />
            <h1 className="text-4xl font-bold text-gray-900">
              Panitia Pelaksana
            </h1>
            <Users className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Struktur organisasi dan tim pelaksana HUT RI Ke-80 RW IX Sidoarjo 
            dengan tema <strong>Lingkungan Hidup dan Penghijauan</strong>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-primary-600">{totalMembers}</div>
              <div className="text-sm text-gray-600">Total Anggota</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent-600">{committee.coordinators.length}</div>
              <div className="text-sm text-gray-600">Koordinator</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-secondary-600">4</div>
              <div className="text-sm text-gray-600">Lomba</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-success-600">12</div>
              <div className="text-sm text-gray-600">RT Peserta</div>
            </div>
          </div>
        </div>

        {/* Committee Tabs */}
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="main">Panitia Inti</TabsTrigger>
            <TabsTrigger value="coordinators">Koordinator</TabsTrigger>
            <TabsTrigger value="support">Tim Dukungan</TabsTrigger>
            <TabsTrigger value="structure">Struktur</TabsTrigger>
          </TabsList>

          {/* Main Committee */}
          <TabsContent value="main" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Crown className="w-6 h-6 text-yellow-500 mr-2" />
                Panitia Inti RT 11
              </h2>
              <p className="text-gray-600">
                Tim inti yang bertanggung jawab atas koordinasi dan pelaksanaan keseluruhan acara HUT RI Ke-80.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committee.main.map((member) => (
                <CommitteeMemberCard key={member.id} member={member} isPrimary />
              ))}
            </div>
          </TabsContent>

          {/* Competition Coordinators */}
          <TabsContent value="coordinators" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="w-6 h-6 text-green-500 mr-2" />
                Koordinator Lomba
              </h2>
              <p className="text-gray-600">
                Koordinator yang bertanggung jawab atas masing-masing kategori lomba dan kompetisi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {committee.coordinators.map((member) => (
                <CommitteeMemberCard key={member.id} member={member} showCompetition />
              ))}
            </div>
          </TabsContent>

          {/* Support Team */}
          <TabsContent value="support" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-500 mr-2" />
                Tim Dukungan RW IX
              </h2>
              <p className="text-gray-600">
                Pengurus RW IX yang memberikan dukungan penuh untuk kesuksesan acara.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committee.support.map((member) => (
                <CommitteeMemberCard key={member.id} member={member} />
              ))}
            </div>

            {/* Entertainment Team */}
            {committee.entertainment && committee.entertainment.length > 0 && (
              <>
                <div className="mt-12 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Music className="w-6 h-6 text-purple-500 mr-2" />
                    Tim Hiburan
                  </h2>
                  <p className="text-gray-600">
                    Koordinator hiburan dan pentas seni untuk malam puncak acara.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {committee.entertainment.map((member) => (
                    <CommitteeMemberCard key={member.id} member={member} showPerformance />
                  ))}
                </div>
              </>
            )}
          </TabsContent>

          {/* Organizational Structure */}
          <TabsContent value="structure" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Struktur Organisasi
              </h2>
              <p className="text-gray-600">
                Bagan organisasi dan hierarki kepemimpinan acara HUT RI Ke-80 RW IX.
              </p>
            </div>

            <div className="bg-gradient-nature rounded-xl p-8">
              <div className="space-y-8">
                {/* Top Level - RW IX Leadership */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Pengurus RW IX</h3>
                  <div className="flex justify-center space-x-4">
                    {committee.support.filter(m => m.role.includes('Ketua')).map((member) => (
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Panitia Inti RT 11</h3>
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

                {/* Coordinators */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Koordinator Lomba</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                    {committee.coordinators.map((member) => (
                      <div key={member.id} className="bg-white rounded-lg p-4 shadow-md text-center">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Trophy className="w-8 h-8 text-yellow-600" />
                        </div>
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-gray-600">{member.competition}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-green text-white rounded-xl p-8">
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
        </div>
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
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              ) : (
                <Users className="w-12 h-12 text-gray-400" />
              )}
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