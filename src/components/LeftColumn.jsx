import { useState } from "react";
import Modal from "./Modal";
import NoteTitle from "./NoteTitle";

function LeftColumn() {
    const [modal, setModal] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [color, setColor] = useState();

    const handleClick = () => {
        setModal(false);
    };

    const groups = JSON.parse(localStorage.getItem("groups"));

    return (
        <div style={{ backgroundColor: "#FFFFFF", width: "25%", height: "100vh", overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#FFFFFF #D9D9D9" }}>
            <header style={{ textAlign: "center", fontSize: "larger", position: "fixed", backgroundColor: "#FFFFFF", width: "25%", padding: "18px 0" }}>
                <h2>Pocket Notes</h2>
            </header>
            <div style={{ margin: "0 2rem", marginTop: "8rem" }}>
                {groups && groups.map((group, index) => <NoteTitle key={index} groupTitle={group.group} profileColor={group.color} />)}
            </div>
            <button
                style={{ position: "fixed", left: "19rem", bottom: "30px", borderRadius: "50%", backgroundColor: "#16008B", color: "#FFFFFF", fontSize: "3em", border: "none", padding: "0 12px", cursor: "pointer" }}
                onClick={() => setModal(true)}
            >+</button>
            {modal && <Modal
                closeModal={handleClick}
                groupName={groupName}
                setGroupName={setGroupName}
                color={color}
                setColor={setColor}
            />}
        </div>
    );
}

export default LeftColumn;