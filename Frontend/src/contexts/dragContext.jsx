import React, { createContext, useState, useContext } from "react";

const DragContext = createContext({
    handleDrop: () => { },
    data: undefined
});

export const DragProvider = ({ children }) => {
    const [data, setData] = useState([[{ title: "", description: "", createdAt: "" }, { title: "", description: "", createdAt: "" }, { title: "", description: "", createdAt: "" }], [{ title: "", description: "", createdAt: "" }, { title: "", description: "", createdAt: "" }], [{ title: "", description: "", createdAt: "" }], [{ title: "", description: "", createdAt: "" }]]);

    const handleDrop = ({ id, parentColumn, currentColumn }) => {

        setData((prevState) => {
            const prev = prevState.map((col) => [...col])
            const selectedItem = prev?.[parentColumn]?.[id];
            prev?.[parentColumn]?.splice(id, 1);
            prev?.[currentColumn]?.push(selectedItem);
            return prev;
        })
    };

    return (
        <DragContext.Provider value={{ data, handleDrop }}>
            {children}
        </DragContext.Provider>
    );
};

export const useDrag = () => useContext(DragContext);
