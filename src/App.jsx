import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { initialProducts } from './data/products';

export default function App() {
  const [products] = useState(initialProducts);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    return ['All', ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  return (
    <div className="app-container">
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-badge">NEW ARRIVALS 2026</div>
          <h2 className="hero-title">Cutting-Edge Tech & Electronics</h2>
          <p className="hero-subtitle">
            Explore high-performance laptops, crystal-clear audio gear, and top-tier accessories.
          </p>
        </section>

        <section className="catalog-section">
          <div className="catalog-header">
            <h3 className="section-title">Product Catalog</h3>
            <span className="product-count">{filteredProducts.length} items available</span>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <ProductList products={filteredProducts} />
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 DzTech Store. Developed for ENSTA WAMD Lab.</p>
      </footer>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
