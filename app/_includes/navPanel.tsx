export default function NavPanel() {
    return (
        <nav className={"main-nav"}>
            <h1>*Display the name of the page you're on*</h1>
            <ul id={"main-nav-ul"}>
                <li><a href={"/home"}>Home</a></li>  {/* Links change based on the page you're on*/}
                <li><a href={""}></a></li>
                <li><a href={""}></a></li>
                <li><a href={""}></a></li>
            </ul>
        </nav>
    )
}