import React from 'react';
import moment from 'moment';

export const JornualEntry = ({id,date,title,body,url}) => {

    const noDate= moment(date);

    return (
        <div className="jornual__entry pointer">
            
           { 
            url &&
           <div className="jornual__entry-picture" style={{
                backgroundSize:'cover',
                backgroundImage:` url(${url})`
            }}></div>
            }

            <div className="jornual__entry-body">
                <p className="jornual__entry-title">
                   {title}
                </p>
                <p className="jornual__entry-content">
                    {body}
                </p>
            </div>
            <div className="jornual__entry-date-box">
                <span>{noDate.format('dddd')}</span>
                <h4>{noDate.format('Do')}</h4>
            </div>
        </div>
    )
}
