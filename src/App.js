import { Header } from "./components";

const App = () => {
  const invalidKeys =
    "F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 Escape Tab CapsLock Shift Control Alt Meta ArrowLeft ArrowRight ArrowDown ArrowUp Enter".split(
      " "
    );

  return (
    <>
      <Header />
      <h1>Typing test</h1>
    </>
  );
};

export default App;
