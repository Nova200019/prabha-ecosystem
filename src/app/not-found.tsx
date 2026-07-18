import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg pt-24 pb-20">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-br from-gold to-yellow-600 mb-6 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-medium mb-4">Lost in the showroom?</h2>
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto">
          We can&apos;t seem to find the page you&apos;re looking for. It might have been moved or no longer exists.
        </p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </main>
  );
}
