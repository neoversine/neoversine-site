
import React from "react";
import { CardBody, CardContainer, CardItem } from "../accernity/3d-card";
import { NavLink } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import EpicWebCard from "../home/EpicWebCard";

export function CardHome({ item }) {
    return (
        <CardContainer className="inter-var w-full" degree={'100'}>
            <EpicWebCard type={'row'} text={"Automation"} subtext={"Provide Full Automation Solutions."}
                link={"/our-works/n8n"} imgurl={'/N8n.svg'} heading={"N8N Automation"} sidehead={"Ai Agents"}
            />
        </CardContainer>
    );
}
