// TODO: Add my picture dynamically - it should change expressions when scrolling and be slightly delayed
export default function Portrait() {
    return (
        <aside className={"profile"} aria-labelledby={"profile-title"}>
            <div className={"container"}>
                <h4 id={"profile-title"}>My face goes here!!!</h4>
                <ul>
                    <li className={"something"}>Smiles, but then is surprised when scrolling</li>
                </ul>
            </div>
        </aside>
    )
}