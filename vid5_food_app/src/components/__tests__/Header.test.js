import { render } from "@testing-library/react";
import Header from "../Header";

// Assume react testing library is providing a container(like browser) and we are rendering our header inside this container

test("Logo should load on rendering header", () => {
  const header = render(<Header />);
  console.log(header);
});
