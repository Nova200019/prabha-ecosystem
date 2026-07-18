'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Group } from 'three';

interface TileExplodedProps {
  inView?: boolean;
}

export function TileExploded({ inView = false }: TileExplodedProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<Group>(null);

  const layers = [
    { name: 'Protective Glaze', color: '#ffffff', transparent: true, opacity: 0.6, roughness: 0.1, yOffset: 0.6 },
    { name: 'HD Digital Print', color: '#aaaaaa', transparent: false, opacity: 1, roughness: 0.5, yOffset: 0.4 },
    { name: 'Porcelain Core', color: '#dddddd', transparent: false, opacity: 1, roughness: 0.9, yOffset: 0.2 },
    { name: 'Structural Backing', color: '#888888', transparent: false, opacity: 1, roughness: 1.0, yOffset: 0 },
  ];

  const layerRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    const isExploded = inView || hovered;
    const speed = 4;
    
    layers.forEach((layer, index) => {
      const mesh = layerRefs.current[index];
      if (mesh) {
        const targetY = isExploded ? layer.yOffset : 0;
        mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, targetY, delta * speed);
      }
    });
    
    if (groupRef.current && !isExploded) {
      groupRef.current.rotation.y += delta * 0.2;
    } else if (groupRef.current && isExploded) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, Math.PI / 4, delta * speed);
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      position={[0, -0.5, 0]}
    >
      {layers.map((layer, index) => (
        <mesh 
          key={layer.name} 
          ref={el => { layerRefs.current[index] = el; }}
          position={[0, 0, 0]}
          castShadow 
          receiveShadow
        >
          <boxGeometry args={[2, 0.05, 2]} />
          <meshStandardMaterial 
            color={layer.color} 
            transparent={layer.transparent} 
            opacity={layer.opacity}
            roughness={layer.roughness}
            metalness={0.1}
          />
          {(inView || hovered) && (
            <Html position={[1.2, 0, 0]} center style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}>
              <div style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '12px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
                {layer.name}
              </div>
            </Html>
          )}
        </mesh>
      ))}
    </group>
  );
}
