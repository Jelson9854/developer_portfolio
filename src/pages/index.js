import Layout from '../component/Layout'
import AnimatedText from '../component/AnimatedText'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile/profile_pic.jpeg'
// import { LinkArrow } from '../component/Icons'
// import HireMe from '../component/HireMe'
// import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

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
              <AnimatedText text="HCI Researcher at Virginia Tech" className='text-left' />
              <p className='my-4 font-medium'>
                I am a 4th year Ph.D. student at Virginia Tech. I am working on understanding how writers use AI systems like ChatGPT to write articles. 
                My current focus is on collegiate education, with my first project studying how students use AI to write essays. Future projects will be
                looking at things from an instructor perspective. 
              </p>
              <div className='flex items-center self-start mt-2'>
                {/* <Link href="https://docs.google.com/document/d/1e0ymU-f8MEOhplkGuB-awoPO4MKtiIjE6tzZDObFTA4/edit?usp=sharing" target={"_blank"} 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-2xl 
                font-semibold hover:bg-light hover:text-dark border-solid border-transparent
                hover:border-dark border-2'
                >
                  Resume
                </Link> */}
                <Link href="https://docs.google.com/document/d/1e0ymU-f8MEOhplkGuB-awoPO4MKtiIjE6tzZDObFTA4/edit?usp=sharing" target={"_blank"} 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-2xl 
                font-semibold hover:bg-light hover:text-dark border-solid border-transparent
                hover:border-dark border-2 ml-2'
                >
                  CV
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
      </main>
    </>
  )
}
