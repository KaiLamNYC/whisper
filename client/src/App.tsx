import axios from "axios";
import Routes from "./Routes";
import { UserContextProvider } from "./context/UserContext";

export default function App() {
	//CHANGE LATER IF DEPLOYING
	axios.defaults.baseURL = "http://localhost:3000";
	axios.defaults.withCredentials = true;

	return (
		<UserContextProvider>
			<Routes />
		</UserContextProvider>
	);
}
