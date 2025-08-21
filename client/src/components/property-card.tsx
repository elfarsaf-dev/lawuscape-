import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import type { Property } from "@shared/schema";

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
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
              {property.rate.weekday > 0 ? `Rp ${formatCurrency(property.rate.weekday)}` : "Hubungi untuk harga"}
            </p>
            {property.rate.weekday > 0 && <p className="text-sm text-gray-500">per malam</p>}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Kapasitas</p>
            <p className="font-semibold text-gray-700" data-testid={`text-capacity-${property.id}`}>
              {property.capacity}
            </p>
          </div>
        </div>
        <Button
          onClick={() => onSelect(property)}
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-medium transition-all duration-200"
          data-testid={`button-detail-${property.id}`}
        >
          Lihat Detail
        </Button>
      </div>
    </div>
  );
}
