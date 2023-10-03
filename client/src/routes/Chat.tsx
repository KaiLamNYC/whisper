import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Chat() {
	const { setUsername, username } = useContext(UserContext);

	return (
		<div>
			<h1>WELCOME TO WHISPER!!!!</h1>
			<p>{username}</p>
		</div>
	);
}
