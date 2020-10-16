import {rowSumOddNumbers} from './sum-of-odd-numbers/sum-of-odd-numbers';

export async function main(): Promise<void> {
	console.log(rowSumOddNumbers(4));
}

main()
	.catch((err) => {
		console.log(err);
	});