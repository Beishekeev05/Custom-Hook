import React from "react";
import { useGetUset } from "../hooks/getData";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Button, Input } from "@mui/material";

const GetUser = () => {
	const BASE_URL = "https://e8745e45a2cca274.mokky.dev/custom";

	const { data, inputValue, deleteData, onSubmit, editData, error } =
		useGetUset(BASE_URL);

	console.log(data);

	return (
		<Container>
			<form onSubmit={onSubmit}>
				<Input style={{ margin: "10px" }} onChange={inputValue} type="text" />
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</form>
			{error && <p>{error.message}</p>}
			{data.length > 0 ? (
				data.map((item) => (
					<Item key={item.id}>
						<p
							style={{
								textDecoration: data.isCompleted ? "line-through" : "none",
							}}>
							{item.title}
						</p>
						<button onClick={() => editData(item.id)}>Complete</button>
						<IconButton type="submit" onClick={() => deleteData(item.id)}>
							<DeleteIcon />
						</IconButton>
					</Item>
				))
			) : (
				<p>Пока елементов нет</p>
			)}
		</Container>
	);
};

export default GetUser;
const Container = styled.div`
	width: 800px;
	margin: 10px auto;
	padding: 10px;
	height: 350px;
	overflow: hidden;
	overflow-y: scroll;
	/* gap: calc(10px + 5%) calc(20px + 2%); */
	border: 1px solid black;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

const Item = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	margin: 5px 0;
	border: 1px solid #ccc;
`;
