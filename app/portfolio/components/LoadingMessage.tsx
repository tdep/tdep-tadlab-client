import loadingBot from "@/app/portfolio/public/images/avatar2.png"
import {useState} from "react";

export default function LoadingMessage({ handleDataRefresh = () => {}}) {


    return (
        <div id={"loading-message"} className={"container"}>
            <div id={"bot"}>
                <img className={"loading-bot"} src={loadingBot.src} alt={"Temporary loading image."}/>
                <p><b>loading_message_number_360.53-a:</b> Please pardon the wait while I wake up the API. This should only be a few seconds {"<3"}</p>
            </div>
            <div id={"nudger"}>
                <div>
                    <p>If I've forgotten about you,</p>
                    <p>just go ahead and give me a little nudge {"->"}</p>
                </div>
                <button onClick={() => handleDataRefresh() }>Retry</button>
            </div>
        </div>
    )
}