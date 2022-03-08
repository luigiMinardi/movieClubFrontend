import styled from 'styled-components';
import Button from '../Button';

export const Header = styled.nav`
    width: 100vw;
    height: 7em;

    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

    font-size: small;

    @media (min-width: 550px) {
        font-size: 1em;
    }

    /* @media (min-width: 950px) {
    } */
`

export const ButtonHeader = styled(Button)`
    border-radius: .188em;
    margin-right: 1.5em;

    font-size: 1.15em;
    padding: 0 .5em;

    @media (min-width: 550px) {
        padding: 0 1em;
        font-size: medium;
    }
`

export const Logo = styled.img`

    width: 6em;
    height: 2.5em;
    margin-left: 2em;

    @media (min-width: 550px) {
        margin-left: 3em;
        width: 8em;
        height: 3.1em;
    }

    @media (min-width: 950px) {
        width: 10.5em;
        height: 4em;
    }
`

export const HeaderContainer = styled.div`
    width: 88%;
    justify-self: flex-end;

    display: flex;
    justify-content: flex-end;
`