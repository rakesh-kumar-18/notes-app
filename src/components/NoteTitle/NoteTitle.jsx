/* eslint-disable react/prop-types */
import useNote from "../../context/NoteContext";
import styles from "./NoteTitle.module.css";

function NoteTitle({ noteTitle, isOpen }) {
    const { isMobile, setHide, setSelectedGroup } = useNote();

    let words = noteTitle && noteTitle.group.split(" ");

    words = words && words.map(word => word[0].toUpperCase() + word.substring(1)).join(" ");

    const handleClick = () => {
        setSelectedGroup(noteTitle);
        isMobile && setHide(true);
    };

    return (
        <div className={styles.container} style={{ margin: isOpen ? "0 20px" : "20px", marginLeft: isMobile ? "10px" : "20px" }} onClick={handleClick}>
            <div className={styles.icon} style={{ backgroundColor: noteTitle.color }}>{noteTitle.letters}</div>
            <div className={styles.title}>{words}</div>
        </div>
    );
}

export default NoteTitle;