# MediCare Plus - Online Pharmacy Frontend

A modern, responsive, and feature-rich frontend for an online pharmacy application built with React and Tailwind CSS.

## Features

- **Product Setup**: Browse medicines by category, filter by price, and sort by popularity.
- **Product Details**: Comprehensive product info with dosage, side effects, and reviews.
- **Shopping Cart**: Manage items, update quantities, and upload prescriptions.
- **Authentication**: User login and registration with mock Google OAuth.
- **User Dashboard**: View profile and order history.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Mock Data**: Realistic medicine data and simulated backend interactions.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** (Styling)
- **React Router DOM** (Navigation)
- **Context API** (State Management)
- **React Icons** (Iconography)
- **React Hot Toast** (Notifications)

## Getting Started

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd medicare-plus
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:5173` to view the application.

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── layout/      # Navbar, Footer, Layout
├── context/         # AuthContext, CartContext
├── data/            # Mock data (medicines.json)
├── pages/           # Page components (Home, Shop, Cart, etc.)
├── styles/          # Global styles
└── App.jsx          # Main application component with routing
```

## Customization

- **Colors**: Modified in `tailwind.config.js`.
- **Mock Data**: Update `src/data/medicines.json` to change product listings.

## License

MIT
