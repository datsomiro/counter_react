import React, { useEffect, useState } from 'react';
import Button from './Button';

const Counter = () => {
    // count would be the same as this.state.count in the class component
    // setCount(value) would equal to this.setState({count: value, films: value, etc.})
    const [count, setCount] = useState(0);
    const [film, setFilm] = useState();
    const [person, setPerson] = useState();

    // useEffect stands for lifecycle methods of the class component, if it is called withou 2. parameter it will be called everytime anything changes in the component
    // by passing an array of props as a 2. parameter we tell it to be called only in case anything in this array has changed
    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <div>
            <Button
                name="+"
                onClick={() =>
                    setCount(count + 1)
                }
            />
            <span>{count}</span>
            <Button
                name="-"
                onClick={() =>
                    setCount(count - 1)
                }
            />
        </div>
    )

}

//component always need a default export
export default Counter;