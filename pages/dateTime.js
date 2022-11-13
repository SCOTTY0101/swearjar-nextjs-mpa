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
                <div className='flex justify-center'>
                    <div className=" bg-sky-50 ">
                        <p className="p-2 border-y-2"> Date: {this.state.date.toLocaleDateString()}</p>
                        <p className="p-2 border-y-2">Time: {this.state.date.toLocaleTimeString()}</p>
                        <p className="p-2 border-y-2">Hours: {this.state.date.getHours()}</p>
                        <p className="p-2 border-y-2">Minutes: {this.state.date.getMinutes()}</p>
                        <p className="p-2 border-y-2">Seconds: {this.state.date.getSeconds()}</p>
                    </div>
                </div>

            </div>
        )
    }

}
export default Time