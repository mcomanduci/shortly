import StatsBox from "./StatsBox";
import brandIcon from "/images/icon-brand-recognition.svg";
import detailedIcon from "/images/icon-detailed-records.svg";
import customizableIcon from "/images/icon-fully-customizable.svg";

function Stats() {
  return (
    <>
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>

          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

          <StatsBox
            margin={""}
            img={brandIcon}
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links
              don't mean a thing. Branded links instil confidence in your
              content."
          />
          <StatsBox
            margin={"mt-24 md:mt-8"}
            img={detailedIcon}
            title="Detailed records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <StatsBox
            margin={"mt-24 md:mt-16"}
            img={customizableIcon}
            title="Fully customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </section>
    </>
  );
}

export default Stats;
