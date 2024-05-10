/* eslint-disable react/prop-types */

function Note({ text, day, time }) {
    console.log(text, day, time);
    return (
        <div>
            <div>{text}</div>
            <div>
                <p>{day}</p>
                <p>{time}</p>
            </div>
        </div>
    );
}

export default Note;