import React from 'react'
import * as S from './styles'
import { BiArrowToRight, BiArrowToLeft } from 'react-icons/bi'
import { useGlobalContext } from '../../Context/GlobalContext'


export default function Paginate(){

    const { currentPage, totalPages, pagesArray, handleNextPage, handlePreviousPage,} = useGlobalContext();

    return(
        <S.Container display={!currentPage ? 'none' : 'flex' }>
            <S.Arrow disabled={currentPage <= 1} onClick={handlePreviousPage}>
               <BiArrowToLeft/>
            </S.Arrow>

                {pagesArray.map((item, index)=>(
                    <S.PageIndex 
                        select={item.value} 
                        key={index}>
                        <p>{item.index}</p>
                    </S.PageIndex>
                ))}
                {totalPages > 10 ?
                    <S.PageIndex>...</S.PageIndex> 
                    : ''
                }
                 {totalPages > 10 ?
                    <S.PageIndex>{totalPages}</S.PageIndex> 
                    : ''
                }
                
            <S.Arrow disabled={currentPage >= totalPages} onClick={handleNextPage}>
               <BiArrowToRight/>
            </S.Arrow>
        </S.Container>
    )
}