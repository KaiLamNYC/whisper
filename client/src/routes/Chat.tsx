import axios from "axios";
import Cookies from "js-cookie";
import { Send } from "lucide-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { UserContext } from "../context/UserContext";

export default function Chat() {
	const navigate = useNavigate();
	const { setUsername, username, setId, id } = useContext(UserContext);

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
		<div className='flex h-screen p-2'>
			<div className='w-1/4 flex flex-col'>
				<h1 className='text-4xl'>WHISPER</h1>
				<h1>Welcome {username}</h1>
				<h1>Welcome {id}</h1>
				<Button onClick={handleSignOut} className='w-[100px]'>
					SIGN OUT
				</Button>
			</div>
			<div className='w-3/4 p-2 flex flex-col '>
				<div className='flex-grow'>chat history</div>
				<div className='flex flex-row gap-2'>
					<Input placeholder='start typing here' className=' p-2' type='text' />
					<Button>
						<Send />
					</Button>
				</div>
			</div>
			{/* <h1>WELCOME {username} TO WHISPER!!!!</h1> */}
			{/* <Avatar>
				<AvatarImage src={""} alt='@shadcn' />
				<AvatarFallback>{username}</AvatarFallback>
			</Avatar> */}
		</div>
	);
}
