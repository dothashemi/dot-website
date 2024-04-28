import "./Button.css";

export default function Button({ title, link, onSelect }) {
  return (
    <>
      <a href={link} target="_blank">
        <button
          className="bg-teal-100 text-zinc-800 text-xs sm:text-base sm:w-28 p-2 rounded"
          onClick={onSelect}
        >
          {title}
        </button>
      </a>
    </>
  );
}
