import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #0f1729 0%, #1a2744 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '36px',
        }}
      >
        <span style={{ color: '#E5B800', fontWeight: 'bold' }}>T</span>
        <span style={{ color: '#3a5a8a', fontWeight: 'bold' }}>R</span>
      </div>
    ),
    {
      ...size,
    }
  )
}

