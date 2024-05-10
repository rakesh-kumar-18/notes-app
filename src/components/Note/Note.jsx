/* eslint-disable react/prop-types */
import styles from "./Note.module.css";

function Note({ message }) {
    return (
        <div className={styles.container}>
            <div style={{ padding: "1rem", lineHeight: "1.5rem" }}>{message.text}</div>
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

{/* <div style={{ backgroundColor: "#FFFFFF", margin: "1.5rem 2rem", borderRadius: "6px", boxShadow: "0px 4px 20px 0px #00000040" }}>
    <div style={{ padding: "1rem", lineHeight: "1.5rem" }}>{message.text}</div>
    <div style={{ display: "flex", justifyContent: "end" }}>
        <div style={{ color: "#353535", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "small", fontWeight: "bold", paddingBottom: "1rem", paddingRight: "1rem" }}>
            <div>{message.day}</div>
            <div style={{ width: "6px", height: "6px", backgroundColor: "#353535", borderRadius: "50%" }}></div>
            <div>{message.time}</div>
        </div>
    </div>
</div>; */}