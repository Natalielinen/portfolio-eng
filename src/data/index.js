import React from 'react';
import {BsEnvelopeFill, BsHouseFill, BsPhone, BsTelegram} from 'react-icons/bs';
import CSSSGImg from '../assets/css-sg.jpg';
import ingredientsCalcImg from '../assets/ingredients-calc.png';
import RGBtoHEXImg from '../assets/rgb-to-hex.png';
import snailRacesImg from '../assets/snail-races.png';
import ticTacToeImg from '../assets/tic-tac-toe.png';
import rbImage from '../assets/rb-image.png';
import wtcImage from '../assets/wtc-image.png';

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
        imageSrc: wtcImage,
        imageAlt: 'Выбрать фильм',
        previewLink: 'https://wtc-2-gamma.vercel.app/',
        githubLink: 'https://github.com/Natalielinen/wtc-2'
    },
    {
        imageSrc: rbImage,
        imageAlt: 'Книга Рецептов',
        previewLink: 'https://recipe-book-teal-five.vercel.app/',
        githubLink: 'https://github.com/Natalielinen/recipe-book'
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
]
