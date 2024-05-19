import React from "react";
import Counter from "./components/Counter";
import EmailInput from "./components/Input";
import Pomodoro from "./components/Pomodoro";
import GetUser from "./components/GetUser";
function App() {
	return (
		<>
			<Counter />
			<EmailInput />
			<Pomodoro />
			<GetUser />
		</>
	);
}

export default App;
