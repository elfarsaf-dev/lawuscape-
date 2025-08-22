import { useState, useMemo } from "react";
import { Mountain } from "lucide-react";
import { propertyData } from "@/lib/property-data";
import PropertyCard from "@/components/property-card";
import PropertyModal from "@/components/property-modal";
import SearchSection from "@/components/search-section";
import type { Property } from "@shared/schema";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProperties = useMemo(() => {
    if (!searchQuery.trim()) {
      return propertyData;
    }

    const query = searchQuery.toLowerCase();
    return propertyData.filter(property => {
      return (
        property.name.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.capacity.toLowerCase().includes(query) ||
        property.facilities.some(facility => facility.toLowerCase().includes(query)) ||
        property.notes.some(note => note.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Mountain className="text-primary text-2xl h-8 w-8" />
              <h1 className="text-2xl font-bold text-gray-800">𝐋𝐀𝐖𝐔𝐒𝐂𝐀𝐏𝐄</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-testid="nav-villa">Villa</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-testid="nav-glamping">Glamping</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-testid="nav-about">Tentang</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" data-testid="nav-contact">Kontak</a>
            </nav>
            <button className="md:hidden text-gray-600" data-testid="button-menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-20">
        <div 
          className="absolute inset-0 bg-black bg-opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Temukan Villa & Glamping<br />
            <span className="text-emerald-200">di Tawangmangu</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Nikmati pengalaman menginap yang tak terlupakan dengan pemandangan Gunung Lawu yang menakjubkan
          </p>
        </div>
      </section>

      {/* Search Section */}
      <SearchSection onSearch={handleSearch} />

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              {searchQuery ? `Hasil Pencarian "${searchQuery}"` : "Pilihan Terbaik untuk Anda"}
            </h3>
            <p className="text-gray-600 mt-2">
              {searchQuery 
                ? `Ditemukan ${filteredProperties.length} properti` 
                : "Temukan akomodasi yang sesuai dengan kebutuhan Anda"
              }
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12" data-testid="loading-state">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Mencari akomodasi...</p>
            </div>
          )}

          {/* Results Grid */}
          {!isLoading && filteredProperties.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="results-grid">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelect={handlePropertySelect}
                />
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && filteredProperties.length === 0 && searchQuery && (
            <div className="text-center py-12" data-testid="no-results">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada hasil ditemukan</h4>
              <p className="text-gray-500">Coba gunakan kata kunci yang berbeda</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="text-primary text-2xl h-8 w-8" />
                <h3 className="text-2xl font-bold">LAWUSCAPE</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Platform pencarian villa dan glamping terpercaya di kawasan Tawangmangu dengan pemandangan Gunung Lawu yang menakjubkan.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/glampingtawangmangu1/" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.158 12.016c0-2.133 1.726-3.86 3.86-3.86 2.132 0 3.86 1.727 3.86 3.86s-1.728 3.86-3.86 3.86c-2.134 0-3.86-1.727-3.86-3.86zM17.991 6.251c-.507 0-.919-.412-.919-.919s.412-.919.919-.919.919.412.919.919-.412.919-.919.919z"/>
                  </svg>
                </a>
                <a href="https://wa.me/+62822-4181-9991/" className="text-gray-300 hover:text-primary transition-colors" data-testid="link-whatsapp">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="footer-villa">Villa</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="footer-glamping">Glamping</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="footer-about">Tentang Kami</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors" data-testid="footer-contact">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Tawangmangu, Karanganyar
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +62 822-4181-9991
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Stayvilla554@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2025 ELFAR.DEV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
