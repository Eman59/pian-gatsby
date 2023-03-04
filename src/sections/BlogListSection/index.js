import React from 'react'
import data from "./data.json"
import "./styles.css"

const BlogListSection = () => {
    return (
        <section id="section-2" class="blog-list">
            {data.map((data) => {
                return (
                    <div class="blog-grid-item">
                <div class="blog-img">
                    <img src={data.img} alt="" />
                </div>
                <div class="blog-text">
                    <div class="blog-text-inner">
                        <h2 class="heading">{data.heading}</h2>
                        <p>{data.details}</p>
                        <p>{data.date}</p>
                        <a href="/blog-item" class="main-btn">{data.btn}</a>
                    </div>
                </div>
            </div>
                )
            })}
        </section>
    )
}

export default BlogListSection