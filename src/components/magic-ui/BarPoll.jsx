import { useState } from "react";
import { motion } from "framer-motion";
import { CrossIcon } from "lucide-react";

const BarPoll = ({ cross }) => {
    const [votes, setVotes] = useState([
        {
            title: "AI",
            votes: 1,
            // NOTE: Color assumes a tailwind CSS class.
            // One off colors could be added using something like:
            // bg-[#6366F1]
            color: "bg-indigo-500/10 border-indigo-500",
        },
        {
            title: "Research",
            votes: 2,
            color: "bg-fuchsia-500/10 border-fuchsia-500",
        },
        {
            title: "LLM",
            votes: 3,
            color: "bg-cyan-500/10 border-cyan-500",
        },
    ]);

    return (
        <section className="px-4">
            <div className="mx-auto  max-w-4xl flex flex-col gap-2 md:grid-cols-[1fr_400px] md:gap-12">
                <Options cross={cross} votes={votes} setVotes={setVotes} />
                <Bars votes={votes} />
            </div>
        </section>
    );
};

const Options = ({ votes, setVotes, cross }) => {
    const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

    const handleIncrementVote = (vote) => {
        const newVote = { ...vote, votes: vote.votes + 1 };

        setVotes((pv) => pv.map((v) => (v.title === newVote.title ? newVote : v)));
    };

    return (
        <div className="col-span-1 py-0">
            <div className="flex justify-between">
                <h3 className="mb-6 text-2xl font-semibold text-slate-50">
                    What's your Fav Topic?
                </h3>
                <div className=" text-white text-lg" onClick={cross}><CrossIcon /></div>
            </div>
            <div className="mb-6 space-y-2">
                {votes.map((vote) => {
                    return (
                        <motion.button
                            whileHover={{ scale: 1.015 }}
                            whileTap={{ scale: 0.985 }}
                            onClick={() => handleIncrementVote(vote)}
                            key={vote.title}
                            className={`w-full rounded-md ${vote.color} border-2 py-2 font-medium text-white`}
                        >
                            {vote.title}
                        </motion.button>
                    );
                })}
            </div>
            <div className="flex items-center justify-between">
                <span className="mb-2 italic text-slate-400">{totalVotes} votes</span>
                <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => {
                        setVotes((pv) => pv.map((v) => ({ ...v, votes: 0 })));
                    }}
                    className="rounded-sm bg-slate-700 px-2 py-1.5 text-sm font-medium text-slate-200"
                >
                    Reset count
                </motion.button>
            </div>
        </div>
    );
};

const Bars = ({ votes }) => {
    const totalVotes = votes.reduce((acc, cv) => (acc += cv.votes), 0);

    return (
        <div
            className="col-span-1 grid min-h-[200px] gap-2"
            style={{
                gridTemplateColumns: `repeat(${votes.length}, minmax(0, 1fr))`,
            }}
        >
            {votes.map((vote) => {
                const height = vote.votes
                    ? ((vote.votes / totalVotes) * 100).toFixed(2)
                    : 0;
                return (
                    <div key={vote.title} className="col-span-1">
                        <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl border border-indigo-500">
                            <motion.span
                                animate={{ height: `${height}%` }}
                                className={`relative z-0 w-full ${vote.color}`}
                                transition={{ type: "spring" }}
                            />
                            <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                                <b>{vote.title}</b>
                                <br></br>
                                <span className="text-xs text-slate-200">
                                    {vote.votes} votes
                                </span>
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BarPoll;