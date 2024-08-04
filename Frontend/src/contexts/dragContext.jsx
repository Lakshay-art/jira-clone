import React, { createContext, useState, useContext } from "react";
import { useAuth } from "./authContext"
import useAuthedAxios from "../hooks/useAuthedAxios";

const DragContext = createContext({
    handleDrop: () => { },
    data: undefined
});



export const DragProvider = ({ children }) => {
    // const { user } = useAuth()
    const authedAxios = useAuthedAxios()
    const [data, setData] = useState([]);

    const handleDrop = ({ id, parentColumn, currentColumn }) => {
        updateTask({ ...data?.[parentColumn]?.[id], status: currentColumn })
        setData((prevState) => {
            const prev = prevState.map((col) => [...col])
            const selectedItem = prev?.[parentColumn]?.[id];
            prev?.[parentColumn]?.splice(id, 1);
            prev?.[currentColumn]?.push(selectedItem);

            return prev;
        })
    };

    const fetchUserTasks = async () => {
        // https://jira-clone-api-zeta.vercel.app
        (await authedAxios).get(`${process.env.REACT_APP_SERVER}/posts/userTasks`).then((res) => {
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
        (await authedAxios).post(`${process.env.REACT_APP_SERVER}/posts/updateTask`, task).then((res) => {

        })

    }

    return (
        <DragContext.Provider value={{ data, handleDrop, setData, fetchUserTasks }}>
            {children}
        </DragContext.Provider>
    );
};

export const useDrag = () => useContext(DragContext);
