import React from "react";

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState( {date: new Date()} );
    }

    render() {
        return(
            <div>
                <h3>Date and Time with React Class</h3>
                <div className=''>
                    <div className="">
                        <div className=""> Date: {this.state.date.toLocaleDateString()}</div>
                        <div className="">Time: {this.state.date.toLocaleTimeString()}</div>
                        <div className="">Hours: {this.state.date.getHours()}</div>
                        <div className="">Minutes: {this.state.date.getMinutes()}</div>
                        <div className="">Seconds: {this.state.date.getSeconds()}</div>
                    </div>
                </div>

            </div>
        )
    }

}
export default Time