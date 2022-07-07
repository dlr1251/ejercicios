import React from 'react';
import styles from '../styles/components/Animal.module.scss'

const Animal = (props) => {
    console.log(props)

    return (
        <div className={styles.wrapper}>
            <img src={`/${props.image}`} style={{ width: '300px', height: '200px'}}/>
            <h1 className={styles.title}>Este animal es {props.title}</h1>
            <h4 className={styles.description}>La descripcion de este animal es: {props.descripcion}</h4> 
        </div>
    )
}

export default Animal;