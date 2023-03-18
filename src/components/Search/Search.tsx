import React, { useState } from 'react'
import './Search.css'
import { BLOG_CARDS } from '../../constants'
import BlogCard from '../BlogCard/BlogCard'

function Search() {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchFocus, setSearchFocus] = useState(false)

    return (
        <>
            <label className='searchContainer'>
                <img className='searchIcon' src="/images/searchIcon.svg" alt="" />
                <input className='searchInput' type="text" placeholder='Поиск...'
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    onFocus={() => {
                        setSearchFocus(true)
                    }}
                    onBlur={() => {
                        setTimeout(() => {
                            setSearchFocus(false)
                        }, 300)
                    }}
                />
            </label>
            {
                searchFocus && !searchTerm && (
                    <div className="searchEmptyResult">
                        <div className="searchEmptyResultText">
                            Try searching for posts, topics, or keywords
                        </div>
                    </div>
                )
            }
            <div className="searchResult">
                {searchFocus && searchTerm && (
                    <div className="searchResultBox">
                        <ul className="searchResultList">
                            {
                                searchTerm && BLOG_CARDS.filter((val: any) => {
                                    if (searchTerm == '') {
                                        return val
                                    }
                                    else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                        return val;
                                    }
                                }).map((card: any) => {
                                    return (
                                        <BlogCard
                                            image={card?.image}
                                            authorImg={card.authorImg}
                                            authorName={card.authorName}
                                            createdDate={card.createdDate}
                                            title={card.title}
                                            commentCounts={card.commentCounts}
                                            likeCounts={card.likeCounts}
                                        />
                                    )
                                })
                            }  
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Search