import classes from "./ProfileInfo.module.css";
import React from "react";
import {profileType} from "../../../../../redax/profileReducer";
import {Preloader} from "../../../../common/preloader/preloader";
// @ts-ignore
import no from "../../../../../assets/img/no.jpg"
// @ts-ignore
import yes from "../../../../../assets/img/download.jfif"

export type ProfileInfoType = {
    profile: profileType
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile}) => {

    if (!profile) {
        return <Preloader/>
    }

    let profileContacts = Object.values(profile.contacts)

    return (
        <div>
            <div>
                <img className={classes.imgfon}
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt="Main image"/>
            </div>

            <div className={classes.descriptionBlock}>
                <div>{profile.fullName}</div>
                <img src={profile.photos.large}/>
            </div>
            <div>
                {profileContacts.map(m => {
                    return <div>{m}</div>
                })}
            </div>
            <div>
                <div>Поиск работы</div>
                {profile.lookingForAJob ? <img src={yes}/> : <img src={no}/>}
                <div>{profile.lookingForAJobDescription}</div>
            </div>
        </div>


    )

}


export default ProfileInfo;