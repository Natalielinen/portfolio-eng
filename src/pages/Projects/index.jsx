import React from 'react';
import styles from './styles.module.scss';
import cookBookImg from '../../assets/cook-book.png';
import CSSSGImg from '../../assets/css-sg.jpg';
import ingredientsCalcImg from '../../assets/ingredients-calc.png';
import zenStudyImg from '../../assets/zen-study-js.jpg';
import RGBtoHEXImg from '../../assets/rgb-to-hex.png';
import snailRacesImg from '../../assets/snail-races.png';
import ticTacToeImg from '../../assets/tic-tac-toe.png';
import calcsImg from '../../assets/calcs.png';
import geometryImg from '../../assets/geometry.png';
import aplusImg from '../../assets/a-plus.png';
import surveyFormImg from '../../assets/survey-form.png';
import tributePageImg from '../../assets/tribute-page.png';
import htmlDocImg from '../../assets/html-doc.png';
import landingImg from '../../assets/landing.png';
import calculatorImg from '../../assets/calculator.png';
import Project from '../../components/Project';

const projects = [
    {
        imageSrc: cookBookImg,
        imageAlt: 'Cook-book',
        previewLink: 'https://github.com/Natalielinen/cook-book',
        githubLink: 'https://github.com/Natalielinen/cook-book'
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
        imageSrc:  calculatorImg,
        imageAlt: 'Calculator',
        previewLink: 'https://natalielinen.github.io/js-calculator/',
        githubLink: 'https://github.com/Natalielinen/js-calculator'
    }
];

const Projects = () => {
    return (
        <main>
            <section className={styles.projects}>
                <div className={styles.bioImage}>
                    <h1 className='textSecondary'>My Projects</h1>
                </div>
                <div className={styles.items}>
                    {
                        projects.map(project => <Project
                            githubLink={project.githubLink}
                            imageAlt={project.imageAlt}
                            imageSrc={project.imageSrc}
                            previewLink={project.previewLink}
                        />)
                    }
                </div>
            </section>
        </main>
    );
};

export default Projects;