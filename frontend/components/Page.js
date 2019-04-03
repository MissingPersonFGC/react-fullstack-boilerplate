import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';

const theme = {

}

class Page extends Component {
    render() {
        return(
            <ThemeProvider theme={theme}>
                <div>
                    <Meta />
                    {this.props.children}
                </div>
            </ThemeProvider>
        )
    }
}

export default Page;