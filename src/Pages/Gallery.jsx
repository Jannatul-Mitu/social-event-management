import g12 from '../assets/g1 .webp';
import g11 from '../assets/g2.jpg';
import g10 from '../assets/g9.jpg';
import g9 from '../assets/g4.jpg';
import g8 from '../assets/g5.jpg';
import g7 from '../assets/g6.jpg';
import g6 from '../assets/g7.jpg';
import g5 from '../assets/g8.jpg';
import g4 from '../assets/About.jpg';
import g3 from '../assets/custom-food.jpg';
import g2 from '../assets/food.jpg';
import g1 from '../assets/entertainment.jpg';

const Gallery = () => {
    return (
        <div data-aos="zoom-in">
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center mb-10">Our Gallery</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-[1000px]">
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g1} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g2} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g3} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g4} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g5} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g6} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g7} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g8} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g9} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g10} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g11} alt="A group of People" />
                    </div>
                    <div className='relative rounded-lg overflow-hidden hover:origin-[scale(1.1)]'>
                        <img className="w-[100%] h-[100%] object-cover]" src={g12} alt="A group of People" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;