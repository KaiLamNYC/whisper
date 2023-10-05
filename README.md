# Chat Application

Welcome to the Chat Application! This is a full-stack chat application built from scratch with various technologies. Below you'll find some notes, future improvements, and a list of libraries used in this project.

## Notes

- This application was developed entirely from scratch, both the frontend and backend components. A significant amount of time was spent on error handling and improving the user experience.

- While the majority of backend functions are implemented, there is room for further improvement and expansion. Given more time, additional features and enhancements can be added.

- This project provided an opportunity to learn and work with technologies such as Socket.IO, Express, and Vite. It also allowed for the reacquaintance with Express after using Next.js extensively.

- Vite was chosen as the build tool due to reported compatibility issues between Socket.IO and Next.js. This decision necessitated learning Vite and re-familiarizing with React Router.

## Improvements

Given more time and resources, several improvements could be made to enhance the application:

- **Form Handling**: Implement libraries like Zod and React Hook Form for form handling. While Zod was used for type safety in the login and signup forms, expanding its usage to other forms would enhance the application's robustness.

- **Profanity Filter**: Consider adding a profanity filter using libraries like "bad-words." This can help maintain a more respectful and user-friendly environment within the chat.

- **UI Enhancement**: Invest time in improving the user interface (UI) for a more visually appealing and user-friendly design. A polished UI can significantly enhance the overall user experience.

- **Additional Features**: Add more features that enhance user engagement, such as real-time notifications, displaying the last message in the contacts panel, and allowing users to remove members from group chats on the frontend. Enhanced error handling can also be implemented for functions with type safety.

---

## Libraries Used

- [Socket.IO](https://socket.io/): For real-time communication between the server and clients.
- [Express](https://expressjs.com/): A fast, unopinionated, and minimalist web framework for Node.js.
- [Vite](https://vitejs.dev/): A build tool that enhances the development experience for web projects.
- [React Router](https://reactrouter.com/): A popular routing library for React applications.
- [Zod](https://github.com/colinhacks/zod): A TypeScript-first schema validation library.
- [React Hook Form](https://react-hook-form.com/): A library for flexible and efficient form handling in React.

---
