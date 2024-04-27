// import React from 'react';

import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todos = () => {
    return (
        <Container>
            <h2 className="text-2xl text-center font-semibold my-10">My todos</h2>
            <TodoContainer></TodoContainer>
        </Container>
    );
};

export default Todos;