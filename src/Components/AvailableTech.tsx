
import type { ITechnology } from "../Types/Technologies";

interface AvailableTechProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<ITechnology[]>
  >;
}

const AvailableTech = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: AvailableTechProps) => {
  const { id, name, category, description, icon, rating, difficulty, badge } =
    technology;

  const isSelected = selectedTechnologies.some(
    (selectedTech) => selectedTech.id === id
  );

  const handleAddToStack = () => {
    if (isSelected) return;

    setSelectedTechnologies((previousTechnologies) => [
      ...previousTechnologies,
      technology,
    ]);
  };

  return (
    <article className="group box-border flex aspect-square w-full min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg">

      {/* Icon and Badge */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={icon}
            alt={`${name} icon`}
            loading="lazy"
            className="h-10 w-10 object-contain transition duration-300 group-hover:scale-110"
          />
        </div>

        {badge && (
          <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
            {badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h2 className="mb-2 text-xl font-bold text-slate-800">
        {name}
      </h2>

      {/* Description */}
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      {/* Divider */}
      <div className="mt-auto mb-3 border-t border-slate-100" />

      {/* Category, Difficulty, Rating */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {category}
        </span>

        <span className="text-xs text-slate-500">
          {difficulty}
        </span>

        <div className="flex items-center gap-1 text-sm font-semibold text-slate-600">
          <span className="text-amber-400">★</span>
          <span>{rating}</span>
        </div>
      </div>

      {/* Add to Stack */}
      <button
        type="button"
        onClick={handleAddToStack}
        disabled={isSelected}
        className={`btn min-h-10 w-full rounded-lg border-0 text-white transition ${
          isSelected
            ? "cursor-not-allowed bg-emerald-600"
            : "bg-slate-900 hover:bg-slate-700"
        }`}
      >
        {isSelected ? "Added to Stack ✓" : "Add to Stack"}
      </button>

    </article>
  );
};

export default AvailableTech;