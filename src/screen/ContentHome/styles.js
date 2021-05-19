import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #9f75ff;
;`

export const Welcome = styled.div`
    width: 60%;
    height: 18.75rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: ${props => props.theme.colors.white};

    p {
        text-align: center;
        line-height: 2rem;
    }

    button {
        width: 16.375rem;
        height: 6.25rem;
        border-radius: 8px;
        outline: none;
        border: none;
        background-color: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.white};
        font-family: Inter_600;
        font-size:1.25rem;
        transition: transform .5s linear;

        :hover {
            transform: scale(0.9);
        }
    }
`;