# Brewery Finder

This is a small application that allows users to search for breweries using the OpenBreweryDB API.

## How to Run

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

3.  **Run Tests:**
    ```bash
    npm run test:unit
    ```

## Technical Choices

- **Framework:** I chose to use Vue 3 with Vite, as it was the preferred framework for the exercise and provides a modern, fast development experience.
- **State Management:** I used Pinia to manage the application's global state. A centralized store is ideal for handling shared data like search parameters and loading states, making the application predictable and easier to debug.
- **Component Design:** I broke down the UI into small, single-purpose components (`BrewerySearch`, `BreweryList`, `BreweryDetail`, etc.). This approach improves reusability and makes the codebase easier to reason about and maintain.
- **Loading State UX:** To provide a modern and responsive user experience, I chose to handle loading states with animated skeleton components instead of simple text. This gives a clear indication that content is loading while mimicking the final layout, which improves perceived performance and aligns with the goal of demonstrating a strong sense of design and UX.
- **Routing:** I used Vue Router with HTML5 history mode to synchronize the application state with the URL. This makes the application state bookmarkable and shareable, which is a critical feature for a good user experience.
- **Styling:** I used UnoCSS for styling. As a utility-first CSS framework, it allows for rapid UI development directly in the template.
- **Testing:** I added a unit test for the `BreweryListItem` component using Vitest and Vue Test Utils to demonstrate my approach to component testing.

## Potential Improvements

Given more time, I would make the following improvements:

- **Improved Error Handling:** Display more user-friendly error messages and provide options for retrying failed API requests.
- **More Comprehensive Testing:** Add more unit tests to cover all components and the Pinia store. I would also add end-to-end tests with Cypress to test the application's full user flow.
- **Debouncing Search Inputs:** Add a debounce to the search and filter inputs to avoid making excessive API calls while the user is typing.
- **Accessibility (a11y):** Conduct a full accessibility audit to ensure the application is usable by everyone, including adding ARIA attributes and ensuring proper keyboard navigation.
- **Develop a Core Component Library:** For long-term scalability, generic elements like the button, styled inputs, dropdowns, and list components could be extracted into a separate, shareable component library. This would ensure visual and functional consistency across multiple future projects and streamline development.
- **Code Refinements:** The API fetching logic could be further abstracted. A robust implementation would involve creating a central `useHttp` composable to handle common concerns like logging and error handling, which a more specific `useBreweryApi` composable would then use instead of calling `fetch` directly.
