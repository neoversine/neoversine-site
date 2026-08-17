import { cn } from "@/lib/utils";
import {
    IconCpu,
    IconBolt,
    IconBrain,
    IconDeviceDesktopAnalytics,
    IconShieldCheck,
    IconTerminal2,
    IconBinaryTree,
    IconTransform
} from "@tabler/icons-react";

export function WhyNeoversine() {

    const whyNeoversine = [
        {
            title: "Hermes Agent-OS Substrate",
            description:
                "Self-improving, memory-enabled, multi-platform gateway orchestrating parallel subagent swarms across environments.",
            icon: <IconCpu className="w-8 h-8 text-cyan-400" />,
        },
        {
            title: "vLLM Inference Economics",
            description:
                "PagedAttention, KV-cache reuse, and speculative decoding to slash compute costs and make swarms viable at scale.",
            icon: <IconBolt className="w-8 h-8 text-indigo-400" />,
        },
        {
            title: "Parallel Subagent Swarms",
            description:
                "Orchestrating dozens of specialized agents executing concurrently on lead enrichment, data synthesis, and workflows.",
            icon: <IconBinaryTree className="w-8 h-8 text-purple-400" />,
        },
        {
            title: "Live Event-Driven Control Deck",
            description:
                "Phone-first MIT-licensed control surface: watch reasoning in real-time, intervene instantly, tweak without redeploying.",
            icon: <IconDeviceDesktopAnalytics className="w-8 h-8 text-rose-400" />,
        },
        {
            title: "Adaptive Data & NeoCrawl",
            description:
                "Vision-guided scrapers and ScrapeGraphAI pipelines that adapt to site changes without brittle selectors or SaaS fees.",
            icon: <IconTerminal2 className="w-8 h-8 text-amber-400" />,
        },
        {
            title: "D8alytics Synthetic Data",
            description:
                "Computer vision pipelines generating 700 YOLO-formatted images in <1h achieving mAP50 0.96 with zero real images.",
            icon: <IconTransform className="w-8 h-8 text-emerald-400" />,
        },
        {
            title: "Persistent Memory Fabric",
            description:
                "Cross-task knowledge graphs so agents recall past runs, avoid repeated mistakes, and compound organizational intelligence.",
            icon: <IconBrain className="w-8 h-8 text-blue-400" />,
        },
        {
            title: "Architecture Ownership",
            description:
                "No wrappers, no reskinned LangChain, zero vendor lock-in. We build the foundational substrate you own end-to-end.",
            icon: <IconShieldCheck className="w-8 h-8 text-teal-400" />,
        },
    ];

    return (
        <section className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-10 ">
            <div id="next-section" className='mx-auto flex flex-col max-w-7xl w-full max-md:pt-24 pt-20 px-4'>
                <div className="mb-2 md:mb-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className='bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent'>
                            We Build With Our Own Architecture
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        The era of AI agencies stitching off-the-shelf tools is over. We build the substrate, not the souvenir.
                    </p>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-6">
                {whyNeoversine.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}) => {
    return (
        <div
            className={cn(
                "cursor-pointer flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800",
                index > 4 && "max-lg:hidden"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100/5 dark:from-neutral-800/40 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100/5 dark:from-neutral-800/40 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-cyan-400 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10 leading-relaxed">
                {description}
            </p>
        </div>
    );
};