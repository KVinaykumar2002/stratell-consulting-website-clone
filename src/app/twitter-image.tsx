import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TechnoRealm - Expert IT Consulting & Technology Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a1628',
          backgroundImage: 'linear-gradient(135deg, #0a1628 0%, #1E3A5F 50%, #0a1628 100%)',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, transparent 0%, #E5B800 50%, transparent 100%)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          {/* Logo text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#E5B800',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span style={{ color: '#E5B800' }}>Techno</span>
            <span style={{ color: '#ffffff' }}>Realm</span>
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#ffffff',
              marginBottom: '30px',
              fontWeight: 500,
            }}
          >
            Expert IT Consulting & Technology Solutions
          </div>
          
          {/* Services badges */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '900px',
            }}
          >
            {['Cloud Infrastructure', 'AI & ML', 'Cybersecurity', 'DevOps', 'Digital Transformation'].map((service) => (
              <div
                key={service}
                style={{
                  backgroundColor: 'rgba(229, 184, 0, 0.15)',
                  border: '1px solid rgba(229, 184, 0, 0.3)',
                  borderRadius: '9999px',
                  padding: '12px 24px',
                  color: '#E5B800',
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, transparent 0%, #E5B800 50%, transparent 100%)',
          }}
        />
        
        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '40px',
            color: '#ffffff',
            opacity: 0.7,
            fontSize: 20,
          }}
        >
          technorealm.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

