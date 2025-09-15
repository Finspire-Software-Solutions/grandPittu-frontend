import { useEffect } from 'react';

const Toast = ({ message, type, isVisible, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    const baseStyles = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      minWidth: '380px',
      maxWidth: '520px',
      padding: '24px 28px',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '15px',
      fontWeight: '500',
      textAlign: 'left',
      fontFamily: "'Playfair Display', 'Georgia', serif",
      animation: 'toastSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    };

    const typeStyles = {
      success: {
        background: 'linear-gradient(135deg, #2D5016 0%, #4A7C59 50%, #5D8A66 100%)',
        color: '#ffffff',
        borderColor: 'rgba(93, 138, 102, 0.4)',
      },
      error: {
        background: 'linear-gradient(135deg, #8B1538 0%, #B91C1C 50%, #DC2626 100%)',
        color: '#ffffff', 
        borderColor: 'rgba(220, 38, 38, 0.4)',
      },
      info: {
        background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #60A5FA 100%)',
        color: '#ffffff',
        borderColor: 'rgba(96, 165, 250, 0.4)',
      },
      warning: {
        background: 'linear-gradient(135deg, #92400E 0%, #D97706 50%, #F59E0B 100%)',
        color: '#ffffff',
        borderColor: 'rgba(245, 158, 11, 0.4)',
      },
    };

    return { ...baseStyles, ...typeStyles[type] };
  };

  const getIcon = () => {
    const icons = {
      success: '🍽️',
      error: '⚠️',
      info: '📋',
      warning: '⏰',
    };
    return icons[type] || '📧';
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap');
          
          @keyframes toastSlideIn {
            from {
              opacity: 0;
              transform: translate(-50%, -70%) scale(0.95);
              filter: blur(4px);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
              filter: blur(0px);
            }
          }
          
          @keyframes toastSlideOut {
            from {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            to {
              opacity: 0;
              transform: translate(-50%, -30%) scale(0.95);
            }
          }
          
          @keyframes progressBar {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }
        `}
      </style>
      <div style={getToastStyles()}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '14px', 
          flex: 1,
          position: 'relative'
        }}>
          <div style={{
            fontSize: '24px',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            minWidth: '24px',
            textAlign: 'center'
          }}>
            {getIcon()}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: '15px', 
              fontWeight: '500',
              lineHeight: '1.4',
              letterSpacing: '0.2px'
            }}>
              {message}
            </div>
            <div style={{
              fontSize: '12px',
              opacity: 0.85,
              marginTop: '4px',
              fontStyle: 'italic',
              fontFamily: "'Georgia', serif"
            }}>
              Grand Pittu Restaurant
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '0 0 16px 16px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            background: 'rgba(255, 255, 255, 0.6)',
            animation: `progressBar ${duration}ms linear`,
            borderRadius: '0 0 16px 16px'
          }} />
        </div>
        
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'inherit',
            fontSize: '16px',
            cursor: 'pointer',
            padding: '6px 8px',
            marginLeft: '16px',
            borderRadius: '8px',
            opacity: 0.8,
            transition: 'all 0.2s ease',
            fontWeight: '500',
            minWidth: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = 1;
            e.target.style.background = 'rgba(255, 255, 255, 0.25)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = 0.8;
            e.target.style.background = 'rgba(255, 255, 255, 0.15)';
            e.target.style.transform = 'scale(1)';
          }}
          title="Close notification"
        >
          ×
        </button>
      </div>
    </>
  );
};

export default Toast;
