import React from 'react'

const Details = ({position, company, companyLink, time, address, work}) => {
    return(
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-3xl'>{position}&nbsp;<a href={companyLink}>@{company}</a></h3>
                <span className='capitalize font-semibold text-dark/75 '>
                    {time} | {address}
                </span>
                <p className='font-semi w-full text-[28px]'>
                    {work}
                </p>
            </div>
        </li>
    )
}

const Experience = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-9xl mb-32 w-full text-center'>
        Experience
        </h2>

        <div className='w-3/4 mx-auto relative'>
            <ul>
                <Details position={'Software Engineer'} company={'Google'} companyLink={'www.google.com'}
                time={'2022-Present'} address={'Mountain View, CA'}
                work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search 
                results and developing new tools for data analysis and visualization."/>

                <Details position={'Intern'} company={'Facebook'}
                time={'Summer 2021'} address={'Menlo Park, CA.'}
                work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                share short-form video content, including designing and implementing a new user interface and developing 
                the backend infrastructure to support the feature."/>

                <Details position={'Software Developer'} company={'Amazon'}
                time={'2020-2021'} address={'Seattle, WA.'}
                work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                as product recommendations and user reviews, and optimizing the app's performance and reliability."/>

                <Details position={'Teaching Assistant'} company={'MIT'}
                time={'Fall 2018'} address={'Massachusetts Ave, Cambridge, MA.'}
                work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                and graded exams and assignments."/>
            </ul>
        </div>
    </div>
  )
}

export default Experience