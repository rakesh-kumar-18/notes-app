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
                    <label className={styles.label}>Choose colour</label>
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