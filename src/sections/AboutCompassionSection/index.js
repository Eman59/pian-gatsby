import React from 'react'
import data from "./data.json"

const AboutCompassionSection = () => {
    return (
        <>
            <section id="section-2" class="compassion-section">
                <div class="compassion-wrapper max-sm:mt-0 mb-0">
                    <div class="compassion-item">
                        <div>
                            <h2 class="heading">Our Philosophy</h2>
                        </div>
                        <div class="compassion-text pr-0">
                            <p>How we work and think is underpinned by humanity and compassion, which manifests in the
                                strong relationships we foster with our clients. We care deeply about the work we do, who we
                                do it for and why we do it.</p>
                            <p>
                                We combine empathy, strategy and efficient pragmatism to be a formidable force on your side
                                of the negotiating table. We strike the right balance between expertise gained from years of
                                experience, and a fresh outlook that ensures we remain innovative, informed and current.</p>
                            <p>
                                Our approach is guided by the respective needs of our clients, bolstered by a strategic
                                agility that allows us to assume the role of a dedicated partner — for transformational
                                outcomes.</p>
                        </div>
                    </div>
                    <div class="compassion-item border-b-0 max-sm:pb-0">
                        <div>
                            <h2 class="heading">Our Team</h2>
                        </div>
                        <div class="compassion-text pr-0">
                            <p>How we work and think is underpinned by humanity and compassion, which manifests in the
                                strong relationships we foster with our clients. We care deeply about the work we do, who we
                                do it for and why we do it.</p>
                            <p>
                                We combine empathy, strategy and efficient pragmatism to be a formidable force on your side
                                of the negotiating table. We strike the right balance between expertise gained from years of
                                experience, and a fresh outlook that ensures we remain innovative, informed and current.</p>
                            <p>
                                Our approach is guided by the respective needs of our clients, bolstered by a strategic
                                agility that allows us to assume the role of a dedicated partner — for transformational
                                outcomes.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="team-grid">
                {data.map((data) => {
                    return (
                        <div class="team-item">
                            <div class="team-img">
                                <img src={data.img} alt="" />
                            </div>
                            <h2>{data.name}</h2>
                            <p>{data.position}</p>
                            <a href="#">{data.email}</a>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default AboutCompassionSection