'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { 
  HelpCircle, 
  Search, 
  Trophy, 
  Calendar, 
  MapPin, 
  Users,
  Phone,
  MessageCircle,
  Filter,
  Leaf,
  Zap,
  ShoppingBag
} from 'lucide-react';
import competitionFAQs from '@/data/faq.json';
import { FAQItem } from '@/types';

// Competition FAQs are now loaded from external JSON file
const otherFaqData: FAQItem[] = [
  {
    id: 'event-1',
    category: 'event',
    question: 'Kapan dan dimana acara HUT RI Ke-80 dilaksanakan?',
    answer: 'Acara dilaksanakan pada 30-31 Agustus 2025 di area RW IX Desa Wedoro, Waru, Sidoarjo. Hari pertama untuk lomba dan hari kedua untuk malam puncak.',
    tags: ['jadwal', 'lokasi', 'tanggal'],
    featured: true
  },
  {
    id: 'event-2',
    category: 'event',
    question: 'Apa tema acara tahun ini?',
    answer: 'Tema tahun ini adalah "Lingkungan Hidup dan Penghijauan". Semua kegiatan dan lomba diarahkan untuk meningkatkan kesadaran tentang pentingnya menjaga lingkungan.',
    tags: ['tema', 'lingkungan', 'penghijauan'],
    featured: true
  },
  {
    id: 'event-3',
    category: 'event',
    question: 'Bagaimana dengan doorprize malam puncak?',
    answer: 'Doorprize dibagi dalam 3 kategori dengan total hadiah senilai lebih dari Rp 10.000.000. Tiket doorprize didistribusikan melalui RT masing-masing kepada warga yang berpartisipasi aktif.',
    tags: ['doorprize', 'hadiah', 'malam-puncak'],
    featured: false
  },
  {
    id: 'logistics-1',
    category: 'logistics',
    question: 'Bagaimana sistem parkir selama acara?',
    answer: 'Area parkir disediakan di beberapa titik sekitar lokasi acara. Panitia akan mengatur petugas parkir dan penunjuk arah. Disarankan untuk carpooling atau menggunakan transportasi umum.',
    tags: ['parkir', 'transportasi', 'logistik'],
    featured: false
  },
  {
    id: 'logistics-2',
    category: 'logistics',
    question: 'Apakah disediakan konsumsi untuk peserta?',
    answer: 'Konsumsi ringan disediakan untuk peserta lomba. Untuk malam puncak, tersedia stand makanan dari lomba bazar. Warga juga diperbolehkan membawa bekal sendiri.',
    tags: ['konsumsi', 'makanan', 'bazar'],
    featured: false
  },
  {
    id: 'general-1',
    category: 'general',
    question: 'Siapa yang bisa berpartisipasi dalam acara ini?',
    answer: 'Semua warga RW IX dan keluarga yang tinggal di area RW IX dapat berpartisipasi. Untuk lomba tertentu, ada pembagian kategori sesuai usia dan jenis lomba.',
    tags: ['partisipasi', 'warga', 'keluarga'],
    featured: false
  },
  {
    id: 'general-2',
    category: 'general',
    question: 'Bagaimana jika cuaca hujan?',
    answer: 'Acara tetap berlangsung dengan penyesuaian. Lomba indoor akan dipindah ke aula, sedangkan acara outdoor memiliki rencana cadangan tempat. Pantau informasi terbaru dari panitia.',
    tags: ['cuaca', 'hujan', 'kontingensi'],
    featured: false
  },
  {
    id: 'contact-1',
    category: 'general',
    question: 'Bagaimana cara menghubungi panitia?',
    answer: 'Panitia dapat dihubungi melalui: WhatsApp, Telepon, atau Email. Untuk pertanyaan lomba spesifik, dapat langsung menghubungi koordinator lomba masing-masing.',
    tags: ['kontak', 'panitia', 'komunikasi'],
    featured: true
  }
];

// Combine all FAQ data
const faqData: FAQItem[] = [...(competitionFAQs.competition as FAQItem[]), ...otherFaqData];

const categories = [
  { id: 'all', name: 'Semua', icon: HelpCircle, color: 'default' },
  { id: 'competition', name: 'Lomba', icon: Trophy, color: 'primary' },
  { id: 'event', name: 'Acara', icon: Calendar, color: 'accent' },
  { id: 'logistics', name: 'Logistik', icon: MapPin, color: 'secondary' },
  { id: 'general', name: 'Umum', icon: Users, color: 'success' }
];

const lombaCategories = [
  { id: 'all-lomba', name: 'Semua Lomba', icon: Trophy, color: 'default' },
  { id: 'general', name: 'Umum Lomba', icon: HelpCircle, color: 'secondary' },
  { id: 'lingkungan', name: 'Lingkungan', icon: Leaf, color: 'success' },
  { id: 'badminton', name: 'Badminton', icon: Zap, color: 'primary' },
  { id: 'jalan-sehat', name: 'Jalan Sehat', icon: MapPin, color: 'accent' },
  { id: 'bazaar', name: 'Bazaar', icon: ShoppingBag, color: 'warning' }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLomba, setSelectedLomba] = useState('all-lomba');

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    // If competition category is selected, also filter by lomba type
    const matchesLomba = selectedCategory !== 'competition' || 
      selectedLomba === 'all-lomba' || 
      (faq.lomba && faq.lomba === selectedLomba);
    
    return matchesSearch && matchesCategory && matchesLomba;
  });

  const featuredFAQs = faqData.filter(faq => faq.featured);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary-500" />
            <h1 className="text-4xl font-bold text-gray-900">
              Tanya Jawab (FAQ)
            </h1>
            <HelpCircle className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang 
            HUT RI Ke-80 RW IX Sidoarjo
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari pertanyaan atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Filter:</span>
            </div>
          </div>

          {/* Category Filters */}
          <Tabs value={selectedCategory} onValueChange={(value) => {
            setSelectedCategory(value);
            if (value !== 'competition') {
              setSelectedLomba('all-lomba');
            }
          }} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs md:text-sm"
                >
                  <category.icon className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Lomba Sub-filters (only show when competition is selected) */}
          {selectedCategory === 'competition' && (
            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-3 flex items-center">
                <Trophy className="w-4 h-4 mr-2" />
                Filter berdasarkan jenis lomba:
              </div>
              <Tabs value={selectedLomba} onValueChange={setSelectedLomba} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                  {lombaCategories.map((lomba) => (
                    <TabsTrigger 
                      key={lomba.id} 
                      value={lomba.id}
                      className="text-xs md:text-sm"
                    >
                      <lomba.icon className="w-4 h-4 mr-1" />
                      <span className="hidden sm:inline">{lomba.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          )}
        </div>

        {/* Featured FAQs */}
        {searchQuery === '' && selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              ⭐ Pertanyaan Populer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredFAQs.map((faq) => (
                <Card key={faq.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg leading-relaxed pr-4">
                        {faq.question}
                      </CardTitle>
                      <div className="flex flex-col space-y-1">
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          {categories.find(c => c.id === faq.category)?.name}
                        </Badge>
                        {faq.lomba && faq.lomba !== 'general' && (
                          <Badge variant="default" className="text-xs">
                            {lombaCategories.find(l => l.id === faq.lomba)?.name}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {faq.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-gray-600">
            Menampilkan <strong>{filteredFAQs.length}</strong> pertanyaan
            {selectedCategory !== 'all' && (
              <span> dalam kategori <strong>
                {categories.find(c => c.id === selectedCategory)?.name}
              </strong></span>
            )}
            {selectedCategory === 'competition' && selectedLomba !== 'all-lomba' && (
              <span> - <strong>
                {lombaCategories.find(l => l.id === selectedLomba)?.name}
              </strong></span>
            )}
            {searchQuery && (
              <span> dengan kata kunci &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
            )}
          </div>
          
          {(selectedCategory !== 'all' || selectedLomba !== 'all-lomba' || searchQuery) && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLomba('all-lomba');
                setSearchQuery('');
              }}
            >
              Reset Filter
            </Button>
          )}
        </div>

        {/* FAQ Accordion */}
        {filteredFAQs.length > 0 ? (
          <Card>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between w-full text-left pr-4">
                        <span className="font-medium">{faq.question}</span>
                        <div className="flex space-x-2 ml-4">
                          {faq.featured && (
                            <Badge variant="secondary" className="text-xs">
                              Populer
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {categories.find(c => c.id === faq.category)?.name}
                          </Badge>
                          {faq.lomba && faq.lomba !== 'general' && (
                            <Badge variant="default" className="text-xs">
                              {lombaCategories.find(l => l.id === faq.lomba)?.name}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center py-16">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tidak ada pertanyaan ditemukan
            </h3>
            <p className="text-gray-600 mb-4">
              Coba ubah kata kunci pencarian atau kategori filter Anda
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLomba('all-lomba');
                setSearchQuery('');
              }}
            >
              Lihat Semua FAQ
            </Button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-green text-white rounded-xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Tim panitia siap membantu menjawab pertanyaan Anda seputar acara HUT RI Ke-80
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm opacity-80">
                  Chat langsung dengan panitia untuk respons cepat
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Telepon</h3>
                <p className="text-sm opacity-80">
                  Hubungi langsung untuk pertanyaan mendetail
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/panitia">
                <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  <Users className="w-5 h-5 mr-2" />
                  Kontak Panitia
                </Button>
              </Link>
              <Link href="/kontak">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Kirim Pertanyaan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}