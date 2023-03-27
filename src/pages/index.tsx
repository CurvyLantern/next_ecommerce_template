import PrimaryProductCard from '@/components/PrimaryProductCard/PrimaryProductCard';
import { notify } from '@/libs/toast';
import { GetServerSideProps, NextPage } from 'next/types';
import Container from '@/components/containers/Container';
import Footer from '@/components/Footers/Footer';
import Header from '@/components/Headers/Header';

export const getServerSideProps: GetServerSideProps<{
	title: string;
}> = async () => {
	return {
		props: {
			title: 'Hi there this is a basic next js page rendered with data from server',
		},
	};
};

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
			<Container className='h-52 my-10 bg-gray-800 text-center text-white'></Container>

			{/* TODO: this is just for demo purposes */}
			{/* show Demo products */}
			<div>
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
			</div>

			{/* a common footer */}
			<Footer />
		</>
	);
};
export default HomePage;
