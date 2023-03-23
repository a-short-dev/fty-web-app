import { Transaction } from '@/data/Transaction';
import { transactions } from '@/data/Transactions';
import formatCurrency from '@/utils/formatCurrency';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';

interface Props {
	transactions: Transaction[];
}

function RecentTransactions() {
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
		<div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
			<h1>Recent Transactions</h1>
			<ul>
				{transactions.map((transaction, id) => (
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
	);
}

export default RecentTransactions;
