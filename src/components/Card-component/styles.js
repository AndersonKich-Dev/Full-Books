import styled from 'styled-components'

export const Container = styled.div`
    width: 15%;
    height: 45%;
    background-color: ${props => props.theme.colors.purple_300};
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 8px;
    display: flex;
    margin: .5rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
    padding: .5rem;
    transition: filter .5s ease;

    :hover{
        filter: brightness(70%);
    }

    a {
        width: 100%;
        height: 70%;

        img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    }

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 8.25rem;
        height: 14.25rem;
        margin: 1rem;
    }
`;



export const TitleBox = styled.div`
    position: relative;
    width: 100%;
    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.312rem;
    }

    span {
        font-family: Lexend_600;
    }

    svg {
        position:absolute;
        top: 100%unset;
        right: 0;
        color: ${props => props.theme.colors.orange_100};
    }
`;

