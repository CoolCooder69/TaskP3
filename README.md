# Cool Coody

This is my React project. It is a website for learning coding, where I show my profile, a gallery, and some articles and tutorials. I made it to practice React and Tailwind CSS.

## What is in this project

- Navbar with logo and buttons
- Profile section
- Gallery with 3 images
- Featured articles (3 cards)
- Featured tutorials (3 cards)
- Newsletter page
- Footer with links and social icons
- Custom cursor that follows the mouse

## Technologies I used

- React
- React Router DOM (for pages)
- Tailwind CSS (for styling)
- Lucide React (for icons)
- Picsum Photos (for dummy images)

## How to run it

1. Download or clone the project

   ```
   git clone <your-repo-link>
   cd <project-folder>
   ```

2. Install the packages

   ```
   npm install
   ```

3. Start the project

   ```
   npm run dev
   ```

4. Open the link shown in the terminal (usually http://localhost:5173)

## Folder structure

```
src/
  App.jsx          -> main file with routes and Home page
  App.css          -> css file
  newsletter.jsx   -> newsletter page
  navItems.js      -> navbar links
  components/      -> all small components
    articleCard, galleryCard, profileCard,
    heading1, logo, link, cursor, Btn1, Btn2
```

## Pages

| Page | Link |
| ---- | ---- |
| Home | `/` |
| Newsletter | `/newsletter` |

Note: The footer has links like Gallery, Articles, Tutorials, FAQ, Contact, Privacy and Terms, but I have not made these pages yet.

## What I learned

- How to make reusable components and pass props
- Using `.map()` to show lists of data (articles, tutorials, gallery)
- Setting up routes with React Router
- Styling with Tailwind CSS classes like flex and grid
- Using icons from lucide-react


## Author

Made with love by Ravneet.
