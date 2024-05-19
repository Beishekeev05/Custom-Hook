import { useState } from "react";

const useInput = ({ type }) => {
	const [data, setData] = useState([]);
	const [value, setValue] = useState("");
	const [error, setError] = useState("");

	const handleValidation = () => {
		let errorMessage = "";

		switch (type) {
			case "text":
				if (!value.trim()) {
					errorMessage = "Text is required";
				}
				break;
			case "email":
				if (!value.trim()) {
					errorMessage = "Email is required";
				} else if (!/\S+@\S+\.\S+/.test(value)) {
					errorMessage = "Invalid email format";
				}
				break;
			case "password":
				if (!value.trim()) {
					errorMessage = "Password is required";
				} else if (value.trim().length < 8) {
					errorMessage = "Password must be at least 8 characters long";
				}
				break;
			default:
				break;
		}

		setError(errorMessage);
		return errorMessage === "";
	};

	const onChange = (e) => {
		setValue(e.target.value);
		setError("");
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const isValid = handleValidation();

		if (isValid) {
			const newData = { [type]: value };
			setData((prevData) => [...prevData, newData]);
			setValue("");
		}
	};

	return {
		value,
		onChange,
		onSubmit,
	};
};

export default useInput;
