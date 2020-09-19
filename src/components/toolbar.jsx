import React, { useState } from 'react'
import styled from 'styled-components'

import Logo from "../assets/svg/Icon/Logo.svg";
import Menu from "../assets/svg/Icon/Menu.svg";

const LinksWrapper = styled.div`
    & a, button {
        margin: 0px 24px;
        &:hover {
            cursor: pointer;
        }
        @media(max-width: 767px) {
            font-size: 12px;
            padding: 0; 
            border: none;   
            margin: 0px 8px;
        }
    }
    & > :first-child {
        margin-left: 10.5px;
    }
`

const ToolbarComponent = () => {
    const [active, setactive] = useState(false)

    const handleActive = () => setactive(!active)

    return (
        <nav className="flex justify-between items-center b h-22 border-gray-400 border-b-2 pb-5 md:w-11/12 md:justify-start lg:w-8/12">
            <Logo className="inline-block text-white h-16 w-16 "/>
            <LinksWrapper className={"text-white text-lg w-full items-center " + (active ? "flex" : "hidden") + " md:flex"}>
                <a>Explore</a>
                <a>Sobre nós</a>
                <a>Seguros</a>
                <a>Hotéis</a>
                <div className="my-0 mr-0 ml-auto flex justify-center items-center">
                    <a className="mr-6">Viagens</a>
                    <button className="bg-transparent border-solid border-2 px-4 py-3 rounded-md">Login</button>
                </div>
            </LinksWrapper>
            <Menu className="inline-block text-white h-10 w-10 mt-5 md:hidden" onClick={handleActive}/>
        </nav>
    )
}
export default ToolbarComponent