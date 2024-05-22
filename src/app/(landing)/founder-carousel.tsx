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
        name: 'Kevin Oduor',
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
        <section className="bg-gray-100 py-12 md:py-20 bg-secondary">
            <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold">A Message from Our Founders</h2>
                <Slider {...settings} className='w-full p-4'>
                    {founders.map((founder, index) => (
                        <div key={index} className="flex flex-row items-center justify-between w-full">
                            <div className="">
                                <img
                                    alt={`Founder ${founder.name}`}
                                    className="rounded-lg"
                                    height={300}
                                    src={founder.image}
                                    style={{
                                        aspectRatio: '400/500',
                                        objectFit: 'cover',
                                    }}
                                    width={300}
                                />
                            </div>

                            <div className="flex-col flex mt-3">
                                <p className="text-gray-600 text-lg">{`"${founder.message}"`}</p>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage alt={`Avatar of ${founder.name}`} src={founder.image} />
                                        <AvatarFallback>{founder.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="text-lg font-semibold">{founder.name}</h4>
                                        <p className="text-gray-600">{founder.role}</p>
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
