# Sobe Tintor - Prenoćište Apatin

Welcome to the **Sobe Tintor** project! This is a React-based website built with Vite, designed to showcase and promote **Sobe Tintor**, a comfortable accommodation option in Apatin. The website provides information about the rooms, pricing, and contact details, along with a gallery and a reservation form.

### 🌐 Live Demo
Check out the live version of the website here: Sobe Tintor

---

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Image Slider**: A dynamic image slider showcasing the rooms and surroundings.
- **Contact Form**: Integrated with EmailJS for sending reservation inquiries.
- **Google Maps Integration**: Displays the location of the property.
- **SEO Optimization**: Includes meta tags, `sitemap.xml`, and `robots.txt` for better search engine visibility.
- **PDF Download**: Users can download the pricing list (`Cenovnik`) directly from the website.
- **Smooth Scrolling**: Navigation links provide a smooth scrolling experience.

---

## 🛠️ Technologies Used

- **Frontend**: React, Vite
- **Styling**: CSS
- **Email Integration**: EmailJS (`@emailjs/browser`)
- **Routing and Scrolling**: `react-scroll`
- **SEO Enhancements**: Meta tags, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`
- **Deployment**: Static hosting (Netlify)

---

## 📂 Project Structure
sobe-tintor/ ├── public/ │ ├── cenovnik.pdf # Pricing list PDF │ ├── logo.png # Favicon and logo │ └── robots.txt # Robots.txt file for SEO ├── src/ │ ├── assets/ # Static assets (images, etc.) │ ├── components/ # Reusable React components │ │ ├── Navbar.jsx # Navigation bar │ │ ├── ImageSlider.jsx # Image slider component │ │ └── Footer.jsx # Footer component │ ├── pages/ # Page components │ │ ├── Home.jsx # Home page │ │ ├── Gallery.jsx # Gallery page │ │ └── Contact.jsx # Contact page with form │ ├── App.jsx # Main app component │ ├── main.jsx # Entry point │ └── index.css # Global styles ├── .env # Environment variables for EmailJS ├── .gitignore # Git ignore file ├── sitemap.xml # Sitemap for SEO ├── README.md # Project documentation └── package.json # Project dependencies and scripts


---

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sobe-tintor.git
   cd sobe-tintor
2. Install dependencies:
    ```bash
    npm install
3. Add your EmailJS credentials to the .env file:
    ```bash
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
4. Start the development server:
    ```bash
    npm run dev
5. Open the app in your browser:
    http://localhost:5173