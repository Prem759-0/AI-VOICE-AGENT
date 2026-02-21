
# AI Voice Agent

This is a web application that provides AI-powered voice assistant features. It's built with a modern web stack, featuring a Next.js frontend, a Convex backend, and Stackframe for authentication.

## Tech Stack

- **Framework**: 

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/get-started)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/[your-username]/ai-voice-agent.git
    cd ai-voice-agent
    ```

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
├───lib
│   └───window.svg
└───services/
    ├───GlobalServices.jsx
    └───Options.jsx
```
