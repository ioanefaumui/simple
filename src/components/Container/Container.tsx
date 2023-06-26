export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-[min(100%-2rem,900px)] mx-auto${className ? " " + className : ""}`}
    >
      {children}
    </div>
  );
}
