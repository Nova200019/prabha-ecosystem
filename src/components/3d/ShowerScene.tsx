'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterial, Environment, SpotLight, useDepthBuffer } from '@react-three/drei';
import * as THREE from 'three';

export function ShowerScene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  
  // Particles for water
  const particlesCount = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Start in a tight circle under the shower head
      const radius = Math.random() * 0.3;
      const theta = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(theta) * radius; // x
      pos[i * 3 + 1] = 2.5 + Math.random() * 2; // y (height)
      pos[i * 3 + 2] = Math.sin(theta) * radius; // z
    }
    return pos;
  }, [particlesCount]);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 1] -= delta * 4; // fall speed
        // Reset when they hit the floor or go below
        if (positions[i * 3 + 1] < 0) {
          positions[i * 3 + 1] = 2.8; // reset to shower head height
          const radius = Math.random() * 0.3;
          const theta = Math.random() * Math.PI * 2;
          positions[i * 3] = Math.cos(theta) * radius;
          positions[i * 3 + 2] = Math.sin(theta) * radius;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <color attach="background" args={['#020202']} />
      <fog attach="fog" args={['#020202', 2, 10]} />
      
      {/* Cinematic Lighting */}
      <ambientLight intensity={0.1} />
      <SpotLight
        position={[0, 4, 1]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        distance={8}
        color="#ffffff"
        castShadow
        depthBuffer={depthBuffer}
      />
      <SpotLight
        position={[2, 1, 2]}
        angle={0.8}
        penumbra={0.5}
        intensity={0.5}
        color="#c9a96e" // Gold accent light
      />

      {/* Environment for reflections */}
      <Environment preset="studio" />

      {/* Glossy Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          roughness={0.2}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.8}
          mirror={1}
        />
      </mesh>

      {/* Wall */}
      <mesh position={[0, 2.5, -2]} receiveShadow>
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.7} metalness={0.2} />
      </mesh>

      {/* Shower Head */}
      <group position={[0, 2.9, 0]}>
        {/* Pipe */}
        <mesh position={[0, 0.1, -1]}>
          <cylinderGeometry args={[0.02, 0.02, 2]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Head */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.05]} />
          <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Silhouette Bather (Abstract shape to look luxurious and artistic) */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <capsuleGeometry args={[0.35, 1, 32, 32]} />
        <meshStandardMaterial
          color="#000000"
          metalness={0.9}
          roughness={0.1} // Glossy wet skin look
          envMapIntensity={2}
        />
      </mesh>

      {/* Falling Water Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color="#a0c0d0"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
