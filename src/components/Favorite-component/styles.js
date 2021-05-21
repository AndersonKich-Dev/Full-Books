import styled from 'styled-components'

export const Container = styled.div`
    min-width:100%;
    height: 15.437rem;
    background-color: #8257e5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    span {
        display: block;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: #ff4700;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    ul{
        width: 100%;
        height: 95%;
        padding: 0.5rem;
        overflow-y: scroll;

        ::-webkit-scrollbar{
            width: 0
        }
        li{
            width: 100%;
            height: 2.5rem;
            border-bottom: 1px solid #6f48c9;
            display:flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            color: white;
            transition: color .5s ease;

            :hover {
                color: #ff4700;
            }
            

            svg {
            
                margin: 0 .5rem;
                font-size: 1.5rem;
            }

            p {
                width: 80%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

        
    
    
    
;`

