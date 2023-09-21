import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import BodyComponent from "../Body";
import ShimmerUIComponent from "../shimmerui";
import { RESTAURENT_DATA } from "../../Mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(RESTAURENT_DATA);
    },
  });
});

// test("Search works as expected", () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <BodyComponent />
//       </Provider>
//     </StaticRouter>
//   );

//   const searchBtn = body.getByTestId("search-btn");

//   console.log(searchBtn);
// });

test("Shimmer should load on homepage", () => {
  const shimmer = render(
    <StaticRouter>
      <Provider store={store}>
        <ShimmerUIComponent />
      </Provider>
    </StaticRouter>
  );

  const shimmerDisplay = shimmer.getByTestId("shimmer");
  //   expect(shimmerDisplay).toBeInTheDocument();
  expect(shimmerDisplay.children.length).toBe(4);
});

test("Resturant should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const reslist = body.getByTestId("res-list");

  expect(reslist.children.length).toBe(15);
});
