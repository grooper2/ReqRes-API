import React from "react";

const HomeProfiles = ({usersList, deleteUser}) => {
    return (
        <div className="container center">
            {usersList.map((user, key) =>(
                <div className="profileContainer" key={key}>
                    <div className="profile-pic-container">
                        <img className="profilePic"src={user.avatar} alt="" />
                    </div>
                    <div className="profileDetails">
                        <button className="deleteIcon" onClick={()=>{deleteUser(user.id)}} >&#10006;</button>
                        <h3 className="">{user.first_name} {user.last_name}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            ))};
        </div>
        
    )
}

export default HomeProfiles;
