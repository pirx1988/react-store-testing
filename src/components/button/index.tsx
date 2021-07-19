import React, {Component} from 'react'

export interface buttonProps {
    buttonText: string,
    emitEvent?: () => void

}

class SharedButton extends Component<buttonProps, any> {

    submitEvent() {
        if(this.props.emitEvent) {
            this.props.emitEvent();
        }
    }

    render() {
        const { buttonText } = this.props
        return (
            <button onClick={() => this.submitEvent()} data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}
export default SharedButton