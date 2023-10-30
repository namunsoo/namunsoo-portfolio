import React from 'react'
import PropTypes from 'prop-types';
import ImgSlide from './ImgSlide';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'

function Project({id, color, title, location, imgs, subtitle, detail, gitUrl, etcUrl}) {
    let checkGitHub = () => {
        if (!(typeof gitUrl == 'undefined' || gitUrl == null || gitUrl === '')) {
            return(
                <div className='url'><a href={`${gitUrl}`} >GitUrl</a></div>
            )
        }
    }
    let checkUrl = () => {
        if (!(typeof etcUrl == 'undefined' || etcUrl == null || etcUrl === '')) {
            return(
                <div className='url'><a href={`${etcUrl}`} >Link</a></div>
            )
        }
    }
    return (
        <div className='project'>
            <table className='content' style={{backgroundColor: color}}>
                <tbody>
                    <tr>
                        <td className='title' colSpan={2}>{title}</td>
                    </tr>
                    <tr>
                        <td className='slide'>
                            <ImgSlide key={id} location={location} imgs={imgs}/>
                        </td>
                        <td className='description'>
                            <div className='subtitle'>{subtitle}</div>
                            <div className='detail'>{detail}</div>
                            {checkGitHub()}
                            {checkUrl()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imgs: PropTypes.array.isRequired,
    subtitle: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    gitUrl: PropTypes.string,
    etcUrl: PropTypes.string
};

export default Project