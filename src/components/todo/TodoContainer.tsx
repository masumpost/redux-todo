// import React from 'react';

// import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/Api";

const TodoContainer = () => {

    const [priority, setPriority] = useState('');
    // const { todos } = useAppSelector((state) => state.todos)
    console.log(priority);

    const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal></AddTodoModal>
                <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
            </div>
            <div className="bg-primary-gradient w-full h-full rounded-lg p-[4px]">
                {/* <div className="bg-white flex justify-center items-center rounded-lg">
                    <p className="font-bold p-3 text-3xl">There is no task pending</p>
                </div> */}
                <div className="bg-white rounded-lg w-full h-full p-3">
                    {
                        todos?.data?.map((item) => <TodoCard {...item} key={item.id}></TodoCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;