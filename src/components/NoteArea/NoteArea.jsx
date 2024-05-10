/* eslint-disable react/prop-types */
import NoteTitle from "../NoteTitle/NoteTitle";
import SendDisable from "../../assets/send_disable.png";
import SendEnable from "../../assets/send_enable.png";
import useNote from "../../context/NoteContext";
import { useEffect, useState } from "react";
import RightColumn from "../RightColumn/RightColumn";

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
        <div style={{ backgroundColor: "#DAE5F5", width: "75%", height: "100vh" }}>
            <div style={{ display: "flex", backgroundColor: "#001F8B", color: "#FFFFFF", padding: "1px", height: "10vh" }}>
                <NoteTitle noteTitle={selectedGroup} isOpen={true} />
            </div>
            <div style={{ height: "65vh", overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#FFFFFF #D9D9D9" }}>
                {messages && messages.map(message => {
                    return (
                        <div key={message.time} style={{ backgroundColor: "#FFFFFF", margin: "1.5rem 2rem", borderRadius: "6px", boxShadow: "0px 4px 20px 0px #00000040" }}>
                            <div style={{ padding: "1rem", lineHeight: "1.5rem" }}>{message.text}</div>
                            <div style={{ display: "flex", justifyContent: "end" }}>
                                <div style={{ color: "#353535", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "small", fontWeight: "bold", paddingBottom: "1rem", paddingRight: "1rem" }}>
                                    <div>{message.day}</div>
                                    <div style={{ width: "6px", height: "6px", backgroundColor: "#353535", borderRadius: "50%" }}></div>
                                    <div>{message.time}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div style={{ position: "fixed", bottom: "0", backgroundColor: "#001F8B", height: "25vh", width: "75%", display: "flex", justifyContent: "center", alignItems: "center", borderBottomLeftRadius: "12px" }}>
                <textarea
                    name="notes"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Enter your text here..........."
                    rows={10}
                    cols={10}
                    style={{ width: "93%", height: "70%", resize: "none", borderRadius: "8px", outline: "none", fontSize: "1.5rem", padding: "10px 20px" }}
                ></textarea>
                <button
                    disabled={note.trim().length < 1}
                    onClick={handleClick}
                    style={{ position: "absolute", bottom: "30px", right: "40px", cursor: "pointer" }}
                >
                    {<img
                        src={note.trim().length > 0 ? SendEnable : SendDisable} alt="send"
                        style={{ width: "30px", backgroundColor: "#FFFFFF", border: "none", mixBlendMode: "multiply" }}
                    />}
                </button>
            </div >
        </div >
    );
}

export default NoteArea;