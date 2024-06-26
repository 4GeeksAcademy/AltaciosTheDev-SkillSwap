import React, { useEffect, useContext, useState } from 'react'
import { TutorCard } from "../Dashboard/TutorCard";
import { Context } from "../../store/appContext";

function Main() {
  const { store, actions } = useContext(Context)
  let favoriteUsersElement = null

  // Check if store.userSkillsAssociations is available
  if (store.profile && store.profile.favorites) {
    favoriteUsersElement = store.profile.favorites.map((favorite) => (
      <TutorCard
        key={favorite.id}
        user_name={favorite.favorite_user_name}
        user_country={favorite.favorite_user_country}
        user_city={favorite.favorite_user_city}
        user_gender={favorite.favorite_user_gender}
        user_image = {favorite.favorite_user_image}
        getTutorProfile={() => actions.getTutorProfile(favorite.favorite_user_id)}
        deleteFavorite={() => actions.deleteFavorite(favorite.id)}
        
      />
    ));
  }

  // useEffect(() => {
  //   actions.getProfile()
  // },[store.profile])

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
      <div className="learn-tutor-cards-container d-flex flex-wrap justify-content-center container">
        {store.profile && store.profile.favorites ? favoriteUsersElement : 
        
        <>
          <span class="loader"></span>
          <span class="loader"></span>
          <span class="loader"></span>
        </>

        }
      </div>
    </div>
  )
}

export default Main