import React from 'react';
import ReactDOM from 'react-dom';


class Reservation extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
            text: 'The bus is going with 2 guests'
        };        
    }

    handleInputchange(e) {
        let text = ''
        const tar = e.target;
        const val = e.target.type === 'checkbox' ? tar.checked : tar.value;
        const nam = tar.name;

        if (e.target.type === 'checkbox'){
            if (val === false) {
                text = 'the bus is not going';
                this.setState({[nam]: false}); 
            } else {
                this.setState({isGoing: true}); 
                text = 'the bus is going with ' + this.state.numberOfGuests + ' guests';
            }
        }

        if (e.target.type === 'number' && this.state.isGoing === true) {
            text = 'the bus is going with ' + val + ' guests';
            // this.setState({numberOfGuests: val});
        }

        this.setState({
            [nam]: val,
            text: text
        });
                
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={(e)=>this.handleInputchange(e)}> 
                    </input>
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={(e)=>this.handleInputchange(e)}>
                    </input>
                </label>
                <br />
                <br />
                <label>
                    {this.state.text}
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
);

export default Reservation;