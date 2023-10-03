import { zodResolver } from "@hookform/resolvers/zod";
// import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
// import { UserContext } from "./context/UserContext";
import registerUser from "./lib/actions/registerUser";
import { registerSchema } from "./schemas/register";

export default function Login() {
	//CONTEXT TO SET USERNAME AND ID AFTER LOG IN
	// const { setUsername, setId } = useContext(UserContext);

	//ADDING ZOD TYPE SAFETY WITH REGISTER SCHEMA
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof registerSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		// console.log(values);

		const response = await registerUser(values);
		console.log(response.data);
	}

	return (
		<div className='flex justify-center items-center h-screen flex-col'>
			<h1 className='mb-16 text-2xl'>LOGIN TO WHISPER</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='username'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder='username' {...field} />
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder='password' {...field} type='password' />
								</FormControl>
								<FormDescription>Enter a secure password</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</div>
	);
}
