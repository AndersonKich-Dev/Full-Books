import styled from 'styled-components'
import { toogleHamburguer } from './mixins'

export const Container = styled.div`
    position: fixed;
    top: 0.90rem;
    right: 1rem;
    z-index: 100;
    
    div {
        position: relative;
        width: 3rem;
        height: 3rem;
        display: none;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: .5s linear ;

        span {
            width: 80%;
            height: 3px;
            background-color: ${props => props.theme.colors.white};
            display: block;
            position: absolute;
            top: 14px;
            left: 3px;
            transition: .5s linear ;

            ::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: -10px;
                left: 0;
                background-color: ${props => props.theme.colors.white};
                display: block;
                transition: .5s linear ;
            }

            ::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 10px;
                left: 0;
                background-color: ${props => props.theme.colors.white};
                display: block;
                transition: .5s linear ;
            }  
             
            ${props => props.toogle ?
                toogleHamburguer(45, 90, -90, 0) : toogleHamburguer(0, 0, 0, null)
            }
        }        
    }

   @media only screen and (min-width: 320px) and (max-width: 700px){
       div {
        display: block;
       } 
   }

`;