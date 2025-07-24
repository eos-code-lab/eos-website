const partnerItem = {
  title: 'OUR PARTNERS',
  images: [
    { id: 1, image: '/images/partners/terrasigna.png', link: 'http://www.terrasigna.com/'},
    { id: 2, image: '/images/partners/eaudeweb.png', link: 'http://www.eaudeweb.ro//' },
    { id: 3, image: '/images/partners/kentron.png', link: 'http://www.kentron.ro/'},
    { id: 4, image: '/images/partners/aquavita.png', link: 'http://www.aqv.ro/'},
  ],
};

const Partners = () => {
  return (
    <div id="our-partners" className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
        {partnerItem.title}
      </h2>
      <hr className="border-t-4 border-sky-500 my-3 w-[5%] mx-auto" />
      
      <div className="flex flex-col md:flex-row justify-between ml-20 mr-20">
        {partnerItem.images.map((img) => (
          <a
            key={img.id}
            href={img.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={img.image}
              alt={`Partner ${img.id}`}
              className="md:basis-1/4 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};


export default Partners;
