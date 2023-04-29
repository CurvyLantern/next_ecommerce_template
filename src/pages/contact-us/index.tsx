import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
const info = [
	{
		icon: FaMapMarkerAlt,
		title: 'Address',
		description: 'Banani, Dhaka, Bangladesh',
	},
	{
		icon: FaPhoneAlt,
		title: 'Phone',
		description: '+880 123 456 789',
	},
	{
		icon: FaEnvelope,
		title: 'Email',
		description: 'Banani, Dhaka, Bangladesh',
	},
];

const ContactPage = () => {
	return (
		<div className=' '>
			<div className='w-full flex flex-col justify-center items-center'>
				<Image
					src='https://i.ibb.co/DQw8cKj/pexels-arina-krasnikova-5424945.jpg'
					alt='hello'
					width={200}
					height={200}
					unoptimized
					className=' w-full h-[200px] md:h-[400px] lg:h-[500px] '
					loading='lazy'
				/>
				<div className='absolute  flex justify-center items-center'>
					<h1 className='text-white text-4xl font-bold'>Text in the middle</h1>
				</div>
			</div>
			{/* fjfjfjf */}
			<div className='flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white w-10/12 mx-auto m-6  justify-center items-center '>
				<div className='p-8 border border-black rounded w-full md:w-10/12 '>
					<h1 className='text-black font-bold'>Find Us Here</h1>
					{info.map((item, index) => (
						<div key={index} className='flex mt-8 '>
							<div className=' flex justify-center items-center bg-slate-200 px-3 py-2 rounded-md text-black'>
								<item.icon />
							</div>
							<div className='ml-3'>
								<h1 className='text-black font-bold'>{item.title} </h1>
								<p className='text-black'>{item.description}</p>
							</div>
						</div>
					))}
					<div className='mt-4'>
						<Image
							src='https://i.ibb.co/zmhDBw7/map-image.jpg'
							height={100}
							width={500}
							unoptimized
							className='rounded'
							alt='hello'
						/>
					</div>
				</div>
				{/* sstac */}
				<div className='container my-24 px-6 mx-auto'>
					<section className='mb-32 text-center text-gray-800'>
						<div className='max-w-[700px] mx-auto px-3 lg:px-6'>
							<h2 className='text-3xl font-bold mb-12'>Contact us</h2>
							<form>
								<div className='form-group mb-6'>
									<input
										type='text'
										className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
										id='exampleInput7'
										placeholder='Name'
									/>
								</div>
								<div className='form-group mb-6'>
									<input
										type='email'
										className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
										id='exampleInput8'
										placeholder='Email address'
									/>
								</div>
								<div className='form-group mb-6'>
									<textarea
										className='
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          '
										id='exampleFormControlTextarea13'
										rows={3}
										placeholder='Message'></textarea>
								</div>
								<div className='form-group form-check text-center mb-6'>
									<input
										type='checkbox'
										className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
										id='exampleCheck87'
										checked
									/>
									<label
										className='form-check-label inline-block text-gray-800'
										htmlFor='exampleCheck87'>
										Send me a copy of this message
									</label>
								</div>
								<button
									type='submit'
									className='
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out'>
									Send
								</button>
							</form>
						</div>
					</section>
				</div>
			</div>
			{/* ajfjfjsdf */}

			<div className='container flex flex-col justify-center items-center mx-auto my-8 py-10'>
				<div
					className='max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center '
					style={{
						backgroundImage:
							'url("https://i.ibb.co/WFx6j4k/wardrobe-full-with-clothes-and-shoes-and-umbrellas.jpg")',
					}}></div>
				<div className='bg-white -mt-24 shadow-md rounded-lg overflow-hidden'>
					<div className='items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center'>
						<div className='px-2 -mt-6'>
							<div className='text-center'>
								<h1 className='font-normal text-3xl text-grey-800 leading-loose my-3 w-full'>
									Get the Latest Information
								</h1>
								<div className='w-full text-center'>
									<form action='#'>
										<div className='max-w-sm mx-auto p-1 pr-0 flex items-center'>
											<input
												type='email'
												placeholder='yourmail@example.com'
												className='flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none'
											/>
											<button
												type='submit'
												className='bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3'>
												Get started
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
