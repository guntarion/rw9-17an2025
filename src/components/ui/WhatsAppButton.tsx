/**
 * WhatsApp Button Component
 * Reusable WhatsApp integration component for safety garment website
 */

import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { generateWhatsAppLink, trackWhatsAppClick } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message: string;
  className?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children?: React.ReactNode;
  trackingContext?: {
    source: string;
    productId?: string;
    categoryId?: string;
    messageType?: string;
  };
  showIcon?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

/**
 * WhatsApp SVG Icon Component
 */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.686"/>
  </svg>
);

/**
 * Main WhatsApp Button Component
 */
export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  className,
  variant = 'default',
  size = 'default',
  children,
  trackingContext,
  showIcon = true,
  fullWidth = false,
  disabled = false
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Track the click for analytics
    if (trackingContext) {
      trackWhatsAppClick(trackingContext);
    }
    
    // Generate WhatsApp link and open
    const whatsappUrl = generateWhatsAppLink(message);
    if (whatsappUrl !== '#') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "transition-all duration-200",
        variant === 'default' && "bg-green-600 hover:bg-green-700 text-white",
        fullWidth && "w-full",
        className
      )}
      variant={variant === 'default' ? 'default' : variant}
      size={size}
      disabled={disabled}
    >
      {showIcon && (
        <WhatsAppIcon className={cn(
          "mr-2",
          size === 'sm' ? "w-4 h-4" : size === 'lg' ? "w-6 h-6" : "w-5 h-5"
        )} />
      )}
      {children || "Chat WhatsApp"}
    </Button>
  );
};

/**
 * Floating WhatsApp Button Component
 */
interface FloatingWhatsAppButtonProps {
  message?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  showTooltip?: boolean;
  className?: string;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  message = "Halo, saya ingin bertanya tentang produk safety apparel.",
  position = 'bottom-right',
  showTooltip = true,
  className
}) => {
  const [showTooltip2, setShowTooltip2] = React.useState(false);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const handleClick = () => {
    trackWhatsAppClick({ source: 'floating_button', messageType: 'general' });
    const whatsappUrl = generateWhatsAppLink(message);
    if (whatsappUrl !== '#') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={cn("fixed z-50", positionClasses[position], className)}>
      {/* Tooltip */}
      {showTooltip && showTooltip2 && (
        <div className="absolute bottom-full mb-2 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Ada yang bisa kami bantu?
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      )}
      
      {/* Main Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip2(true)}
        onMouseLeave={() => setShowTooltip2(false)}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Chat via WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75 group-hover:opacity-0"></div>
      </button>
    </div>
  );
};

/**
 * Product-specific WhatsApp Button
 */
interface ProductWhatsAppButtonProps {
  productName: string;
  productId: string;
  className?: string;
  variant?: 'default' | 'outline';
  fullWidth?: boolean;
}

export const ProductWhatsAppButton: React.FC<ProductWhatsAppButtonProps> = ({
  productName,
  productId,
  className,
  variant = 'default',
  fullWidth = false
}) => {
  const message = `Halo, saya tertarik dengan produk ${productName}. Bisa info detail spesifikasi dan harga terbaik?`;

  return (
    <WhatsAppButton
      message={message}
      className={className}
      variant={variant}
      fullWidth={fullWidth}
      trackingContext={{
        source: 'product_page',
        productId: productId,
        messageType: 'product_inquiry'
      }}
    >
      Tanya via WhatsApp
    </WhatsAppButton>
  );
};

/**
 * Quote Request WhatsApp Button
 */
interface QuoteWhatsAppButtonProps {
  productName?: string;
  quantity?: number;
  className?: string;
  fullWidth?: boolean;
}

export const QuoteWhatsAppButton: React.FC<QuoteWhatsAppButtonProps> = ({
  productName,
  quantity,
  className,
  fullWidth = false
}) => {
  let message = "Halo, saya ingin minta penawaran untuk pembelian seragam safety dalam jumlah besar.";
  
  if (productName && quantity) {
    message = `Halo, saya ingin minta penawaran untuk ${productName} sebanyak ${quantity} pcs. Mohon penawaran terbaik.`;
  } else if (productName) {
    message = `Halo, saya ingin minta penawaran untuk ${productName} dalam jumlah besar. Mohon penawaran terbaik.`;
  }

  return (
    <WhatsAppButton
      message={message}
      className={cn("bg-blue-600 hover:bg-blue-700", className)}
      fullWidth={fullWidth}
      trackingContext={{
        source: 'quote_request',
        productId: productName,
        messageType: 'bulk_quote'
      }}
    >
      Minta Penawaran
    </WhatsAppButton>
  );
};

/**
 * Custom Order WhatsApp Button
 */
interface CustomOrderWhatsAppButtonProps {
  className?: string;
  fullWidth?: boolean;
}

export const CustomOrderWhatsAppButton: React.FC<CustomOrderWhatsAppButtonProps> = ({
  className,
  fullWidth = false
}) => {
  const message = "Halo, saya tertarik untuk custom order seragam dengan logo perusahaan. Bisa konsultasi design dan harga?";

  return (
    <WhatsAppButton
      message={message}
      className={cn("bg-purple-600 hover:bg-purple-700", className)}
      fullWidth={fullWidth}
      trackingContext={{
        source: 'custom_order',
        messageType: 'custom_design'
      }}
    >
      Custom Order
    </WhatsAppButton>
  );
};

/**
 * Consultation WhatsApp Button
 */
interface ConsultationWhatsAppButtonProps {
  industry?: string;
  className?: string;
  fullWidth?: boolean;
}

export const ConsultationWhatsAppButton: React.FC<ConsultationWhatsAppButtonProps> = ({
  industry,
  className,
  fullWidth = false
}) => {
  let message = "Halo, saya butuh konsultasi untuk pemilihan seragam safety yang tepat untuk perusahaan kami.";
  
  if (industry) {
    message = `Halo, kami dari industri ${industry} dan butuh konsultasi untuk pemilihan seragam safety yang tepat. Bisa dibantu?`;
  }

  return (
    <WhatsAppButton
      message={message}
      className={cn("bg-orange-600 hover:bg-orange-700", className)}
      variant="outline"
      fullWidth={fullWidth}
      trackingContext={{
        source: 'consultation',
        messageType: 'consultation_request'
      }}
    >
      Konsultasi Gratis
    </WhatsAppButton>
  );
};

/**
 * Bulk Order WhatsApp Button Group
 */
interface BulkOrderButtonGroupProps {
  productName?: string;
  className?: string;
}

export const BulkOrderButtonGroup: React.FC<BulkOrderButtonGroupProps> = ({
  productName,
  className
}) => {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <ProductWhatsAppButton
        productName={productName || "Produk Safety"}
        productId={productName || "general"}
        fullWidth
      />
      <QuoteWhatsAppButton
        productName={productName}
        fullWidth
      />
    </div>
  );
};

// Export all components
export default WhatsAppButton;