import { useState } from "react";

export const useCounter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => {
		if (count > 0) {
			setCount((prev) => prev - 1);
		}
	};
	const incrementTwo = () => setCount((prev) => prev + 4);
	const decrementTwo = () => {
		if (count > 0) {
			setCount((prev) => prev - 2);
		}
	};
	const reset = () => {
		const value = confirm("Вы точна хотите очистить ");
		if (value) {
			setCount(0);
		}
	};
	return { increment, decrement, incrementTwo, decrementTwo, reset, count };
};
