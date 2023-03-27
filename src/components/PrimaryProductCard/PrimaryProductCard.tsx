import Image from 'next/image';
import React from 'react';
import styles from './PrimaryProductCard.module.css';
import { NextPage } from 'next/types';

// multi-dimensional product card
// available props and value
// -- name: horizontal, value: 'true' || 'false', defaultValue: 'false'
// -- name: contentInside, value: 'true' || 'false', defaultValue: 'false'

interface PrimaryProductCardProps {
	horizontal: boolean;
	contentInside: boolean;
}
const PrimaryProductCard: NextPage<PrimaryProductCardProps> = ({
	horizontal,
	contentInside,
}) => {
	return (
		<div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
			<div
				className={`${
					styles.productCard
				} rounded-lg overflow-hidden shadow-lg dark:shadow-gray-800  cursor-pointer ${
					horizontal
						? 'flex justify-center items-start w-full col-span-3'
						: 'w-80'
				} ${
					contentInside && 'bg-center bg-no-repeat bg-cover relative'
				}`}
			>
				<div className='overflow-hidden'>
					<Image
						className={`h-80 object-cover hover:scale-[1.02] transition-all ${
							horizontal ? 'w-80' : 'w-full'
						} ${
							contentInside && `w-full h-full z-0 ${styles.image}`
						}`}
						src='https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg'
						alt='Mountain'
						width={500}
						height={50}
					/>
				</div>
				{contentInside && (
					<div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
				)}

				<div
					className={`px-6 py-4 w-full ${
						contentInside && 'absolute left-4 bottom-4 text-left'
					}`}
				>
					<div
						className={`font-bold text-xl  link-hover ${
							contentInside ? 'text-white mb-0' : 'mb-2'
						}`}
					>
						Mountain Road
					</div>
					<p
						className={` dark:text-gray-300 text-base ${
							contentInside
								? 'text-gray-300 mt-2'
								: 'text-gray-700'
						}`}
					>
						Men Black top sleeveless gown...
					</p>
					{/* translate-x-8 opacity-1 hover:translate-x-0 hover:opacity-1 transition-all */}
					<div
						className={`pb-4 ${
							contentInside &&
							`text-gray-300 ${styles.productFooter}`
						}`}
					>
						<span className='text-xl font-bold'>$45</span>{' '}
						<span
							className={`line-through  font-semibold text-sm dark:text-gray-400 ${
								contentInside
									? 'text-gray-400'
									: 'text-gray-600'
							}`}
						>
							$99.99
						</span>
					</div>
					<button
						className={`text-base cursor-pointer mt-2 font-semibold ${
							contentInside && `text-white ${styles.cardBtn}`
						}`}
					>
						Shop Now &rarr;{' '}
					</button>
				</div>
			</div>
		</div>
	);
};
export default PrimaryProductCard;
