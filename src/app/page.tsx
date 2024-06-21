import { Button } from "@/components/ui/button";
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
      <div className='flex flex-1 w-full flex-col px-2 justify-center items-center gap-8'>
        <h1 className='text-3xl font-bold text-center'>
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p className='text-clip'>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vel, quis earum. Eos laboriosam
          soluta quae illo molestiae, sapiente quidem
          dignissimos praesentium quo! Sint totam omnis,
          necessitatibus mollitia illo optio ipsa!
        </p>
        <div className='space-x-3'>
          <Button className='ring-1' variant={"outline"}>
            Learn more
          </Button>
          <Button>Get started</Button>
        </div>
      </div>
    </div>
  );
}
