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
