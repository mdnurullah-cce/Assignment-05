# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technology cards, compare information such as category, difficulty, and rating, and select technologies to create a personalized stack.

The project is built with React, TypeScript, Tailwind CSS, and DaisyUI.

---

## 🌐 Live Demo

- **Live Website:** [Add your live website link here]
- **GitHub Repository:** [Add your GitHub repository link here]

---

## ✨ Features

### 1. Responsive Navigation Bar
- Sticky navigation bar.
- Desktop navigation links for Home, Technologies, Projects, About, and Contact.
- Mobile-friendly hamburger menu.
- Sign In and Sign Up buttons.

### 2. Hero Section
- Attractive heading and project description.
- Gradient text and buttons.
- Banner illustration.
- Buttons that navigate to relevant sections of the website.

### 3. Explore Technologies
- Displays technologies using reusable cards.
- Shows technology name, icon, category, description, difficulty level, rating, and badge.
- Technologies are loaded asynchronously from a JSON file.
- Displays a loading message while technologies are being loaded.
- Users can add technologies to their stack.
- Prevents the same technology from being added more than once.
- Disables the Add to Stack button after a technology has been selected.

### 4. Your Stack
- Displays the technologies selected by the user.
- Shows the number of selected technologies.
- Provides an empty state when no technologies have been selected.
- Allows users to remove individual technologies.
- Allows users to clear their stack.

### 5. Footer
- Displays the Dev Stack brand and description.
- Includes social media links.
- Provides Product, Company, and Legal navigation sections.
- Includes copyright information and privacy and terms links.

### 6. Responsive Design
- Mobile-first layout.
- Responsive technology card grid.
- Responsive navigation menu.
- Responsive layout for the technology cards and stack section.
- Styled using Tailwind CSS and DaisyUI.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| TypeScript | Type safety and better development experience |
| Vite | Development server and build tool |
| Tailwind CSS | Responsive styling and utility classes |
| DaisyUI | Prebuilt UI components |
| React Toastify | Toast notifications |
| React Hooks | Managing component state and asynchronous data |
| JSON | Storing technology information |

---

## 📂 Project Structure

```text
src/
├── assets/
│   ├── banner-stack.png
│   └── logo-text.png
│
├── Components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Technologies.tsx
│   ├── AvailableTech.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
│
├── Types/
│   ├── Technologies.ts
│   ├── Hero.ts
│   ├── Navbar.ts
│   └── FooterType.ts
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── data.json