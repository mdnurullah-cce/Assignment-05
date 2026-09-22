
import Bannar from "../assets/banner-stack.png";
import type { HeroContent } from "../Types/Hero";

const heroData: HeroContent = {
  heading: "Build Your Ideal",
  subheading: "Development Stack",
  description:
    "Explore frontend, backend, database, and tooling options. Compare technologies side by side and put together the stack that fits your next project.",
  primaryButton: {
    label: "Explore Technologies",
    href: "#technologies",
  },
  secondaryButton: {
    label: "Learn More",
    href: "#about",
  },
  imageAlt: "Illustration of a development technology stack",
  imageSrc: Bannar,
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 md:py-15 lg:py-2"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left side: Hero content */}
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl xl:text-6xl">
            {heroData.heading}
          </h1>

          <h2 className="mt-2 bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl xl:text-6xl">
            {heroData.subheading}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-2xl lg:mx-0">
            {heroData.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={heroData.primaryButton.href}
              className="btn rounded-lg border-0 bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-6 text-white shadow-md transition hover:-translate-y-1 hover:opacity-90"
            >
              {heroData.primaryButton.label}
            </a>

            <a
              href={heroData.secondaryButton.href}
              className="btn rounded-lg border border-slate-300 bg-white px-6 text-slate-700 transition hover:-translate-y-1 hover:bg-slate-50"
            >
              {heroData.secondaryButton.label}
            </a>
          </div>
        </div>

        {/* Right side: Banner image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-8 rounded-full bg-linear-to-r from-orange-400/20 via-pink-400/20 to-violet-500/20 blur-3xl"></div>

          <img
            src={heroData.imageSrc}
            alt={heroData.imageAlt}
            className="relative z-10 mx-auto h-auto w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
