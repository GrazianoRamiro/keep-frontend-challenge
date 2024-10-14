# Keep: Frontend Challenge

## Stack

This is a Single Page Application built with **React**, **Typescript**, **SCSS**, **React Query**, and **Vite**.

## Project Structure

The folder structure is a **feature-based** approach to represent a clear separation of concerns and keep feature-related entities together, making it easier to understand and maintain.

- **Design System**: Contains the base styles, variables (CSS variables), and primitive components (e.g. buttons, headings) that serve as the foundation of the UI. These components are typically stateless or manage internal state, and they aim to provide consistency and reusability across the application.
Currently, the design system contains only base styles and CSS variables (e.g., for colors, spacing, and typography). No components have been added yet, but the system is set up to ensure consistency and scalability across the application as more reusable components are introduced in the future.

- **Modules**: Contains the different features of the application. Each folder represents a feature with its own components, hooks, services, and types. This approach groups everything relevant to a specific feature in one place.

- **Shared**: Contains re-usable matters (utils, components, services, hooks, etc.) that can be shared across multiple modules. These entities often include business or application logic, as opposed to the design system components.

## Decision Log

**1. Application Rendering**

Since the exercise started as a Single Page App (SPA) and also considering it is a POC, it was chosen to continue using client-side rendering with `React`. For larger applications, frameworks like Next.js or Remix (which support SSR) could be considered to improve server-side performance and SEO capabilities.

**2. Git Flow**

Given that this is a solo project and a POC, a simple `main` branch was used. A more complex Git flow, such as _feature-based_ branching or _trunk-based_ development, would be better suited for larger teams or long-term projects but was unnecessary here.

**3. Structure**

The `feature-based` structure was chosen to ensure a clear separation of concerns and to group related logic together. This makes it easier for developers to work on individual features without worrying about cross-module dependencies. Another option would have been a _layered_ structure, where files are grouped by type (e.g., components, hooks), but that approach often makes it harder to navigate across features.

**4. Styling**

`SCSS` was selected due to its familiarity and its out of the box support by Vite. Different CSS-in-JS libraries like Styled Components or Emotion, require some setup and have their own syntax, so I chose SCSS in favor of simplicity. For larger projects or where dynamic styling is a requirement, the extra flexibility provided by CSS-in-JS libraries would be a better choice.

**5. API Fetching**

While the application only makes a single API call, `React Query` was selected to handle API fetching and server state management. It provides a cleaner, more efficient way to handle different data states (e.g., loading, error, success), and internally it is used `fetch` to make the API request.

**6. State Management**

This is a simple application without complex state requirements, so there was no need for global state management. Although React `Context` could have been used for managing global state, it wasn't necessary in this case. For local component state, React's `useState` was sufficient to handle the small, internal state needed.

## Future Considerations

- **Debouncing Search**: Implementing debouncing for the search bar would improve performance by delaying the search query until the user has finished typing, reducing unnecessary requests or computations.

- **Error Handling**: Include better error handling integrating Sentry for real-time error monitoring and reporting.

- **Theming**: Future improvements could include better support for theming by expanding on the CSS variables setup, allowing for dark mode or user-customizable themes.

- **Global State Management**: If the app scales, introducing a more robust global state management library like Redux, Mobx or Recoil could be considered to handle more complex business logic across multiple components or modules.

- **Testing**: Adding unit and integration tests with a framework like Jest or React Testing Library would ensure the stability of the app as it grows.
