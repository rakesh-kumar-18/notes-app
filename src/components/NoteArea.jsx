/* eslint-disable react/prop-types */
import useNote from "../context/NoteContext";
import NoteTitle from "./NoteTitle/NoteTitle";

function NoteArea() {
    const { noteTitle } = useNote();

    return (
        <div style={{ backgroundColor: "#DAE5F5", width: "75%", height: "100vh" }}>
            <div>
                <NoteTitle groupTitle={noteTitle.name} profileColor={noteTitle.color} />
            </div>
        </div>
    );
}

export default NoteArea;