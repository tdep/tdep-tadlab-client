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
                <p>Created with {emojis[madeWith]} by Trevor DePew</p>
                <ul>
                    <li><a href={""}>A link maybe?</a></li>
                    <li><a href={""}>Maybe another link?</a></li>
                </ul>
                <p>Some other text</p>
                <p>Stylesheet credit</p>
            </div>
        </footer>
    )
}