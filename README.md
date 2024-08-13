
# StaffStream

**Live Link:** [StaffStream Live](https://assestflow.web.app/)

## Project Overview
- This web application allows businesses to manage their assets and products efficiently.
- HR Managers can track how employees are using company assets, categorized as returnable (laptops, keyboards) or non-returnable (pens, paper).

## Key Features
- **User Roles:** Employee and HR Manager with separate functionalities.
- **Employee Routes:** View pending and monthly asset requests, request new assets, manage their team.
- **HR Manager Routes:** Manage asset lists, requests, employees, add new assets, view team members, and manage team size through packages.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Secure Authentication:** JWT-based login with email/password and social login options.
- **Search and Filter:** Filter assets by type, request status, and availability.
- **CRUD Operations:** Create, Read, Update, and Delete assets and employee information.
- **Notifications:** Sweet alerts/toasts for successful operations and authentication.
- **Pagination:** View assets and requests in paginated lists.

## Uses Technology

**Front-end:**
- **React.js:** A powerful JavaScript library for building dynamic user interfaces. It excels at managing complex components and state changes.
- **HTML & CSS:** The fundamental building blocks of web pages. HTML provides the structure, while CSS styles the content and layout.
- **Tailwind CSS:** A utility-first CSS framework offering a vast collection of pre-built classes for rapid UI development.
- **Daisy UI:** A component-based UI library built on top of Tailwind CSS. It provides ready-made components like buttons, forms, and alerts for a clean and consistent look.
- **React Helmet:** A library that lets you manage document head elements (title, meta tags, etc.) from your React components. This ensures dynamic updates to your page title and metadata.
- **Tanstack Query (GET methods):** Implement Tanstack Query for all data fetching using GET requests.

**Back-end:**
- **MongoDB:** A NoSQL database that offers flexible data storage in document format. Perfect for managing assets and user information.
- **Node.js:** A JavaScript runtime environment that allows you to run JavaScript code outside a web browser. This enables server-side scripting and APIs.
- **Express.js:** A web application framework for Node.js that simplifies server creation and routing. It handles incoming requests and sends responses.
- **JWT (JSON Web Token):** A popular authentication mechanism for secure user sessions. JWTs encode user data and a signature, ensuring secure communication between client and server.
- **Firebase :** A Google-backed platform offering various services like authentication, databases, and hosting. You can use it for user authentication and potentially other functionalities.

## Development Setup

1. **Install dependencies:** 
    ```bash
    npm install
    ```

2. **Create a .env file in the project root and set environment variables for:**
    ```
    REACT_APP_API_URL: Your backend API URL.
    REACT_APP_MONGO_URI: MongoDB connection string.
    REACT_APP_FIREBASE_CONFIG: Firebase configuration (use placeholder values during development).
    ```

3. **Running the Application:**
    ```bash
    npm start
    ```

---

