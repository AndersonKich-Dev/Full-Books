import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5rem;

    @media only screen and (min-width: 700px) and (max-width: 1024px){
        padding: 0
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        padding: 0
    }
;`

export const Welcome = styled.div`
    width: 60%;
    height: 18.75rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: ${props => props.theme.colors.white};
    transform: translate(-15%, 0);

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

    @media only screen and (min-width: 320px) and (max-width: 700px){
        transform: translate(0, 0);
    }
`;

export const ContainerCards = styled.div`
    width:100%;
    height: calc(100% - 3rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;



    @media only screen and (min-width: 320px) and (max-width: 700px){
        overflow-y: scroll;
        height: calc(100% - 8rem);
    }
`;

