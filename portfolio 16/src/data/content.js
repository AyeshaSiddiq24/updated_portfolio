// ────────────────────────────────────────────────────────────
// All editable site content lives here. Change text, links,
// and data below — no need to touch component files.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ayesha Siddiq',
  firstName: 'AYESHA',
  lastName: 'SIDDIQ',
  role: '[SYS.ROOT] // AI/ML ENGINEER',
  tagline:
    "AI/ML Engineer. Professional bug whisperer. Occasional 2am firefighter",
  focusAreas: ['Artificial Intelligence', 'Data Science'],
  availableForWork: true,
  email: 'siddiq.a@northeastern.edu',
  linkedin: 'linkedin.com/in/ayesha-s-711277421',
  github: 'github.com/AyeshaSiddiq24',
  resumeFileName: 'Ayesha_Siddiq_Resume.pdf',
}

export const about = {
  heading: 'About Me.',
  lead: 'Not here to make a cool demo. Here to make it not break at 2am.',
  paragraphs: [
    "3+ years building AI across fintech and AI computing — not the \"works on my laptop\" kind, the kind that has to survive real transactions, real users, and zero patience for downtime.",
    "I live somewhere between GPU-accelerated LLM inference, fraud/credit-risk models, and RAG over structured knowledge. Honestly — a model that's 2% more accurate but 10x slower to ship? Not a flex.",
    "Off the clock I'm still nerding out over LLM inference optimization and knowledge graphs. It's less \"work-life balance\" and more \"same brain rot, different tab.\"",
  ],
  tags: ['LLM Inference', 'Knowledge Graphs', 'Fraud Detection', 'RAG Systems', 'MLOps', 'GPU Compute', 'Artificial Intelligence', 'Data Science'],
  photo: '/about-photo.jpg',
}

export const experienceMetrics = [
  { value: '3+', label: 'YEARS EXPERIENCE' },
  { value: '2', label: 'COMPANIES' },
  { value: '8M+', label: 'TXNS / MONTH' },
  { value: '1.8K', label: 'TOKENS / SEC' },
]

export const experience = [
  {
    type: 'job',
    range: 'Oct 2025 — Present',
    location: 'United States',
    title: 'AI/ML Engineer',
    company: 'AMD',
    stats: [
      { value: '28%', label: 'LATENCY REDUCTION' },
      { value: '1.8K', label: 'TOKENS / SEC' },
    ],
    description:
      'Optimizing PyTorch and TensorFlow LLM inference workloads on AMD Instinct accelerators, profiling ROCm and HIP execution to reduce median latency by 28% across benchmark suites. Adapted Llama-family workloads across CUDA and ROCm using ONNX Runtime and vLLM, and partnered with GPU software and performance engineering teams to raise throughput to 1.8K+ tokens per second.',
  },
  {
    type: 'job',
    range: 'May 2022 — Aug 2024',
    location: 'Hyderabad, India',
    title: 'AI/ML Engineer',
    company: 'Accenture',
    stats: [
      { value: '8M+', label: 'TXNS / MONTH' },
      { value: '11K+', label: 'HOURS SAVED / YR' },
    ],
    description:
      'Built fraud detection models processing 8M+ monthly transactions and credit risk models across 2.2M+ customer profiles using XGBoost and PyTorch. Designed a GPT-4-powered RAG assistant enabling 1,200+ analysts to securely query internal policy and regulatory guidance, and engineered NLP pipelines that reduced manual review time by 11,000+ analyst hours annually.',
  },
  {
    type: 'education',
    range: 'May 2026',
    location: 'Boston, MA · GPA 3.6/4.0',
    title: 'MS, Information Systems',
    company: 'Northeastern University',
    description:
      'Application Engineering and Development, Data Management & Database Design, Data Science using R, Web Design & UX, Program Structure & Algorithms.',
  },
  {
    type: 'education',
    range: 'Dec 2020 — June 2024',
    location: 'Hyderabad · GPA 3.9/4',
    title: 'BE, Artificial Intelligence and Data Science  ',
    company: 'Muffakham Jah College of Engineering and Technology',
    description: 'Focus: LLM | AGENTS | RAG Pipelines .',
  },
]

export const projects = [
  {
    title: 'Medical SubgraphRAG',
    subtitle: 'Precision Medicine Knowledge Retrieval',
    icon: 'network',
    cover: '/projects/medical-subgraphrag.jpg',
    description:
      'Adapted SubgraphRAG (ICLR 2025, Georgia Tech) for precision medicine, building a retrieval pipeline over PrimeKG (31K+ nodes, 284K+ relationships) using Neo4j, Directional Distance Encoding, and a lightweight MLP retriever. Achieved 60% Hit@1 versus a 20% cosine-similarity baseline — a 3x improvement — and extended the system with four applied clinical tools via a Streamlit application.',
    tags: ['Python', 'FastAPI', 'React', 'LangChain', 'HuggingFace', 'FAISS', 'Neo4j', 'Knowledge Graphs', 'Llama 3.3', 'Streamlit'],
    source: '#',
  },
  {
    title: 'AI Resume Screening & Job Matching',
    subtitle: 'End-to-end semantic match scoring',
    icon: 'fileText',
    cover: '/projects/resume-screening.jpg',
    description:
      'End-to-end AI system that evaluates resumes against job descriptions using semantic similarity, NLP, and vector embeddings, returning an explainable match score alongside key strengths and skill gaps.',
    tags: ['Python', 'FastAPI', 'React', 'LangChain', 'HuggingFace', 'FAISS'],
    source: '#',
  },
  {
    title: 'Multi-Agent Research & Content System',
    subtitle: 'Autonomous web research & generation',
    icon: 'bot',
    cover: '/projects/multi-agent-research.jpg',
    description:
      'Autonomous multi-agent system that performs live web research and generates structured outputs — reports, summaries, slide decks, LinkedIn posts, quizzes, and simplified explanations — using Gemini 2.5.',
    tags: ['Python', 'Gemini 2.5', 'DDGS', 'Multi-Agent', 'Streamlit', 'python-pptx'],
    source: '#',
  },
  {
    title: 'Real-Time Fraud Detection',
    subtitle: 'Scalable distributed ML pipeline',
    icon: 'shield',
    cover: '/projects/fraud-detection.jpg',
    description:
      'Scalable fraud detection pipeline using PySpark and Random Forest models, with feature engineering, distributed model training, MLflow tracking, and Dockerized deployment.',
    tags: ['Python', 'PySpark', 'Spark MLlib', 'Random Forest', 'MLflow', 'Docker'],
    source: '#',
  },
  {
    title: 'MedEase — Symptom & Drug Recommendation',
    subtitle: 'ML-driven healthcare system (Published)',
    icon: 'stethoscope',
    cover: '/projects/medease.jpg',
    description:
      'Published research on an ML-powered healthcare system for symptom analysis, diagnostic predictions, and drug recommendations, with a responsive UI. (Published, IJIRIT 2024)',
    tags: ['Machine Learning', 'Python', 'Healthcare AI'],
    source: '#',
  },
  {
    title: 'Statistical Analysis of GitHub Popularity',
    subtitle: 'Large-scale study of 10K+ repositories',
    icon: 'barChart',
    cover: '/projects/github-stats.jpg',
    description:
      'Large-scale statistical study on 10,000+ GitHub repositories analyzing factors affecting popularity, using regression models, ANOVA, and robust diagnostics.',
    tags: ['R', 'RStudio', 'Regression', 'ANOVA', 'ggplot2', 'Kaggle Dataset'],
    source: '#',
  },
  {
    title: 'Library Management System',
    subtitle: 'Oracle-based automation',
    icon: 'library',
    cover: '/projects/library-management.jpg',
    description:
      'Oracle-based database system automating inventory, member management, borrowing, and reporting — improving operational efficiency and reducing manual errors.',
    tags: ['Oracle DB', 'SQL', 'PL/SQL'],
    source: '#',
  },
  {
    title: 'Custom Store — Role-Based E-Commerce',
    subtitle: 'Full-stack multi-role platform',
    icon: 'shoppingCart',
    cover: '/projects/custom-store.jpg',
    description:
      'Full-stack e-commerce platform with role-based dashboards for Admin, Seller, Customer, and Delivery Agent, including authentication, order tracking, and payment integration.',
    tags: ['React', 'Node.js', 'Express', 'Bootstrap', 'REST API', 'bcrypt'],
    source: '#',
  },
  {
    title: 'Hospital Management System',
    subtitle: 'Centralized Java-based HMS',
    icon: 'hospital',
    cover: '/projects/hospital-management.jpg',
    description:
      'Centralized Java-based HMS managing patient records, appointments, billing, and staff coordination — reducing operational bottlenecks and improving data accessibility.',
    tags: ['Java', 'MySQL', 'NetBeans'],
    source: '#',
  },
]

export const skills = {
  heading: 'Skills & Certifications.',
  lead: 'Technical strengths backed by real-world projects and industry certifications.',
  categories: [
    {
      title: 'AI & Machine Learning',
      items: ['Large Language Models (LLMs)', 'Generative AI', 'Multi-Agent Systems', 'Natural Language Processing (NLP)', 'Prompt Engineering', 'Model Training & Fine-tuning', 'MLOps'],
    },
    {
      title: 'Data Engineering',
      items: ['ETL Pipelines', 'PySpark', 'Spark MLlib', 'Distributed Systems', 'Feature Engineering', 'Vector Databases (FAISS)', 'Data Warehousing'],
    },
    {
      title: 'Backend & Systems',
      items: ['FastAPI', 'REST APIs', 'Microservices', 'Docker', 'MLflow', 'SQL / PL-SQL', 'Oracle DB'],
    },
    {
      title: 'Data Analysis & Visualization',
      items: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'R', 'ggplot2', 'Regression & ANOVA'],
    },
  ],
  certifications: [
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Databricks · 2025',
      tags: 'Deep Learning · CNN · RNN · AI',
    },
    {
      title: '5-Day AI Agents Intensive',
      issuer: 'Google & Kaggle · 2025',
      tags: 'LLMs · Multi-Agent · NLP · Streamlit',
    },
    {
      title: 'Oracle Cloud Data Science Professional',
      issuer: 'Oracle · 2025',
      tags: 'Machine Learning · SQL · Cloud Systems',
    },
    {
      title: 'Python Data Analysis & Visualization',
      issuer: 'Udemy · 2024',
      tags: 'Python · Pandas · Matplotlib · Seaborn',
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'JPMorgan Chase (Forage) · 2025',
      tags: 'Backend Systems · Java · APIs',
    },
  ],
}

export const contact = {
  heading: 'Get in Touch.',
  lead: "I'm open to full-time opportunities, internships, and collaborations in AI and machine learning.",
}

export const footer = {
  blurb: 'AI/ML Engineer — building production-grade AI systems.',
  navigate: [
    ['Home', '#home'],
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Contact', '#contact'],
  ],
  build: 'REACT // v18',
}

export const terminalLines = [
  'loading model weights :: llama-3',
  'rocm::hip runtime :: ready',
  'kv_cache allocated :: 12.4 GB',
  'attention kernel :: flash-attn-v3',
  'batch scheduler :: continuous',
  'tokens/sec :: 1840',
  'p50 latency :: 38ms',
  'gpu_util :: 0.97',
  'rag::retriever warm :: primekg',
  'vector_index :: faiss.ivf',
  'fraud_stream :: 8.2M tx/day',
  'mlflow::run :: 44a9c2',
  'checkpoint saved :: epoch 12',
  'compiling triton kernels ...',
  'dequantize :: int8 -> fp16',
  'throughput optimized :: +28%',
  'health :: green',
  'system :: nominal',
  'init_inference_engine() ... OK',
]
