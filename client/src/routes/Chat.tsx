import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { UserContext } from "../context/UserContext";

export default function Chat() {
	const navigate = useNavigate();
	const { setUsername, username, setId } = useContext(UserContext);

	useEffect(() => {
		axios
			.get("http://localhost:3000/user/getCurrentUser", {
				withCredentials: true,
			})
			.then((response) => {
				setUsername(response.data.payload.username);
				setId(response.data.payload.id);
				console.log(response);
			});
	}, [username]);

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
