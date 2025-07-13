import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconArrowsShuffle,
    IconBrain,
    IconCloud,
    IconCurrencyDollar,
    IconDeviceDesktopAnalytics,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRocket,
    IconRouteAltLeft,
    IconSettingsAutomation,
    IconStackPush,
    IconTerminal2,
    IconUsersGroup,
    IconAtom
} from "@tabler/icons-react";

export function WhyNeoversine() {

    const whyNeoversine = [
        {
            title: "End-to-End Automation",
            description:
                "From content to customer support, we automate everything so you don’t have to juggle tools.",
            icon: <IconDeviceDesktopAnalytics />,
        },
        {
            title: "AI + No-Code Power",
            description:
                "We combine cutting-edge AI like GPT-4 with no-code tools like Make, Notion, and Airtable.",
            icon: <IconAtom />,
        },
        {
            title: "Tailored Workflows",
            description:
                "Every workflow is customized to your business logic — no cookie-cutter automations here.",
            icon: <IconSettingsAutomation />,
        },
        {
            title: "Faster Time to Value",
            description:
                "We ship working systems fast so you start seeing ROI in days, not months.",
            icon: <IconRocket />,
        },
        {
            title: "Cross-Platform Sync",
            description:
                "Sync data across WhatsApp, Shopify, Google Sheets, WordPress, and more without effort.",
            icon: <IconArrowsShuffle />,
        },
        {
            title: "Scalable & Modular",
            description:
                "Start small and scale up anytime. Our automation grows with your business.",
            icon: <IconStackPush />,
        },
        {
            title: "Transparent Collaboration",
            description:
                "We build in public, collaborate in Notion, and keep you in the loop at every step.",
            icon: <IconUsersGroup />,
        },
        {
            title: "Human + AI Synergy",
            description:
                "We don't replace humans — we empower them with AI so your team can do 10x more.",
            icon: <IconBrain />,
        },
    ];

    return (
        <section className="flex flex-col w-full max-w-7xl mx-auto px-4 mt-10 ">
            <div id="next-section" className='mx-auto flex flex-col max-w-7xl w-full max-md:pt-24 pt-20 px-4'>
                <div className="mb-2 md:mb-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        <span className='bg-gradient-to-br from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent'>
                            Why Neoversine
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We provide innovative solutions that drive business growth and digital transformation
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
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};