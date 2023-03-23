import { data } from '@/data/data';
import Layout from '@/layouts';
import formatCurrency from '@/utils/formatCurrency';
import Head from 'next/head';
import Link from 'next/link';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';

export default function User() {
	return (
		<>
			<Head>
				<title>User Managment</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<div className='bg-gray-100 min-h-screen'>
					<div className='flex justify-between p-4'>
						<h2>User Management</h2>
						<h2>Welcome Back, Leke</h2>
					</div>
					<div className='p-4'>
						<div className='pb-4 flex space-x-4'>
							<button className='bg-blue-200 py-2 px-4  backdrop:before:  rounded font-medium text-center'>
								Add New User
							</button>

							<button className='bg-purple-200 py-2 px-4 backdrop:before: rounded font-medium text-center'>
								Add New Staff
							</button>
						</div>
						<div className='w-full p-4 border rounded-lg bg-white overflow-y-auto'>
							<div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
								<span>Name</span>
								<span className='sm:text-left text-right'>Email</span>
								<span className='hidden md:grid'>Total</span>
								<span className='hidden sm:grid'>Date Joined</span>
							</div>
							<ul>
								{data.map((customer, id) => (
									<Link
										key={id}
										href={{
											pathname: '/admin/view-user/[uid]',
											query: { uid: id + 1 },
										}}>
										<li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
											<div className='flex items-center'>
												<div className='bg-purple-100 p-3 rounded-lg'>
													<BsPersonFill className='text-purple-800' />
												</div>
												<p className='pl-4'>
													{customer.name.first + ' ' + customer.name.last}
												</p>
											</div>
											<p className='text-gray-600 pl-4 sm:text-left text-right'>
												{customer.name.first}@gmail.com
											</p>
											<p className='hidden md:flex pl-4'>
												{formatCurrency(customer.total)}
											</p>
											<div className='sm:flex hidden justify-between items-center'>
												<p>{customer.date}</p>

												<BsThreeDotsVertical />
											</div>
										</li>
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
