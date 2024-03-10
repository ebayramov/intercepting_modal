"use client"

import Link from 'next/link'
import Image from "next/image";


export default function Home() {

  const photo = ['fitnessfirst.jpg', 'grape.jpg', 'headerbg.jpg']
  const path = 'assets/img/'

  return (
    <>
      <h2>Photo Gallery</h2>
      <div>
        {photo.map((id, i) =>
          <Link key={i} href={`photo/${id}`} ><img src={path + id} alt="img" className='thumb' /> </Link>
        )}
      </div>
    </>
  );
}
