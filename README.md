

#  [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: :3210
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
-   `public/`: Contains static assets like images and fonts.
-   `services/`: Contains services used by the application.
-   `stack.js`: Configures the Stackframe authentication.
-   `docker-compose.yml`: Defines the local Docker container setup for Convex.
-   `package.json`: Lists project dependencies and scripts.

