
import React from "react";
import { CardBody, CardContainer, CardItem } from "../accernity/3d-card";
import { NavLink } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";

export function Card({ item }) {
    console.log(item)
    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-lg font-bold text-neutral-600 dark:text-white truncate whitespace-nowrap overflow-hidden max-md:max-w-[290px] max-w-[300px] block">
                    {item.fields.title}
                </CardItem>

                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300">
                    {item.fields.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={item.fields.mainImage[0].url}
                        height="800"
                        width="800"
                        className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail" />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        className="group cursor-pointer px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                        <div className="flex gap-2 items-center">
                            Up Vote
                            <FaChevronUp className="text-green-400 group-hover:text-lg" />
                        </div>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:scale-[105%]">
                        <NavLink to={`/coming-soon`}>
                            Explore
                        </NavLink>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
