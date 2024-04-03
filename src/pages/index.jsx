import Layout from '../component/Layout'
import AnimatedText from '../component/AnimatedText'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import { LinkArrow } from '../component/Icons'
import HireMe from '../component/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jelson Portfolio</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="Jelson" className='w-auto h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='text-left' />
              <p className='my-4 font-medium'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={"_blank"} 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-2xl 
                font-semibold hover:bg-light hover:text-dark border-solid border-transparent
                hover:border-dark border-2'
                >
                  Resume
                  <LinkArrow className={'w-6 ml-1'}/>
                </Link>

                <Link href="mailto:jelson9854@vt.edu" target={"_blank"}
                className='ml-4 text-2xl font-semibold capitalize text-dark underline'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='Jelson' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}