import { useState, useEffect, useRef } from "react";

export const usePamodora = () => {
	const [time, setTime] = useState(0);

	const [isActive, setIsActive] = useState(false);

	const timerRef = useRef(null);

	useEffect(() => {
		if (isActive) {
			timerRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else if (!isActive && timerRef.current !== null) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}

		return () => clearInterval(timerRef.current);
	}, [isActive]);

	const handleStart = () => {
		setIsActive(true);
	};

	const handleStop = () => {
		setIsActive(false);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	function formatTime(seconds) {
		const getMinutes = Math.floor(seconds / 60);
		const getSeconds = seconds % 60;
		return `${getMinutes.toString().padStart(2, "0")}:${getSeconds
			.toString()
			.padStart(2, "0")}`;
	}
	return {
		formatTime,
		handleReset,
		handleStart,
		handleStop,
		time,
		isActive,
	};
};
