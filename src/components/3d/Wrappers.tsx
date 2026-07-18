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

const ShowerSceneInner = dynamic(
  () => import('./ShowerScene').then(mod => ({ default: mod.ShowerScene })),
  { ssr: false }
);

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

export function FaucetModelWrapper() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <FaucetModelInner />
      </Canvas>
    </div>
  );
}

export function TileExplodedWrapper() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <TileExplodedInner inView={true} />
      </Canvas>
    </div>
  );
}

export function ShowerSceneWrapper() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
        <ShowerSceneInner />
      </Canvas>
    </div>
  );
}
