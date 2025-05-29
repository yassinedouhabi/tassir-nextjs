import Header from './components/Header';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-4xl font-bold text-black'>
          Welcome to <span className='text-green-600'>Tassir</span>
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, beatae.</p>
        <div className='cta mt-6'>
          <button className='bg-black text-white text-xl font-bold w-full py-4 px-2 mt-4 rounded-4xl'>
            <Link href='/restaurants'>Make Your order now!</Link>
          </button>
        </div>
      </div>
    </>
  );
}
