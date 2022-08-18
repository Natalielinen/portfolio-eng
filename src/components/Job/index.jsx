import React from 'react';
import styles from './style.module.scss';

const months = [
    {
        id: 1,
        name: 'January'
    },
    {
        id: 2,
        name: 'February'
    },
    {
        id: 3,
        name: 'March'
    },
    {
        id: 4,
        name: 'April'
    },
    {
        id: 5,
        name: 'May'
    },
    {
        id: 6,
        name: 'June'
    },
    {
        id: 7,
        name: 'July'
    },
    {
        id: 8,
        name: 'August'
    },
    {
        id: 9,
        name: 'September'
    },
    {
        id: 10,
        name: 'October'
    },
    {
        id: 11,
        name: 'November'
    },
    {
        id: 12,
        name: 'December'
    }
]

const Job = ({period, company, position, functions}) => {
    let periodArray = period.split('-')

    let yearFrom = periodArray[0].split(' ')[1]
    let monthFrom = periodArray[0].split(' ')[0]
    let monthFromIndex = months.filter(month => month.name.toLowerCase() === monthFrom.toLowerCase())

    let yearTo = periodArray[1].replace(/\s/, '').split(' ')[1]
    let monthTo = periodArray[1].replace(/\s/, '').split(' ')[0]

    let monthToIndex = months.filter(month => month.name.toLowerCase() === monthTo.toLowerCase())


    let dateFrom = new Date(yearFrom, monthFromIndex[0].id)

    let presentDate = new Date();

    let test = periodArray[1].replace(/\s/, '') === 'present' ? 1 : 2

    let dateTo = test === 1 ? presentDate : new Date(yearTo, monthToIndex[0].id)

   console.log('dateFrom',dateFrom);
    console.log('dateTo', dateTo);
    return (
        <div className={styles.job}>
            <h2 className='textSecondary>'>{period} ()</h2>
            <h3>{company}</h3>
            <h6>{position}</h6>
            <p>{functions}</p>
        </div>
    )
}

export default Job;
