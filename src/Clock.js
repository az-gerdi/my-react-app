import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props) {
    return (
        <div>
            <h1>Hello, world</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock/>,
        document.getElementById('root')
    );
}    

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);

setInterval(tick(), 1000);

export default Clock;