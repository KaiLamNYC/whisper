const Chat = require("../models/chatModel");
const User = require("../models/userModel");

async function accessChat(req, res, next) {
	try {
		const friendId = req.body.id;
		console.log(`jwt id ${req.userId}`);
		//FINDING THE CHAT BETWEEN TWO PEOPLE
		let isChat = await Chat.find({
			isGroupChat: false,
			$and: [
				{ users: { $elemMatch: { $eq: req.userId } } },
				{ users: { $elemMatch: { $eq: friendId } } },
			],
		})
			.populate("users", "-password")
			.populate("latestMessage");

		isChat = await User.populate(isChat, {
			path: "latestMessage.sender",
			select: "username",
		});
		if (isChat.length > 0) {
			res.json({
				message: "old chat",
				payload: isChat[0],
			});
		} else {
			const newChat = {
				chatName: "sender",
				isGroupChat: false,
				users: [req.userId, friendId],
			};
			const createdChat = await Chat.create(newChat);
			const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
				"users",
				"-password"
			);
			res.json({
				message: "new chat",
				payload: fullChat,
			});
		}
	} catch (e) {
		res.json({
			message: "failure",
			payload: `failed to accessChat ${e}`,
		});
	}
}

module.exports = {
	accessChat,
};
