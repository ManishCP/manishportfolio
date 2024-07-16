var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

document.addEventListener('DOMContentLoaded', function() {
    //Define portfolio content for each service

    const portfolios ={
        webDesign: [
            {
                title: "Car Rental System",
                description: "The Car Rental System is a sophisticated platform tailored for car owners and customers, offering a seamless experience in renting and managing fleets. Developed using Spring Boot, Hibernate, and MySQL this enterprise-level Java EE application follows an MVC design pattern to ensure scalability and maintainability.",
                imgSrc: "Pics/CarRentalSystem.png",
                link: "https://github.com/ManishCP/CarRentalSystem"
            },
            {
                title: "Hostel Directory",
                description: "The Hostel Directory Management System is a desktop application developed using WPF (Windows Presentation Foundation) and MVVM (Model-View-ViewModel) architecture.",
                imgSrc: "https://github.com/ManishCP/HostelDirectory",
                link: "Pics/HostelDirectory.png"                
            },
            {
                title: "Course Registration",
                description: "This is a Spring Boot application that provides a platform for students and professors to manage course registrations. It facilitates user authentication, course selection, and filtering, and allows for various interactions between students and professors. It demonstrates Object-Oriented Design principles while interacting with a MySQL database using Hibernate.",
                imgSrc: "Pics/project_thumbnail.jpg",
                link: "https://github.com/ManishCP/Course-Registration-Portal"                
            },
            {
                title: "Accujob-Job Search And Optimization Website",
                description: "Node.js, MongoDB, ExpressJS",
                imgSrc: "Pics/project_thumbnail.jpg",
                link: "https://github.com/ManishCP/Accujob-Job-Search-And-Optimization-Website"                
            },   
        ],
        uiUxDesign: [
            {
                title: "Amazon Voice",
                description: "This is redesign and additional features in the present Amazon Voice",
                imgSrc: "Pics/AmazonVoice.png",
                link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1"
            },
            {
                title: "InHabit",
                description: "Community engagement app",
                imgSrc: "Pics/Inhabit.png",
                link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1"
            },
            {
                title: "Dashboard Redesign",
                description: "Redesign of app.nodmad.ai dashboard",
                imgSrc: "Pics/DashboardRedesign.png",
                link: "https://www.figma.com/design/rkRr4I5EsbzzYixYEQOswg/My-Projects?node-id=0-1&t=MR0W8jFgoucDMAgj-1"
            }
        ],
        publication: [
            {
                title: "ACCUJOB-JOB SEARCHANDOPTIMIZATIONWEBSITE",
                description: "Akhil Chaitanya Ghanta, Manish CP, Sanjay Muzumdar, Dr.Swarnalata P, International Journal of Creative Research Thoughts, ISSN:2320-2882, Vol.10, Issue 10, pp.c69-c83, Oct 2022.",
                imgSrc: "Pics/AmazonVoice.png",
                link: "https://www.ijcrt.org/papers/IJCRT2210242.pdf"
            },
            {
                title: "MEDICAL DIAGNOSIS OF MALARIA USING FUZZY APPROACH",
                description: ",Manish.CP,Akhil Chaitanya Ghanta, Dr.J Ravi Sankar, International Journal of Creative Research Thoughts (IJCRT), ISSN:2 320-2882, Vol.10, Issue 10, pp.d782-d787, Oct 2022.",
                imgSrc: "Pics/Inhabit.png",
                link: "https://www.ijcrt.org/papers/IJCRT2210438.pdf"
            }
        ]
    }

    // Function to populate portfolio section
    function populatePortfolio(portfolio) {
        const workList = document.getElementById('work-list');
        workList.innerHTML = ''; // Clear existing content
        portfolio.forEach(work => {
            const workDiv = document.createElement('div');
            workDiv.className = 'work';
            workDiv.innerHTML = `
                <img src="${work.imgSrc}">
                <div class="layer">
                    <h3>${work.title}</h3>
                    <p>${work.description}</p>
                    <a href="${work.link}"><i class="fas fa-external-link-alt"></i></a>
                </div>
            `;
            workList.appendChild(workDiv);
        });
        document.getElementById('portfolio').style.display = 'block';
    }

    // Event listeners for service links
    document.getElementById('full-stack-link').addEventListener('click', function(event) {
        event.preventDefault();
        populatePortfolio(portfolios.webDesign);
    });

    document.getElementById('ui-ux-design-link').addEventListener('click', function(event) {
        event.preventDefault();
        populatePortfolio(portfolios.uiUxDesign);
    });

    document.getElementById('publication-link').addEventListener('click', function(event) {
        event.preventDefault();
        populatePortfolio(portfolios.publication);
    });

});

// document.addEventListener('DOMContentLoaded', function() {
    

//     // Function to populate portfolio section
//     function populatePortfolio(portfolio) {
//         const workList = document.getElementById('work-list');
//         workList.innerHTML = ''; // Clear existing content
//         portfolio.forEach(work => {
//             const workDiv = document.createElement('div');
//             workDiv.className = 'work';
//             workDiv.innerHTML = `
//                 <img src="${work.imgSrc}">
//                 <div class="layer">
//                     <h3>${work.title}</h3>
//                     <p>${work.description}</p>
//                     <a href="${work.link}"><i class="fas fa-external-link-alt"></i></a>
//                 </div>
//             `;
//             workList.appendChild(workDiv);
//         });
//         document.getElementById('portfolio').style.display = 'block';
//     }

//     // Event listeners for service links
//     document.getElementById('full-stack-link').addEventListener('click', function(event) {
//         event.preventDefault();
//         populatePortfolio(portfolios.webDesign);
//     });

//     document.getElementById('ui-ux-design-link').addEventListener('click', function(event) {
//         event.preventDefault();
//         populatePortfolio(portfolios.uiUxDesign);
//     });

//     document.getElementById('publication-linkk').addEventListener('click', function(event) {
//         event.preventDefault();
//         populatePortfolio(portfolios.backendDevelopment);
//     });
// });
