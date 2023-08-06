import React from 'react'
import styles from '../styles/ProfileList.module.css'
import Profile from './Profile'
import { profiles } from '../profile-data'

const ProfileList = () => {
    return (
    <section className={styles.center}>
        <div>
            <h1>Team Members</h1>
            <div className={styles['profile-container']}>
                {profiles.map((profile) => {
                    const {id, img, name, job, company, link, nickname} = profile
                    return (
                        <Profile key={id} image={img} name={name} job={job} company={company} link={link} nickname={nickname}/>
                    )
                })}
            </div>
        </div>
    </section>
)
}

export default ProfileList
