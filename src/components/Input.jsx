import React from "react";
import useInput from "../hooks/input";
import styled from "styled-components";
import { Button, FormLabel, Input, StepLabel } from "@mui/material";
const MyComponent = () => {
	const textInput = useInput({ type: "text" });
	const passwordInput = useInput({ type: "password" });
	const emailInput = useInput({ type: "email" });

	return (
		<Container>
			<form onSubmit={emailInput.onSubmit}>
				<FormLabel>Email:</FormLabel>
				<Input style={{ margin: "10px" }} type="email" {...emailInput} />
				<Button style={{ margin: "10px" }} variant="contained">
					Submit
				</Button>
			</form>

			<form onSubmit={passwordInput.onSubmit}>
				<FormLabel>Password:</FormLabel>
				<Input style={{ margin: "10px" }} type="password" {...passwordInput} />
				<Button style={{ margin: "10px" }} variant="contained" type="submit">
					Submit
				</Button>
			</form>

			<form onSubmit={textInput.onSubmit}>
				<FormLabel>Text:</FormLabel>
				<Input style={{ margin: "10px" }} type="text" {...textInput} />
				{textInput.error && alert(textInput.error)}
				<Button style={{ margin: "10px" }} variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default MyComponent;
const Container = styled.div`
	width: 450px;
	height: 250px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin: 10px auto;
`;
