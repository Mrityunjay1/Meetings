import React from 'react'
import classes from './MeetupItem.module.css';
import Card from '../Ui/Card'

export default function MeetupItem(props) {
    return (
        <Card>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt="" />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.address}</p>
            </div>
            <div>
                <button className={classes.actions}>Favorites</button>
            </div>
        </li>
        </Card>
        
    )
}
