import React from 'react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    addToast(`Added ${product.name} to cart!`);
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div 
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }} 
        onClick={onClose}
        className="animate-fade-in"
      />
      
      <div 
        className="card animate-fade-in" 
        style={{ 
          position: 'relative', width: '100%', maxWidth: '900px', backgroundColor: 'var(--surface)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden', maxHeight: '90vh'
        }}
      >
        <button className="btn btn-outline" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, padding: '0.5rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none' }} onClick={onClose}>
          <CloseIcon />
        </button>
        
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', overflowY: 'auto' }}>
          <div style={{ flex: '1 1 400px', minHeight: '300px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div style={{ flex: '1 1 400px', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <span className="badge" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-muted)', border: '1px solid var(--border)', alignSelf: 'flex-start', marginBottom: '1rem' }}>
              {product.category}
            </span>
            <h2 className="text-2xl font-bold" style={{ marginBottom: '1rem', lineHeight: '1.2' }}>{product.name}</h2>
            <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem', color: '#fbbf24' }}>
              {'★'.repeat(5)} <span className="text-muted text-sm" style={{ color: 'var(--text-muted)' }}> (128 reviews)</span>
            </div>
            
            <span className="text-3xl font-bold" style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>${product.price.toFixed(2)}</span>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 className="font-semibold" style={{ marginBottom: '0.5rem' }}>Description</h4>
              <p className="text-muted" style={{ lineHeight: '1.6' }}>{product.description}</p>
              <p className="text-muted" style={{ lineHeight: '1.6', marginTop: '1rem' }}>
                Durable materials and thoughtful engineering make this a true standout for everyday performance. Enjoy peace of mind with a 1-year limited warranty included.
              </p>
            </div>
            
            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary" style={{ flexGrow: 1, padding: '1rem', fontSize: '1.125rem', borderRadius: 'var(--radius-md)' }} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
