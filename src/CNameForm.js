import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(e) {
        this.setState({value: e.target.value.toUpperCase()});
    }

    handleSubmit(e) {
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)

export default NameForm;
