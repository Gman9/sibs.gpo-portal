import React, { Component, createContext, ReactNode } from 'react';

export interface ModalContextInterface {
    component: any;
    props: any;
    showModal: any;
    hideModal: any;
}

export const ModalContext = createContext<ModalContextInterface>({
    component: null,
    props: {},
    showModal: () => null,
    hideModal: () => null,
});

type TypeModalProvider = {
    children: any;
    component: any;
    hideModal: any;
};

export class ModalProvider extends Component<any> {
    // Tentar resolver isto
    showModal = (component: any, props = {}) => {
        this.setState({
            component,
            props,
        });
    };

    hideModal = () =>
        this.setState({
            component: null,
            props: {},
        });

    state = {
        component: null,
        props: {},
        showModal: this.showModal,
        hideModal: this.hideModal,
    };

    render() {
        return <ModalContext.Provider value={this.state}>{this.props.children}</ModalContext.Provider>;
    }
}

export const ModalConsumer = ModalContext.Consumer;
