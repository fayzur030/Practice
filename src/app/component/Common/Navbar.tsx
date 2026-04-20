// 'use client'
// import Link from 'next/link'
// import { ArrowRightToLine, Menu, X } from 'lucide-react'
// import { useState } from 'react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <nav className='bg-[#281C59] text-white shadow-xl'>
//       <div className='max-w-7xl mx-auto px-5'>
//         <div className='flex justify-between items-center h-16'>
//           {/* Logo */}
//           <h1 className='text-2xl font-bold'>MyApp</h1>

//           {/*Destop Menu */}
//           <div className='hidden md:flex gap-6'>
//             <Link href='/' className='hover:text-yellow-400'>
//               Home
//             </Link>

//             <Link href='/about' className='hover:text-yellow-400'>
//               About
//             </Link>

//             <Link href='/projects' className='hover:text-yellow-400'>
//               Projects
//             </Link>

//             <Link href='/contact' className='hover:text-yellow-400'>
//               Contact
//             </Link>
//           </div>

//           {/* Button */}
//           <button className='hidden md:flex bg-yellow-500 px-4 py-1 cursor-pointer rounded-lg flex items-center gap-2 text-[#25343F] font-semibold hover:bg-yellow-400'>
//             Login <ArrowRightToLine size={16} />
//           </button>
//           {/* Hamburger Button */}
//           <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={18} /> : <Menu size={18} />}
//           </button>
//         </div>
//       </div>
//       {/* Mobile menue */}
//       {isOpen && (
//         <div
//           className='fixed inset-0 bg-black/40 z-40'
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//       {/* right side */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[210px] bg-[#1E1445] z-50 transform transition-transform  duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <div className='flex justify-end p-4'>
//           <button onClick={() => setIsOpen(false)}>
//             <X size={18} />
//           </button>
//         </div>
//         <div className='flex flex-col  items-center gap-10 px-6'>
//           <Link href='/' className='hover:text-yellow-400'>
//             Home
//           </Link>

//           <Link href='/about' className='hover:text-yellow-400'>
//             About
//           </Link>

//           <Link href='/projects' className='hover:text-yellow-400'>
//             Projects
//           </Link>

//           <Link href='/contact' className='hover:text-yellow-400'>
//             Contact
//           </Link>
//           <button className=' bg-yellow-500 px-4 py-2 rounded-lg flex items-center gap-2 text-[#25343F] font-semibold'>
//             Login <ArrowRightToLine size={16} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRightToLine, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='bg-[#281C59] text-white shadow-xl'>
      <div className='max-w-7xl mx-auto px-5'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <h1 className='text-2xl font-bold'>MyApp</h1>

          {/* Menu */}
          <div className='hidden md:flex gap-6'>
            <Link href='/' className='hover:text-yellow-400'>
              Home
            </Link>

            <Link href='/about' className='hover:text-yellow-400'>
              About
            </Link>

            <Link href='/projects' className='hover:text-yellow-400'>
              Projects
            </Link>

            <Link href='/contact' className='hover:text-yellow-400'>
              Contact
            </Link>
          </div>
          {/* Button */}
          <button className='hidden md:flex bg-yellow-500 px-4 py-1 cursor-pointer rounded-lg  items-center gap-2 text-[#25343F] font-semibold hover:bg-yellow-400'>
            Login <ArrowRightToLine size={16} />
          </button>
          {/* Hamburger Button */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40'
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 bg-[#1E1445] h-full w-[210px] z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
      >
        {/* close button */}
        <div className='flex justify-end p-4 '>
          <button onClick={() => setIsOpen(!isOpen)}>
            <X />
          </button>
        </div>
        <div className='flex flex-col items-center gap-10'>
          <Link href='/' className='hover:text-yellow-400'>
            Home
          </Link>

          <Link href='/about' className='hover:text-yellow-400'>
            About
          </Link>

          <Link href='/projects' className='hover:text-yellow-400'>
            Projects
          </Link>

          <Link href='/contact' className='hover:text-yellow-400'>
            Contact
          </Link>
          <button className='flex bg-yellow-500 px-4 py-1 cursor-pointer rounded-lg  items-center gap-2 text-[#25343F] font-semibold hover:bg-yellow-400'>
            Login <ArrowRightToLine size={16} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
