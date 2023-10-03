import axios from "axios";
import Register from "./Register";

export default function App() {
	//CHANGE LATER IF DEPLOYING
	axios.defaults.baseURL = "http://localhost:3000";
	axios.defaults.withCredentials = true;
	return (
		<>
			<Register />
		</>
	);
}
