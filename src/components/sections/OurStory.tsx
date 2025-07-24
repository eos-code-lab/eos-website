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
        <div id="best-of" className="flex flex-col md:flex-row justify-between text-stone-500">
        <div className="md:basis-1/2">
        <h2 className="text-center text-2xl font-bold text-black">
            {ourStoryItem.title}
            </h2>
            <hr className="border-t-4 border-green-500 my-3 w-[5%] mx-auto" />
            <ul className="space-y-4 text-center">
            {ourStoryItem.description.map((item) => (
                <li key={item.id} className="text-base ml-8 mr-8">
                {item.description}
                </li>
            ))}
            </ul>
        </div>

        <div className="md:basis-1/2">
            <img
            src={ourStoryItem.image}
            alt="Our Story"
            className="w-full"
            />
        </div>
        </div>
    );
    };

    export default OurStory;
