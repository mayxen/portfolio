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
            name: "Twitch Game",
            link: "",
            description: "twitchgamedesc",
            shortDescription: "twitchgamedescshort",
            tags: ["GameDev", "Unity"],
            img: [
                require("../assets/img/twitchGame/login.png"),
                require("../assets/img/twitchGame/main.png"),
                require("../assets/img/twitchGame/menuplayer.png"),
                require("../assets/img/twitchGame/manuplayeritem.png"),
                require("../assets/img/twitchGame/menu.png"),
                require("../assets/img/twitchGame/menuitem.png"),
            ],
            shortImg: [
                require("../assets/img/twitchGame/main.png"),
                require("../assets/img/twitchGame/menuplayer.png"),
            ],
        },
        {
            id: 1,
            name: "The elastivaca game",
            link: "https://mayxen.itch.io/the-elastivaca-game",
            description: "vacadesc",
            shortDescription: "vacadescshort",
            tags: ["GameDev", "Unity"],
            img: [
                require("../assets/img/Moogame/portada.png"),
                require("../assets/img/Moogame/panel.png"),
                require("../assets/img/Moogame/menu.png"),
                require("../assets/img/Moogame/game.png"),
                require("../assets/img/Moogame/game1.png"),
                require("../assets/img/Moogame/game2.png"),
            ],
            shortImg: [
                require("../assets/img/Moogame/portada.png"),
                require("../assets/img/Moogame/game.png"),
            ],
        },
    ]
}

const tags = {
    React: '#c28585',
    Web: '#99a3ea',
    Laravel: '#df1ee3',
    GameDev: '#4bb25a',
    Unity: '#c4ffe1',
    UnrealEngine: '#3572ad',
}

const resources = {
    en: {
        translation: {
            //PROJECTS
            //VACA
            "vacadesc": "Puzzle game where an elastic cow has to escape for her life, this game was developed by me and the assets were developed by a friend, all the information and the download is available in the link below, I warn that it has a lot of bugs but it was a fun experience.",
            "vacadescshort": "Game develop by me for a gamejam (...)",
            //TWITCHGAME
            "twitchgamedesc": "Fighting game made in unity to be played through my twitch channel.  Players will see from my twitch channel the person who is the boss, which is the person who is seen with life and armor. In the game players have stats to do damage, have life when they defeat the boss and become boss plus a list of weapons they can equip to improve their attack or defense capabilities when they are the boss.  In order to participate in the game participants have to post a command in the chat and will be given random stats and as they play they can improve them.\n" +
                "\n" +
                "Translated with www.DeepL.com/Translator (free version)",
            "twitchgamedescshort": "Game developed to play from my twitch channel, you register from the chat and you can already participate using commands",
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
            "changeLang": "Cambiar a español",
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
            //PROJECTS
            //VACA
            "vacadesc": "Juego de puzzle donde una vaca elastica tiene que escapar por su vida, este juego fue desarrollado" +
                " por mi y los assets los desarrolló un amigo, toda la información y la descarga está disponible en el link de abajo, advierto que " +
                "tiene bastantes bugs pero fue una experiencia divertida",
            "vacadescshort": "Juego desarrollado para una gamejam hecho por mi (...)",
            //TWITCHGAME
            "twitchgamedesc": "Juego de lucha realizado en unity para ser jugado através de mi canal de twitch." +
                " Los jugadores verán desde mi canal de twitch a la persona que es el boss, que es la persona que se ve con vida y armadura. En el juego los jugadores tienen" +
                " stats para hacer daño, tener vida cuando derrotan al boss y se convierten en boss además de una lista de armas que pueden equiparse para mejorar su ataque o " +
                " sus capacidades de defensa cuando son el boss. " +
                " Para poder participar los participantes tienen que poner un comando en el chat y se le darán unas estadisticas aleatorias y con forme juegen pueden mejorarlas",
            "twitchgamedescshort": "Juego desarrollado para jugar desde mi canal de twitch (...)",

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
            "TouchMessage": "Actualmente estoy trabajando pero no descarto ofertas que puedan suponer un reto o un cambio a mejor. No dudes en enviar un email si crees que puedo encajar en tu plantilla.",

            //MAIN BODY
            "changeLang": "Switch to English",
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

export {navBar, mainBody, about, skills, getInTouch, experiences, projects, resources, tags};
