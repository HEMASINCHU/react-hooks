import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export default function Example() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  );
}

function Form({}) {
  return (
    <Panel title="loginform">
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Hema" });
      }}
    >
      Log in as Hema
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
