'use client';

import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';
import { StudioLighting } from './StudioLighting';

function Loader() {
  const { progress } = useProgress();
  return <Html center><div style={{ color: 'white', fontFamily: 'sans-serif' }}>Loading... {progress.toFixed(0)}%</div></Html>;
}

interface VisualizerState {
  wallColor: string;
  floorColor: string;
  fixtureFinish: 'chrome' | 'matte-black' | 'brushed-gold';
  feature: 'bathtub' | 'shower';
}

export function BathroomVisualizer() {
  const [state, setState] = useState<VisualizerState>({
    wallColor: '#2a2a2a',
    floorColor: '#1a1a1a',
    fixtureFinish: 'matte-black',
    feature: 'bathtub',
  });

  const fixtureMaterials = {
    'chrome': new THREE.MeshStandardMaterial({ color: '#ffffff', metalness: 1, roughness: 0.1 }),
    'matte-black': new THREE.MeshStandardMaterial({ color: '#111111', metalness: 0.2, roughness: 0.8 }),
    'brushed-gold': new THREE.MeshStandardMaterial({ color: '#d4af37', metalness: 0.8, roughness: 0.3 }),
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#000' }}>
      <Canvas shadows camera={{ position: [5, 4, 5], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <StudioLighting />
          
          <group position={[0, -1, 0]}>
            {/* Floor */}
            <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial color={state.floorColor} roughness={0.2} metalness={0.1} />
            </mesh>

            {/* Back Wall */}
            <mesh receiveShadow position={[0, 2.5, -3]}>
              <boxGeometry args={[6, 5, 0.2]} />
              <meshStandardMaterial color={state.wallColor} roughness={0.6} />
            </mesh>
            
            {/* Side Wall */}
            <mesh receiveShadow position={[-3, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
              <boxGeometry args={[6, 5, 0.2]} />
              <meshStandardMaterial color={state.wallColor} roughness={0.6} />
            </mesh>

            {/* Feature (Bathtub or Shower Base) */}
            {state.feature === 'bathtub' ? (
              <group position={[-1, 0.5, -1.5]}>
                <mesh castShadow receiveShadow>
                  <boxGeometry args={[3, 1, 1.5]} />
                  <meshStandardMaterial color="#ffffff" roughness={0.1} />
                </mesh>
                {/* Bathtub Faucet */}
                <mesh material={fixtureMaterials[state.fixtureFinish]} position={[0, 0.8, 0.5]} castShadow>
                  <cylinderGeometry args={[0.05, 0.05, 0.5]} />
                </mesh>
              </group>
            ) : (
              <group position={[-1.5, 0.1, -1.5]}>
                <mesh castShadow receiveShadow>
                  <boxGeometry args={[2, 0.2, 2]} />
                  <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
                </mesh>
                {/* Shower Head */}
                <mesh material={fixtureMaterials[state.fixtureFinish]} position={[0, 3, 0]} castShadow>
                  <cylinderGeometry args={[0.1, 0.1, 0.05]} />
                </mesh>
                {/* Glass partition */}
                <mesh position={[1, 1.5, 0]}>
                  <boxGeometry args={[0.05, 3, 2]} />
                  <meshPhysicalMaterial color="#ffffff" transparent opacity={0.3} transmission={0.9} roughness={0.1} />
                </mesh>
              </group>
            )}

            {/* Vanity / Basin */}
            <group position={[1.5, 1, -2.5]}>
              <mesh castShadow receiveShadow>
                <boxGeometry args={[2, 0.1, 1]} />
                <meshStandardMaterial color="#333333" roughness={0.8} />
              </mesh>
              <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.4, 0.3, 0.3, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.1} />
              </mesh>
              {/* Basin Faucet */}
              <mesh material={fixtureMaterials[state.fixtureFinish]} position={[0, 0.5, -0.3]} castShadow>
                <cylinderGeometry args={[0.04, 0.04, 0.4]} />
              </mesh>
            </group>
          </group>

          <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={3} maxDistance={10} />
        </Suspense>
      </Canvas>

      {/* Configuration UI */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', width: '250px', background: 'rgba(10,10,10,0.8)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontFamily: 'sans-serif' }}>
        <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Room Configurator</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#aaa' }}>Feature</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setState(s => ({ ...s, feature: 'bathtub' }))} style={configButtonStyle(state.feature === 'bathtub')}>Bathtub</button>
            <button onClick={() => setState(s => ({ ...s, feature: 'shower' }))} style={configButtonStyle(state.feature === 'shower')}>Shower</button>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#aaa' }}>Fixture Finish</label>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            <button onClick={() => setState(s => ({ ...s, fixtureFinish: 'chrome' }))} style={colorButtonStyle(state.fixtureFinish === 'chrome', '#fff')}></button>
            <button onClick={() => setState(s => ({ ...s, fixtureFinish: 'matte-black' }))} style={colorButtonStyle(state.fixtureFinish === 'matte-black', '#111')}></button>
            <button onClick={() => setState(s => ({ ...s, fixtureFinish: 'brushed-gold' }))} style={colorButtonStyle(state.fixtureFinish === 'brushed-gold', '#d4af37')}></button>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#aaa' }}>Wall Texture</label>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={() => setState(s => ({ ...s, wallColor: '#2a2a2a' }))} style={colorButtonStyle(state.wallColor === '#2a2a2a', '#2a2a2a')}></button>
            <button onClick={() => setState(s => ({ ...s, wallColor: '#e3e1d9' }))} style={colorButtonStyle(state.wallColor === '#e3e1d9', '#e3e1d9')}></button>
            <button onClick={() => setState(s => ({ ...s, wallColor: '#4a5d4e' }))} style={colorButtonStyle(state.wallColor === '#4a5d4e', '#4a5d4e')}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

const configButtonStyle = (active: boolean) => ({
  flex: 1,
  padding: '8px',
  background: active ? '#fff' : 'transparent',
  color: active ? '#000' : '#fff',
  border: '1px solid #fff',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '12px',
  transition: 'all 0.2s',
});

const colorButtonStyle = (active: boolean, color: string) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  background: color,
  border: active ? '2px solid #00aaff' : '2px solid transparent',
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
});
