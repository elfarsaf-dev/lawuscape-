import { X, Users, Home, Check, AlertTriangle, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import type { Property } from "@shared/schema";

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
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

*Fasilitas:*
${property.facilities.slice(0, 10).map(facility => `- ${facility}`).join('\n')}
${property.facilities.length > 10 ? `- Dan ${property.facilities.length - 10} fasilitas lainnya` : ''}

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

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
      onClick={handleBackdropClick}
      data-testid="modal-backdrop"
    >
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
          <div className="p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800" data-testid="modal-title">
                  {property.name}
                </h3>
                <p className="text-gray-600 mt-1" data-testid="modal-location">
                  {property.location}
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                data-testid="button-close-modal"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl"
                  data-testid="modal-image"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                {/* Pricing */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Harga per Malam</h4>
                  <div className="space-y-2">
                    {property.rates.length > 0 ? (
                      property.rates.map((rate, index) => (
                        <div key={index} className="flex justify-between items-center" data-testid={`modal-price-${index}`}>
                          <span className="text-gray-600">{rate.label}:</span>
                          <span className="font-bold text-gray-800">Rp {formatCurrency(rate.price)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <span className="text-lg font-semibold text-gray-700">Hubungi untuk informasi harga</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Capacity & Units */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <Users className="text-blue-600 h-8 w-8 mb-2 mx-auto" />
                    <p className="text-sm text-blue-600 font-medium">Kapasitas</p>
                    <p className="text-lg font-bold text-blue-800" data-testid="modal-capacity">
                      {property.capacity}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <Home className="text-green-600 h-8 w-8 mb-2 mx-auto" />
                    <p className="text-sm text-green-600 font-medium">Unit Tersedia</p>
                    <p className="text-lg font-bold text-green-800" data-testid="modal-units">
                      {property.units} unit{property.units > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Check-in/out */}
                <div className="bg-yellow-50 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Check-in & Check-out
                  </h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-yellow-700" data-testid="modal-checkin">Check-in: 14:00</span>
                    <span className="text-yellow-700" data-testid="modal-checkout">Check-out: 12:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Fasilitas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" data-testid="modal-facilities">
                {property.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <Check className="text-green-600 h-4 w-4" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Catatan Penting</h4>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4" data-testid="modal-notes">
                {property.notes.map((note, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm mb-2 last:mb-0">
                    <AlertTriangle className="text-red-600 h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Actions */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex gap-4">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="flex-1 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
                  data-testid="button-close-modal"
                >
                  Tutup
                </Button>
                <Button
                  onClick={() => openWhatsApp(property)}
                  className="flex-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3"
                  data-testid="button-whatsapp-booking"
                >
                  <MessageCircle className="w-6 h-6" />
                  Booking via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
