import React, {Component, Fragment} from 'react'
import {Container} from '@mui/material'
import Box from '@mui/material/Box'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Box sx={{height: '100vh', bgcolor: '#ececec', color: 'text.secondary'}}>
                        Hello World
                    </Box>
                </Container>
            </Fragment>
        )
    }
}
