import React from 'react'
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SideNavigation.css';

function Items(projects) {
    
    let arr = [];
    for (let i = 0; i < projects.length; i++) {
        arr.push(
            <Nav.Item>
                <Nav.Link eventKey={"project_"+i}>{projects[i].title}</Nav.Link>
            </Nav.Item>
        )
        
    }
    return arr;
}


function SideNavigation({projects}) {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sideNav"
        onSelect={selectedKey => {
            let heigth = document.querySelectorAll(".project")[parseInt(selectedKey.split('_')[1])].offsetTop;
            window.scrollTo({top: heigth, behavior: 'smooth'});
        }}
        >
        <div id='navTitle'>프로젝트</div>
        {Items(projects)}
    </Nav>
  );
}

SideNavigation.propTypes = {
    projects: PropTypes.array.isRequired
};

export default SideNavigation;