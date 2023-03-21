import { notify } from '@/libs/toast';
import { GetServerSideProps, NextPage } from 'next/types';

export const getServerSideProps: GetServerSideProps<{
  title: string;
}> = async () => {
  return {
    props: {
      title:
        'Hi there this is a basic next js page rendered with data from server',
    },
  };
};

// typescript interface
interface HomePageProps {
  title: string;
}
const HomePage: NextPage<HomePageProps> = ({ title }) => {
  return (
    <div className='bg-white py-10 h-screen text-center'>
      <h1 className='text-blue-400 text-5xl my-10'>{title}</h1>

      <header className='text-3xl'>
        <h2 className='font-roboto'>
          Roboto font : server side rendered by next font.
        </h2>
        <h2 className='font-inter'>
          Inter font : server side rendered by next font.
        </h2>
      </header>
      <p className='text-xl p-2 text-black'>Here are some Daisy ui buttons</p>

      <div className='flex items-center justify-around '>
        <button
          onClick={() => {
            notify('hey there i am a toast ');
          }}
          className='btn btn-outline btn-info'>
          Info
        </button>
        <button
          onClick={() => {
            notify.success('hey there i am a toast ');
          }}
          className='btn btn-outline btn-success'>
          Success
        </button>
        <button className='btn btn-outline btn-warning'>Warning</button>
        <button
          onClick={() => {
            notify.error('hey there i am a toast ');
          }}
          className='btn btn-outline btn-error'>
          Error
        </button>
      </div>
    </div>
  );
};

export default HomePage;

