import React from 'react';
import ReactDOM from 'react-dom'

class NumList extends React.Component {
    constructor(props) {
        super(props);
        this.message = '';
        this.state = {date: new Date(), stopInterval: false};
        this.numbers = [1, 2, 3, 4, 5];
    }

    getList() {
        this.message = 'The number of elements are: ' + this.numbers.length;
        return this.numbers.map((number) => 
            <li key={number.toString()}>{number}. list item</li>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(
            () =>{ this.tick()},
            2000
          );
          this.timerID1 = setInterval(
            () =>{ this.setOthers()},
            500000
          );          
    }

    componentWillUnmount() {
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    handleInputchange(e) {
        const stopInterval = this.state.stopInterval === true ? false : true;
        if (stopInterval === true) {
            clearInterval(this.timerID1);
        } else {
            this.timerID1 = setInterval(
                () =>{ this.setOthers()},
                5000
            );
        }
        this.setState({stopInterval: stopInterval})
    }

    setOthers() {
        this.setState({
            newItemMessageTime: 'Last item created at: ' + new Date().toLocaleTimeString()
        });
        this.numbers.push(this.numbers.length + 1)
    }

    render() {
        return ( 
            <div>
                <div>{this.message}</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
                <div>{this.state.newItemMessageTime}</div>
                <ul>{this.getList()}</ul>
                <label>
                    Stop updating time:
                    <input
                        name="stop"
                        type="checkbox"
                        checked={this.state.stopInterval}
                        onChange={(e)=>this.handleInputchange(e)}> 
                    </input>
                </label>
            </div>
        );
    }   
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumList numbers={numbers}/>,
    document.getElementById('root')
);

export default NumList;
