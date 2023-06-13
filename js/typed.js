const roles = [
  '<span style="color:#d6336c">Full Stack Developer</span>',
  '<span style="color:#fd7e14">MERN stack developer</span>',
  '<span style="color:blue">Front-End developer</span>',
  '<span style="color:#d6334a">Back-End developer</span>',
];

const options = {
  strings: roles,
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
  cursorChar: '|',
};

let typed = new Typed('#typing-animation', options);
