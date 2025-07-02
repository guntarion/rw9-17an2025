interface TrackingContext {
  source: string;
  productId?: string;
  categoryId?: string;
  messageType?: string;
}

// TODO: Pindahkan nomor telepon ke variabel lingkungan
const hardcodedPhoneNumber = '6281234567890'; // Ganti dengan nomor telepon yang benar

export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${hardcodedPhoneNumber}?text=${encodedMessage}`;
};

export const trackWhatsAppClick = (context: TrackingContext) => {
  // Fungsi ini dapat diintegrasikan dengan layanan analitik seperti Google Analytics
  // Untuk saat ini, kita hanya akan mencatatnya di konsol
  console.log('WhatsApp button clicked with context:', context);
  // Contoh integrasi dengan GTM/GA (jika sudah di-setup)
  /*
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'whatsapp_click',
      ...context
    });
  }
  */
};