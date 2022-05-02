/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { db } from '../firebase';
import 'react-quill/dist/quill.snow.css';
import './UserProfile.css';
import Footer from '../components/Footer/Footer';
import Trending from 'components/Trending/Trending';
import UserDesc from 'components/UserDesc';

const Users = () => {
    const { id } = useParams();
    const [userShayris, setUserShayris] = useState([]);
    const [userBlogs, setUserBlogs] = useState([]);
    const [userKavitas, setUserKavitas] = useState([]);
    const [userQuotes, setUserQuotes] = useState([]);
    const [userData, setUserdata] = useState([]);


    const tabs = {
        "shayaris": userShayris,
        "blogs": userBlogs,
        "kavitas": userKavitas,
        "quotes": userQuotes,
    };


    useEffect(() => {
        if (id) {
            db.collection('Shayris')
                .get()
                .then((snapshot) => {
                    const usershayris = [];
                    snapshot.forEach((doc) => {
                        if (doc.data().userId === id) {
                            const data = {
                                id: doc.id,
                                title: doc.data().title,
                                description: doc.data().description,
                                authorName: doc.data().authorName,
                                isFeatured: doc.data().isFeatured,
                                updated_on: doc.data().updated_on,
                                userId: doc.data().userId,
                            };
                            usershayris.push(data);
                        }
                    });
                    setUserShayris(usershayris);
                    console.log(usershayris);
                });
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            db.collection('Blogs')
                .get()
                .then((snapshot) => {
                    const logs = [];
                    snapshot.forEach((doc) => {
                        if (doc.data().userId === id) {
                            const data = {
                                id: doc.id,
                                title: doc.data().title,
                                image: doc.data().images[0],
                                categories: doc.data().categories,
                                description: doc.data().description,
                                authorName: doc.data().authorName,
                                isFeatured: doc.data().isFeatured,
                                updated_on: doc.data().updated_on,
                            };
                            logs.push(data);
                        }
                    });
                    setUserBlogs(logs);
                });
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            db.collection('Poems')
                .get()
                .then((snapshot) => {
                    const kavitas = [];
                    snapshot.forEach((doc) => {
                        if (doc.data().userId === id) {
                            const data = {
                                id: doc.id,
                                title: doc.data().title,
                                description: doc.data().description,
                                authorName: doc.data().authorName,
                                isFeatured: doc.data().isFeatured,
                                updated_on: doc.data().updated_on,
                            };
                            kavitas.push(data);
                        }
                    });
                    setUserKavitas(kavitas);
                });
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            db.collection('Quotes')
                .get()
                .then((snapshot) => {
                    const quotes = [];
                    snapshot.forEach((doc) => {
                        if (doc.data().userId === id) {
                            const data = {
                                id: doc.id,
                                title: doc.data().title,
                                description: doc.data().description,
                                authorName: doc.data().authorName,
                                isFeatured: doc.data().isFeatured,
                                updated_on: doc.data().updated_on,
                            };
                            quotes.push(data);
                        }
                    });
                    setUserQuotes(quotes);
                });
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            db.collection('users')
                .get()
                .then((snapshot) => {
                    const userdata = [];
                    snapshot.forEach((doc) => {
                        if (doc.id === id) {
                            const data = {
                                description: doc.data().description,
                                image: doc.data().image,
                                email: doc.data().email,
                                username: doc.data().username,
                            };
                            userdata.push(data);
                            console.log(userdata);
                        }
                    });
                    setUserdata(userdata);
                });
        }
    }, [id]);

    return (
        <div>
            <Navbar />
            <UserDesc
                values={userData}
            />
            <Trending tabs={tabs} />
            <Footer />
        </div>
    );
};

export default Users;
