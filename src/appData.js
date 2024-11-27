const appData = {
  home: {
    title: "Welcome to My Portfolio",
    introduction:
      "Hi, I'm Memoona, an AI consultant and electronics engineer passionate about solving complex problems with cutting-edge AI technologies. I bring innovation to projects, from machine learning to ethical AI in education and research.",
    profileImage: require('@/assets/image.png'), // Ensure this image exists in the right folder
    sections: [
      { title: "About Me", description: "Get to know me, my background, and my passions." },
      { title: "My Projects", description: "Explore my portfolio with AI-based and design-driven projects." },
      { title: "Skills", description: "Discover the skills I've developed across various domains." },
      { title: "Contact", description: "Get in touch with me for collaborations, inquiries, or just to chat." },
    ],
    facts: "An AI consultant with expertise in LLMs, NLP, data science, and a creative approach to problem-solving, I have worked on diverse projects from music deepfake detection to vision-assisting devices for the blind. I aim to create a meaningful impact through technology and community-driven initiatives.",
    education: [
      {
        degree: "Master's in Artificial Intelligence",
        institution: "University of Bologna, Italy",
        years: "2021-2024",
        grade: "100/110",
        thesis: "Music Generation, Singer Voice Recognition, and Deepfake Detection",
      },
      {
        degree: "Postgraduate Diploma in Early Childhood Education",
        institution: "University of Sindh, Jamshoro, Pakistan",
        years: "2018-2019",
        grade: "3.5/4.00",
      },
      {
        degree: "Bachelor's in Electronics Engineering",
        institution: "Mehran University of Engineering and Technology, Pakistan",
        years: "2014-2017",
        grade: "3.47/4.00",
        thesis: "Vision Assisting Device for the Blind using Image Processing and Computer Vision",
      },
    ],
    workHistory: [
      {
        role: "Junior Data Scientist",
        company: "Loop AI Cognitive Computing",
        years: "October 2023 – Present",
        description:
          "Collaborated on projects involving large language models (LLMs), optimization techniques, and music plagiarism detection systems. Developed algorithms and web applications for innovative AI solutions.",
      },
      {
        role: "Lecturer",
        company: "Hyderabad College of Science and Technology",
        years: "September 2018 – February 2021",
        description:
          "Delivered lectures on advanced technology topics and developed engaging educational content for undergraduate students.",
      },
      {
        role: "Senior Teacher",
        company: "The Educators School System",
        years: "April 2018 – September 2018",
        description:
          "Gained expertise in effective communication, public speaking, and student engagement while creating interactive lessons.",
      },
      {
        role: "Intern",
        company: "SUPARCO (Satellite Control Facility, Karachi)",
        years: "November 2017 – January 2018",
        description: "Monitored PAKSAT 1R transponders and antenna alignment control.",
      },
      {
        role: "Intern",
        company: "Dawlence Pvt. Ltd.",
        years: "Summer 2017",
        description: "Assisted the quality control and production line teams with inspections and process optimization.",
      },
    ],
    volunteering: [
      {
        role: "Volunteer AI Educator",
        organization: "Community Tech Initiative",
        years: "2021-2022",
        description: "Taught AI and coding to students in underserved communities.",
      },
      {
        role: "Event Coordinator",
        organization: "Women in Tech Conference",
        years: "2020",
        description: "Organized workshops promoting diversity and inclusion in technology.",
      },
    ],
    skills: {
      technical: [
        "Python (Numpy, Pandas, Scikit-learn, TensorFlow, PyTorch, Langchain)",
        "JavaScript, HTML, CSS",
        "R Programming, SQL, PostgreSQL",
        "Matlab, Power BI",
        "Audio Processing (Librosa, PyDub)",
        "Graphic Design (Adobe Suite, Canva)",
        "Gephi (Social Network Analysis)",
        "Data Visualization and Literacy",
        "Version Control (GitHub, Git)",
      ],
      soft: [
        "Excellent presentation and communication skills",
        "Team collaboration and leadership",
        "Time management and meeting deadlines",
        "Creative problem-solving",
        "Adaptability to change",
        "Cross-cultural sensitivity",
      ],
    },
    hobbies: [
      "Cycling – Enjoy city rides and exploring mountain trails.",
      "Crocheting – Crafting scarves, home decor, and creative projects.",
      "Photography – Capturing moments, especially landscapes.",
      "Lacrosse – Staying fit and sharp through team sports.",
      "Music – Experimenting with audio generation and AI-driven music analysis.",
    ],
    languages: [
      { name: "English", proficiency: "Fluent/Bilingual", icontag: "fas fa-font" },
      { name: "Italian", proficiency: "B2 (Actively Learning)", icontag: "fas fa-italic" },
      { name: "Urdu", proficiency: "Fluent/Bilingual", icontag: "fas fa-pen" },
      { name: "Sindhi", proficiency: "Native", icontag: "fas fa-book-open" },
      { name: "Hindi", proficiency: "Fluent (Spoken)", icontag: "fas fa-language" },
    ],
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I am Memoona Shah, an AI consultant and electronics engineer. With a strong technical foundation and a passion for teaching and innovation, I have worked on groundbreaking projects that merge technology with creativity. My expertise spans AI, NLP, ethical AI, and education technology.",
      "My journey began with a deep interest in technology, and over the years, I've honed my skills in machine learning, data science, and AI ethics. I believe in the transformative power of AI, especially in fields such as education, healthcare, and creative industries.",
      "In my free time, I enjoy exploring my other interests like crocheting, cycling, photography, and lacrosse. These hobbies allow me to balance my professional life with personal creativity and physical well-being.",
      "Currently, I'm part of the communications team at VC1 and collaborating with AGE (Association for Global Education) to create projects that blend AI technology with social impact, particularly in education.",
      "Through my work and personal interests, I aim to bridge the gap between technology and people, ensuring that advancements in AI benefit everyone, especially those who need it the most.",
    ],
  },
  contact: {
    email: "memoonashah78@gmail.com",
    phone: "+39 340 1935369",
    linkedin: "https://www.linkedin.com/in/memoonashah/",
    github: "https://github.com/maymunashah",
    youtube: "https://www.youtube.com/c/DeepFocuswithMemoona",
  },
  portfolio: [
    {
      name: "AI-Based Music Deepfake Detection",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
        { name: "Keras", icon: "fab fa-keras" },
        { name: "Librosa", icon: "fas fa-headphones" },
      ],
      description:
        "Developed an AI-driven solution to detect music deepfakes by analyzing audio features and patterns using machine learning algorithms.",
      outcomes: [
        { label: "Accuracy", value: "95%" },
        { label: "Data Processed", value: "10,000+ Audio Samples" },
        { label: "Training Time", value: "8 hours" },
      ],
    },
    {
      name: "Vision-Assisting Device for the Blind",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "OpenCV", icon: "fas fa-camera" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
        { name: "Raspberry Pi", icon: "fas fa-microchip" },
      ],
      description:
        "Designed a vision-assisting device for the blind using image processing, computer vision, and Raspberry Pi to detect obstacles in real-time.",
      outcomes: [
        { label: "Obstacle Detection Accuracy", value: "92%" },
        { label: "Response Time", value: "500ms" },
        { label: "User Feedback", value: "4.8/5" },
      ],
    },
    {
      name: "NLP-based Chatbot for Customer Service",
      technologies: [
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Node.js", icon: "fab fa-node" },
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "Docker", icon: "fab fa-docker" },
      ],
      description:
        "Built an NLP-based chatbot using JavaScript, Node.js, and MongoDB to automate customer service for a retail company, improving response time and efficiency.",
      outcomes: [
        { label: "Customer Queries Resolved", value: "85%" },
        { label: "Response Time", value: "3 seconds" },
        { label: "User Satisfaction", value: "4.5/5" },
      ],
    },
    {
      name: "Smart Gym Workout Generation Web App",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
        { name: "Flask", icon: "fab fa-flask" },
        { name: "JavaScript", icon: "fab fa-js" },
      ],
      description:
        "Developed a Smart Gym Workout Generation Web App with optimization and text generation capabilities to create personalized workout plans based on user input.",
      outcomes: [
        { label: "Personalized Plans Generated", value: "500+" },
        { label: "User Engagement", value: "85%" },
        { label: "Response Time", value: "2 seconds" },
      ],
    },
    {
      name: "DeepFake Singer Identification",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Keras", icon: "fab fa-keras" },
        { name: "Siamese Network", icon: "fas fa-network-wired" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
      ],
      description:
        "Developed a DeepFake Singer Identification system using Siamese networks and a multi-input ensemble model to distinguish between real and synthetic singer voices.",
      outcomes: [
        { label: "Identification Accuracy", value: "98%" },
        { label: "Training Time", value: "10 hours" },
        { label: "DeepFake Identification", value: "95%" },
      ],
    },
    {
      name: "Document-Based Q&A Chatbot with Audio Transcription",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Natural Language Toolkit", icon: "fas fa-cogs" },
        { name: "Google Speech API", icon: "fab fa-google" },
        { name: "Flask", icon: "fab fa-flask" },
      ],
      description:
        "Created a document-based question answering chatbot with capabilities for audio transcription and text-to-audio response, making knowledge accessible in audio form.",
      outcomes: [
        { label: "Questions Answered", value: "95%" },
        { label: "Accuracy", value: "92%" },
        { label: "User Feedback", value: "4.7/5" },
      ],
    },
    {
      name: "Email Classification with LLMs",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
        { name: "Keras", icon: "fab fa-keras" },
        { name: "NLTK", icon: "fas fa-cogs" },
      ],
      description:
        "Built an email classification system using large language models, featuring sentiment analysis and priority tagging for efficient inbox management.",
      outcomes: [
        { label: "Accuracy", value: "90%" },
        { label: "Emails Processed", value: "50,000+" },
        { label: "Classification Speed", value: "500ms" },
      ],
    },
    {
      name: "Sales Forecasting & Inventory Optimization",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "NumPy", icon: "fab fa-numpy" },
        { name: "Scikit-learn", icon: "fab fa-scikit-learn" },
        { name: "Pandas", icon: "fab fa-pandas" },
      ],
      description:
        "Developed a sales forecasting and inventory optimization tool for an interior design brand, improving stock management and demand prediction.",
      outcomes: [
        { label: "Forecasting Accuracy", value: "88%" },
        { label: "Inventory Optimization", value: "20% Improvement" },
        { label: "Deployment Time", value: "2 weeks" },
      ],
    },
    {
      name: "AutoML Low Code Chatbot Builder",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "AutoML", icon: "fas fa-cogs" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
        { name: "Flask", icon: "fab fa-flask" },
      ],
      description:
        "Created an AutoML-based low-code platform for easy chatbot creation, including parameter formatting for quick model deployment.",
      outcomes: [
        { label: "Chatbots Built", value: "200+" },
        { label: "User Adoption", value: "80%" },
        { label: "Deployment Speed", value: "5 minutes" },
      ],
    },
    {
      name: "Explainable Fake News Detection Survey",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "SciKit-Learn", icon: "fab fa-sklearn" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
        { name: "Natural Language Processing", icon: "fas fa-book" },
      ],
      description:
        "Conducted a survey on explainable fake news detection, presented at an AI Camp in Cyprus, focusing on transparent AI models for news verification.",
      outcomes: [
        { label: "Survey Participation", value: "100+" },
        { label: "Fake News Detection Accuracy", value: "91%" },
        { label: "Conference Feedback", value: "4.8/5" },
      ],
    },
    {
      name: "NLP Stance Prediction for Human Values",
      technologies: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Scikit-learn", icon: "fab fa-scikit-learn" },
        { name: "NLP", icon: "fas fa-language" },
        { name: "TensorFlow", icon: "fab fa-tensorflow" },
      ],
      description:
        "Developed an NLP-based approach for stance prediction in analyzing human values in written arguments, as part of an NLP course project.",
      outcomes: [
        { label: "Prediction Accuracy", value: "85%" },
        { label: "Dataset Size", value: "20,000+ samples" },
        { label: "Model Performance", value: "F1-score: 0.87" },
      ],
    },
  ],
};

export default appData;
