import React, {Component} from 'react';

export default class Foo extends Component {
    render() {
        const {intl} = this.props;
        const props = this.props;

        return (
            <div>
                {intl.formatMessage({
                    id: 'foo.bar.baz',
                    defaultMessage: 'Hello World!',
                    description: 'The default message.',
                })}
                {props.intl.formatMessage({
                    id: 'props.intl',
                    defaultMessage: 'Test access from props',
                })}
                {this.props.intl.formatMessage({
                    id: 'this.props.intl',
                    defaultMessage: 'Test access from this.props',
                })}
                {this.intl.formatMessage({
                    id: 'this.intl',
                    defaultMessage: 'Text access from this',
                })}
            </div>
        );
    }
}
