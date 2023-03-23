import Header from '@/components/Header';
import { data } from '@/data/data';
import { transactions } from '@/data/Transactions';
import Layout from '@/layouts';
import { useFormatCurrency } from '@/utils/formatCurrency';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function EditUser() {
	const router = useRouter();
	const { tid } = router.query;

	const matchingTransaction = transactions.find((t) => t.id === Number(tid));
	const TransactionExists = Boolean(matchingTransaction);
	const sender = data.find((u) => u.id === matchingTransaction?.id);
	const x = useFormatCurrency(matchingTransaction?.amount ?? 0).format();

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
						{TransactionExists ? (
							<div className='flex flex-col space-y-4'>
								<div className=' bg-white p-4 rounded-lg'>
									<h3 className='pb-2'>Transaction Details</h3>
									<p>Sender : {sender?.name.first}</p>
									<p>Status{matchingTransaction?.status}</p>
									<p>Total paid{x}</p>
									{/* Display other user properties as needed */}
								</div>

								<div className='bg-white p-4 rounded-lg'>
									<h3 className='pb-2'>Payment History</h3>
								</div>
							</div>
						) : (
							<p>No user found with ID {tid}</p>
						)}
					</div>
				</div>
			</Layout>
		</>
	);
}
