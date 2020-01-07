import React from 'react';
import ReactDOM from 'react-dom';

function BoilingVerdict(props) {
    if (props.celsuis >= 100) {
        return <p>the water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={(e)=>this.handleChange(e)}>
                </input>
                <BoilingVerdict
                    celsuis={parseFloat(temperature)}>
                </BoilingVerdict>
            </fieldset>
        )
    }
}

ReactDOM.render (
    <Calculator />,
    document.getElementById('root')
)

export default Calculator;
