"use client"
import { useEffect } from 'react'
import AnimatedElement from './AnimatedElement';

const AboutDetails = ({ AboutData }) => {
    useEffect(() => {
        const images = document.querySelectorAll(".wp-about img");

        if (images.length >= 2) {
            const svg = `
        <svg
          class="w-18 h-18  absolute animate-wiggleLoop"
          viewBox="0 0 83 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M83 49L0 98L0 0L83 49Z" fill="#63AF51" />
        </svg>
      `;

            // First image – Top Right
            const wrapper1 = document.createElement("div");
            wrapper1.style.position = "relative";
            images[0].parentNode.insertBefore(wrapper1, images[0]);
            wrapper1.appendChild(images[0]);
            wrapper1.insertAdjacentHTML("beforeend", svg);
            const svg1 = wrapper1.querySelector("svg");
            svg1.classList.add("svg-top-right");
            svg1.classList.add("svg-top-right2");
            svg1.classList.add("svg-top-right3");
            svg1.classList.add("svg-top-right4");
            wrapper1.querySelector("svg").style.top = "-36px";
            wrapper1.querySelector("svg").style.right = "40px";

            // Second image – Bottom Right
            const wrapper2 = document.createElement("div");
            wrapper2.style.position = "relative";
            images[1].parentNode.insertBefore(wrapper2, images[1]);
            wrapper2.appendChild(images[1]);
            wrapper2.insertAdjacentHTML("beforeend", svg);
            const svg2 = wrapper2.querySelector("svg");
            svg2.classList.add("svg-bottom-right");
            wrapper2.querySelector("svg").style.bottom = "-36px";
            wrapper2.querySelector("svg").style.left = "40px";
        }
    }, []);
    return (
        <div className='pt-4 xl:pt-5 wp-about wp-about-mobile '>
            <AnimatedElement animation='fade-up'
                delay={800}
                dangerouslySetInnerHTML={{
                    __html: AboutData?.content?.rendered
                }}
            />


        </div>
    )
}

export default AboutDetails