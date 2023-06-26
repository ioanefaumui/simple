export default function MenuIcon() {
  return (
    <div className="flex flex-col justify-between h-3.5">
      {Array.from(Array(3)).map((item) => (
        <span key={item} className="block w-3 md:w-4 h-0.5 bg-white">
          {item}
        </span>
      ))}
    </div>
  );
}
