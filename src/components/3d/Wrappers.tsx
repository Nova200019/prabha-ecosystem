'use client';

import dynamic from 'next/dynamic';

const FaucetModelInner = dynamic(
  () => import('./FaucetModel').then(mod => ({ default: mod.FaucetModel })),
  { ssr: false }
);
const TileExplodedInner = dynamic(
  () => import('./TileExploded').then(mod => ({ default: mod.TileExploded })),
  { ssr: false }
);

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

export function FaucetModelWrapper() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} autoRotate />
        <FaucetModelInner />
      </Canvas>
    </div>
  );
}

export function TileExplodedWrapper() {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} />
        <TileExplodedInner inView={true} />
      </Canvas>
    </div>
  );
}
