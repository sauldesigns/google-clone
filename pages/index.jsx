import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default function Home() {
	const searchInputRef = useRef(null);
	const router = useRouter();

	const search = (e) => {
		e.preventDefault();

		const term = searchInputRef.current.value;
		console.log(term);
		if (!term) return;

		router.push(`/search?term=${term}`);
	};
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Head>
				<title>Google Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />

			{/* Body */}
			<form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
				<Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' height={100} width={300} />

				<div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
					<SearchIcon className='h-5 mr-3 text-gray-500' />

					<input ref={searchInputRef} type='text' className='flex-grow focus:outline-none' />

					<MicrophoneIcon className='h-5 ' />
				</div>

				<div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
					<button className='btn' onClick={search}>
						Google Search
					</button>
					<button className='btn' onClick={search}>
						I'm Feeling Lucky
					</button>
				</div>
			</form>

			{/* Footer */}

			<Footer />
		</div>
	);
}
