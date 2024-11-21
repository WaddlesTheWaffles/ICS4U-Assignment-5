import "./HeaderSection.css";

function HeaderSection() {

    return (
        <div className="toolbar" >
            <h1 className="inHeader" ><span id="gold">Crowned</span> Pig</h1>
            <button className="inHeader" >Sign Up</button>
            <button className="inHeader" >Sign In</button>
        </div>
    )
}

export default HeaderSection