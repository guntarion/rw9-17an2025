/**
 * Company Data Utilities
 * Functions to load and manipulate company information from JSON files
 */

// Import company data from JSON file
import companyData from '../../public/data/company.json';

// TypeScript interfaces for type safety
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  employees: string;
  location: string;
  logo: string;
  hero_image: string;
}

export interface ContactInfo {
  whatsapp: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  business_hours: {
    monday_friday: string;
    saturday: string;
    sunday: string;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  name: string;
  description: string;
  image: string;
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
  products: string[];
}

export interface WhyChooseUs {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface SocialMedia {
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
}

export interface BusinessInfo {
  established: string;
  legal_name: string;
  tax_id: string;
  business_license: string;
  bank_account: {
    bank: string;
    account_name: string;
    account_number: string;
  };
}

export interface ShippingInfo {
  coverage: string;
  methods: string[];
  free_shipping: {
    minimum_order: number;
    areas: string[];
  };
  processing_time: string;
  packaging: string;
}

export interface CompanyData {
  company: CompanyInfo;
  contact: ContactInfo;
  services: Service[];
  certifications: Certification[];
  industries_served: Industry[];
  why_choose_us: WhyChooseUs[];
  testimonials: Testimonial[];
  social_media: SocialMedia;
  business_info: BusinessInfo;
  shipping_info: ShippingInfo;
}

/**
 * Get company information
 */
export const getCompanyInfo = (): CompanyInfo => {
  return companyData.company;
};

/**
 * Get contact information
 */
export const getContactInfo = (): ContactInfo => {
  return companyData.contact;
};

/**
 * Get all services
 */
export const getServices = (): Service[] => {
  return companyData.services;
};

/**
 * Get all certifications
 */
export const getCertifications = (): Certification[] => {
  return companyData.certifications;
};

/**
 * Get industries served
 */
export const getIndustriesServed = (): Industry[] => {
  return companyData.industries_served;
};

/**
 * Get why choose us points
 */
export const getWhyChooseUs = (): WhyChooseUs[] => {
  return companyData.why_choose_us;
};

/**
 * Get all testimonials
 */
export const getTestimonials = (): Testimonial[] => {
  return companyData.testimonials;
};

/**
 * Get featured testimonials (with high ratings)
 */
export const getFeaturedTestimonials = (minRating: number = 5): Testimonial[] => {
  return companyData.testimonials.filter(testimonial => testimonial.rating >= minRating);
};

/**
 * Get testimonial by ID
 */
export const getTestimonialById = (id: string): Testimonial | undefined => {
  return companyData.testimonials.find(testimonial => testimonial.id === id);
};

/**
 * Get social media links
 */
export const getSocialMedia = (): SocialMedia => {
  return companyData.social_media;
};

/**
 * Get business information
 */
export const getBusinessInfo = (): BusinessInfo => {
  return companyData.business_info;
};

/**
 * Get shipping information
 */
export const getShippingInfo = (): ShippingInfo => {
  return companyData.shipping_info;
};

/**
 * Get formatted company address
 */
export const getFormattedAddress = (): string => {
  const { address } = companyData.contact;
  return `${address.street}, ${address.city} ${address.postal_code}, ${address.country}`;
};

/**
 * Get WhatsApp link for general contact
 */
export const getWhatsAppContactLink = (customMessage?: string): string => {
  const defaultMessage = "Halo, saya ingin bertanya tentang produk safety apparel.";
  const message = customMessage || defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${companyData.contact.whatsapp}?text=${encodedMessage}`;
};

/**
 * Format phone number for display
 */
export const getFormattedPhone = (): string => {
  return companyData.contact.phone;
};

/**
 * Get Google Maps link for company location
 */
export const getGoogleMapsLink = (): string => {
  const address = getFormattedAddress();
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};

/**
 * Check if currently within business hours
 */
export const isWithinBusinessHours = (): boolean => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const hour = now.getHours();
  
  // Business hours: Mon-Fri 8-17, Sat 8-12, Sun closed
  if (day === 0) return false; // Sunday
  if (day >= 1 && day <= 5) return hour >= 8 && hour < 17; // Monday-Friday
  if (day === 6) return hour >= 8 && hour < 12; // Saturday
  
  return false;
};

/**
 * Get business hours status message
 */
export const getBusinessHoursStatus = (): {
  isOpen: boolean;
  message: string;
  nextOpenTime?: string;
} => {
  const isOpen = isWithinBusinessHours();
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  
  if (isOpen) {
    return {
      isOpen: true,
      message: "Kami sedang buka! Tim customer service siap membantu Anda."
    };
  }
  
  // Determine next open time
  let nextOpenTime = "";
  if (day === 0) { // Sunday
    nextOpenTime = "Senin pukul 08:00";
  } else if (day >= 1 && day <= 5 && hour >= 17) { // Weekday after hours
    nextOpenTime = "Besok pukul 08:00";
  } else if (day === 6 && hour >= 12) { // Saturday after hours
    nextOpenTime = "Senin pukul 08:00";
  } else if ((day >= 1 && day <= 5 && hour < 8) || (day === 6 && hour < 8)) { // Before opening
    nextOpenTime = "Hari ini pukul 08:00";
  }
  
  return {
    isOpen: false,
    message: "Kami sedang tutup. Pesan WhatsApp Anda akan dijawab saat jam operasional.",
    nextOpenTime
  };
};

/**
 * Get contact card data
 */
export const getContactCard = () => {
  const company = getCompanyInfo();
  const contact = getContactInfo();
  const businessStatus = getBusinessHoursStatus();
  
  return {
    companyName: company.name,
    tagline: company.tagline,
    phone: contact.phone,
    whatsapp: contact.whatsapp,
    email: contact.email,
    address: getFormattedAddress(),
    businessHours: contact.business_hours,
    isOpen: businessStatus.isOpen,
    statusMessage: businessStatus.message,
    whatsappLink: getWhatsAppContactLink(),
    mapsLink: getGoogleMapsLink()
  };
};

/**
 * Get company statistics for about page
 */
export const getCompanyStats = () => {
  const company = getCompanyInfo();
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(company.founded);
  
  return {
    yearsInBusiness,
    employeeRange: company.employees,
    industriesServed: companyData.industries_served.length,
    certificationsHeld: companyData.certifications.length,
    servicesOffered: companyData.services.length,
    customerTestimonials: companyData.testimonials.length
  };
};

/**
 * Get SEO data for company pages
 */
export const getCompanySEO = () => {
  const company = getCompanyInfo();
  
  return {
    siteName: company.name,
    siteTagline: company.tagline,
    siteDescription: company.description,
    logo: company.logo,
    address: getFormattedAddress(),
    phone: companyData.contact.phone,
    email: companyData.contact.email,
    socialMedia: companyData.social_media,
    businessHours: companyData.contact.business_hours
  };
};

/**
 * Search industries by product type
 */
export const getIndustriesByProduct = (productType: string): Industry[] => {
  return companyData.industries_served.filter(industry => 
    industry.products.includes(productType.toLowerCase())
  );
};

/**
 * Get random testimonials for display
 */
export const getRandomTestimonials = (count: number = 3): Testimonial[] => {
  const testimonials = [...companyData.testimonials];
  const shuffled = testimonials.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Format business hours for display
 */
export const getFormattedBusinessHours = () => {
  const hours = companyData.contact.business_hours;
  return {
    weekdays: `Senin - Jumat: ${hours.monday_friday}`,
    saturday: `Sabtu: ${hours.saturday}`,
    sunday: `Minggu: ${hours.sunday}`
  };
};

/**
 * Check if free shipping is available for area and order value
 */
export const checkFreeShipping = (area: string, orderValue: number): boolean => {
  const { free_shipping } = companyData.shipping_info;
  return orderValue >= free_shipping.minimum_order && 
         free_shipping.areas.some(freeArea => 
           area.toLowerCase().includes(freeArea.toLowerCase())
         );
};

/**
 * Get shipping methods as formatted list
 */
export const getShippingMethods = (): string => {
  return companyData.shipping_info.methods.join(", ");
};