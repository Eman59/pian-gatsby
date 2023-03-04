import React from 'react'

const useSmoothScroll = () => {
    React.useEffect(() => {
        const links = document.querySelectorAll('.smooth-scroll');
        links.forEach(function (elem) {
            elem.addEventListener('click', smoothScroll)
        });
        function smoothScroll(e) {
            e.preventDefault();
            const link = this.getAttribute("href");
            const offsetTop = document.querySelector(link).offsetTop;
            /* eslint-disable no-restricted-globals */
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }, [])
}

export default useSmoothScroll