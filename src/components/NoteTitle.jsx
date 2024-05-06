/* eslint-disable react/prop-types */

function NoteTitle({ groupTitle, profileColor }) {
    let words = groupTitle.split(" ");
    let noteHeader;
    if (words.length > 1) {
        noteHeader = `${words[0][0]}${words[1][0]}`;
    } else {
        noteHeader = `${words[0][0]}`;
    }

    words = words.map(word => word[0].toUpperCase() + word.substring(1)).join(" ");

    return (
        <div style={{ display: "flex", alignItems: "center", margin: "20px" }}>
            <div style={{ color: "#FFFFFF", backgroundColor: profileColor, borderRadius: "50%", width: "60px", height: "60px", fontSize: "larger", display: "flex", justifyContent: "center", alignItems: "center" }}>{noteHeader.toUpperCase()}</div>
            <div style={{ fontWeight: "bold", fontSize: "larger", marginLeft: "20px" }}>{words}</div>
        </div>
    );
}

export default NoteTitle;