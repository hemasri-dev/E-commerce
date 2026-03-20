import React from 'react';
import { useCart } from '../context/CartContext';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Cart = ({ isOpen, onClose, onCheckout }) => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div 
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 90, backdropFilter: 'blur(4px)' }} 
        onClick={onClose}
        className="animate-fade-in"
      />
      <div 
        className="glass animate-fade-in"
        style={{ 
          position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '400px', 
          backgroundColor: 'var(--surface)', zIndex: 100, display: 'flex', flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', border: 'none' }} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        
        <div style={{ padding: '1.5rem', flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cartItems.length === 0 ? (
            <div className="flex-col items-center justify-center text-muted" style={{ height: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2, marginBottom: '1rem' }}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 items-center" style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                <img src={item.image} alt={item.name} style={{ width: '5rem', height: '5rem', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                <div className="flex-col" style={{ flexGrow: 1 }}>
                  <h4 className="font-semibold" style={{ lineHeight: '1.2', marginBottom: '0.5rem' }}>{item.name}</h4>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '1.25rem', lineHeight: 1, borderColor: 'var(--border)' }} onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span className="font-semibold" style={{ width: '1.5rem', textAlign: 'center' }}>{item.quantity}</span>
                      <button className="btn btn-outline" style={{ padding: '0.25rem 0.5rem', fontSize: '1.25rem', lineHeight: 1, borderColor: 'var(--border)' }} onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <div className="flex-col items-end">
                      <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      <button className="text-sm" style={{ color: 'var(--danger)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '0.25rem', padding: 0 }} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-color)' }}>
            <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
              <span className="text-lg font-semibold text-muted">Subtotal</span>
              <span className="text-2xl font-bold" style={{ color: 'var(--text-main)' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.125rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
