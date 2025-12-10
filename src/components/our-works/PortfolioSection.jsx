import React, { useState } from 'react'
import { ArrowUpRight, X, Layers, Code, User, FileText, Cpu } from 'lucide-react'

// Updated project data with more details for the modal view
const projects = [
  // --- COMMERCE ---
  {
    id: 1,
    category: "Commerce",
    title: "AI E-Commerce OS",
    client: "Global Retail Solutions",
    desc: "Complete operating system for automated e-commerce management.",
    longDesc: "A comprehensive operating system designed to automate every aspect of e-commerce. From inventory tracking and product listing generation to order fulfillment and customer service, this AI-powered OS streamlines the entire lifecycle. It integrates seamlessly with existing platforms like Shopify and WooCommerce, providing a unified control center for scaling businesses.",
    tech: ["React", "Node.js", "Python", "Stripe API", "Shopify API", "Redis"],
    imagePlaceholder: "E-Com OS Interface"
  },
  {
    id: 2,
    category: "Commerce",
    title: "Universal Shop Agent",
    client: "FastTrack Logistics",
    desc: "Autonomous agent handling products, orders, delivery, and inventory sync.",
    longDesc: "An autonomous AI agent that acts as a 24/7 store manager. It constantly monitors stock levels, places reorder requests, tracks shipments, and updates product availability in real-time across all sales channels. The agent can also handle routine customer inquiries regarding order status and delivery times.",
    tech: ["AI Agents", "API Integrations", "Node.js", "MongoDB", "Express"],
    imagePlaceholder: "Shop Agent Dashboard"
  },
  
  // --- AI AGENTS ---
  {
    id: 5,
    category: "AI Agents",
    title: "Trading Doc Agent",
    client: "AlphaQuant Capital",
    desc: "LangChain + Gemini powered agent for analyzing complex trading documents.",
    longDesc: "Built for a quantitative trading firm, this agent rapidly ingests and analyzes complex financial documents like 10-Ks, earnings reports, and market analyses. Using advanced RAG (Retrieval-Augmented Generation), it extracts key financial metrics, identifies risks, and summarizes market sentiment, drastically reducing manual research time.",
    tech: ["LangChain", "Gemini Pro", "ChromaDB", "Python", "FastAPI"],
    imagePlaceholder: "Trading Agent Interface"
  },
  {
    id: 7,
    category: "AI Agents",
    title: "LangGraph Multi-Agent",
    client: "Internal Neoversine Lab",
    desc: "Orchestrated chat system where multiple agents collaborate to solve tasks.",
    longDesc: "An experimental system demonstrating the power of multi-agent collaboration. A 'Research Agent', a 'Coder Agent', and a 'Reviewer Agent' work together in a directed acyclic graph (DAG) to take a high-level prompt (e.g., 'Build a snake game') and autonomously plan, code, debug, and finalize a working application.",
    tech: ["LangGraph", "Python", "Docker", "GPT-4o"],
    imagePlaceholder: "Multi-Agent Workflow Diagram"
  },

  // --- DASHBOARDS ---
  {
    id: 10,
    category: "Dashboards",
    title: "Power BI Intelligence",
    client: "ConstructCo.",
    desc: "KPI visualization for operations, bridging internal data to visual insights.",
    longDesc: "A suite of interactive Power BI dashboards specifically designed for an operations-heavy construction firm. It pulls data from various internal sources—ERP systems, project management tools, and IoT sensors on equipment—to provide real-time visibility into project profitability, resource utilization, and safety incidents.",
    tech: ["Power BI", "DAX", "SQL Server", "Azure Data Factory"],
    imagePlaceholder: "Power BI Dashboard Sample"
  }
]

const categories = ["All", "AI Agents", "Commerce", "Dashboards"]

// --- PROJECT DETAILS MODAL COMPONENT ---
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-black/80 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] border border-neutral-800 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-neutral-900/80 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* 1. Large Header Image/Video Placeholder */}
        <div className="w-full aspect-video bg-neutral-900 flex items-center justify-center border-b border-neutral-800 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
            {/* You will replace this div with your <img> or <video> tag */}
            <p className="text-neutral-500 font-mono text-xl z-10">[ IMAGE / VIDEO PLACEHOLDER FOR: {project.imagePlaceholder} ]</p>
            {/* Example for future use: <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" /> */}
        </div>

        <div className="flex flex-col md:flex-row">
          
          {/* 2. Main Content Column (Left) */}
          <div className="flex-1 p-8 md:p-12 md:border-r border-neutral-800">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              {project.title}
            </h2>
            
            {/* Project Description */}
            <div className="prose prose-lg prose-invert text-neutral-300 leading-relaxed mb-12">
              <p>{project.longDesc}</p>
            </div>

            {/* Client Attribution */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-purple-900/10 border border-purple-500/30">
              <User className="w-5 h-5 text-purple-400" />
              <p className="text-sm text-purple-300">
                Powered by <span className="font-semibold text-white">{project.client}</span>
              </p>
            </div>
          </div>

          {/* 3. Project Info Sidebar (Right) */}
          <div className="w-full md:w-80 p-8 bg-[#0C0C0C]">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-neutral-800 pb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              Project Info
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-2">Category</h4>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-neutral-900 border border-neutral-800 text-purple-400">
                  {project.category}
                </span>
              </div>

              <div>
                <h4 className="text-sm text-neutral-500 font-medium uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded border border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Add more info blocks here like 'Date', 'Role', etc. */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


// --- MAIN PORTFOLIO SECTION COMPONENT ---
export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null) // State to manage clicked project

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <div className={`min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-purple-500/30 ${selectedProject ? 'overflow-hidden h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
              Engineered Reality.
            </span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A deployed ecosystem of <span className="text-purple-400 font-medium">35+ autonomous systems</span>, agents, and data pipelines.
          </p>
        </div>

        {/* Infinite reels stream inserted below header */}
        {
          (() => {
            const allProjects = [
              { id: 1, title: "AI E-Commerce OS", category: "Commerce", client: "Global Retail", tech: ["React", "Stripe", "AI"], desc: "Complete OS for automated e-commerce management." },
              { id: 2, title: "Universal Shop Agent", category: "Commerce", client: "FastTrack", tech: ["Node.js", "API"], desc: "Autonomous agent handling orders & inventory." },
              { id: 3, title: "Backend Integration", category: "Commerce", client: "LogiTech", tech: ["Python", "SQL"], desc: "Unified product, order, and fulfillment sync." },
              { id: 4, title: "Payment Automations", category: "Commerce", client: "FinCorp", tech: ["Stripe", "Webhooks"], desc: "Automated payment routing and reconciliation." },
              { id: 5, title: "Event-Driven Workflows", category: "Commerce", client: "SaaS Co", tech: ["Kafka", "Redis"], desc: "Real-time webhook handling system." },
              { id: 6, title: "AI Invoice Gen", category: "Commerce", client: "B2B Sol", tech: ["GPT-4", "PDF Kit"], desc: "Plug-and-play AI invoice generation." },
              { id: 7, title: "Dynamic FAQ System", category: "Commerce", client: "SupportAI", tech: ["NLP", "Vector DB"], desc: "Document reasoning for customer support." },
              { id: 8, title: "MCP Agent Arch", category: "MCP", client: "Neoversine Lab", tech: ["Anthropic", "MCP"], desc: "Standardized Model Context Protocol agents." },
              { id: 9, title: "CRM Follow-up Agent", category: "MCP", client: "SalesFlow", tech: ["LangChain", "HubSpot"], desc: "Autonomous lead follow-up system." },
              { id: 10, title: "Intel. Order Assistant", category: "MCP", client: "E-Shop", tech: ["AI", "RAG"], desc: "Smart assistant for order modification." },
              { id: 11, title: "ERP Automation Agents", category: "MCP", client: "Manufacture Inc", tech: ["SAP", "Python"], desc: "Agents controlling ERP data entry." },
              { id: 12, title: "Cross-System Agents", category: "MCP", client: "Enterprise", tech: ["Orchestrator"], desc: "Agents that take action across multiple apps." },

              { id: 13, title: "Trading Doc Agent", category: "AI Agents", client: "AlphaQuant", tech: ["Gemini", "LangChain"], desc: "Financial document analysis agent." },
              { id: 14, title: "Semantic Retrieval", category: "AI Agents", client: "LegalTech", tech: ["Pinecone", "Embeddings"], desc: "High-precision semantic search pipeline." },
              { id: 15, title: "Local RAG System", category: "AI Agents", client: "PrivacyFirst", tech: ["Ollama", "LlamaIndex"], desc: "Secure, local-only document chat." },
              { id: 16, title: "LangGraph Multi-Agent", category: "AI Agents", client: "Research Lab", tech: ["LangGraph", "Python"], desc: "Collaborative agent swarm architecture." },
              { id: 17, title: "AI Email Summarizer", category: "AI Agents", client: "CorpExec", tech: ["Gmail API", "LLM"], desc: "Daily executive briefing generator." },
              { id: 18, title: "Job Research Agent", category: "AI Agents", client: "HR Tech", tech: ["Scraping", "Analysis"], desc: "Automated market research for recruiters." },
              { id: 19, title: "Telegram GenAI Copilot", category: "AI Agents", client: "Community", tech: ["Telegram Bot", "GPT"], desc: "Personal AI assistant inside Telegram." },
              { id: 20, title: "Revenue Opt. Agent", category: "AI Agents", client: "SaaS Scale", tech: ["Data Analysis"], desc: "Agent analyzing churn and revenue trends." },
              { id: 21, title: "Blog Idea Generator", category: "AI Agents", client: "MediaHouse", tech: ["SEO", "Content AI"], desc: "Trend-based content topic generator." },
              { id: 22, title: "AI Social Planner", category: "AI Agents", client: "BrandAgency", tech: ["Social API"], desc: "Automated posting and scheduling agent." },
              { id: 23, title: "Code Debugging Agent", category: "AI Agents", client: "DevTool", tech: ["AST", "LLM"], desc: "Automated error analysis and patching." },
              { id: 24, title: "Workflow Suite", category: "AI Agents", client: "Internal", tech: ["n8n", "Zapier"], desc: "20+ additional micro-automations." },

              { id: 25, title: "Unified RSS Ingestion", category: "Data Eng", client: "AgriTech", tech: ["RSS", "XML"], desc: "Multi-source live feed merger." },
              { id: 26, title: "Live Feed Merger", category: "Data Eng", client: "NewsCorp", tech: ["WebSockets"], desc: "Real-time news aggregation engine." },
              { id: 27, title: "Feed Normalization", category: "Data Eng", client: "DataLake", tech: ["Pandas", "Airflow"], desc: "Standardizing messy data streams." },
              { id: 28, title: "Full Scraping Stack", category: "Scraping", client: "DataMiner", tech: ["Puppeteer", "Proxies"], desc: "Enterprise scraping w/ CAPTCHA solving." },
              { id: 29, title: "Internal Viz System", category: "Dashboards", client: "Neoversine", tech: ["D3.js", "React"], desc: "Real-time internal metric visualization." },
              { id: 30, title: "Complex Dashboards", category: "Dashboards", client: "Logistics", tech: ["Custom UI"], desc: "Non-SaaS bespoke business dashboards." },
              { id: 31, title: "Power BI Intelligence", category: "Dashboards", client: "ConstructCo", tech: ["Power BI", "DAX"], desc: "BI integration for operations data." },
              { id: 32, title: "Monitoring Dashboards", category: "Dashboards", client: "DevOps", tech: ["Grafana", "Prometheus"], desc: "Observability for scraping health." },
              { id: 33, title: "Orchestration Layer", category: "Internal", client: "System", tech: ["K8s", "Docker"], desc: "Multi-agent workflow management." },
              { id: 34, title: "Knowledge Embeddings", category: "Internal", client: "R&D", tech: ["Vector DB"], desc: "Corporate knowledge base pipeline." },
              { id: 35, title: "System Reliability", category: "Internal", client: "Core", tech: ["SRE"], desc: "Failover and recovery architecture." },
              { id: 36, title: "Proxy Scaling", category: "Internal", client: "Core", tech: ["Networking"], desc: "High-throughput proxy rotation frame." },
            ]

            const col1 = allProjects.slice(0,12)
            const col2 = allProjects.slice(12,24)
            const col3 = allProjects.slice(24,36)

            const ScrollingColumn = ({ items, direction='up', onProjectClick }) => (
              <div className="relative h-80 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

                <div className={`flex flex-col gap-4 w-full ${direction==='up'?'animate-marquee-up':'animate-marquee-down'} group-hover:[animation-play-state:paused]`}>
                  {[...items,...items].map((p, i) => (
                    <div key={`${p.id}-${i}`} onClick={() => onProjectClick(p)} className="bg-[#0A0A0A] border border-neutral-800 p-4 rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.12)] transition">
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-neutral-900 rounded-md border border-neutral-800 text-purple-400">
                          <Layers className="w-5 h-5" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-neutral-600" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{p.title}</h4>
                      <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">{p.category}</p>
                      <p className="text-neutral-400 text-sm line-clamp-2">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )

            const ReelModal = ({ project, onClose }) => {
              if (!project) return null
              return (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/80">
                  <div className="relative w-full max-w-3xl bg-[#090909] border border-neutral-800 rounded-2xl p-6">
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800/60 hover:bg-white/10">
                      <X className="w-5 h-5 text-white" />
                    </button>
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="w-8 h-8 text-purple-400" />
                      <div>
                        <div className="text-neutral-500 text-xs font-mono">PROJECT ARCHIVE: {project.id.toString().padStart(3,'0')}</div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-300 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t,idx) => (<span key={idx} className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-400 text-xs font-mono">{t}</span>))}
                    </div>
                  </div>
                </div>
              )
            }

            const ReelStream = () => {
              const [selected, setSelected] = useState(null)
              return (
                <div className="bg-transparent mb-12">
                  <style>{`
                    @keyframes marquee-up {0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
                    @keyframes marquee-down {0%{transform:translateY(-50%)}100%{transform:translateY(0)}}
                    .animate-marquee-up{animation:marquee-up 30s linear infinite}
                    .animate-marquee-down{animation:marquee-down 30s linear infinite}
                  `}</style>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ScrollingColumn items={col1} direction="up" onProjectClick={setSelected} />
                    <ScrollingColumn items={col2} direction="down" onProjectClick={setSelected} />
                    <div className="hidden md:block"><ScrollingColumn items={col3} direction="up" onProjectClick={setSelected} /></div>
                  </div>

                  {selected && <ReelModal project={selected} onClose={() => setSelected(null)} />}
                </div>
              )
            }

            return <ReelStream />
          })()
        }

      </div>

    </div>
  )
}
