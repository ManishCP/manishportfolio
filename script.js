// Portfolio data
const portfolios = {
  fullStackDevelopment: [
    {
      title: "Inhabit",
      description:
        "Developed a gamified web app promoting urban sustainability. Implemented event-driven architecture for real-time user interactions. Used Flask for backend, React for frontend, and MySQL for database integration.",
      imgSrc: "Pics/inHabitHack.jpg",
      link: "https://devpost.com/software/inhabit",
      techStack: "Flask, Python, HTML, CSS, JavaScript, React, MySQL",
      category: "Full Stack Development",
    },
    {
      title: "Accujob-Job Search And Optimization Website",
      description:
        "Led team development of a job matching platform with 90% prediction accuracy. Implemented skill-based algorithms and content moderation systems to enhance recruitment efficiency and platform credibility.",
      imgSrc: "Pics/job-search.jpg",
      link: "https://github.com/ManishCP/Accujob-Job-Search-And-Optimization-Website",
      techStack: "MongoDB, ExpressJS, React, Node.js",
      category: "Full Stack Development",
    },
  ],
  backendDevelopment: [
    {
      title: "Car Rental System",
      description:
        "Developed an enterprise-level Java EE application with MVC design pattern and Hibernate ORM. Implemented solutions for duplicate entries, simultaneous bookings, and optimized performance using normalization, indexing, and concurrency control.",
      imgSrc: "Pics/CarRentalSystem.png",
      link: "https://github.com/ManishCP/CarRentalSystem",
      techStack: "Spring Boot, Hibernate, MySQL",
      category: "Backend Development",
    },
    {
      title: "Course Registration Portal",
      description:
        "Designed a platform for students and professors using Object-Oriented design principles. Implemented Singleton and Factory design patterns, reducing code complexity by 30%. Utilized MySQL for efficient CRUD operations.",
      imgSrc: "Pics/classRegistration.png",
      link: "https://github.com/ManishCP/Course-Registration-Portal",
      techStack: "Spring Boot, Hibernate, MySQL",
      category: "Backend Development",
    },
  ],
  frontendDevelopment: [
    {
      title: "Interactive Calendar Viewer Component with Event Management",
      description:
        "Built a Calendar Viewer component with navigation and event management features. Implemented data persistence using local storage.",
      imgSrc: "Pics/Calendar.jpg",
      techStack: "HTML, CSS, JavaScript (React/Vue), Figma",
      category: "Frontend Development",
    },
  ],
  desktopApplicationDevelopment: [
    {
      title: "Hostel Directory Management System",
      description:
        "Developed a WPF app using MVVM architecture with modular UI components. Implemented Messenger using Singleton pattern and integrated Entity Framework for database operations.",
      imgSrc: "Pics/hostel.jpg",
      link: "https://github.com/ManishCP/HostelDirectory",
      techStack: "C#, Windows Presentation Foundation, Entity Framework, Microsoft SQL Server",
      category: "Desktop Application Development",
    },
  ],
  dataScience: [
    {
      title: "Predicting Skin Cancer Types Using Lesion Image Diagnosis",
      description:
        "Leveraged transfer learning techniques with pre-trained CNN architectures, achieving 92% accuracy in skin cancer classification. Implemented a real-time diagnosis interface with 93% accuracy for specific skin cancer types.",
      imgSrc: "Pics/skinCancer.jpg",
      techStack: "Python, TensorFlow, Scikit-learn",
      category: "Data Science and Machine Learning",
    },
  ],
  uiUxDesign: [
    {
      title: "Amazon Voice",
      description:
        "Led design integration of X-like features within Amazon app, including Tweet-Like Feeds and live interaction features. Conducted user research and iterative prototyping.",
      imgSrc: "Pics/AmazonVoice.png",
      link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1",
      techStack: "Figma",
      category: "UI/UX Design",
    },
    {
      title: "InHabit",
      description: "Community engagement app",
      imgSrc: "Pics/Inhabit.png",
      link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1",
      techStack: "Figma",
      category: "UI/UX Design",
    },
    {
      title: "Dashboard Redesign",
      description:
        "Redesigned app.usenomad.ai dashboard, adding KPI cards and improving data visualization. Implemented customizable layouts and theme options for enhanced user experience.",
      imgSrc: "Pics/DashboardRedesign.png",
      link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1",
      techStack: "Figma",
      category: "UI/UX Design",
    },
    {
      title: "Telegram UI/UX Redesign",
      description:
        "Revamped Telegram's UI using empathy-driven design principles. Integrated new features like status section and news feed to boost engagement.",
      imgSrc: "Pics/telegram.png",
      techStack: "Figma, Jira",
      category: "UI/UX Design",
    },
  ],
  publication: [
    {
      title: "ACCUJOB-JOB SEARCHANDOPTIMIZATIONWEBSITE",
      description:
        "Akhil Chaitanya Ghanta, Manish CP, Sanjay Muzumdar, Dr.Swarnalata P, International Journal of Creative Research Thoughts, ISSN:2320-2882, Vol.10, Issue 10, pp.c69-c83, Oct 2022.",
      imgSrc: "Pics/Accujob-pub.png",
      link: "https://www.ijcrt.org/papers/IJCRT2210242.pdf",
      category: "Publication",
    },
    {
      title: "MEDICAL DIAGNOSIS OF MALARIA USING FUZZY APPROACH",
      description:
        "Manish.CP,Akhil Chaitanya Ghanta, Dr.J Ravi Sankar, International Journal of Creative Research Thoughts (IJCRT), ISSN:2 320-2882, Vol.10, Issue 10, pp.d782-d787, Oct 2022.",
      imgSrc: "Pics/medical-pub.png",
      link: "https://www.ijcrt.org/papers/IJCRT2210438.pdf",
      category: "Publication",
    },
  ],
}

// DOM Elements
const navbar = document.querySelector(".navbar")
const logoText = document.querySelector(".logo-text")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const scrollProgress = document.querySelector(".scroll-progress")
const projectsGrid = document.getElementById("projects-grid")
const filterBtns = document.querySelectorAll(".filter-btn")
const tabBtns = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")
const contactForm = document.getElementById("contact-form")
const modal = document.getElementById("project-modal")
const modalClose = document.getElementById("modal-close")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeAnimations()
  populateProjects("all")
  setupEventListeners()
})

// Scroll Progress and Navbar
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const maxHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrolled / maxHeight) * 100

  scrollProgress.style.width = scrollPercent + "%"

  // Navbar background
  if (scrolled > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Logo Animation
function initializeAnimations() {
  // Logo starts centered and moves to position
  logoText.classList.add("initial")

  setTimeout(() => {
    logoText.classList.remove("initial")
  }, 500)

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  // Observe sections for animations
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section)
  })
}

// Mobile Menu
function setupEventListeners() {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close mobile menu when clicking on links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Tab functionality
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.dataset.tab
      openTab(tabName)
    })
  })

  // Filter functionality
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.dataset.filter
      setActiveFilter(this)
      populateProjects(filter)
    })
  })

  // Modal functionality
  modalClose.addEventListener("click", closeModal)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Contact form
  contactForm.addEventListener("submit", handleFormSubmit)

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Tab functionality
function openTab(tabName) {
  // Remove active class from all tabs and contents
  tabBtns.forEach((btn) => btn.classList.remove("active"))
  tabContents.forEach((content) => content.classList.remove("active"))

  // Add active class to clicked tab and corresponding content
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active")
  document.getElementById(`${tabName}-tab`).classList.add("active")
}

// Portfolio filtering
function setActiveFilter(activeBtn) {
  filterBtns.forEach((btn) => btn.classList.remove("active"))
  activeBtn.classList.add("active")
}

function populateProjects(filter) {
  const allProjects = Object.values(portfolios).flat()
  const filteredProjects = filter === "all" ? allProjects : portfolios[filter] || []

  projectsGrid.innerHTML = ""

  filteredProjects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index)
    projectsGrid.appendChild(projectCard)
  })
}

function createProjectCard(project, index) {
  const card = document.createElement("div")
  card.className = "project-card"
  card.style.animationDelay = `${index * 0.1}s`

  const techTags = project.techStack ? project.techStack.split(", ").slice(0, 3) : []
  const remainingTags = project.techStack ? project.techStack.split(", ").length - 3 : 0

  card.innerHTML = `
        <div class="project-image-container">
            <img src="${project.imgSrc}" alt="${project.title}" class="project-image">
            ${project.link ? `<div class="project-link-icon"><i class="fas fa-external-link-alt"></i></div>` : ""}
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="tech-tags">
                ${techTags.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                ${remainingTags > 0 ? `<span class="tech-tag">+${remainingTags}</span>` : ""}
            </div>
        </div>
    `

  card.addEventListener("click", () => openModal(project))

  return card
}

// Modal functionality
function openModal(project) {
  document.getElementById("modal-image").src = project.imgSrc
  document.getElementById("modal-title").textContent = project.title
  document.getElementById("modal-category").textContent = project.category
  document.getElementById("modal-description").textContent = project.description

  const modalLink = document.getElementById("modal-link")
  if (project.link) {
    modalLink.href = project.link
    modalLink.style.display = "flex"
  } else {
    modalLink.style.display = "none"
  }

  if (project.techStack) {
    const techTags = project.techStack.split(", ")
    const techTagsContainer = document.getElementById("modal-tech-tags")
    techTagsContainer.innerHTML = techTags.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")
  }

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Contact form handling
function handleFormSubmit(e) {
  e.preventDefault()

  const submitBtn = e.target.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML

  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitBtn.disabled = true

  // Simulate form submission
  setTimeout(() => {
    alert("Your message has been sent successfully!")
    contactForm.reset()
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".about-card, .project-card, .contact-info-card, .contact-form-card",
  )
  elementsToAnimate.forEach((el) => {
    animationObserver.observe(el)
  })
})

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal()
  }
})

// Preload images for better performance
function preloadImages() {
  const allProjects = Object.values(portfolios).flat()
  allProjects.forEach((project) => {
    if (project.imgSrc) {
      const img = new Image()
      img.src = project.imgSrc
    }
  })
}

// Initialize preloading
document.addEventListener("DOMContentLoaded", preloadImages)
