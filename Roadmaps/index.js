const roleRoadmaps = {
  frontend: [
    { title: 'HTML', topics: ['Basics', 'Forms', 'Semantic HTML', 'Accessibility', 'Web Performance', 'Custom Elements', 'HTML5 APIs'] },
    { title: 'CSS', topics: ['Selectors', 'Box Model', 'Flexbox', 'Grid', 'Animations', 'CSS Variables', 'Media Queries', 'SASS/SCSS'] },
    { title: 'JavaScript', topics: ['Syntax', 'DOM Manipulation', 'ES6+', 'Events', 'Asynchronous JavaScript', 'APIs and Fetch', 'Modules', 'Error Handling'] },
    { title: 'React', topics: ['Components', 'Props', 'State Management', 'Hooks', 'React Router', 'Context API', 'Redux', 'Testing with Jest'] }
  ],
  backend: [
    { title: 'Node.js', topics: ['Basics', 'Asynchronous Programming', 'Express', 'REST APIs', 'Socket.IO', 'Authentication', 'Testing', 'GraphQL'] },
    { title: 'Databases', topics: ['SQL Basics', 'Joins and Relationships', 'Indexing', 'NoSQL Basics', 'Aggregation Pipelines', 'Replication and Sharding', 'Database Security'] }
  ],
  fullstack: [
    { title: 'Frontend', topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'] },
    { title: 'Backend', topics: ['Node.js', 'Databases', 'API Design', 'Server-side Rendering (SSR)', 'DevOps Basics'] }
  ],
  ai: [
    { title: 'Python', topics: ['Basics', 'Libraries: NumPy, Pandas', 'Data Cleaning', 'Matplotlib', 'Scikit-learn'] },
    { title: 'ML', topics: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning with TensorFlow/PyTorch', 'Model Deployment'] },
    { title: 'NLP', topics: ['Text Preprocessing', 'Tokenization', 'Transformers (BERT, GPT)', 'Sentiment Analysis', 'Named Entity Recognition (NER)'] }
  ],
  aws: [
    { title: 'Basics', topics: ['EC2', 'S3', 'RDS', 'IAM', 'AWS CLI'] },
    { title: 'Networking', topics: ['VPC', 'Load Balancers', 'Route 53', 'Security Groups', 'CloudFront'] },
    { title: 'DevOps', topics: ['CI/CD with CodePipeline', 'Serverless with Lambda', 'CloudWatch', 'Infrastructure as Code (IaC) using Terraform'] }
  ],
  cybersecurity: [
    { title: 'Network Security', topics: ['Encryption Techniques', 'Firewall Configuration', 'VPN Setup', 'Intrusion Detection Systems (IDS)', 'Penetration Testing'] },
    { title: 'Application Security', topics: ['Secure Coding Practices', 'Authentication Mechanisms', 'Session Management', 'Web Application Firewalls (WAF)'] }
  ],
  game_developer: [
    { title: 'C++', topics: ['Syntax', 'STL', 'Memory Management', 'Game Physics', 'Rendering Engines', 'Collision Detection'] },
    { title: 'Unity', topics: ['2D/3D Game Development', 'C# Scripting', 'Lighting and Shading', 'Physics Systems', 'Game Optimization'] }
  ],
  data_scientist: [
    { title: 'Python', topics: ['Data Manipulation', 'Statistics', 'Machine Learning Algorithms', 'EDA (Exploratory Data Analysis)'] },
    { title: 'R', topics: ['Statistical Modeling', 'Data Visualization', 'Hypothesis Testing', 'Time Series Analysis'] }
  ],
  blockchain: [
    { title: 'Basics', topics: ['Cryptography', 'Consensus Mechanisms', 'Blockchain Architecture', 'Smart Contracts'] },
    { title: 'Ethereum', topics: ['DApp Development', 'Solidity Basics', 'Truffle Suite', 'ERC Standards', 'Interacting with Smart Contracts'] }
  ]
};

const skillRoadmaps = {
  python: [
    { title: 'Basics', topics: ['Variables', 'Data Types', 'Functions', 'Loops', 'OOP Concepts', 'Error Handling'] },
    { title: 'Libraries', topics: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Requests', 'BeautifulSoup'] },
    { title: 'Machine Learning', topics: ['Regression Models', 'Classification Models', 'Clustering', 'Model Evaluation', 'Deep Learning Basics'] }
  ],
  java: [
    { title: 'Syntax', topics: ['Data Types', 'Functions', 'Loops', 'Classes', 'Inheritance', 'Polymorphism'] },
    { title: 'Frameworks', topics: ['Spring Basics', 'Spring Boot', 'Hibernate', 'JPA', 'Microservices'] },
    { title: 'Advanced Topics', topics: ['Multithreading', 'Garbage Collection', 'Collections Framework', 'Java Streams'] }
  ],
  cplusplus: [
    { title: 'Basics', topics: ['Syntax', 'Pointers', 'STL', 'Classes and Objects', 'Inheritance', 'Polymorphism'] },
    { title: 'Game Development', topics: ['Rendering with OpenGL', 'Physics Engines', 'AI for Games', 'Optimization Techniques'] }
  ],
  dsa: [
    { title: 'Arrays', topics: ['Linear Search', 'Binary Search', 'Sorting Algorithms', 'Two Pointers'] },
    { title: 'Linked Lists', topics: ['Singly Linked List', 'Doubly Linked List', 'Circular Linked List', 'Reversing a Linked List'] },
    { title: 'Trees', topics: ['Binary Trees', 'Binary Search Trees', 'AVL Trees', 'Trie'] },
    { title: 'Graphs', topics: ['DFS', 'BFS', 'Shortest Path Algorithms (Dijkstra)', 'Minimum Spanning Tree (Kruskal/Prim)'] }
  ],
  c: [
    { title: 'Basics', topics: ['Variables', 'Functions', 'Pointers', 'File I/O', 'Memory Allocation'] },
    { title: 'System Programming', topics: ['Process Management', 'Inter-Process Communication', 'Threads and Concurrency'] }
  ],
  csharp: [
    { title: 'Basics', topics: ['Variables', 'Functions', 'OOP Concepts', 'LINQ', 'File I/O'] },
    { title: 'Game Development', topics: ['Unity Basics', 'Physics Systems', 'Game Loop', '3D Development'] }
  ],
  swift: [
    { title: 'Syntax', topics: ['Variables', 'Functions', 'Classes', 'Enums', 'Protocols', 'Extensions'] },
    { title: 'iOS Development', topics: ['UIKit Basics', 'Auto Layout', 'Core Data', 'SwiftUI', 'Networking with URLSession'] }
  ]
};

// Function to Display Category Roadmaps
function showCategory(category) {
  const container = document.getElementById('roadmap-container');
  container.innerHTML = '';
  document.getElementById('details-container').style.display = 'none';

  const roadmaps = category === 'role' ? roleRoadmaps : skillRoadmaps;
  Object.keys(roadmaps).forEach(key => {
      const card = document.createElement('div');
      card.className = 'roadmap-card';
      card.innerHTML = `<h3>${key.charAt(0).toUpperCase() + key.slice(1)}</h3>`;
      card.onclick = () => showDetails(key, roadmaps[key]);
      container.appendChild(card);
  });
}

// Function to Show Details
function showDetails(title, topics) {
  const detailsTitle = document.getElementById('details-title');
  const detailsContent = document.getElementById('details-content');
  document.getElementById('details-container').style.display = 'block';

  detailsTitle.innerText = `${title.charAt(0).toUpperCase() + title.slice(1)} Roadmap`;

  // Display topics with subtopics
  detailsContent.innerHTML = `<ul>${topics.map(topic => `
      <li>
        <strong>${topic.title}</strong>
        <ul>${topic.topics.map(subtopic => `<li>${subtopic}</li>`).join('')}</ul>
      </li>`).join('')}</ul>`;
}
