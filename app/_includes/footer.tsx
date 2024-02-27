import {useEffect, useState} from "react";

export default function Footer() {

    const emojis = ["😂", "😍", "✨", "🌈", "🍙", "🍜", "🐻"];
    const [madeWith, setMadeWith] = useState<number>(1);

    const getRandomInteger = (min:number, max:number) => {
        const minCeil = Math.ceil(min);
        const maxFloor = Math.floor(max)
        return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
    }

    useEffect(() => {
        setMadeWith(getRandomInteger(0, emojis.length))
    }, []);


    return (
        <footer className={"page-footer"}>
            <div className={"container"}>
                <p>Created with {emojis[madeWith]} by Trevor DePew ©2024</p>
                <ul>
                    <li><a href={"https://github.com/tdep"} target={"_blank"}>GitHub</a></li>
                    <li><a href={"https://www.linkedin.com/in/trevor-depew/"} target={"_blank"}>LinkedIn</a></li>
                    <li><a href={"https://tadepewmusic.com/"} target={"_blank"}>Music</a></li>
                </ul>
                <p>Built using <a href={"https://nextjs.org/"} target={"_blank"}>Next.js</a> and deployed using <a href={"https://www.heroku.com/"} target={"_blank"}>Heroku</a>.</p>
                <p>Stylesheet largely authored by <a href={"https://stylestage.dev/styles/stageos/"} target={"_blank"}>Håvard Brynjulfsen</a>. Rights held by respective owners.</p>

            </div>
        </footer>
    )
}