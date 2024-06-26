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
import UpcommingCard from "./UpcommingCard";
import NoUpcommingCard from "./NoUpcommingCard"; // Import your new component


function SwiperUpcomming() {
    const { store, actions } = useContext(Context)
    const [isLoading, setIsLoading] = useState(true); // Add this line
    let upcommingSessionsElements = null

    useEffect(() => {
        if (store.userSessions) {
            setIsLoading(false); // Set isLoading to false once the fetch has completed
        }
    }, [store.userSessions]);

    if (store.userSessions && store.profile) {
        let currentDate = new Date(); // Current date and time
        let upcommingSessions = store.userSessions.filter(session => {
            // Filter sessions that are accepted and either in the future or at the same day but in the future time
            let sessionDate = new Date(session.date + 'T' + session.time);
            let currentDay = currentDate.getDate();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();
            let currentHour = currentDate.getHours();
            let currentMinute = currentDate.getMinutes();
            return session.status === "Accepted" && 
                (sessionDate > currentDate ||
                (sessionDate.getDate() === currentDay &&
                sessionDate.getMonth() === currentMonth &&
                sessionDate.getFullYear() === currentYear &&
                (sessionDate.getHours() > currentHour ||
                (sessionDate.getHours() === currentHour && sessionDate.getMinutes() > currentMinute))))
        })

        upcommingSessions.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            // Calculate the difference in milliseconds from now
            const differenceA = dateA - new Date();
            const differenceB = dateB - new Date();

            // If the dates are the same, sort based on time
            if (differenceA === differenceB) {
                const timeA = parseInt(a.time.replace(":", ""));
                const timeB = parseInt(b.time.replace(":", ""));
                return timeA - timeB;
            }

            // Otherwise, sort based on date
            return differenceA - differenceB;
        })

        if (upcommingSessions) {
            upcommingSessionsElements = upcommingSessions.map(session => {
                return (
                    <SwiperSlide>
                        <UpcommingCard
                            key={session.id}
                            learner_name={session.learner_name}
                            tutor_name={session.tutor_name}
                            skill_name={session.skill_name}
                            date={session.date}
                            time={session.time}
                            status={session.status}
                            id={session.id}
                        />
                    </SwiperSlide>
                )
            })
            console.log(upcommingSessions)

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

            {isLoading ? (      
                <SwiperSlide>
                    <span class="loader"></span>
                </SwiperSlide>
            ) : upcommingSessionsElements && upcommingSessionsElements.length > 0 ? (
                upcommingSessionsElements
            ) : (
                <SwiperSlide>
                    <NoUpcommingCard /> {/* Render your new component when there are no upcoming sessions */}
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default SwiperUpcomming