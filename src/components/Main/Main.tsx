import React from 'react';
import './Main.css'
import { BLOG_CARDS } from '../../constants';
import BlogCard from '../BlogCard/BlogCard';

function Main({ mainTitle }: any) {
    return (
        <div className="mainContainer">
            <header className='mainHeader'>
                <h1 className="mainTitle">
                    {mainTitle}Блог
                </h1>
                <button className='mainSortBtn'>
                    <img src="/images/tripleLine.svg " alt="" />
                    Сортировать
                </button>
            </header>
            <div className="mainCards">
                {BLOG_CARDS.map(card => (
                    <BlogCard
                        image={card?.image}
                        authorImg={card.authorImg}
                        authorName={card.authorName}
                        createdDate={card.createdDate}
                        title={card.title}
                        commentCounts={card.commentCounts}
                        likeCounts={card.likeCounts}
                    />
                ))}
            </div>
        </div>
    )
}

export default Main