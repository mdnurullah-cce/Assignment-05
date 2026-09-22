
import { use } from "react";

import type { ITechnology } from "../Types/Technologies";
import AvailableTech from "./AvailableTech";
import YourStack from "./YourStack";

interface TechnologiesProps {
  techPromise: Promise<ITechnology[]>;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<ITechnology[]>
  >;
}

const Technologies = ({
  techPromise,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologiesProps) => {
  const technologies = use(techPromise);

  return (
    <section id="technologies" className="w-full py-8">

      {/* Heading  */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#bf411a] via-[#b31868] to-[#5b25b9] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards and Your Stack */}
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

        {/* Technology cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((singleTech) => (
            <AvailableTech
              key={singleTech.id}
              technology={singleTech}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          ))}
        </div>

        
        <YourStack
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />

      </div>
    </section>
  );
};

export default Technologies;