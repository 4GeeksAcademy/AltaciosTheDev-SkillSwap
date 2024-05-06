import React, { useEffect, useContext, useState } from 'react'
import { TutorCard } from "../Dashboard/TutorCard";
import { Context } from "../../store/appContext";

function Main() {
  const { store, actions } = useContext(Context)
  let favoriteUsersElement = null

  // Check if store.userSkillsAssociations is available
  if (store.profile.favorites) {
    favoriteUsersElement = store.profile.favorites.map((favorite) => (
      <TutorCard
        key={favorite.id}
        user_name={favorite.favorite_user_name}
        user_country={favorite.favorite_user_country}
        user_city={favorite.favorite_user_city}
        user_gender={favorite.favorite_user_gender}
        getTutorProfile={() => actions.getTutorProfile(favorite.favorite_user_id)}
      />
    ));
  }

  return (
    <div className="learn-container">
      <h4 className="learn-title">Here are some of your favorites!</h4>
      {/* <div className="learn-input-container">
        <input className="learn-search" placeholder='Search Student' />
        <input className="learn-search" placeholder='Search Tutor' />
        <input className="learn-search" placeholder='Search Skill' />
        <input className="learn-search" placeholder='Search Date' />
        <input className="learn-search" placeholder='Search Time' />
        <input className="learn-search" placeholder='Search Status' />
      </div> */}
      <div className="learn-tutor-cards-container container">
        {store.profile.favorites ? favoriteUsersElement : "Loading your favorite users..."}
      </div>
    </div>
  )
}

export default Main