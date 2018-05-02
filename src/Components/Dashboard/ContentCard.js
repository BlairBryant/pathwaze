import React from 'react'

export default function ContentCard(props) {
    return (
        <div className='contentCard'>
            <img src={props.img} alt="img"/>
            <h5>{props.title}</h5>
            <h6>{props.paragraph}</h6>
            <span>Posted 3 weeks ago by Eric</span>
        </div>
    )
}