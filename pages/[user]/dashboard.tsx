import BarChart from '@/components/BarChart';
import Header from '@/components/Header';
import RecentTransactions from '@/components/RecentTransactions';
import TopCards from '@/components/TopCards';
import Layout from '@/layouts';
import Head from 'next/head';

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>FTY WEB APP</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<main className='bg-gray-100 min-h-screen'>
					<Header />
					<TopCards />
					<div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
						<BarChart />

						<RecentTransactions />
					</div>
				</main>
			</Layout>
		</>
	);
}
