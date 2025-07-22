import { faReact, faLaravel, faCss3, faVuejs, faHtml5, faFigma, faPython, faJs, faGithub } from '@fortawesome/free-brands-svg-icons'
import { hciAlbum } from '../assets/images/project-images/hci/hciAlbum'
import { appdevAlbum } from '../assets/images/project-images/appdev/appdevAlbum'
import { topprofessorAlbum } from '../assets/images/project-images/topprofessor/topprofessorAlbum'
import { sadAlbum } from '../assets/images/project-images/sad/sadAlbum'
import { thesisAlbum } from '../assets/images/project-images/thesis/thesisAlbum'
import { reactAlbum } from '../assets/images/project-images/react/reactAlbum'

export const projects = [
    
    {
        id: "thesis",
        title: "Flood Evacuation Model",
        label: "Simulation Model Development",
        begin: "Sep 2024",
        end: "Nov 2024",
        description: `
            Flood Evacuation Model is a proposed thesis project based on a modifed A*ACO
            routing algorithm which considers different parameters that aim to mimic a
            near-optimized evacuation route for users during flooding events. It utilizes
            web-based flood simulation and calculates multiple possible paths. The model
            supports sudden obstacles inputted in the system upon simulation to consider
            blockages in the road network.
        `,
        thumbnail: { image: thesisAlbum.thesisLandingScreen, title: "Landing Screen" },
        imageAlt: "Preview of Flood Evacuation Model",
        images: [
            { image: thesisAlbum.thesisLandingScreen, title: "Landing Screen" },
            { image: thesisAlbum.thesisSimulationScreen, title: "Simulation Screen" },
            { image: thesisAlbum.thesisResultScreen, title: "Result Screen" },
        ],
        link: { devIcon: "", faIcon: faGithub, link: "https://web.facebook.com/blox.x.xium", title: "" },
        collaboration: "group",
        source: "academic",
        tech: [
        { devIcon: "", faIcon: faPython, text: "Python" },
        ],
    },
    {
        id: "react",
        title: "Task Management Project",
        label: "Front-End Development",
        begin: "Dec 2024",
        end: "",
        description: `
            Task management project is a to-do list manager for a React academic project.
            The website contains the basic functionalities of a task manager such as creation
            and assignment of tasks.
        `,
        thumbnail: { image: reactAlbum.reactLandingScreen, title: "Landing Screen" },
        imageAlt: "Preview of Task Management Project",
        images: [
            { image: reactAlbum.reactLandingScreen, title: "Landing Screen" },
            { image: reactAlbum.reactTaskCreateScreen, title: "Task Create Screen" },
            { image: reactAlbum.reactTaskScreen1, title: "Task Screen 1" },
            { image: reactAlbum.reactTaskScreen2, title: "Task Screen 2" },
            { image: reactAlbum.reactTaskFilter1Screen, title: "Task Priority Dropdown" },
            { image: reactAlbum.reactTaskFilter2Screen, title: "Task Status Dropdown" },
        ],
        link: { devIcon: "", faIcon: faGithub, link: "https://web.facebook.com/blox.x.xium", title: "" },
        collaboration: "group",
        source: "academic",
        tech: [
            { devIcon: "", faIcon: faReact, text: "React" },
            { devIcon: "", faIcon: faCss3, text: "CSS" },
            { devIcon: "", faIcon: faFigma, text: "Figma" },
        ],
    },
    {
        id: "manpro",
        title: "ManPro Mobile",
        label: "Mobile Development",
        begin: "Jun 2024",
        end: "Jul 2024",
        description: `
            ManPro Mobile is a mobile platform for the human resource management system
            developed by Infinity Hub Digital Marketing Agency in Davao City. It streamlines
            the management of payroll and HR processes by automating routine tasks such as
            attendance tracking, leave management, and salary computation. The system supports
            real-time updates in order to maintain work efficiency and employee satisfaction.
        `,
        thumbnail: "",
        imageAlt: "Preview of ManPro Mobile",
        images: [

        ],
        link: { devIcon: "", faIcon: faGithub, link: "https://web.facebook.com/blox.x.xium", title: "" },
        collaboration: "group",
        source: "internship",
        tech: [
        { devIcon: "", faIcon: faReact, text: "React Native" },
        { devIcon: "", faIcon: faLaravel, text: "Laravel" },
        { devIcon: "", faIcon: faCss3, text: "CSS" },
        { devIcon: "devicon-androidstudio-plain", faIcon: "", text: "Android Studio" },
        ],
    },
    {
        id: "topprofessor",
        title: "TopProfessor",
        label: "Front-End Development",
        begin: "Apr 2024",
        end: "May 2024",
        description: `
            TopProfessor is a proposed web application project for rating Ateneo de Davao
            University professors across different criteria. The website serves as a unified
            registry of all professors in AdDU along with relevant information regarding their
            teaching career, courses covered, and student evaluations.
        `,   
        thumbnail: { image: topprofessorAlbum.topprofessorLandingScreen, title: "Landing Screen" },
        imageAlt: "Preview of TopProfessor",
        images: [
            { image: topprofessorAlbum.topprofessorLandingScreen, title: "Landing Screen" },
            { image: topprofessorAlbum.topprofessorLoginScreen, title: "Login Screen" },
            { image: topprofessorAlbum.topprofessorDashboardScreen, title: "Dashboard Screen" },
            { image: topprofessorAlbum.topprofessorRatingScreen, title: "Rating Screen" },
            { image: topprofessorAlbum.topprofessorRatingOverviewScreen, title: "Rating Overview Screen" },
            { image: topprofessorAlbum.topprofessorFacultyScreen, title: "Faculty Screen" },
            { image: topprofessorAlbum.topprofessorFacultyOverviewScreen, title: "Faculty Overview Screen" },
        ],
        link: { devIcon: "", faIcon: faGithub, link: "https://web.facebook.com/blox.x.xium", title: "" },
        collaboration: "group",
        source: "academic",
        tech: [
        { devIcon: "", faIcon: faReact, text: "React" },
        { devIcon: "devicon-postgresql-plain", faIcon: "", text: "PostgreSQL" },
        { devIcon: "devicon-tailwindcss-original", faIcon: "", text: "TailwindCSS" },
        { devIcon: "", faIcon: faFigma, text: "Figma" },
        ],
    },
    {
        id: "hci",
        title: "Clef",
        label: "UI Prototyping",
        begin: "Dec 2023",
        end: "",
        description: `
            Clef is a proposed AI chatbot similar to ChatGPT specifically catered to song
            lookup and music discovery. This academic project is envisioned as a smart music
            player that allows users to search for music based on standard song information
            like titles and lyrics or based on hums, beats, feelings, and experiences, etc. 
        `,
        thumbnail: { image: hciAlbum.hciLandingScreen, title: "Landing Screen" },
        imageAlt: "Preview of Clef",
        images: [
            { image: hciAlbum.hciLandingScreen, title: "Landing Screen" },
            { image: hciAlbum.hciSignupScreen, title: "Signup Screen" },
            { image: hciAlbum.hciLoginScreen, title: "Login Screen" },
            { image: hciAlbum.hciSidebar, title: "Sidebar" },
            { image: hciAlbum.hciNewChatScreen, title: "New Chat Screen" },
            { image: hciAlbum.hciChatRecorcScreen, title: "Chat Record Screen" },
            { image: hciAlbum.hciChatResultScreen, title: "Chat Result Screen" },
            { image: hciAlbum.hciChatFaveScreen, title: "Chat Favorite Screen" },
            { image: hciAlbum.hciChatPreviewScreen, title: "Chat Preview Screen" },
            { image: hciAlbum.hciChatMiniplayerScreen, title: "Chat Miniplayer Screen" },
            { image: hciAlbum.hciChatMediaplayerScreen, title: "Chat Mediaplayer Screen" },
            { image: hciAlbum.hciFavoritesScreen, title: "Favorites Screen" },
            { image: hciAlbum.hciSettingsScreen, title: "Settings Screen" },
        ],
        link: { devIcon: "", faIcon: faFigma, link: "https://www.figma.com/design/OiENwjBAfjyFivfArwRn9X/HCI---ALMONTE--BANGGUD?m=auto&t=z5dcvqFRgDdxw1ra-6", title: "HCI - ALMONTE, BANGGUD" },
        collaboration: "pair",
        source: "academic",
        tech: [
            { devIcon: "", faIcon: faFigma, text: "Figma" },
        ],
    },
    {
        id: "sad",
        title: "TJ Gear Marketing RMS",
        label: "Full-Stack System Development",
        begin: "Oct 2023",
        end: "Dec 2023",
        description: `
            TJ Gear Marketing RMS is an integrated retail management system developed for
            TJ Gear Marketing business in Tagum City. This system utilizes one desktop 
            device with role-based access control for authorization of different employees.
            It optimizes the management of all inventory, sales, and job orders of the business
            from tracking to calculation of finances. 
        `,    
        thumbnail: { image: sadAlbum.sadLandingScreen, title: "Landing Screen" },
        imageAlt: "Preview of TJ Gear Marketing RMS",
        images: [
            { image: sadAlbum.sadLandingScreen, title: "Landing Screen" },
            { image: sadAlbum.sadLoginScreen, title: "Login Screen" },
            { image: sadAlbum.sadDashboardScreen, title: "Dashboard Screen" },
            { image: sadAlbum.sadInventoryScreen, title: "Inventory Screen" },
            { image: sadAlbum.sadInventoryViewScreen, title: "Inventory Create Screen" },
            { image: sadAlbum.sadSupplyScreen, title: "Supply Screen" },
            { image: sadAlbum.sadSupplyCreateScreen, title: "Supply Create Screen" },
            { image: sadAlbum.sadSalesScreen, title: "Sales Screen" },
            { image: sadAlbum.sadSalesCreateScreen, title: "Sales Create Screen" },
            { image: sadAlbum.sadFinancesScreen, title: "Finances Screen" },
            { image: sadAlbum.sadCashOnHandScreen, title: "Cash On Hand Screen" },
            { image: sadAlbum.sadJobOrderScreen, title: "Job Order Screen" },
            { image: sadAlbum.sadJobOrderCreateScreen, title: "Job Order Create Screen" },
            { image: sadAlbum.sadServicesScreen, title: "Services Screen" },
            { image: sadAlbum.sadEmployeesScreen, title: "Employees Screen" },
        ],
        link: {},
        collaboration: "group",
        source: "academic",
        tech: [
        { devIcon: "", faIcon: faLaravel, text: "Laravel" },
        { devIcon: "", faIcon: faVuejs, text: "Vue.js" },
        { devIcon: "devicon-tailwindcss-original", faIcon: "", text: "TailwindCSS" },
        { devIcon: "", faIcon: faFigma, text: "Figma" },
        ],
    },
    {
        id: "edp",
        title: "Game of The Generals",
        label: "Game Development",
        begin: "Feb 2023",
        end: "Mar 2023",
        description: `
            Game of the Generals is a traditional Filipino board game played with 2 players
            each aiming to capture the flag of the opponent against different pieces with
            designated ranks. This digital version is a project developed as an offline local
            co-op game that follows the same rule sets with additional difficulty settings 
            and practice option via bot gameplay.
        `,
        thumbnail: "",
        imageAlt: "Preview of Game of The Generals",
        images: [

        ],
        link: {},
        collaboration: "group",
        source: "academic",
        tech: [
        { devIcon: "devicon-tailwindcss-original", faIcon: "", text: "TailwindCSS" },
        { devIcon: "", faIcon: faHtml5, text: "HTML" },
        { devIcon: "", faIcon: faJs, text: "JavaScript" },
        { devIcon: "", faIcon: faCss3, text: "CSS" },
        ],
    },
    {
        id: "appdev",
        title: "SIS Redesign",
        label: "UI Prototyping",
        begin: "Feb 2023",
        end: "",
        description: `
            SIS is the student information system of Ateneo de Davao University that holds
            relevant information about the student, their curriculum, and other academic
            activities and announcements. This redesign is an academic project that aims to
            update its generic UI and better display information to the user.
        `,
        thumbnail: { image: appdevAlbum.appdevLoginScreen, title: "Login Screen" },
        imageAlt: "Preview of SIS Redesign",
        images: [
            { image: appdevAlbum.appdevLoginScreen, title: "Login Screen" },
            { image: appdevAlbum.appdevDashboardScreen, title: "Dashboard Screen" },
            { image: appdevAlbum.appdevDashboardDropdown1Screen, title: "Dashboard Memorandum Dropdown" },
            { image: appdevAlbum.appdevDashboardDropdown2Screen, title: "Dashboard Forms Dropdown" },
            { image: appdevAlbum.appdevDashboardDropdown3Screen, title: "Dashboard Others Dropdown" },
            { image: appdevAlbum.appdevMyRegistrationScreen, title: "My Registration" },
            { image: appdevAlbum.appdevMyGradesScreen, title: "My Grades" },
            { image: appdevAlbum.appdevMyAccountBalanceScreen, title: "My Account Balance" }
        ],
        link: { devIcon: "", faIcon: faFigma, link: "https://www.figma.com/design/GUUg49AkLbqz0GNp2giweS/SIS-Redesign?m=auto&t=z5dcvqFRgDdxw1ra-6", title: "SIS Redesign" },
        collaboration: "individual",
        source: "academic",
        tech: [
            { devIcon: "", faIcon: faFigma, text: "Figma" },
        ],
    },
]