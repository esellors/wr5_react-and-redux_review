import React from 'react';
import { connect } from 'react-redux';

function MoodHistory(props) {
    const entriesMapped = props.entries.map((entry, index) => {
        return (
            <div key={index}>
                <p>On {entry.date}, I felt {entry.mood}</p>
            </div>
        )
    })

    return (
        <section className='mood-history'>
            { entriesMapped}
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(MoodHistory);