import React from 'react';

const Hero = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <div 
        className="card animate-fade-in flex items-center justify-center flex-col" 
        style={{ 
          minHeight: '400px', 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <span className="badge" style={{ backgroundColor: 'var(--primary)', color: 'white', border: 'none', marginBottom: '1rem', padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>
          New Arrival
        </span>
        <h2 className="text-2xl font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', letterSpacing: '-1px', maxWidth: '800px', lineHeight: '1.1' }}>
          Elevate Your Everyday Essentials
        </h2>
        <p className="text-lg" style={{ maxWidth: '600px', marginBottom: '2rem', opacity: 0.9 }}>
          Discover the perfect blend of style, functionality, and uncompromised quality in our latest collection.
        </p>
        <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', borderRadius: '9999px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)' }}>
          Shop Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
