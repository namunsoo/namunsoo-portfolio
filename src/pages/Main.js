import React from 'react'
import Project from '../components/Project';
import Hexagons from '../components/Hexagons';

import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const projectList = [
  {
    color: '#C2DEDC', 
    title: 'title', 
    location: 'assets/images/',
    imgs: ['TestTest_1.jpg','TestTest_2.jpg'], 
    subtitle: 'subtitle', 
    detail: '3일 전국 대부분 지역에 폭염특보가 내려진 가운데 서울의 낮 최고 기온이 35도까지 오를 예정이다. 중부에서는 찜통 더위가 절정에 달하는 동안 제주와 남해안에는 장맛비가 쏟아지겠다. 또한 화요일인 4일에는 수도권 등 전국으로 확대 될 것으로 보여진다. 금일 아침 최저기온은 21~25도, 낮 최고기온은 25~35도로 예상된다.', 
    giturl: 'https://www.naver.com/'
  },
  {
    color: '#DCD6F7', 
    title: 'title', 
    location: 'assets/images/',
    imgs: ['Test_1.jpg','Test_2.jpg'], 
    subtitle: 'subtitle', 
    detail: '3일 전국 대부분 지역에 폭염특보가 내려진 가운데 서울의 낮 최고 기온이 35도까지 오를 예정이다. 중부에서는 찜통 더위가 절정에 달하는 동안 제주와 남해안에는 장맛비가 쏟아지겠다. 또한 화요일인 4일에는 수도권 등 전국으로 확대 될 것으로 보여진다. 금일 아침 최저기온은 21~25도, 낮 최고기온은 25~35도로 예상된다.'
  }
]

function renderProject(item, idx){
  return <Project key={idx} id={idx} color={item.color} location={item.location} title={item.title} imgs={item.imgs} type={item.type} subtitle={item.subtitle} detail={item.detail} giturl={item.giturl}/>
}

export default function main() {
  return (
    <>
      <div id='skillList'>
        <Hexagons location='assets/icon/' imgs={['logoTest.png','logo512.png','logo512.png','logo512.png','logo512.png','logo512.png','logo512.png']}/>
      </div>
      {projectList.map((item, idx)=>{return renderProject(item, idx)})}
    </>
  )
}
