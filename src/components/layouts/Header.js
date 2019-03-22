import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core/';



const Header = (props) => (

<AppBar position="static">
    <Toolbar>
        <Typography variant="display3" align ="center" color="inherit">
            Kaustik test
        </Typography>
    </Toolbar>
</AppBar>
)

export default Header;
