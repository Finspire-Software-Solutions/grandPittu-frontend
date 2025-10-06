import { useState, useEffect } from 'react';

/**
 * Development notice component to show when backend is not available
 */
export const DevNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if we're in development mode and backend is not available
    const checkBackend = async () => {
      try {
        // In development, use proxy path; in production, use full URL
        const isDev = import.meta.env.DEV;
        const url = isDev ? '/api/v1/auth/authendicate' : `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'}/auth/authendicate`;
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'jana61jr@gmail.com',
            password: 'admin123'
          })
        });
        // Accept any response (including 400, 401, 404) as long as server is responding
        // Only show notice if server is completely unreachable
      } catch (error) {
        // Only show if there's a network error (server not reachable)
        console.log('Backend check error:', error);
        setShow(true);
      }
    };

    if (import.meta.env.DEV) {
      checkBackend();
    }
  }, []);

  if (!show) return null;

  return (
    <div className="dev-notice">
      <div className="dev-notice-content">
        <h4>🚧 Development Mode</h4>
        <p>
          The Grand Pittu backend is not available. The app is showing fallback data.
          <br />
          Backend URL: <code>{import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'}</code>
        </p>
        <button onClick={() => setShow(false)} className="btn btn-sm btn-outline-light">
          ✕ Dismiss
        </button>
      </div>
      <style>{`
        .dev-notice {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #ff6b35;
          color: white;
          padding: 10px;
          text-align: center;
          z-index: 9999;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .dev-notice-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .dev-notice h4 {
          margin: 0;
          font-size: 14px;
        }
        .dev-notice p {
          margin: 0;
          font-size: 12px;
          line-height: 1.4;
        }
        .dev-notice code {
          background: rgba(255,255,255,0.2);
          padding: 2px 4px;
          border-radius: 3px;
          font-size: 11px;
        }
        .dev-notice button {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 4px 8px;
          border-radius: 3px;
          cursor: pointer;
          font-size: 12px;
        }
        .dev-notice button:hover {
          background: rgba(255,255,255,0.1);
        }
        @media (max-width: 768px) {
          .dev-notice-content {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default DevNotice;
