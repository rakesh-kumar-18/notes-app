/* eslint-disable react/prop-types */
import styles from "./Note.module.css";

function Note({ message }) {
    return (
        <div className={styles.container}>
            <div className={styles.message}>{message.text}</div>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <div className={styles.time}>
                    <div>{message.day}</div>
                    <div className={styles.dot}></div>
                    <div>{message.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Note;