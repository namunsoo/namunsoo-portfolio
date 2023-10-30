import React from 'react'
import PropTypes from 'prop-types' // impt(단축키)

// rafce(단축키)
const CodeColor = (props) => {
  var result = [];
  for (let i = 0; i < props.text.length; i++) {
    result.push(<span className={props.color[i]}>{props.text[i]}</span>)
  }
  return (
    result
  )
}

CodeColor.prototype = {
  // isRequired: 이 요소는 필수로 있어야 한다.
  // PropTypes.arrayOf(PropTypes.string) 이렇게만 쓰면 필수요소가 아니다.
  // 배열 형식 정의
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default CodeColor