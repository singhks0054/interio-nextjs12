import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RectangleCard from '../components/RectangleCard';
import group1 from '../public/Group1.png';
import group2 from '../public/Group2.png';
import group3 from '../public/Group3.png';
import group4 from '../public/Group4.png';
import group5 from '../public/Group5.png';
import group6 from '../public/Group6.png';
import group7 from '../public/Group7.png';
import group8 from '../public/Group8.png';
import group9 from '../public/Group9.png';
import group10 from '../public/Group10.png';
import { BsFillPlayFill } from 'react-icons/bs';

const Home: NextPage = () => {
  const router = useRouter();
  const img = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
  ];
  const [windowSize, setWindowSize] = useState<number>(750);
  const [card, setCard] = useState<Array<number>>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  useEffect(() => {
    function handleResize() {
      setWindowSize(Number(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    if (windowSize >= 768) setCard([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);

  return (
    <>
      <Navbar />
      <section className='bg-dark'>
        <Hero />
        {/* ICON LIST */}
        <div className='padding grid grid-cols-2 gap-4 py-16 text-center md:grid-cols-4 md:gap-6'>
          <div className='flex flex-col items-center gap-y-2'>
            <span className='rounded-full bg-[#40FFBA61] p-4 '>
              <Image src='/upload.png' alt='Upload' height={20} width={20} />
            </span>
            <h2 className='font-medium text-white'>Upload Designs</h2>
            <p className='text-[#FFFFFF66] lg:px-6'>
              Upload your work and become noticable
            </p>
          </div>
          <div className='flex flex-col items-center gap-y-2'>
            <span className='rounded-full bg-[rgb(114,112,255,0.38)] p-4 '>
              <Image src='/gallery.png' alt='gallery' height={20} width={20} />
            </span>
            <h2 className='font-medium text-white'>Get Inspired</h2>
            <p className='text-[#FFFFFF66] lg:px-6'>
              Get inspired by thousands of designs
            </p>
          </div>
          <div className='flex flex-col items-center gap-y-2'>
            <span className='rounded-full bg-[rgb(114,112,255,0.38)] p-4 '>
              <Image src='/chat.png' alt='chat' height={20} width={20} />
            </span>
            <h2 className='font-medium text-white'>Message Designer</h2>
            <p className='text-[#FFFFFF66] lg:px-6'>
              Message Other Interior Designers on the platform
            </p>
          </div>
          <div className='flex flex-col items-center gap-y-2'>
            <span className='rounded-full bg-[#40FFBA61] p-4 '>
              <Image src='/heart.png' alt='heart' height={20} width={20} />
            </span>
            <h2 className='font-medium text-white'>Get Feedback</h2>
            <p className='text-[#FFFFFF66] lg:px-6'>
              Get comments, likes & shares from other people
            </p>
          </div>
        </div>

        {/* SHOTS SECTION */}
        <h1 className='pt-16 text-center text-4xl font-bold text-gray'>
          SHOTS
        </h1>
        <p className='mt-4 text-center text-gray'>
          Upload Interior Design Shots Or Get Inspired <br /> By Other
          Designer&apos;s Works
        </p>

        <div className='padding py-16 text-2xl sm:text-4xl'>
          <Link
            href='/designs/modern'
            className='group  flex items-center justify-between border-y border-gray p-4 hover:cursor-pointer hover:bg-[#292929]  '
          >
            <h3 className='text-gray group-hover:text-white sm:my-2 '>
              Modern Designs
            </h3>
            <Image
              src={'/arrow.png'}
              alt='arrow icon'
              height={50}
              width={50}
              className='hidden bg-primary  p-2 md:group-hover:block '
            />
          </Link>
          <Link
            href='/designs/minimal'
            className='group flex items-center justify-between border-y border-gray p-4 hover:cursor-pointer hover:bg-[#292929] '
          >
            <h3 className=' text-gray group-hover:text-white sm:my-2 '>
              Minimal Designs
            </h3>
            <Image
              src={'/arrow.png'}
              alt='arrow icon'
              height={50}
              width={50}
              className='hidden bg-primary p-2   md:group-hover:block '
            />
          </Link>
          <Link
            href='/designs/space-saving'
            className='group flex items-center justify-between border-y border-gray p-4 hover:cursor-pointer hover:bg-[#292929]   '
          >
            <h3 className='text-gray group-hover:text-white sm:my-2 '>
              Space Saving
            </h3>
            <Image
              src={'/arrow.png'}
              alt='arrow icon'
              height={50}
              width={50}
              className='hidden bg-primary p-2   md:group-hover:block '
            />
          </Link>
          <Link
            href='/designs/luxurious'
            className='group flex items-center justify-between border-y  border-gray p-4 hover:cursor-pointer hover:bg-[#292929] '
          >
            <h3 className='text-gray group-hover:text-white sm:my-2 '>
              Luxurious Designs
            </h3>
            <Image
              src={'/arrow.png'}
              alt='arrow icon'
              height={50}
              width={50}
              className='hidden bg-primary p-2  md:group-hover:block '
            />
          </Link>
        </div>

        {/* WEBSITE TEMPLATE IMAGES */}

        {windowSize > 768 ? (
          <Image
            src={'/imac.png'}
            alt='music bg'
            height={700}
            width={500}
            className='m-auto my-8'
          />
        ) : (
          <Image
            src={'/phone.png'}
            alt='music bg'
            height={350}
            width={350}
            className='m-auto my-8 '
          />
        )}

        {/* SHOT LISTS */}
        <h1 className='padding pt-16 text-center text-4xl font-bold uppercase text-gray'>
          OVER <span className='text-primary'>205+</span> Shots of <br />{' '}
          INTERIOR dESIGN
        </h1>

        <div className='padding grid grid-cols-2 gap-4 md:grid-cols-5'>
          {card.map((_, i) => (
            <div key={i}>
              <span className=' absolute m-2 rounded-2xl bg-pink-500 px-2 py-0 text-white text-sm'>
                24k
              </span>
              <Image
                src={img[i]}
                height={250}
                width={250}
                alt={'man'}
                className='rounded hover:cursor-pointer '
              />
              {/* <span className='relative m-2 rounded-2xl bg-primary px-2 py-0 text-sm'>
                <BsFillPlayFill className='text-xl text-white' />
              </span> */}
            </div>
          ))}
        </div>
        <p className='m-auto mt-6 w-3/4 border-b border-gray pb-16 text-center'>
          <Link
            href={'/designs'}
            className='rounded-md bg-primary px-8 py-2 font-semibold text-black'
          >
            SEE MORE
          </Link>
        </p>

        <div className='my-16 grid grid-cols-5 justify-items-start'>
          <div className='hidden lg:col-span-2 lg:block '>
            <Image src={'/saly.png'} height={500} width={500} alt={'saly'} />
          </div>
          <div className='padding col-span-5 mr-4 sm:mr-8 lg:col-span-3 xl:mr-32'>
            <h1 className='pt-8 text-4xl font-bold uppercase   text-gray'>
              WHAT OUR
              <span className='text-primary'> USERS</span>
              <br /> SAY ABOUT US
            </h1>
            <p className='my-6 text-gray'>
              Our users are our strength. We do every thing possible to make
              their experience unique and effortless.
            </p>
            <div className='card my-4 p-4 text-gray '>
              <p>
                “Lorem ipsum dolor sit amet consectetur. Lectus at erat sed diam
                felis vitae. Lorem ipsum dolor sit amet consectetur. Lectus at
                erat sed diam felis vitae.Lorem ipsum dolor sit amet
                consectetur. Lectus at erat sed diam felis vitae.Lorem ipsum
                dolor sit amet consectetur. Lectus at erat sed diam felis vitae.
                sed diam felis vitae.Lorem ipsum dolor sit amet consectetur.
                Lectus at”
              </p>

              <h6 className='mt-4 font-semibold text-primary'>
                STIEVE JOHN MATT
              </h6>
              <p>Interior Designer</p>
            </div>
          </div>
        </div>

        <RectangleCard />
        {/* FOOTER */}
        <div className='z-0 flex h-auto flex-col items-center justify-center gap-y-2 bg-primary py-24 text-center leading-10 text-[rgba(255,255,255,0.75)] '>
          <Link href='/'>
            <Image
              src={'/interio.png'}
              alt='interio logo'
              height={40}
              width={40}
            />
          </Link>
          <p className='px-2 md:px-6 lg:px-10'>
            Modern Designs | Minimal Designs | Luxurious Designs | Space Saving
            Designs <br /> Dark themed Designs | Hotel Room Designs | Terms &
            Conditions Privacy Policy | About us
          </p>
          <p>Handcrafted by © XYZ Company 2023</p>
          <p>Made with 💖 </p>
        </div>
      </section>
    </>
  );
};

export default Home;
