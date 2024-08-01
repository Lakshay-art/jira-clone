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
            updateTask({ ...selectedItem, status: currentColumn })
            return prev;
        })
    };

    const fetchUserTasks = async () => {
        // https://jira-clone-api-zeta.vercel.app
        await getAuthedAxios(accessToken).get("https://jira-clone-api-zeta.vercel.app/api/posts/userTasks").then((res) => {
            const data = [[], [], []];
            for (let i = 0; i < res.data.length; i++) {
                const curr = res.data[i]
                data[curr.status || 0].push(curr);
            }
            setData(data)
        })

    }

    const updateTask = async (task) => {
        // https://jira-clone-api-zeta.vercel.app
        await getAuthedAxios(accessToken).post("https://jira-clone-api-zeta.vercel.app/api/posts/updateTask", task).then((res) => {
            // const data = [[], [], []];
            // for (let i = 0; i < res.data.length; i++) {
            //     const curr = res.data[i]
            //     data[curr.status || 0].push(curr);
            // }
            // setData(data)
            console.log(res.data)
        })

    }

    return (
        <DragContext.Provider value={{ data, handleDrop, setData, fetchUserTasks }}>
            {children}
        </DragContext.Provider>
    );
};

export const useDrag = () => useContext(DragContext);
