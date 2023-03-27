import Container from '@/components/containers/Container';
import Footer from '@/components/Footers/Footer';
import Header from '@/components/Headers/Header';
import PrimaryProductCard from '@/components/PrimaryProductCard';
import { NextPage } from 'next/types';

// typescript interface
interface HomePageProps {
  title: string;
}
const HomePage: NextPage<HomePageProps> = () => {
  return (
    <>
      {/* a common header  */}
      <Header />

      {/* Slider */}
      <div className='h-72 bg-gray-800 text-center text-white'>
        Slider will go here
      </div>

      {/* show collection */}
      <Container className='h-52 my-10 bg-gray-800 text-center text-white'>
        Various collections
      </Container>

      {/* TODO: this is just for demo purposes */}
      {/* show Demo products */}
      <div>
        {Array(20)
          .fill(0)
          .map((_, index) => {
            return <PrimaryProductCard key={index} />;
          })}
      </div>

      {/* a common footer */}
      <Footer />
    </>
  );
};
export default HomePage;
