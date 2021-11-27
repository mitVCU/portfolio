import React from "react";
import image from "../christmas-mittens.jpeg"
// import Blur from "react-blur";

export default function Home() { 

    return (
        <main> 
            <img src={image} alt="Christmas Mittens" className="absolute object-cover w-full h-full" />

            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"> 
                <h1 className="text6xl text-green-100 font-bold leading-none lg:leading-snug home-name"> 
                    Howdy, I'm Mit!
                </h1>
            </section>
            
        </main>
    )
}