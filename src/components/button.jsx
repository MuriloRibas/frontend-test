import React from 'react'

const ButtonComponent = ({ children, type = "", primary = false, styles = "" }) => {
    return (
        <button type={type} className={"flex items-center px-4 py-6 my-3 medium duration-150 rounded-sm w-48 h-12 " + (primary ? "bg-indigo-500 text-white hover:bg-indigo-700 " : "bg-white text-indigo-500 hover:bg-gray-100 border-solid border-2 border-white ") + styles}>
            { children }
        </button>
    )
}

export default ButtonComponent