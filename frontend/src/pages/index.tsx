import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-sky-100">
      <h1 className="text-4xl font-bold text-indigo-700">Tailwind v4 is working!</h1>
    </div>
     </>
  );
}
