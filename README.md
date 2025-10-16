# CareerNav

# CareerNav Documentation
## About

CareerNav is a web application designed to assist users in navigating their career paths. It provides tools for career advice, trend analysis, and resource discovery. The application uses AI to provide personalized career suggestions and insights.

## User Documentation

Users can create an account and set up a profile with their skills, interests, and work preferences. Based on this information, the application provides personalized career recommendations.

The main features include:

*   **Dashboard:** A navigation area for users to access most of the features and get general insights.
*   **Career Recommendations:** AI-curated career suggestions for potential career paths.
*   **Trend Tracker:** A tool to explore and track the latest career trends.
*   **Resources:** A curated list of resources for career development.
*   **Profile:** A configuration area for users to manage their information.

## Setup Documentation

To set up and run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd business-case-site
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the application on `http://localhost:5173` (or another port if 5173 is in use).

## W.I.P Notes

This project has some missing functionality to its elements.

*   **Authentication:** Signup and Login functionality are not implemented.
*   **Core Features:**
    *   Dashboard: Basic layout is in place.
    *   Trend Tracker: The AI functionality works, but is limited to an older date due to it's usage of gpt-4o-mini.
    *   Resources: The buttons do not currently link to resources.
*   **Settings:** Settings page is a placeholder due to unsaved inputs + Dark Mode is not yet implemented to work.
*   **Styling:** The overall styling may be worked on more in the future.