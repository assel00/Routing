import styles from "./Moviesall.module.css"
import React from "react";
import Movies from "./Movies";
import {FC} from "react";

type Props = {
    post: number;
};
const Moviesall: FC<Props> =({post})=>{
    return<div className={styles.container}>
        <h1>ID фильма: {`${post}`}</h1>



    </div>
};
export default  Moviesall