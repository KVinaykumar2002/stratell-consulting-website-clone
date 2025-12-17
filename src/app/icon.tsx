import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0f1729',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <span style={{ color: '#E5B800', fontWeight: 'bold' }}>T</span>
        <span style={{ color: '#1E3A5F', fontWeight: 'bold' }}>R</span>
      </div>
    ),
    {
      ...size,
    }
  )
}

