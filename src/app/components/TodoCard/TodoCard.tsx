import React from "react";

type TodoCardProps = {
    value: string,

}

export default function TodoCard({value}: TodoCardProps):JSX.Element {
    return(
        <div>
            <p value={todo}></p>
            <button>Delete</button>
        </div>
        

    )
}