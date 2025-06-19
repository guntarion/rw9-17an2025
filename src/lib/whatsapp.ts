/**
 * WhatsApp Integration Utilities
 * Simple click-to-chat implementation for safety garment business
 */

// WhatsApp business number - should be set in environment variables
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";

/**
 * Generate WhatsApp click-to-chat URL
 * @param message - Pre-filled message for WhatsApp chat
 * @returns WhatsApp URL with encoded message
 */
export const generateWhatsAppLink = (message: string): string => {
  if (!WHATSAPP_NUMBER) {
    console.warn("WhatsApp number is not configured in environment variables");
    return "#";
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Pre-defined WhatsApp message templates
 */
export const whatsappMessages = {
  // General inquiries
  generalInquiry: "Halo, saya ada pertanyaan tentang produk safety apparel. Mohon informasinya.",
  
  // Quote requests
  quoteRequest: "Halo, saya ingin minta penawaran untuk pembelian seragam safety dalam jumlah besar. Mohon bantuan untuk quotation.",
  
  // Custom orders
  customOrder: "Halo, saya tertarik untuk custom order seragam dengan logo perusahaan. Bisa konsultasi design dan harga?",
  
  // Consultation
  consultation: "Halo, saya butuh konsultasi untuk pemilihan seragam safety yang tepat untuk industri kami. Bisa dibantu?",
  
  // Bulk orders
  bulkOrderInquiry: "Halo, saya ingin order dalam jumlah besar untuk perusahaan. Bisa kasih penawaran terbaik?",

  // Product-specific inquiry
  productInquiry: (productName: string) => 
    `Halo, saya tertarik dengan produk ${productName}. Bisa info detail spesifikasi dan harga?`,

  // Bulk order for specific product
  bulkOrder: (productName: string, quantity: number) => 
    `Halo, saya ingin order ${productName} sebanyak ${quantity} pcs. Bisa kasih penawaran terbaik dan lead time?`,

  // Category inquiry
  categoryInquiry: (categoryName: string) => 
    `Halo, saya butuh informasi tentang kategori ${categoryName}. Mohon info produk dan harga.`,

  // Industry-specific inquiry
  industryInquiry: (industryName: string) => 
    `Halo, saya dari industri ${industryName}. Bisa rekomendasi produk safety apparel yang sesuai kebutuhan kami?`,

  // Custom message generator
  customMessage: (productName?: string, industry?: string, quantity?: string, customNote?: string) => {
    let message = "Halo, saya tertarik dengan produk safety apparel.";
    
    if (productName) {
      message += ` Khususnya untuk ${productName}.`;
    }
    
    if (industry) {
      message += ` Perusahaan kami bergerak di bidang ${industry}.`;
    }
    
    if (quantity) {
      message += ` Kebutuhan sekitar ${quantity} pcs.`;
    }
    
    if (customNote) {
      message += ` ${customNote}`;
    }
    
    message += " Mohon informasi detail dan penawaran terbaik.";
    
    return message;
  }
};

/**
 * WhatsApp message for different business scenarios
 */
export const businessScenarios = {
  // B2B scenarios
  b2b: {
    newCustomer: "Halo, kami perusahaan baru yang membutuhkan supplier seragam safety. Bisa presentasi produk dan layanan?",
    existingCustomer: "Halo, kami customer lama yang ingin repeat order. Bisa info ketersediaan stock dan harga update?",
    urgentOrder: "Halo, kami butuh urgent order seragam safety. Bisa bantu untuk pengiriman express?",
    sampleRequest: "Halo, sebelum order besar, kami ingin request sample produk dulu. Bagaimana prosedurnya?"
  },

  // B2C scenarios  
  b2c: {
    individualBuyer: "Halo, saya ingin beli seragam safety untuk kebutuhan pribadi. Bisa info harga retail?",
    smallQuantity: "Halo, saya butuh seragam safety dalam jumlah kecil (kurang dari 10 pcs). Bisa dilayani?",
    giftPurchase: "Halo, saya ingin beli seragam safety sebagai hadiah. Bisa bantuan untuk pilih yang tepat?"
  },

  // Industry-specific scenarios
  industry: {
    construction: "Halo, kami kontraktor konstruksi yang butuh seragam safety sesuai standar proyek. Bisa konsultasi?",
    mining: "Halo, untuk industri pertambangan, produk mana yang paling recommended untuk kondisi extreme?",
    manufacturing: "Halo, pabrik kami butuh seragam untuk 200+ karyawan. Bisa atur site visit untuk survey kebutuhan?",
    oilgas: "Halo, untuk industri migas, kami butuh seragam dengan standar anti api. Produk mana yang certified?"
  }
};

/**
 * Generate context-aware WhatsApp link based on user journey
 */
export const generateContextualWhatsAppLink = (context: {
  source?: 'homepage' | 'product' | 'category' | 'blog' | 'contact';
  productId?: string;
  categoryId?: string;
  industry?: string;
  userType?: 'b2b' | 'b2c';
}) => {
  let message = "";

  switch (context.source) {
    case 'homepage':
      message = whatsappMessages.generalInquiry;
      break;
    case 'product':
      message = context.productId 
        ? whatsappMessages.productInquiry(context.productId)
        : whatsappMessages.generalInquiry;
      break;
    case 'category':
      message = context.categoryId
        ? whatsappMessages.categoryInquiry(context.categoryId)
        : whatsappMessages.generalInquiry;
      break;
    case 'blog':
      message = whatsappMessages.consultation;
      break;
    case 'contact':
      message = context.userType === 'b2b' 
        ? whatsappMessages.quoteRequest
        : whatsappMessages.generalInquiry;
      break;
    default:
      message = whatsappMessages.generalInquiry;
  }

  return generateWhatsAppLink(message);
};

/**
 * Floating WhatsApp widget configuration
 */
export const floatingWhatsAppConfig = {
  defaultMessage: whatsappMessages.generalInquiry,
  position: 'bottom-right' as const,
  buttonText: "Chat WhatsApp",
  welcomeMessage: "Halo! Ada yang bisa kami bantu?",
  responseTime: "Biasanya membalas dalam 1 jam",
  businessHours: {
    monday: "08:00-17:00",
    tuesday: "08:00-17:00", 
    wednesday: "08:00-17:00",
    thursday: "08:00-17:00",
    friday: "08:00-17:00",
    saturday: "08:00-12:00",
    sunday: "Tutup"
  }
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Analytics tracking for WhatsApp clicks
 */
export const trackWhatsAppClick = (context: {
  source: string;
  productId?: string;
  categoryId?: string;
  messageType?: string;
}) => {
  // This will be useful for tracking conversion rates
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: context.source,
      custom_parameter_1: context.productId || '',
      custom_parameter_2: context.categoryId || '',
      custom_parameter_3: context.messageType || 'general'
    });
  }
  
  console.log('WhatsApp click tracked:', context);
};

/**
 * Utility to check if WhatsApp is available on device
 */
export const isWhatsAppAvailable = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  
  return isMobile || window.location.protocol === 'https:';
};

/**
 * Format phone number for WhatsApp
 */
export const formatWhatsAppNumber = (phoneNumber: string): string => {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Add country code if not present
  if (cleaned.startsWith('08')) {
    return '62' + cleaned.substring(1);
  }
  
  if (cleaned.startsWith('8')) {
    return '62' + cleaned;
  }
  
  if (!cleaned.startsWith('62')) {
    return '62' + cleaned;
  }
  
  return cleaned;
};

/**
 * Get business hours status
 */
export const getBusinessHoursStatus = (): {
  isOpen: boolean;
  nextOpenTime?: string;
  message: string;
} => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const hour = now.getHours();
  
  // Business hours: Mon-Fri 8-17, Sat 8-12, Sun closed
  const isWeekday = day >= 1 && day <= 5;
  const isSaturday = day === 6;
  const isSunday = day === 0;
  
  if (isSunday) {
    return {
      isOpen: false,
      nextOpenTime: "Senin 08:00",
      message: "Kami tutup hari ini. Pesan Anda akan dibalas pada hari kerja."
    };
  }
  
  if (isWeekday && hour >= 8 && hour < 17) {
    return {
      isOpen: true,
      message: "Kami sedang online! Pesan akan segera dibalas."
    };
  }
  
  if (isSaturday && hour >= 8 && hour < 12) {
    return {
      isOpen: true,
      message: "Kami sedang online! Pesan akan segera dibalas."
    };
  }
  
  // Outside business hours
  let nextOpenTime = "";
  if (isWeekday && hour >= 17) {
    nextOpenTime = "Besok 08:00";
  } else if (isSaturday && hour >= 12) {
    nextOpenTime = "Senin 08:00";
  } else if (isWeekday && hour < 8) {
    nextOpenTime = "Hari ini 08:00";
  } else if (isSaturday && hour < 8) {
    nextOpenTime = "Hari ini 08:00";
  }
  
  return {
    isOpen: false,
    nextOpenTime,
    message: "Kami sedang offline. Pesan Anda akan dibalas saat jam kerja."
  };
};