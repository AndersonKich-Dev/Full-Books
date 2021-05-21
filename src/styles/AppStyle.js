import styled from 'styled-components'
import { tooglehiddenMenu } from './mixins'

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

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
    }
`;

export const Menu = styled.nav`
    width: 20%;
    height: calc(100% - 5rem);
    padding: .5rem;
    display: flex;
   

   


    @media only screen and (min-width: 320px) and (max-width: 700px){
        position: absolute;
        top: 5rem;
        right: 0;
        z-index: 1;
        width: 10rem;
        height: 18.75rem;
        overflow: hidden;
        background-color: ${props => props.theme.colors.purple_500};
        
        padding: 0 .5rem;
        transition: opacity .7s, width .7s linear;

        ${props => !props.displayMenu ?
        tooglehiddenMenu(0, 0)
        :
        tooglehiddenMenu(30, 1)}
    }
`;

export const UlMenu = styled.li`
    flex: 1;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
`;

export const LiMenu = styled.li`
    min-height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;