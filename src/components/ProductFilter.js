import React from 'react';

const ProductFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 className="text-lg font-bold" style={{ marginBottom: '1rem' }}>Categories</h2>
      <div className="flex gap-3" style={{ overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: '9999px', whiteSpace: 'nowrap', padding: '0.5rem 1.25rem' }}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
