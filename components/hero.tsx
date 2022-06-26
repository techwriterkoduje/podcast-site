import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full bg-black text-white flex flex-col justify-center align-middle gap-5 py-12">
      <h1 className="text-5xl font-bold text-center">Podcast</h1>
      <div className="mx-auto">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          layout="fixed"
          alt="Tech Writer koduje"
        />
      </div>
    </div>
  );
}
