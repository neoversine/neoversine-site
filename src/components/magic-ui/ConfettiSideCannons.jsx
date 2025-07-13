"use client";

import axios from "axios";
import confetti from "canvas-confetti";
import { toast } from "react-toastify";
import SendQueryButton from "../contact/SendQueryButton";


export function ConfettiSideCannons({ className, name, email, data }) {

    const notify = async () => {
        if (!name || !email || !data) {
            toast.error("Please fill in all the data ❌");
            return;
        }

        try {
            const response = await axios.post('https://n8n.finnofarms.in/webhook/e9d4044c-0214-47be-a19b-2b1089928fee',
                {
                    name, gmail: email, data
                }
            )
            console.log(response);
            toast("Congratulations! Now you are a member of Neoversine! 🎉");

            setTimeout(() => {
                toast("A response will be sent to your email shortly.");
            }, 1000);
            handleClick();
        } catch (error) {
            console.log(error)
            return;
        }


    }

    const handleClick = () => {
        const end = Date.now() + 1 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    return (
        <div className="relative">

            <button onClick={notify}><SendQueryButton /></button>
        </div>
    );
}
