import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-items.stylles.scss'

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
    <div 
    style={{
        backgroundImage:`url(${imageUrl})`
    }}
    className={`${size} menu-item`}
    >
        <div 
        className="content"
        onClick={()=>history.push(`${match.url}${linkUrl}`)}
        >
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)