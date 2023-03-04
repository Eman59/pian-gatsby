import React from 'react'
import "./styles.css"

const StorySection = () => {
    return (
        <section class="story-section">
            <h3 class="heading">Next Story</h3>
            <div class="story-grid">
                <div class="story-item">
                    <img src="/images/story-img-1.png" class="grid-img max-sm:hidden" alt="" />
                    <img src="/images/story-img-1-mob.png" class="grid-img sm:hidden" alt="" />
                    <div class="story-text">
                        <h4 class="heading">Fortescue commits $6.2bn <br /> to hit net zero emmissions.</h4>
                        <a href="#" class="main-btn">Read more</a>
                    </div>
                </div>
                <div class="story-item">
                    <img src="/images/story-img-2.png" class="grid-img max-sm:hidden" alt="" />
                    <img src="/images/story-img-2-mob.png" class="grid-img sm:hidden" alt="" />
                    <div class="story-text">
                        <h4 class="heading">Interest rate rises. <br /> What next? </h4>
                        <a href="#" class="main-btn">Read more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection