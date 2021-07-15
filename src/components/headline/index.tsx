import React, {Component} from 'react'
export  interface HeadlineProps {
    header?: string,
    desc?: string,
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