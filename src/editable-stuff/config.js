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
    heading: "About Me",
    imageLink: "https://media-exp1.licdn.com/dms/image/C5603AQFBAuwIWgYlCQ/profile-displayphoto-shrink_800_800/0/1659623360314?e=1666224000&v=beta&t=Dh_o2G0bZ9ZPPEe5RRyXGqS0ALJGGw25cwjXtAMyC2A",
    imageSize: 375,
    message:
        "TODO",
    resume: require("../editable-stuff/resume.pdf"),
};

const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "mayxen", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
};

const leadership = {
    show: false,
    heading: "Leadership",
    message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [
        {
            img: "https://media-exp1.licdn.com/dms/image/C5603AQFBAuwIWgYlCQ/profile-displayphoto-shrink_800_800/0/1659623360314?e=1666224000&v=beta&t=Dh_o2G0bZ9ZPPEe5RRyXGqS0ALJGGw25cwjXtAMyC2A",
            label: "First slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            img: "https://media-exp1.licdn.com/dms/image/C5603AQFBAuwIWgYlCQ/profile-displayphoto-shrink_800_800/0/1659623360314?e=1666224000&v=beta&t=Dh_o2G0bZ9ZPPEe5RRyXGqS0ALJGGw25cwjXtAMyC2A",
            label: "Second slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
    ],
    imageSize: {
        width: "615",
        height: "450"
    }
};

const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        {name: "Python", value: 90},
        {name: "SQL", value: 75},
        {name: "Data Structures", value: 85},
        {name: "C/C++", value: 65},
        {name: "JavaScript", value: 90},
        {name: "React", value: 65},
        {name: "HTML/CSS", value: 55},
        {name: "C#", value: 80},
    ],
    softSkills: [
        {name: "Goal-Oriented", value: 80},
        {name: "Collaboration", value: 90},
        {name: "Positivity", value: 75},
        {name: "Adaptability", value: 85},
        {name: "Problem Solving", value: 75},
        {name: "Empathy", value: 90},
        {name: "Organization", value: 70},
        {name: "Creativity", value: 90},
    ],
};

const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
        "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "ivancurbelotrabajo@gmail.com",
};

const experiences = {
    show: false,
    heading: "Experiences",
    data: [
        {
            role: 'Software Engineer',// Here Add Company Name
            companylogo: require('../assets/img/dell.png'),
            date: 'June 2018 – Present',
        },
        {
            role: 'Front-End Developer',
            companylogo: require('../assets/img/boeing.png'),
            date: 'May 2017 – May 2018',
        },
    ]
}

export {navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences};
