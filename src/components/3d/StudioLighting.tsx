'use client';

import { Environment, ContactShadows } from '@react-three/drei';

export function StudioLighting() {
  return (
    <>
      <color attach="background" args={['#050505']} />
      <Environment preset="studio" resolution={256} background={false} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        position={[-10, 10, -10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.7}
        scale={10}
        blur={2}
        far={4}
        color="#000000"
      />
    </>
  );
}
