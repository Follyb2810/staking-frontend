import React from 'react'
import { Stack } from 'react-bootstrap'

const Template = ({children,title}) => {
    return (
        <Stack>
            <h1>{title}</h1>
            {children}
        </Stack>
    )
}

export default Template
