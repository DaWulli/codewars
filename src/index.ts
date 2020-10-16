import {past} from './clock/clocks';

export async function main(): Promise<void> {
	console.log(past(0, 1, 1));
}

main()
	.catch((err) => {
		console.log(err);
	});