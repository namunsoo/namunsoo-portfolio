import React from 'react'
import PropTypes from 'prop-types' // impt(단축키)
import $ from 'jquery';

// rafce(단축키)
const TypingEffect = (props) => {
    var count = 0;
    var text = props.text
    var typing = "";
    const typingInterval = setInterval(() => {
        typing += text[count];
        $("#myInfo").find("#typingEffect").text(typing);
        count += 1;
        if (count >= text.length) {
            clearInterval(typingInterval);
        }
    }, 100);
    return (
        <div id='typingEffect'>{typing}</div>
    )
};

TypingEffect.prototype = {
    // isRequired: 이 요소는 필수로 있어야 한다.
    // PropTypes.string 이렇게만 쓰면 필수요소가 아니다.
    // string 형식 정의
    text: PropTypes.string.isRequired,
}

export default TypingEffect