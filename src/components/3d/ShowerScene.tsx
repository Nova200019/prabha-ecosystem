'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

export function ShowerScene() {
  // Particles for water
  const particlesCount = 2500; // Increased for denser rain
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Start in a tight circle under the shower head
      const radius = Math.random() * 0.4;
      const theta = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(theta) * radius; // x
      pos[i * 3 + 1] = Math.random() * 2.8; // y (height)
      pos[i * 3 + 2] = Math.sin(theta) * radius; // z
    }
    return pos;
  }, [particlesCount]);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 1] -= delta * 5; // fall speed
        // Reset when they hit the floor
        if (positions[i * 3 + 1] < 0) {
          positions[i * 3 + 1] = 2.8; // reset to shower head height
          const radius = Math.random() * 0.4;
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
      <fog attach="fog" args={['#020202', 3, 12]} />
      
      {/* Standard Cinematic Lighting */}
      <ambientLight intensity={0.15} />
      <spotLight
        position={[0, 5, 2]}
        angle={0.6}
        penumbra={0.8}
        intensity={20}
        distance={10}
        color="#ffffff"
        castShadow
      />
      <spotLight
        position={[3, 2, 3]}
        angle={0.8}
        penumbra={0.5}
        intensity={5}
        color="#c9a96e" // Gold accent
      />

      {/* Environment for glossy reflections */}
      <Environment preset="night" />

      {/* Glossy Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          roughness={0.15}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.9}
          mirror={1}
        />
      </mesh>

      {/* Shower Enclosure Walls (Dark Marble/Slate aesthetic) */}
      <group position={[0, 2.5, -2]}>
        {/* Back Wall */}
        <mesh position={[0, 0, -1]} receiveShadow>
          <boxGeometry args={[10, 5, 0.2]} />
          <meshStandardMaterial color="#080808" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Side Wall */}
        <mesh position={[-5, 0, 4]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
          <boxGeometry args={[10, 5, 0.2]} />
          <meshStandardMaterial color="#080808" roughness={0.3} metalness={0.7} />
        </mesh>
      </group>

      {/* Sleek Shower Head */}
      <group position={[0, 2.9, -1]}>
        {/* Pipe extending from wall */}
        <mesh position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 1]} />
          <meshStandardMaterial color="#222" metalness={1} roughness={0.1} />
        </mesh>
        {/* Shower Head plate */}
        <mesh position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.05]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Abstract Bather Silhouette */}
      <group position={[0, 0, 0]}>
        {/* Head */}
        <mesh position={[0, 1.65, 0]} castShadow>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#000000" metalness={0.95} roughness={0.05} envMapIntensity={2} />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 1.05, 0]} castShadow>
          <capsuleGeometry args={[0.25, 0.7, 32, 32]} />
          <meshStandardMaterial color="#000000" metalness={0.95} roughness={0.05} envMapIntensity={2} />
        </mesh>
      </group>

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
          size={0.02}
          color="#a8c8d8"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
