import React, { useEffect } from 'react'
import data from "./data.json"

const ServicesCompassionSection = () => {
    useEffect(() => {
        let tabBtn = document.querySelectorAll('.tab-btn');
        tabBtn?.forEach(btn => {
            btn.onclick = function (e) {
                e.preventDefault();
                tabBtn.forEach(ele => {
                    if (ele !== btn) {
                        ele.classList.remove('active');
                        ele.nextElementSibling.style.height = '0';
                        console.log(ele.nextElementSibling.style.height)
                    }
                });
                this.classList.toggle('active');
                if (this.nextElementSibling.style.height == 0 || this.nextElementSibling.style.height == '0px') {
                    this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
                } else {
                    this.nextElementSibling.style.height = '0'
                }
            }
        })
    }, [])

    return (
        <section id="section-2" class="compassion-section">
            <div class="compassion-wrapper max-sm:mt-0 mb-0">
                <div class="compassion-item max-sm:border-b-0 max-sm:pb-0">
                    <div>
                        <h2 class="heading">Our Services</h2>
                    </div>
                    <div class="compassion-text pr-0">
                        <div class="services-tabs">
                            {data.map((data) => {
                                return (
                                    <div class="services-tab">
                                        <button class="tab-btn">
                                            {data.services}
                                            <svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="14" y1="-2.18557e-08" x2="14" y2="27" stroke="currentColor" />
                                                <line x1="27" y1="14" x2="-4.37114e-08" y2="14" stroke="currentColor" />
                                            </svg>
                                        </button>
                                        <div class="tab-body">
                                            <div class="tab-body-inner">
                                                <p>{data.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesCompassionSection