// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Iván",
    middleName: "",
    lastName: "Curbelo",
    message: "MainBodyMessage",
    icons: [
        {
            image: "fa-github",
            url: "https://github.com/mayxen",
        },
        {
            image: "fa-instagram",
            url: "https://www.instagram.com/mayxendev/",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/ivancurbelofernandez/",
        },
    ],
};

const about = {
    show: true,
    heading: "Sobre mi",
    imageLink: "https://media-exp1.licdn.com/dms/image/C5603AQFBAuwIWgYlCQ/profile-displayphoto-shrink_800_800/0/1659623360314?e=1666224000&v=beta&t=Dh_o2G0bZ9ZPPEe5RRyXGqS0ALJGGw25cwjXtAMyC2A",
    imageSize: 375,
    message: "AboutMessage",
    resume: require("../editable-stuff/resume.pdf"),
};

const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        {name: "Java", value: 60},
        {name: "MySQL", value: 90},
        {name: "PostgreSQL", value: 80},
        {name: "C++", value: 80},
        {name: "JavaScript", value: 95},
        {name: "HTML/CSS", value: 95},
        {name: "C#", value: 80},
        {name: "PHP", value: 80},
    ],
    softSkills: [
        {name: "React", value: 70},
        {name: "Unity", value: 90},
        {name: "Unreal Engine", value: 90},
        {name: "Node JS", value: 85},
        {name: "Apache", value: 85},
        {name: "Laravel", value: 80},
        {name: "CPanel", value: 90},
        {name: "WHM", value: 70},
    ],
};

const getInTouch = {
    show: true,
    heading: "TouchHeader",
    message:
        "TouchMessage",
    email: "ivancurbelotrabajo@gmail.com",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [
        {
            role: 'role-Zec',
            date: 'date-Zec',
        },
        {
            role: 'role-Artek',
            date: 'date-Artek',
        },
    ]
}

const projects = {
    show: true,
    heading: "Projects",
    data: [
        {
            id: 0,
            name: "Portfolio",
            description: "Desarrollo del portfolio usando React y el pages de Github para mostrar los proyectos realizados por mi.",
            img: [
                require("../assets/img/web.jpg"),
                require("../assets/img/web.jpg"),
                require("../assets/img/web.jpg"),
                require("../assets/img/web.jpg"),
                require("../assets/img/web.jpg"),
            ]
        },
    ]
}

const resources = {
    en: {
        translation: {
            //HOME
            "ResumeButton": "Resume",

            //EXPERIENCE CARD
            "role-Zec": "FullStack programmer at Zec Telecom",
            "role-Artek": "FullStack programmer at Artek",
            "date-Zec": "2021 – Nowadays",
            "date-Artek": "2019 - 2020",
            "Experiences": "Experiences",

            //GET IN TOUCH
            "TouchHeader": "Contact me!",
            "TouchMessage": "I am currently working but I do not rule out offers that may involve a challenge or a change for the better. Do not hesitate to send me an email if you think I can fit in your staff.",

            //MAIN BODY
            "More about me": "More about me",
            "View recent projects": "View recent projects",
            "MainBodyMessage": "Passionate about technology and videogames",

            //SKILLS
            "Lenguajes": "programming language",
            "Framework/Software": "Framework/Software",

            //HEADER
            "About": "About",
            "Skills": "Skills",
            "Projects": "Projects",

            //ABOUT
            "Sobre mi": "About me",
            "AboutMessage": "Passionate about programming, I love learning new things. I have learned video game development and multiple languages such as C#, C++ among others.",
        }
    },
    es: {
        translation: {
            //HOME
            "ResumeButton": "Curriculum",

            //EXPERIENCE CARD
            "role-Zec": "Programador FullStack en Zec Telecom",
            "role-Artek": "Programador FullStack en Artek",
            "date-Zec": "2021 – Actualidad",
            "date-Artek": "2019 - 2020",
            "Experiences": "Experiencia laboral",

            //GET IN TOUCH
            "TouchHeader": "Ponte en contacto conmigo!",
            "TouchMessage": "Actualmente estoy trabajando pero no descarto ofertas que puedan suponer un reto o un cambio a mejor. No dudes en enviar un email si crees que puedo engajar en tu plantilla.",

            //MAIN BODY
            "More about me": "Sobre mí",
            "View recent projects": "Ver proyectos",
            "MainBodyMessage": "Apasionado de la tecnología y los videojuegos",

            //SKILLS
            "Lenguajes": "Lenguajes de programación",
            "Framework/Software": "Framework/Software",

            //HEADER
            "About": "Sobre mí",
            "Skills": "Habilidades",
            "Projects": "Proyectos",

            //ABOUT
            "Sobre mi": "Sobre mí",
            "AboutMessage": "Apasionado de la programación, me encanta aprender cosas nuevas. De forma autodidacta he aprendido el desarrollo de videojuegos y múltiples lenguajes como C#, C++ entre otros",
        }
    }
};

export {navBar, mainBody, about, skills, getInTouch, experiences, projects, resources};
