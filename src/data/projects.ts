import React from 'react';

export type ProjectProps = {
    title : string
    category : string
    status : string,
    grade? : string 
    start_date : string
    end_date : string
    technologies: technologies[]
}

export type technologies = 'Python' | 'Java' | 'Go' | 'React' | 'Flask' | 'Django' | 'TypeScript' | 'JavaScript' 
        | 'GCP' | 'Python Dash' | 'C' | 'JavaScript' | 'TailWindCSS' | 'BootStrapCSS' | 'Docker'

export const projects : Record<string, ProjectProps> = {
    'portfolio-website':{
        title: 'placeholder name',
        category: 'Personal project',
        status: 'In progress',
        start_date: 'November 2023',
        end_date: 'n/a',
        technologies: ['TypeScript', 'React']
    },
    'td-internship':{
        title: 'TD Securities Software Engineering Internship',
        category: 'Work Experience/Internship',
        status: 'Completed',
        start_date: 'June 2023',
        end_date: 'September 2023',
        technologies: ['Flask', 'Python Dash']
    },
    'scotland-yard' : {
        title : 'Scotland Yard',
        category : 'University Coursework project',
        status : 'Completed',
        grade: 'Above 70% (First Class)',
        start_date: 'March 2022',
        end_date: 'May 2022',
        technologies: ['Java']
    }
}