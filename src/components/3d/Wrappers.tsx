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

export function FaucetModelWrapper() {
  return <FaucetModelInner />;
}

export function TileExplodedWrapper() {
  return <TileExplodedInner inView={true} />;
}
