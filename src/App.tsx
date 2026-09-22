
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";

import type { ITechnology } from "./Types/Technologies";

const techPromiseFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }

  return res.json();
};

const techPromise = techPromiseFetch();

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Suspense fallback={<p>Loading technologies...</p>}>
          <Technologies
            techPromise={techPromise}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </Suspense>
      </main>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;