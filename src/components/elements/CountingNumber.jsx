import { useEffect, useState } from "react";

const CountingNumber = ({ number, startNumber=0, duration=1000, milesSeparator='' }) => {

	const [count, setCount] = useState(startNumber);

	let startTimestamp = null;

	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = timestamp - startTimestamp;
		const increment = Math.min(startNumber + (number - startNumber) * (progress / duration), number);
		setCount(Math.floor(increment));
		if (progress < duration) {
			requestAnimationFrame(step);
		} else {
			setCount(number);
		}
	};

	useEffect(() => {

		requestAnimationFrame(step);

		return () => {
			startTimestamp = null; // Cleanup on unmount
		};
	}, [])
	

	return <>{count.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/,/g, milesSeparator)}</>;
};

export default CountingNumber;
