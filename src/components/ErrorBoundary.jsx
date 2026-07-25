import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("KPSS App Error Caught:", error, errorInfo);
  }

  handleReload = () => {
    // Clear SW and caches before reload to ensure fresh app code
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
      });
    }
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name));
      });
    }
    setTimeout(() => {
      window.location.href = window.location.origin + window.location.pathname;
    }, 300);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '500px',
            padding: '2.5rem',
            borderRadius: '16px'
          }}>
            <div style={{
              display: 'inline-flex',
              padding: '1rem',
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
              marginBottom: '1.5rem'
            }}>
              <AlertTriangle size={48} />
            </div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Bir Yükleme Hatası Oluştu</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Uygulama güncellendiğinde tarayıcınız eski önbellekte kalmış olabilir. 
              Aşağıdaki butona basarak önbelleği temizleyip yeniden yükleyebilirsiniz.
            </p>
            <button 
              onClick={this.handleReload} 
              className="btn-primary" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'center',
                width: '100%',
                padding: '0.8rem 1.5rem',
                fontSize: '1rem'
              }}
            >
              <RefreshCw size={18} />
              Önbelleği Temizle ve Yeniden Yükle
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
