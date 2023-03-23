import Header from '@/components/Header';
import { data } from '@/data/data';
import { transactions } from '@/data/Transactions';
import Layout from '@/layouts';
import formatCurrency, { useFormatCurrency } from '@/utils/formatCurrency';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaShoppingBag } from 'react-icons/fa';

export default function EditUser() {
	const router = useRouter();
	const { uid } = router.query;

	const matchingUser = data.find((user) => user.id === Number(uid));
	const userExists = Boolean(matchingUser);
	const matchTransactions = transactions.filter(
		(t) => t.user_id === matchingUser?.id
	);

	const x = useFormatCurrency(matchingUser?.total ?? 0).format();

	function statusClassName(status: string) {
		switch (status) {
			case 'Pending':
				return 'text-orange-500';
			case 'Completed':
				return 'text-green-500';
			case 'Failed':
				return 'text-red-100';
			default:
				return 'text-gray-500';
		}
	}

	return (
		<>
			<Head>
				<title>View User</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<div className='bg-gray-100 min-h-screen'>
					<Header />
					<div className='p-4'>
						{userExists ? (
							<div className='flex flex-col space-y-4'>
								<div className=' bg-white p-4 rounded-lg'>
									<h3 className='pb-2'>User Details</h3>
									<p>First name: {matchingUser?.name.first}</p>
									<p>last name{matchingUser?.name.last}</p>
									<p>Total paid{x}</p>
									{/* Display other user properties as needed */}
								</div>

								<div className='bg-white p-4 rounded-lg'>
									<h3 className='pb-2'>Payment History</h3>
									<ul>
										{matchTransactions.map((transaction, id) => (
											<Link
												key={id}
												href={{
													pathname: `/admin/view-transaction/[tid]`,
													query: { tid: id + 1 },
												}}>
												<li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
													<div className='bg-purple-100 rounded-lg p-3'>
														<FaShoppingBag className='text-purple-800' />
													</div>
													<div className='pl-4'>
														<p className='text-gray-800 font-bold'>
															{formatCurrency(transaction.amount)}
														</p>
														<p
															className={`${statusClassName(
																transaction.status
															)} 'text-sm'`}>
															{transaction.status}
														</p>
													</div>
													<p className='lg:flex md:hidden absolute right-6 text-sm'>
														{transaction.date}
													</p>
												</li>
											</Link>
										))}
									</ul>
								</div>
							</div>
						) : (
							<p>No user found with ID {uid}</p>
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}
