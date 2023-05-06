import Keyboard from "./components/Keyboard";
import useCalculator from "./hooks/useCalculator";

const Main = () => {
  const { current, onClick } = useCalculator()
  return (
    <main className="flex h-screen flex-col justify-between">
      <h2 className="h-17 w-screen overflow-auto p-2 text-right text-5xl text-gray-900">
        {current}
      </h2>
      <Keyboard onClick={onClick} />
    </main>
  );
};

export default Main;
