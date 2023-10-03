import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
	const [username, setUsername] = useState(null);
	const [id, setId] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:3000/user/getCurrentUser", {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response);
			});
	}, []);

	return (
		<UserContext.Provider value={{ username, setUsername, id, setId }}>
			{children}
		</UserContext.Provider>
	);
}
