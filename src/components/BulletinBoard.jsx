import { useState } from 'react';
import Post from './Post';

const BulletinBoard = () => {
    const [myPosts, setMyPosts] = useState([
        {
            question: "Lorem ipsum dolor sit amet 1.",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu purus, tempus non semper eu, luctus vel lectus. Pellentesque volutpat facilisis nibh, quis tincidunt ex euismod et. Aenean in eros iaculis, auctor sem bibendum, commodo lectus. Suspendisse porttitor eu tellus a pharetra.",
            id: 1,
            liked: false,
        },
        {
            question: "Lorem ipsum dolor sit amet 2.",
            answer: " Nullam porta consectetur elit sit amet fringilla. Vivamus aliquam consequat mattis. Sed quis ipsum sed magna consectetur dapibus sit amet id enim. Cras sit amet leo a sem consequat vulputate. Ut viverra nec metus et placerat. Vivamus congue nibh sit amet leo tincidunt, ut pharetra nunc laoreet.",
            id: 2,
            liked: false,
        },
        {
            question: "Lorem ipsum dolor sit amet 3.",
            answer: "Duis in libero arcu. Nam sit amet metus ullamcorper, feugiat velit non, dictum velit. Integer blandit faucibus auctor. Ut felis turpis, malesuada vel rhoncus et, malesuada sit amet libero. Proin et dolor vitae justo luctus semper. Aenean vitae lectus est.",
            id: 3,
            liked: false,
        },
        {
            question: "Lorem ipsum dolor sit amet 4.",
            answer: "Integer ac velit quam. Ut iaculis lacus nulla, vitae lobortis eros cursus ac. Curabitur vehicula nibh pharetra egestas tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et dolor sit amet odio tristique auctor id ut ante.",
            id: 4,
            liked: false,
        },
    ]);

    const isLiked = (id) => {
        let allPosts = [...myPosts];
        allPosts[id].liked = true;
        setMyPosts([...allPosts]);
    }

    console.log(myPosts);

    return ( //Returnerar html
        <main className='bulletinBoard'>
            {myPosts.map((post, key) => {
                return (
                    <Post key={key}
                        question={post.question} 
                        answer={post.answer} 
                        liked={post.liked} 
                        index={key}
                        isLiked={isLiked} 
                    />
                )
            })}
        </main>
    )
}

export default BulletinBoard;