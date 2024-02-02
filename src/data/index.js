import React from 'react';
import {BsEnvelopeFill, BsHouseFill, BsPhone, BsTelegram} from 'react-icons/bs';
import cookBookImg from '../assets/cook-book.png';
import CSSSGImg from '../assets/css-sg.jpg';
import ingredientsCalcImg from '../assets/ingredients-calc.png';
import zenStudyImg from '../assets/zen-study-js.jpg';
import RGBtoHEXImg from '../assets/rgb-to-hex.png';
import snailRacesImg from '../assets/snail-races.png';
import ticTacToeImg from '../assets/tic-tac-toe.png';
import calcsImg from '../assets/calcs.png';
import geometryImg from '../assets/geometry.png';
import aplusImg from '../assets/a-plus.png';
import surveyFormImg from '../assets/survey-form.png';
import tributePageImg from '../assets/tribute-page.png';
import htmlDocImg from '../assets/html-doc.png';
import landingImg from '../assets/landing.png';
import calculatorImg from '../assets/calculator.png';
import makeAWishImg from '../assets/make-a-wish.png';

export const jobs = [
    {
        period: 'february 2022 - present',
        company: 'Zen Code',
        position: 'frontend developer',
        functions: `Work on the front-end part of the project for managing enterprise processes in a team of 5 people. 
        Main tasks: developing an interface and implementing business logic, finding and fixing bugs, filling a library 
        of components, developing and editing modules for various forms, code refactoring.`,
        stack: 'React, MobX, LESS, DevExtreme, Ant Design, JSDoc, PropTypes'
    },
    {
        period: 'november 2021 - february 2022',
        company: 'Zen Code',
        position: 'frontend developer intern',
        functions: `Development of training projects in a team of trainees under the guidance of a mentor. 
        Main tasks: development from scratch of the application interface, development and implementation of individual reusable react components.`,
        stack: 'React, React Hooks, React Context, LESS, JavaScript (ES6+)'
    },
    {
        period: 'november 2020 - october 2021',
        company: 'Cook-Book Project (contract, private contractor)',
        position: 'full stack developer',
        functions: `Development of an application for storing and managing recipes in a team of three people. 
        Main tasks: development of the backend part of the application from scratch, participation in the development
         of the client part of the application, setting tasks for other team members and monitoring the execution.`,
        stack: 'React, React Hooks, Redux Toolkit, SASS, TypeScript, JavaScript (ES6+), Express, MongoDB, Mongoose, Formik, YUP'
    },
    {
        period: 'august 2020 - october 2020',
        company: 'KodeFirst',
        position: 'frontend developer intern',
        functions: `Participation in the development of ui-kit for the application in the team of interns. 
        Main tasks: development of separate parts and components for the application, study of technologies necessary for development.`,
        stack: 'Pug, SASS, Webpack, JavaScript (ES6+)'
    }
];

export const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'React Hooks',
    'React Context',
    'React Table',
    'React Router',
    'Redux',
    'Redux toolkit',
    'MobX',
    'LESS',
    'SASS',
    'Formik',
    'YUP',
    'DevExtreme',
    'Ant Design',
    'JSDoc',
    'Webpack',
    'PropTypes',
    'Express',
    'MongoDB',
    'Mongoose',
    'Pug'
]

export const contactsList = [
    {
        contactClass: 'email',
        icon: <BsEnvelopeFill/>,
        contactType: 'E-mail',
        contact: 'nataliech0409@gmail.com',
        link: 'mailto:nataliech0409@gmail.com'
    },
    {
        contactClass: 'phone',
        icon: <BsPhone/>,
        contactType: 'Phone',
        contact: '+7-953-720-82-44',
        link: 'tel:+7-953-720-82-44'
    },
    {
        contactClass: 'address',
        icon: <BsHouseFill/>,
        contactType: 'Address',
        contact: 'Russia, Michurinsk',
        link: 'https://goo.gl/maps/utS3n3tWwiTJrGbo8'
    },
    {
        contactClass: 'telegram',
        icon: <BsTelegram/>,
        contactType: 'Telegram',
        contact: '@Natalielinen',
        link: 'https://t.me/Natalielinen'
    }
];

export const projects = [
    {
        imageSrc: makeAWishImg,
        imageAlt: 'Make a wish',
        previewLink: 'https://make-a-wish-jkd7.vercel.app/',
        githubLink: 'https://github.com/Natalielinen/make-a-wish'
    },
    {
        imageSrc: CSSSGImg,
        imageAlt: 'CSS Styles Generator',
        previewLink: 'https://natalielinen.github.io/css-styles-generator/',
        githubLink: 'https://github.com/Natalielinen/css-styles-generator'
    },
    {
        imageSrc: ingredientsCalcImg,
        imageAlt: 'Ingredients Calculator',
        previewLink: 'https://natalielinen.github.io/ingredients-calculator/',
        githubLink: 'https://github.com/Natalielinen/ingredients-calculator'
    },
    {
        imageSrc: zenStudyImg,
        imageAlt: 'Zen Code Study Project JS',
        previewLink: 'https://study-project-js.vercel.app/',
        githubLink: 'https://gitlab.com/zencode-team/study/first/study-project-js'
    },
    {
        imageSrc: RGBtoHEXImg,
        imageAlt: 'RGB to HEX converter',
        previewLink: 'https://natalielinen.github.io/rgb-to-hex-converter/',
        githubLink: 'https://github.com/Natalielinen/rgb-to-hex-converter'
    },
    {
        imageSrc: snailRacesImg,
        imageAlt: 'Snail Races',
        previewLink: 'https://natalielinen.github.io/snail-races/',
        githubLink: 'https://github.com/Natalielinen/snail-races'
    },
    {
        imageSrc: ticTacToeImg,
        imageAlt: 'Tic Tac Toe',
        previewLink: 'https://natalielinen.github.io/tic-tac-toe/',
        githubLink: 'https://github.com/Natalielinen/tic-tac-toe'
    },
    {
        imageSrc: calcsImg,
        imageAlt: 'Math Calculators',
        previewLink: 'https://natalielinen.github.io/math-calculators/',
        githubLink: 'https://github.com/Natalielinen/math-calculators'
    },
    {
        imageSrc: geometryImg,
        imageAlt: 'Geometry Calculators',
        previewLink: 'https://natalielinen.github.io/calculators/',
        githubLink: 'https://github.com/Natalielinen/calculators'
    },
    {
        imageSrc: aplusImg,
        imageAlt: 'A-Plus school',
        previewLink: 'https://natalielinen.github.io/a-plus-project/',
        githubLink: 'https://github.com/Natalielinen/a-plus-project'
    },
    {
        imageSrc: surveyFormImg,
        imageAlt: 'Survey form',
        previewLink: 'https://natalielinen.github.io/survey-form/',
        githubLink: 'https://github.com/Natalielinen/survey-form'
    },
    {
        imageSrc: tributePageImg,
        imageAlt: 'Tribute Page',
        previewLink: 'https://natalielinen.github.io/tribute-page/',
        githubLink: 'https://github.com/Natalielinen/tribute-page'
    },
    {
        imageSrc: htmlDocImg,
        imageAlt: 'HTML-documentation',
        previewLink: 'https://natalielinen.github.io/html-documentation/',
        githubLink: 'https://github.com/Natalielinen/html-documentation'
    },
    {
        imageSrc: landingImg,
        imageAlt: 'Product landing page',
        previewLink: 'https://natalielinen.github.io/product-landing-page/',
        githubLink: 'https://github.com/Natalielinen/product-landing-page'
    },
    {
        imageSrc: calculatorImg,
        imageAlt: 'Calculator',
        previewLink: 'https://natalielinen.github.io/js-calculator/',
        githubLink: 'https://github.com/Natalielinen/js-calculator'
    }
];
