# My-portfolio

## Description
This is my portfolio, showcasing my skills in web development. The project includes several sections, each reflecting my experience with different technologies. It is built using popular tools and frameworks such as React and Tailwind CSS, with a responsive design to ensure a seamless experience on various devices.

Key Features:
- Adaptive and modern design.
- Works seamlessly on both mobile and desktop devices.
- Best practices applied in both frontend and backend development.

## Technologies
- **React**: Used for building the UI and creating reactive components.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive and customized designs.
- **Node.js & Express**: Used for creating the backend server.
- **REST API**: Implemented endpoints for seamless frontend integration.
- **Geolocation API & Leaflet**: Integrated to display location on a map.

---------------------------------------------------------------------------

# Front-end

## About Section

The About section is designed to introduce myself as a web developer, offering a snapshot of who I am and what I do. This section consists of a header, my personal photo, and a navigation bar that allows easy access to different categories such as **Skills**, **Projects**, and **Contact**.

### Features:
- **Navigation Panel**: A fixed navigation menu with links to sections on the page: **About**, **Skills**, **Projects**, and **Contact**. It allows users to quickly jump to any part of the portfolio with smooth scrolling.
- **Personal Introduction**: In this section, users can find information about me, my skills, and my passions as a web developer. The text highlights my dedication to building modern, responsive, and user-friendly web applications.
- **Personal Photo**: A professional photo with a creative design element (a polygonal clip path), which adds a modern touch. It is shown prominently in the **About** section, and the photo appears in different styles depending on the screen size for responsiveness.

### Detailed Breakdown:

- **Navigation Panel**:
    The top navigation bar contains my name/logo and icons for social media platforms like [LinkedIn], [GitHub], [Indeed], and [Monster].
    - Links are responsive, adapting to smaller screens and presenting an easy-to-use navigation structure for desktop and mobile devices.

- **Header & Description**:
    The header introduces the portfolio with a welcoming text. Below that, you will find:
    - My name ("Rouslan Ouvarov").
    - A short slogan, "I AM A WEB DEVELOPER," followed by a brief paragraph about my enthusiasm for web development and my skills in building modern digital experiences.

- **My Photo**:
    - For larger screens, the photo is placed on the right side with a floating effect and shadow.
    - On smaller screens, the photo is resized and clipped to a unique shape for an attractive visual presentation.

### Responsiveness:
- The design adjusts to various screen sizes: on desktops, the photo appears on the right, while on smaller devices, it is resized to fit better within the available space.

This section plays a critical role in setting the tone for the portfolio, showcasing not only my technical expertise but also adding a personal touch with the integration of my photo.

---------------------------------------------------------------------------

# **SkillSection Explanation**

## **Components Overview**

This section is split into three components related to "Skills":

- **`SkillBubble`**: Each individual skill (e.g., React, HTML, CSS, etc.) is represented by a "bubble" that can display an icon, level, and some additional info on hover.
- **`SkillInfo`**: Provides a header and a button to toggle additional information about the skills section.
- **`SkillCloud`**: Organizes all skill "bubbles" in a cloud-like layout.

---

## **SkillBubble Component**

### Purpose:
Displays a "bubble" for each skill with an icon, level, and additional information on hover.

### Key Features:

- **`renderIcon`**: Displays an appropriate icon based on the skill (e.g., React for React, HTML5 for HTML, etc.)
- **Sizes**: Supports three sizes for the bubble: "large", "medium", and "small". The sizes are adjusted depending on the screen size (responsive design).
- **Positioning**: The position of each bubble is configurable via `style` props.
- **Info Panel**: Displays additional information when the user hovers over the bubble.
  - A dashed line (`<svg>`) appears on hover.
  - A "level" bar shows the skill's level, calculated as a percentage of the max value (e.g., level 11 out of 20).
  - The syntax name of the skill is displayed.

### Sample Code for SkillBubble:
```jsx
<div className={/* various Tailwind classes for styling */}>
  <div className="relative animate-slow-pulse">
    {renderIcon()}  {/* Icon of the skill */}
  </div>
  <svg>
    {/* Dashed line for animation */}
  </svg>
  <div className="absolute">
    <div>Level</div>
    <div className="level-bar">
      {/* Level progress */}
    </div>
    <div>{syntaxName}</div>
  </div>
</div>

---------------------------------------------------------------------------

### Projects Section

This section highlights various web and mobile applications I've developed, showcasing both my **design** and **development** skills. Each project is displayed in an interactive card with hover effects that enhance user engagement. All projects are presented with:

- A **title** displayed prominently at the top, enclosed by a stylish border.
- An **image** representing the project with a subtle animation and a **hover effect** that brings the card into focus.
- **Interactive links** to live projects hosted on various platforms such as GitHub Pages, Netlify, or other hosting services.

#### ProjectCard Component
The `ProjectCard` component is a reusable React component that displays each individual project. It accepts several props:
- `title`: The name of the project.
- `image`: A background image representing the project.
- `link`: A link to the live project.
- `description`: A short description of the project.
- `className` & `style`: Custom classes and inline styles for further customization.

The card has the following interactive features:
- **Title**: Displayed with a bold and sleek design. A close icon (styled with SVG) is present for any additional functionality or closure.
- **Background Image**: Each card uses a full-width background image, set dynamically, that scales smoothly on hover. The image is designed to reflect the nature of the project.
- **Link to Project**: Clicking on the card redirects to the live version of the project.

#### Code Breakdown:
1. **General Styling**:
   - The section utilizes a gradient background transitioning from `#264653` to `#14213d`, enhancing the visual appeal.
   - Each card has **hover** effects like scaling and z-index increase, which helps emphasize the project during user interaction.
   - Shadow effects (`boxShadow`) are used to provide depth to the project cards.

2. **Responsive Layout**:
   - The cards are designed to work seamlessly across different screen sizes with flexible margins and responsive layout, using **Flexbox** and **Grid**.
   - Text styling dynamically adjusts for mobile and desktop views (text size is adapted via `sm:text-lg`, `text-xs`, etc.).

3. **Project Highlights**:
   - **Restaurant 'Ohmyfood'**: A project showcasing a restaurant menu and order system.
   - **Real Estate Rental**: Displays a platform for showcasing real estate and hotel properties.
   - **Banking Application**: A banking app UI showcasing financial transaction features.
   - **Architecxte d’intérieur**: Portfolio website of an interior architecture company.
   - **Agence d'événementiel**: An event agency website that demonstrates event management functionalities.

---------------------------------------------------------------------------

## Contact Section

The Contact section of the portfolio contains the following components:

### **`Contact.js`**

This file handles the layout and rendering of the contact section. It includes:

- A section with a title "Contact Me!".
- Links to your social profiles (LinkedIn, GitHub, Indeed, Monster) represented with icons.
- A message form where users can leave a message.
- A map with a pin marking your current location (using Leaflet for map functionality).


---------------------------------------------------------------------------

# Back-end


# MiniMap - My Location Tracker

## Description
MiniMap is a feature of my portfolio that displays my location on a map using the browser's geolocation API. It leverages the Leaflet library to render the map and shows my location with a custom marker. This feature demonstrates my ability to work with geolocation data, interactive maps, and the integration of front-end libraries like Leaflet to create dynamic, location-based visualizations.

---------------------------------------------------------------------------

## Live Demo
You can view the live version of this portfolio at [https://my-portfolio-gm61.onrender.com](https://my-portfolio-gm61.onrender.com).

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Slowflov/my-portfolio