import type { ITechnology } from "../Types/Technologies";

interface YourStackProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<ITechnology[]>
  >;
}

const YourStack = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: YourStackProps) => {

  const handleRemove = (id: ITechnology["id"]) => {
    setSelectedTechnologies((previousTechnologies) =>
      previousTechnologies.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <aside className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">

      {/* Heading and Count */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-slate-800">
          Your Stack
        </h2>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-semibold text-pink-600">
          {selectedTechnologies.length} Selected
        </span>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
          <p className="mb-2 text-3xl">🧰</p>

          <h3 className="mb-1 font-semibold text-slate-700">
            Your stack is empty
          </h3>

          <p className="text-sm leading-relaxed text-slate-500">
            Add technologies to build your ideal development stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} icon`}
                  className="h-9 w-9 shrink-0 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(technology.id)}
                  aria-label={`Remove ${technology.name} from stack`}
                  className="btn btn-sm btn-circle btn-ghost text-red-500 hover:bg-red-50"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={handleRemoveAll}
            className="btn btn-outline btn-error mt-5 w-full rounded-lg"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
};

export default YourStack;