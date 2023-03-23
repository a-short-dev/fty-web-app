import { Transaction } from './Transaction';

export const data: Transaction[] = [
	{
		id: 1,
		name: {
			first: 'Bolu',
			last: 'Abiodun',
		},
		total: 2795.95,
		status: 'Pending',
		method: 'Cash Deposit',
		date: '15 Minutes ago',
	},
	{
		id: 2,
		name: {
			first: 'Tunde',
			last: 'Adams',
		},
		total: 1195.95,
		status: 'Pending',
		method: 'Bank Transfer',
		date: '23 Minutes ago',
	},
	{
		id: 3,
		name: {
			first: 'Sarah',
			last: 'Abiodun',
		},
		total: 495.85,
		status: 'Completed',
		method: 'Cash',
		date: '1 Hour ago',
	},
	{
		id: 4,
		name: {
			first: 'Joseph',
			last: 'Choo',
		},
		total: 150.45,
		status: 'Pending',
		method: 'Bank Transfer',
		date: '1 Hour ago',
	},
	{
		id: 5,
		name: {
			first: 'Steven',
			last: 'Ogunsola',
		},
		total: 175.25,
		status: 'Pending',
		method: 'Cash Deposit',
		date: '2 Hour ago',
	},
	{
		id: 6,
		name: {
			first: 'Laura',
			last: 'Croft',
		},
		total: 1295.75,
		status: 'Completed',
		method: 'Check',
		date: '3 Hour ago',
	},
	{
		id: 7,
		name: {
			first: 'Michael',
			last: 'Jones',
		},
		total: 89.95,
		status: 'Completed',
		method: 'MasterCard',
		date: '3 Hour ago',
	},
	{
		id: 8,
		name: {
			first: 'James',
			last: 'Bond',
		},
		total: 689.45,
		status: 'Completed',
		method: 'Visa',
		date: '7 Hour ago',
	},
	{
		id: 9,
		name: {
			first: 'Haley',
			last: 'Whiting',
		},
		total: 14.99,
		status: 'Completed',
		method: 'PayPal',
		date: '1 Day ago',
	},
	{
		id: 10,
		name: {
			first: 'Tim',
			last: 'Thomas',
		},
		total: 218.99,
		status: 'Completed',
		method: 'MasterCard',
		date: '1 Day ago',
	},
];
