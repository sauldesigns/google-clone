export default function Avatar({ url }) {
	return <img className='h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 object-cover' loading='lazy' src={url} alt='profile picture' />;
}
