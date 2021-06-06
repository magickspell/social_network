import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/19f4b779286351.Y3JvcCw1MDAwLDM5MTAsMCw1MzI.jpg',
            followed: false,
            fullName: "Dima",
            status: 'im boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/19f4b779286351.Y3JvcCw1MDAwLDM5MTAsMCw1MzI.jpg',
            followed: true,
            fullName: "Sasha",
            status: 'im boss to myself',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/19f4b779286351.Y3JvcCw1MDAwLDM5MTAsMCw1MzI.jpg',
            followed: false,
            fullName: "Samurai",
            status: 'im samurai',
            location: {city: 'Kiev', country: 'Ukraine'}
        }])}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;