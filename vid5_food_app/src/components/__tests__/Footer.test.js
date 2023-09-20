import { render } from "@testing-library/react";
import Footer from "../Footer";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Address should appear no render of footer", () => {
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );

  const address = footer.getAllByTestId("address");

  expect(address[0].innerHTML).toBe(
    "Address: 8th main road, 4th block, <br> basavanagudi, bangalore"
  );
});
