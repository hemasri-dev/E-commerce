import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const Header = ({ onCartClick, searchQuery = "", onSearchChange }) => {
  const { cartCount } = useCart();

  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border)' }}>
      <div className="container flex items-center justify-between" style={{ height: '4rem', gap: '1rem' }}>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0 }} onClick={e => e.preventDefault()}>
          <h1 className="text-xl font-bold" style={{ color: 'var(--primary)', letterSpacing: '-0.5px' }}>
            AuraShop.
          </h1>
        </a>
        
        <div style={{ flexGrow: 1, maxWidth: '400px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
            <SearchIcon />
          </div>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="input" 
            style={{ paddingLeft: '3rem', borderRadius: '9999px', backgroundColor: 'var(--bg-color)', border: '1px solid transparent' }}
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="btn" style={{ position: 'relative', background: 'transparent', padding: '0.5rem' }} onClick={onCartClick} aria-label="Open cart">
            <ShoppingBagIcon />
            {cartCount > 0 && (
              <span className="badge" style={{ position: 'absolute', top: 0, right: 0, transform: 'translate(25%, -25%)' }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
