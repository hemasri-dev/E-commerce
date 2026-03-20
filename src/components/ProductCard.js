import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
    addToast(`Added ${product.name} to cart!`);
  };

  return (
    <div 
      className="card flex-col" 
      style={{ display: 'flex', height: '100%', cursor: 'pointer', transition: 'box-shadow 0.2s ease', position: 'relative' }}
      onClick={() => onQuickView && onQuickView(product)}
    >
      <div style={{ position: 'relative', paddingTop: '100%', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: 'var(--text-main)', fontSize: '0.75rem', padding: '0.25rem 0.6rem', backdropFilter: 'blur(4px)', boxShadow: 'var(--shadow-sm)' }}>
            {product.category}
          </span>
        </div>
      </div>
      <div className="flex-col" style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3 className="font-semibold text-lg" style={{ marginBottom: '0.375rem', lineHeight: '1.3' }}>{product.name}</h3>
          <p className="text-sm text-muted" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between" style={{ marginTop: 'auto' }}>
          <span className="font-bold text-xl" style={{ color: 'var(--primary)' }}>${product.price.toFixed(2)}</span>
          <button className="btn btn-primary" onClick={handleAdd} style={{ padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.875rem' }}>
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
