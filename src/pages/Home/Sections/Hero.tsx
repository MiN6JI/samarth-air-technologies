import Button from "../../../components/UI/Button";
import Container from "../../../components/UI/Container";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-slate-50 py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              Trusted Solar Energy Solutions
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
              Save More With
              <span className="block text-blue-600">Smart Solar Energy</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Reduce your electricity bills and power your home with reliable,
              efficient, and sustainable solar solutions designed for modern
              living.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>Get Free Consultation</Button>

              <Button variant="outline">Learn More</Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">10k+</h3>

                <p className="text-gray-600">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">₹5Cr+</h3>

                <p className="text-gray-600">Saved on Bills</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">25+</h3>

                <p className="text-gray-600">Cities Served</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
              alt="Solar Panels"
              className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm text-gray-500">Average Monthly Savings</p>

              <h3 className="mt-2 text-3xl font-bold text-blue-600">₹4,500</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
