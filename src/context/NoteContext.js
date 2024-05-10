import { createContext, useContext } from "react";

const NoteContext = createContext();

export const NoteContextProvider = NoteContext.Provider;

export default function useNote() {
    return useContext(NoteContext);
}