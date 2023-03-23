import Header from '@/components/Header';
import { data } from '@/data/data';
import Layout from '@/layouts';
import { useFormatCurrency } from '@/utils/formatCurrency';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function EditUser() {
	const router = useRouter();
	const { uid } = router.query;

	const matchingUser = data.find((user) => user.id === Number(uid));
	const userExists = Boolean(matchingUser);

	const x = useFormatCurrency(matchingUser?.total ?? 0).format();

	return (
		<>
			<Head>
				<title>View User</title>
			</Head>
			<Layout>
				<div className='bg-gray-100 min-h-screen'>
					<Header />
					<div className='p-4'>
						{userExists ? (
							<div className=' bg-white p-2 rounded-lg'>
								<h3>User Details</h3>
								<p>First name: {matchingUser?.name.first}</p>
								<p>last name{matchingUser?.name.last}</p>
								<p>Total paid{x}</p>
								{/* Display other user properties as needed */}
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
