const Chat = require("../models/chatModel");
const Message = require("../models/messageModel");
const User = require("../models/userModel");

async function sendMessage(req, res, next) {
	try {
		const { content, chatId } = req.body;

		if (!content || !chatId) {
			res.json({
				message: "invalid data passed to sendMessage",
			});
		}

		//CREATING NEW MESSAGE DOC
		const newMessage = {
			sender: req.userId,
			content,
			chatId,
		};

		let message = await Message.create(newMessage);

		console.log(`this is the message ${message}`);

		message = await message.populate("sender", "username");
		message = await message.populate("chatId");
		message = await User.populate("message", {
			path: "chat.users",
			select: "usrename",
		});

		console.log(`after message: ${message}`);
		//SETTING TO LAST MESSAGE FOR LATER CLIENT VIEW
		await Chat.findByIdAndUpdate(req.body.chatId, {
			latestMessage: message,
		});

		res.json({
			payload: message,
		});
	} catch (e) {
		res.json({
			message: "error new message",
			payload: `error with ${e}`,
		});
	}
}

module.exports = { sendMessage };
