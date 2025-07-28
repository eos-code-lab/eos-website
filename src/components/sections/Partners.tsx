const partnerItem = {
  title: 'OUR PARTNERS',
  images: [
    { id: 1, image: '/images/partners/terrasigna.png', link: 'http://www.terrasigna.com/'},
    { id: 2, image: '/images/partners/eaudeweb.png', link: 'http://www.eaudeweb.ro//' },
    { id: 3, image: '/images/partners/aquavita.png', link: 'http://www.aqv.ro/'},
  ],
};

const Partners = () => {
  return (
    <section id="our-partners" className="py-16 bg-gray-50">
      <div className="text-center container mx-auto px-4 ">
      <h2 className="text-2xl md:text-2xl font-bold text-black mb-2">
        {partnerItem.title}
      </h2>
      <hr className="border-t-4 w-[3%] mx-auto my-4 mov" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center partners img">
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
              className="object-contain"
            />
          </a>
        ))}
      </div>
      </div>
    </section>
  );
};


export default Partners;
