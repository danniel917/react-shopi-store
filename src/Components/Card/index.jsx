import { AddIcon } from "../AddIcon";

function Card({ title, price, category, images }) {
  return (
    <article className="bg-black cursor-pointer w-80 h-80 rounded-3xl overflow-hidden">
      <figure className="grid content-between relative mb-2 w-full h-full p-8 before:block before:absolute before:z-10 before:inset-0 before:w-full before:h-full before:bg-gradient-to-r from-black/90 to-black/25">
        <img
          className="absolute w-full h-full object-cover rounded-lg"
          src={images?.[0]}
        />
        <span className="relative z-20 text-white text-xs font-medium justify-self-end text-right">
          Price<span className="block font-bold text-xl">${price}</span>
        </span>

        <div className="grid relative z-20">
          <span className="text-white text-xl font-black leading-6 mb-2">
            {title}
          </span>
          <span className="text-white text-xs">{category?.name}</span>
          <div className="grid place-content-center w-6 h-6 rounded-lg mt-6 p-1 bg-white/50 transition-all duration-300 ease-in-out hover:bg-white hover:scale-150 hover:origin-bottom-left hover:trans">
            <AddIcon />
          </div>
        </div>
      </figure>
    </article>
  );
}

export { Card };
