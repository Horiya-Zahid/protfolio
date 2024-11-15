// import Link from 'next/link';
// import React from 'react';
// import { ImCross } from 'react-icons/im';

// interface Props{
//     showNav:boolean;
//     closeNav:()=>void;
// }

// const MobileNav = ({ closeNav, showNav }: Props) => {

//     const navOpenStyle = showNav ? 'translate-x-0':'translate-x-[-100%]';
    
//   return (
//     <div>
//     {/* overlay */}
//     <div className={`fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[1000] left-0 right-0 
//     bottom-0 bg-black opacity-70 w-full hi[100vh]`}></div>
//     {/* Navlinks */}
//     <ul className={`text-white ${navOpenStyle}fixed flex top-0 items-center justify-center flex-col h-[100vh] transform 
//     transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-blue-500 space-y-10 z-[10006]`}>
//         <li className='navlink text-[25px] sm:text-[30px]'>
//             <Link href="#">Home</Link>
//         </li>
//         <li className='navlink text-[25px] sm:text-[30px]'>
//             <Link href="#">About</Link>
//         </li>
//         <li className='navlink text-[25px] sm:text-[30px]'>
//             <Link href="#">Services</Link>
//         </li>
//         <li className='navlink text-[25px] sm:text-[30px]'>
//             <Link href="#">Protfolio</Link>
//         </li>
//         <li className='navlink text-[25px] sm:text-[30px]'>
//             <Link href="#">Blog</Link>
//         </li>
//         <li className='navlink text-[25px] sm:text-[30px]'>
//             <Link href="#">Contact</Link>
//         </li>
//     {/* Cross icon for close the navbar */}
//     <ImCross onClick={closeNav} 
//     className='absolute top-4 right-4 w-[1.4rem] h-[1.4rem] text-white'/>
//        </ul> 
//        </div>
//   );
// };

// export default MobileNav;


import Link from 'next/link';
import React from 'react';
import { ImCross } from 'react-icons/im';

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[1000] left-0 right-0 
      bottom-0 bg-black opacity-70 w-full h-[100vh]`}></div>
      {/* Navlinks */}
      <ul className={`text-black ${navOpenStyle} fixed flex top-0 items-center justify-center flex-col h-[100vh] transform 
      transition-all duration-300 delay-300 w-[80%] sm:w-[60%] bg-amber-300 space-y-10 z-[10006]`}>
        <li className='navlink text-[25px] sm:text-[30px]'>
          <Link href="#">Home</Link>
        </li>
        <li className='navlink text-[25px] sm:text-[30px]'>
          <Link href="#">About</Link>
        </li>
        <li className='navlink text-[25px] sm:text-[30px]'>
          <Link href="#">Services</Link>
        </li>
        <li className='navlink text-[25px] sm:text-[30px]'>
          <Link href="#">Portfolio</Link>
        </li>
        <li className='navlink text-[25px] sm:text-[30px]'>
          <Link href="#">Blog</Link>
        </li>
        <li className='navlink text-[25px] sm:text-[30px]'>
          <Link href="#">Contact</Link>
        </li>
        {/* Cross icon for close the navbar */}
        <ImCross 
          onClick={closeNav} 
          className='absolute top-4 right-4 w-[1.4rem] h-[1.4rem] text-white' 
        />
      </ul>
    </div>
  );
};

export default MobileNav;
