import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import BodyComponent from "../Body";
import { RESTAURENT_DATA } from "../../Mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(RESTAURENT_DATA);
    },
  });
});

test("Search works as expected", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );

  const searchBtn = body.getByTestId("search-btn");

  console.log(searchBtn);
});
