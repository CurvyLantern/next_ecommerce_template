import Link from 'next/link';
import React from 'react';

export default function ProductQuickViewModal() {
	return (
		<div>
			<input
				type='checkbox'
				id='productQuickViewModal'
				className='modal-toggle'
			/>
			<div className='modal'>
				<div className='modal-box relative w-10/12 max-w-[1000px] p-0 md:p-0'>
					<label
						htmlFor='productQuickViewModal'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<div className=' dark:bg-gray-900'>
						<div className='block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 items-start'>
							<div className='col-span-4 h-full'>
								<div className='transition duration-150 ease-in hover:opacity-90 h-full'>
									<img
										src='https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg'
										alt='Maniac Red Boys--3'
										className='object-cover w-full h-full'
									/>
								</div>
							</div>
							<div className='col-span-5 pt-8 lg:pt-0'>
								<div className='border-b border-gray-300'>
									<h2 className='text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold dark:text-white mb-3.5 mt-5'>
										Maniac Red Boys
									</h2>
									<p className='text-body text-sm lg:text-base leading-6 lg:leading-8 dark:text-gray-300'>
										Children’s clothing/ kids wear is
										usually more casual than adult clothing,
										fit play and rest. Hosiery is usually
										used. More recently, however, tons of
										childrenswear is heavily influenced by
										trends in adult fashion
									</p>
									<div className='flex items-center mt-5 dark:text-gray-300'>
										<div className='text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pr-2 md:pr-0 lg:pr-2 2xl:pr-0'>
											$40.00
										</div>
										<span className='line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl pl-2'>
											$50.00
										</span>
									</div>
								</div>
								<div className='pb-3 dark:text-gray-300 '>
									<div className='mb-4'>
										<h3 className='text-base md:text-lg text-heading font-semibold mb-2.5 capitalize'>
											size
										</h3>
										<ul className='colors flex flex-wrap'>
											{['S', 'M', 'L', 'XL'].map(
												(size) => (
													<li
														key={size}
														className='cursor-pointer rounded border hover:border-black dark:hover:border-white border-gray-100 dark:border-gray-600 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mr-2 md:mr-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out '
													>
														{size}
													</li>
												)
											)}
										</ul>
									</div>
									<div className='mb-4 dark:text-gray-300'>
										<h3 className='text-base md:text-lg text-heading font-semibold mb-2.5 capitalize'>
											color
										</h3>
										<ul className='colors flex flex-wrap '>
											{[
												'bg-orange-400',
												'bg-pink-400',
												'bg-violet-600',
												'bg-red-500',
											].map((color) => (
												<li
													key={color}
													className='cursor-pointer rounded border hover:border-black dark:hover:border-white border-gray-100 dark:border-gray-600 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mr-2 md:mr-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out'
												>
													<span
														className={`h-full w-full rounded block ${color}`}
													/>
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className='space-s-4 space-y-5 md:pr-32 lg:pr-12 2xl:pr-32 3xl:pr-48 border-b dark:text-gray-300 border-gray-300 py-8'>
									<div className='flex gap-2 items-center '>
										<div className='group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300'>
											<button
												className='flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading'
												disabled
											>
												{/* <MinusIcon className='h-3 w-3' /> */}
												-
											</button>
											<span className='font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24'>
												1
											</span>
											<button className='flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading'>
												{/* <PlusIcon className='h-3 w-3' /> */}
												+
											</button>
										</div>
										<button
											className='h-11 md:h-12 py-2 w-full md:w-6/12 xl:w-full  rounded-md bg-indigo-600 px-3.5  text-base font-semibold leading-7 text-white hover:bg-indigo-500'
											disabled
										>
											Add to cart
										</button>
									</div>
									<div>
										<Link href={'/products/33'}>
											<button className='h-11 md:h-12 py-2 md:w-6/12 xl:w-full  rounded-md bg-indigo-600 px-3.5  text-base font-semibold leading-7 text-white hover:bg-indigo-500'>
												View Details
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
