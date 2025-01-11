import { useEffect, useState } from "react";
import Badges from "./components/Badges";
import CoffeCard from "./components/Card";
import ICardCoffeProps from "./Types/ICardCoffe";
import Vector from "./assets/vector.svg";
import background from "./assets/bg-cafe-lg.jpg";

function App() {
  const [data, setData] = useState<ICardCoffeProps[]>([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen py-32 xl:pt-60 w-full bg-zinc-300 text-primary relative z-0">
      <img
        className="absolute top-0 h-96 object-left object-cover w-full -z-10 "
        src={background}
        alt=""
      />
      <section className="p-10 md:py-24 w-10/12 bg-zinc-200 rounded-2xl m-auto text-center flex flex-col gap-10 overflow-hidden">
        <header className="flex flex-col gap-4 relative z-10">
          <img
            className="w-72 absolute -top-10 left-2/4 -z-10 rotate-[9deg]"
            src={Vector}
            alt=""
          />
          <h1 className="text-heading font-semibold">Our Collection</h1>
          <p className="text-gray-100 font-medium text-body max-w-md mx-auto">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <nav className="flex font-medium gap-2 justify-center z-10">
            <Badges onClick={() => setActive(true)} isActive={active}>
              All Products
            </Badges>
            <Badges onClick={() => setActive(false)} isActive={!active}>
              Available Now
            </Badges>
          </nav>
        </header>
        <section className="flex flex-col flex-wrap lg:flex-row justify-center content-center gap-8">
          {data.map((coffee) => (
            <CoffeCard key={coffee.id} coffee={coffee} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
