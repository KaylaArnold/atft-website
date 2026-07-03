import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Arletta The Friendly Trader'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0F0A02',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '16px', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C' }}>
            THE 5% METHOD
          </div>
          <div style={{ fontSize: '64px', fontWeight: '700', color: '#F9F6F0', textAlign: 'center', lineHeight: 1.1 }}>
            Arletta The Friendly Trader
          </div>
          <div style={{ fontSize: '24px', color: 'rgba(249,246,240,0.6)', textAlign: 'center' }}>
            Trade with structure. Grow with discipline.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
          <div style={{ height: '1px', width: '48px', background: '#C9A84C' }} />
          <div style={{ fontSize: '18px', color: '#C9A84C', letterSpacing: '0.1em' }}>
            arlettathefriendlytrader.com
          </div>
          <div style={{ height: '1px', width: '48px', background: '#C9A84C' }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
