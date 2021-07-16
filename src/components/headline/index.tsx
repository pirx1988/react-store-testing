import React, {Component} from 'react'
import PropTypes from 'prop-types';
export interface Person {
    fName: string,
    lName: string,
    email: string,
    age: number,
    onlineStatus: boolean
}
export  interface HeadlineProps {
    header?: string,
    desc?: string,
    // tempArr: Person[]
}

class Headline extends Component<HeadlineProps, any> {


    render() {
        const {header, desc} = this.props

        if(!header) {
            return null;
        }
        return (
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        );
    }

}

export default Headline;