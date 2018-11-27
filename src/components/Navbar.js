import React, { Component } from 'react';
import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarNavigationIcon,
    TopAppBarActionItem,
    TopAppBarTitle
} from '@rmwc/top-app-bar';

export default class Navbar extends Component {
    render() {
        return (
            <TopAppBar>
                <TopAppBarRow>
                    <TopAppBarSection>
                        <TopAppBarNavigationIcon icon="menu" />
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
        )
    }
}