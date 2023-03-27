import Container from '@/components/containers/Container';
import Footer from '@/components/Footers/Footer';
import Header from '@/components/Headers/Header';
import PrimaryProductCard from '@/components/PrimaryProductCard/PrimaryProductCard';
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
      <>
        <div className='flex'>
          {[...Array(4)].map((product, index) => (
            <PrimaryProductCard
              key={index}
              horizontal={false}
              contentInside={3 % (index + 1) !== 0 ? true : false}
            />
          ))}
        </div>
        <PrimaryProductCard horizontal={true} contentInside={false} />
      </>

      {/* a common footer */}
      <Footer />
    </>
  );
};
export default HomePage;
