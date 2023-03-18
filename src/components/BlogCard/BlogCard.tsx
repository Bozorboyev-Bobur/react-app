import React from 'react'
import './BlogCard.css'

function BlogCard({ image, authorImg, authorName, createdDate, title, commentCounts, likeCounts }: any) {
  var approx = require('approximate-number');
  return (
    <div className='blogCardContainer'>
      <div className="blogCardImage">
        {image && (
          <img src={image} alt="" />
        )}
      </div>
      <div className="blogCardContent">
        <div className="blogCardHeader">
          <div className="blogCardAuthor">
            <img className="blogCardAuthorImg" src={authorImg} />
            <div className='blogCardAuthorName'>{authorName}</div>
          </div>
          <div className="blogCardDate">
            {createdDate}
          </div>
        </div>
        <div className="blogCardMain">
          <p className='blogCardTitle'>
            {title}
          </p>
        </div>
        <div className="blogCardFooter">
          <div className="blogCardStatistics">
            <div className="blogCardStatistic">
              <img src="/images/commentIcon.svg" alt="" />
              {approx(commentCounts)}
            </div>
            <div className="blogCardStatistic">
              <img src="/images/heartIcon.svg" alt="" />
              {approx(likeCounts)}
            </div>
          </div>
          <button className='blogCardSaveBtn'>
            <img src="/images/saveIcon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard