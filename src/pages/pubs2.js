import React, { useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/component/AnimatedText';
import Layout from '@/component/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useMotionValue } from 'framer-motion';
import article1 from '../../public/images/articles/RQs.png';
import article2 from '../../public/images/articles/camera_to_eyes_1.png';
import article3 from '../../public/images/articles/ifyoulike.jpg';

const FramerImage = motion(Image);

const MovingImage = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{x:x, y:y}}
                initial={{opacity:0}}
                whileInView={{opacity:1, transistiion:{duration:0.2}}}
                ref={imgRef}
                src={img} 
                alt={title} 
                className='z-10 w-96 h-auto hidden absolute rounded-lg' />
        </Link>
    )
};

const FeaturedArticle = ({img, title, summary, link}) => {
    const maxSummaryLength = 500;
    const truncatedSummary = summary.length > maxSummaryLength 
        ? summary.slice(0, maxSummaryLength) + "..." 
        : summary;
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'
            >
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-rb-2xl'/>
            <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-3xl font-bold my-2 mt-4 hover:underline'>
                    {title}
                </h2>
            </Link>
            <p className='text-medium mb-2'>
                {truncatedSummary}
            </p>
        </li>
    )
};

const Article = ({img, title, date, link}) => {
    return(
        <motion.li 
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
            viewport={{once:true}}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4
            border-b-4'>
                <MovingImage img={img} title={title} link={link} />
            <span className='text-primary font-semibold text-xl pl-4'>
                {date}
            </span>
        </motion.li>
    )
};


const pubs2 = () => {
  return (
    <>
        <Head>
            <title>Jelson | Publications</title>
            <meta name="publications" content="My Publications" />
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="Publications" className='text-center text-6xl font-bold mb-16'/>
                <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle
                        title={"How To Build A Custom Pagination Component In Reactjs From Scratch"}
                        summary={"As large language models (LLMs) advance and become widespread, students increasingly turn to systems like ChatGPT for assistance with writing tasks. Educators are concerned with students' usage of ChatGPT beyond cheating; using ChatGPT may reduce their critical engagement with writing, hindering students' learning processes. The negative or positive impact of using LLM-powered tools for writing will depend on how students use them; however, how students use ChatGPT remains largely unknown, resulting in a limited understanding of its impact on learning. To better understand how students use these tools, we conducted an online study (n=70) where students were given an essay-writing task using a custom platform we developed to capture the queries they made to ChatGPT. To characterize their ChatGPT usage, we categorized each of the queries students made to ChatGPT. We then analyzed the relationship between ChatGPT usage and a variety of other metrics, including students' self-perception, attitudes towards AI, and the resulting essay itself. We found that factors such as gender, race, and perceived self-efficacy can help predict different AI usage patterns. Additionally, we found that different usage patterns were associated with varying levels of enjoyment and perceived ownership over the essay. The results of this study contribute to discussions about how writing education should incorporate generative AI-powered tools in the classroom"}
                        link={"https://arxiv.org/abs/2501.10551"}
                        img={article1}  
                    />
                    <FeaturedArticle
                        title={"Investigating the Effects of Simulated Eye Contact in Video-call Job Interviews"}
                        summary={"Some people suggest that deliberately watching the camera during video calls can simulate eye contact and help build trust. In this study, we investigated the effects of simulated eye contact in video calls and job interviews through an experimental study and a survey. Study 1 involved participants in a mock interview as an interviewer, where a confederate interviewee simulated eye contact half the time. The gaze patterns of the participants were tracked to understand the effects. In Study 2, we conducted an online survey to confirm the findings of Study 1 on a larger scale by asking those with experience interviewing to evaluate interviewees based on interview videos, half of which simulated eye contact. The results of both studies indicate that simulated eye contact had little impact on their evaluation compared to common belief. We discuss how the results motivate future work and how computational approaches to correcting eye gaze can be deceptive."}
                        link={"TBD"}
                        img={article2}  
                    />
                </ul>

                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article
                        title={"Understanding the Effects of Integrating Music Programming and Web Development in a Summer Camp for High School Students"}
                        date={"18 February 2025"}
                        link={"https://dl.acm.org/doi/10.1145/3641555.3705275"}
                        img={""}
                    />

                    <Article
                        title={"Investigating Characteristics of Media Recommendation Solicitation in r/ifyoulikeblank"}
                        date={"08 November 2024"}
                        link={"https://dl.acm.org/doi/10.1145/3687041"}
                        img={article3}
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default pubs2