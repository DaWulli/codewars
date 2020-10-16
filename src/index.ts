import {past} from './clock/clock';

export async function main(): Promise<void> {
	console.log(past(1, 1, 1));
}

main()
	.catch((err) => {
		console.log(err);
	});