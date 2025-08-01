const args = process.argv;

const newArr = args.slice(2);

console.log(`Tip amount is ₹ ${newArr[0]/newArr[1]}`);
