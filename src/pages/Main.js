import React from 'react'
import Project from '../components/Project';
import Hexagons from '../components/Hexagons';
import Code from '../components/CodeColor';
import TypingEffect from '../components/TypingEffect';
import SideNavigation from 'components/SideNavigation';

import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const projectList = [
  {
    color: '#D7C0AE', 
    title: 'Solind', 
    location: 'assets/images/',
    imgs: ['Sollind1.PNG','Sollind2.PNG','Sollind3.PNG','Sollind4.PNG','Sollind5.PNG','Sollind6.PNG','Sollind7.PNG','Sollind8.PNG'], 
    subtitle: 'spring으로 웹사이트 제작 (팀 프로젝트 웹사이트)', 
    detail: '[사용언어및 개발 환경]\nJava 1.8.0, Oracle 11g xe, Linux(Ubuntu)20.04, MongoDB 6.0.1, Node.js 16.17.1, SpringeGovFrameDev-3.9.0-64bit(Eclipse), WIndow10\n\n'+
            '블라인드(https://www.teamblind.com/kr/)를 참고하여\n 기본적인 웹사이트 기능 구현', 
    gitUrl: 'https://github.com/namunsoo/namunsoo-portfolio'
  },
  {
    color: '#D7C0AE', 
    title: '개인 블로그', 
    location: 'assets/images/',
    imgs: ['MyBlog_01.PNG','MyBlog_02.PNG'], 
    subtitle: '개인 공부 및 정보 수집을 위한 블로그', 
    detail: '버전 및 프로그램 차이로인한 문제가 있을 수 있으며 \n 잘못된 정보가 있을 수 있습니다.',
    etcUrl: 'https://namunsoo.tistory.com/'
  }
]

function renderProject(item, idx){
  return <Project key={idx} id={idx} color={item.color} location={item.location} title={item.title} imgs={item.imgs} type={item.type} subtitle={item.subtitle} detail={item.detail} gitUrl={item.gitUrl} etcUrl={item.etcUrl}/>
}

export default function main() {
  return (
    // 'C.png','C++.png','CSS.png','C++.png','HTML.png','java.png','javascript.png','jQuery.png','MongoDB.png','OracleDB.png','Python.png','React.png','Spring.png','MSSQL.png'
    <>
      <div style={{backgroundColor: '#EEE3CB'}}>
        <div id='top' style={{backgroundImage: `url(${require('assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg')})`}}>
          <div id='myInfo'>
            <div id='computer'>
              <div id='introduce'>
                <span className='grey'>&nbsp;1&nbsp;&nbsp;</span><Code color={["orange","blue","white"]} text={["public class"," 포트폴리오 ","{"]}/><br></br>
                <span className='grey'>&nbsp;2</span><br></br>
                <span className='grey'>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Code color={["orange","green2","white"]} text={["public static void"," main","() {"]}/><br></br>
                <span className='grey'>&nbsp;4</span><br></br>
                <span className='grey'>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Code color={["blue","yellow","white","orange","green","white"]} text={["사람"," 나문수 ","="," new ","사람","();"]}/><br></br>
                <span className='grey'>&nbsp;6</span><br></br>
                <span className='grey'>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Code color={["yellow","white","green","white","green2","white"]} text={["나문수",".","set자세","(","\"배움\"",");"]}/><br></br>
                <span className='grey'>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Code color={["yellow","white","green","white","green2","white"]} text={["나문수",".","set업무","(","\"책임\"",");"]}/><br></br>
                <span className='grey'>&nbsp;6</span><br></br>
                <span className='grey'>&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Code color={["blue","white","green","white","yellow","white"]} text={["어떤개발자",".","소개","("," 나문수 ",");"]}/><br></br>
                <span className='grey'>&nbsp;8</span><br></br>
                <span className='grey'>&nbsp;9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Code color={["white"]} text={["}"]}/><br></br>
                <span className='grey'>&nbsp;10</span><br></br>
                <span className='grey'>&nbsp;11&nbsp;</span><Code color={["white"]} text={["}"]}/><br></br>
              </div>
              <TypingEffect text="항상 배우는 자세로 일하고, 맡은 바 책임을 다하는 나문수입니다."/>
            </div>
          </div>
        </div>
        <div id='skillList'>
          <Hexagons location='assets/icon/' imgs={['C.png','C++.png','CSS.png','C++.png','HTML.png','java.png','javascript.png','jQuery.gif','MongoDB.png','OracleDB.png','Python.png','React.png','Spring.png','MSSQL.png']}/>
        </div>
        {projectList.map((item, idx)=>{return renderProject(item, idx)})}
        <SideNavigation projects={projectList}/>
      </div>
    </>
  )
}
