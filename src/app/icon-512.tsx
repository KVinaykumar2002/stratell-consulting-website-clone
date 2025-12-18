import { ImageResponse } from 'next/og'

export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 260,
          background: 'linear-gradient(135deg, #0f1729 0%, #1a2744 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100px',
        }}
      >
        <span style={{ color: '#E5B800', fontWeight: 'bold' }}>T</span>
        <span style={{ color: '#4a7ab8', fontWeight: 'bold' }}>R</span>
      </div>
    ),
    {
      ...size,
    }
  )
}

