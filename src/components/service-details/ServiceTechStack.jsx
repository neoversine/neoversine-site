import React from 'react';

const ServiceTechStack = ({ techStack }) => {
    if (!techStack) return null;

    const categoryIcons = {
        'Architecture': '🏛️',
        'Inference': '⚡',
        'Engine': '⚙️',
        'Acceleration': '🚀',
        'Modeling': '📐',
        'Compute': '💻',
        'Visualization': '📊',
        'Agents': '🤖',
        'Integration': '🔗',
        'Monitoring': '📡',
        'Ingestion': '📥',
        'Synthesis': '🧠',
        'Publishing': '📢',
        'Reasoning': '🧩',
        'Foundation': '🧱',
        'Evaluation': '📏',
        'Data': '🗄️',
        'Outreach': '📬',
        'ControlSurface': '📱',
        'Infrastructure': '🏗️',
        'Security': '🔒',
        'Core': '💎',
        'Bypass': '🛡️',
        'Output': '📦',
        'Refactoring': '🔄',
        'DevOps': '🛠️',
        'KnowledgeGraph': '🕸️',
        'Embedding': '🧬',
        'Recall': '💡',
        'Execution': '⚙️',
        'Validation': '✅',
        'Runtime': '⚡'
    };

    // Technology icons and descriptions
    const techInfo = {
        // Architecture & Foundation
        'Hermes Agent-OS': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Self-improving, long-term memory-enabled gateway delegating tasks across environments.', link: 'https://neoversine.in' },
        'Parallel Subagents': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', desc: 'Concurrent specialized agents executing discrete sub-tasks with kernel synchronization.', link: 'https://neoversine.in' },
        'Multi-Agent Swarms': { icon: 'https://cdn.simpleicons.org/deepnote/3370FF', desc: 'Coordinated agent networks outperforming monolithic models on constrained reasoning.', link: 'https://neoversine.in' },
        
        // Inference & Economics
        'vLLM': { icon: 'https://cdn.simpleicons.org/linux/FCC624', desc: 'High-throughput, low-latency LLM serving engine with state-of-the-art memory efficiency.', link: 'https://vllm.ai' },
        'PagedAttention': { icon: 'https://cdn.simpleicons.org/fastapi/009688', desc: 'Paged virtual memory management for KV-cache, eliminating GPU memory fragmentation.', link: 'https://vllm.ai' },
        'Speculative Decoding': { icon: 'https://cdn.simpleicons.org/speedtest/141526', desc: 'Multi-token speculation boosting generation throughput without degrading accuracy.', link: 'https://vllm.ai' },
        'KV-Cache Reuse': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', desc: 'Zero-overhead cache eviction and prefix matching across parallel multi-turn runs.', link: 'https://vllm.ai' },
        'Continuous Batching': { icon: 'https://cdn.simpleicons.org/apachekafka/231F20', desc: 'Dynamic iteration-level scheduling maximizing GPU hardware utilization.', link: 'https://vllm.ai' },
        
        // Acceleration & Compute
        'CUDA': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', desc: 'NVIDIA parallel computing platform and programming model for raw GPU acceleration.', link: 'https://developer.nvidia.com/cuda-zone' },
        'TensorRT-LLM': { icon: 'https://cdn.simpleicons.org/nvidia/76B900', desc: 'Compiled tensor kernels optimized for maximum floating-point inference throughput.', link: 'https://developer.nvidia.com/tensorrt' },
        'PyTorch': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', desc: 'Deep learning framework for dynamic computation graphs and tensor math.', link: 'https://pytorch.org' },
        'Triton': { icon: 'https://cdn.simpleicons.org/openai/412991', desc: 'Open-source GPU programming language for high-performance custom attention kernels.', link: 'https://github.com/openai/triton' },
        'Ray Cluster': { icon: 'https://cdn.simpleicons.org/ray/028CF0', desc: 'Distributed computing framework for scaling agent simulation and batch pipelines.', link: 'https://ray.io' },
        
        // Scraping & Data
        'NeoCrawl API': { icon: 'https://cdn.simpleicons.org/curl/007EC6', desc: 'Vision-guided scraping API adapting to site updates and dynamic JavaScript rendering.', link: 'https://neoversine.in' },
        'ScrapeGraphAI': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'AI-guided schema extraction pipeline eliminating brittle CSS selectors.', link: 'https://github.com/VinciGit00/Scrapegraph-ai' },
        
        // Control Surface & Runtime
        'MIT Pocket Control Deck': { icon: 'https://cdn.simpleicons.org/electron/47848F', desc: 'MIT-licensed phone-first event-driven control surface to steer runtimes live.', link: 'https://github.com/neoversine' },
        'Live Control Deck': { icon: 'https://cdn.simpleicons.org/socketdotio/010101', desc: 'Real-time WebSocket event surface providing runtime telemetry and human gates.', link: 'https://neoversine.in' },
        'WebSockets': { icon: 'https://cdn.simpleicons.org/socketdotio/010101', desc: 'Full-duplex low-latency communication protocol for live agent event streaming.', link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
        'FastAPI': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', desc: 'High-performance ASGI web framework for building low-latency agent microservices.', link: 'https://fastapi.tiangolo.com' },
        'Docker': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', desc: 'Container runtime enabling hermetic sandbox environments for agent code execution.', link: 'https://www.docker.com' },
        'Kubernetes': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', desc: 'Automated container deployment, autoscaling, and management across GPU fleets.', link: 'https://kubernetes.io' },
        'PostgreSQL': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', desc: 'Relational database for ACID-compliant structured metadata and operational records.', link: 'https://www.postgresql.org' },
        'Redis': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', desc: 'In-memory data store used for fast state caching and agent message pub/sub.', link: 'https://redis.io' },
        'Wasm Runtime': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wasm/wasm-original.svg', desc: 'Isolated WebAssembly environment for secure client-side and edge skill execution.', link: 'https://webassembly.org' },
        
        // Memory & Graphs
        'Graph RAG': { icon: 'https://cdn.simpleicons.org/graphql/E10098', desc: 'Hybrid graph-vector retrieval establishing contextual links across knowledge entities.', link: 'https://neoversine.in' },
        'Neo4j': { icon: 'https://cdn.simpleicons.org/neo4j/008CC1', desc: 'Native graph database for persistent entity relations and multi-hop traversal.', link: 'https://neo4j.com' },
        'Qdrant': { icon: 'https://cdn.simpleicons.org/qdrant/DC382D', desc: 'Vector similarity search engine with extended payload filtering and fast recall.', link: 'https://qdrant.tech' },
        'ChromaDB': { icon: 'https://cdn.simpleicons.org/codecademy/1F2430', desc: 'Open-source embedding database designed for developer-friendly agent memory stores.', link: 'https://trychroma.com' },
        
        // Modeling & Generalization
        'ARC DSL': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', desc: 'Domain-specific language representing abstraction grids and visual transformations.', link: 'https://arcprize.org' },
        'SimPy': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', desc: 'Process-based discrete-event simulation framework for digital twin modeling.', link: 'https://simpy.readthedocs.io' }
    };

    return (
        <section className="py-4 max-w-6xl mx-auto">
            <div data-aos="fade-up">
                <div className="space-y-6">
                    {Object.entries(techStack).map(([category, items], index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                            <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2 font-mono uppercase tracking-wider">
                                <span className="text-lg">{categoryIcons[category] || '⚙️'}</span>
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {items.map((item, idx) => {
                                    const tech = techInfo[item] || { 
                                        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
                                        desc: 'Engineered for foundational agent systems and high-throughput execution.', 
                                        link: 'https://neoversine.in' 
                                    };
                                    return (
                                        <a 
                                            key={idx}
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-[#151515] border border-white/10 hover:border-cyan-500/50 rounded-xl p-4 transition-all duration-300 block cursor-pointer hover:bg-[#1c1c1c]"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={item}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                                                        }}
                                                    />
                                                    <span className="text-xl hidden">⚙️</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors truncate">
                                                        {item}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                                                        {tech.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceTechStack;
