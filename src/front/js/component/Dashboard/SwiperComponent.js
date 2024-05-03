import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css/effect-creative';

import PendingCard from "./PendingCard";


function SwiperComponent() {
    return (
        <Swiper
            style={{ maxWidth: "400px", height: "100%" }} // Set width and height to 100% to fill the grid cell
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[EffectCreative, Pagination]}
            effect={'creative'}
            grabCursor={true}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
        >
            <SwiperSlide><PendingCard /></SwiperSlide>
            <SwiperSlide><PendingCard /></SwiperSlide>
            <SwiperSlide><PendingCard /></SwiperSlide>
            <SwiperSlide><PendingCard /></SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent