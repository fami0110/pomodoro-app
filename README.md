# PMO - Pomodoro Timer
A mini desktop app (windows widget) to help you boost your productivity times and maintain focus.

![Tauri](https://img.shields.io/badge/tauri-24C8D2?style=for-the-badge&logo=tauri&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Preact](https://img.shields.io/badge/preact-673AB8?style=for-the-badge&logo=preact&logoColor=white) ![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white) ![React Spring](https://img.shields.io/badge/React%20Spring-6f2cf1?style=for-the-badge&logo=react-spring&logoColor=white)

I made this mini project to learn `react` (using `preact`), `tauri v2`, and `rust`.

## Technologies Used

-   **Framework:** [Tauri V2](https://tauri.app/v2/)
-   **Frontend:** [Vite](https://vitejs.dev/), [Preact](https://preactjs.com/), [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [React Spring](https://www.react-spring.dev/)
-   **Backend:** [Node.js](https://nodejs.org/), [Rust](https://www.rust-lang.org/)

## Features

-   This desktop app is available in your system tray, so you can easily hide access it from anywhere without polluting your windows taskbar.
-   The window is draggable, by pressing on the title bar area.
-   Engaging animation and transition by `react-spring`.
-   You can customize your app preferences, such as the duration of sessions, toggle sfx and notification (more setting will be added in the future).
-   Sound effects for transition and notification.
-   Get a quick overview of your productivity at the end of session.
-   Receive timely desktop native notifications when the session is change.

## Demo

https://github.com/user-attachments/assets/2f0a37dc-51c8-47b1-8776-e2cbf685e7f4

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/fami0110/pomodoro-app.git
    cd pomodoro-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1.  **Running in dev:**

    ```bash
    npm run tauri dev
    ```
    This will launch the PMO app. It will appear in your system tray and on your desktop.

2.  **Production build:**

    ```bash
    npm run tauri build
    ```
    This will compile a production-ready executable for your operating system. Check the `src-tauri/target/release` directory for the executable.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
