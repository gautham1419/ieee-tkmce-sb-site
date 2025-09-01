export const execomChapters = [
  { id: 'main', name: 'Main SB Execom' },
  { id: 'cs', name: 'Computer Society' },
  { id: 'ras', name: 'Robotics & Automation Society' },
  { id: 'pes', name: 'Power & Energy Society' },
  { id: 'sight', name: 'SIGHT' },
  { id: 'ias', name: 'Industry Applications Society' },
  { id: 'ies', name: 'Industrial Electronics Society' },
  { id: 'sps', name: 'Signal Processing Society' },
  { id: 'wie', name: 'Women in Engineering' },
  { id: 'cas', name: 'Circuits and Systems Society' },
  { id: 'edsoc', name: 'Electron Devices Society' },
  { id: 'vts', name: 'Vehicular Technology Society' },
  { id: 'embs', name: 'Engineering in Medicine and Biology Society' },
  { id: 'design', name: 'Design Team' },
  { id: 'media', name: 'Media Team' },
  { id: 'doc', name: 'Doc Team' },
  { id: 'project', name: 'Project Team' },
  { id: 'operations', name: 'Operations Team' },
  { id: 'md', name: 'MD Team' },
  { id: 'web', name: 'Web Team' },
];

export interface Member {
  name: string;
  position: string;
  image: string;
  societyId: string;
}

const placeholderImage = '/placeholder-pfp.svg';

export const facultyExecom: Member[] = [
  { name: 'Dr. Arun A V', position: 'Branch Counsellor', image: placeholderImage, societyId: 'main' },
  { name: 'Dr. Sabeena Beevi K', position: 'Mentor, IAS Advisor', image: placeholderImage, societyId: 'ias' },
  { name: 'Mohammed Mansoor O', position: 'PES Advisor', image: placeholderImage, societyId: 'pes' },
  { name: 'Dr. Bijuna Kunju K', position: 'IES Advisor', image: placeholderImage, societyId: 'ies' },
  { name: 'Shyba S', position: 'RAS Advisor', image: placeholderImage, societyId: 'ras' },
  { name: 'Ganesh Nath R', position: 'SIGHT Advisor', image: placeholderImage, societyId: 'sight' },
  { name: 'Dr. Bijuna Kunju K', position: 'WIE Advisor', image: placeholderImage, societyId: 'wie' },
  { name: 'Reshna S', position: 'SPS Advisor', image: placeholderImage, societyId: 'sps' },
  { name: 'Dr. Anzar S M', position: 'EDSOC', image: placeholderImage, societyId: 'edsoc' },
  { name: 'Dr. Dimple Shajahan', position: 'CS Advisor', image: placeholderImage, societyId: 'cs' },
  { name: 'Vishnu D', position: 'CASS Advisor', image: placeholderImage, societyId: 'cas' },
  { name: 'Shahina T N', position: 'VTS', image: placeholderImage, societyId: 'vts' },
  { name: 'Dr. Nissan Kunju', position: 'EMBS', image: placeholderImage, societyId: 'embs' },
];

export const studentExecom: Member[] = [
  // Main SB Execom
  { name: 'Nandana Shibu', position: 'Chairperson', image: placeholderImage, societyId: 'main' },
  { name: 'Satvik G', position: 'Vice Chairperson', image: placeholderImage, societyId: 'main' },
  { name: 'Amina Shabnam', position: 'Secretary', image: placeholderImage, societyId: 'main' },
  { name: 'Theertha TP', position: 'Joint Secretary', image: placeholderImage, societyId: 'main' },
  { name: 'Muhammad Razil', position: 'Treasurer', image: placeholderImage, societyId: 'main' },
  { name: 'Shalfa', position: 'MDO', image: placeholderImage, societyId: 'main' },
  { name: 'Anand', position: 'ECC', image: placeholderImage, societyId: 'main' },
  { name: 'Amina Nagmi', position: 'LINK REPRESENTATIVE', image: placeholderImage, societyId: 'main' },
  { name: 'Shanis', position: 'Activity Coordinator', image: placeholderImage, societyId: 'main' },
  { name: 'Ameena', position: '3rd yr Rep', image: placeholderImage, societyId: 'main' },
  { name: 'Dhrowpika', position: '3rd yr Rep', image: placeholderImage, societyId: 'main' },
  { name: 'Jovita Ann Toms', position: '2nd yr Rep', image: placeholderImage, societyId: 'main' },
  { name: 'Ragendhu TV', position: '2nd yr Rep', image: placeholderImage, societyId: 'main' },
  { name: 'Muhammed Nihal Noushad', position: '2nd yr Rep', image: placeholderImage, societyId: 'main' },

  // RAS
  { name: 'Johan Serji', position: 'RAS Chair', image: placeholderImage, societyId: 'ras' },
  { name: 'Steffina G. Solomon', position: 'RAS Vice Chair', image: placeholderImage, societyId: 'ras' },
  { name: 'Tina Ann Thomas', position: 'RAS Secretary', image: placeholderImage, societyId: 'ras' },
  { name: 'Ajish', position: 'RAS Tech Team', image: placeholderImage, societyId: 'ras' },

  // PES
  { name: 'Anna Joy', position: 'PES Chair', image: placeholderImage, societyId: 'pes' },
  { name: 'Abhin V', position: 'PES Vice Chair', image: placeholderImage, societyId: 'pes' },
  { name: 'Hadee Muhammed', position: 'PES Secretary', image: placeholderImage, societyId: 'pes' },
  { name: 'Anamika Babu M', position: 'PES Women in Power', image: placeholderImage, societyId: 'pes' },

  // EDSOC
  { name: 'Karthik A V', position: 'EDSOC Society Chair', image: placeholderImage, societyId: 'edsoc' },
  { name: 'Muhammed Raihan P', position: 'EDSOC Vice Chair', image: placeholderImage, societyId: 'edsoc' },
  { name: 'Harinand K', position: 'EDSOC Secretary', image: placeholderImage, societyId: 'edsoc' },

  // CASS
  { name: 'Dixon Mathews', position: 'CASS Society Chair', image: placeholderImage, societyId: 'cas' },
  { name: 'Muhammed Ameen PM', position: 'CASS Vice Chair', image: placeholderImage, societyId: 'cas' },
  { name: 'Devabala Raj', position: 'CASS Secretary', image: placeholderImage, societyId: 'cas' },
  { name: 'Devanandan H', position: 'CASS Tech Team', image: placeholderImage, societyId: 'cas' },

  // SPS
  { name: 'Kishan', position: 'SPS Society Chair', image: placeholderImage, societyId: 'sps' },
  { name: 'Subair Z', position: 'SPS Vice Chair', image: placeholderImage, societyId: 'sps' },
  { name: 'Niharika Prasadh', position: 'SPS Secretary', image: placeholderImage, societyId: 'sps' },
  { name: 'Salmanul Fariz PV', position: 'SPS Tech Team', image: placeholderImage, societyId: 'sps' },

  // CS
  { name: 'Anakha R A', position: 'CS Chair', image: placeholderImage, societyId: 'cs' },
  { name: 'Jesmi Jayan', position: 'CS Vice Chair', image: placeholderImage, societyId: 'cs' },
  { name: 'Sreedev Suresh', position: 'CS Secretary', image: placeholderImage, societyId: 'cs' },
  { name: 'Hridya B', position: 'Women in Computing', image: placeholderImage, societyId: 'cs' },

  // IAS
  { name: 'Nihal P', position: 'IAS Chair', image: placeholderImage, societyId: 'ias' },
  { name: 'Tanya Jacob', position: 'IAS Vice Chair', image: placeholderImage, societyId: 'ias' },
  { name: 'Rasal Musthafa', position: 'IAS Secretary', image: placeholderImage, societyId: 'ias' },
  { name: 'Parthiv Roshan', position: 'IAS Tech Team', image: placeholderImage, societyId: 'ias' },

  // IES
  { name: 'Vismaya', position: 'IES Chair', image: placeholderImage, societyId: 'ies' },
  { name: 'Sreesankar P B', position: 'IES Vice Chair', image: placeholderImage, societyId: 'ies' },
  { name: 'Asna S B', position: 'IES Secretary', image: placeholderImage, societyId: 'ies' },
  { name: 'Divya Elsa Thomas', position: 'IES Tech Team', image: placeholderImage, societyId: 'ies' },

  // WIE
  { name: 'Fathima Kalam', position: 'WIE Chair', image: placeholderImage, societyId: 'wie' },
  { name: 'Haadiya Sajjadh', position: 'WIE Vice Chair', image: placeholderImage, societyId: 'wie' },
  { name: 'Sreelakshmi P Nair', position: 'WIE Secretary', image: placeholderImage, societyId: 'wie' },

  // SIGHT
  { name: 'Adelene', position: 'SIGHT Chair', image: placeholderImage, societyId: 'sight' },
  { name: 'Fathima Thaha', position: 'SIGHT Vice Chair', image: placeholderImage, societyId: 'sight' },
  { name: 'Riya Sajeevan', position: 'SIGHT Secretary', image: placeholderImage, societyId: 'sight' },
  { name: 'Mohammed Roshan P', position: 'SIGHT tech team', image: placeholderImage, societyId: 'sight' },

  // Web Team
  { name: 'Gautham Binu', position: 'Web Master', image: placeholderImage, societyId: 'web' },
  { name: 'Aadith J Krishna N', position: 'Web Team Lead', image: placeholderImage, societyId: 'web' },
  { name: 'Razin Moyi A N K', position: 'Web Team Member', image: placeholderImage, societyId: 'web' },
  { name: 'Rasal Musthafa', position: 'Web Team Member', image: placeholderImage, societyId: 'web' },
  { name: 'Devabala Raj', position: 'Web Team Member', image: placeholderImage, societyId: 'web' },

  // Design Team
  { name: 'Arjun Anil A', position: 'Design Team Head', image: placeholderImage, societyId: 'design' },
  { name: 'Ameen Shaj', position: 'Design Team Members', image: placeholderImage, societyId: 'design' },
  { name: 'Muhammed Rishad MP', position: 'Design Team Members', image: placeholderImage, societyId: 'design' },
  { name: 'Steffina G Solomon', position: 'Design Team Members', image: placeholderImage, societyId: 'design' },
  { name: 'Sreesankar P B', position: 'Design Team Members', image: placeholderImage, societyId: 'design' },
  { name: 'Muhammed Ameen PM', position: 'Design Team Members', image: placeholderImage, societyId: 'design' },

  // Media Team
  { name: 'Sidarth Shibu', position: 'Media Team', image: placeholderImage, societyId: 'media' },
  { name: 'Harinand K', position: 'Media Team', image: placeholderImage, societyId: 'media' },
  { name: 'Fathima', position: 'Media Team', image: placeholderImage, societyId: 'media' },
  { name: 'Sidharth V Babu', position: 'Media Team', image: placeholderImage, societyId: 'media' },
  { name: 'Sreenath', position: 'Media Team', image: placeholderImage, societyId: 'media' },
  { name: 'Jasim', position: 'Media Team', image: placeholderImage, societyId: 'media' },

  // Doc Team
  { name: 'Keerthana', position: 'Doc Head', image: placeholderImage, societyId: 'doc' },
  { name: 'Ghazali Mohamed', position: 'Doc Head', image: placeholderImage, societyId: 'doc' },
  { name: 'Fathima Ibrahim', position: 'Doc Team', image: placeholderImage, societyId: 'doc' },
  { name: 'Jino', position: 'Doc Team', image: placeholderImage, societyId: 'doc' },
  { name: 'Haadiya Sajjad', position: 'Doc Team', image: placeholderImage, societyId: 'doc' },
  { name: 'Anamika', position: 'Doc Team', image: placeholderImage, societyId: 'doc' },
  { name: 'Athira B. R', position: 'Doc Team', image: placeholderImage, societyId: 'doc' },

  // Project Team
  { name: 'Akash Prasad', position: 'Project Team', image: placeholderImage, societyId: 'project' },
  { name: 'Abhijith U', position: 'Project Team', image: placeholderImage, societyId: 'project' },

  // Operations Team
  { name: 'Hanzal Harris', position: 'Operations Head', image: placeholderImage, societyId: 'operations' },
  { name: 'Arjun', position: 'Operations Lead', image: placeholderImage, societyId: 'operations' },
  { name: 'Feba Fathima', position: 'Operations Member', image: placeholderImage, societyId: 'operations' },

  // MD Team
  { name: 'Jesmi Jayan', position: 'MD team', image: placeholderImage, societyId: 'md' },
  { name: 'Tanya', position: 'MD team', image: placeholderImage, societyId: 'md' },
  { name: 'Sreelakshmi', position: 'MD team', image: placeholderImage, societyId: 'md' },
];
