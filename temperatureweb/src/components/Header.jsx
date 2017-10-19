import React from 'react';
import '../style/containers.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {
    render() {
        return(
            <div>                
                <MuiThemeProvider>
                    <AppBar
                        title="Temperature"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        style={{backgroundColor: 'blue'}}
                    >
                    
                    </AppBar>
                </MuiThemeProvider>
            </div>
        )
    }
}