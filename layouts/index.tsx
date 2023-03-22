import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

interface Children {
	children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: Children) {
	return (
		<div className='bg-gray-400 min-h-screen'>
			<div className='flex flex-1'>
				<Sidebar />
				<div className='block w-full'>
					<Header />
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}
