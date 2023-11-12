# Todo List x MVC with React
- This is a React project from Alpha camp.
- Focus on built a CRUD App.

# Progress
- Finished check permission function (20231112)
- Finished API function
- Utilize json-server library to simulate server
- Finished delete and items counter function

# Result
Final result:
<br/>
<img width="700" alt="todo-list" src='./src/assets/screenshot/Screenshot 2023-11-12 at 18.27.44.png'>

# Prerequisites
* Node.js 14.18.1
* React 18.2.0

# Built with
- React
  1. useState
  2. useContext
  3. useEffect: This hook lets you perform side effects (like API fetch) in function components, and determine when to perform
  4. useRef

- clsx<br/>
  used to conditionally apply CSS classes, dynamically generate class names

- styled-component<br/>
  a library for styling React components using tagged template literals (backticks). It allows you to write actual CSS code in your JavaScript files

- json-server<br/>
  create a fake REST API server to create GET, POST, PATCH, DELETE request
	"dev-server": "json-server --watch db.json --port 3001”, with this line, set up RESTful API on port 3001

- sweetalert2<br/>
  create responsive popup box box or model

- React-router-dom hook
  1. Link: used to set up link between pages
  2. BrowserRouter, Route, Routes: used to set up react router
  3. useLocation: This hook returns the current location object, which contains information about the current URL
  4. useNavigate: This hook returns a function that lets you navigate programmatically

- jsonwebtoken<br/>
  a library for working with JSON Web Tokens (JWTs). It can be used to decode, verify, and generate JWTs

- postman<br/>
  platform for API testing, collaboration

# What I learned
1. CRUD data flow
2. State management
3. Router setting
4. API testing and fetching
5. Sign-in, login, logout function
6. JSON web token (JWT)
6. Identity permission

# Installation and Execution
1. Please ensure that Node.js and npm are well installed in your local environment.
   <br/>
3. Find a folder where you want to put this project, open Terminal, and run the command for cloning:
```
git clone https://github.com/Ching0810/AC-todo-list.git
```
3. Then, you'll see a directory called "AC-todo-list". Enter the directory and run the command (would take a while, be patient):
```
npm install
```
4. Set the version of Node.js to v14.18.1
```
nvm use v14.18.1
```
5. After installment, run below line to render page:
```
npm start
```
6. Run below line to start server:
```
npm run dev-server
```
7. The project is ran successfully while seeing the following info in Terminal:
```
Compiled successfully!
```
8. Press "ctrl + c" in Terminal if you want to stop running the project.
