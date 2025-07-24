// Contact section

const Contact = () => {
  return (
    <div id="contact-us" className="text-center py-10 px-4">
      <h3 className="text-2xl font-bold text-black mb-2">CONTACT US</h3>
      <hr className="border-t-4 border-blue-500 w-[5%] mx-auto my-4" />

      <p className="text-black">ASK US FOR AN ESTIMATE</p>
      <p className="mb-2 text-black">
        Tell us about the project you want to bring to life and you will receive an estimate that meets your needs and your budget. And your imagination!
      </p>

      <p className="text-gray-500">
        <a
          href="mailto:office@eoscodelab.com"
          className="text-blue-600 hover:underline block"
        >
          office@eoscodelab.com
        </a>
        <a
          href="tel:+40-745-940-499"
          className="text-blue-600 hover:underline block mt-1"
        >
          +40-745-940-499
        </a>
      </p>
    </div>
  );
};


export default Contact;
