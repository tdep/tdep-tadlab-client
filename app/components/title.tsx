import first from '../public/home/portfolio-name-trevor.png'
import last from '../public/home/portfolio-name-depew.png'
import software from '../public/home/portfolio-title-software.png'
import engineer from '../public/home/portfolio-title-engineer.png'

export default function Title() {
    return (
        <div className={"container"}>
            <div className={"name"}>
                <img id={"name-first"} className={"home-name"} src={first.src} alt={"Trevor"} />
                <img id={"name-last"} className={"home-name"} src={last.src} alt={"DePew"} />
            </div>
            <div className={"title"}>
                <img id={"title-software"} className={"home-title"} src={software.src} alt={"software"} />
                <img id={"title-software"} className={"home-title"} src={engineer.src} alt={"engineer"} />
            </div>
        </div>

    )
}