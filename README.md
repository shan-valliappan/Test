# Personal Portfolio Website

A clean, modern, and beginner-friendly personal portfolio built with **HTML, CSS, and JavaScript**.

This project includes responsive design, a dark mode toggle, smooth scrolling, section animations, a typing effect, mobile navigation, and a contact form with basic validation.

## 📁 Project Structure

```text
.
├── index.html
├── style.css
├── script.js
└── README.md
```

## ✨ Features

- **Hero Section**
  - Name: **Shanmugam Valliappan**
  - Typing subtitle animation
  - “View Projects” button with smooth scroll

- **About Me Section**
  - Short bio about interests in engineering, coding, robotics, scouting, and leadership
  - Visual icon cards

- **Projects Section**
  - 3 sample project cards
  - Hover lift animation
  - “View Project” buttons (demo links)

- **Skills Section**
  - Modern skill boxes for:
    - HTML
    - CSS
    - JavaScript
    - Python
    - Leadership
    - Engineering

- **Contact Section**
  - Name, Email, and Message fields
  - Submit button
  - JavaScript form validation for required fields and email format

- **Extra UI/UX Enhancements**
  - Sticky navbar
  - Smooth scrolling navigation
  - Mobile menu toggle
  - Dark mode toggle
  - Fade-in animations while scrolling
  - Back-to-top button

## 🧰 Technologies Used

- **HTML5** for structure
- **CSS3** for styling and responsive design
- **Vanilla JavaScript** for interactivity
- **Google Fonts (Poppins)** for typography

## 🚀 Run Locally

Because this is a static site, you can run it without any build tools.

### Option 1: Open directly
1. Download or clone this repository.
2. Open `index.html` in your browser.

### Option 2: Use VS Code Live Server (recommended)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

## 📦 Upload to GitHub

1. Create a new repository on GitHub.
2. In your terminal, run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 🌍 Deploy with GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Click **Save**.
5. Wait 1–3 minutes for deployment.
6. Open your live site at:

```text
https://<your-username>.github.io/<repo-name>/
```

## 📝 Notes

- The contact form is currently a front-end demo and does not send real emails.
- You can customize colors, text, and projects easily in `index.html` and `style.css`.
- To persist dark mode between page loads, you can extend `script.js` using `localStorage`.

## 📄 License

This project is open for learning and personal use.
