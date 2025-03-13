import React from 'react';
import Slider from 'react-slick';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const founders = [
    {
        name: 'Lameck Owesi',
        role: 'Co-Founder, CareerNava',
        image: '/images/lameck.png',
        message: 'At CareerNava, we believe that every student deserves access to the resources and support they need to achieve their educational goals. Our mission is to empower students from all backgrounds to unlock their full scholarship potential and pursue their dreams without financial barriers.',
    },
    {
        name: 'Oduor Kevin',
        role: 'Co-Founder, CareerNava',
        image: '/images/kevin.jpeg',
        message: 'At CareerNava, we believe that every student deserves access to the resources and support they need to achieve their educational goals. Our mission is to empower students from all backgrounds to unlock their full scholarship potential and pursue their dreams without financial barriers.',
    },
];


const FounderCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <section className="bg-[#f6c460] py-12 md:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">A Message from Our Founders</h2>
                <Slider {...settings}>
                    {founders.map((founder, index) => (
                        <div key={index}>
                            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                                <div className="md:w-1/2 relative aspect-square">
                                    <img 
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#f6c460] to-transparent" />
                                </div>
                                <div className="md:w-1/2 flex flex-col mt-96">
                                    <p className="text-black text-lg mb-6">{`"${founder.message}"`}</p>
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage alt={`Avatar of ${founder.name}`} src={founder.image} />
                                            <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="text-lg font-semibold text-black">{founder.name}</h4>
                                            <p className="text-gray-700">{founder.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default FounderCarousel;