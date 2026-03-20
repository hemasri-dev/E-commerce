import React from 'react';
import { useToast } from '../context/ToastContext';

const ToastGroup = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, display: 'flex', flexDirection: 'column', gap: '0.5rem', pointerEvents: 'none' }}>
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className="animate-fade-in card"
          style={{ 
            pointerEvents: 'auto',
            padding: '1rem 1.5rem', 
            backgroundColor: 'var(--surface)', 
            borderLeft: '4px solid var(--success)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between',
            minWidth: '250px'
          }}
        >
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-semibold text-sm">{toast.message}</span>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => removeToast(toast.id)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastGroup;
