import React from 'react'
import PropTypes from 'prop-types';
import ImgSlide from './ImgSlide';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'

function Project({id, color, title, location, imgs, subtitle, detail, giturl}) {
    let checkGitHub = () => {
        if (!(typeof giturl == 'undefined' || giturl == null || giturl === '')) {
            return(
                <div className='gitUrl'><a href={`${giturl}`} onClick={goGitHub}>GitHub</a></div>
            )
        }
    }
    let goGitHub = () => {
        document.location.href=giturl;
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
    giturl: PropTypes.string
};

export default Project