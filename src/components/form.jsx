import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    z-index: 2;

    & > :not(:last-child) {
        margin: 0px 24px;
    }
    & > :first-child {
        margin-top: 24px;
    }
    & > :last-child {
        margin-top: 12px;
        border-radius: 0px 0px 10px 10px;
    }
`

const FormComponent = ({ children, submitFn }) => {
    return (
        <Form onSubmit={submitFn} className="flex relative flex-col w-full bg-white my-6 rounded-lg shadow-xl lg:my-12 lg:w-8/12 lg:flex-row lg:flex-wrap">
            { children }
        </Form>
    )
}

export default FormComponent
