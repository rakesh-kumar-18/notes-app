import BgImage from "../../assets/bg-image.png";
import LockImg from "../../assets/lock.png";

function RightColumn() {
    return (
        <div style={{ backgroundColor: "#DAE5F5", width: "75%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontWeight: "bold", marginTop: "80px" }}>
                <img style={{ width: "40em" }} src={BgImage} alt="background" />
                <h1 style={{ marginBottom: "10px", marginTop: "0" }}>Pocket Notes</h1>
                <div style={{ color: "#292929" }}>
                    <p style={{ margin: "3px" }}>Send and receive messages without keeping your phone online.</p>
                    <p style={{ margin: "3px" }}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", color: "#292929" }}>
                <img style={{ marginRight: "5px", width: "12px" }} src={LockImg} alt="encryption" />
                <p>end-to-end encrypted</p>
            </div>

        </div>
    );
}

export default RightColumn;