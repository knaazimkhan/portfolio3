import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {

    const interBold = await fetch(new URL('./fonts/Inter-Bold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer())

    const interRegular = await fetch(new URL('./fonts/Inter-Regular.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer())

    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Your Name';
    const description = searchParams.get('description') || 'Full-stack Developer';

    // const interBold = await interBoldFont
    // const interRegular = await interRegularFont

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
            backgroundColor: '#000',
            fontFamily: 'Inter',
          }}
        >
          {/* Gradient Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.2) 0%, transparent 50%)',
              opacity: 0.8,
            }}
          />

          {/* Grid Pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '40px',
              borderRadius: '20px',
              color: '#fff',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: '0 0 20px 0',
                background:
                  'linear-gradient(to right, #fff, #fff)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '32px',
                margin: '0',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {description}
            </p>
          </div>

          {/* Logo or Watermark */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}
            >
              ⚡
            </div>
            <p
              style={{
                fontSize: '20px',
                color: '#fff',
                margin: '0',
              }}
            >
              portfolio.dev
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: interBold,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate OG image', { status: 500 });
  }
} 