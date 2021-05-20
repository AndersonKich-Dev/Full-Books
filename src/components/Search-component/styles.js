import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 2rem;
    border-radius: 30px;
    border: 1px solid rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${props => props.theme.colors.purple_300};

    input {
        width: 90%;
        height: 100%;
        padding-left: 1rem;
        border: none;
        border-radius: 30px;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
          
        ::placeholder {
            color: ${props => props.theme.colors.white};
        }
    }

`;

export const BorderIcon = styled.div`
    width: 2.5rem;
    height: 2.5em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.purple_500};

    div {
        width: 2rem;
        height: 2rem;
        background-color: ${props => props.theme.colors.purple_300};
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform .3s ease;

        :hover{
            transform: scale(1.2);
        }

        svg {
            font-size: 0.875rem;
            cursor: pointer;
            color: ${props => props.theme.colors.white};
        }
    }
`;
