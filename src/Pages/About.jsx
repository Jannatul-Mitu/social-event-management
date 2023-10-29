import { useEffect } from 'react';
import aboutImg from '../assets/about.jpg';
import ourStory from '../assets/story.jpg'

const About = () => {

    useEffect(() => {
        document.title = 'About'
    }, []);

    return (
        <div data-aos="zoom-in">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center">About Us</h1>
            <hr className='mb-16'/>
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full rounded-[8%]" src={aboutImg} alt="A group of People" />
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h2 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">We Will Give A Very Special Celebration For You</h2>
                        <p className="font-normal text-base leading-6 text-gray-600 ">At Elegance, we are passionate about curating extraordinary social events. With years of experience in event planning, our dedicated team brings creativity and professionalism to every occasion. We take pride in turning your visions into reality, ensuring every detail is meticulously crafted to perfection. From weddings to birthdays and everything in between, we are your trusted partners in making memories that last a lifetime. Let us make your special moments truly exceptional. Welcome to a world where event planning is an art, and your happiness is our priority.</p>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Our journey began with a shared passion for creating unforgettable moments. Elegance was founded by a team of dedicated event enthusiasts who envisioned turning ordinary gatherings into extraordinary experiences. With a commitment to innovation, attention to detail, and a deep understanding of our clients dreams, we have transformed countless events into cherished memories. Our story is one of creativity, dedication, and a relentless pursuit of excellence. It is a story that continues to unfold with every event we curate, and we invite you to be a part of it. Discover how our passion and expertise come together to craft remarkable celebrations.</p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full rounded-[8%]" src={ourStory} alt="A group of People" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;