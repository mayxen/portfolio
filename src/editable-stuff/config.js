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
    message: "Apasionado de la tecnología y los videojuegos",
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
    heading: "Sobre mii",
    imageLink: "https://media-exp1.licdn.com/dms/image/C5603AQFBAuwIWgYlCQ/profile-displayphoto-shrink_800_800/0/1659623360314?e=1666224000&v=beta&t=Dh_o2G0bZ9ZPPEe5RRyXGqS0ALJGGw25cwjXtAMyC2A",
    imageSize: 375,
    message:
        "Apasionado de la programación, me encanta aprender cosas nuevas. De forma autodidacta he aprendido el desarrollo de videojuegos y múltiples lenguajes como C#, C++ entre otros",
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
    heading: "Ponte en contacto conmigo!",
    message:
        "Actualmente estoy trabajando pero no descarto ofertas que puedan suponer un reto o un cambio a mejor. No dudes en enviarme un email si crees que puedo engajar en tu plantilla! Saludos.",
    email: "ivancurbelotrabajo@gmail.com",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [
        {
            role: 'Programador fullstack en Zec Telecom',
            date: '2021 – Actualidad',
        },
        {
            role: 'Programador fullstack en Artek',
            date: '2019 - 2020',
        },
    ]
}

export {navBar, mainBody, about, skills, getInTouch, experiences};
