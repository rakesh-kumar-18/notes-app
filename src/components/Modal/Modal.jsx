/* eslint-disable react/prop-types */
import { useState } from "react";
import useNote from "../../context/NoteContext";
import styles from "./Modal.module.css";

function Modal({ closeModal }) {
    const { setNoteTitles } = useNote();

    const [groupName, setGroupName] = useState("");
    const [color, setColor] = useState();

    const headerLetters = (groupTitle) => {
        const words = groupTitle.split(" ");
        let noteHeader;

        if (words.length > 1) {
            noteHeader = `${words[0][0]}${words[1][0]}`;
        } else {
            noteHeader = `${words[0][0]}`;
        }

        return noteHeader.toUpperCase();
    };

    const handleClick = () => {
        const trimmedGroupName = groupName.trim();
        const letters = headerLetters(trimmedGroupName);
        if (trimmedGroupName && color) {
            setNoteTitles((t) => [
                ...t,
                {
                    group: trimmedGroupName,
                    color,
                    letters,
                    messages: []
                }
            ]);
            setGroupName("");
            setColor();
            closeModal();
        }
    };

    const handleColor = (e) => {
        setColor(e.target.style.backgroundColor);
    };

    const colorArr = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

    return (
        <>
            <div className={styles.bg} onClick={closeModal}></div>
            <div className={styles.container} style={{ border: `3px solid ${color}` }}>
                <div>
                    <p style={{ fontWeight: "bold" }}>Create New group</p>
                </div>
                <div style={{ marginBottom: "30px" }}>
                    <label className={styles.heading}>Group Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter group name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                </div>
                <div className={styles.colorDiv}>
                    <label style={{ marginRight: "20px" }}>Choose colour</label>
                    {colorArr.map(color => {
                        return <span key={color} className={styles.color} style={{ backgroundColor: color }} onClick={handleColor}></span>;
                    })}
                </div>
                <div>
                    <button className={styles.btn} onClick={handleClick}>Create</button>
                </div>
            </div>
        </>
    );
}

export default Modal;

{/* <>
    <div style={{ position: "fixed", left: "0", right: "0", top: "0", bottom: "0", backgroundColor: "#2F2F2FBF", zIndex: "1" }} onClick={closeModal}></div>
    <div style={{ position: "fixed", backgroundColor: "#FFFFFF", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "10px 30px 20px", border: `3px solid ${color}`, borderRadius: "4px", fontSize: "larger", zIndex: "2" }}>
        <div>
            <p style={{ fontWeight: "bold" }}>Create New group</p>
        </div>
        <div style={{ marginBottom: "30px" }}>
            <label style={{ marginRight: "20px", fontWeight: "bold" }}>Group Name</label>
            <input
                style={{ border: "2px solid #CCCCCC", padding: "8px 16px", borderRadius: "30px", width: "16rem" }}
                type="text"
                placeholder="Enter group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
            />
        </div>
        <div style={{ marginBottom: "40px", fontWeight: "bold", display: "flex", alignItems: "center" }}>
            <label style={{ marginRight: "20px" }}>Choose colour</label>
            {colorArr.map(color => {
                return <span key={color} style={{ backgroundColor: color, borderRadius: "50%", width: "26px", height: "26px", display: "inline-block", margin: "0 5px", cursor: "pointer" }} onClick={handleColor}></span>;
            })}
        </div>
        <div>
            <button style={{ backgroundColor: "#001F8B", color: "#FFFFFF", border: "none", padding: "5px 30px", borderRadius: "6px", position: "absolute", right: "20px", bottom: "10px", cursor: "pointer" }} onClick={handleClick}>Create</button>
        </div>
    </div>
</>; */}