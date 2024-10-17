import React, { useState } from 'react';
import './LearningCenter.css';

const technologies = [
  {
    name: 'C',
    description: 'A general-purpose programming language.',
    futureScope: 'Widely used in systems programming.',
    logo: '/downloads/1.png', // Add the logo path here
    resources: [
      { title: 'C Programming Language - Book', url: '/downloads/c-programming.pdf' },
      { title: 'C Notes - PDF', url: '/downloads/c-notes.pdf' },
    ],
  },
  {
    name: 'C++',
    description: 'An extension of C with object-oriented features.',
    futureScope: 'Used in game development and high-performance applications.',
    logo: '/downloads/2.png',
    resources: [
      { title: 'C++ Primer - Book', url: '/downloads/cpp-primer.pdf' },
      { title: 'C++ Notes - PDF', url: '/downloads/cpp-notes.pdf' },
    ],
  },
  {
    name: 'Java',
    description: 'A versatile, high-level programming language.',
    futureScope: 'Key in enterprise applications and Android development.',
    logo: '/downloads/3.png',
    resources: [
      { title: 'Effective Java - Book', url: '/downloads/effective-java.pdf' },
      { title: 'Java Notes - PDF', url: '/downloads/java-notes.pdf' },
    ],
  },
  {
    name: 'Python',
    description: 'A high-level, interpreted programming language.',
    futureScope: 'Popular in data science and web development.',
    logo: '/downloads/4.png',
    resources: [
      { title: 'Learning Python - Book', url: '/downloads/learning-python.pdf' },
      { title: 'Python Notes - PDF', url: '/downloads/python-notes.pdf' },
    ],
  },
  {
    name: 'JavaScript',
    description: 'The language of the web, enabling interactive web pages.',
    futureScope: 'Crucial for web development and increasingly used in backend.',
    logo: '/downloads/5.png',
    resources: [
      { title: 'Eloquent JavaScript - Book', url: '/downloads/eloquent-javascript.pdf' },
      { title: 'JavaScript Notes - PDF', url: '/downloads/javascript-notes.pdf' },
    ],
  },
  {
    name: 'Ruby',
    description: 'A dynamic, open-source programming language.',
    futureScope: 'Used primarily in web development with Ruby on Rails.',
    logo: '/downloads/6.png',
    resources: [
      { title: 'Programming Ruby - Book', url: '/downloads/programming-ruby.pdf' },
      { title: 'Ruby Notes - PDF', url: '/downloads/ruby-notes.pdf' },
    ],
  },
  {
    name: 'Go',
    description: 'An open-source programming language that makes it easy to build simple, reliable, and efficient software.',
    futureScope: 'Growing popularity in cloud and distributed systems.',
    logo: '/downloads/7.png',
    resources: [
      { title: 'The Go Programming Language - Book', url: '/downloads/go-programming.pdf' },
      { title: 'Go Notes - PDF', url: '/downloads/go-notes.pdf' },
    ],
  },
  {
    name: 'Swift',
    description: 'A powerful and intuitive programming language for iOS and macOS.',
    futureScope: 'Essential for iOS app development.',
    logo: '/downloads/8.png',
    resources: [
      { title: 'The Swift Programming Language - Book', url: '/downloads/swift-programming.pdf' },
      { title: 'Swift Notes - PDF', url: '/downloads/swift-notes.pdf' },
    ],
  },
  {
    name: 'PHP',
    description: 'A popular general-purpose scripting language.',
    futureScope: 'Widely used for server-side web development.',
    logo: '/downloads/9.png',
    resources: [
      { title: 'PHP & MySQL Web Development - Book', url: '/downloads/php-mysql.pdf' },
      { title: 'PHP Notes - PDF', url: '/downloads/php-notes.pdf' },
    ],
  },
  {
    name: 'SQL',
    description: 'A standard language for accessing and manipulating databases.',
    futureScope: 'Essential for data management and analytics.',
    logo: '/downloads/10.png',
    resources: [
      { title: 'SQL in 10 Minutes - Book', url: '/downloads/sql.pdf' },
      { title: 'SQL Notes - PDF', url: '/downloads/sql-notes.pdf' },
    ],
  },
  {
    name: 'Kotlin',
    description: 'A modern programming language for Android development.',
    futureScope: 'Growing in popularity for Android apps.',
    logo: '/downloads/11.png',
    resources: [
      { title: 'Kotlin Programming: The Big Nerd Ranch Guide - Book', url: '/downloads/kotlin-programming.pdf' },
      { title: 'Kotlin Notes - PDF', url: '/downloads/kotlin-notes.pdf' },
    ],
  },
  {
    name: 'Machine Learning',
    description: 'A subset of AI focused on building systems that learn from data.',
    futureScope: 'Critical for data analysis and AI applications.',
    logo: '/downloads/12.png',
    resources: [
      { title: 'Hands-On Machine Learning with Scikit-Learn - Book', url: '/downloads/hands-on-machine-learning.pdf' },
      { title: 'ML Notes - PDF', url: '/downloads/ml-notes.pdf' },
    ],
  },
  {
    name: 'Artificial Intelligence',
    description: 'Simulating human intelligence in machines.',
    futureScope: 'Key role in automation and intelligent systems.',
    logo: '/downloads/13.png',
    resources: [
      { title: 'Artificial Intelligence: A Modern Approach - Book', url: '/downloads/ai-modern-approach.pdf' },
      { title: 'AI Notes - PDF', url: '/downloads/ai-notes.pdf' },
    ],
  },
  {
    name: 'Data Science',
    description: 'A field that uses scientific methods to analyze and interpret complex data.',
    futureScope: 'High demand in analytics and decision-making.',
    logo: '/downloads/datasc.png',
    resources: [
      { title: 'Data Science from Scratch - Book', url: '/downloads/data-science-from-scratch.pdf' },
      { title: 'Data Science Notes - PDF', url: '/downloads/data-science-notes.pdf' },
    ],
  },
  {
    name: 'Cybersecurity',
    description: 'The practice of protecting systems from digital attacks.',
    futureScope: 'Increasing importance in protecting data and infrastructure.',
    logo: '/downloads/14.png',
    resources: [
      { title: 'The Web Application Hacker\'s Handbook - Book', url: '/downloads/web-app-hackers-handbook.pdf' },
      { title: 'Cybersecurity Notes - PDF', url: '/downloads/cybersecurity-notes.pdf' },
    ],
  },
  {
    name: 'Blockchain',
    description: 'A decentralized ledger technology.',
    futureScope: 'Rising relevance in finance and secure transactions.',
    logo: '/downloads/15.png',
    resources: [
      { title: 'Mastering Bitcoin - Book', url: '/downloads/mastering-bitcoin.pdf' },
      { title: 'Blockchain Notes - PDF', url: '/downloads/blockchain-notes.pdf' },
    ],
  },
];

const LearningCenter = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleCardClick = (tech) => {
    setSelectedTech(tech);
  };

  const handleClose = () => {
    setSelectedTech(null);
  };

  return (
    <div className="learning-center">
      <h2>Learning Center</h2>
      <p>Explore resources for various programming languages and technologies.</p>
      <div className="card-container">
        {technologies.map((tech, index) => (
          <div className="card" key={index} onClick={() => handleCardClick(tech)}>
            <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" /> {/* Add logo image */}
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
            <button className="card-btn">Learn More</button>
          </div>
        ))}
      </div>

      {selectedTech && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h3>{selectedTech.name}</h3>
            <p><strong>Description:</strong> {selectedTech.description}</p>
            <p><strong>Future Scope:</strong> {selectedTech.futureScope}</p>
            <h4>Resources:</h4>
            <ul>
              {selectedTech.resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.url} download>
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningCenter;
