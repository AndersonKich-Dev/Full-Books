import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.purple_500};
`;

export const Header = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-color: ${props =>props.theme.colors.orange_100};
    color: ${props =>props.theme.colors.white};

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
    width: 80%;
    height: calc(100% - 5rem);

  
`;

export const Menu = styled.nav`
    width: 20%;
    height: calc(100% - 5rem);
    padding: .5rem;


    
`;