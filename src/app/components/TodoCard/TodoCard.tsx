import React from "react";
import styles from "./TodoCard.module.css";

type TodoCardProps = {
    value: string,

}

export default function TodoCard({value}: TodoCardProps):JSX.Element {
    return(
        <div className={styles.cardContainer}>
            <p className={styles.cardContainerTodo}>{value}</p>
            <button className={styles.cardContainerButton}>Delete</button>
        </div>
        

    )
}
