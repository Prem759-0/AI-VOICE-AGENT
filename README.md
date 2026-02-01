
AI Voice Agent

This is a web application that provides 
1.  **Clone the repository:**

    ```
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the following, replacing the placeholder with your local Convex URL:

    ```env
    NEXT_PUBLIC_CONVEX_URL=http://127.0.0.1:3210
    ```

4.  **Start the Convex backend:**

    Run the following command to start the Convex services in the background using Docker:

    ```bash
    docker-compose up -d
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Contains the core Next.js application, including pages and components.
-   `components/`: Contains shared UI components, built with Shadcn/UI.
-   `convex/`: Contains the Convex backend code, including schema and mutations.
-   `hooks/`: Contains custom React hooks.
-   `lib/`: Contains utility functions.
-   `public/`: Contains stati assets like images and fonts.
-   `services/`: Contains services used by the application.
-   `stack.js`: Configures the Stackframe authentication.
-   `docker-compose.yml`: Defines the local Docker container setup for Convex.
-   `package.json`: Lists project dependencies and scripts.


