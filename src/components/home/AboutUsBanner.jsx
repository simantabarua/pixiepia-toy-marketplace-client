const AboutUsBanner = () => {
  return (
    <>
      <div  className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
        <div>
          <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/imgh3-copyright.jpg" />
        </div>
        <div className="space-y-5 p-4">
          <h1 className="font-bold text-2xl md:text-5xl">We provide & offer premium service</h1>
          <p className="font-bold text-gray-700">
            Our area of practice is quite wide: toy production, custom-made toys
            for every age, toy brand promotion, playrooms design with equipment,
            and of course kids camps and events! Contact us today and get a free
            consultation on any product we offer. Join our community for
            updates.
          </p>
          <button className="btn btn-primary rounded-lg">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default AboutUsBanner;
