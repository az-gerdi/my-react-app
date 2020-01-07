import React from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        alert('An essay was submitted: ' + this.state.value);
        e.preventDefault();        
    }

    render() {
        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={(e)=>this.handleChange(e)}/>
                </label>
                <input type="submit" value="submit" />                        
            </form>
        )
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('root')
)

export default EssayForm;