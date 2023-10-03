import Cookies from "js-cookie";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { UserContext } from "../context/UserContext";

export default function Chat() {
	const navigate = useNavigate();
	const { setUsername, username } = useContext(UserContext);

	const handleSignOut = () => {
		Cookies.remove("token");
		setUsername("");
		navigate("/");
	};

	return (
		<div>
			<h1>WELCOME TO WHISPER!!!!</h1>
			<p>{username}</p>
			<Button onClick={handleSignOut}>SIGN OUT</Button>
		</div>
	);
}
