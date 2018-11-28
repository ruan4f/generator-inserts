import React, { Component, Fragment } from 'react';
import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarNavigationIcon,
    TopAppBarFixedAdjust
} from '@rmwc/top-app-bar';

export default class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <TopAppBar>
                    <TopAppBarRow>
                        <TopAppBarSection>
                            <TopAppBarNavigationIcon icon="menu" />
                        </TopAppBarSection>
                    </TopAppBarRow>
                </TopAppBar>
                <TopAppBarFixedAdjust>
                    {this.props.children}
                </TopAppBarFixedAdjust>
            </Fragment>
        )
    }
}