import * as React from "react";

import Moviesall from "./Moviesall";
import {Link} from "react-router-dom";
import styles from "./Movies.module.css"

function  Movies(props:any) {
    const posts = [
        {id: 1, title: 'kino1'},
        {id: 2, title: 'kino2'},
        {id: 3, title: 'kino3'}
    ];

    const movies = (
            <ul>
                {posts.map((post:any) =>
                    <span key={post.id} > <Link  className={styles.links}to={`/movies:Id/${post.id}`}>
                        {post.title}</Link>
                    </span>
                )}
            </ul>

        );


        return (
            <div className={styles.Movies}>
                {movies}



            </div>
        );

    }




export default  Movies;
