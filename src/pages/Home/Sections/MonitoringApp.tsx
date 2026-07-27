import FeatureBadge from "./MonitoringApp/FeatureBadge";

function MonitoringApp() {
  return (
    <section className="overflow-hidden bg-[#EAF8FF] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-bold text-slate-900">
            Real-time Monitoring App
          </h2>

          <p className="mt-8 max-w-xl text-2xl leading-10 text-gray-700">
            Track the performance of your Solar System— anywhere, anytime.
          </p>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="mt-10 h-16"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          {/* Phone */}
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500"
            alt="Mobile App"
            className="w-[320px] h-[540px] object-cover rounded-[40px] shadow-2xl"
          />

          {/* Floating Cards */}
          <FeatureBadge
            title="Track your power generation"
            className="-left-8 top-10"
          />

          <FeatureBadge
            title="Get 100% visibility on your savings"
            className="-right-8 top-20"
          />

          <FeatureBadge
            title="Track your referrals & rewards on the go"
            className="-left-12 bottom-24"
          />

          <FeatureBadge
            title="Full transparency on promised vs. actual generation"
            className="-right-12 bottom-20"
          />
        </div>
      </div>
    </section>
  );
}

export default MonitoringApp;
