const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Chatbot logic: Simple responses
const responses = {
  "hello": "Hi! Welcome to my portfolio. You can ask me about my services, skills, projects, certificates, education, experience, and contact information.",
  "about": "I’m a software developer with a focus on frontend development and chatbot integrations.",
  "projects": "You can view my projects in the Projects section of this website.",
  "Contact": "You can reach out to me via the Contact page for any inquiries.",
  "portfolio": "This portfolio showcases my skills in web development, React, and Node.js!",

  "about": "I’m a software developer specializing in frontend development with React, Node.js, and chatbot integrations.",
  
  "projects": "You can view my projects in the Projects section. I've built various applications, including e-commerce sites, Netflix clone, and games.",
  
  "contact information": "You can reach out to me via the Contact page for any inquiries. Alternatively, you can connect with me through Instagram, LinkedIn, and GitHub—just scroll down to the 'Let's Connect' section.",
  
  "skills": "My core skills include React, Node.js, JavaScript, HTML, CSS, and backend integration. I’m also familiar with Angular, C++, and Java for application development.",
  
  "education": "I have a Bachelor’s degree in Engineering with a CGPA of 8.57.",
  
  "certificates": "I’ve completed several certificates, including:\n1. Computer Science MetaBootcamp (Udemy)\n2. Data Structures and OOP with C++ (Udemy)\n3. Mastering C & C++ Programming (Udemy).",
  
  "portfolio": "This portfolio showcases my projects and skills in web development, React, Node.js, and more.",
  
  "experience": "I am currently a fresher, but I am actively involved in freelancing projects.",
  
  "services": "I offer services in web development, frontend and backend integration, chatbot development, and more.",
  
  "resume": "You can download my resume from the Resume section for a detailed view of my education, experience, and skills."

};

app.post('/api/chat', (req, res) => {
  console.log("Received message:", req.body.message);
  const userMessage = req.body.message.toLowerCase();
  let reply = responses["hello"]; // Default reply

  for (const key in responses) {
    if (userMessage.includes(key)) {
      reply = responses[key];
      break;
    }
  }
  res.json({ reply });
});

// Serve React frontend
// Serve React frontend (use correct path for build folder in client directory)
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
