'use client';

import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import { StudioLighting } from './StudioLighting';
import { FaucetModel } from './FaucetModel';

function Loader() {
  const { progress } = useProgress();
  return <Html center><div style={{ color: 'white', fontFamily: 'sans-serif' }}>{progress.toFixed(0)}%</div></Html>;
}

interface ProductViewerProps {
  modelUrl?: string;
  initialFinish?: 'chrome' | 'matte-black' | 'brushed-gold';
}

export function ProductViewer({ modelUrl, initialFinish = 'chrome' }: ProductViewerProps) {
  const [finish, setFinish] = useState<'chrome' | 'matte-black' | 'brushed-gold'>(initialFinish);
  const [exploded, setExploded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#050505', overflow: 'hidden' }}>
      <Canvas shadows camera={{ position: [2, 2, 3], fov: 45 }}>
        <Suspense fallback={<Loader />}>
          <StudioLighting />
          <FaucetModel finish={finish} exploded={exploded} />
          <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
        </Suspense>
      </Canvas>

      {/* UI Overlay */}
      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '20px', zIndex: 10, background: 'rgba(0,0,0,0.5)', padding: '15px 25px', borderRadius: '30px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <button onClick={() => setFinish('chrome')} style={buttonStyle(finish === 'chrome', '#ffffff', '#000')}>Chrome</button>
        <button onClick={() => setFinish('matte-black')} style={buttonStyle(finish === 'matte-black', '#111111', '#fff')}>Matte Black</button>
        <button onClick={() => setFinish('brushed-gold')} style={buttonStyle(finish === 'brushed-gold', '#d4af37', '#000')}>Brushed Gold</button>
      </div>

      <div style={{ position: 'absolute', top: '40px', right: '40px', display: 'flex', gap: '15px', zIndex: 10 }}>
        <button onClick={() => setExploded(!exploded)} style={iconButtonStyle}>
          {exploded ? 'Assemble' : 'Explode'}
        </button>
        <button onClick={toggleFullscreen} style={iconButtonStyle}>
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
    </div>
  );
}

const buttonStyle = (active: boolean, bgColor: string, textColor: string) => ({
  backgroundColor: active ? bgColor : 'transparent',
  color: active ? textColor : '#ffffff',
  border: `1px solid ${bgColor}`,
  padding: '8px 16px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  opacity: active ? 1 : 0.6,
});

const iconButtonStyle = {
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: '#ffffff',
  border: '1px solid rgba(255,255,255,0.2)',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: 'sans-serif',
  backdropFilter: 'blur(5px)',
  transition: 'all 0.3s ease',
};
