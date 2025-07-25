import '@fortawesome/fontawesome-free/css/all.min.css';

const featureItems = {
  image: '/images/services/our-features.png',
  items: [
    {
      id: 1,
      icon: 'fa-users',
      title: 'DEVELOPERS & USERS UNITED',
      description:
        'In our world, developers and users are working in the same universe and this can offer you the best solutions for your needs. You’ll be amazed step by step.',
    },
    {
      id: 2,
      icon: 'fa-drupal',
      title: 'DRUPAL DEVELOPMENT',
      description:
        'No matter the challenge, we speak the Drupal language and we can deliver a high-quality digital user experience. We are strong Drupal developers with frontend, backend and site building skills and we can deliver you outstanding end-products.',
    },
    {
      id: 3,
      icon: 'fa-cubes',
      title: 'CUSTOM APPLICATION DEVELOPMENT',
      description:
        'All you need is love and our custom application development. We know the technologies that can lift your projects from the ground and how to adapt them just for you.',
    },
    {
      id: 4,
      icon: 'fa-code ',
      title: 'CODED TO PERFECTION',
      description:
        'You know that moment when you think that something is finished, but you have to do one more thing? We are not afraid of doing one more thing again and again, until everything is perfect. Yes, we are perfectionists and we are proud of it!',
    },
    {
      id: 5,
      icon: 'fa-expand-arrows-alt',
      title: 'MODERN, RESPONSIVE DESIGN',
      description:
        'We only know how to imagine a modern and responsive design, and after that how to make it alive and kicking. For us it’s the only way.',
    },
    {
      id: 6,
      icon: 'far fa-life-ring',
      title: 'OUTSTANDING SUPPORT',
      description:
        'Do you need all inclusive support for your projects? Or after some time do you need someone who can offer you advice, training and an instruction manual? We can do that in a professional way and at supersonic speeds.',
    }
  ],
};

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between text-stone-500 py-16 mx-auto px-4">
        <div className="hidden md:block w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
          <img
            src={featureItems.image}
            alt="Our Features"
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureItems.items.map((item) => (
            <div 
              key={item.id}
              className="text-center"
            >
             <div className="flex-shrink-0 mr-4 text-green-500 green">
                <span className="mt-1">
                 <i className={`fas ${item.icon} fa-2x`}></i>
                </span>
            <div>
                <h4 className="ttext-center font-bold text-black">{item.title}</h4>
              <p className="text-sm text-stone-500">{item.description}</p>
            </div>
            </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Features;
