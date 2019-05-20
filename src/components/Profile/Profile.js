import React from 'react';

import './Profile.css';

class Profile extends React.Component {
    render() {
        return (
            <div className="profileContainer">
                <div className="profilePicture" >
                    <img src="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"></img>
                </div>
                <div className="profileName">Mac Logan</div>
                <div className="socialBar">
                    <div className="follow-box">
                        <label>Followers</label>
                        23
                    </div>
                    <div className="seperator-vertical"></div>
                    <div className="follow-box">
                        <label>Following</label>
                        50
                    </div>
                </div>
                <button className="btnFollow">Follow</button>
            </div>
            )
    }
}

export default Profile;