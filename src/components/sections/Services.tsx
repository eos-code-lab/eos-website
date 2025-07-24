// Services section
const serviceItems = [
  {
    id: 1,
    image: '/images/services/web-design.png',
    title: 'WEB DESIGN & UI',
    description: `Imagination is the best thing we have and we are not afraid to use it in
    your advantage. We offer creative design solutions that enhance user experience and enrich
    the value of your brand. Our analysts and UX/UI designers work with you closely in order
    to deliver custom designs in various forms that match your unique business requirements.
    We deliver ready to use and intuitive design services for websites, brand logos, eCommerce
    stores and enterprise software. Let us help you harness the "power of UX/UI design services"
    and create experiences that your customers will love!`,
    color: 'text-green-300'
  },
  {
    id: 2,
    image: '/images/services/development.png',
    title: 'DEVELOPMENT',
    description: `We’ve always been fans of space exploration and we like to think of it in our
    daily business. We offer custom software development services out of this world and help you
    maximise business opportunities with bespoke software solutions. We know the technologies
    that can lift your projects from the ground and we are eager to bring your ideas to life
    working on application design, application prototyping, application development and
    software maintenance. We transform products and services through software innovation,
    build web platforms that leverage latest technologies (machine learning, IoT, blockchain)
    and help companies execute big ideas at the speed of light.`,
    color: 'text-blue-500'
  },
  {
    id: 3,
    image: '/images/services/consulting.png',
    title: 'CONSULTING',
    description: `They say we are only as good as the promises we keep and we couldn't agree more when we
    are talking about consultancy. We can offer you IT consultancy on demand and assure you
    this is the best way to get exactly the expertise you need without hiring a permanent team.
    Our IT consultants work carefully with you in order to maximise the effectiveness and
    business impact of your project, helping you meet business objectives and fix problems.`,
    color: 'text-sky-400'
  }
];

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-stone-500 gap-4 p-6">
      {serviceItems.map((item) => (
        <div key={item.id} className="md:basis-1/3 text-center">
          <img
            src={item.image}
            alt={`${item.title} image`}
            className="block mx-auto rounded"
          />
          <h4 className={`${item.color} font-bold`}>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
