import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-semibold text-2xl'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center justify-end'>
                {/* Built <span className='text-primary text-2xl px-1'>&#9825;</span>  */}
                Built by&nbsp;<Link href='https://github.com' className='underline underline-offset-2'>Jelson</Link>
            </div>

            <Link href='https://scholar.google.com/citations?user=OW0OgugAAAAJ&hl=en' target={'_blank'} className='underline underline-offset-2'>Google Scholar</Link>
        </Layout>
    </footer>
  )
}

export default footer