import styled from 'styled-components'
import { toogleBackground } from './mixins'

export const Container = styled.div`
    padding: .5rem 1rem;
    display: ${props => props.display};
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: ${props => props.theme.colors.purple_500};


   
;`

export const Arrow = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius:10px;
    background-color: ${props =>props.theme.colors.orange_100};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    :disabled{
        cursor: not-allowed;
        filter: brightness(50%);
    }

    svg {
        color: ${props => props.theme.colors.white};
        font-size: 1.3rem;
    }
    
`;

export const PageIndex = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.25rem;
    color: ${props => props.theme.colors.gray_600};

    ${props => !props.select ? toogleBackground(props.theme.colors.green) : toogleBackground(props.theme.colors.purple_300)}
`;

