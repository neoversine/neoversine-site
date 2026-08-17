export const blogData = {
    "blog": {
        "title": "Why We MIT-Licensed Our Control Deck",
        "slug": "why-we-mit-licensed-our-control-deck",
        "description": "Event-driven visibility should be a right, not a subscription. Why we open-sourced our phone-first agent control surface.",
        "content": "### Event-Driven Visibility Should Be a Right, Not a Subscription\n\nWhen we built our agent operating systems, the biggest failure mode wasn't model intelligence — it was operational blindness. Traditional SaaS AI tools trap you behind opaque dashboards with 30-second polling delays and per-seat fees.\n\nWe designed our **MIT-licensed, self-hosted, phone-first control deck** to provide sub-millisecond event streaming into live agent execution. You can watch agents reason in real-time, inspect intermediate decision trees, intervene directly in agent loops, and tweak runtime hyperparameters without restarting containers or redeploying infrastructure.\n\nBy open-sourcing the control layer under the MIT license, teams gain 100% operational autonomy with zero vendor lock-in.",
        "category": "Research",
        "status": "Published",
        "readingTime": "5",
        "mainImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
        "galleryImages": [
            "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1200&auto=format&fit=crop&q=80"
        ],
        "thumbnailImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
        "publishedDate": "2025-06-15",
        "lastUpdated": "2025-06-15",
        "relatedPosts": ["Control Deck", "Agent-OS", "Open Source", "Hermes"],
        "views": 42580,
        "researchLinks": [
            { "url": "https://github.com/neoversine", "label": "GitHub Repositories" },
            { "url": "https://neoversine.in", "label": "Neoversine Research" }
        ],
        "codeSnippets": [
            {
                "language": "python",
                "code": "# Hermes Agent-OS Live Event Dispatcher\nasync def stream_agent_execution(agent_id: str, websocket):\n    async for event in hermes_os.stream_events(agent_id):\n        if event.requires_human_gate:\n            intervention = await websocket.receive_json()\n            hermes_os.apply_runtime_override(agent_id, intervention)\n        await websocket.send_json(event.serialize())"
            }
        ]
    }
};

export const thoughtLeadershipPosts = [
    {
        title: "Why We MIT-Licensed Our Control Deck: Event-Driven Visibility Should Be a Right, Not a Subscription",
        category: "Open Source",
        summary: "Why transparent, self-hosted, phone-first monitoring surfaces are fundamental to trustworthy multi-agent systems."
    },
    {
        title: "Multi-Agent Orchestration Deep Dive: How We Cut VRAM Usage from 92GB to Under 10GB Using Sakana Fugu-Inspired Techniques",
        category: "Inference Economics",
        summary: "Architecting memory recycling, dynamic layer offloading, and continuous KV-cache eviction across parallel swarms."
    },
    {
        title: "Stop Paying for Scrapers: Why ScrapeGraphAI and Adaptive Crawling Beat Brittle Selectors and Third-Party APIs",
        category: "Data Infrastructure",
        summary: "Building resilient vision-guided data acquisition pipelines that adapt to DOM shifts and dynamic SPAs."
    },
    {
        title: "Collective Intelligence as the Next Paradigm: How Agent Swarms Outperform Solo Models on Complex Reasoning Tasks",
        category: "Agent Architecture",
        summary: "Replacing monolithic prompts with specialized parallel subagents orchestrated via Hermes OS kernel."
    },
    {
        title: "Synthetic Data for Computer Vision: Generating 700 YOLO Images in an Hour with mAP50 0.96 — No Real Images Required",
        category: "Synthetic Data",
        summary: "Overcoming data scarcity in object detection through algorithmic domain randomization and automated annotation."
    }
];