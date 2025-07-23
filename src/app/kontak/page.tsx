'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Send, FileText, Clock, Users, AlertCircle, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    type: 'Panitia Utama',
    name: 'Ketua Panitia RT 11',
    phone: '+62 xxx xxxx xxxx',
    whatsapp: '+62 xxx xxxx xxxx',
    email: 'panitia.rt11@example.com',
    role: 'Koordinasi umum dan informasi acara',
    emergency: true,
  },
  {
    type: 'Koordinator Lomba',
    name: 'H. Suleman',
    whatsapp: '+62 xxx xxxx xxxx',
    role: 'Lomba Hias Kampung',
    emergency: false,
  },
  {
    type: 'Koordinator Lomba',
    name: 'Bpk. Yusri',
    whatsapp: '+62 xxx xxxx xxxx',
    role: 'Lomba Bulu Tangkis Keluarga',
    emergency: false,
  },
  {
    type: 'Koordinator Lomba',
    name: 'dr. Edi Subagyo',
    whatsapp: '+62 xxx xxxx xxxx',
    role: 'Parade Jalan Sehat',
    emergency: false,
  },
  {
    type: 'Koordinator Lomba',
    name: 'Ibu Titik W.P',
    whatsapp: '+62 xxx xxxx xxxx',
    role: 'Lomba Bazar',
    emergency: false,
  },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

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
            <Phone className='w-8 h-8 text-primary-500' />
            <h1 className='text-4xl font-bold text-gray-900'>Hubungi Kami</h1>
            <Phone className='w-8 h-8 text-primary-500' />
          </div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Ada pertanyaan atau saran tentang HUT RI Ke-80 RW IX? Jangan ragu untuk menghubungi panitia pelaksana
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center'>
                  <Send className='w-5 h-5 mr-2' />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <Alert className='mb-6 border-green-200 bg-green-50'>
                    <CheckCircle className='h-4 w-4 text-green-600' />
                    <AlertDescription className='text-green-700'>
                      Pesan Anda berhasil dikirim! Tim panitia akan merespons dalam 1x24 jam.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Nama Lengkap *</label>
                      <Input
                        required
                        placeholder='Masukkan nama lengkap'
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>Nomor Telepon *</label>
                      <Input
                        required
                        type='tel'
                        placeholder='+62 xxx xxxx xxxx'
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Email (Opsional)</label>
                    <Input
                      type='email'
                      placeholder='nama@email.com'
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Kategori Pertanyaan *</label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder='Pilih kategori pertanyaan' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='competition'>Lomba & Kompetisi</SelectItem>
                        <SelectItem value='event'>Acara & Jadwal</SelectItem>
                        <SelectItem value='logistics'>Logistik & Akomodasi</SelectItem>
                        <SelectItem value='general'>Pertanyaan Umum</SelectItem>
                        <SelectItem value='complaint'>Keluhan</SelectItem>
                        <SelectItem value='suggestion'>Saran & Masukan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Subjek *</label>
                    <Input
                      required
                      placeholder='Ringkasan singkat pertanyaan Anda'
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Pesan *</label>
                    <Textarea
                      required
                      rows={5}
                      placeholder='Jelaskan pertanyaan atau pesan Anda secara detail...'
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                    <p className='text-xs text-gray-500 mt-1'>Minimal 20 karakter, maksimal 500 karakter</p>
                  </div>

                  <Button type='submit' size='lg' className='w-full bg-gradient-green hover:shadow-green' disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className='w-4 h-4 mr-2' />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className='space-y-6'>
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Kontak Cepat</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                    <Phone className='w-5 h-5 text-blue-600' />
                  </div>
                  <div>
                    <div className='font-medium'>Telepon</div>
                    <div className='text-sm text-gray-600'>+62 xxx xxxx xxxx</div>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                    <MessageCircle className='w-5 h-5 text-green-600' />
                  </div>
                  <div>
                    <div className='font-medium'>WhatsApp</div>
                    <div className='text-sm text-gray-600'>Chat langsung dengan panitia</div>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center'>
                    <Mail className='w-5 h-5 text-purple-600' />
                  </div>
                  <div>
                    <div className='font-medium'>Email</div>
                    <div className='text-sm text-gray-600'>panitia.rwix@gmail.com</div>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center'>
                    <MapPin className='w-5 h-5 text-red-600' />
                  </div>
                  <div>
                    <div className='font-medium'>Alamat</div>
                    <div className='text-sm text-gray-600'>RW IX Desa Wedoro, Waru, Sidoarjo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className='text-lg flex items-center'>
                  <Clock className='w-5 h-5 mr-2' />
                  Jam Layanan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between'>
                    <span>Senin - Jumat</span>
                    <span className='font-medium'>19:00 - 21:00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sabtu - Minggu</span>
                    <span className='font-medium'>08:00 - 12:00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>WhatsApp</span>
                    <span className='font-medium text-green-600'>24 Jam</span>
                  </div>
                </div>

                <Alert className='mt-4'>
                  <AlertCircle className='h-4 w-4' />
                  <AlertDescription className='text-sm'>Respons tercepat melalui WhatsApp. Email akan dibalas dalam 1x24 jam.</AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className='border-red-200 bg-red-50'>
              <CardHeader>
                <CardTitle className='text-lg text-red-700 flex items-center'>
                  <AlertCircle className='w-5 h-5 mr-2' />
                  Kontak Darurat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-red-600 mb-3'>Untuk situasi darurat atau mendesak selama acara:</p>
                <div className='space-y-2'>
                  <div className='font-medium text-red-700'>Ketua Panitia RT 11</div>
                  <div className='text-sm text-red-600'>+62 xxx xxxx xxxx</div>
                  <Badge variant='destructive' className='text-xs'>
                    24 Jam Selama Acara
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact List */}
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8 text-center'>📞 Daftar Kontak Lengkap</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {contactInfo.map((contact, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${contact.emergency ? 'ring-2 ring-red-200' : ''}`}>
                <CardHeader>
                  <div className='flex items-center justify-between'>
                    <Badge variant={contact.emergency ? 'destructive' : 'outline'} className='text-xs'>
                      {contact.type}
                    </Badge>
                    {contact.emergency && <AlertCircle className='w-4 h-4 text-red-500' />}
                  </div>
                  <CardTitle className='text-lg'>{contact.name}</CardTitle>
                  <p className='text-sm text-gray-600'>{contact.role}</p>
                </CardHeader>
                <CardContent>
                  <div className='space-y-2'>
                    {contact.phone && (
                      <div className='flex items-center space-x-2 text-sm'>
                        <Phone className='w-4 h-4 text-blue-500' />
                        <span>{contact.phone}</span>
                      </div>
                    )}
                    {contact.whatsapp && (
                      <div className='flex items-center space-x-2 text-sm'>
                        <MessageCircle className='w-4 h-4 text-green-500' />
                        <span>WhatsApp tersedia</span>
                      </div>
                    )}
                    {contact.email && (
                      <div className='flex items-center space-x-2 text-sm'>
                        <Mail className='w-4 h-4 text-purple-500' />
                        <span className='text-xs'>{contact.email}</span>
                      </div>
                    )}
                  </div>

                  <Button variant='outline' size='sm' className='w-full mt-4'>
                    <MessageCircle className='w-4 h-4 mr-2' />
                    Hubungi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className='mt-16 bg-gradient-nature rounded-xl p-8'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Informasi Tambahan</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left'>
              <div>
                <h3 className='font-semibold text-gray-800 mb-3 flex items-center'>
                  <FileText className='w-4 h-4 mr-2' />
                  Dokumen & Formulir
                </h3>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Formulir pendaftaran lomba</li>
                  <li>• Panduan teknis setiap lomba</li>
                  <li>• Syarat dan ketentuan acara</li>
                  <li>• Template laporan kegiatan RT</li>
                </ul>
              </div>

              <div>
                <h3 className='font-semibold text-gray-800 mb-3 flex items-center'>
                  <Users className='w-4 h-4 mr-2' />
                  Media Sosial
                </h3>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li>• Instagram: @rwix_sidoarjo</li>
                  <li>• Facebook: RW IX Desa Wedoro</li>
                  <li>• WhatsApp Group: RT masing-masing</li>
                  <li>• Website: hutri80-rwix.com</li>
                </ul>
              </div>
            </div>

            <div className='mt-8'>
              <Link href='/panitia'>
                <Button size='lg' className='bg-gradient-green hover:shadow-green'>
                  <Users className='w-5 h-5 mr-2' />
                  Lihat Profil Lengkap Panitia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
