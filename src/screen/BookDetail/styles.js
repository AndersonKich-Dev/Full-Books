import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    //border: 1px solid white;
;`

export const BookCard = styled.div`
    width: 70%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;

    @media only screen and (min-width: 320px) and (max-width: 700px){
        width: 100%;
    }
`;

export const  DescriptionContainer = styled.div`
    width: 70%;
    height: 100%;
    padding: .5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    h1 {
        /* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
        color: ${props => props.theme.colors.gray_600};
    }

`;

export const Description = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${props => props.theme.colors.gray_100};
    //border: 1px solid orangered;
    padding: .5rem;

    h2{
        color: ${props => props.theme.colors.gray_600};
    }

    div {
        margin-top: .5rem;
        height: 80%;
        overflow-y: scroll;
    }
`;

export const ImageCard = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    

    img {
        width: 100%;
        height: 50%;
        filter: brightness(90%);
        border-radius: 5px;
    }
`;

export const FavoriteIcon = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    margin-top: .5rem;
    cursor: pointer;

    svg {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.orange_100};
        margin-right: 5px;
    }

    :hover{
        color: ${props => props.theme.colors.orange_100};
    }

`;

export const ArrowBack = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    transition: all .5s ease;

    :hover{
        background-color: ${props => props.theme.colors.orange_100};
    }

    svg{
        font-size: 1.5rem;
        color: ${props => props.theme.colors.gray_600};
    }
`;