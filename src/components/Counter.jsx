import React from "react";
import Button from "@mui/material/Button";
import { useCounter } from "../hooks/counter";
import styled from "styled-components";
function Counter() {
	const { count, increment, incrementTwo, decrement, decrementTwo, reset } =
		useCounter();
	return (
		<Container>
			<h1>{count}</h1>
			<Button
				sx={{ width: "320px", height: "35px" }}
				variant="contained"
				onClick={increment}>
				increment + 1
			</Button>
			<Button
				sx={{ width: "320px", height: "35px" }}
				variant="contained"
				onClick={incrementTwo}>
				increment + 4
			</Button>
			<Button
				sx={{ width: "320px", height: "35px" }}
				variant="contained"
				onClick={decrement}>
				decrement -1
			</Button>
			<Button
				sx={{ width: "320px", height: "35px" }}
				variant="contained"
				onClick={decrementTwo}>
				decrement - 2
			</Button>
			<Button variant="contained" onClick={reset}>
				Reset
			</Button>
		</Container>
	);
}

export default Counter;
const Container = styled.div`
	width: 700px;
	min-height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 auto;
	gap: 20px;
	background-color: white;
	border-radius: 10px;
	border: 1px solid black;
	position: relative;
	h1 {
		position: absolute;
		top: 32%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: sans-serif;
	}
`;
