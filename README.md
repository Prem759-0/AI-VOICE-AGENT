/) (v18 or later)
- [npm](https://www.npmjs.com/)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/[your-username]/ai-voice-agent.git
    cd ai-voice-agent
    ```

2.  **Install dependencies:**

    ```bash
    npm install
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

```
c:/Users/Admin/OneDrive/Desktop/working website/ai-vioce-agent/
├───.gitignore
├───components.json
├───docker-compose.yml
├───jsconfig.json
├───middleware.jsx
├───next-env.d.ts
├───next.config.mjs
├───package-lock.json
├───package.json
├───postcss.config.mjs
├───README.md
├───stack.js
├───.git/...
├───.next/
│   ├───cache/...
│   ├───server/...
│   ├───static/...
│   └───types/...
├───app/
│   ├───AuthProvider.jsx
│   ├───favicon.ico
│   ├───globals.css
│   ├───layout.js
│   ├───loading.js
│   ├───logo1.svg
│   ├───page.js
│   ├───provider.jsx
│   ├───_context/
│   │   └───UserContext.jsx
│   ├───(main)/
│   │   ├───layout.jsx
│   │   ├───_components/
│   │   │   └───AppHeader.jsx
│   │   ├───dashboard/
│   │   │   ├───page.jsx
│   │   │   └───_components/
│   │   │       ├───FeatureAssistants.jsx
│   │   │       ├───Feedback.jsx
│   │   │       ├───History.jsx
│   │   │       └───UserInputDialog .jsx
│   │   └───discussion-room/
│   │       └───[roomid]/
│   │           └───page.jsx
│   ├───api/
│   │   └───getToken/
│   │       └───route.jsx
│   └───handler/
│       └───[...stack]/
│           └───page.js
├───components/
│   └───ui/
│       ├───accordion.jsx
│       ├───alert-dialog.jsx
│       ├───alert.jsx
│       ├───aspect-ratio.jsx
│       ├───avatar.jsx
│       ├───badge.jsx
│       ├───blur-fade.jsx
│       ├───breadcrumb.jsx
│       ├───button-group.jsx
│       ├───button.jsx
│       ├───calendar.jsx
│       ├───card.jsx
│       ├───carousel.jsx
│       ├───chart.jsx
│       ├───checkbox.jsx
│       ├───collapsible.jsx
│       ├───command.jsx
│       ├───context-menu.jsx
│       ├───dialog.jsx
│       ├───drawer.jsx
│       ├───dropdown-menu.jsx
│       ├───empty.jsx
│       ├───field.jsx
│       ├───form.jsx
│       ├───hover-card.jsx
│       ├───input-group.jsx
│       ├───input-otp.jsx
│       ├───input.jsx
│       ├───item.jsx
│       ├───kbd.jsx
│       ├───label.jsx
│       ├───menubar.jsx
│       ├───navigation-menu.jsx
│       ├───pagination.jsx
│       ├───popover.jsx
│       ├───progress.jsx
│       ├───radio-group.jsx
│       ├───resizable.jsx
│       ├───scroll-area.jsx
│       ├───select.jsx
│       ├───separator.jsx
│       ├───sheet.jsx
│       ├───sidebar.jsx
│       ├───skeleton.jsx
│       ├───slider.jsx
│       ├───sonner.jsx
│       ├───spinner.jsx
│       ├───switch.jsx
│       ├───table.jsx
│       ├───tabs.jsx
│       ├───textarea.jsx
│       ├───toggle-group.jsx
│       ├───toggle.jsx
│       └───tooltip.jsx
├───convex/
│   ├───DiscussionRoom.jsx
│   ├───schema.js
│   ├───users.js
│   └───_generated/
│       ├───api.d.ts
│       ├───api.js
│       ├───dataModel.d.ts
│       ├───server.d.ts
│       └───server.js
├───hooks/
│   └───use-mobile.js
├───lib/
│   └───utils.js
├───node_modules/...
├───public/
│   ├───ab1.png
│   ├───ab2.png
│   ├───ab3.png
│   ├───ab4.png
│   ├───ab5.png
│   ├───file.svg
│   ├───globe.svg
│   ├───image.png
│   ├───interview.png
│   ├───language.png
│   ├───lecture.png
│   ├───logo.svg
│   ├───meditation.png
│   ├───next.svg
│   ├───qa.png
│   ├───t1
```
