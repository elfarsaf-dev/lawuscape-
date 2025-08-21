import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import type { Property } from "@shared/schema";

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

function createWhatsAppMessage(property: Property): string {
  const baseMessage = `Halo, saya tertarik dengan *${property.name}* di ${property.location}.

*Detail Properti:*
- Nama: ${property.name}
- Lokasi: ${property.location}
- Kapasitas: ${property.capacity}
- Jumlah unit: ${property.units}

*Harga:*
${property.rates.length > 0 
  ? property.rates.map(rate => `- ${rate.label}: Rp ${formatCurrency(rate.price)}`).join('\n')
  : '- Hubungi untuk informasi harga'
}

Bisakah Anda memberikan informasi lebih lanjut tentang ketersediaan dan proses booking?

Terima kasih!`;

  return encodeURIComponent(baseMessage);
}

function openWhatsApp(property: Property) {
  const phoneNumber = "6282241819991";
  const message = createWhatsAppMessage(property);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          data-testid={`img-property-${property.id}`}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-medium text-gray-700" data-testid={`text-units-${property.id}`}>
            {property.units} unit{property.units > 1 ? 's' : ''}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2" data-testid={`text-name-${property.id}`}>
          {property.name}
        </h3>
        <p className="text-gray-600 mb-4 flex items-center" data-testid={`text-location-${property.id}`}>
          <MapPin className="text-primary mr-2 h-4 w-4" />
          {property.location}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Mulai dari</p>
            <p className="text-2xl font-bold text-primary" data-testid={`text-price-${property.id}`}>
              {property.rates.length > 0 ? `Rp ${formatCurrency(Math.min(...property.rates.map(r => r.price)))}` : "Hubungi untuk harga"}
            </p>
            {property.rates.length > 0 && <p className="text-sm text-gray-500">per malam</p>}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Kapasitas</p>
            <p className="font-semibold text-gray-700" data-testid={`text-capacity-${property.id}`}>
              {property.capacity}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() => onSelect(property)}
            variant="outline"
            className="flex-1 py-3 rounded-xl font-medium transition-all duration-200"
            data-testid={`button-detail-${property.id}`}
          >
            Lihat Detail
          </Button>
          <Button
            onClick={() => openWhatsApp(property)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
            data-testid={`button-whatsapp-${property.id}`}
          >
            <MessageCircle className="w-4 h-4" />
            Booking
          </Button>
        </div>
      </div>
    </div>
  );
}
