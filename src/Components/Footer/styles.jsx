import styled from 'styled-components';

export const FooterWrapper = styled.footer`

    background-color: ${props => props.bg || 'transparent'};
    position: inherit;
    box-sizing: border-box;
    max-width: ${props => props.maxWidth || undefined};
    margin: ${props => props.margin || '0'};

    padding-top: ${props => props.pt || '0'};
    padding-left: ${props => props.pl || '0'};
    padding-right: ${props => props.pr || '0'};

    color: #757575;
`

export const FooterContainer = styled.div`
    box-sizing: border-box;
    padding-bottom: 1.25em;
`

export const FooterBox = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FooterGrid = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    color: #757575;

    > * {
        flex-basis: 25%;
    }
`
