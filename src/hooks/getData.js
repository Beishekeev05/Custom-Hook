import { useState, useEffect } from "react";

export const useGetUset = (url) => {
	const [data, setData] = useState([]);
	const [dataValue, setDataValue] = useState("");

	//! Загрузка данных при монтировании компонента
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const dats = await response.json();
				setData(dats);
			} catch (error) {
				throw new Error(error.message);
			}
		};
		fetchData();
	}, [url]);

	const inputValue = (e) => {
		setDataValue(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		const newData = {
			title: dataValue,
			isCompleted: false,
		};

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newData),
			});
			const dats = await response.json();
			setData((prevData) => [...prevData, dats]); //! Добавление нового элемента к существующим данным
		} catch (error) {
			throw new Error(error);
		}
	};

	//! Удаление данных
	const deleteData = async (id) => {
		try {
			await fetch(`${url}/${id}`, {
				method: "DELETE",
			});
			setData((prevData) => prevData.filter((item) => item.id !== id)); //! Удаление элемента из данных
		} catch (error) {
			throw new Error(error);
		}
	};

	const editData = async (id) => {
		try {
			await fetch(`${url}/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ isCompleted: true }),
			});
			setData((prevData) =>
				prevData.map((item) =>
					item.id === id ? { ...item, isCompleted: true } : item
				)
			);
		} catch (error) {
			throw new Error(error);
		}
	};

	return { data, deleteData, inputValue, onSubmit, editData };
};
