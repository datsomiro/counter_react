import React from 'react';
import Button from './Button';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        // initiate state with the props we get from the parent component
        this.state = {
            count: 0
        }
    }

    render() {
        // destructuring of the object this.props, it is the same as doing
        // const count = this.props.count;
        // const { count } = this.props;
        //return always has to return 1 parent element
        // variable that will hold the final count of this counter;
        // if the this.state.count + this.props.commonCount equals or is bigger than zero, than I will use this value, other then that I will assing a 0 to finalCount. 
        let finalCount;

        if (this.state.count + this.props.commonCount >= 0) {
            finalCount = this.state.count + this.props.commonCount;
        } else {
            finalCount = 0;
        }

        console.log(this.state.count);
        const { count } = this.state;
        return (
            <div>
                {/** we use component Button and assing to it property name and onClick */}
                {/**when I click on + I will add 1 to this.state.count */}
                <Button
                    name="+"
                    onClick={() =>
                        this.setState({
                            count: count + 1
                        })
                    }
                />
                <span>{finalCount}</span>
                {/**when I click on - I will substract by 1 this.state.count */}
                <Button
                    name="-"
                    onClick={() =>
                        this.setState({
                            count: finalCount > 0 ? count - 1 : count
                        })
                    }
                />
            </div>
        )
    }
}

//component always need a default export
export default Counter;