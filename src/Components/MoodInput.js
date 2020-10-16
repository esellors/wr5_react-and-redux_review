import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../redux/reducer';

class MoodInput extends React.Component {
    constructor() {
        super();
        this.state = {
            date: '',
            mood: ''
        }
    }

    handleDateChange = e => {
        this.setState({
            date: e.target.value
        })
    }

    handleMoodChange = e => {
        this.setState({
            mood: e.target.value
        })
    }

    addEntry = () => {
        this.props.addEntry({...this.state})
    }

    render() {
        return (
            <section className='mood-input'>
                <h4>Welcome, {this.props.userName}</h4>
                <input onChange={this.handleDateChange} type='date' />
                <input onChange={this.handleMoodChange} placeholder='enter mood' />
                <button onClick={this.addEntry}>add</button>
            </section>
        )
    }
}

export default connect(null, { addEntry })(MoodInput);