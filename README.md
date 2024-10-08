# Frontend search bar challenge
This is a simple Vite + React application that you will use to complete the challenge.

## Setup
- Install Node 18.9.0 (`nvm install 18.9.0`)
- Install Yarn (`npm install -g yarn`)
- Install dependencies (`yarn`)

## Running the app
```bash
yarn dev
```

App will be running on `http://localhost:5173/`

## Resources
- ✅ Searching the internet for answers (Stackoverflow, Google)
- 🎨 [Figma Design](https://www.figma.com/file/3nBh6bJzPlAVvIfH7tidUT/Proposal---Front-End-Challenge---Mid?type=design&node-id=0-1&mode=design&t=zUi9VT65muOPHYJR-0). Please keep in mind that you need to login with a personal account to see the design specs.
- ❌ Github Copilot (please turn this off in your IDE)
- ❌ Any AI based code generation tool

## Assignment
### Understanding
1. Run the sample application.
2. Work through the codebase to complete the tasks below.
3. Don't forget to commit and push your code before the test is over!

### Tasks
Remember to use the [design](https://www.figma.com/file/3nBh6bJzPlAVvIfH7tidUT/Proposal---Front-End-Challenge---Mid?type=design&node-id=0-1&mode=design&t=zUi9VT65muOPHYJR-0) as a reference for the tasks below.

#### Create a search bar
We need to display a search within the main page of the application. 
In this task:
1. Create a search bar component.
2. The search bar should have a search input.
3. The search bar will display a list of users that match the search input, the search will match the user  name.
4. Each item in the list should be clickable and will display the user information, their name and email. You should also use https://placekitten.com/280/280 as placeholder for the user image, please adjust the size of the image to what you think is best.
5. Clicking a user should add a chip to the search bar with the user's name. When a user is clicked, the user should be removed from the list of users.
6. When a chip is clicked, the user should be removed from the search bar and added back to the list of users.

The API is: `GET https://jsonplaceholder.typicode.com/users`

Feel free to use any library (fetch is good too) to make the request (i.e react-query)

### Considerations
- The search bar does not need to close / open on blur or focus. (if you want to do it is totally up to you)
- The search bar should handle multiple chips.

### Other considerations
- You can use any styling library (styled-components, tailwind, etc) or just vanilla CSS. Please pay special attention to thi part, we would love to see your CSS skills in action 🚀.
- Please do not use any external state management library (redux, mobx, etc) for this task. We want to see how you handle state management with React's built-in tools.

### Requirements
- Node 18.9.0
- Yarn
- Figma account
