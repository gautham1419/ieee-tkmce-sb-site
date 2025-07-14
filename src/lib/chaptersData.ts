export const chapters = [
  { id: 'cs', name: 'Computer Society', logo: '/societies/cs.svg' },
  { id: 'ras', name: 'Robotics & Automation Society', logo: '/societies/ras.svg' },
  { id: 'pes', name: 'Power & Energy Society', logo: '/societies/pes.svg' },
  { id: 'sight', name: 'SIGHT', logo: '/societies/sight.svg' },
  { id: 'ias', name: 'Industry Applications Society', logo: '/societies/ias.png' },
  { id: 'ies', name: 'Industrial Electronics Society', logo: '/societies/ies.svg' },
  { id: 'sps', name: 'Signal Processing Society', logo: '/societies/sps.svg' },
  { id: 'wie', name: 'Women in Engineering', logo: '/societies/wie.svg' },
  { id: 'cas', name: 'Circuits and Systems Society', logo: '/societies/cas.svg' },
];

export const chapterDetails: { [key: string]: any } = {
  cs: {
    website: "https://www.computer.org/",
    about: "The IEEE Computer Society is the world's premier organization of computing professionals. With a global membership, it is the leading provider of technical information, community services, and personalized services to the world's computing professionals.",
    vision: "To be the leading provider of technical information, community services, and personalized services to the world's computing professionals.",
    mission: "To advance the theory, practice, and application of computer and information processing science and technology and to promote the professional growth of its members.",
    quote: {
      text: 'The advance of technology is based on making it fit in so that you don’t even notice it, so it’s part of everyday life.',
      author: 'Bill Gates',
      title: 'Co-founder of Microsoft',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our student chapter is dedicated to fostering a community of innovators. We organize workshops, hackathons, and speaker sessions to connect students with the latest trends in computing and software development.',
    },
    benefits: [
      { title: 'Digital Library Access', text: 'Get access to the IEEE Computer Society Digital Library, a comprehensive collection of computer science literature.' },
      { title: 'Career Development', text: 'Resources and opportunities to help you advance your career in the tech industry.' },
      { title: 'Global Community', text: 'Connect with a network of over 60,000 computing professionals and students worldwide.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Coding Competitions', text: 'Sharpen your problem-solving skills in our competitive programming events.' },
      { image: '/placeholder-activity-2.jpg', title: 'Tech Talks & Seminars', text: 'Learn from industry experts about cutting-edge technologies and research.' },
      { image: '/placeholder-activity-3.jpg', title: 'Open Source Projects', text: 'Collaborate on real-world open source projects and build your portfolio.' },
      { image: '/placeholder-activity-4.jpg', title: 'Networking Nights', text: 'Meet and connect with professionals, alumni, and fellow students.' },
    ],
  },
  ras: {
    website: "https://www.ieee-ras.org/",
    about: "The IEEE Robotics and Automation Society (RAS) is a global community of researchers and practitioners dedicated to advancing the field of robotics and automation. Our members are at the forefront of developing new technologies that are changing the world.",
    vision: "To be the most recognized and respected global organization for the advancement of robotics and automation science and technology.",
    mission: "To foster the development and facilitate the exchange of scientific and technological knowledge in robotics and automation that benefits members, the profession, and humanity.",
    quote: {
      text: 'The robots of the future will be different from the robots of the past. They will be more intelligent, more autonomous, and more human-like.',
      author: 'Rodney Brooks',
      title: 'Roboticist and Co-founder of iRobot',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our chapter is a hub for students passionate about robotics. We provide hands-on experience through projects, workshops, and competitions, from building autonomous drones to programming humanoid robots.',
    },
    benefits: [
      { title: 'Hands-On Workshops', text: 'Gain practical skills in robot building, programming, and control systems.' },
      { title: 'Robotics Competitions', text: 'Test your creations against other teams in exciting regional and national competitions.' },
      { title: 'Access to Labs & Kits', text: 'Utilize our dedicated robotics lab and access a wide range of components and sensor kits.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Autonomous Vehicle Challenge', text: 'Design and build self-driving vehicles for our annual campus challenge.' },
      { image: '/placeholder-activity-2.jpg', title: 'Drone Programming', text: 'Learn to program and fly autonomous drones for various applications.' },
      { image: '/placeholder-activity-3.jpg', title: 'Industrial Automation Seminar', text: 'Explore the latest trends in industrial robotics and smart manufacturing.' },
      { image: '/placeholder-activity-4.jpg', title: 'Humanoid Robot Interaction', text: 'Work on projects focused on the interaction between humans and robots.' },
    ],
  },
  pes: {
    website: "https://ieee-pes.org",
    about: "The IEEE Power & Energy Society (PES) is the world's leading forum for sharing the latest in technological developments in the electric power industry, for developing standards that guide the development and construction of equipment and systems, and for educating members of the industry and the general public.",
    vision: "To be the leading provider of scientific and engineering information on electric power and energy for the betterment of society, and the preferred professional development source for our members.",
    mission: "To be a leading provider of scientific and engineering information on electric power and energy for the betterment of society.",
    quote: {
      text: 'The future of energy is not just about producing more, but about producing it more cleanly and using it more efficiently.',
      author: 'Amory Lovins',
      title: 'Physicist and Environmental Scientist',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our PES chapter focuses on the future of energy. We explore renewable energy systems, smart grids, and sustainable power solutions through guest lectures, site visits, and hands-on projects.',
    },
    benefits: [
      { title: 'Renewable Energy Projects', text: 'Get involved in projects focused on solar, wind, and other clean energy sources.' },
      { title: 'Industry Site Visits', text: 'Tour power plants, substations, and renewable energy facilities to see theory in practice.' },
      { title: 'Smart Grid Technology', text: 'Learn about the technologies that are modernizing the electrical grid.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Solar Panel Workshop', text: 'Learn to design, build, and install a small-scale solar power system.' },
      { image: '/placeholder-activity-2.jpg', title: 'Energy Auditing Challenge', text: 'Conduct energy audits on campus buildings to identify savings opportunities.' },
      { image: '/placeholder-activity-3.jpg', title: 'Grid Modernization Seminar', text: 'Discuss the challenges and opportunities of creating a more resilient and efficient grid.' },
      { image: '/placeholder-activity-4.jpg', title: 'Electric Vehicle Tech Day', text: 'Explore the technology behind electric vehicles and charging infrastructure.' },
    ],
  },
  sight: {
    website: "https://sight.ieee.org/",
    about: "IEEE SIGHT (Special Interest Group on Humanitarian Technology) is a global network of IEEE volunteers and others who are dedicated to applying technology to address the world's most pressing challenges. SIGHT projects are grassroots, community-based, and always focused on sustainable solutions.",
    vision: "A world where technology is a key enabler for sustainable development and a better quality of life for all.",
    mission: "To foster a community of volunteers who work on sustainable solutions to local challenges, leveraging technology for the benefit of humanity.",
    quote: {
      text: 'The best way to find yourself is to lose yourself in the service of others.',
      author: 'Mahatma Gandhi',
      title: 'Leader of the Indian independence movement',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our SIGHT group is committed to making a difference. We partner with local communities to develop and implement technology-based solutions that address real-world problems in areas like healthcare, education, and agriculture.',
    },
    benefits: [
      { title: 'Impactful Projects', text: 'Work on projects that have a direct and positive impact on local communities.' },
      { title: 'Develop Social Enterprise Skills', text: 'Learn how to create sustainable, technology-driven solutions for social good.' },
      { title: 'Global Collaboration', text: 'Connect with other SIGHT groups around the world to share ideas and best practices.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Low-Cost Medical Devices', text: 'Develop affordable medical devices for underserved clinics.' },
      { image: '/placeholder-activity-2.jpg', title: 'Educational Technology for Rural Schools', text: 'Create and deploy learning tools for schools with limited resources.' },
      { image: '/placeholder-activity-3.jpg', title: 'Clean Water Solutions', text: 'Design and build systems for water purification and monitoring.' },
      { image: '/placeholder-activity-4.jpg', title: 'Community Needs Assessment', text: 'Work with local partners to identify and prioritize community challenges.' },
    ],
  },
  ias: {
    website: "https://ias.ieee.org/",
    about: "The IEEE Industry Applications Society (IAS) is a professional society of the IEEE that is dedicated to the advancement of the theory and practice of electrical and electronic engineering in the development, design, manufacture, and application of electrical systems, apparatus, devices, and controls to the processes and equipment of industry and commerce.",
    vision: "To be a world leader in the advancement of technology and dissemination of technical information to support professionals engaged in the applications of electrical and electronic engineering to industry.",
    mission: "To serve the interests of its members and the industrial community by providing the highest quality publications, conferences, standards, and other services.",
    quote: {
      text: 'The industry of the future will be characterized by the seamless integration of the physical and digital worlds.',
      author: 'Klaus Schwab',
      title: 'Founder and Executive Chairman, World Economic Forum',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our IAS chapter bridges the gap between academia and industry. We connect students with industry professionals through mentorship programs, factory tours, and seminars on industrial best practices.',
    },
    benefits: [
      { title: 'Industry Mentorship', text: 'Get paired with an experienced professional in your field of interest.' },
      { title: 'Networking with Professionals', text: 'Build your professional network at our exclusive industry events.' },
      { title: 'Co-op and Internship Opportunities', text: 'Gain access to internship and co-op opportunities with our partner companies.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Industrial Control Systems Workshop', text: 'Learn about PLCs, SCADA, and other key technologies in industrial automation.' },
      { image: '/placeholder-activity-2.jpg', title: 'Factory Automation Tour', text: 'See modern manufacturing and automation in action at a local factory.' },
      { image: '/placeholder-activity-3.jpg', title: 'Safety Engineering Seminar', text: 'Understand the critical importance of safety standards in industrial applications.' },
      { image: '/placeholder-activity-4.jpg', title: 'Career Fair', text: 'Meet with recruiters from leading engineering and technology companies.' },
    ],
  },
  ies: {
    website: "https://www.ieee-ies.org/",
    about: "The IEEE Industrial Electronics Society (IES) is a professional society of the IEEE that focuses on the application of electronics and electrical sciences for the enhancement of industrial and manufacturing processes. IES members are involved in the latest advancements in power electronics, control systems, and industrial informatics.",
    vision: "To be the premier international technical and professional society in the field of industrial electronics.",
    mission: "To foster the advancement of the theory and practice of industrial electronics, and to enhance the professional development of its members.",
    quote: {
      text: 'The Fourth Industrial Revolution is not just about technology; it’s about the fusion of technologies and their interaction across the physical, digital, and biological domains.',
      author: 'Andrew Ng',
      title: 'Co-founder of Coursera, former head of Google Brain',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our IES chapter is at the cutting edge of industrial technology. We delve into topics like IoT, power electronics, and factory automation through hands-on labs, expert talks, and collaborative projects.',
    },
    benefits: [
      { title: 'IoT and Embedded Systems', text: 'Work on projects involving smart sensors, embedded systems, and the Internet of Things.' },
      { title: 'Power Electronics Design', text: 'Learn to design and build efficient power converters and motor drives.' },
      { title: 'Control Systems and Mechatronics', text: 'Gain experience in designing and implementing advanced control systems.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Smart Factory Hackathon', text: 'Develop innovative solutions for challenges in modern manufacturing.' },
      { image: '/placeholder-activity-2.jpg', title: 'FPGA and VHDL Workshop', text: 'Learn to program FPGAs for high-performance industrial applications.' },
      { image: '/placeholder-activity-3.jpg', title: 'Electric Motor Control Lab', text: 'Experiment with different techniques for controlling electric motors.' },
      { image: '/placeholder-activity-4.jpg', title: 'Guest Lecture on Industry 4.0', text: 'Hear from experts on the future of industrial automation and data exchange.' },
    ],
  },
  sps: {
    website: "https://signalprocessingsociety.org/",
    about: "The IEEE Signal Processing Society (SPS) is the world’s premier professional society for signal processing scientists and professionals. Its members are at the forefront of research and development in areas such as audio and acoustic signal processing, image, video, and multidimensional signal processing, and machine learning for signal processing.",
    vision: "To be the leading professional society for signal processing scientists and professionals throughout the world.",
    mission: "To advance and disseminate state-of-the-art scientific information and resources; educate the signal processing community; and provide a venue for people to interact and exchange ideas.",
    quote: {
      text: 'The ability to represent and process information is the essence of intelligence. Signal processing is the key to unlocking that ability.',
      author: 'Geoffrey Hinton',
      title: 'Godfather of AI',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our SPS chapter explores the fascinating world of signals. From audio and image processing to machine learning applications, we provide a platform for students to learn, experiment, and innovate.',
    },
    benefits: [
      { title: 'Digital Signal Processing (DSP) Kits', text: 'Get hands-on experience with DSP hardware and software.' },
      { title: 'Machine Learning for SP', text: 'Explore the intersection of machine learning and signal processing.' },
      { title: 'Audio and Image Processing Projects', text: 'Work on fun and challenging projects in areas like speech recognition and computer vision.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Audio Equalizer Design Challenge', text: 'Design and implement your own digital audio equalizer.' },
      { image: '/placeholder-activity-2.jpg', title: 'Computer Vision Workshop', text: 'Learn the fundamentals of image processing and object detection.' },
      { image: '/placeholder-activity-3.jpg', title: 'Introduction to Neural Networks', text: 'A seminar on the basics of neural networks for signal processing tasks.' },
      { image: '/placeholder-activity-4.jpg', title: 'MATLAB and Simulink Tutorials', text: 'Master the essential tools for signal processing research and development.' },
    ],
  },
  wie: {
    website: "https://wie.ieee.org/",
    about: "IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering.",
    vision: "A vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.",
    mission: "To facilitate the recruitment and retention of women in technical disciplines globally.",
    quote: {
      text: 'We need to get women to the point where they aren’t apologizing. It is a subtle shift, but it is a big one.',
      author: 'Sheryl Sandberg',
      title: 'Former COO of Facebook',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our WIE chapter is a supportive and empowering community for women in engineering and technology. We provide mentorship, networking opportunities, and professional development workshops to help our members succeed.',
    },
    benefits: [
      { title: 'Mentorship Programs', text: 'Connect with experienced professionals and peers for guidance and support.' },
      { title: 'Leadership Opportunities', text: 'Take on leadership roles within the chapter and at regional events.' },
      { title: 'Networking Events', text: 'Build your professional network at our exclusive WIE conferences and meetups.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Hour of Code', text: 'Inspire the next generation by volunteering at local schools.' },
      { image: '/placeholder-activity-2.jpg', title: 'Professional Development Workshops', text: 'Enhance your skills in areas like public speaking, resume writing, and negotiation.' },
      { image: '/placeholder-activity-3.jpg', title: 'STAR Program', text: 'Mentor young students and encourage them to pursue STEM careers.' },
      { image: '/placeholder-activity-4.jpg', title: 'Panel Discussions', text: 'Hear from successful women in tech about their career journeys and insights.' },
    ],
  },
  cas: {
    website: "https://ieee-cas.org/",
    about: "The IEEE Circuits and Systems Society (CASS) is the leading organization that promotes the advancement of the theory, analysis, design, tools, and implementation of circuits and systems. The field spans their theoretical foundations, analysis, and design, to the implementation of circuits and systems in hardware and software.",
    vision: "To be the premier organization for professionals in the field of circuits and systems.",
    mission: "To foster the advancement of circuits and systems theory and practice, and to promote the professional growth of its members.",
    quote: {
      text: 'The art of engineering is to make complex things simple.',
      author: 'Y. C. Ho',
      title: 'Control theorist and professor at Harvard University',
    },
    aboutChapter: {
      image: '/placeholder-group.jpg',
      text: 'Our CASS chapter is dedicated to the world of electronics. We organize workshops on analog and digital circuit design, PCB design, and VLSI, providing students with the skills needed for a career in hardware engineering.',
    },
    benefits: [
      { title: 'Circuit Design Competitions', text: 'Put your design skills to the test in our challenging competitions.' },
      { title: 'VLSI and EDA Tool Workshops', text: 'Get hands-on experience with industry-standard design and analysis tools.' },
      { title: 'Access to Technical Resources', text: 'Explore a vast library of publications, tutorials, and standards from the CASS community.' },
    ],
    activities: [
      { image: '/placeholder-activity-1.jpg', title: 'Analog Filter Design Workshop', text: 'Learn the fundamentals of designing and building analog filters.' },
      { image: '/placeholder-activity-2.jpg', title: 'PCB Design and Fabrication', text: 'From schematic to finished board, learn the entire PCB design process.' },
      { image: '/placeholder-activity-3.jpg', title: 'Introduction to Verilog/VHDL', text: 'A hands-on introduction to hardware description languages.' },
      { image: '/placeholder-activity-4.jpg', title: 'Guest Lecture on Mixed-Signal IC Design', text: 'Hear from an industry expert on the challenges of designing mixed-signal integrated circuits.' },
    ],
  },
};

