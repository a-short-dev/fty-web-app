export interface Transactions {
	id: number;
	user_id?: number;
	amount: number;
	status: string;
	method: string;
	date: string;
}

export interface Transaction {
	id: number;
	name: {
		first: string;
		last: string;
	};
	total: number;
	status: 'Pending' | 'Failed' | 'Completed';
	method: string;
	date: string;
}
