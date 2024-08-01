import React, { createContext, useState, useContext } from "react";
import getAuthedAxios from "../lib/authedAxios";
import { useAuth } from "./authContext"

const DragContext = createContext({
    handleDrop: () => { },
    data: undefined
});

export const DragProvider = ({ children }) => {
    const { user: { accessToken } } = useAuth()
    const [data, setData] = useState([]);

    const handleDrop = ({ id, parentColumn, currentColumn }) => {

        setData((prevState) => {
            const prev = prevState.map((col) => [...col])
            const selectedItem = prev?.[parentColumn]?.[id];
            prev?.[parentColumn]?.splice(id, 1);
            prev?.[currentColumn]?.push(selectedItem);
            // updateTask()
            return prev;
        })
    };

    const fetchUserTasks = async () => {
        await getAuthedAxios(accessToken).get("https://jira-clone-c84z.vercel.app/api/posts/userTasks").then((res) => {
            const data = [[], [], []];
            for (let i = 0; i < res.data.length; i++) {
                const curr = res.data[i]
                data[curr.status || 0].push(curr);
            }
            setData(data)
        })

    }

    return (
        <DragContext.Provider value={{ data, handleDrop, setData, fetchUserTasks }}>
            {children}
        </DragContext.Provider>
    );
};

export const useDrag = () => useContext(DragContext);
