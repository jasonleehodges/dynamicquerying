import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBolt from '@fortawesome/fontawesome-free-solid/faBolt'

export default class Header extends React.Component {
    render() {
        return (
            <h1>
                <FontAwesomeIcon icon={faBolt} />
                {this.props.title}
            </h1>
        )
    }
}