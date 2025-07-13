/* eslint-disable no-constant-condition */
import { useEffect, useRef, useState } from "react";
import { TbArrowCurveLeft, TbArrowCurveRight } from "react-icons/tb";
import { FiLoader } from "react-icons/fi";
const CatbotSection = ({ start, setStart }) => {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const containerRef = useRef(null);



    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { type: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);
        try {
            const res = await fetch("https://n8n.finnofarms.in/webhook/8f7f6293-babb-42ca-9ee1-4a53f45281b3", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 'user-prompt': input, 'session-ID': '42543eetetre34' }),
            });

            const data = await res.json();
            const botMessage = { type: "bot", text: data.output || "No response" };
            setMessages((prev) => [...prev, botMessage]);
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [...prev, { type: "bot", text: "Something went wrong." }]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        containerRef.current?.scrollTo({
            top: containerRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, [messages]);

    useEffect(() => {
        if (start) {
            setMessages([{ type: "bot", text: "Hie I'm Neocat" }]);
            setStart(false); // disable after first use to avoid loop
        }
    }, [start]);

    return (
        <div className="relative w-full h-full">
            <div className='shadow shadow-black z-[2] absolute top-0 left-0 flex flex-col w-[93%] h-full border border-gray-700/40 rounded-2xl py-4 px-4 bg-gradient-to-br from-[#181818] to-[#1c364b]'>
                <div className='h-[85%] flex justify-end items-end shadow-inner shadow-black rounded-2xl pl-2 pr-1 py-2'
                    style={{
                        backgroundImage: "url('./chat/cat.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '200px',
                        /* Prevents tiling */
                        backgroundPosition: 'center',
                        /* Center aligns the image */
                    }}>

                    <div className="flex flex-col h-full gap-2 w-full overflow-y-auto"
                        ref={containerRef}>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`text-sm max-w-[80%] px-4 py-2 rounded-xl text-white shadow-md relative ${msg.type === "user"
                                    ? "self-end bg-gradient-to-br from-blue-500 to-blue-700"
                                    : "self-start bg-gradient-to-br from-gray-600 to-gray-800"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[12%] flex mt-2 border border-gray-300/30 bg-[#181818bd] px-2 py-2 rounded-lg">
                    <input
                        type="text"
                        placeholder="Ask anything"
                        className="text-white grow focus:outline-none px-2 py-1 bg-transparent"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button
                        className="text-white border border-gray-300/40 cursor-pointer px-2 rounded-full"
                        onClick={handleSend}
                        disabled={loading}
                    >
                        {
                            loading ?
                                <FiLoader /> :
                                <TbArrowCurveLeft className="rotate-90" />
                        }
                    </button>
                </div>
            </div>
            <div className="shadow shadow-black z-[1] absolute right-[18px] top-1/2 -translate-y-1/2 rounded-2xl h-[90%] bg-gradient-to-br from-[#181818] to-[#241649] w-1/2 ">

            </div>
            <div className="shadow shadow-black z-[0] absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl h-[80%] bg-gradient-to-br from-[#181818] to-[#1f0d30] w-1/2 ">

            </div>
        </div>
    )
}

export default CatbotSection