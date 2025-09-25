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

- **Framework:** Vue 3 with Vite, as preferred in the exercise description.
- **State Management:** Pinia is used to manage the application's global state. This includes the list of breweries, search parameters, loading/error states, and the selected brewery for the detail view. Using a centralized store makes the state predictable and easier to debug.
- **Component Design:** The UI is broken down into small, single-purpose components (`BrewerySearch`, `BreweryList`, `BreweryListItem`, `BreweryDetail`, `Pagination`, `BreweryListSkeleton`, `BreweryDetailSkeleton`). This improves reusability and makes the codebase easier to understand and maintain.
- **Loading State UX:** To provide a modern and responsive user experience, loading states are handled with animated skeleton components instead of simple text. This approach gives a clear indication that content is loading while mimicking the final layout, which improves perceived performance and aligns with the goal of demonstrating a strong sense of design and UX.
- **Routing:** Vue Router is used to synchronize the application's state (search, filters, page) with the URL. This makes the application's state bookmarkable and shareable.
- **Styling:** UnoCSS is used for styling. It's a utility-first CSS framework that allows for rapid UI development.
- **Testing:** Vitest and Vue Test Utils are used for unit testing. A test is provided for the `BreweryListItem` component to demonstrate the testing approach.

## Potential Improvements

Given more time, I would make the following improvements:

- **Develop a Core Component Library:** For long-term scalability, generic elements like the button, styled inputs, dropdowns, and list components could be extracted into a separate, shareable component library. This would ensure visual and functional consistency across multiple future projects and streamline development.
- **Improved Error Handling:** Display more user-friendly error messages and provide options for retrying failed API requests.
- **More Comprehensive Testing:** Add more unit tests to cover all components and the Pinia store. I would also add end-to-end tests with Cypress to test the application's full user flow.
- **Debouncing Search Inputs:** Add a debounce to the search and filter inputs to avoid making excessive API calls while the user is typing.
- **Accessibility (a11y):** Conduct a full accessibility audit to ensure the application is usable by everyone, including adding ARIA attributes and ensuring proper keyboard navigation.
- **Code Refinements:** Refactor and further abstract some of the logic, for example, creating a dedicated composable for handling the API requests.
