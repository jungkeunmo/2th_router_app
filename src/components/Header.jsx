import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.ul`
    width: 100%;
    height: 80px;

    box-shadow: 1px 1px 10px #e9e8e8;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const HeaderItem = styled.li`
    width: 20%;
    color: #fff;
`;

const HeaderNavLink = styled(NavLink)`
    color: #222;
`;

class Header extends React.Component {
    render() {
        return <header>
                <HeaderBox>
                    <HeaderItem><HeaderNavLink to="/">HOME</HeaderNavLink></HeaderItem>
                    <HeaderItem><HeaderNavLink to="/intro">INTRO</HeaderNavLink></HeaderItem>
                    <HeaderItem><HeaderNavLink to="/notice">NOTICE</HeaderNavLink></HeaderItem>
                    <HeaderItem><HeaderNavLink to="/contact">CONTACT</HeaderNavLink></HeaderItem>
                </HeaderBox>
        </header>
    };
};

export default Header;