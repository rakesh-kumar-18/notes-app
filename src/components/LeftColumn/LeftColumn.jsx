/* eslint-disable react/prop-types */
import Modal from "../Modal/Modal";
import NoteTitle from "../NoteTitle/NoteTitle";
import useNote from "../../context/NoteContext";
import styles from "./LeftColumn.module.css";

function LeftColumn() {
    const { modal, setModal, noteTitles, hide } = useNote();

    const handleClick = () => {
        setModal(false);
    };

    return (
        <div className={styles.container} style={{ display: hide && "none" }}>
            <header className={styles.header}>
                <h2>Pocket Notes</h2>
            </header>
            <div className={styles.titles}>
                {noteTitles && noteTitles.map((noteTitle, index) => <NoteTitle key={index} noteTitle={noteTitle} />)}
            </div>
            <button
                className={styles.btn}
                onClick={() => setModal(true)}
            >+</button>
            {modal && <Modal
                closeModal={handleClick}
            />}
        </div>
    );
}

export default LeftColumn;