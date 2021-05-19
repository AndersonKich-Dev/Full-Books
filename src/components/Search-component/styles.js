import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 2rem;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: ${props => props.theme.colors.purple_300};

    svg {
        font-size: 0.875rem;
        margin-left: 1rem;
        cursor: pointer;
        color: ${props => props.theme.colors.white};
        transition: transform .3s linear; 

        :hover {
           transform: scale(1.2);
        }
    }

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
