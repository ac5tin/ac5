import React from 'react';


import Typing from 'react-typing-animation';

const Message = () => (
    <div id="welcomeMsg">
        <Typing loop={true}>
            <Typing.Speed ms={200} />
            <h1>Welcome</h1>
            <Typing.Delay ms={2000} />
            <Typing.Speed ms={100} />
            <p>My name is Austin Chang</p>
            <Typing.Delay ms={2000} />
            <p>I am a Web Developer</p>
            <Typing.Delay ms={5000} />
            {/* Temporary fix : https://github.com/notadamking/react-typing-animation/issues/50 */}
            <Typing.Backspace count={51} speed={0} />
        </Typing>

        
    </div>
)

export default Message;