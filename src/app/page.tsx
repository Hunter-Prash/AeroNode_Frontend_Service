import Hero from '@/components/Hero';
import Trending from '@/components/Trending';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Newsletter />
      <div style={{ height: '50px' }}></div> 
    </>
  );
}
