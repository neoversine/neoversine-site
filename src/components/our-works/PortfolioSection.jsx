import React, { useEffect, useState } from 'react'
import { X, ArrowUpRight, Play, Maximize2, Minus } from 'lucide-react'

// --- 1. FULL DATASET WITH DETAILED DESCRIPTIONS ---
// I have updated all 36 projects with a 'longDesc' for the modal view.
const allProjects = [
  // === COLUMN 1: COMMERCE & MCP ===
  { 
    id: 1, category: "Commerce", client: "Global Retail Solutions", title: "AI E-Commerce OS", tech: ["React", "Stripe Connect", "AI Workers", "Redis"], 
    desc: "Complete OS for automated e-commerce management.",
    longDesc: "A comprehensive operating system designed to automate every aspect of high-volume e-commerce. From intelligent inventory tracking and algorithmic product listing generation to automated order fulfillment routing and tier-1 customer service resolution, this AI-powered OS acts as the central nervous system for scaling retail operations."
  },
  { 
    id: 2, category: "Commerce", client: "FastTrack Logistics", title: "Universal Shop Agent", tech: ["Node.js", "GraphQL API", "MongoDB"], 
    desc: "Autonomous agent handling orders & inventory.",
    longDesc: "An autonomous background agent that acts as a 24/7 store manager across multiple channels (Shopify, Amazon, internal DB). It constantly monitors stock levels to trigger reorders, updates product availability in real-time, and flag anomalous orders for human review, ensuring zero downtime in sales operations."
  },
  { 
    id: 3, category: "Commerce", client: "LogiTech Partners", title: "Backend Integration", tech: ["Python", "PostgreSQL", "Docker"], 
    desc: "Unified product, order, and fulfillment sync.",
    longDesc: "A robust middleware layer that unifies disparate systems. It bridges legacy ERP software with modern storefront APIs, ensuring that product data, sales orders, and shipping tracking information remain perfectly synchronized across the entire enterprise technology stack without manual intervention."
  },
  { 
    id: 4, category: "Commerce", client: "FinCorp Tech", title: "Payment Automations", tech: ["Stripe API", "AWS Lambda", "Webhooks"], 
    desc: "Automated payment routing and reconciliation.",
    longDesc: "A serverless automation suite handling complex payment flows. It manages multi-party payouts, automatically handles chargeback disputes based on predefined logic, and reconciles transaction logs with accounting software in real-time, reducing financial administrative overhead by over 80%."
  },
  { 
    id: 5, category: "Commerce", client: "SaaS Collective", title: "Event-Driven Workflows", tech: ["Apache Kafka", "Redis Pub/Sub"], 
    desc: "Real-time webhook handling system.",
    longDesc: "An event bus architecture designed to ingest and process thousands of webhooks per second from various SaaS tools. It guarantees event delivery and triggers complex downstream actions—like provisioning user accounts or updating CRMs—with sub-second latency."
  },
  { 
    id: 6, category: "Commerce", client: "B2B Solutions", title: "AI Invoice Gen", tech: ["GPT-4o", "PDF Kit", "Node.js"], 
    desc: "Plug-and-play AI invoice generation.",
    longDesc: "An intelligent microservice that turns raw transaction data into compliant, professional PDF invoices. It uses AI to correctly categorize line items, apply regional tax rules, and generate personalized invoice notes, delivered instantly via email or API response."
  },
  { 
    id: 7, category: "Commerce", client: "SupportAI Inc", title: "Dynamic FAQ System", tech: ["NLP", "Pinecone", "LangChain"], 
    desc: "Document reasoning for customer support.",
    longDesc: "A RAG (Retrieval-Augmented Generation) system that ingests product manuals and support docs. It allows customers to ask natural language questions and receive instant, accurate answers cited directly from the source material, deflecting tier-1 support tickets."
  },
  { 
    id: 8, category: "MCP", client: "Neoversine Lab", title: "MCP Agent Arch", tech: ["Anthropic Model Context Protocol", "Rust"], 
    desc: "Standardized Model Context Protocol agents.",
    longDesc: "An implementation of the Model Context Protocol to create standardized, interoperable AI agents. This architecture allows different AI models and tools to share context and collaborate on complex tasks in a secure, defined manner, laying the groundwork for large-scale agentic systems."
  },
  { 
    id: 9, category: "MCP", client: "SalesFlow CRM", title: "CRM Follow-up Agent", tech: ["LangChain", "HubSpot API", "Salesforce"], 
    desc: "Autonomous lead follow-up system.",
    longDesc: "An agent that monitors CRM pipelines for stalled leads. Based on previous interactions and lead score, it autonomously crafts and sends personalized follow-up emails or schedules tasks for human sales reps, ensuring no prospect falls through the cracks."
  },
  { 
    id: 10, category: "MCP", client: "E-Shop Enterprise", title: "Intel. Order Assistant", tech: ["AI Agents", "RAG", "Zendesk API"], 
    desc: "Smart assistant for order modification.",
    longDesc: "A customer-facing agent embedded in chat that can autonomously handle complex order modifications. It verifies user identity, checks business rules (e.g., shipping cutoff times), and directly interfaces with the OMS to change addresses, swap items, or cancel orders without human support."
  },
  { 
    id: 11, category: "MCP", client: "Manufacture Inc", title: "ERP Automation Agents", tech: ["SAP BTP", "Python Selenium"], 
    desc: "Agents controlling ERP data entry.",
    longDesc: "A suite of vision-based agents designed to interact with legacy SAP interfaces. They automate repetitive data entry tasks, transfer data between disconnected modules, and generate daily production reports, bridging the gap between modern AI and older industrial software."
  },
  { 
    id: 12, category: "MCP", client: "Enterprise Corp", title: "Cross-System Agents", tech: ["Temporal.io", "Microservices"], 
    desc: "Agents that take action across multiple apps.",
    longDesc: "A highly reliable orchestration framework enabling long-running workflows that span multiple third-party applications. For example, an agent can trigger onsite onboarding in HR software, provision accounts in IT systems, and send welcome kits via a logistics provider in one coordinated flow."
  },

  // === COLUMN 2: AI AGENTS ===
  { 
    id: 13, category: "AI Agents", client: "AlphaQuant Capital", title: "Trading Doc Agent", tech: ["Gemini Pro Vision", "LangChain", "ChromaDB"], 
    desc: "Financial document analysis agent.",
    longDesc: "Built for a quantitative trading firm, this agent rapidly ingests and analyzes complex financial documents like 10-Ks and earnings calls. It extracts key metrics, identifies risk factors, and summarizes market sentiment, drastically reducing manual research time for analysts."
  },
  { 
    id: 14, category: "AI Agents", client: "LegalTech Innovators", title: "Semantic Retrieval", tech: ["Pinecone Hybrid Search", "OpenAI Embeddings"], 
    desc: "High-precision semantic search pipeline.",
    longDesc: "A state-of-the-art search pipeline for a legal database. It goes beyond keyword matching by understanding the intent and semantic meaning of legal queries, retrieving highly relevant case law and precedents even when exact phrasing doesn't match."
  },
  { 
    id: 15, category: "AI Agents", client: "PrivacyFirst Health", title: "Local RAG System", tech: ["Ollama", "LlamaIndex", "Mistral-7B"], 
    desc: "Secure, local-only document chat.",
    longDesc: "An air-gapped Retrieval-Augmented Generation system deployed on-premise for a healthcare provider. It allows staff to query sensitive patient records and internal protocols without any data ever leaving their secure internal network."
  },
  { 
    id: 16, category: "AI Agents", client: "Future Research Lab", title: "LangGraph Multi-Agent", tech: ["LangGraph", "Python", "GPT-4 Turbo"], 
    desc: "Collaborative agent swarm architecture.",
    longDesc: "An experimental framework where multiple specialized agents (e.g., Planner, Coder, Reviewer) collaborate in a directed graph structure to solve complex, multi-step problems autonomously, demonstrating self-correcting code generation capabilities."
  },
  { 
    id: 17, category: "AI Agents", client: "CorpExec Suite", title: "AI Email Summarizer", tech: ["Gmail API", "Local LLM", "OAuth2"], 
    desc: "Daily executive briefing generator.",
    longDesc: "A personalized agent that connects to executive email accounts. Every morning, it analyzes incoming threads, categorizes them by urgency, and generates a concise, actionable briefing document highlighting critical decisions required for the day."
  },
  { 
    id: 18, category: "AI Agents", client: "HR Tech Giants", title: "Job Research Agent", tech: ["Scrapingbee", "Data Analysis Agents"], 
    desc: "Automated market research for recruiters.",
    longDesc: "An autonomous agent that constantly scans job boards and competitor career pages. It collects data on salary ranges, required skills, and hiring volume across different sectors, providing real-time market intelligence dashboards for recruitment agencies."
  },
  { 
    id: 19, category: "AI Agents", client: "Web3 Community", title: "Telegram GenAI Copilot", tech: ["Aiogram", "Telegram Bot API", "GPT-4"], 
    desc: "Personal AI assistant inside Telegram.",
    longDesc: "A powerful bot embedded in Telegram used by community managers. It can moderate chats, answer frequently asked questions based on community docs, summarize long conversational threads, and even draft announcements based on brief prompts."
  },
  { 
    id: 20, category: "AI Agents", client: "SaaS ScaleUp", title: "Revenue Opt. Agent", tech: ["Python Pandas", "Stripe Sigma", "AI Analysis"], 
    desc: "Agent analyzing churn and revenue trends.",
    longDesc: "A data analyst agent that connects to billing and usage data. It runs continuous analysis to identify patterns leading to churn, flags at-risk high-value accounts, and suggests pricing model optimizations based on usage cohorts."
  },
  { 
    id: 21, category: "AI Agents", client: "Global MediaHouse", title: "Blog Idea Generator", tech: ["SEO APIs", "Trend Analysis", "Content AI"], 
    desc: "Trend-based content topic generator.",
    longDesc: "An agent that monitors search trends, social media discussions, and competitor content. Based on this signal data, it generates a weekly list of high-potential blog post ideas complete with SEO keywords, target audience analysis, and structural outlines."
  },
  { 
    id: 22, category: "AI Agents", client: "BrandAgency NYC", title: "AI Social Planner", tech: ["LinkedIn API", "Twitter API", "Buffer"], 
    desc: "Automated posting and scheduling agent.",
    longDesc: "An automation tool that takes long-form content (like blogs or whitepapers) and autonomously repurposes it into a month's worth of engaging social media posts across different platforms, scheduling them for optimal engagement times."
  },
  { 
    id: 23, category: "AI Agents", client: "DevTool Co.", title: "Code Debugging Agent", tech: ["AST Parsing", "LLM Code Analysis"], 
    desc: "Automated error analysis and patching.",
    longDesc: "Integrated into the CI/CD pipeline, this agent analyzes failed build logs. It identifies the root cause of the error, suggests potential code fixes, and in some cases, can even open an automated pull request with the patch for developer review."
  },
  { 
    id: 24, category: "AI Agents", client: "Internal Ops", title: "Workflow Suite", tech: ["n8n", "Zapier Enterprise"], 
    desc: "20+ additional micro-automations.",
    longDesc: "A collection of over 20 smaller, targeted automation flows handling routine internal tasks like onboarding new employees, synchronizing data between project management tools, and generating weekly status reports, saving hundreds of human hours monthly."
  },

  // === COLUMN 3: DATA & INTERNAL ===
  { 
    id: 25, category: "Data Eng", client: "AgriTech Data", title: "Unified RSS Ingestion", tech: ["XML Parsing", "RabbitMQ", "RSS"], 
    desc: "Multi-source live feed merger.",
    longDesc: "A high-throughput pipeline that ingests agricultural data feeds from hundreds of disparate government and private sources globally. It normalizes the data into a unified format for real-time analysis of crop yields and market prices."
  },
  { 
    id: 26, category: "Data Eng", client: "NewsCorp International", title: "Live Feed Merger", tech: ["WebSockets", "Golang"], 
    desc: "Real-time news aggregation engine.",
    longDesc: "A low-latency engine designed to connect to dozens of live news wire WebSockets. It merges, de-duplicates, and tags breaking news headlines in milliseconds, feeding live dashboards for journalists in the newsroom."
  },
  { 
    id: 27, category: "Data Eng", client: "DataLake Solutions", title: "Feed Normalization", tech: ["Apache Airflow", "Pandas", "dbt"], 
    desc: "Standardizing messy data streams.",
    longDesc: "A robust ETL process that takes messy, unstructured data from various partner APIs and legacy SFTP drops. It cleans, validates, and transforms the data into a pristine, queryable schema in a modern data warehouse."
  },
  { 
    id: 28, category: "Scraping", client: "DataMiner Hedge Fund", title: "Full Scraping Stack", tech: ["Puppeteer Cluster", "Residential Proxies", "K8s"], 
    desc: "Enterprise scraping w/ CAPTCHA solving.",
    longDesc: "A Kubernetes-scaled scraping infrastructure built for high-volume data extraction from complex, anti-bot protected websites. It handles proxy rotation, browser fingerprinting, and automated CAPTCHA solving to ensure reliable data delivery."
  },
  { 
    id: 29, category: "Dashboards", client: "Neoversine Internal", title: "Internal Viz System", tech: ["React", "Recharts", "TailwindUI"], 
    desc: "Real-time internal metric visualization.",
    longDesc: "A custom-built central command dashboard for Neoversine engineers. It visualizes the real-time health, latency, and error rates of all deployed agents and scraping jobs, providing instant alerts on system bottlenecks."
  },
  { 
    id: 30, category: "Dashboards", client: "Global Logistics", title: "Complex Dashboards", tech: ["Next.js", "Tremor Components"], 
    desc: "Non-SaaS bespoke business dashboards.",
    longDesc: "A suite of highly customized BI dashboards that integrate deeply with the client's proprietary logistics software. Unlike off-the-shelf SaaS tools, these dashboards are tailored to their specific workflows for tracking fleet efficiency and delivery route optimization."
  },
  { 
    id: 31, category: "Dashboards", client: "ConstructCo.", title: "Power BI Intelligence", tech: ["Power BI Embedded", "DAX", "Azure SQL"], 
    desc: "BI integration for operations data.",
    longDesc: "A Power BI implementation that bridges data from on-site IoT sensors and ERP financial data. It provides construction site managers with a real-time view of project profitability against resource utilization."
  },
  { 
    id: 32, category: "Dashboards", client: "DevOps Specialists", title: "Monitoring Dashboards", tech: ["Grafana", "Prometheus", "Loki"], 
    desc: "Observability for scraping health.",
    longDesc: "Specific observability dashboards designed to track the health of scraping infrastructure. It monitors proxy success rates, bandwidth usage, target site latency changes, and cost-per-successful-fetch metrics."
  },
  { 
    id: 33, category: "Internal", client: "Neoversine Core", title: "Orchestration Layer", tech: ["Kubernetes", "ArgoCD", "Docker"], 
    desc: "Multi-agent workflow management.",
    longDesc: "The foundational infrastructure that manages the lifecycle of hundreds of containerized AI agents. It handles deployment rollouts, auto-scaling based on load, and resource allocation to ensure optimal performance across the ecosystem."
  },
  { 
    id: 34, category: "Internal", client: "Neoversine R&D", title: "Knowledge Embeddings", tech: ["Vector Database Pipeline"], 
    desc: "Corporate knowledge base pipeline.",
    longDesc: "An automated pipeline that continuously syncs internal documentation, Notion pages, and Slack conversations into a vector database. This powers an internal 'second brain' that employees can query to find information instantly."
  },
  { 
    id: 35, category: "Internal", client: "Neoversine Core", title: "System Reliability", tech: ["Terraform", "AWS", "Chaos Engineering"], 
    desc: "Failover and recovery architecture.",
    longDesc: "The Infrastructure-as-Code definitions and architectural patterns that ensure high availability. It includes multi-region failover strategies and automated recovery scripts to minimize downtime in the event of infrastructure failure."
  },
  { 
    id: 36, category: "Internal", client: "Neoversine Core", title: "Proxy Scaling", tech: ["Node.js", "Networking Middleware"], 
    desc: "High-throughput proxy rotation frame.",
    longDesc: "A custom-built middleware layer that sits between scrapers and proxy providers. It intelligently manages proxy pools, testing their health and rotating IP addresses based on target-specific ban logic to maximize success rates."
  },
];

const col1 = allProjects.slice(0, 12);
const col2 = allProjects.slice(12, 24);
const col3 = allProjects.slice(24, 36);

// --- 2. NEW "BEMO-STYLE" MODAL COMPONENT ---
const BemoModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    // Full screen fixed modal container with slide-in animation
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#050505] text-white animate-in slide-in-from-bottom-[5%] duration-500">
      
      {/* Top Navigation Bar (Matches Reference Style) */}
      <div className="flex-shrink-0 h-16 border-b border-neutral-800 flex items-center justify-between px-6 md:px-12 bg-[#050505] z-50 font-mono">
        <div className="flex items-center gap-6">
            <span className="font-bold tracking-tighter text-xl">NEOVERSINE.</span>
            <span className="hidden md:inline-flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-wider">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               System Active
            </span>
        </div>
        <div className="flex items-center gap-8">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 hidden md:block">PROJECT ID // {project.id.toString().padStart(3, '0')}</span>
            <button 
                onClick={onClose} 
                className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-purple-400 transition-colors"
            >
                <span className="hidden md:block">Close</span>
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
        </div>
      </div>

      {/* Scrollable Main Content Area */}
      <div className="flex-grow overflow-y-auto scrollbar-hide">
        <div className="max-w-[1400px] mx-auto w-full font-sans">
            
            {/* Big Title Section */}
            <div className="p-6 md:p-12 pb-2 md:pb-6">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-none uppercase">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-400 font-medium">
                    Category: <span className="text-purple-400">{project.category}</span>
                </p>
            </div>

            {/* --- MASSIVE MEDIA PLACEHOLDER (Matches Reference) --- */}
            <div className="w-full aspect-video bg-neutral-900/50 border-y border-neutral-800 relative group overflow-hidden">
                {/* Subtle background texture/gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 to-transparent opacity-50"></div>
                
                {/* Play Button / Placeholder Indicator */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-500 cursor-pointer group-hover:bg-purple-500/20 group-hover:border-purple-500/50">
                        <Play className="w-12 h-12 fill-white text-white ml-2" />
                    </div>
                    <p className="mt-8 font-mono text-xs text-neutral-500 uppercase tracking-widest">
                        [ Placeholder: Insert 16:9 Video or High-Res Image Here ]
                    </p>
                </div>
                
                {/* Corner timestamps/indicators like the reference */}
                <div className="absolute bottom-4 left-4 font-mono text-xs text-neutral-600">REC // 00:30:24:12</div>
                <div className="absolute bottom-4 right-4 font-mono text-xs text-neutral-600">4K RENDER</div>
            </div>

            {/* --- INFO GRID SECTION (The core structure of the reference) --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 border-b border-neutral-800">
                
                {/* Cell 1: POWERED BY CLIENT (Crucial Requirement) */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-800 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Minus className="w-3 h-3 text-purple-500" /> Client
                        </h3>
                        <p className="text-2xl md:text-3xl font-bold leading-tight">
                            {project.client}
                        </p>
                    </div>
                    <div className="mt-8">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            Powered By
                        </span>
                    </div>
                </div>

                {/* Cell 2 & 3: TECH STACK & ROLE (Spans 2 columns) */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-neutral-800 md:col-span-2">
                     <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Minus className="w-3 h-3 text-purple-500" /> Technologies Engineered
                    </h3>
                     <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono">
                        {project.tech.map((t,i) => (
                            <span key={i} className="text-lg text-white relative after:content-['/'] after:ml-6 after:text-neutral-700 last:after:content-['']">
                                {t}
                            </span>
                        ))}
                     </div>
                </div>

                {/* Cell 4: PROJECT STATUS / INFO */}
                <div className="p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Minus className="w-3 h-3 text-purple-500" /> Status
                        </h3>
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                            </span>
                            <span className="text-xl font-bold">Deployed & Live</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Region</h3>
                        <p className="text-sm font-mono text-neutral-300">Global / Multi-Region</p>
                    </div>
                </div>
            </div>

            {/* --- DESCRIPTION & CREDITS FOOTER --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 bg-neutral-900/20">
                {/* Main Description Body (Spans 3 columns) */}
                <div className="p-8 md:p-12 md:col-span-3 md:border-r border-neutral-800">
                    <h3 className="text-xl font-bold mb-8 uppercase tracking-tight">Project Brief & Execution.</h3>
                    
                    {/* Using the long description here */}
                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-200 font-medium mb-12">
                        {project.longDesc}
                    </p>
                    
                    
                </div>
                
                {/* Right Sidebar for Deliverables / Links */}
                <div className="p-8 md:p-12 bg-neutral-900/40">
                     <div className="mb-12">
                        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Minus className="w-3 h-3 text-purple-500" /> Key Deliverables
                        </h3>
                        <ul className="space-y-4 font-mono text-sm text-neutral-300">
                            <li className="flex items-center gap-3 group cursor-pointer hover:text-purple-400 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-purple-400" /> 
                                Source Code Repos
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer hover:text-purple-400 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-purple-400" /> 
                                API Documentation
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer hover:text-purple-400 transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-purple-400" /> 
                                System Architecture Diagram
                            </li>
                        </ul>
                     </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

// --- 3. SCROLLING COLUMN COMPONENT (Unchanged from previous version) ---
const ScrollingColumn = ({ items, direction = 'up', speed = 50, onProjectClick }) => {
  return (
    <div className="relative h-full overflow-hidden group">
        {/* Gradient masks */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* The moving track */}
        <div 
          className={`flex flex-col gap-4 w-full ${
            direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'
          } group-hover:[animation-play-state:paused]`}
        >
          {/* Doubled items for infinite loop */}
          {[...items, ...items].map((project, idx) => (
            <div 
              key={`${project.id}-${idx}`}
              onClick={() => onProjectClick(project)}
              className="
                relative bg-[#0A0A0A] border border-neutral-800/50 p-6 
                cursor-pointer transition-all duration-300
                hover:bg-neutral-900 hover:border-purple-500/30
                group/card border-l-2 border-l-transparent hover:border-l-purple-500
              "
            >
              <div className="flex justify-between items-start mb-3">
                 <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider border border-purple-400/20 px-2 py-0.5 rounded-full">
                    {project.category}
                 </span>
                 <Maximize2 className="w-3 h-3 text-neutral-700 group-hover/card:text-white transition-colors" />
              </div>
              
              <h4 className="text-white font-bold text-lg leading-tight mb-2 font-sans tracking-tight group-hover/card:text-purple-100">
                  {project.title}
              </h4>
              <p className="text-neutral-500 text-xs line-clamp-2 font-mono leading-relaxed">
                  {project.desc}
              </p>
            </div>
          ))}
        </div>
    </div>
  );
};

// --- 4. MAIN PAGE COMPONENT ---
export default function InfiniteProjectScroll() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#050505] text-white py-20 px-4 md:px-8 font-sans overflow-hidden relative">
      
      {/* Animation Keyframes */}
      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation: marquee-up 80s linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-down 80s linear infinite;
        }
        /* Hide scrollbar for modal */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto h-[85vh] flex flex-col">
        {/* Main Header */}
        <div className="text-left mb-12 flex-shrink-0 border-b border-neutral-800 pb-8 flex items-end justify-between">
           <div>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-2 leading-none">
                    WORK<span className="text-purple-500">.</span>
                </h2>
                <p className="text-neutral-500 text-lg font-mono uppercase tracking-widest">
                    DEPLOYED SYSTEMS // [ 36 ACTIVE ]
                </p>
           </div>
           <div className="hidden md:block text-right">
               <p className="text-xs font-mono text-neutral-600 uppercase">Neoversine Engineered Reality</p>
           </div>
        </div>

        {/* The 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 flex-grow overflow-hidden h-full relative bg-[#050505]">
            {/* Column 1: Up */}
            <div className="h-full relative border-r border-neutral-800/30 pr-2 md:pr-4">
                <ScrollingColumn items={col1} direction="up" onProjectClick={setSelectedProject} />
            </div>
            {/* Column 2: Down (Offset) */}
            <div className="h-full relative border-r border-neutral-800/30 pr-2 md:pr-4 pt-20">
                <ScrollingColumn items={col2} direction="down" onProjectClick={setSelectedProject} />
            </div>
            {/* Column 3: Up */}
            <div className="h-full relative hidden md:block">
                <ScrollingColumn items={col3} direction="up" onProjectClick={setSelectedProject} />
            </div>
        </div>
      </div>

      {/* RENDER THE BEMO-STYLE MODAL */}
      {selectedProject && (
        <BemoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
