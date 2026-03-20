import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { mockProducts, getCategories } from './data/mockProducts';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductModal from './components/ProductModal';
import ToastGroup from './components/ToastGroup';
import './index.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [view, setView] = useState('shop'); // 'shop' or 'checkout'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = getCategories();
  
  const filteredProducts = useMemo(() => {
    let result = mockProducts;
    
    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Filter by Search
    if (searchQuery.trim() !== '') {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(lowerQuery) || p.description.toLowerCase().includes(lowerQuery));
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <ToastProvider>
      <CartProvider>
        <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header 
            onCartClick={() => setIsCartOpen(true)} 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <main style={{ flexGrow: 1, position: 'relative' }}>
            {view === 'shop' ? (
              <div className="animate-fade-in">
                {!searchQuery && selectedCategory === 'All' && <Hero />}
                
                <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
                  <div className="flex-col gap-6">
                    <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                      <h2 className="text-2xl font-bold">
                        {searchQuery ? `Search results for "${searchQuery}"` : 'Explore the Collection'}
                      </h2>
                      <ProductFilter 
                        categories={categories} 
                        selectedCategory={selectedCategory} 
                        onSelectCategory={setSelectedCategory} 
                      />
                    </div>
                    
                    <ProductList 
                      products={filteredProducts} 
                      onQuickView={(product) => setSelectedProduct(product)} 
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
                 <Checkout onBack={() => { setView('shop'); setIsCartOpen(false); }} />
              </div>
            )}
          </main>

          <Cart 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            onCheckout={() => {
              setIsCartOpen(false);
              setView('checkout');
            }}
          />
          
          <ProductModal 
            product={selectedProduct} 
            isOpen={!!selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
          
          <ToastGroup />

          {view === 'shop' && (
            <footer style={{ padding: '3rem 0', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
              <p className="text-muted text-sm font-semibold">© {new Date().getFullYear()} AuraShop V2. All rights reserved.</p>
            </footer>
          )}
        </div>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
