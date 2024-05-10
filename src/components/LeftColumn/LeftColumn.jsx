/* eslint-disable react/prop-types */
// import { useState } from "react";
import Modal from "../Modal/Modal";
import NoteTitle from "../NoteTitle/NoteTitle";
import useNote from "../../context/NoteContext";

function LeftColumn() {
    const { modal, setModal, noteTitles, hide, selectedGroup } = useNote();
    // const [groupName, setGroupName] = useState("");
    // const [color, setColor] = useState();

    const handleClick = () => {
        setModal(false);
    };

    return (
        <div style={{ backgroundColor: "#FFFFFF", width: "25%", height: "100vh", overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#FFFFFF #D9D9D9", display: hide && "none" }}>
            <header style={{ textAlign: "center", fontSize: "larger", position: "fixed", backgroundColor: "#FFFFFF", width: "25%", padding: "18px 0" }}>
                <h2>Pocket Notes</h2>
            </header>
            <div style={{ marginTop: "8rem" }}>
                {noteTitles && noteTitles.map((noteTitle, index) => <NoteTitle key={index} noteTitle={noteTitle} isSelected={selectedGroup === noteTitle} />)}
            </div>
            <button
                style={{ position: "fixed", left: "19rem", bottom: "30px", borderRadius: "50%", backgroundColor: "#16008B", color: "#FFFFFF", fontSize: "3em", border: "none", padding: "0 12px", cursor: "pointer" }}
                onClick={() => setModal(true)}
            >+</button>
            {modal && <Modal
                closeModal={handleClick}
            // groupName={groupName}
            // setGroupName={setGroupName}
            // color={color}
            // setColor={setColor}
            />}
        </div>
    );
}

export default LeftColumn;