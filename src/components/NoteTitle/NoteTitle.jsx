/* eslint-disable react/prop-types */
import useNote from "../../context/NoteContext";

function NoteTitle({ noteTitle }) {
    const { isMobile, setHide, setSelecetedGroup } = useNote();

    let words = noteTitle.group.split(" ");
    // let noteHeader;
    // if (words.length > 1) {
    //     noteHeader = `${words[0][0]}${words[1][0]}`;
    // } else {
    //     noteHeader = `${words[0][0]}`;
    // }

    words = words.map(word => word[0].toUpperCase() + word.substring(1)).join(" ");

    const handleClick = () => {
        setSelecetedGroup(noteTitle);
        isMobile && setHide(true);
        console.log(noteTitle);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", margin: "20px", cursor: "pointer" }} onClick={handleClick}>
            <div style={{ color: "#FFFFFF", backgroundColor: noteTitle.color, borderRadius: "50%", width: "60px", height: "60px", fontSize: "larger", display: "flex", justifyContent: "center", alignItems: "center" }}>{noteTitle.letters}</div>
            <div style={{ fontWeight: "bold", fontSize: "larger", marginLeft: "20px" }}>{words}</div>
        </div>
    );
}

export default NoteTitle;