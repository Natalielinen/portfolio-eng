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
        period: 'февраль 2022 - настоящее время',
        company: 'Zen Code',
        position: 'Фронтенд разработчик',
        functions: `Разработка системы по комплексному управлению производством`,
        stack: 'React, MobX, LESS, DevExtreme, Ant Design, JSDoc, PropTypes'
    },
    {
        period: 'ноябрь 2021 - февраль 2022',
        company: 'Zen Code',
        position: 'Фронтенд-разработчик стажер',
        functions: `Разработка учебных проектов в команде стажеров под руководством наставника.`,
        stack: 'React, React Hooks, React Context, LESS, JavaScript (ES6+)'
    },
    {
        period: 'ноябрь 2020 - октябрь 2021',
        company: 'Проект Кулинарный Журнал',
        position: 'Фуллстэк разработчик',
        functions: `разработка бекэнд части приложения с нуля, участие в разработке фронтенда приложения`,
        stack: 'React, React Hooks, Redux Toolkit, SASS, TypeScript, JavaScript (ES6+), Express, MongoDB, Mongoose, Formik, YUP'
    },
    {
        period: 'август 2020 - октябрь 2020',
        company: 'KodeFirst',
        position: 'Фронтенд-разработчик стажер',
        functions: `Помощь старшим разработчикам в верстке различных элементов интерфейса.`,
        stack: 'Pug, SASS, Webpack, JavaScript (ES6+)'
    }
];

export const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
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
    'react-hook-form',
    'YUP',
    'Zod',
    'Webpack',
    'Vite',
    'i18n',
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
