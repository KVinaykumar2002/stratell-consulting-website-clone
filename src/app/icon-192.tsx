import { ImageResponse } from 'next/og'

export const size = {
  width: 192,
  height: 192,
}
export const contentType = 'image/png'

export default function Icon192() {
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
          borderRadius: '38px',
        }}
      >
        <span style={{ color: '#14B8A6', fontWeight: 'bold' }}>T</span>
        <span style={{ color: '#4a7ab8', fontWeight: 'bold' }}>R</span>
      </div>
    ),
    {
      ...size,
    }
  )
}

