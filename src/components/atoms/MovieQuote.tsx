import { useState, useEffect } from 'react';

const MovieQuote = () => {
    const quotes = [
        {
            image: "https://img.recraft.ai/0L_dTuZzcUz9FFkeLy92KfR6rkFVxCzLXCftE1yfJIc/rs:fit:768:768:0/q:80/g:no/plain/abs://prod/images/9d7bd3a4-abaa-4955-921e-ad10aeb71f38@avif",
            quote: "Movies can and do have tremendous influence in shaping young lives in the realm of entertainment towards the ideals and objectives of normal adulthood.",
            author: "Walt Disney"
        },
        {
            image: "https://img.recraft.ai/mc_g3y2BgVJgK9xxnoJtY20FPPmauix3HUylsbQp48o/rs:fit:768:768:0/q:80/g:no/plain/abs://prod/images/aabde3ed-4dc1-4398-a2bb-16ca1b32891b@avif",
            quote: "The whole of cinema, all that it can do, is that it can give you the feeling of the world. It's not just moving pictures.",
            author: "Agnès Varda"
        },
        {
            image: "https://img.recraft.ai/Z89hDU0Q4oNwA7c80zznDBJ1a5K_qfbzJG8EFvpVkwY/rs:fit:768:768:0/q:80/g:no/plain/abs://prod/images/2ec6338f-7f2c-4b42-9c37-d5b99b2815e7@avif",
            quote: "Cinema is a mirror by which we often see ourselves.",
            author: "Alejandro Gonzalez Inarritu"
        },
        // Add more quotes as needed
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [quoteVisible, setQuoteVisible] = useState(true);

    useEffect(() => {
        const quoteChangeInterval = setInterval(() => {
            setQuoteVisible(false); // Start fading out
            setTimeout(() => {
                // Calculate the next quote index cyclically
                const nextIndex = (currentQuoteIndex + 1) % quotes.length;
                setCurrentQuoteIndex(nextIndex);
                setQuoteVisible(true); // Start fading in the new quote
            }, 500); // Wait for the fade-out (0.5s) to complete
        }, 5000);

        return () => {
            clearInterval(quoteChangeInterval);
        };
    }, [currentQuoteIndex, quotes.length]);

    return (
        <div className={`quote-container transition-opacity duration-500 ease-in-out ${quoteVisible ? '' : 'opacity-0'} flex flex-col items-center gap-8 flex-shrink-0 object-cover`}>
            <img src={quotes[currentQuoteIndex].image} alt="Movie" className="w-96 flex-shrink-0 aspect-square rounded-lg" />
            <div className='flex flex-col justify-end items-center gap-2 self-stretch w-full'>
                <span className="text-base leading-6 font-normal text-white w-full">
                    “{quotes[currentQuoteIndex].quote}”
                </span>
                <span className="text-base leading-6 font-normal text-white w-full text-end">
                    -{quotes[currentQuoteIndex].author}
                </span>
            </div>
        </div>
    );
}

export default MovieQuote;
