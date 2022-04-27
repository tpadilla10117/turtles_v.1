/* For default data to be used in project: */

import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';

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