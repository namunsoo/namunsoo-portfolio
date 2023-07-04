import React from 'react'
import PropTypes from 'prop-types';
import './Hexagons.css'

function Hex(location, img, idx) {
    return (
        <div className="hex" key={idx}>
            <div className="hex-inner1">
                <div className="hex-inner2" style={{backgroundImage: `url(${require(`../${location}${img}`)})`}}>
                </div>
            </div>
        </div>
    )
}

function Hexagons({location, imgs}) {
    return (
        <div className="hexGroup">
            {imgs.map((img, idx)=>{return Hex(location, img, idx)})}
        </div>
    )
}

Hexagons.propTypes = {
    location: PropTypes.string.isRequired,
    imgs: PropTypes.array.isRequired
};

export default Hexagons
