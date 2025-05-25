// Typed effect for roles
const roles = [
    "WordPress & Shopify Developer",
  "Graphic Designer",
  "Video Editor",
  "Creative Technologist",
  "Web & Media Specialist",
  ];
  let roleIndex = 0;
  let charIndex = 0;
  const typedElement = document.getElementById("typed");
  const typingDelay = 100;
  const erasingDelay = 60;
  const newTextDelay = 1500; // Delay between current and next text
  
  function type() {
    if (charIndex < roles[roleIndex].length) {
      typedElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      roleIndex++;
      if (roleIndex >= roles.length) roleIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) setTimeout(type, newTextDelay + 250);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeLabel = document.querySelector(".theme-label");

  // Support both desktop and mobile toggle switches
  const themeSwitches = document.querySelectorAll("#theme-switch, #theme-switch-mobile");

  function applyTheme(theme) {
    body.classList.toggle("light", theme === "light");
    body.classList.toggle("dark", theme === "dark");

    // Sync all switches
    themeSwitches.forEach(switchEl => {
      switchEl.checked = theme === "light";
    });

    if (themeLabel) {
      themeLabel.textContent = theme === "light" ? "Dark Mode" : "Light Mode";
    }
  }

  // Load saved theme from localStorage or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  // Add event listeners to all theme switches
  themeSwitches.forEach(switchEl => {
    switchEl.addEventListener("change", () => {
      const newTheme = switchEl.checked ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  });
});
  
  // Projects data
  const projects = [
    {
        title: "Hawflein Solutions Website",
        description: "A professional website developed for Hawflein Solutions, an Australian immigration law firm. The site features a multi-step booking form, integrated payment processing via Stripe, and a clean, responsive design optimized for user experience and lead conversion.",
        image: "images/hawflein-website.jpg", // Replace with actual hosted screenshot URL if needed
        links: {
          demo: "https://hawflein.com"
        }
      },      
      {
        title: "HMCE Collective Website",
        description: "A corporate website created for HMCE Collective, showcasing their services across healthcare, commercial cleaning, construction, and events in Australia. Features include service-specific landing pages, a multi-step booking form, mobile responsiveness, and integrated lead capture functionality.",
        image: "images/hmce collective.jpg", // Replace with a real screenshot URL if available
        links: {
          demo: "https://hmcecollective.com.au"
        }
      },
      {
        title: "Fut x Perform App Landing Page",
        description: "A dedicated landing page built for the FXP App by Fut x Perform. Designed to promote the app's features for athletic training and performance tracking, the page includes clear call-to-actions, engaging visuals, app download links, and a mobile-optimized layout to drive user sign-ups.",
        image: "images/fxp-app.jpg", // Replace with an actual screenshot if needed
        links: {
          demo: "https://futxperform.com/pages/fxp-app"
        }
      },
      {
        title: "Fut x Perform Networking Page",
        description: "A modern landing page designed for Fut x Perform's Networking program, highlighting athlete collaboration, mentorship opportunities, and exclusive events. Built to engage users with bold visuals, clear messaging, and a responsive layout that encourages registration and inquiries.",
        image: "images/fxp-networking.jpg", // Replace with actual screenshot URL
        links: {
          demo: "https://futxperform.com/pages/fut-x-perform-networking"
        }
      },
      {
        title: "Nueva Vizcaya Police Provincial Office Website",
        description: "An official government website developed for the Nueva Vizcaya Police Provincial Office under the Philippine National Police. Built with user accessibility and transparency in mind, the site features announcements, downloadable resources, report submission links, and a responsive design tailored for both desktop and mobile users.",
        image: "images/Nueva Vizcaya ppo.jpg", // Replace with actual screenshot
        links: {
        demo: "https://nuevavizcayappo.pro2.pnp.gov.ph/"
        }
      },
      {
        title: "Oplan-VISA Website",
        description: "A front-end prototype developed for the Philippine National Police’s Oplan-VISA initiative. This responsive website showcases a modern, mobile-friendly interface that highlights the program's mission, objectives, and contact channels. Designed for accessibility and future integration with backend systems.",
        image: "images/oplan-visa.jpg", // Replace with actual screenshot
        links: {
        demo: "https://oplan-e-visa.vercel.app/"
        }
      },
      {
        title: "PNP Quiz App",
        description: "A fully functional web-based quiz application designed for Philippine National Police personnel and aspiring applicants. The app features randomized questions, a scoring system, and real-time feedback. Built with responsive design for seamless use across desktop and mobile devices.",
        image: "images/pnpquiz-app.jpg", // Replace with actual screenshot
        links: {
        demo: "https://pnp-quiz-app.vercel.app/"
        }
      }
      ,
      {
        title: "Tres Hot Plates",
        description: "A modern front-end website for Tres Hot Plates, a sizzling restaurant concept serving Filipino comfort food with a twist. This project showcases an eye-catching design, responsive layout, and engaging user interface — perfect for promoting the restaurant's menu, story, and contact details online. Built entirely using HTML, CSS, and JavaScript",
        image: "images/tres-hot-plates.jpg", // Replace with actual screenshot
        links: {
        demo: "https://github.com/YDeveloper09/Tres-Hot-Plates"
        }
      }
       ,
      {
        title: "Library App",
        description: "A front-end web application designed for a local community library. This project features a clean and intuitive UI, allowing users to browse available books, explore categories, and access contact and membership information. Built with HTML, CSS, and JavaScript, the site is fully responsive and optimized for mobile and desktop viewing.",
        image: "images/library.jpg", // Replace with actual screenshot
        links: {
        demo: "https://library-with-dash-board.vercel.app/"
        }
      },
      {
        title: "Simon Game: Among Us Edition",
        description: "A fun and fully functional memory game inspired by the classic Simon Game, reimagined with an Among Us theme. Players must repeat an increasingly complex sequence of colors and sounds while enjoying visuals and sounds reminiscent of the hit game. Built with HTML, CSS, and JavaScript, this version features smooth transitions, responsive design, and playful animations to keep players engaged.",
        image: "images/simon-game.jpg", // Replace with actual screenshot
        links: {
        demo: "https://simon-game-with-among-us-inspired-design.vercel.app/"
        }
      }
  ];


  const multimediaProjects = [
  {
    title: "FXP App Promo Video",
    description: "A promotional video showcasing features of the FXP App for athletes, edited with Adobe Premiere and After Effects.",
    mediaType: "video",
    mediaSrc: "videos/fxp_teaser.mp4",
    links: {
      demo: "https://www.youtube.com/watch?v=8b4jPerFWJ0"
    }
  },
  {
    title: "Solano Police Station Entry | Police Service Anniversary Video",
    description: "This video is the official entry of Solano Police Station for the Best Municipal Police Station Regionwide Contest, in celebration of the Police Service Anniversary. It highlights their dedication to law enforcement, community service, and excellence in public safety.",
    mediaType: "video",
    mediaSrc: "videos/Police-Service-Anniversary.mp4",
    links: {
      demo: "https://www.youtube.com/watch?v=BdOxHPuHeEk"
    }
  },
  {
    title: "Nutrition & Hydration: The Athlete’s Secret Weapon",
    description: "Quick tips on why fueling your body right and staying hydrated are game changers for peak performance and recovery. Small habits, big impact!",
    mediaType: "video",
    mediaSrc: "videos/NUTRITION HABITS.mp4",
    links: {
      demo: "https://www.instagram.com/p/DJcZsiIvLFf/"
    }
  },
  {
    title: "Summer Transfer Window Highlights",
    description: "Quick updates and key moves from the summer transfer window — who’s in, who’s out, and how squads are shaping up for the new season",
    mediaType: "video",
    mediaSrc: "videos/CLUB TRANSFER.mp4",
    links: {
      demo: "https://www.instagram.com/p/DJpYkBkJlCN/"
    }
  },
  {
    title: "Game-Changing Football Boots – Built for Performance",
    description: "A dynamic reel showcasing a high-performance football boot designed to elevate solo training. This short video highlights how the new boot enhances grip, comfort, and control — giving players the edge they need when training alone",
    mediaType: "video",
    mediaSrc: "videos/New Boot.mp4",
    links: {
      demo: "https://www.instagram.com/p/DJkO-7oPupE/"
    }
  },
  {
    title: "Solo Football Training Reel – Discipline Behind the Game",
    description: "A short-form motivational reel highlighting the importance of solo training in football. This video emphasizes self-discipline, consistency, and skill-building through individual drills.",
    mediaType: "video",
    mediaSrc: "videos/SOLO TRAINING.mp4",
    links: {
      demo: "https://www.instagram.com/p/DJcZsiIvLFf/"
    }
  },
];

  
  const projectsGrid = document.getElementById("projects-grid");
  
  function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `Project: ${project.title}`);
  
    card.innerHTML = `
      <img
        src="${project.image}"
        alt="Screenshot of ${project.title}"
        class="project-image"
        loading="lazy"
      />
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          ${
            project.links.demo
              ? `<a href="${project.links.demo}" target="_blank" rel="noopener" class="project-link" aria-label="View demo of ${project.title}">Visit Page <i class="fas fa-external-link-alt"></i></a>`
              : ""
          }
        </div>
      </div>
    `;
  
    return card;
  }
  
  function loadProjects() {
    projectsGrid.innerHTML = "";
    projects.forEach((project) => {
      const card = createProjectCard(project);
      projectsGrid.appendChild(card);
    });
  }


  const multimediaGrid = document.getElementById("multimedia-grid");

function createMultimediaCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.tabIndex = 0;
  card.setAttribute("aria-label", `Multimedia Project: ${project.title}`);

  let mediaHTML = "";
  if (project.mediaType === "video") {
    mediaHTML = `
      <video class="project-media" controls preload="metadata">
        <source src="${project.mediaSrc}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    mediaHTML = `<p>Unsupported media type</p>`;
  }

  card.innerHTML = `
    ${mediaHTML}
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener" class="project-link">View<i class="fas fa-external-link-alt"></i></a>` : ""}
      </div>
    </div>
  `;
  return card;
}

function loadMultimediaProjects() {
  multimediaGrid.innerHTML = "";
  multimediaProjects.forEach((project) => {
    const card = createMultimediaCard(project);
    multimediaGrid.appendChild(card);
  });
}



function initTypedEffect() {
  if (typeof roles !== "undefined" && roles.length) {
    setTimeout(type, newTextDelay + 250);
  }
}

function initAchievementCounter() {
    const counters = document.querySelectorAll('.achievement-number');
    const options = { threshold: 0.5 };

    function animateCounter(counter) {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / target), 10);

      let current = 0;
      function step() {
        current += 1;
        counter.innerText = current;
        if (current < target) {
          setTimeout(step, stepTime);
        } else {
          counter.innerText = target + '+';
        }
      }

      step();
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }

// function initScrollToTopButton() {
//   const scrollBtn = document.getElementById("scrollToTopBtn");
//   if (!scrollBtn) return;

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) {
//       scrollBtn.style.display = "block";
//     } else {
//       scrollBtn.style.display = "none";
//     }
//   });

//   scrollBtn.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   });
// }



  
  document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    loadMultimediaProjects();
    initTypedEffect();
    initAchievementCounter();
    // initScrollToTopButton()
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
  
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    const carousel = document.querySelector('#designCarousel');
if (carousel) {
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 2000, // 3 seconds
    ride: 'carousel'
  });
}



  });
  