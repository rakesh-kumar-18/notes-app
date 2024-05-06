import { createContext, useContext } from "react";

const initialState = {
    noteTitle: {
        name: "",
        color: ""
    },
    setNoteTitle: () => { }
};

const NoteContext = createContext(initialState);

export const NoteContextProvider = NoteContext.Provider;

export default function useNote() {
    return useContext(NoteContext);
}