import { createContext } from "react";

let userContext = createContext({
  user: {
    name: "Dummy Name",
    email: "DummyEmail@12",
  },
});

export default userContext;
