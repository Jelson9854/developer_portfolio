import AnimatedText from '@/component/AnimatedText'
import Layout from '@/component/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/headshot.png'
import Link from 'next/link'

const about = () => {
  return (
    <>
    <Head>
      <title>Jelson | About Page</title>
      <meta name="description" content="About page for Andrew Jelson" />
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
      <AnimatedText text="About Me" className='text-center text-6xl font-bold mb-16'/>
      <div className='grid w-full grid-cols-8 gap-16'>
        <div className='col-span-3 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-3xl font-bold uppercase text-dark/80'> Biography </h2>
          <p className='font-medium'>
            I am 4th year Ph.D. student in <Link href={'echolab.cs.vt.edu'} target='_blank' className='text-blue-700 underline'>Echolab</Link> and advised by Sang Won Lee.
            My current research project is looking into the effects of LLM systems (mainly ChatGPT) on collegiate writing. We are in the process of publishing our first paper 
            studying how students use AI to write essays. A follow up project is being planned where we will look at the essays from the instuctor&apos;s perspective. Using this we 
            hope to understand how AI can be used by students and how instructors feel about the AI usage. Additonally we hope to learn good practices for using AI in the classroom.
          </p>
          <p className='font-medium my-4'>
            In my free time I love to host board game nights and other get togethers with my friends. I also love to hike and experience the outdoors, especially the mountains around 
            Blacksburg. Nothing beats reading a book in a hammock on a warm summer day. I also like to play video games, with my favorites being the Monster Hunter and Fire Emblem series.
          </p>
        </div>
        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
          <Image src={profilePic} alt="Jelson" className='w-full h-auto rounded-2xl'/>
        </div>
      </div>
      <div>
        <AnimatedText text="Pets" className='text-center text-[4rem] font-bold mb-8 mt-16'/>
        <div className='grid grid-cols-3 gap-8'>
          <div className='col-span-1 relative h-max'>
            <h2 className='mb-4 text-3xl font-bold uppercase text-dark/80'> Biography </h2>
            <p>
              I have two cats, Kronos and Eden. Kronos is 2 years old and is a black and gold Abyssian mix.
              He is incredibly playful and can be found playing with his toys, sleeping in my chair, or attacking 
              my feet. Eden is a 1 year old kitten and is a siamese with tortoiseshell markings on her face. She is 
              very pretty cat and loves attention in any form. She has a silent meow and loves to scratches. 
            </p>
          </div>
          <div className='col-span-1 relative h-max'>
            <h2 className='font-bold text-[2rem] flex justify-center'>Kronos</h2>
            <div className='border-2 border-solid border-dark rounded-lg p-0 m-0'>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full rounded-lg shadow-lg"
            >
              <source src='/images/profile/kronos_web.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>
          <div className='col-span-1 relative h-max'>
            <h2 className='font-bold text-[2rem] flex justify-center'>Eden</h2>
            <div className='border-2 border-solid border-dark rounded-lg p-0 m-0'>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full rounded-lg shadow-lg"
            >
              <source src='/images/profile/eden_web.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </main>
    </> 
  )
}

export default about