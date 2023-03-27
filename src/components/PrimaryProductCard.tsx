import Image from 'next/image';
import React from 'react';

export default function PrimaryProductCard() {
	return (
		<div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
			<div className='rounded overflow-hidden shadow-lg dark:shadow-gray-800'>
				<Image
					// className='w-full'
					src='https://images.pexels.com/photos/3385662/pexels-photo-3385662.jpeg'
					alt='Mountain'
					width={500}
                    height={500}
				/>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>Mountain</div>
					<p className='text-gray-700 dark:text-gray-300 text-base'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Voluptatibus quia, Nonea! Maiores et perfe
					</p>
				</div>
				<div className='px-6 pt-4 pb-2'>
					<span className='inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2'>
						photography
					</span>
					<span className='inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2'>
						travel
					</span>
					<span className='inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2'>
						winter
					</span>
				</div>
			</div>
		</div>
	);
}
