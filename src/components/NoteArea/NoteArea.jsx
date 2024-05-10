/* eslint-disable react/prop-types */
import NoteTitle from "../NoteTitle/NoteTitle";
import SendDisable from "../../assets/send_disable.png";
import SendEnable from "../../assets/send_enable.png";
import useNote from "../../context/NoteContext";
import { useEffect, useState } from "react";
import RightColumn from "../RightColumn/RightColumn";
import Note from "../Note/Note";
import Arrow from "../../assets/arrow.png";
import styles from "./NoteArea.module.css";

function NoteArea() {
    const { noteTitles, setNoteTitles, selectedGroup, hide, setHide, isMobile } = useNote();

    const [note, setNote] = useState("");
    const [messages, setMessages] = useState(selectedGroup.messages);

    const handleClick = () => {
        const date = new Date();

        const day = date.toLocaleDateString('en-GB',
            { day: 'numeric', month: 'short', year: 'numeric' }
        );

        const time = date.toLocaleTimeString('en-US',
            { hour: '2-digit', minute: '2-digit', hour12: true }
        );

        const message = {
            text: note,
            day,
            time
        };

        setMessages((m) => [...m, message]);

        const updatedNotes = noteTitles.map((noteTitle) => {
            return noteTitle.group === selectedGroup.group ? { ...noteTitle, messages: [...noteTitle.messages, message] } : noteTitle;
        });
        setNoteTitles(updatedNotes);
        setNote("");
    };

    useEffect(() => {
        setMessages(selectedGroup.messages);
    }, [selectedGroup.messages]);

    useEffect(() => {
        localStorage.setItem("groups", JSON.stringify(noteTitles));
    }, [noteTitles]);

    if (!isMobile && !selectedGroup) {
        return <RightColumn />;
    }

    return (
        <div className={styles.container} style={{ display: !hide && isMobile && "none" }}>
            <div className={styles.heading}>
                {isMobile && (
                    <div style={{ marginLeft: "10px" }} onClick={() => setHide(isMobile && false)}>
                        <img src={Arrow} alt="back-button" />
                    </div>
                )}
                <NoteTitle noteTitle={selectedGroup} isOpen={true} />
            </div>
            <div className={styles.messageDiv}>
                {messages && messages.map((message, index) => <Note key={index} message={message} />)}
            </div>
            <div className={styles.input}>
                <textarea
                    name="notes"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Enter your text here..........."
                    rows={10}
                    cols={10}
                    className={styles.textArea}
                ></textarea>
                <button
                    disabled={note.trim().length < 1}
                    onClick={handleClick}
                    className={styles.btn}
                >
                    {<img
                        src={note.trim().length > 0 ? SendEnable : SendDisable} alt="send"
                        className={styles.sendBtn}
                    />}
                </button>
            </div >
        </div >
    );
}

export default NoteArea;