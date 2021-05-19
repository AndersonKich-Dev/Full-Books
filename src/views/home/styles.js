import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.gray_50};
`;

export const Header = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.20);
    color: ${props => props.theme.colors.gray_600};

    svg {
        margin-right: 1rem;
        font-size: 2.5rem;
    }

    h1{
        text-transform: uppercase;
        font-weight: 600;
    }
`;

export const Main = styled.main`
    flex: 1;
   
`;