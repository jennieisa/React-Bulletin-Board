import { useState } from 'react';
import Post from './Post';

const BulletinBoard = () => {
    const [myPosts, setMyPosts] = useState([
        {
            question: "Nämn tre fördelar med att använda React?",
            answer: `När vi använder oss av React jobbar vi med komponenter. 
                    Komponenter kan man göra väldigt smidiga genom att koda dem
                    på så sätt att de blir återanvändbara. Vi kan då använda till 
                    exempel samma header på flera ställen och vill vi flytta den någon 
                    gång så är det väldigt enkelt att göra det. Vi flyttar då bara själva 
                    komponentens element och inte en massa kod. React är väldigt flexibelt 
                    och tillåter oss att använda andra bibliotek tillsammans med React. Vi 
                    måste inte heller använda React på hela sidan även om det är mest fördelaktigt
                    för oss. React har en virituell DOM som synkoroniserar med den riktiga DOM:en. 
                    Så när vi säger till VDOM att ha ett visst tillstånd så ser den till att den 
                    riktiga DOM:en har det också. Detta gör att vi slipper manuellt uppdatera DOM:en, vilket oftast
                    också behöver göras flera gånger (går långsammare) än med React då vi endast uppdaterar 
                    den komponent vars tilstånd ändras.`,
            id: 1,
            liked: false,
        },
        {
            question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
            answer: `När vi har en SPA så laddas endat ett enskilt dokument och sedan uppdateras 
                    det med hjälp av JavaScript. Så när man till exempel scrollar eller klickar på något så 
                    uppdateras sidan de elementen som ska uppdateras dynamiskt. En applikation med flera sidor (MPA) renderar en ny 
                    sida varje gång vi till exempel vill visa ny data eller skicka vidare data.`,
            id: 2,
            liked: false,
        },
        {
            question: "Nämn tre skillnader mellan React och Angular.",
            answer: `Angular är ett ramverk som bestämmer hur din applikation ska
                    se ut medan React är ett bibliotek som ger dig mer flexibilitet 
                    i hur applikationen ska se ut. Angular har mer inbyggd funktionalitet
                    så att du endast kan använda det medan du kan använda flera andra bibliotek
                    med React. Man kodar i TypeScript när man använder Angular. Med React kodar
                    man i JSX och JavaScript. Angular använder sig av tvåvägs databindning och
                    React använder sig av envägs databindning. Tvåvägs databindning betyder att 
                    datan kan flödas två vägar, till exempel från JavaScript filen till HTML filen och tvärtom.
                    Medan envägs databindning endast kan flöda åt ett håll vilket är nedåt, 
                    till exempel från JavaScript filen till HTML filen. `,
            id: 3,
            liked: false,
        },
    ]);

    const isLiked = (id) => {
        let allPosts = [...myPosts];
        allPosts[id].liked = true;
        setMyPosts([...allPosts]);
    }

    console.log(myPosts);

    return (
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