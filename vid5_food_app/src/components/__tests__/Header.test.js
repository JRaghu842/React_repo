import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

// Assume react testing library is providing a container(like browser) and we are rendering our header inside this container

// test for logo
test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  let logo = header.getAllByTestId("logo");

  //   console.log(logo);

  expect(logo[0].src).toBe(
    "https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
  );
});

// testing for online status
test("online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  let onlineStatus = header.getAllByTestId("online-status");

  //   console.log(onlineStatus);

  expect(onlineStatus[0].innerHTML).toBe("🟢");
});

// testing for cart to be empty at the initial render of page.
test("cart should have 0 items on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  let cartcount = header.getAllByTestId("cart-items");

  //   console.log(cartcount);

  expect(cartcount[0].innerHTML).toBe("Cart (0)");
});
