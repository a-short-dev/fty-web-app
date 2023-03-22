import Link from 'next/link';
import { FiSettings } from 'react-icons/fi';
import { RxDashboard, RxPerson } from 'react-icons/rx';
const Sidebar = () => {
  return (
    <div className='w-20 lg:w-60 min-h-screen bg-white p-4 border-r-[1px] flex flex-col justify-between'>
      <div className='flex flex-col items-center'>
        <Link href='/'>
          <div className='bg-purple-800 p-3 rounded-lg inline-block'>
            <span className='uppercase font-extrabold text-white text-xl tracking-wide'>
              fty
            </span>
          </div>
        </Link>
        <span className='border-b-[1px] border-gray-300 w-full p-2 '></span>
        <Link href='/'>
          <div className='flex items-center gap-3 mt-5'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
            <span className='font-medium text-base hidden lg:inline-block w-20'>
              Dashboard
            </span>
          </div>
        </Link>
        <Link href='/'>
          <div className='flex items-center gap-3'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
            <span className='font-medium text-base hidden lg:inline-block w-20'>
              User Manegement
            </span>
          </div>
        </Link>

        <Link href='/'>
          <div className='flex items-center gap-3'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4  p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
            <span className='font-medium text-base hidden lg:inline-block w-20'>
              Settings
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
