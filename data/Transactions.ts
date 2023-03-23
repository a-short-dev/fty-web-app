import { Transactions } from './Transaction';

export const transactions: Transactions[] = [
	{
		id: 1,
		user_id: 1,
		amount: 6500,
		status: 'Pending',
		method: 'Cash Deposit',
		date: '15 Minutes ago',
	},
	{
		id: 2,
		user_id: 1,
		amount: 200300,
		status: 'Completed',
		method: 'Bank Transfer',
		date: '35 Minutes ago',
	},
	{
		id: 3,
		user_id: 2,
		amount: 15030,
		status: 'Pending',
		method: 'Cash Deposit',
		date: '1 day ago',
	},
	{
		id: 4,
		amount: 2120,
		status: 'Pending',
		method: 'Cash Deposit',
		date: '2 Days ago',
	},

	{
		id: 5,
		amount: 25180,
		status: 'Pending',
		method: 'Cash Deposit',
		date: '2 Days ago',
	},
	{
		id: 6,
		amount: 54500,
		status: 'Failed',
		method: 'Bank Transfer',
		date: '6 Days ago',
	},
	{
		id: 7,
		user_id: 1,
		amount: 55001,
		status: 'Pending',
		method: 'Bank Transfer',
		date: '8 Days ago',
	},
];
