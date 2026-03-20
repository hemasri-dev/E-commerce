import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onQuickView }) => {
  if (products.length === 0) {
    return (
      <div className="flex-col items-center justify-center animate-fade-in" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', minHeight: '40vh' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2, marginBottom: '1rem' }}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <h3 className="text-xl font-bold text-muted">No products found</h3>
        <p className="text-muted" style={{ marginTop: '0.5rem' }}>Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="product-grid" style={{ paddingBottom: '4rem' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
};

export default ProductList;
