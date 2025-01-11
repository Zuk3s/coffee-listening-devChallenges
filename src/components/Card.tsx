import ICardCoffeProps from "../Types/ICardCoffe";
import StarFill from "../assets/Star_fill.svg";
import Star from "../assets/Star.svg";

interface ICardCoffe {
  coffee: ICardCoffeProps;
}

export default function CoffeCard({ coffee }: ICardCoffe) {
  return (
    <div className="flex flex-col gap-3 max-w-96 lg:max-w-none lg:w-1/4">
      <img className="rounded-xl" src={coffee.image} alt="" />
      {coffee.popular && (
        <p className="absolute m-2 text-small font-bold py-1 px-3 rounded-2xl bg-orange text-zinc-300">
          Popular
        </p>
      )}
      <header className="flex justify-between align-middle">
        <h1 className="font-medium">{coffee.name}</h1>
        <p className="text-price bg-green inline py-1 px-2 text-zinc-300 font-bold rounded">
          {coffee.price}
        </p>
      </header>
      <footer className="flex justify-between align-middle">
        <div className="flex gap-1 align-middle">
          {coffee.rating != null ? (
            <>
              <img src={StarFill} alt="" />
              <p>
                {coffee.rating.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 2,
                })}
                <span className="text-gray-100"> ({coffee.votes} votes)</span>
              </p>
            </>
          ) : (
            <>
              <img src={Star} alt="" />
              <p className="text-gray-100 font-semibold">No ratings</p>
            </>
          )}
        </div>
        {!coffee.available && <p className="text-label text-red">Sold Out</p>}
      </footer>
    </div>
  );
}
