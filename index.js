var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}




document.addEventListener('DOMContentLoaded', function () {
    const portfolios = {
        fullStackDevelopment: [
            {
                title: "Inhabit",
                description: "Developed a gamified web app promoting urban sustainability. Implemented event-driven architecture for real-time user interactions. Used Flask for backend, React for frontend, and MySQL for database integration.",
                imgSrc: "Pics/inHabitHack.jpg",
                link: "https://devpost.com/software/inhabit",
                techStack: "Flask, Python, HTML, CSS, JavaScript, React, MySQL"
            },
            {
                title: "Accujob-Job Search And Optimization Website",
                description: "Led team development of a job matching platform with 90% prediction accuracy. Implemented skill-based algorithms and content moderation systems to enhance recruitment efficiency and platform credibility.",
                imgSrc: "Pics/job-search.jpg",
                link: "https://github.com/ManishCP/Accujob-Job-Search-And-Optimization-Website",
                techStack: "MongoDB, ExpressJS, React, Node.js"
            }
        ],
        backendDevelopment: [
            {
                title: "Car Rental System",
                description: "Developed an enterprise-level Java EE application with MVC design pattern and Hibernate ORM. Implemented solutions for duplicate entries, simultaneous bookings, and optimized performance using normalization, indexing, and concurrency control.",
                imgSrc: "Pics/CarRentalSystem.png",
                link: "https://github.com/ManishCP/CarRentalSystem",
                techStack: "Spring Boot, Hibernate, MySQL"
            },
            {
                title: "Course Registration Portal",
                description: "Designed a platform for students and professors using Object-Oriented design principles. Implemented Singleton and Factory design patterns, reducing code complexity by 30%. Utilized MySQL for efficient CRUD operations.",
                imgSrc: "Pics/classRegistration.png",
                link: "https://github.com/ManishCP/Course-Registration-Portal",
                techStack: "Spring Boot, Hibernate, MySQL"
            }
        ],
        frontendDevelopment: [
            {
                title: "Interactive Calendar Viewer Component with Event Management",
                description: "Built a Calendar Viewer component with navigation and event management features. Implemented data persistence using local storage.",
                imgSrc: "Pics/Calendar.jpg",
                // link:
                techStack: "HTML, CSS, JavaScript (React/Vue), Figma"
            }
        ],
        desktopApplicationDevelopment: [
            {
                title: "Hostel Directory Management System",
                description: "Developed a WPF app using MVVM architecture with modular UI components. Implemented Messenger using Singleton pattern and integrated Entity Framework for database operations.",
                imgSrc: "Pics/hostel.jpg",
                link: "https://github.com/ManishCP/HostelDirectory",
                techStack: "C#, Windows Presentation Foundation, Entity Framework, Microsoft SQL Server"
            }
        ],
        dataScience: [
            {
                title: "Predicting Skin Cancer Types Using Lesion Image Diagnosis",
                description: "Leveraged transfer learning techniques with pre-trained CNN architectures, achieving 92% accuracy in skin cancer classification. Implemented a real-time diagnosis interface with 93% accuracy for specific skin cancer types.",
                imgSrc: "Pics/skinCancer.jpg",
                // link: "https://github.com/ManishCP/HostelDirectory",
                techStack: "Python, TensorFlow, Scikit-learn"
            }
        ],
        uiUxDesign: [
            { 
                title: "Amazon Voice", 
                description: "Led design integration of X-like features within Amazon app, including Tweet-Like Feeds and live interaction features. Conducted user research and iterative prototyping.", 
                imgSrc: "Pics/AmazonVoice.png", 
                link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1", 
                techStack: "Figma"
            },
            { 
                title: "InHabit",
                description: "Community engagement app", 
                imgSrc: "Pics/Inhabit.png", 
                link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1", 
                techStack: "Figma"
            },
            { 
                title: "Dashboard Redesign", 
                description: "Redesigned app.usenomad.ai dashboard, adding KPI cards and improving data visualization. Implemented customizable layouts and theme options for enhanced user experience.", 
                imgSrc: "Pics/DashboardRedesign.png", 
                link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1", 
                techStack: "Figma"
            },
            { 
                title: "Telegram UI/UX Redesign",
                description: "Revamped Telegram's UI using empathy-driven design principles. Integrated new features like status section and news feed to boost engagement.", 
                imgSrc: "Pics/telegram.png", 
                // link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1", 
                techStack: "Figma, Jira"
            }
        ],
        publication: [
            { 
                title: "ACCUJOB-JOB SEARCHANDOPTIMIZATIONWEBSITE", 
                description: "Akhil Chaitanya Ghanta, Manish CP, Sanjay Muzumdar, Dr.Swarnalata P, International Journal of Creative Research Thoughts, ISSN:2320-2882, Vol.10, Issue 10, pp.c69-c83, Oct 2022.", 
                imgSrc: "Pics/Accujob-pub.png", 
                link: "https://www.ijcrt.org/papers/IJCRT2210242.pdf" 
            },
            { 
                title: "MEDICAL DIAGNOSIS OF MALARIA USING FUZZY APPROACH", 
                description: "Manish.CP,Akhil Chaitanya Ghanta, Dr.J Ravi Sankar, International Journal of Creative Research Thoughts (IJCRT), ISSN:2 320-2882, Vol.10, Issue 10, pp.d782-d787, Oct 2022.", 
                imgSrc: "Pics/medical-pub.png", 
                link: "https://www.ijcrt.org/papers/IJCRT2210438.pdf" 
            }
        ]
    };

    const allProjects = [].concat(...Object.values(portfolios).flat());

    function populatePortfolio(portfolio) {
        const workList = document.getElementById('work-list');
        workList.innerHTML = ''; // Clear existing content

        portfolio.forEach(work => {
            const workDiv = document.createElement('div');
            workDiv.className = 'work';
            workDiv.innerHTML = `
                <div class="description">
                    <h3>${work.title}</h3>
                </div>
                <div class="img-container">
                    <img src="${work.imgSrc}" alt="${work.title}" class="project-image">
                    <a href="${work.link}" class="link" target="_blank" style="position: absolute; top: 10px; right: 10px;">🔗</a>
                </div>
                <div class="description">
                    <p>${work.description.substring(0, 100)}... <span class="read-more" onclick="showFullDescription('${work.title}')">Read more</span></p>
                    <p style="font-weight: bold; color: #754C39;">Tech Stack: ${work.techStack}</p>
                </div>
                <div class="full-description" style="display:none;" id="${work.title}-full">
                    <p>${work.fullDescription}</p>
                </div>
            `;
            workList.appendChild(workDiv);
        });
    }

    function showFullDescription(title) {
        const fullDescElement = document.getElementById(title + '-full');
        fullDescElement.style.display = fullDescElement.style.display === 'none' ? 'block' : 'none';
    }

    populatePortfolio(allProjects);

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            if (category === 'all') {
                populatePortfolio(allProjects);
            } else {
                populatePortfolio(portfolios[category]);
            }
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('message')[0].value;

    // Check if the form data is being captured correctly
    console.log("Form data:", name, email, message);

    // Now call the sendEmail function with the form data
    sendEmail(name, email, message);
});

// Function to send email from contact form
function sendEmail(name, email, message) {
    Email.send({
        SecureToken: '4d6f1b46-b09b-4197-9c4c-a26c157cde64',
        // Host : 'smtp.gmail.com',
        // Username : 'mcptemp123@gmail.com',
        // Password : 'Temp@1234',
        To: 'manishcp77@gmail.com',
        From: "your-email@example.com",  // Use your email address here
        Subject: "New Contact Form Submission",
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(function (response) {
        if (response === "OK") {
            alert("Your message has been sent successfully!");
            document.getElementById("contactForm").reset(); // Clear the form after sending
        } else {
            console.error("Email failed to send:", response);
            alert("There was an error sending your message.");
        }
    }).catch(function (error) {
        console.error("Error during email sending:", error);
    });
}

