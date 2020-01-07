import React from 'react';
import ReactDOM from 'react-dom';

class FavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert('Your favorite flavor is: ' + this.state.value);
        e.preventDefault();    
    }

    render() {
        return (
            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                <label>
                    Pick xour favorite flavor:
                    <select value={this.state.value} onChange={(e)=>{this.handleChange(e)}}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                    </select>
                    <input type="submit" value="Submit" />
                </label>
            </form>
        );
    }

}

ReactDOM.render(
    <FavorForm />,
    document.getElementById('root')
);

export default FavorForm;
