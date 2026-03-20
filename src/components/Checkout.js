import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = ({ onBack }) => {
  const { cartTotal, clearCart } = useCart();
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      clearCart();
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="container flex-col items-center justify-center animate-fade-in" style={{ minHeight: '60vh', textAlign: 'center', paddingTop: '4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyItems: 'center', padding: '1.5rem', borderRadius: '50%', backgroundColor: 'var(--success)', color: 'white', marginBottom: '2rem', boxShadow: '0 0 40px rgba(16, 185, 129, 0.4)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold" style={{ marginBottom: '1rem', letterSpacing: '-0.5px' }}>Order Confirmed!</h2>
        <p className="text-lg text-muted" style={{ marginBottom: '2.5rem', maxWidth: '400px' }}>
          Thank you for your purchase. We've sent a confirmation email with your order details.
        </p>
        <button className="btn btn-primary" onClick={onBack} style={{ padding: '1rem 3rem', fontSize: '1.125rem', borderRadius: '9999px' }}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 1rem', maxWidth: '700px' }}>
      <button className="btn btn-outline" onClick={onBack} style={{ marginBottom: '2rem', border: 'none', paddingLeft: 0 }}>
        &larr; Back to Shop
      </button>
      
      <div className="card" style={{ padding: '2.5rem' }}>
        <h2 className="text-2xl font-bold" style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>Checkout Securely</h2>
        
        <form className="flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex-col gap-4">
            <h3 className="font-semibold text-lg" style={{ color: 'var(--primary)' }}>Shipping Information</h3>
            <div className="product-grid" style={{ gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <input className="input" placeholder="First Name" required />
              <input className="input" placeholder="Last Name" required />
            </div>
            <input className="input" placeholder="Full Address" required />
            <div className="product-grid" style={{ gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <input className="input" placeholder="City" required />
              <input className="input" placeholder="Zip Code" required />
            </div>
          </div>

          <div className="flex-col gap-4" style={{ marginTop: '2rem' }}>
            <h3 className="font-semibold text-lg" style={{ color: 'var(--primary)' }}>Payment Method</h3>
            <div className="card" style={{ padding: '1.25rem', border: '2px solid var(--primary)', cursor: 'pointer', backgroundColor: 'rgba(79, 70, 229, 0.05)', boxShadow: 'none' }}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" defaultChecked style={{ accentColor: 'var(--primary)', transform: 'scale(1.2)' }} />
                <span className="font-semibold">Credit Card (Mock)</span>
              </label>
            </div>
            <input className="input" placeholder="Card Number" required pattern="[0-9]{16}" title="16 digit card number" />
            <div className="product-grid" style={{ gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <input className="input" placeholder="MM/YY" required />
              <input className="input" placeholder="CVC" required />
            </div>
          </div>

          <div className="flex items-center justify-between" style={{ marginTop: '2.5rem', padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-lg)' }}>
            <span className="text-xl font-bold text-muted">Total Payment:</span>
            <span className="text-3xl font-bold" style={{ color: 'var(--text-main)', letterSpacing: '-1px' }}>${cartTotal.toFixed(2)}</span>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ padding: '1.25rem', fontSize: '1.25rem', width: '100%', marginTop: '1rem', borderRadius: 'var(--radius-md)' }}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Processing Securely...' : `Pay $${cartTotal.toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
