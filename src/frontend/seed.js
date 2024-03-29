/* For default data to be used in project: */

import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import TurtlesStudio from './assets/images/turtlesStudio.JPG';
import TurtlesStudio2 from './assets/images/turtlesStudio2.JPG';
import Amanda from './assets/images/Amanda-73.jpeg';
import Amanda2 from './assets/images/Amanda-46.jpeg';
import Amanda3 from './assets/images/Amanda-67.jpeg';
import Testimonial1 from './assets/images/testimonial1.jpg';
import Testimonial2 from './assets/images/testtimonial2.jpg';
import Testimonial3 from './assets/images/testimonial3.jpg';

export const photoGallery = [
    {
        src: TurtlesStudio,
        width: 2,
        height: 3,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        id: 1
    },
    {
        src: TurtlesStudio2,
        width: 2,
        height: 3,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        id: 2
    },
    {
        src: Amanda,
        width: 4,
        height: 3,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        id: 3
    },
    {
        src: Amanda2,
        width: 2,
        height: 3,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        id: 4
    },/* 
    
    {
        src: Amanda,
        width: 4,
        height: 3,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        id: 5
    },
    {
        src: Amanda2,
        width: 2,
        height: 3,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        id: 6
    }, */
    
]



export const NavbarData = [

    {
      title: 'Home',
      path: '/',
      /* icon: <AiIcons.AiFillHome />, */
      activeObject: null,
      id: 0,
      smooth: true,
      duration: 500,
      spy: true,
      exact: 'true',
      offset: -80,
      img: HomeRoundedIcon
  },
  {
    title: 'About',
    path: '/about',
    /* icon: <AiIcons.AiOutlineUser />, */
    activeObject: null,
    id: 1,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
    img: PersonRoundedIcon
},

 {
    title: 'Gallery',
    path: '/gallery',
   /*  icon: <FaIcons.FaProjectDiagram />, */
    activeObject: null,
    id: 2,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
    img: CollectionsRoundedIcon
},
{
    title: 'Contact',
    path: '/contact',
    /* icon: <AiIcons.AiOutlineFilePdf />, */
    cName: 'nav-text',
    activeObject: null,
    id: 3,
    smooth: true,
    duration: 500,
    spy: true,
    exact: 'true',
    offset: -80,
    img: MailRoundedIcon
},

]

export const heroCarouselData = [
    {
        src: TurtlesStudio,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        buttonId: 1,
        id: 1
    },
    {
        src: Amanda3,
        title: 'Focused',
        caption: 'Turtles getting her stretch on...',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        buttonId: 2,
        id: 2
    },
    {
        src: TurtlesStudio2,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        buttonId: 3,
        id: 3
    },
    {
        src: Amanda2,
        title: 'Amanda',
        caption: 'Turtles Swinging in the studio',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        buttonId: 4,
        id: 4
    },
    
];

export const testimonialCarouselData = [
    {
        src: TurtlesStudio,
        title: 'Kianna B.',
        clientimg: Testimonial1,
        subtitle: 'Student',
        caption: 'Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her. Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        buttonId: 1,
        id: 1
    },
    {
        src: Amanda3,
        title: 'Jilian C.',
        clientimg: Testimonial2,
        subtitle: 'Student',
        caption: 'Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her. Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        buttonId: 2,
        id: 2
    },
    {
        src: TurtlesStudio2,
        title: 'Jade Z.',
        clientimg: Testimonial3,
        subtitle: 'Student',
        caption: 'Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her. Turtles really is an amazing talent & teacher.  I have learned so much from here and would not be where I am today without her',
        alt: 'Turtles Swinging in the studio',
        thumbnail: 'Turtles Swinging in the studio',
        buttonId: 3,
        id: 3
    },
    
];