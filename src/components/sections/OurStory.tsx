    const ourStoryItem = {
    id: 1,
    image: '/images/services/our-story.png',
    title: 'BEST OF OUR FEATURES',
    description: [
        {
        id: 1,
        description:
            'We are a fearless software company based in Bucharest, Romania, founded in 2015 by a pasionate software engineer who loves traveling through the digital galaxy.',
        },
        {
        id: 2,
        description:
            'We are always looking for entertaining things to do and for us every project is an opportunity to innovate and make things better, faster, smarter.',
        },
        {
        id: 3,
        description:
            'If you join us, you’ll be amazed by our space ship’s speed. Every task is an opportunity to improve the things around us. We want to show you a place where no man has gone before.',
        },
        {
        id: 4,
        description: 'Come and join us to the light',
        },
    ],
    };

    const OurStory = () => {
    return (
         <section id="our-story" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 text-center md:text-left p-6 md:pr-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold uppercase mb-2 text-black text-center">
                {ourStoryItem.title}
                </h2>
                <hr className="border-t-4 my-3 w-[5%] mx-auto green" />
                <ul className="space-y-4 text-center text-gray-600">
                {ourStoryItem.description.map((item) => (
                    <li key={item.id} className="text-base ml-8 mr-8">
                {item.description}
                    </li>
                ))}
                </ul>
                </div>
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] mt-20">
            <img
            src={ourStoryItem.image}
            alt="Our Story"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
            </div>
            </div>
        </section>
    );
    };

    export default OurStory;
