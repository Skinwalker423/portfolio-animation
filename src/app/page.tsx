import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col max-w-6xl h-full mx-auto md:flex-row'>
      <div className='relative flex-1 w-full'>
        <Image
          src={"/hero.png"}
          alt='hero'
          fill
          className='object-contain'
        />
      </div>
      <div className='flex-1 w-full'>Text container</div>
    </div>
  );
}
