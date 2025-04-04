import "../styles/About.css";

function About() {
  return (
    <section className="about-section">
      <h1 className="about-title">About This Project</h1>
      <div className="about-divider" />
      <p>
        This website is my personal portfolio as a front-end developer, created with a focus on clarity, functionality, and modern design.
      </p>
      <p>
        The site is built using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong> — technologies that allow me to create clean, fast, and fully responsive interfaces.
      </p>
      <p>
        On the <strong>Home</strong> page, I implemented an interactive slider that dynamically loads images from the <strong>Pexels.com API</strong>, showcasing photos from various topics. When clicking on a photo, a custom modal opens displaying the image in high resolution along with its details.
      </p>
      <p>
        Both from the main view and within the modal, users can mark images as favorites. These selections are stored persistently using <strong>localStorage</strong>.
      </p>
      <p>
        The site includes a <strong>dark mode switch</strong> in the navigation bar, allowing users to toggle between light and dark themes. This preference is saved in localStorage to ensure it remains after closing or refreshing the page.
      </p>
      <p>
        A notable feature is the implementation of <strong>three buttons (Desktop, Tablet, and Mobile)</strong> that simulate how the site looks on different devices. This required custom logic beyond media queries to fully control the visual experience. <strong>This functionality is only available on screens wider than 1024 pixels</strong>, ensuring it's used in a desktop or laptop environment where full layout simulation is meaningful.
      </p>
      <p>
        On the <strong>Favorites</strong> page, users can view all the images they marked from the Home page. This section includes:
      </p>
      <ul className="about-list">
        <li>A search input to filter images by description or photographer name.</li>
        <li>A scroll-to-top button to quickly return to the top of the page — enhancing usability when many images are stored.</li>
        <li>
          A dedicated <strong>remove button</strong> on each photo, allowing users to manage their selection.
          To prevent accidental removal, this action is protected by a <strong>custom confirmation modal</strong> designed with accessibility and responsive design in mind.
        </li>
      </ul>
      <p>
        Additionally, the site includes the implementation of <strong>loading skeletons</strong> that simulate content placeholders while fetching data. An intentional 1-second artificial delay was added when calling the API to let users appreciate the visual feedback and smoother transition.
      </p>
      <p>
        The main goal of this portfolio is to showcase my technical skills, my attention to user experience, and to make it easy for potential clients or collaborators to get in touch.
      </p>
    </section>
  );
}

export { About };
