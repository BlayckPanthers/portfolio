import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fabien Lebon', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenue sur mon site !', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour je m\'appelle',
  name: 'Fabien',
  subtitle: 'Je suis développeur mobile',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePic.jpg',
  paragraphOne: 'Je m’appelle Fabien Lebon et je suis développeur  mobile, je travaille actuellement au sein d’Axa France en tant que Solution Engineer, poste auprès duquel j’ai pu énormément apprendre aussi bien d’un point technique que personnel.',
  paragraphTwo: 'À ce poste, j’ai pu manipuler et approfondir mes connaissances techniques sur différentes technologies (SOA, Web services SOAP, Rest, WebMethod, Moteur de règles ODM, SpringBoot, OAuth 2.0, ELK) en assurant un TTM au plus proche des attentes de mes différents product owners tout en garantissant la sécurité et la résilience de mes applications.',
  paragraphThree: 'Mais cela ne s’arrête pas là ... bien que j’ai un profil type plus Java/Spring je suis passionné développement mobile et plus particulièrement iOS ( SwiftUI ❤️ ). Et c’est de cette manière que j’occupe la plupart de mon temps libre, à continuer de me former sur cette technologie.',
  paragraphFour: 'Durant mes études j\'ai pu réaliser différents projets par le biais des technologies mobile suivantes : React Native, Flutter, Xamarin, Java, Swift (UIkit et SwiftUI), en utilisant des API externes ou bien Firebase afin de constituer des jeux de données',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Envie de collaborer ensemble ?',
  btn: 'N\'hésitez pas a m\'envoyer un mail  😉',
  email: 'contact@fabienlbn.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/arterfact78',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fabien-lebon/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/BlayckPanthers',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
