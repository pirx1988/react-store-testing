import React, { Component } from 'react'

export interface ListItemProps {
    title?: string,
    desc: string
}

class ListItem extends Component<ListItemProps, any> {
    render() {
        const {title, desc} = this.props;
        if(!title) {
            return null;
        }
        return (
            <div data-test="listItemComponent">
                <h2 data-test = "componentTitle">{title}</h2>
                <div data-test = "componentDescription">{desc}</div>
            </div>
        )
    }
}
export default ListItem;