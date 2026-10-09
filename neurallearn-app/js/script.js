/* ============================================================
   NEURALLEARN — APPLICATION SCRIPT
   Sections:
   1. Course Data
   2. Storage Helpers (localStorage)
   3. State Initialization
   4. Derived Data Helpers (progress, saved, lessons)
   5. History Logging
   6. Navigation (sidebar SPA + back button + browser history)
   7. Course Card / List Rendering
   8. Dashboard
   9. My Learning
   10. Explore (search / filter / sort)
   11. Course Detail (lessons, save, mark complete)
   12. Roadmap
   13. Planly (tasks)
   14. Notes
   15. Analytics
   16. History Page
   17. Saved Courses
   18. Profile
   19. Settings
   20. Recommendation Engine
   21. Chatbot
   22. Init
   ============================================================ */

/* ==================== 1. COURSE DATA ==================== */
const coursesDatabase = 
[
    {
        "id": 1,
        "title": "Introduction to Programming",
        "category": "Programming",
        "level": "Beginner",
        "duration": "10 hours",
        "rating": 4.7,
        "students": 142000,
        "description": "A gentle first step into programming logic, covering variables, control flow and problem solving before you pick a language.",
        "instructor": "Marcus Webb",
        "skills": [
            "Logic",
            "Problem Solving",
            "Pseudocode"
        ],
        "prerequisites": [],
        "topics": [
            "What Programming Really Is",
            "Variables & Data",
            "Control Flow Basics",
            "Writing Your First Algorithm",
            "Debugging Mindset",
            "Mini Project: Simple Calculator"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        "youtubeSearch": "Introduction to Programming tutorial"
    },
    {
        "id": 2,
        "title": "Complete Python Bootcamp: From Zero to Hero",
        "category": "Programming",
        "level": "Beginner",
        "duration": "22 hours",
        "rating": 4.8,
        "students": 125000,
        "description": "Learn Python from the ground up and build real applications, from scripts to small games, one concept at a time.",
        "instructor": "Priya Sharma",
        "skills": [
            "Python",
            "Scripting",
            "OOP Basics"
        ],
        "prerequisites": [
            1
        ],
        "topics": [
            "Setting Up Python",
            "Variables & Data Types",
            "Operators & Expressions",
            "Conditional Statements",
            "Loops",
            "Functions",
            "Lists & Dictionaries",
            "File Handling",
            "Intro to OOP",
            "Final Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        "youtubeSearch": "Complete Python Bootcamp: From Zero to Hero tutorial"
    },
    {
        "id": 3,
        "title": "HTML5 & CSS3 Crash Course",
        "category": "Programming",
        "level": "Beginner",
        "duration": "8 hours",
        "rating": 4.6,
        "students": 98000,
        "description": "Build structured, styled web pages from scratch using modern HTML5 and CSS3, including responsive layouts.",
        "instructor": "Daniel Okafor",
        "skills": [
            "HTML",
            "CSS",
            "Responsive Design"
        ],
        "prerequisites": [],
        "topics": [
            "HTML Document Structure",
            "Text & Media Elements",
            "Forms & Tables",
            "CSS Selectors & Box Model",
            "Flexbox Layout",
            "Responsive Media Queries",
            "Building a Landing Page"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        "youtubeSearch": "HTML5 & CSS3 Crash Course tutorial"
    },
    {
        "id": 4,
        "title": "Git & GitHub for Beginners",
        "category": "Cloud & DevOps",
        "level": "Beginner",
        "duration": "6 hours",
        "rating": 4.7,
        "students": 87000,
        "description": "Master version control fundamentals so you can track changes, collaborate, and manage real codebases with confidence.",
        "instructor": "Elena Rossi",
        "skills": [
            "Git",
            "GitHub",
            "Version Control"
        ],
        "prerequisites": [],
        "topics": [
            "Why Version Control",
            "Git Basics: init, add, commit",
            "Branching & Merging",
            "Working with Remotes",
            "Pull Requests",
            "Resolving Merge Conflicts"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        "youtubeSearch": "Git & GitHub for Beginners tutorial"
    },
    {
        "id": 5,
        "title": "C Programming: From Basics to Systems",
        "category": "Programming",
        "level": "Beginner",
        "duration": "16 hours",
        "rating": 4.5,
        "students": 54000,
        "description": "Understand how computers really work by learning C, covering memory, pointers and low-level programming.",
        "instructor": "James Park",
        "skills": [
            "C",
            "Pointers",
            "Memory Management"
        ],
        "prerequisites": [],
        "topics": [
            "Compiling & Running C",
            "Variables & Types",
            "Control Structures",
            "Functions & Scope",
            "Arrays & Strings",
            "Pointers",
            "Structs",
            "Dynamic Memory"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        "youtubeSearch": "C Programming: From Basics to Systems tutorial"
    },
    {
        "id": 6,
        "title": "Data Structures & Algorithms Full Course",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "40 hours",
        "rating": 4.8,
        "students": 132000,
        "description": "A complete tour of core data structures and algorithms every developer needs for interviews and real-world systems.",
        "instructor": "Aisha Rahman",
        "skills": [
            "Data Structures",
            "Algorithms",
            "Complexity Analysis"
        ],
        "prerequisites": [
            2
        ],
        "topics": [
            "Big-O Notation",
            "Arrays & Strings",
            "Linked Lists",
            "Stacks & Queues",
            "Trees",
            "Graphs",
            "Sorting Algorithms",
            "Searching Algorithms",
            "Recursion",
            "Dynamic Programming Intro"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Data Structures & Algorithms Full Course tutorial"
    },
    {
        "id": 7,
        "title": "Arrays & Strings: DSA Foundations",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "10 hours",
        "rating": 4.6,
        "students": 61000,
        "description": "Deep dive into array and string manipulation patterns that show up constantly in coding interviews.",
        "instructor": "Tom Fischer",
        "skills": [
            "Arrays",
            "Strings",
            "Two Pointers"
        ],
        "prerequisites": [
            6
        ],
        "topics": [
            "Array Basics & Traversal",
            "Two-Pointer Technique",
            "Sliding Window",
            "String Manipulation",
            "Sub-array Problems",
            "Practice Set"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Arrays & Strings: DSA Foundations tutorial"
    },
    {
        "id": 8,
        "title": "Linked Lists, Stacks & Queues",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "9 hours",
        "rating": 4.6,
        "students": 45000,
        "description": "Learn how linear data structures work under the hood and when to reach for each one.",
        "instructor": "Nadia Volkov",
        "skills": [
            "Linked Lists",
            "Stacks",
            "Queues"
        ],
        "prerequisites": [
            7
        ],
        "topics": [
            "Singly Linked Lists",
            "Doubly Linked Lists",
            "Stack Operations",
            "Queue & Deque",
            "Real-World Use Cases",
            "Practice Set"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Linked Lists, Stacks & Queues tutorial"
    },
    {
        "id": 9,
        "title": "Hashing and Hash Tables Explained",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "7 hours",
        "rating": 4.5,
        "students": 38000,
        "description": "Understand hash functions, collision handling, and how to use hashing to solve problems in O(1) time.",
        "instructor": "Ravi Kumar",
        "skills": [
            "Hashing",
            "Hash Maps",
            "Collision Handling"
        ],
        "prerequisites": [
            7
        ],
        "topics": [
            "What is Hashing",
            "Building a Hash Table",
            "Collision Resolution",
            "Hash Maps in Practice",
            "Common Interview Patterns"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Hashing and Hash Tables Explained tutorial"
    },
    {
        "id": 10,
        "title": "Sorting & Searching Algorithms",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "8 hours",
        "rating": 4.6,
        "students": 42000,
        "description": "Compare classic sorting and searching algorithms and learn to choose the right one for the job.",
        "instructor": "Laura Bennett",
        "skills": [
            "Sorting",
            "Searching",
            "Complexity"
        ],
        "prerequisites": [
            7
        ],
        "topics": [
            "Bubble & Insertion Sort",
            "Merge Sort",
            "Quick Sort",
            "Binary Search",
            "Search Variants",
            "Comparing Trade-offs"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Sorting & Searching Algorithms tutorial"
    },
    {
        "id": 11,
        "title": "Trees and Binary Search Trees",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "11 hours",
        "rating": 4.7,
        "students": 39000,
        "description": "Learn tree traversal, binary search trees, and balancing concepts used across databases and file systems.",
        "instructor": "Carlos Mendes",
        "skills": [
            "Trees",
            "BST",
            "Traversals"
        ],
        "prerequisites": [
            8
        ],
        "topics": [
            "Tree Terminology",
            "Binary Trees",
            "Tree Traversals",
            "Binary Search Trees",
            "Balanced Trees Overview",
            "Practice Problems"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Trees and Binary Search Trees tutorial"
    },
    {
        "id": 12,
        "title": "Recursion & Backtracking Mastery",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "9 hours",
        "rating": 4.6,
        "students": 33000,
        "description": "Build intuition for recursive thinking and backtracking through classic puzzles like N-Queens and permutations.",
        "instructor": "Yuki Tanaka",
        "skills": [
            "Recursion",
            "Backtracking"
        ],
        "prerequisites": [
            7
        ],
        "topics": [
            "Recursive Thinking",
            "Base Cases & Recursion Trees",
            "Backtracking Basics",
            "Permutations & Combinations",
            "N-Queens Problem",
            "Practice Set"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Recursion & Backtracking Mastery tutorial"
    },
    {
        "id": 13,
        "title": "Graph Algorithms Deep Dive",
        "category": "DSA",
        "level": "Advanced",
        "duration": "14 hours",
        "rating": 4.7,
        "students": 29000,
        "description": "Explore graph representations, BFS/DFS, shortest paths and how graphs power maps, networks and recommendations.",
        "instructor": "Omar Farouk",
        "skills": [
            "Graphs",
            "BFS/DFS",
            "Shortest Path"
        ],
        "prerequisites": [
            11
        ],
        "topics": [
            "Graph Representations",
            "BFS & DFS",
            "Shortest Path (Dijkstra)",
            "Minimum Spanning Trees",
            "Topological Sort",
            "Practice Set"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Graph Algorithms Deep Dive tutorial"
    },
    {
        "id": 14,
        "title": "Greedy Algorithms in Practice",
        "category": "DSA",
        "level": "Advanced",
        "duration": "6 hours",
        "rating": 4.4,
        "students": 21000,
        "description": "Learn when a greedy choice actually leads to an optimal solution, with classic examples and proofs of correctness.",
        "instructor": "Grace Liu",
        "skills": [
            "Greedy Algorithms"
        ],
        "prerequisites": [
            10
        ],
        "topics": [
            "Greedy Strategy Basics",
            "Activity Selection",
            "Huffman Coding",
            "Fractional Knapsack",
            "When Greedy Fails"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Greedy Algorithms in Practice tutorial"
    },
    {
        "id": 15,
        "title": "Dynamic Programming: Patterns & Problems",
        "category": "DSA",
        "level": "Advanced",
        "duration": "16 hours",
        "rating": 4.8,
        "students": 47000,
        "description": "Master the DP mindset with recognizable patterns you can reuse across dozens of interview questions.",
        "instructor": "Dr. Sarah Chen",
        "skills": [
            "Dynamic Programming"
        ],
        "prerequisites": [
            12
        ],
        "topics": [
            "Memoization vs Tabulation",
            "1D DP Patterns",
            "2D DP Patterns",
            "Knapsack Problems",
            "Longest Common Subsequence",
            "Practice Set"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Dynamic Programming: Patterns & Problems tutorial"
    },
    {
        "id": 16,
        "title": "Object-Oriented Programming in Java",
        "category": "Programming",
        "level": "Intermediate",
        "duration": "14 hours",
        "rating": 4.6,
        "students": 52000,
        "description": "Learn classes, inheritance, polymorphism and encapsulation by building small Java applications.",
        "instructor": "Marcus Webb",
        "skills": [
            "Java",
            "OOP"
        ],
        "prerequisites": [
            1
        ],
        "topics": [
            "Classes & Objects",
            "Constructors",
            "Inheritance",
            "Polymorphism",
            "Interfaces & Abstraction",
            "Mini Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        "youtubeSearch": "Object-Oriented Programming in Java tutorial"
    },
    {
        "id": 17,
        "title": "Java Programming Masterclass",
        "category": "Programming",
        "level": "Intermediate",
        "duration": "26 hours",
        "rating": 4.7,
        "students": 71000,
        "description": "A thorough tour of the Java language and ecosystem, from syntax to building small backend services.",
        "instructor": "Priya Sharma",
        "skills": [
            "Java",
            "Collections",
            "Exception Handling"
        ],
        "prerequisites": [
            1
        ],
        "topics": [
            "Java Syntax Refresher",
            "Collections Framework",
            "Exception Handling",
            "Generics",
            "File I/O",
            "Multithreading Basics",
            "Capstone Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
        "youtubeSearch": "Java Programming Masterclass tutorial"
    },
    {
        "id": 18,
        "title": "C++ for Competitive Programming",
        "category": "DSA",
        "level": "Advanced",
        "duration": "18 hours",
        "rating": 4.6,
        "students": 26000,
        "description": "Sharpen your C++ and algorithmic skills for coding contests and technical interviews.",
        "instructor": "Daniel Okafor",
        "skills": [
            "C++",
            "STL",
            "Competitive Programming"
        ],
        "prerequisites": [
            6
        ],
        "topics": [
            "C++ Essentials for CP",
            "STL Containers",
            "Fast I/O Techniques",
            "Common CP Patterns",
            "Contest Practice"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "C++ for Competitive Programming tutorial"
    },
    {
        "id": 19,
        "title": "Modern JavaScript from the Beginning",
        "category": "Web Development",
        "level": "Beginner",
        "duration": "21 hours",
        "rating": 4.7,
        "students": 101000,
        "description": "Learn modern JavaScript (ES6+) from scratch and build interactive projects along the way.",
        "instructor": "Elena Rossi",
        "skills": [
            "JavaScript",
            "DOM",
            "ES6+"
        ],
        "prerequisites": [
            3
        ],
        "topics": [
            "JS Fundamentals",
            "Functions & Scope",
            "Arrays & Objects",
            "DOM Manipulation",
            "Events",
            "Async JS & Fetch",
            "ES6+ Features",
            "Mini Projects"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "Modern JavaScript from the Beginning tutorial"
    },
    {
        "id": 20,
        "title": "TypeScript for JavaScript Developers",
        "category": "Web Development",
        "level": "Intermediate",
        "duration": "8 hours",
        "rating": 4.6,
        "students": 34000,
        "description": "Add static types to your JavaScript projects and catch bugs before they ever hit production.",
        "instructor": "James Park",
        "skills": [
            "TypeScript",
            "Type Safety"
        ],
        "prerequisites": [
            19
        ],
        "topics": [
            "Why TypeScript",
            "Basic Types",
            "Interfaces & Types",
            "Generics",
            "Working with a Real Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "TypeScript for JavaScript Developers tutorial"
    },
    {
        "id": 21,
        "title": "Advanced CSS: Flexbox, Grid & Animations",
        "category": "Web Development",
        "level": "Intermediate",
        "duration": "9 hours",
        "rating": 4.7,
        "students": 44000,
        "description": "Go beyond the basics with advanced layout systems and smooth, performant CSS animations.",
        "instructor": "Aisha Rahman",
        "skills": [
            "CSS Grid",
            "Flexbox",
            "Animations"
        ],
        "prerequisites": [
            3
        ],
        "topics": [
            "Flexbox Deep Dive",
            "CSS Grid Layout",
            "Responsive Patterns",
            "Transitions & Animations",
            "Building a Real Layout"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "Advanced CSS: Flexbox, Grid & Animations tutorial"
    },
    {
        "id": 22,
        "title": "The Complete Web Developer Bootcamp",
        "category": "Web Development",
        "level": "Intermediate",
        "duration": "65 hours",
        "rating": 4.9,
        "students": 215000,
        "description": "Become a full-stack web developer with one course covering HTML, CSS, JavaScript, Node, React and MongoDB.",
        "instructor": "Tom Fischer",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "React"
        ],
        "prerequisites": [
            3,
            19
        ],
        "topics": [
            "Frontend Foundations",
            "JavaScript for the Web",
            "Node & Express Basics",
            "Working with MongoDB",
            "Building a Full Stack App",
            "Deployment",
            "Capstone Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "The Complete Web Developer Bootcamp tutorial"
    },
    {
        "id": 23,
        "title": "React - The Complete Guide",
        "category": "Web Development",
        "level": "Intermediate",
        "duration": "48 hours",
        "rating": 4.8,
        "students": 156000,
        "description": "Dive into React from scratch: components, hooks, routing, state management and modern app patterns.",
        "instructor": "Nadia Volkov",
        "skills": [
            "React",
            "Hooks",
            "State Management"
        ],
        "prerequisites": [
            19
        ],
        "topics": [
            "React Fundamentals",
            "Components & Props",
            "State & Hooks",
            "Effects & Lifecycle",
            "React Router",
            "Context & State Management",
            "Building a Real App"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "React - The Complete Guide tutorial"
    },
    {
        "id": 24,
        "title": "Node.js API Development",
        "category": "Web Development",
        "level": "Intermediate",
        "duration": "18 hours",
        "rating": 4.6,
        "students": 45000,
        "description": "Build scalable REST APIs with Node.js, Express, MongoDB and authentication best practices.",
        "instructor": "Ravi Kumar",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "prerequisites": [
            19
        ],
        "topics": [
            "Node.js Basics",
            "Building with Express",
            "Connecting MongoDB",
            "Authentication & JWT",
            "Error Handling",
            "Deploying an API"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "Node.js API Development tutorial"
    },
    {
        "id": 25,
        "title": "Express.js: Building REST APIs",
        "category": "Web Development",
        "level": "Intermediate",
        "duration": "10 hours",
        "rating": 4.5,
        "students": 28000,
        "description": "Focus in on Express.js patterns for structuring clean, maintainable REST APIs.",
        "instructor": "Laura Bennett",
        "skills": [
            "Express.js",
            "REST APIs"
        ],
        "prerequisites": [
            24
        ],
        "topics": [
            "Express Routing",
            "Middleware Patterns",
            "Request Validation",
            "Error Handling",
            "Testing APIs"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "Express.js: Building REST APIs tutorial"
    },
    {
        "id": 26,
        "title": "Full Stack Development with MERN",
        "category": "Web Development",
        "level": "Advanced",
        "duration": "38 hours",
        "rating": 4.7,
        "students": 63000,
        "description": "Combine MongoDB, Express, React and Node into one cohesive full-stack development workflow.",
        "instructor": "Carlos Mendes",
        "skills": [
            "MongoDB",
            "Express",
            "React",
            "Node.js"
        ],
        "prerequisites": [
            23,
            25
        ],
        "topics": [
            "MERN Architecture",
            "Building the Backend",
            "Connecting the Frontend",
            "Auth Across the Stack",
            "State Management",
            "Deployment"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "Full Stack Development with MERN tutorial"
    },
    {
        "id": 27,
        "title": "Next.js for Production Web Apps",
        "category": "Web Development",
        "level": "Advanced",
        "duration": "14 hours",
        "rating": 4.7,
        "students": 31000,
        "description": "Learn server-side rendering, routing and deployment with Next.js for production-grade React apps.",
        "instructor": "Yuki Tanaka",
        "skills": [
            "Next.js",
            "SSR",
            "React"
        ],
        "prerequisites": [
            23
        ],
        "topics": [
            "Next.js Fundamentals",
            "File-Based Routing",
            "Data Fetching",
            "API Routes",
            "Deployment on Vercel"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "Next.js for Production Web Apps tutorial"
    },
    {
        "id": 28,
        "title": "Backend Development with Django",
        "category": "Web Development",
        "level": "Intermediate",
        "duration": "20 hours",
        "rating": 4.6,
        "students": 37000,
        "description": "Build robust backend applications with Python's Django framework, from models to deployment.",
        "instructor": "Omar Farouk",
        "skills": [
            "Django",
            "Python",
            "ORM"
        ],
        "prerequisites": [
            2
        ],
        "topics": [
            "Django Project Setup",
            "Models & ORM",
            "Views & Templates",
            "Django Admin",
            "REST with DRF",
            "Deployment"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "Backend Development with Django tutorial"
    },
    {
        "id": 29,
        "title": "RESTful API Design Principles",
        "category": "Web Development",
        "level": "Advanced",
        "duration": "7 hours",
        "rating": 4.5,
        "students": 19000,
        "description": "Learn the principles behind well-designed, versioned, secure REST APIs that scale.",
        "instructor": "Grace Liu",
        "skills": [
            "API Design",
            "REST",
            "Versioning"
        ],
        "prerequisites": [
            24
        ],
        "topics": [
            "REST Fundamentals",
            "Resource Modeling",
            "Versioning Strategies",
            "Security Basics",
            "Documentation with OpenAPI"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "RESTful API Design Principles tutorial"
    },
    {
        "id": 30,
        "title": "Database Management Systems (DBMS)",
        "category": "Data",
        "level": "Intermediate",
        "duration": "16 hours",
        "rating": 4.6,
        "students": 56000,
        "description": "Understand how relational databases work under the hood, from normalization to transactions.",
        "instructor": "Dr. Sarah Chen",
        "skills": [
            "DBMS",
            "Normalization",
            "Transactions"
        ],
        "prerequisites": [
            1
        ],
        "topics": [
            "Relational Model Basics",
            "ER Diagrams",
            "Normalization",
            "Transactions & ACID",
            "Indexing",
            "Query Optimization Basics"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        "youtubeSearch": "Database Management Systems (DBMS) tutorial"
    },
    {
        "id": 31,
        "title": "SQL for Data Analysis",
        "category": "Data",
        "level": "Intermediate",
        "duration": "12 hours",
        "rating": 4.7,
        "students": 68000,
        "description": "Write real SQL queries to explore, join and summarize data like a working data analyst.",
        "instructor": "Marcus Webb",
        "skills": [
            "SQL",
            "Joins",
            "Aggregation"
        ],
        "prerequisites": [
            30
        ],
        "topics": [
            "SELECT Basics",
            "Filtering & Sorting",
            "Joins",
            "Aggregation & Grouping",
            "Subqueries",
            "Window Functions"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        "youtubeSearch": "SQL for Data Analysis tutorial"
    },
    {
        "id": 32,
        "title": "Pandas & NumPy for Data Science",
        "category": "Data",
        "level": "Intermediate",
        "duration": "13 hours",
        "rating": 4.6,
        "students": 49000,
        "description": "Get hands-on with Python's core data libraries to clean, transform and analyze real datasets.",
        "instructor": "Priya Sharma",
        "skills": [
            "Pandas",
            "NumPy",
            "Data Cleaning"
        ],
        "prerequisites": [
            2
        ],
        "topics": [
            "NumPy Arrays",
            "Pandas Series & DataFrames",
            "Cleaning Messy Data",
            "Grouping & Aggregation",
            "Merging Datasets",
            "Mini Analysis Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        "youtubeSearch": "Pandas & NumPy for Data Science tutorial"
    },
    {
        "id": 33,
        "title": "Statistics for Data Science",
        "category": "Data",
        "level": "Intermediate",
        "duration": "15 hours",
        "rating": 4.6,
        "students": 41000,
        "description": "Build the statistical foundation behind every data science and machine learning technique.",
        "instructor": "Daniel Okafor",
        "skills": [
            "Statistics",
            "Probability"
        ],
        "prerequisites": [
            2
        ],
        "topics": [
            "Descriptive Statistics",
            "Probability Basics",
            "Distributions",
            "Hypothesis Testing",
            "Correlation & Regression"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        "youtubeSearch": "Statistics for Data Science tutorial"
    },
    {
        "id": 34,
        "title": "Data Analytics with Excel & SQL",
        "category": "Data",
        "level": "Beginner",
        "duration": "10 hours",
        "rating": 4.5,
        "students": 53000,
        "description": "Learn practical data analytics workflows using the two tools every analyst relies on daily.",
        "instructor": "Elena Rossi",
        "skills": [
            "Excel",
            "SQL",
            "Dashboards"
        ],
        "prerequisites": [
            31
        ],
        "topics": [
            "Excel for Analysis",
            "Pivot Tables",
            "SQL Refresher",
            "Building Dashboards",
            "Case Study Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        "youtubeSearch": "Data Analytics with Excel & SQL tutorial"
    },
    {
        "id": 35,
        "title": "Data Science with Python",
        "category": "Data",
        "level": "Advanced",
        "duration": "36 hours",
        "rating": 4.6,
        "students": 98000,
        "description": "Complete data science training covering statistics, Python, and machine learning fundamentals.",
        "instructor": "James Park",
        "skills": [
            "Python",
            "Statistics",
            "Machine Learning"
        ],
        "prerequisites": [
            32,
            33
        ],
        "topics": [
            "Data Science Workflow",
            "Exploratory Data Analysis",
            "Feature Engineering",
            "Intro to ML Models",
            "Model Evaluation",
            "Capstone Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        "youtubeSearch": "Data Science with Python tutorial"
    },
    {
        "id": 36,
        "title": "Machine Learning Foundations",
        "category": "AI & ML",
        "level": "Advanced",
        "duration": "20 hours",
        "rating": 4.7,
        "students": 58000,
        "description": "Build a solid conceptual and practical foundation in machine learning before specializing further.",
        "instructor": "Aisha Rahman",
        "skills": [
            "Machine Learning",
            "Scikit-learn"
        ],
        "prerequisites": [
            2,
            33
        ],
        "topics": [
            "What is Machine Learning",
            "Supervised vs Unsupervised",
            "Regression Models",
            "Classification Models",
            "Model Evaluation",
            "Mini Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Machine Learning Foundations tutorial"
    },
    {
        "id": 37,
        "title": "Machine Learning A-Z: AI, Python & R",
        "category": "AI & ML",
        "level": "Advanced",
        "duration": "44 hours",
        "rating": 4.7,
        "students": 89000,
        "description": "Learn to create machine learning algorithms in Python and R from data science fundamentals to deployment.",
        "instructor": "Tom Fischer",
        "skills": [
            "Machine Learning",
            "Python",
            "R"
        ],
        "prerequisites": [
            36
        ],
        "topics": [
            "ML Pipeline Overview",
            "Regression Deep Dive",
            "Classification Deep Dive",
            "Clustering",
            "Model Selection",
            "Real-World Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Machine Learning A-Z: AI, Python & R tutorial"
    },
    {
        "id": 38,
        "title": "Deep Learning Specialization",
        "category": "AI & ML",
        "level": "Advanced",
        "duration": "85 hours",
        "rating": 4.9,
        "students": 67000,
        "description": "Master deep learning and build neural networks that power modern AI applications.",
        "instructor": "Nadia Volkov",
        "skills": [
            "Deep Learning",
            "Neural Networks"
        ],
        "prerequisites": [
            37
        ],
        "topics": [
            "Neural Network Basics",
            "Forward & Backpropagation",
            "Convolutional Networks",
            "Recurrent Networks",
            "Regularization",
            "Capstone Project"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Deep Learning Specialization tutorial"
    },
    {
        "id": 39,
        "title": "Building Your First Neural Network",
        "category": "AI & ML",
        "level": "Intermediate",
        "duration": "9 hours",
        "rating": 4.5,
        "students": 31000,
        "description": "A hands-on, from-scratch introduction to building and training your first neural network.",
        "instructor": "Ravi Kumar",
        "skills": [
            "Neural Networks",
            "Python"
        ],
        "prerequisites": [
            36
        ],
        "topics": [
            "Perceptron Basics",
            "Activation Functions",
            "Loss Functions",
            "Training with Gradient Descent",
            "Build & Train a Network"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Building Your First Neural Network tutorial"
    },
    {
        "id": 40,
        "title": "Natural Language Processing with Transformers",
        "category": "AI & ML",
        "level": "Advanced",
        "duration": "28 hours",
        "rating": 4.8,
        "students": 34000,
        "description": "Learn cutting-edge NLP techniques including transformers, BERT and GPT-style models.",
        "instructor": "Laura Bennett",
        "skills": [
            "NLP",
            "Transformers",
            "BERT"
        ],
        "prerequisites": [
            38
        ],
        "topics": [
            "Text Preprocessing",
            "Word Embeddings",
            "Attention Mechanism",
            "Transformer Architecture",
            "Fine-Tuning Pretrained Models",
            "Building an NLP App"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Natural Language Processing with Transformers tutorial"
    },
    {
        "id": 41,
        "title": "Computer Vision with OpenCV and Python",
        "category": "AI & ML",
        "level": "Intermediate",
        "duration": "24 hours",
        "rating": 4.5,
        "students": 52000,
        "description": "Master computer vision: image processing, object detection and real-time video analysis.",
        "instructor": "Carlos Mendes",
        "skills": [
            "OpenCV",
            "Computer Vision"
        ],
        "prerequisites": [
            36
        ],
        "topics": [
            "Image Basics with OpenCV",
            "Filtering & Edge Detection",
            "Object Detection",
            "Face Detection",
            "Real-Time Video Processing"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Computer Vision with OpenCV and Python tutorial"
    },
    {
        "id": 42,
        "title": "Generative AI and Large Language Models",
        "category": "AI & ML",
        "level": "Advanced",
        "duration": "18 hours",
        "rating": 4.7,
        "students": 40000,
        "description": "Understand how large language models work and how to build practical applications on top of them.",
        "instructor": "Yuki Tanaka",
        "skills": [
            "Generative AI",
            "LLMs",
            "Prompt Engineering"
        ],
        "prerequisites": [
            38
        ],
        "topics": [
            "How LLMs Work",
            "Prompt Engineering",
            "Fine-Tuning vs RAG",
            "Building an AI App",
            "Responsible AI Use"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Generative AI and Large Language Models tutorial"
    },
    {
        "id": 43,
        "title": "Artificial Intelligence Foundations",
        "category": "AI & ML",
        "level": "Intermediate",
        "duration": "12 hours",
        "rating": 4.5,
        "students": 45000,
        "description": "A broad, practical introduction to the field of AI, its subfields, and how they connect.",
        "instructor": "Omar Farouk",
        "skills": [
            "AI Concepts",
            "Search Algorithms"
        ],
        "prerequisites": [
            2
        ],
        "topics": [
            "What is AI",
            "Search & Planning",
            "Knowledge Representation",
            "Intro to Machine Learning",
            "Ethics in AI"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
        "youtubeSearch": "Artificial Intelligence Foundations tutorial"
    },
    {
        "id": 44,
        "title": "AWS Certified Solutions Architect",
        "category": "Cloud & DevOps",
        "level": "Advanced",
        "duration": "32 hours",
        "rating": 4.7,
        "students": 112000,
        "description": "Prepare for the AWS Solutions Architect exam and design highly available, cost-efficient systems.",
        "instructor": "Grace Liu",
        "skills": [
            "AWS",
            "Cloud Architecture"
        ],
        "prerequisites": [
            1
        ],
        "topics": [
            "AWS Core Services",
            "EC2 & Compute",
            "S3 & Storage",
            "Networking on AWS",
            "High Availability Design",
            "Practice Exam Review"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        "youtubeSearch": "AWS Certified Solutions Architect tutorial"
    },
    {
        "id": 45,
        "title": "Cloud Computing Essentials (Azure & GCP)",
        "category": "Cloud & DevOps",
        "level": "Intermediate",
        "duration": "14 hours",
        "rating": 4.5,
        "students": 37000,
        "description": "Compare and work hands-on with the two other major cloud platforms beyond AWS.",
        "instructor": "Dr. Sarah Chen",
        "skills": [
            "Azure",
            "GCP",
            "Cloud Services"
        ],
        "prerequisites": [
            1
        ],
        "topics": [
            "Cloud Computing Models",
            "Azure Fundamentals",
            "GCP Fundamentals",
            "Storage & Compute Comparison",
            "Choosing the Right Cloud"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        "youtubeSearch": "Cloud Computing Essentials (Azure & GCP) tutorial"
    },
    {
        "id": 46,
        "title": "Cloud-Native Application Design",
        "category": "Cloud & DevOps",
        "level": "Advanced",
        "duration": "16 hours",
        "rating": 4.6,
        "students": 22000,
        "description": "Design applications built for the cloud from day one: scalable, resilient and container-friendly.",
        "instructor": "Marcus Webb",
        "skills": [
            "Microservices",
            "Scalability"
        ],
        "prerequisites": [
            45
        ],
        "topics": [
            "Cloud-Native Principles",
            "Microservices Basics",
            "Scalability Patterns",
            "Resilience & Fault Tolerance",
            "Case Study"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        "youtubeSearch": "Cloud-Native Application Design tutorial"
    },
    {
        "id": 47,
        "title": "DevOps with Docker & Kubernetes",
        "category": "Cloud & DevOps",
        "level": "Advanced",
        "duration": "22 hours",
        "rating": 4.7,
        "students": 58000,
        "description": "Containerize applications with Docker and orchestrate them at scale with Kubernetes.",
        "instructor": "Priya Sharma",
        "skills": [
            "Docker",
            "Kubernetes",
            "CI/CD"
        ],
        "prerequisites": [
            4
        ],
        "topics": [
            "Docker Fundamentals",
            "Building Images",
            "Kubernetes Basics",
            "Pods, Services & Deployments",
            "Scaling & Monitoring"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        "youtubeSearch": "DevOps with Docker & Kubernetes tutorial"
    },
    {
        "id": 48,
        "title": "CI/CD Pipelines with GitHub Actions",
        "category": "Cloud & DevOps",
        "level": "Intermediate",
        "duration": "7 hours",
        "rating": 4.6,
        "students": 25000,
        "description": "Automate build, test and deployment workflows using GitHub Actions.",
        "instructor": "Daniel Okafor",
        "skills": [
            "CI/CD",
            "GitHub Actions"
        ],
        "prerequisites": [
            4
        ],
        "topics": [
            "CI/CD Concepts",
            "Writing Your First Workflow",
            "Testing in the Pipeline",
            "Automated Deployment",
            "Secrets & Environments"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        "youtubeSearch": "CI/CD Pipelines with GitHub Actions tutorial"
    },
    {
        "id": 49,
        "title": "System Design Interview Prep",
        "category": "Cloud & DevOps",
        "level": "Advanced",
        "duration": "18 hours",
        "rating": 4.7,
        "students": 49000,
        "description": "Learn to design large-scale systems and communicate trade-offs clearly for technical interviews.",
        "instructor": "Elena Rossi",
        "skills": [
            "System Design",
            "Scalability"
        ],
        "prerequisites": [
            6,
            30
        ],
        "topics": [
            "System Design Fundamentals",
            "Load Balancing & Caching",
            "Database Scaling",
            "Designing a URL Shortener",
            "Designing a Chat System",
            "Mock Interview Practice"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        "youtubeSearch": "System Design Interview Prep tutorial"
    },
    {
        "id": 50,
        "title": "Cybersecurity Fundamentals",
        "category": "Cybersecurity",
        "level": "Beginner",
        "duration": "13 hours",
        "rating": 4.6,
        "students": 64000,
        "description": "Understand core security concepts, common attack types, and how to defend systems and data.",
        "instructor": "James Park",
        "skills": [
            "Security Basics",
            "Network Security"
        ],
        "prerequisites": [
            1
        ],
        "topics": [
            "CIA Triad & Threat Models",
            "Network Security Basics",
            "Common Attack Types",
            "Authentication & Access Control",
            "Security Best Practices"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
        "youtubeSearch": "Cybersecurity Fundamentals tutorial"
    },
    {
        "id": 51,
        "title": "Flutter & Dart - The Complete Guide",
        "category": "Mobile Development",
        "level": "Beginner",
        "duration": "42 hours",
        "rating": 4.8,
        "students": 89000,
        "description": "Build beautiful, fast, native-quality apps for iOS and Android from a single Flutter codebase.",
        "instructor": "Aisha Rahman",
        "skills": [
            "Flutter",
            "Dart",
            "Mobile UI"
        ],
        "prerequisites": [
            19
        ],
        "topics": [
            "Dart Language Basics",
            "Flutter Widgets",
            "Layouts & Navigation",
            "State Management",
            "Working with APIs",
            "Publishing Your App"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        "youtubeSearch": "Flutter & Dart - The Complete Guide tutorial"
    },
    {
        "id": 52,
        "title": "Mobile App Development with React Native",
        "category": "Mobile Development",
        "level": "Intermediate",
        "duration": "26 hours",
        "rating": 4.6,
        "students": 41000,
        "description": "Use your React skills to build cross-platform mobile apps with React Native.",
        "instructor": "Tom Fischer",
        "skills": [
            "React Native",
            "Mobile Development"
        ],
        "prerequisites": [
            23
        ],
        "topics": [
            "React Native Basics",
            "Navigation",
            "Native Components",
            "Working with APIs",
            "Publishing to App Stores"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        "youtubeSearch": "Mobile App Development with React Native tutorial"
    },
    {
        "id": 53,
        "title": "JavaScript: Understanding the Weird Parts",
        "category": "Web Development",
        "level": "Advanced",
        "duration": "12 hours",
        "rating": 4.7,
        "students": 78000,
        "description": "An advanced JavaScript course covering scope, closures, prototypes and how the language really works.",
        "instructor": "Nadia Volkov",
        "skills": [
            "JavaScript Internals",
            "Closures",
            "Prototypes"
        ],
        "prerequisites": [
            19
        ],
        "topics": [
            "Execution Contexts",
            "Scope & Closures",
            "The 'this' Keyword",
            "Prototypal Inheritance",
            "Building a Mini Framework"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "JavaScript: Understanding the Weird Parts tutorial"
    },
    {
        "id": 54,
        "title": "Algorithms and Problem Solving with Python",
        "category": "DSA",
        "level": "Intermediate",
        "duration": "15 hours",
        "rating": 4.6,
        "students": 36000,
        "description": "Practice translating algorithmic thinking into clean, efficient Python code.",
        "instructor": "Ravi Kumar",
        "skills": [
            "Algorithms",
            "Python",
            "Problem Solving"
        ],
        "prerequisites": [
            2,
            6
        ],
        "topics": [
            "Problem-Solving Framework",
            "Array & String Problems",
            "Recursion in Python",
            "Practical DP Problems",
            "Mock Practice Set"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
        "youtubeSearch": "Algorithms and Problem Solving with Python tutorial"
    },
    {
        "id": 55,
        "title": "GraphQL API Development",
        "category": "Web Development",
        "level": "Advanced",
        "duration": "9 hours",
        "rating": 4.5,
        "students": 17000,
        "description": "Learn to design and build flexible, efficient APIs with GraphQL as an alternative to REST.",
        "instructor": "Laura Bennett",
        "skills": [
            "GraphQL",
            "API Design"
        ],
        "prerequisites": [
            24
        ],
        "topics": [
            "GraphQL vs REST",
            "Schemas & Types",
            "Queries & Mutations",
            "Resolvers",
            "Connecting to a Database"
        ],
        "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        "youtubeSearch": "GraphQL API Development tutorial"
    }
];

// Build a lessons array for a course from its topic list.
// Lesson duration is derived (not random) so it's consistent between runs.
function buildLessons(course) {
    return course.topics.map((topic, i) => ({
        id: `${course.id}-${i + 1}`,
        title: topic,
        duration: `${8 + ((i * 3) % 14)} min`,
        completed: false
    }));
}

// Attach a lessons array to every course once, at load time.
coursesDatabase.forEach(course => {
    course.lessons = buildLessons(course);
});

function getCourseById(id) {
    return coursesDatabase.find(c => c.id === Number(id));
}

/* ==================== 2. STORAGE HELPERS ==================== */
const STORAGE_KEYS = {
    user: 'neurallearn_user',
    courses: 'neurallearn_courses',   // per-course dynamic state: completed lessons, last accessed
    progress: 'neurallearn_progress', // daily learning minutes + streak
    tasks: 'neurallearn_tasks',
    notes: 'neurallearn_notes',
    history: 'neurallearn_history',
    saved: 'neurallearn_saved',
    settings: 'neurallearn_settings'
};

function saveData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Storage error saving', key, e);
        return false;
    }
}

function loadData(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (raw === null) return fallback;
        return JSON.parse(raw);
    } catch (e) {
        console.error('Storage error loading', key, e);
        return fallback;
    }
}

function todayStr() {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function dayName(dateStr) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' });
}

/* ==================== 3. STATE INITIALIZATION ==================== */
let userState = loadData(STORAGE_KEYS.user, {
    name: 'Alex',
    goal: 'AI Software Developer',
    level: 'Intermediate',
    interests: ['Python', 'AI & ML', 'Web Development'],
    joined: todayStr()
});

// courseState[id] = { completedLessons: [lessonId,...], lastAccessed: ts, currentLessonId }
let courseState = loadData(STORAGE_KEYS.courses, {});

// { dailyMinutes: { 'YYYY-MM-DD': minutes }, streak: 0, lastActiveDate: '' }
let progressState = loadData(STORAGE_KEYS.progress, { dailyMinutes: {}, streak: 0, lastActiveDate: '' });

let tasksState = loadData(STORAGE_KEYS.tasks, []);
let notesState = loadData(STORAGE_KEYS.notes, []);
let historyState = loadData(STORAGE_KEYS.history, []);
let savedState = loadData(STORAGE_KEYS.saved, []); // array of course ids
let settingsState = loadData(STORAGE_KEYS.settings, { compactCards: false });

// Give a first-time user a realistic starting point so the app doesn't look empty.
function seedDemoDataIfEmpty() {
    const hasAnyState = Object.keys(courseState).length > 0 || historyState.length > 0;
    if (hasAnyState) return;

    const seedCourses = [2, 6, 19, 23, 36]; // Python, DSA, JS, React, ML Foundations
    const seedProgress = [100, 60, 40, 20, 0];
    seedCourses.forEach((id, idx) => {
        const course = getCourseById(id);
        if (!course) return;
        const lessonCount = course.lessons.length;
        const doneCount = Math.round((seedProgress[idx] / 100) * lessonCount);
        courseState[id] = {
            completedLessons: course.lessons.slice(0, doneCount).map(l => l.id),
            lastAccessed: Date.now() - idx * 86400000
        };
    });
    savedState = [23, 38];

    // Seed a few history entries across the last week
    const now = Date.now();
    historyState = [
        { type: 'lesson_completed', courseId: 2, title: 'Completed "Final Project" in Complete Python Bootcamp', timestamp: now - 1 * 3600000 },
        { type: 'lesson_watched', courseId: 6, title: 'Watched "Trees" in Data Structures & Algorithms Full Course', timestamp: now - 5 * 3600000 },
        { type: 'course_completed', courseId: 2, title: 'Completed course "Complete Python Bootcamp: From Zero to Hero"', timestamp: now - 86400000 * 1 },
        { type: 'note_created', title: 'Created note "DSA Revision"', timestamp: now - 86400000 * 2 },
        { type: 'course_saved', courseId: 23, title: 'Saved course "React - The Complete Guide"', timestamp: now - 86400000 * 3 }
    ];

    // Seed weekly learning minutes for Analytics
    for (let i = 6; i >= 0; i--) {
        const d = new Date(now - i * 86400000).toISOString().slice(0, 10);
        progressState.dailyMinutes[d] = [45, 30, 60, 0, 90, 20, 50][6 - i];
    }
    progressState.streak = 4;
    progressState.lastActiveDate = todayStr();

    notesState = [
        { id: 'n1', title: 'DSA Revision', content: 'Arrays and important patterns:\n- Two pointer technique\n- Sliding window\n- Prefix sums', updatedAt: now - 86400000 * 2 },
        { id: 'n2', title: 'Python Notes', content: 'Functions, lists, dictionaries and quick reminders for the syntax I always forget.', updatedAt: now - 86400000 * 5 }
    ];

    tasksState = [
        { id: 't1', text: 'Complete Arrays lecture', priority: 'high', date: todayStr(), time: '', completed: true, createdAt: now - 3600000 },
        { id: 't2', text: 'Solve 5 DSA problems', priority: 'high', date: todayStr(), time: '', completed: true, createdAt: now - 3600000 },
        { id: 't3', text: 'Revise Hashing', priority: 'medium', date: todayStr(), time: '18:00', completed: false, createdAt: now - 3600000 },
        { id: 't4', text: 'Watch SQL lecture', priority: 'low', date: todayStr(), time: '', completed: false, createdAt: now - 3600000 }
    ];

    persistAll();
}

function persistAll() {
    saveData(STORAGE_KEYS.user, userState);
    saveData(STORAGE_KEYS.courses, courseState);
    saveData(STORAGE_KEYS.progress, progressState);
    saveData(STORAGE_KEYS.tasks, tasksState);
    saveData(STORAGE_KEYS.notes, notesState);
    saveData(STORAGE_KEYS.history, historyState);
    saveData(STORAGE_KEYS.saved, savedState);
    saveData(STORAGE_KEYS.settings, settingsState);
}

/* ==================== 4. DERIVED DATA HELPERS ==================== */

function getCourseProgress(courseId) {
    const course = getCourseById(courseId);
    if (!course) return 0;
    const state = courseState[courseId];
    if (!state || !state.completedLessons || state.completedLessons.length === 0) return 0;
    return Math.round((state.completedLessons.length / course.lessons.length) * 100);
}

function isCourseCompleted(courseId) {
    return getCourseProgress(courseId) === 100;
}

function isLessonCompleted(courseId, lessonId) {
    const state = courseState[courseId];
    return !!(state && state.completedLessons && state.completedLessons.includes(lessonId));
}

function isSaved(courseId) {
    return savedState.includes(Number(courseId));
}

function toggleSaved(courseId) {
    courseId = Number(courseId);
    const course = getCourseById(courseId);
    if (savedState.includes(courseId)) {
        savedState = savedState.filter(id => id !== courseId);
    } else {
        savedState.push(courseId);
        addHistory('course_saved', courseId, `Saved course "${course.title}"`);
    }
    saveData(STORAGE_KEYS.saved, savedState);
}

// Adds learning minutes to today's tally and updates the streak.
function addLearningMinutes(minutes) {
    const today = todayStr();
    progressState.dailyMinutes[today] = (progressState.dailyMinutes[today] || 0) + minutes;

    if (progressState.lastActiveDate !== today) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        progressState.streak = (progressState.lastActiveDate === yesterday) ? progressState.streak + 1 : 1;
        progressState.lastActiveDate = today;
    }
    saveData(STORAGE_KEYS.progress, progressState);
}

function getTotalLearningMinutes() {
    return Object.values(progressState.dailyMinutes).reduce((a, b) => a + b, 0);
}

function formatMinutesAsHours(mins) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

function getCoursesCompletedCount() {
    return coursesDatabase.filter(c => isCourseCompleted(c.id)).length;
}

function getCoursesInProgress() {
    return coursesDatabase.filter(c => {
        const p = getCourseProgress(c.id);
        return p > 0 && p < 100;
    });
}

function getCompletedCourses() {
    return coursesDatabase.filter(c => isCourseCompleted(c.id));
}

function getSavedCourses() {
    return coursesDatabase.filter(c => isSaved(c.id));
}

// Marks a lesson complete/incomplete and cascades every downstream update:
// course progress -> dashboard -> learning time -> history -> roadmap -> recommendations.
function toggleLessonComplete(courseId, lessonId) {
    courseId = Number(courseId);
    const course = getCourseById(courseId);
    if (!course) return;

    if (!courseState[courseId]) courseState[courseId] = { completedLessons: [], lastAccessed: Date.now() };
    const state = courseState[courseId];
    const wasCompleted = state.completedLessons.includes(lessonId);
    const wasCourseComplete = isCourseCompleted(courseId);

    if (wasCompleted) {
        state.completedLessons = state.completedLessons.filter(id => id !== lessonId);
    } else {
        state.completedLessons.push(lessonId);
        const lesson = course.lessons.find(l => l.id === lessonId);
        addLearningMinutes(parseInt(lesson.duration) || 10);
        addHistory('lesson_completed', courseId, `Completed "${lesson.title}" in ${course.title}`);
    }
    state.lastAccessed = Date.now();
    saveData(STORAGE_KEYS.courses, courseState);

    const nowComplete = isCourseCompleted(courseId);
    if (nowComplete && !wasCourseComplete) {
        addHistory('course_completed', courseId, `Completed course "${course.title}"`);
    }
}

function markCourseComplete(courseId) {
    courseId = Number(courseId);
    const course = getCourseById(courseId);
    if (!course) return;
    if (!courseState[courseId]) courseState[courseId] = { completedLessons: [], lastAccessed: Date.now() };
    const allLessonIds = course.lessons.map(l => l.id);
    const wasComplete = isCourseCompleted(courseId);
    courseState[courseId].completedLessons = allLessonIds;
    courseState[courseId].lastAccessed = Date.now();
    saveData(STORAGE_KEYS.courses, courseState);
    if (!wasComplete) addHistory('course_completed', courseId, `Completed course "${course.title}"`);
}

/* ==================== 5. HISTORY LOGGING ==================== */
const HISTORY_ICONS = {
    course_opened: 'fa-book-open',
    lesson_watched: 'fa-play',
    lesson_completed: 'fa-check',
    course_completed: 'fa-trophy',
    course_saved: 'fa-bookmark',
    note_created: 'fa-note-sticky',
    note_edited: 'fa-pen',
    task_completed: 'fa-square-check'
};

function addHistory(type, courseId, title) {
    historyState.unshift({ type, courseId: courseId || null, title, timestamp: Date.now() });
    if (historyState.length > 300) historyState = historyState.slice(0, 300);
    saveData(STORAGE_KEYS.history, historyState);
}

function timeAgo(ts) {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins} min ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    return new Date(ts).toLocaleDateString();
}

/* ==================== 6. NAVIGATION ==================== */
// Pages that live inside the sidebar app shell (everything except the landing page).
const APP_PAGES = ['dashboard', 'mylearning', 'explore', 'roadmap', 'planly', 'notes',
    'practice', 'challenges', 'analytics', 'history', 'saved', 'profile', 'settings', 'courseDetail'];

let pageHistoryStack = []; // [{page, params}]
let currentPage = 'landing';
let currentParams = {};

// Renders whichever page function is relevant. Centralised so every entry
// point (sidebar click, back button, browser back, links) behaves the same.
function renderPage(pageName, params) {
    params = params || {};
    if (pageName === 'dashboard') renderDashboard();
    else if (pageName === 'mylearning') renderMyLearning();
    else if (pageName === 'explore') renderExplore();
    else if (pageName === 'roadmap') renderRoadmap();
    else if (pageName === 'courseDetail' && params.courseId) renderCourseDetail(params.courseId);
    else if (pageName === 'planly') renderPlanly();
    else if (pageName === 'notes') renderNotes();
    else if (pageName === 'practice') renderPractice();
    else if (pageName === 'challenges') renderChallenges();
    else if (pageName === 'analytics') renderAnalytics();
    else if (pageName === 'history') renderHistory();
    else if (pageName === 'saved') renderSaved();
    else if (pageName === 'profile') renderProfile();
    else if (pageName === 'settings') renderSettings();
}

// Main navigation entry point. Call this instead of touching DOM classes directly.
// pushHistory=false is used internally by goBack()/popstate so we don't create loops.
function showPage(pageName, courseIdOrParams, pushHistory) {
    pushHistory = pushHistory === undefined ? true : pushHistory;
    let params = {};
    if (typeof courseIdOrParams === 'number' || typeof courseIdOrParams === 'string') {
        params = { courseId: Number(courseIdOrParams) };
    } else if (typeof courseIdOrParams === 'object' && courseIdOrParams !== null) {
        params = courseIdOrParams;
    }

    const target = document.getElementById(pageName);
    if (!target) return;

    // Push the page we're leaving onto the history stack (skip immediate duplicates).
    if (pushHistory) {
        const last = pageHistoryStack[pageHistoryStack.length - 1];
        if (!last || last.page !== currentPage || JSON.stringify(last.params) !== JSON.stringify(currentParams)) {
            pageHistoryStack.push({ page: currentPage, params: currentParams });
        }
        if (pageHistoryStack.length > 50) pageHistoryStack.shift();
        history.pushState({ page: pageName, params }, '', '#' + pageName);
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    target.classList.add('active');

    // Toggle between the plain landing layout and the sidebar app shell.
    const isAppPage = APP_PAGES.includes(pageName);
    document.body.classList.toggle('app-mode', isAppPage);

    // Highlight the active sidebar item + old top nav (landing page).
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageName);
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageName);
    });

    // Show/hide the back button: hide it on top-level pages, show on drill-down pages.
    const backBtn = document.getElementById('topbarBackBtn');
    if (backBtn) backBtn.style.display = pageHistoryStack.length > 0 && isAppPage ? 'flex' : 'none';

    const titleEl = document.getElementById('topbarTitle');
    if (titleEl) titleEl.textContent = PAGE_TITLES[pageName] || '';

    currentPage = pageName;
    currentParams = params;
    window.scrollTo({ top: 0, behavior: 'auto' });
    renderPage(pageName, params);

    closeMobileSidebar();
}

const PAGE_TITLES = {
    dashboard: 'Dashboard', mylearning: 'My Learning', explore: 'Explore', roadmap: 'Roadmap',
    planly: 'Planly', notes: 'Notes', practice: 'Practice', challenges: 'Challenges',
    analytics: 'Analytics', history: 'History', saved: 'Saved Courses', profile: 'Profile',
    settings: 'Settings', courseDetail: 'Course Details'
};

// Returns to the actual previous page/state, not always the landing page.
function goBack() {
    if (pageHistoryStack.length === 0) {
        showPage('dashboard');
        return;
    }
    const prev = pageHistoryStack.pop();
    showPage(prev.page, prev.params, false);
    history.pushState({ page: prev.page, params: prev.params }, '', '#' + prev.page);
}

// Support the browser's native Back button without breaking the SPA.
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
        showPage(e.state.page, e.state.params, false);
    }
});

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function toggleSidebar() {
    document.querySelector('.app-sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

function closeMobileSidebar() {
    document.querySelector('.app-sidebar')?.classList.remove('open');
    document.getElementById('sidebarOverlay')?.classList.remove('active');
}

/* ==================== 7. COURSE CARD RENDERING ==================== */
function createCourseCard(course) {
    const levelClass = course.level.toLowerCase();
    const progress = getCourseProgress(course.id);
    const saved = isSaved(course.id);
    return `
        <div class="course-card">
            <div class="course-thumbnail" onclick="showPage('courseDetail', ${course.id})">
                <img src="${course.thumbnail}" alt="${course.title}" onerror="this.style.display='none'">
                <div class="course-overlay"><div class="play-btn"><i class="fas fa-play"></i></div></div>
                <span class="course-badge badge-${levelClass}">${course.level}</span>
                <button class="save-btn ${saved ? 'saved' : ''}" onclick="event.stopPropagation(); handleSaveClick(${course.id}, this)" title="Save course">
                    <i class="fa${saved ? 's' : 'r'} fa-star"></i>
                </button>
            </div>
            <div class="course-info" onclick="showPage('courseDetail', ${course.id})">
                <span class="course-category-tag">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <div class="course-meta">
                    <span class="course-rating"><i class="fas fa-star"></i> ${course.rating}</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                ${progress > 0 ? `
                <div class="mini-progress">
                    <div class="mini-progress-bar"><div class="mini-progress-fill" style="width:${progress}%"></div></div>
                    <span>${progress}%</span>
                </div>` : `<div class="course-instructor"><i class="fas fa-chalkboard-user"></i> ${course.instructor}</div>`}
            </div>
        </div>
    `;
}

function handleSaveClick(courseId, btn) {
    toggleSaved(courseId);
    const saved = isSaved(courseId);
    btn.classList.toggle('saved', saved);
    btn.querySelector('i').className = `fa${saved ? 's' : 'r'} fa-star`;
    // Keep every view that shows saved state in sync.
    if (currentPage === 'saved') renderSaved();
    if (currentPage === 'dashboard') renderDashboard();
}

/* ==================== 8. DASHBOARD ==================== */
function renderDashboard() {
    document.getElementById('greetingName').textContent = userState.name;
    document.getElementById('greetingSub').textContent = `You're on a ${progressState.streak}-day streak. Here's what's next.`;

    // Today's goal / plan summary
    const todayTasks = tasksState.filter(t => t.date === todayStr());
    const doneToday = todayTasks.filter(t => t.completed).length;
    const goalPct = todayTasks.length ? Math.round((doneToday / todayTasks.length) * 100) : 0;
    document.getElementById('dashGoalCount').textContent = `${doneToday} / ${todayTasks.length || 0} tasks`;
    document.getElementById('dashGoalBar').style.width = `${goalPct}%`;
    document.getElementById('dashGoalPct').textContent = `${goalPct}%`;

    const planListEl = document.getElementById('dashTodayPlan');
    if (todayTasks.length === 0) {
        planListEl.innerHTML = `<p class="empty-hint">No tasks planned for today. <a href="#" onclick="showPage('planly');return false;">Open Planly</a></p>`;
    } else {
        planListEl.innerHTML = todayTasks.slice(0, 4).map(t => `
            <div class="mini-task ${t.completed ? 'done' : ''}" onclick="quickToggleTask('${t.id}')">
                <i class="fa${t.completed ? 's fa-square-check' : 'r fa-square'}"></i>
                <span>${escapeHtml(t.text)}</span>
            </div>`).join('');
    }

    // Continue learning
    const inProgress = getCoursesInProgress();
    document.getElementById('continueRow').innerHTML = inProgress.length
        ? inProgress.map(createCourseCard).join('')
        : `<p class="empty-hint">Nothing in progress yet — head to Explore to start a course.</p>`;

    // Recommended
    const recommended = getRecommendations(6);
    document.getElementById('recommended').innerHTML = recommended.map(createCourseCard).join('');

    // Quick notes
    const recentNotes = [...notesState].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 3);
    document.getElementById('dashNotes').innerHTML = recentNotes.length
        ? recentNotes.map(n => `
            <div class="mini-note" onclick="showPage('notes')">
                <strong>${escapeHtml(n.title)}</strong>
                <p>${escapeHtml(n.content).slice(0, 60)}${n.content.length > 60 ? '…' : ''}</p>
            </div>`).join('')
        : `<p class="empty-hint">No notes yet. <a href="#" onclick="showPage('notes');return false;">Create one</a></p>`;

    // Weekly activity mini bars (last 7 days)
    document.getElementById('dashWeekly').innerHTML = buildWeeklyBarsHtml(true);

    // Roadmap stage
    const stage = getCurrentRoadmapStage();
    document.getElementById('dashRoadmapStage').innerHTML = `
        <strong>${stage.title}</strong>
        <p>${stage.completedCount} / ${stage.totalCount} courses complete</p>
        <div class="mini-progress-bar"><div class="mini-progress-fill" style="width:${stage.pct}%"></div></div>
    `;

    // Recent activity
    const recentHistory = historyState.slice(0, 5);
    document.getElementById('dashActivity').innerHTML = recentHistory.length
        ? recentHistory.map(h => `
            <div class="activity-row">
                <i class="fas ${HISTORY_ICONS[h.type] || 'fa-circle'}"></i>
                <span>${escapeHtml(h.title)}</span>
                <small>${timeAgo(h.timestamp)}</small>
            </div>`).join('')
        : `<p class="empty-hint">No activity yet.</p>`;

    // Saved courses
    const saved = getSavedCourses().slice(0, 3);
    document.getElementById('dashSaved').innerHTML = saved.length
        ? saved.map(c => `<div class="mini-course" onclick="showPage('courseDetail', ${c.id})"><i class="fas fa-star"></i> ${escapeHtml(c.title)}</div>`).join('')
        : `<p class="empty-hint">No saved courses yet.</p>`;

    // Stat cards
    document.getElementById('statCoursesCompleted').textContent = getCoursesCompletedCount();
    document.getElementById('statLearningTime').textContent = formatMinutesAsHours(getTotalLearningMinutes());
    document.getElementById('statStreak').textContent = progressState.streak;
}

function quickToggleTask(taskId) {
    toggleTask(taskId);
    renderDashboard();
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = String(str == null ? '' : str);
    return div.innerHTML;
}

/* ==================== 9. MY LEARNING ==================== */
function renderMyLearning() {
    const inProgress = getCoursesInProgress();
    document.getElementById('myLearningInProgress').innerHTML = inProgress.length ? inProgress.map(course => {
        const progress = getCourseProgress(course.id);
        const state = courseState[course.id];
        const lastAccessed = state ? timeAgo(state.lastAccessed) : '—';
        const currentLesson = course.lessons.find(l => !isLessonCompleted(course.id, l.id)) || course.lessons[course.lessons.length - 1];
        return `
        <div class="learning-row-item">
            <img src="${course.thumbnail}" alt="${course.title}" onerror="this.style.display='none'">
            <div class="learning-row-info">
                <h4>${course.title}</h4>
                <p class="learning-row-lesson">Current lesson: ${escapeHtml(currentLesson.title)}</p>
                <div class="mini-progress-bar"><div class="mini-progress-fill" style="width:${progress}%"></div></div>
                <div class="learning-row-meta">
                    <span>${progress}% complete</span>
                    <span>Last accessed ${lastAccessed}</span>
                </div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="showPage('courseDetail', ${course.id})">Continue</button>
        </div>`;
    }).join('') : `<p class="empty-hint">Nothing in progress. <a href="#" onclick="showPage('explore');return false;">Browse courses</a> to get started.</p>`;

    const completed = getCompletedCourses();
    document.getElementById('myLearningCompleted').innerHTML = completed.length ? completed.map(course => {
        const state = courseState[course.id];
        const date = state ? new Date(state.lastAccessed).toLocaleDateString() : '—';
        return `
        <div class="learning-row-item completed">
            <img src="${course.thumbnail}" alt="${course.title}" onerror="this.style.display='none'">
            <div class="learning-row-info">
                <h4>${course.title}</h4>
                <p class="learning-row-lesson"><i class="fas fa-trophy"></i> Completed on ${date}</p>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="showPage('courseDetail', ${course.id})">Review</button>
        </div>`;
    }).join('') : `<p class="empty-hint">No completed courses yet.</p>`;

    const saved = getSavedCourses();
    document.getElementById('myLearningSaved').innerHTML = saved.length
        ? saved.map(createCourseCard).join('')
        : `<p class="empty-hint">No saved courses yet.</p>`;
}

/* ==================== 10. EXPLORE (search / filter / sort) ==================== */
let exploreFilters = { category: 'all', level: 'all', duration: 'all', rating: 0, sort: 'recommended', term: '' };

function renderExplore() {
    populateExploreCategoryOptions();
    applyExploreFilters();
}

function populateExploreCategoryOptions() {
    const select = document.getElementById('filterCategory');
    if (select.options.length > 1) return; // already populated
    const categories = [...new Set(coursesDatabase.map(c => c.category))].sort();
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });
}

function handleSearch(event) {
    if (event.key === 'Enter') performSearch();
}

function performSearch() {
    exploreFilters.term = document.getElementById('searchInput').value.trim();
    logSearchTerm(exploreFilters.term);
    applyExploreFilters();
}

function quickSearch(term) {
    document.getElementById('searchInput').value = term;
    exploreFilters.term = term;
    applyExploreFilters();
}

function updateExploreFilter(key, value) {
    exploreFilters[key] = value;
    applyExploreFilters();
}

function applyExploreFilters() {
    const term = exploreFilters.term.toLowerCase();
    let results = coursesDatabase.filter(c => {
        if (term) {
            const haystack = [c.title, c.category, c.description, c.instructor, ...(c.skills || [])].join(' ').toLowerCase();
            if (!haystack.includes(term)) return false;
        }
        if (exploreFilters.category !== 'all' && c.category !== exploreFilters.category) return false;
        if (exploreFilters.level !== 'all' && c.level !== exploreFilters.level) return false;
        if (exploreFilters.rating > 0 && c.rating < exploreFilters.rating) return false;
        if (exploreFilters.duration !== 'all') {
            const hrs = parseInt(c.duration);
            if (exploreFilters.duration === 'short' && hrs > 10) return false;
            if (exploreFilters.duration === 'medium' && (hrs <= 10 || hrs > 30)) return false;
            if (exploreFilters.duration === 'long' && hrs <= 30) return false;
        }
        return true;
    });

    switch (exploreFilters.sort) {
        case 'rating': results.sort((a, b) => b.rating - a.rating); break;
        case 'shortest': results.sort((a, b) => parseInt(a.duration) - parseInt(b.duration)); break;
        case 'longest': results.sort((a, b) => parseInt(b.duration) - parseInt(a.duration)); break;
        case 'popular': results.sort((a, b) => b.students - a.students); break;
        default: break; // 'recommended' = dataset order
    }

    document.getElementById('resultsCount').textContent = `${results.length} course${results.length === 1 ? '' : 's'} found`;
    document.getElementById('searchResults').innerHTML = results.length
        ? results.map(createCourseCard).join('')
        : `<p class="empty-hint">No courses match your filters. Try broadening your search.</p>`;
}

/* ==================== 11. COURSE DETAIL ==================== */
let currentCourse = null;

function renderCourseDetail(courseId) {
    const course = getCourseById(courseId);
    if (!course) return;
    currentCourse = course;

    if (!courseState[course.id]) courseState[course.id] = { completedLessons: [], lastAccessed: Date.now() };
    courseState[course.id].lastAccessed = Date.now();
    saveData(STORAGE_KEYS.courses, courseState);
    addHistory('course_opened', course.id, `Opened "${course.title}"`);

    document.getElementById('detailTitle').textContent = course.title;
    document.getElementById('detailInstructor').textContent = course.instructor;
    document.getElementById('detailLevel').textContent = course.level;
    document.getElementById('detailDuration').textContent = course.duration;
    document.getElementById('detailRating').textContent = course.rating;
    document.getElementById('detailStudents').textContent = `${(course.students / 1000).toFixed(0)}K students`;
    document.getElementById('detailDescription').textContent = course.description;
    document.getElementById('detailSkills').innerHTML = (course.skills || []).map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('');

    const progress = getCourseProgress(course.id);
    document.getElementById('courseProgressPercent').textContent = `${progress}%`;
    document.getElementById('courseProgressBar').style.width = `${progress}%`;

    const saveBtn = document.getElementById('detailSaveBtn');
    const saved = isSaved(course.id);
    saveBtn.innerHTML = `<i class="fa${saved ? 's' : 'r'} fa-star"></i> ${saved ? 'Saved' : 'Save'}`;
    saveBtn.classList.toggle('saved', saved);

    const markBtn = document.getElementById('markCompleteBtn');
    if (progress === 100) {
        markBtn.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
        markBtn.classList.add('is-complete');
    } else {
        markBtn.innerHTML = '<i class="fas fa-check"></i> Mark Course Complete';
        markBtn.classList.remove('is-complete');
    }

    document.getElementById('videoPlayer').innerHTML = `
        <div class="video-placeholder" onclick="watchOnYoutube()">
            <i class="fas fa-play-circle"></i>
            <p>Click to watch on YouTube</p>
        </div>`;

    // Lesson list — the real progress driver.
    document.getElementById('lessonList').innerHTML = course.lessons.map((lesson, i) => {
        const done = isLessonCompleted(course.id, lesson.id);
        const isNext = !done && course.lessons.slice(0, i).every(l => isLessonCompleted(course.id, l.id));
        return `
        <div class="lesson-item ${done ? 'done' : ''} ${isNext ? 'next' : ''}" onclick="handleLessonClick(${course.id}, '${lesson.id}')">
            <span class="lesson-status"><i class="fas ${done ? 'fa-check-circle' : (isNext ? 'fa-play-circle' : 'fa-circle')}"></i></span>
            <span class="lesson-title">${escapeHtml(lesson.title)}</span>
            <span class="lesson-duration">${lesson.duration}</span>
        </div>`;
    }).join('');

    const related = coursesDatabase.filter(c => c.id !== course.id && c.category === course.category).slice(0, 4);
    document.getElementById('relatedVideos').innerHTML = related.length
        ? related.map(v => `
        <div class="video-card" onclick="showPage('courseDetail', ${v.id})">
            <div class="video-thumb"><img src="${v.thumbnail}" alt="${v.title}" onerror="this.style.display='none'"><span class="video-duration">${v.duration}</span></div>
            <div class="video-info"><h4 class="video-title">${v.title}</h4><p class="video-channel">${v.category} • ${v.level}</p></div>
        </div>`).join('')
        : `<p class="empty-hint">No related courses found.</p>`;
}

function handleLessonClick(courseId, lessonId) {
    const wasDone = isLessonCompleted(courseId, lessonId);
    if (!wasDone) {
        const course = getCourseById(courseId);
        const lesson = course.lessons.find(l => l.id === lessonId);
        addHistory('lesson_watched', courseId, `Watched "${lesson.title}" in ${course.title}`);
    }
    toggleLessonComplete(courseId, lessonId);
    renderCourseDetail(courseId);
    if (currentPage === 'dashboard') renderDashboard();
}

function watchOnYoutube() {
    if (currentCourse) {
        const q = encodeURIComponent(currentCourse.youtubeSearch);
        window.open(`https://www.youtube.com/results?search_query=${q}`, '_blank');
    }
}

function markComplete() {
    if (!currentCourse) return;
    markCourseComplete(currentCourse.id);
    renderCourseDetail(currentCourse.id);
}

function toggleSaveDetail() {
    if (!currentCourse) return;
    toggleSaved(currentCourse.id);
    renderCourseDetail(currentCourse.id);
}

/* ==================== 12. ROADMAP ==================== */
const ROADMAP_STAGES = [
    { key: 'foundation', label: 'Beginner', title: 'Foundation', icon: 'fa-check',
      desc: 'Build a solid foundation with fundamental concepts before moving into specialized skills.',
      courseIds: [1, 2, 3, 4] },
    { key: 'core', label: 'Intermediate', title: 'Core Skills', icon: 'fa-code',
      desc: 'Dive into data structures, web fundamentals and databases — the skills used every day.',
      courseIds: [6, 19, 22, 30] },
    { key: 'advanced', label: 'Advanced', title: 'Advanced', icon: 'fa-layer-group',
      desc: 'Apply your knowledge to real frameworks, cloud platforms and system design.',
      courseIds: [23, 37, 44, 47] },
    { key: 'mastery', label: 'Advanced', title: 'Mastery', icon: 'fa-rocket',
      desc: 'Specialize in AI, full-stack architecture and production-grade engineering.',
      courseIds: [26, 38, 49, 42] }
];

function getCurrentRoadmapStage() {
    for (const stage of ROADMAP_STAGES) {
        const completedCount = stage.courseIds.filter(id => isCourseCompleted(id)).length;
        if (completedCount < stage.courseIds.length) {
            return { title: stage.title, completedCount, totalCount: stage.courseIds.length, pct: Math.round((completedCount / stage.courseIds.length) * 100) };
        }
    }
    const last = ROADMAP_STAGES[ROADMAP_STAGES.length - 1];
    return { title: last.title, completedCount: last.courseIds.length, totalCount: last.courseIds.length, pct: 100 };
}

function renderRoadmap() {
    let previousStageDone = true;
    const html = ROADMAP_STAGES.map((stage) => {
        const completedCount = stage.courseIds.filter(id => isCourseCompleted(id)).length;
        const stageComplete = completedCount === stage.courseIds.length;
        const stageActive = previousStageDone && !stageComplete;
        const markerClass = stageComplete ? 'completed' : (stageActive ? 'current' : '');
        const coursesHtml = stage.courseIds.map(id => {
            const course = getCourseById(id);
            if (!course) return '';
            const done = isCourseCompleted(id);
            return `
            <div class="stage-course-item ${done ? 'completed' : ''}">
                <div class="course-check ${done ? 'done' : 'pending'}" onclick="event.stopPropagation(); quickCompleteFromRoadmap(${id})" title="${done ? 'Completed' : 'Mark complete'}">
                    ${done ? '<i class="fas fa-check"></i>' : ''}
                </div>
                <span class="stage-course-title" onclick="showPage('courseDetail', ${id})">${course.title}</span>
                <span class="stage-course-progress">${getCourseProgress(id)}%</span>
            </div>`;
        }).join('');
        previousStageDone = previousStageDone && stageComplete;
        return `
        <div class="roadmap-stage">
            <div class="stage-marker ${markerClass}"><i class="fas ${stage.icon}"></i></div>
            <div class="stage-content">
                <span class="stage-label ${stage.label.toLowerCase()}">${stage.label}</span>
                <h2 class="stage-title">${stage.title}</h2>
                <p class="stage-desc">${stage.desc}</p>
                <div class="mini-progress-bar"><div class="mini-progress-fill" style="width:${Math.round((completedCount / stage.courseIds.length) * 100)}%"></div></div>
            </div>
            <div class="stage-courses">${coursesHtml}</div>
        </div>`;
    }).join('');
    document.getElementById('roadmapContainer').innerHTML = `<div class="roadmap-line"></div>${html}`;
}

function quickCompleteFromRoadmap(courseId) {
    if (isCourseCompleted(courseId)) return;
    markCourseComplete(courseId);
    renderRoadmap();
}

/* ==================== 13. PLANLY ==================== */
let planlyFilter = 'today';

function renderPlanly() {
    document.getElementById('planlyDate').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    const todayTasks = tasksState.filter(t => t.date === todayStr());
    const doneToday = todayTasks.filter(t => t.completed).length;
    const pct = todayTasks.length ? Math.round((doneToday / todayTasks.length) * 100) : 0;
    document.getElementById('planlyGoalText').textContent = `${doneToday} / ${todayTasks.length} tasks completed`;
    document.getElementById('planlyGoalBar').style.width = `${pct}%`;
    document.getElementById('planlyGoalPct').textContent = `${pct}%`;

    renderTaskList();
}

function renderTaskList() {
    const today = todayStr();
    let filtered;
    if (planlyFilter === 'today') filtered = tasksState.filter(t => t.date === today);
    else if (planlyFilter === 'upcoming') filtered = tasksState.filter(t => t.date > today && !t.completed);
    else if (planlyFilter === 'completed') filtered = tasksState.filter(t => t.completed);
    else filtered = tasksState;

    filtered = [...filtered].sort((a, b) => {
        const order = { high: 0, medium: 1, low: 2 };
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        return (order[a.priority] ?? 3) - (order[b.priority] ?? 3);
    });

    document.getElementById('taskList').innerHTML = filtered.length ? filtered.map(t => `
        <div class="task-item priority-${t.priority} ${t.completed ? 'done' : ''}">
            <div class="task-check" onclick="toggleTask('${t.id}')">
                <i class="fa${t.completed ? 's fa-square-check' : 'r fa-square'}"></i>
            </div>
            <div class="task-main">
                <span class="task-text">${escapeHtml(t.text)}</span>
                <div class="task-meta">
                    <span class="task-priority-tag">${t.priority}</span>
                    <span><i class="fas fa-calendar"></i> ${t.date}</span>
                    ${t.time ? `<span><i class="fas fa-clock"></i> ${t.time}</span>` : ''}
                </div>
            </div>
            <div class="task-actions">
                <button onclick="openEditTask('${t.id}')" title="Edit"><i class="fas fa-pen"></i></button>
                <button onclick="deleteTask('${t.id}')" title="Delete"><i class="fas fa-trash"></i></button>
            </div>
        </div>`).join('') : `<p class="empty-hint">No tasks here yet. Add one above to get started.</p>`;
}

function filterPlanly(filter, btn) {
    planlyFilter = filter;
    document.querySelectorAll('.planly-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderTaskList();
}

let editingTaskId = null;

function openAddTask() {
    editingTaskId = null;
    document.getElementById('taskModalTitle').textContent = 'Add Task';
    document.getElementById('taskInputText').value = '';
    document.getElementById('taskInputPriority').value = 'medium';
    document.getElementById('taskInputDate').value = todayStr();
    document.getElementById('taskInputTime').value = '';
    document.getElementById('taskModal').classList.add('active');
}

function openEditTask(taskId) {
    const task = tasksState.find(t => t.id === taskId);
    if (!task) return;
    editingTaskId = taskId;
    document.getElementById('taskModalTitle').textContent = 'Edit Task';
    document.getElementById('taskInputText').value = task.text;
    document.getElementById('taskInputPriority').value = task.priority;
    document.getElementById('taskInputDate').value = task.date;
    document.getElementById('taskInputTime').value = task.time || '';
    document.getElementById('taskModal').classList.add('active');
}

function closeTaskModal() {
    document.getElementById('taskModal').classList.remove('active');
}

function saveTaskFromModal() {
    const text = document.getElementById('taskInputText').value.trim();
    if (!text) { alert('Please enter a task description.'); return; }
    const priority = document.getElementById('taskInputPriority').value;
    const date = document.getElementById('taskInputDate').value || todayStr();
    const time = document.getElementById('taskInputTime').value;

    if (editingTaskId) {
        const task = tasksState.find(t => t.id === editingTaskId);
        Object.assign(task, { text, priority, date, time });
    } else {
        tasksState.push({ id: 't' + Date.now(), text, priority, date, time, completed: false, createdAt: Date.now() });
    }
    saveData(STORAGE_KEYS.tasks, tasksState);
    closeTaskModal();
    renderPlanly();
    if (currentPage === 'dashboard') renderDashboard();
}

function toggleTask(taskId) {
    const task = tasksState.find(t => t.id === taskId);
    if (!task) return;
    task.completed = !task.completed;
    if (task.completed) addHistory('task_completed', null, `Completed Planly task "${task.text}"`);
    saveData(STORAGE_KEYS.tasks, tasksState);
    if (currentPage === 'planly') renderPlanly();
    if (currentPage === 'dashboard') renderDashboard();
}

function deleteTask(taskId) {
    if (!confirm('Delete this task?')) return;
    tasksState = tasksState.filter(t => t.id !== taskId);
    saveData(STORAGE_KEYS.tasks, tasksState);
    renderPlanly();
}

/* ==================== 14. NOTES ==================== */
let notesSearchTerm = '';
let editingNoteId = null;

function renderNotes() {
    const term = notesSearchTerm.toLowerCase();
    let filtered = [...notesState].sort((a, b) => b.updatedAt - a.updatedAt);
    if (term) {
        filtered = filtered.filter(n => n.title.toLowerCase().includes(term) || n.content.toLowerCase().includes(term));
    }
    const listEl = document.getElementById('notesList');
    if (notesState.length === 0) {
        listEl.innerHTML = `<div class="empty-state"><i class="fas fa-note-sticky"></i><p>No notes yet</p><span>Create your first note to start keeping track of what you learn.</span></div>`;
        return;
    }
    if (filtered.length === 0) {
        listEl.innerHTML = `<p class="empty-hint">No notes match "${escapeHtml(notesSearchTerm)}".</p>`;
        return;
    }
    listEl.innerHTML = filtered.map(n => `
        <div class="note-card" onclick="openEditNote('${n.id}')">
            <h4>${escapeHtml(n.title) || 'Untitled'}</h4>
            <p>${escapeHtml(n.content).slice(0, 120)}${n.content.length > 120 ? '…' : ''}</p>
            <div class="note-meta">
                <span>Updated ${timeAgo(n.updatedAt)}</span>
                <button onclick="event.stopPropagation(); deleteNote('${n.id}')" title="Delete"><i class="fas fa-trash"></i></button>
            </div>
        </div>`).join('');
}

function searchNotes() {
    notesSearchTerm = document.getElementById('notesSearchInput').value;
    renderNotes();
}

function openNewNote() {
    editingNoteId = null;
    document.getElementById('noteModalTitle').textContent = 'New Note';
    document.getElementById('noteInputTitle').value = '';
    document.getElementById('noteInputContent').value = '';
    document.getElementById('noteModal').classList.add('active');
    setTimeout(() => document.getElementById('noteInputTitle').focus(), 50);
}

function openEditNote(noteId) {
    const note = notesState.find(n => n.id === noteId);
    if (!note) return;
    editingNoteId = noteId;
    document.getElementById('noteModalTitle').textContent = 'Edit Note';
    document.getElementById('noteInputTitle').value = note.title;
    document.getElementById('noteInputContent').value = note.content;
    document.getElementById('noteModal').classList.add('active');
}

function closeNoteModal() {
    document.getElementById('noteModal').classList.remove('active');
}

function saveNoteFromModal() {
    const title = document.getElementById('noteInputTitle').value.trim() || 'Untitled';
    const content = document.getElementById('noteInputContent').value.trim();
    if (!content) { alert('Please write some content for your note.'); return; }

    if (editingNoteId) {
        const note = notesState.find(n => n.id === editingNoteId);
        note.title = title; note.content = content; note.updatedAt = Date.now();
        addHistory('note_edited', null, `Edited note "${title}"`);
    } else {
        notesState.push({ id: 'n' + Date.now(), title, content, updatedAt: Date.now() });
        addHistory('note_created', null, `Created note "${title}"`);
    }
    saveData(STORAGE_KEYS.notes, notesState);
    closeNoteModal();
    renderNotes();
    if (currentPage === 'dashboard') renderDashboard();
}

function deleteNote(noteId) {
    if (!confirm('Delete this note? This cannot be undone.')) return;
    notesState = notesState.filter(n => n.id !== noteId);
    saveData(STORAGE_KEYS.notes, notesState);
    renderNotes();
}

/* ==================== 15. PRACTICE & CHALLENGES ==================== */
// Lightweight but functional: practice sets and challenges per category,
// stored as completable checklist items (kept intentionally simple/vanilla).
const PRACTICE_SETS = [
    { id: 'p1', title: 'Array & String Warm-Up', category: 'DSA', problems: 10 },
    { id: 'p2', title: 'Python Fundamentals Drill', category: 'Programming', problems: 12 },
    { id: 'p3', title: 'SQL Query Practice', category: 'Data', problems: 8 },
    { id: 'p4', title: 'JavaScript DOM Exercises', category: 'Web Development', problems: 10 },
    { id: 'p5', title: 'Recursion & Backtracking Set', category: 'DSA', problems: 8 },
    { id: 'p6', title: 'ML Concepts Quiz', category: 'AI & ML', problems: 15 }
];
const CHALLENGES = [
    { id: 'c1', title: 'Build a To-Do List App', difficulty: 'Easy', category: 'Web Development' },
    { id: 'c2', title: 'Implement a LRU Cache', difficulty: 'Hard', category: 'DSA' },
    { id: 'c3', title: 'Design a URL Shortener', difficulty: 'Medium', category: 'Cloud & DevOps' },
    { id: 'c4', title: 'Build a Sentiment Classifier', difficulty: 'Medium', category: 'AI & ML' },
    { id: 'c5', title: 'Create a REST API for a Blog', difficulty: 'Medium', category: 'Web Development' },
    { id: 'c6', title: 'Solve 10 Graph Problems', difficulty: 'Hard', category: 'DSA' }
];

function getPracticeState() { return loadData('neurallearn_practice', {}); }
function setPracticeState(s) { saveData('neurallearn_practice', s); }

function renderPractice() {
    const state = getPracticeState();
    document.getElementById('practiceList').innerHTML = PRACTICE_SETS.map(p => {
        const done = !!state[p.id];
        return `
        <div class="practice-card ${done ? 'done' : ''}">
            <div class="practice-info">
                <span class="course-category-tag">${p.category}</span>
                <h4>${p.title}</h4>
                <p>${p.problems} problems</p>
            </div>
            <button class="btn ${done ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="togglePracticeSet('${p.id}')">
                ${done ? '<i class="fas fa-check"></i> Completed' : 'Start Set'}
            </button>
        </div>`;
    }).join('');
}

function togglePracticeSet(id) {
    const state = getPracticeState();
    state[id] = !state[id];
    setPracticeState(state);
    if (state[id]) addHistory('lesson_completed', null, `Completed practice set "${PRACTICE_SETS.find(p => p.id === id).title}"`);
    renderPractice();
}

function getChallengeState() { return loadData('neurallearn_challenges', {}); }
function setChallengeState(s) { saveData('neurallearn_challenges', s); }

function renderChallenges() {
    const state = getChallengeState();
    document.getElementById('challengesList').innerHTML = CHALLENGES.map(c => {
        const done = !!state[c.id];
        return `
        <div class="practice-card ${done ? 'done' : ''}">
            <div class="practice-info">
                <span class="course-category-tag">${c.category}</span>
                <h4>${c.title}</h4>
                <p class="difficulty-${c.difficulty.toLowerCase()}">${c.difficulty}</p>
            </div>
            <button class="btn ${done ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="toggleChallenge('${c.id}')">
                ${done ? '<i class="fas fa-check"></i> Solved' : 'Attempt'}
            </button>
        </div>`;
    }).join('');
}

function toggleChallenge(id) {
    const state = getChallengeState();
    state[id] = !state[id];
    setChallengeState(state);
    if (state[id]) addHistory('course_completed', null, `Solved challenge "${CHALLENGES.find(c => c.id === id).title}"`);
    renderChallenges();
}

/* ==================== 16. ANALYTICS ==================== */
function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
        days.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
    }
    return days;
}

function buildWeeklyBarsHtml(compact) {
    const days = getLast7Days();
    const minutesByDay = days.map(d => progressState.dailyMinutes[d] || 0);
    const max = Math.max(...minutesByDay, 30);
    return `<div class="weekly-bars ${compact ? 'compact' : ''}">` + days.map((d, i) => {
        const mins = minutesByDay[i];
        const heightPct = Math.round((mins / max) * 100);
        return `
        <div class="weekly-bar-col">
            <div class="weekly-bar-track"><div class="weekly-bar-fill" style="height:${heightPct}%" title="${mins} min"></div></div>
            <span>${dayName(d)}</span>
        </div>`;
    }).join('') + `</div>`;
}

function renderAnalytics() {
    document.getElementById('analyticsChart').innerHTML = buildWeeklyBarsHtml(false);

    const totalMins = getTotalLearningMinutes();
    const days = getLast7Days();
    const weekMins = days.reduce((sum, d) => sum + (progressState.dailyMinutes[d] || 0), 0);
    const activeDays = days.filter(d => (progressState.dailyMinutes[d] || 0) > 0).length;
    const avgDaily = activeDays ? Math.round(weekMins / activeDays) : 0;

    document.getElementById('analyticsTotalHours').textContent = formatMinutesAsHours(totalMins);
    document.getElementById('analyticsAvgDaily').textContent = `${avgDaily} min`;
    document.getElementById('analyticsCoursesCompleted').textContent = getCoursesCompletedCount();
    document.getElementById('analyticsStreak').textContent = `${progressState.streak} days`;

    const lessonsCompleted = Object.values(courseState).reduce((sum, s) => sum + (s.completedLessons ? s.completedLessons.length : 0), 0);
    document.getElementById('analyticsLessons').textContent = lessonsCompleted;

    // Most studied subject = category with the most completed lessons.
    const categoryCounts = {};
    Object.entries(courseState).forEach(([id, s]) => {
        const course = getCourseById(id);
        if (!course || !s.completedLessons) return;
        categoryCounts[course.category] = (categoryCounts[course.category] || 0) + s.completedLessons.length;
    });
    const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0];
    document.getElementById('analyticsTopSubject').textContent = topCategory ? topCategory[0] : '—';
}

/* ==================== 17. HISTORY PAGE ==================== */
let historyFilter = 'all';

function renderHistory() {
    let entries = historyState;
    if (historyFilter !== 'all') entries = entries.filter(h => h.type === historyFilter);

    // Group by day label (Today / Yesterday / date)
    const groups = {};
    entries.forEach(h => {
        const d = new Date(h.timestamp);
        const dayKey = d.toDateString();
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        const label = dayKey === today ? 'Today' : (dayKey === yesterday ? 'Yesterday' : d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }));
        if (!groups[label]) groups[label] = [];
        groups[label].push(h);
    });

    const html = Object.entries(groups).map(([label, items]) => `
        <div class="history-group">
            <h4>${label}</h4>
            ${items.map(h => `
            <div class="activity-row">
                <i class="fas ${HISTORY_ICONS[h.type] || 'fa-circle'}"></i>
                <span>${escapeHtml(h.title)}</span>
                <small>${new Date(h.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
            </div>`).join('')}
        </div>`).join('');

    document.getElementById('historyList').innerHTML = entries.length ? html : `<div class="empty-state"><i class="fas fa-clock-rotate-left"></i><p>No activity yet</p><span>Your learning activity will show up here as you go.</span></div>`;
}

function filterHistory(type, btn) {
    historyFilter = type;
    document.querySelectorAll('.history-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderHistory();
}

/* ==================== 18. SAVED COURSES ==================== */
function renderSaved() {
    const saved = getSavedCourses();
    document.getElementById('savedCoursesGrid').innerHTML = saved.length
        ? saved.map(createCourseCard).join('')
        : `<div class="empty-state"><i class="fas fa-star"></i><p>No saved courses</p><span>Tap the star on any course to save it for later.</span></div>`;
}

/* ==================== 19. PROFILE ==================== */
function renderProfile() {
    document.getElementById('profileName').textContent = userState.name;
    document.getElementById('profileGoal').textContent = userState.goal;
    document.getElementById('profileLevel').textContent = userState.level;
    document.getElementById('profileInterests').innerHTML = userState.interests.map(i => `<span class="skill-chip">${escapeHtml(i)}</span>`).join('');
    document.getElementById('profileCoursesCompleted').textContent = getCoursesCompletedCount();
    document.getElementById('profileLearningTime').textContent = formatMinutesAsHours(getTotalLearningMinutes());
    document.getElementById('profileStreak').textContent = `${progressState.streak} days`;

    // Skill bars: derived from average progress of completed+in-progress courses per category.
    const categories = [...new Set(coursesDatabase.map(c => c.category))];
    const skillRows = categories.map(cat => {
        const coursesInCat = coursesDatabase.filter(c => c.category === cat);
        const withProgress = coursesInCat.filter(c => getCourseProgress(c.id) > 0);
        if (withProgress.length === 0) return null;
        const avg = Math.round(withProgress.reduce((sum, c) => sum + getCourseProgress(c.id), 0) / coursesInCat.length);
        return { cat, avg };
    }).filter(Boolean).sort((a, b) => b.avg - a.avg);

    document.getElementById('profileSkills').innerHTML = skillRows.length ? skillRows.map(s => `
        <div class="skill-row">
            <span>${s.cat}</span>
            <div class="mini-progress-bar"><div class="mini-progress-fill" style="width:${s.avg}%"></div></div>
            <span>${s.avg}%</span>
        </div>`).join('') : `<p class="empty-hint">Start a course to see your skill breakdown.</p>`;
}

function openEditProfile() {
    document.getElementById('profileInputName').value = userState.name;
    document.getElementById('profileInputGoal').value = userState.goal;
    document.getElementById('profileInputLevel').value = userState.level;
    document.getElementById('profileInputInterests').value = userState.interests.join(', ');
    document.getElementById('profileModal').classList.add('active');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

function saveProfileFromModal() {
    userState.name = document.getElementById('profileInputName').value.trim() || 'Learner';
    userState.goal = document.getElementById('profileInputGoal').value.trim() || 'Not set';
    userState.level = document.getElementById('profileInputLevel').value;
    userState.interests = document.getElementById('profileInputInterests').value.split(',').map(s => s.trim()).filter(Boolean);
    saveData(STORAGE_KEYS.user, userState);
    closeProfileModal();
    renderProfile();
}

/* ==================== 20. SETTINGS ==================== */
function renderSettings() {
    document.getElementById('settingsName').value = userState.name;
}

function resetAllData() {
    if (!confirm('This will erase all your progress, tasks, notes and history on this device. This cannot be undone. Continue?')) return;
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
    localStorage.removeItem('neurallearn_practice');
    localStorage.removeItem('neurallearn_challenges');
    location.reload();
}

/* ==================== 21. RECOMMENDATION ENGINE ==================== */
// Simple rule-based scoring — no fake "92% match everywhere". Each course
// gets points from real signals: completed courses' categories, interests,
// saved courses, and whether prerequisites are already done.
let searchHistoryLog = loadData('neurallearn_search_history', []);

function logSearchTerm(term) {
    if (!term) return;
    searchHistoryLog.unshift(term);
    searchHistoryLog = searchHistoryLog.slice(0, 20);
    saveData('neurallearn_search_history', searchHistoryLog);
}

function scoreCourse(course) {
    if (isCourseCompleted(course.id)) return -1; // don't recommend what's done
    let score = 0;
    const reasons = [];

    const completedCats = new Set(getCompletedCourses().map(c => c.category));
    if (completedCats.has(course.category)) { score += 30; reasons.push(`You've completed courses in ${course.category}`); }

    if (userState.interests.some(i => course.category.toLowerCase().includes(i.toLowerCase()) || course.title.toLowerCase().includes(i.toLowerCase()))) {
        score += 25; reasons.push(`Matches your interest in ${userState.interests.find(i => course.category.toLowerCase().includes(i.toLowerCase()) || course.title.toLowerCase().includes(i.toLowerCase()))}`);
    }

    const savedCats = new Set(getSavedCourses().map(c => c.category));
    if (savedCats.has(course.category)) { score += 15; reasons.push(`Similar to courses you saved`); }

    const searchMatch = searchHistoryLog.find(term => course.title.toLowerCase().includes(term.toLowerCase()) || course.category.toLowerCase().includes(term.toLowerCase()));
    if (searchMatch) { score += 20; reasons.push(`You searched for "${searchMatch}"`); }

    const prereqsDone = course.prerequisites.length > 0 && course.prerequisites.every(id => isCourseCompleted(id));
    if (prereqsDone) { score += 20; reasons.push('Prerequisites completed'); }
    if (course.prerequisites.length === 0) score += 5; // beginner-friendly baseline

    if (getCourseProgress(course.id) > 0) { score += 10; reasons.push('Already in progress'); }

    score += Math.min(course.rating * 2, 10); // slight quality boost, capped

    return { score, reasons };
}

function getRecommendations(limit) {
    const scored = coursesDatabase
        .map(c => ({ course: c, ...scoreCourse(c) }))
        .filter(r => r.score >= 0)
        .sort((a, b) => b.score - a.score);

    return scored.slice(0, limit).map(r => r.course);
}

/* ==================== 22. NEURALBOT (chatbot) ==================== */
function toggleChatbot() {
    document.getElementById('chatbotWindow').classList.toggle('active');
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    appendChatMessage(text, 'user');
    input.value = '';
    setTimeout(() => appendChatMessage(getBotReply(text), 'bot'), 400);
}

function quickChat(text) {
    appendChatMessage(text, 'user');
    setTimeout(() => appendChatMessage(getBotReply(text), 'bot'), 400);
}

function appendChatMessage(text, sender) {
    const messagesEl = document.getElementById('chatMessages');
    const row = document.createElement('div');
    row.className = `chat-message ${sender}`;
    row.innerHTML = `<div class="chat-bubble">${escapeHtml(text)}</div>`;
    messagesEl.appendChild(row);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Simple, honest rule-based replies grounded in the user's real data —
// no fake "AI" claims beyond what the bot can actually compute.
function getBotReply(text) {
    const lower = text.toLowerCase();

    if (lower.includes('recommend') || lower.includes('suggest')) {
        const top = getRecommendations(1)[0];
        return top ? `Based on your progress, I'd suggest "${top.title}" (${top.category}). Want me to open it?` : `Complete a course or two and I'll be able to give you a tailored recommendation.`;
    }
    if (lower.includes('progress') || lower.includes('how am i doing')) {
        return `You've completed ${getCoursesCompletedCount()} course(s), studied ${formatMinutesAsHours(getTotalLearningMinutes())} total, and you're on a ${progressState.streak}-day streak.`;
    }
    if (lower.includes('task') || lower.includes('plan')) {
        const today = tasksState.filter(t => t.date === todayStr());
        const done = today.filter(t => t.completed).length;
        return `You have ${today.length} task(s) planned for today, ${done} completed so far. Check Planly for details.`;
    }
    if (lower.includes('python')) return `We have several Python courses, from "Complete Python Bootcamp" for beginners to "Data Science with Python" for advanced learners. Want me to open Explore filtered to Python?`;
    if (lower.includes('roadmap')) {
        const stage = getCurrentRoadmapStage();
        return `You're currently on the "${stage.title}" stage of your roadmap — ${stage.completedCount}/${stage.totalCount} courses done there.`;
    }
    return `I can help you find courses, check your progress, or manage your tasks. Try asking "recommend a course" or "how's my progress?"`;
}

/* ==================== 23. INIT ==================== */
window.addEventListener('scroll', () => {
    document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 50);
});

document.addEventListener('DOMContentLoaded', () => {
    seedDemoDataIfEmpty();

    // Land on whatever page the URL hash points to (supports refresh / deep link),
    // otherwise start on the landing page.
    const hashPage = location.hash.replace('#', '');
    if (hashPage && document.getElementById(hashPage)) {
        showPage(hashPage, {}, true);
    } else {
        renderDashboard(); // pre-render so data is ready the instant the user navigates in
    }
});
