import Head from 'next/head';
import { BsFillMoonStarsFill, BsTextCenter } from 'react-icons/bs';
import { AiOutlineGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/Julio.svg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from 'public/web1.png';
import web2 from 'public/web2.png';
import web3 from 'public/web3.png';
import web4 from 'public/web4.png';
import web5 from 'public/web5.png';
import web6 from 'public/web6.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>

      <Head>
        <title>Julio Pinheiro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=' min-h-fit pb-12'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>
              my portfolio
            </h1>
            <ul className='flex items-center'>
              <li className='dark:text-white'>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 border-none rounded-md ml-8'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Julio Pinheiro
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Engineer and Developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-teal-300 md:text-xl max-w-lg mx-auto'>
              Freelancer providing services for programming and design contente needs.
              Join me down below and lets get cracking!
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>

              <div className='hover:text-teal-600'>
              <a target='_blank' rel="noreferrer" href='https://github.com/JuPinheiru'>
              <AiOutlineGithub />
              </a>
              </div>

              <div className='hover:text-teal-600'>
              <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/julio-cesar-pinheiro-da-silva-0b6b70b7/'>
                <AiFillLinkedin />
                </a>
              </div>

          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} alt='Dev' fill objectFit='cover' />


          </div>

        </section>

        <section>

          <div>

            <h3 className='text-3xl py-1 dark:text-teal-600'>Services I offer</h3>

            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white' >
              Since the beginning of my journey as a freelance designer and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>

            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>

          </div>

          <div className='lg:flex gap-10'>
            <div className=' flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>

              <Image className='inline' src={design} alt='design' width={100} height={100} />

              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beatiful Designs
              </h3>

              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design tools I use</h4>

              <p className='text-gray-800 py-1'>
                Photoshop
              </p>
              <p className='text-gray-800 py-1'>
                Illustrator
              </p>
              <p className='text-gray-800 py-1'>
                Figma
              </p>
            </div>

            <div className=' flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>

              <Image className='inline' src={code} alt='code' width={100} height={100} />

              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beatiful Designs
              </h3>

              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design tools I use</h4>

              <p className='text-gray-800 py-1'>
                Photoshop
              </p>
              <p className='text-gray-800 py-1'>
                Illustrator
              </p>
              <p className='text-gray-800 py-1'>
                Figma
              </p>
            </div>

            <div className=' flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>

              <Image className='inline' src={consulting} alt='consulting' width={100} height={100} />

              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beatiful Designs
              </h3>

              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design tools I use</h4>

              <p className='text-gray-800 py-1'>
                Photoshop
              </p>
              <p className='text-gray-800 py-1'>
                Illustrator
              </p>
              <p className='text-gray-800 py-1'>
                Figma
              </p>
            </div>
          </div>

        </section>

        <section>

          <div>
            <h3 className='text-3xl py-1 dark:text-teal-500'>
              Portfolio
            </h3>

            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelance designer and
              developer, Ive done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500"> startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>

            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>

          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className=' basis-1/3 flex-1'>
              <Image src={web6} alt='img1' className='rounded-lg object-cove' width={'100%'} height={'100%'} />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image src={web6} alt='img2' className='rounded-lg object-cover' layout="responsive" width={'100%'} height={'100%'} />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image src={web6} alt='img3' className='rounded-lg object-cover' width={'100%'} height={'100%'} />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image src={web6} alt='img4' className='rounded-lg object-cover' layout="responsive" width={'100%'} height={'100%'} />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image src={web6} alt='img5' className='rounded-lg object-cover' layout="responsive" width={'100%'} height={'100%'} />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image src={web6} alt='img6' className='rounded-lg object-cover' layout="responsive" width={'100%'} height={'100%'} />
            </div>

          </div>

        </section>

      </main>

    </div>
  )
}