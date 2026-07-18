'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Group } from 'three';

interface FaucetModelProps {
  finish?: 'chrome' | 'matte-black' | 'brushed-gold';
  exploded?: boolean;
}

const materials = {
  'chrome': new THREE.MeshStandardMaterial({ color: '#ffffff', metalness: 1, roughness: 0.1 }),
  'matte-black': new THREE.MeshStandardMaterial({ color: '#111111', metalness: 0.2, roughness: 0.8 }),
  'brushed-gold': new THREE.MeshStandardMaterial({ color: '#d4af37', metalness: 0.8, roughness: 0.3 }),
};

const cartridgeMaterial = new THREE.MeshStandardMaterial({ color: '#0055ff', metalness: 0.1, roughness: 0.5 });
const brassMaterial = new THREE.MeshStandardMaterial({ color: '#b5a642', metalness: 0.8, roughness: 0.4 });

export function FaucetModel({ finish = 'chrome', exploded = false }: FaucetModelProps) {
  const baseRef = useRef<Group>(null);
  const bodyRef = useRef<Group>(null);
  const cartridgeRef = useRef<Group>(null);
  const handleRef = useRef<Group>(null);
  const spoutRef = useRef<Group>(null);

  const material = materials[finish];

  useFrame((state, delta) => {
    const speed = 4;
    
    if (handleRef.current) {
      handleRef.current.position.y = THREE.MathUtils.lerp(handleRef.current.position.y, exploded ? 1.5 : 0.8, delta * speed);
    }
    if (cartridgeRef.current) {
      cartridgeRef.current.position.y = THREE.MathUtils.lerp(cartridgeRef.current.position.y, exploded ? 0.8 : 0.4, delta * speed);
    }
    if (spoutRef.current) {
      spoutRef.current.position.x = THREE.MathUtils.lerp(spoutRef.current.position.x, exploded ? 0.8 : 0, delta * speed);
    }
    if (bodyRef.current) {
      bodyRef.current.position.y = THREE.MathUtils.lerp(bodyRef.current.position.y, exploded ? 0.2 : 0, delta * speed);
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Base */}
      <group ref={baseRef} position={[0, 0, 0]}>
        <mesh material={material} castShadow receiveShadow>
          <cylinderGeometry args={[0.3, 0.35, 0.1, 32]} />
        </mesh>
      </group>

      {/* Body */}
      <group ref={bodyRef} position={[0, 0, 0]}>
        <mesh material={material} position={[0, 0.4, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.25, 0.3, 0.8, 32]} />
        </mesh>
      </group>

      {/* Spout */}
      <group ref={spoutRef} position={[0, 0.5, 0]}>
        <mesh material={material} position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <cylinderGeometry args={[0.1, 0.15, 0.8, 32]} />
        </mesh>
        <mesh material={material} position={[0.8, -0.1, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 32]} />
        </mesh>
      </group>

      {/* Cartridge (Internal) */}
      <group ref={cartridgeRef} position={[0, 0.4, 0]}>
        <mesh material={cartridgeMaterial} castShadow receiveShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
        </mesh>
        <mesh material={brassMaterial} position={[0, 0.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
        </mesh>
      </group>

      {/* Handle */}
      <group ref={handleRef} position={[0, 0.8, 0]}>
        <mesh material={material} position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
        </mesh>
        <mesh material={material} position={[0.3, 0.05, 0]} rotation={[0, 0, Math.PI / 8]} castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.05, 0.1]} />
        </mesh>
      </group>
    </group>
  );
}
