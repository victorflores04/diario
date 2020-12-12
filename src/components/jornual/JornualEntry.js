import React from 'react'

export const JornualEntry = () => {
    return (
        <div className="jornual__entry pointer">
            <div className="jornual__entry-picture" style={{
                backgroundSize:'cover',
                backgroundImage: 'url(https://assets.leevalley.com/Size5/10061/49L0795-everyman-s-journal-u-02-r.jpg)'
            }}>

            </div>
            <div className="jornual__entry-body">
                <p className="jornual__entry-title">
                    un nuevo dia
                </p>
                <p className="jornual__entry-content">
                    asdfasf fdsafasd fas df sad fasdfasdfs adfsdfafsdf asd fsafdsafasdfsa dfsfsad fsafa sd
                </p>
            </div>
            <div className="jornual__entry-date-box">
                <span>monday</span>
                <h4> 19</h4>
            </div>
        </div>
    )
}
