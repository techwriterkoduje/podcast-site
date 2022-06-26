export default function Button({ children }) {
  return (
    <a className="rounded-md bg-red-500 text-white p-2 hover:cursor-pointer hover:bg-red-700 hover:scale-110 font-semibold">
      {children}
    </a>
  );
}
