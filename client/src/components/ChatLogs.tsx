import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
const ChatLogs = () => {
	const { selectedChat, setSelectedChat, chat, setChat } =
		useContext(UserContext);

	const fetchChats = async () => {
		try {
			const data = await axios.get(`http://localhost:3000/chat/`, {
				withCredentials: true,
			});
			console.log(data.data.payload);

			setSearchResults(data.data.payload);
		} catch (error) {
			console.log(error);
			throw new Error(`Failed to login user: ${error}`);
		}
	};
	return <div className='flex-grow'>chat history</div>;
};

export default ChatLogs;
