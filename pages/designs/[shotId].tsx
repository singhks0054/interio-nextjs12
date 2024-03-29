import React, { useState } from 'react';
import SideLayout from '../../components/SideLayout';
import Image from 'next/image';
import { BsShareFill, BsChatDots } from 'react-icons/bs';
import { FiFolderMinus } from 'react-icons/fi';
import Link from 'next/link';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';
import { shotData } from '../../types/shotType';
// @ts-ignore
import io from 'socket.io-client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { vendor as vd, isLogin as loginStatus } from '../../context/theme';

const socket = io(`${process.env.API_URL}`, { autoConnect: false });

const ShotId = ({
  shot: { title, category, description, tags, images, owner, _id },
  moreShot,
}: {
  shot: shotData;
  moreShot: shotData[];
}) => {
  const router = useRouter();
  const vendor = useSelector(vd);
  const [message, setMessage] = useState<String>('');
  const isLogin = useSelector<Boolean>(loginStatus);

  const makeChat = async () => {
    if (localStorage.getItem('v_id') == owner._id) {
      return alert(`Can't chat to self! `);
    }
    socket.connect();
    setMessage('Connecting...');
    const token = localStorage.getItem('token');
    socket.emit('new-chat', {
      with: owner._id,
      token,
    });
    socket.on('chat-begin', ({ chatId }: { chatId: String }) => {
      if (chatId) {
        router.push(`/profile/chat/${chatId}`);
      }
    });
  };

  const likeHandler = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/shot/like/?shot_id=${router.query.shotId}&v_id=${vendor.v_id}`,
        {},
        {
          headers: {
            'Authorization ': `Bearer ${vendor.token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const saveHandler = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/shot/save/?shot_id=${router.query.shotId}&v_id=${vendor.v_id}`,
        {},
        {
          headers: {
            'Authorization ': `Bearer ${vendor.token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SideLayout>
      <>
        {isLogin && (
          <>
            <header className='flex justify-between '>
              <div className='flex gap-x-4'>
                <Image
                  src={'/dp.png'}
                  height={40}
                  width={40}
                  alt='man dp'
                  className='rounded-full bg-primary '
                />
                <div>
                  <h1>{vendor.vendor}</h1>
                  <p className='text-xs text-gray'>
                    21 shots uploaded till now
                  </p>
                </div>
              </div>
              <Link
                href={'/designs/upload'}
                className='rounded bg-primary px-4 py-2'
              >
                Upload Shot
              </Link>
            </header>
            <p className='my-8 w-full border-[0.5px] border-gray' />
          </>
        )}
        <div className='mb-8 flex justify-between'>
          <div className='flex gap-x-4'>
            <Image
              src={'/girl.png'}
              height={40}
              width={40}
              alt='man dp'
              className='rounded-lg bg-primary '
            />
            <div>
              <h1>{title}</h1>
              <p className='text-xs text-gray'>{owner?.name}</p>
            </div>
          </div>
          <div className='flex gap-x-4 '>
            <button
              className='cborder rounded bg-trans px-4 py-2'
              onClick={saveHandler}
            >
              Save
            </button>
            <button
              className='rounded border border-pink-500 bg-trans px-4 py-2'
              onClick={likeHandler}
            >
              <Image
                src={'/pheart.png'}
                alt='heart-icon'
                height={20}
                width={20}
                className='inline'
              />{' '}
              Like
            </button>
          </div>
        </div>
        {/* @ts-ignore */}
        <Image src={images[0].url} alt='bed' height={500} width={1400} />
        <div className='my-8 flex items-center justify-center gap-4'>
          <button className='cborder rounded bg-trans px-4 py-2'>
            <BsChatDots />
          </button>
          <button className='cborder rounded bg-trans px-4 py-2'>
            <FiFolderMinus />
          </button>
          <button className='cborder rounded bg-trans px-4 py-2'>
            <BsShareFill />
          </button>
        </div>
        <p className='my-8 w-full border-[0.5px] border-gray' />

        <p>{description}</p>

        <h2>I am available for new projects</h2>
        <p className='my-2'>
          📪 Email:
          <span className='text-primary'> {owner.email}</span>
        </p>
        <p className='mb-2'>
          🎯 Linkedin: <span className='text-primary'>Raj_Singh 😀</span>
        </p>
        <p className='mb-2'>
          👋 Instagram: <span className='text-primary'> @uxonfire</span>
        </p>

        {owner._id === vendor._id && (
          <div className='my-8 flex items-center justify-center gap-4'>
            <button className='cborder rounded bg-trans px-4 py-2'>Edit</button>
            <button className='cborder rounded bg-trans px-4 py-2'>
              Edit Details
            </button>
            <button className='cborder rounded bg-trans px-4 py-2'>
              Delete
            </button>
          </div>
        )}
        <div className='flex flex-col items-center justify-items-center gap-y-2 '>
          <div className='grid  grid-cols-12 '>
            <p className='col-span-5 my-8 w-full border-[0.5px] border-gray' />
            <Image
              src={'/girl.png'}
              height={40}
              width={40}
              alt='man dp'
              className='col-span-2 mx-4 rounded-full bg-primary'
            />
            <p className='col-span-5 my-8 w-full border-[0.5px] border-gray' />
          </div>
          <h1>{owner.name}</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <button onClick={makeChat} className='rounded bg-primary px-4 py-2'>
            {message ? message : "Let's chat"}
          </button>
        </div>

        <div className='mt-4 flex flex-col gap-y-8'>
          <div className='flex justify-between'>
            <p>More from {owner.name}</p>
            <p className='cursor-pointer text-primary hover:underline'>
              View Profile
            </p>
          </div>
          <div className='flex gap-4 overflow-x-auto '>
            {moreShot.map((shot, i) => (
              <div key={i} className='mb-4'>
                <Link href={`/designs/${shot._id}`}>
                  <Image
                    src={`${shot.images[0].url}`}
                    alt='l1img'
                    height={250}
                    quality={100}
                    width={270}
                    className='cursor-pointer transition-all hover:scale-105 '
                  />
                </Link>
                <div className='flex justify-between px-4 py-2 text-gray'>
                  <span>
                    <BsChatDots className='inline' /> 1.1k
                  </span>
                  <p className='flex gap-4'>
                    <span>
                      <AiOutlineHeart className='inline' /> 1.1k
                    </span>
                    <span>
                      <AiOutlineEye className='inline' /> 1.1k
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </SideLayout>
  );
};

export default ShotId;

export async function getServerSideProps({ params }: any) {
  let result = {
    shot: {
      _id: '642ed1d9a69faebb7421d582',
      title: 'Hotel Room',
      category: 'room',
      description:
        'Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.',
      tags: ['Minimal', 'Modern', 'Luxurious'],
      images: [
        {
          title: 'Hotel Room',
          url: 'https://res.cloudinary.com/ds8j4z2nf/image/upload/v1678014721/Interio/l5_z8ydxy.png',
          _id: '642ed1d9a69faebb7421d583',
        },
      ],
      owner: {
        _id: '642ed18ca69faebb7421d57b',
        name: 'Krishna Singh',
        email: 'singhks0054@gmail.com',
        follower: [],
        following: [],
      },
    },
    moreShot: [
      {
        _id: '642ed1d9a69faebb7421d582',
        title: 'Hotel Room',
        category: 'room',
        description:
          'Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects.',
        tags: ['Minimal', 'Modern', 'Luxurious'],
        images: [
          {
            title: 'Hotel Room',
            url: 'https://res.cloudinary.com/ds8j4z2nf/image/upload/v1678014721/Interio/l5_z8ydxy.png',
            _id: '642ed1d9a69faebb7421d583',
          },
        ],
        owner: {
          _id: '642ed18ca69faebb7421d57b',
          name: 'Krishna Singh',
          email: 'singhks0054@gmail.com',
          follower: [],
          following: [],
        },
      },
    ],
  };

  try {
    const shotData = await axios.get(
      `${process.env.API_URL}/shot/${params.shotId}`
    );
    if (shotData.data?.data) {
      result.shot._id = shotData.data.data._id;
      result.shot.title = shotData.data.data.title;
      result.shot.category = shotData.data.data.category;
      result.shot.description = shotData.data.data.description;
      result.shot.tags = shotData.data.data.tags;
      result.shot.images = shotData.data.data.images;
      result.shot.owner = shotData.data.data.owner;
    }
    const moreShotData = await axios.get(`${process.env.API_URL}/shot?limit=4`);
    if (moreShotData.data?.data) {
      result.moreShot = moreShotData.data.data;
    }
  } catch (error) {}

  return { props: result };
}
