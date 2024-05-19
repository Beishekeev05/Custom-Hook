import { Button, Typography } from "@mui/material";
import { usePamodora } from "../hooks/pomodoro";

function Pomodoro() {
	const {
		formatTime,
		handleReset,
		handleStart,
		handleStop,
		time,
		isActive,
	} = usePamodora();
	return (
		<div>
			<Typography style={{ margin: "5px" }} variant="h4">
				{formatTime(time)}
			</Typography>
			<Button
				style={{ margin: "5px" }}
				variant="outlined"
				onClick={handleStart}
				disabled={isActive}>
				Start
			</Button>
			<Button
				style={{ margin: "5px" }}
				variant="outlined"
				onClick={handleStop}
				disabled={!isActive}>
				Stop
			</Button>
			<Button
				style={{ margin: "5px" }}
				variant="outlined"
				onClick={handleReset}>
				Reset
			</Button>
		</div>
	);
}

export default Pomodoro;
