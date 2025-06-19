'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Camera,
  Heart,
  MessageCircle,
  Search,
  Upload,
  Filter,
  Calendar,
  User,
  Tag,
  X,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';
import galleryData from '@/data/gallery.json';
import { GalleryPhoto } from '@/types';

const { photos, categories } = galleryData;

const categoryColors = {
  default: 'bg-gray-100 text-gray-800',
  primary: 'bg-blue-100 text-blue-800', 
  accent: 'bg-green-100 text-green-800',
  secondary: 'bg-purple-100 text-purple-800',
  success: 'bg-emerald-100 text-emerald-800',
};

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredPhotos = useMemo(() => {
    let filtered = photos;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(photo => photo.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(photo => 
        photo.caption.toLowerCase().includes(query) ||
        photo.tags.some(tag => tag.toLowerCase().includes(query)) ||
        photo.author.toLowerCase().includes(query) ||
        photo.rt.toLowerCase().includes(query)
      );
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [selectedCategory, searchQuery]);

  const openPhotoModal = (photo: GalleryPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      : (currentPhotoIndex + 1) % filteredPhotos.length;
    
    setCurrentPhotoIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Camera className="w-8 h-8 text-primary-500" />
            <h1 className="text-4xl font-bold text-gray-900">
              Galeri Kegiatan
            </h1>
            <Camera className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Dokumentasi persiapan dan kegiatan HUT RI Ke-80 RW IX Sidoarjo 
            dengan tema <strong>Lingkungan Hidup dan Penghijauan</strong>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-primary-600">{photos.length}</div>
              <div className="text-sm text-gray-600">Total Foto</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent-600">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Kategori</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-secondary-600">
                {photos.reduce((sum, photo) => sum + photo.likes, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Likes</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-soft">
              <div className="text-2xl font-bold text-success-600">
                {photos.reduce((sum, photo) => sum + photo.comments, 0)}
              </div>
              <div className="text-sm text-gray-600">Komentar</div>
            </div>
          </div>

          {/* Upload Button for Admin */}
          <Button className="bg-gradient-green hover:shadow-green">
            <Upload className="w-4 h-4 mr-2" />
            Upload Foto Baru
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Cari foto berdasarkan caption, tag, atau RT..."
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
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-xs md:text-sm"
                >
                  <span className="mr-1">{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center">
          <div className="text-gray-600">
            Menampilkan <strong>{filteredPhotos.length}</strong> foto
            {selectedCategory !== 'all' && (
              <span> dari kategori <strong>
                {categories.find(c => c.id === selectedCategory)?.name}
              </strong></span>
            )}
            {searchQuery && (
              <span> dengan kata kunci &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
            )}
          </div>
          
          {(selectedCategory !== 'all' || searchQuery) && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              <X className="w-4 h-4 mr-1" />
              Reset Filter
            </Button>
          )}
        </div>

        {/* Photo Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo} 
                onClick={() => openPhotoModal(photo, index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tidak ada foto ditemukan
            </h3>
            <p className="text-gray-600 mb-4">
              Coba ubah filter atau kata kunci pencarian Anda
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Lihat Semua Foto
            </Button>
          </div>
        )}

        {/* Photo Modal */}
        <Dialog open={!!selectedPhoto} onOpenChange={closePhotoModal}>
          <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
            {selectedPhoto && (
              <div className="flex flex-col h-full">
                <DialogHeader className="p-6 pb-0">
                  <div className="flex items-center justify-between">
                    <DialogTitle className="text-lg font-semibold">
                      Foto {currentPhotoIndex + 1} dari {filteredPhotos.length}
                    </DialogTitle>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigatePhoto('prev')}
                        disabled={filteredPhotos.length <= 1}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigatePhoto('next')}
                        disabled={filteredPhotos.length <= 1}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                  {/* Image */}
                  <div className="flex-1 relative bg-black">
                    <Image
                      src={selectedPhoto.url}
                      alt={selectedPhoto.caption}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                  
                  {/* Photo Info */}
                  <div className="w-full md:w-80 p-6 bg-white overflow-y-auto">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {selectedPhoto.caption}
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(selectedPhoto.date).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{selectedPhoto.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span>{selectedPhoto.rt}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge className={categoryColors[
                        categories.find(c => c.id === selectedPhoto.category)?.color as keyof typeof categoryColors || 'default'
                      ]}>
                        {categories.find(c => c.id === selectedPhoto.category)?.icon} {' '}
                        {categories.find(c => c.id === selectedPhoto.category)?.name}
                      </Badge>
                    </div>

                    {selectedPhoto.tags && selectedPhoto.tags.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center space-x-1 mb-2">
                          <Tag className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Tags:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedPhoto.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-4 pt-4 border-t">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm">{selectedPhoto.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{selectedPhoto.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function PhotoCard({ photo, onClick }: { photo: GalleryPhoto; onClick: () => void }) {
  const category = categories.find(c => c.id === photo.category);
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden" onClick={onClick}>
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={photo.thumbnail || photo.url}
          alt={photo.caption}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-3 left-3">
          {category && (
            <Badge className={`${categoryColors[category.color as keyof typeof categoryColors]} text-xs`}>
              {category.icon}
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
            <Heart className="w-3 h-3" />
            <span>{photo.likes}</span>
          </div>
          <div className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
            <MessageCircle className="w-3 h-3" />
            <span>{photo.comments}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {photo.caption}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{photo.author}</span>
          <span>{new Date(photo.date).toLocaleDateString('id-ID')}</span>
        </div>
      </CardContent>
    </Card>
  );
}