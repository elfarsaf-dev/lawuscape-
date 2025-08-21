import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export default function SearchSection({ onSearch }: SearchSectionProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <section className="relative -mt-8 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Cari nama, fasilitas, kapasitas..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-700"
                data-testid="input-search"
              />
            </div>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              data-testid="button-search"
            >
              <Search className="w-4 h-4" />
              <span>Cari</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
