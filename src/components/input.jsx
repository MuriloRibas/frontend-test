import React from 'react'
import styled from 'styled-components'

const WrapperInputAndIcon = styled.label`
    & > input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    & > input[type=number] {
        -moz-appearance:textfield;
    }
`

const WrapperRadio = styled.label`
    display: flex;
    position: relative;
    cursor: pointer;
    & > input[type=radio] {
        opacity: 0;
        position: fixed;
        width: 0;
    }
    & > input[type=radio]:checked + span:before {
        border: 8px solid #667EEA;
    }
    & > span {
        margin-left: 35px;
        
    }
    & > span:before {
        transition: border 0.25s;

        content: "";
        position: absolute;
        top: 0;
        left: 0;   
        width: 28px;
        height: 28px;
        background: gray;
        border-radius: 100px;
        box-sizing: border-box;
        background: white;
    }
    & > input[type=radio]:not(:checked) + span:before {
        background: #EDF2F7;
        border: 3px solid #CBD5E0;
    }
`;

const InputComponent = ({ type, label, value, onChange, icon = undefined, name = label.toLowerCase(), checked = false, after = { exists: false, content: "" } }) => {
    if (type === "radio") {
        return (
            <WrapperRadio className="flex mr-4">
                <input type="radio" name="tripType" id={name} value={value} checked={checked} onChange={onChange} className="mr-2"/>
                <span className="text-lg text-gray-800">{label}</span>
            </WrapperRadio>
        )
    } else {
        return (
            <div className="mt-2 mb-4">
                <label htmlFor="origem" className="text-sm text-gray-700 mb-2 font-medium">{label}</label>
                <WrapperInputAndIcon className="relative flex items-center bg-gray-100 border border-solid border-gray-400 rounded-sm text-lg py-3 px-3 lg:mr-4 z-10">
                    <div>
                        { icon && icon }
                    </div>
                    <input type={type} id={label.toLowerCase()} name={name} value={value} onChange={onChange} className={"bg-gray-100 ml-2 text-gray-800 z-0 " + (type === "number" ? "w-4" : "w-8/12")}/>
                    { type === "number" && <input type="text" id="subdomaintwo" value="pessoa" className="w-8/12 bg-white text-gray-800" disabled/> }
                </WrapperInputAndIcon>
            </div>
        )
    }
}

export default InputComponent