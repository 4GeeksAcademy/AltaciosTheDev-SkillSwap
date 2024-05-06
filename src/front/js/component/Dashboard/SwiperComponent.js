import React, { useEffect, useContext, useState } from 'react'
import { Context } from "../../store/appContext";

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
    const { store, actions } = useContext(Context)
    let pendingSessionsElements = null
    if (store.userSessions) {
        let pendingSessions = store.userSessions.filter(session => {
            return session.status == "Pending"
        })

        if (pendingSessions) {
            pendingSessionsElements = pendingSessions.map(session => {
                return (
                    <SwiperSlide>
                        <PendingCard
                            key={session.id}
                            learner_name={session.learner_name}
                            skill_name={session.skill_name}
                            date={session.date}
                            time={session.time}
                            status={session.status}
                        />
                    </SwiperSlide>
                )
            })
        }
    }

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

            {pendingSessionsElements && pendingSessionsElements.length > 0 ? (
                pendingSessionsElements
            ) : (
                <SwiperSlide>
                    <h5>Loading your pending sessions...</h5>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default SwiperComponent