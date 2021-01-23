import React from "react";

import { render, screen } from "@testing-library/react";
import { TestingWrapper } from "../../_reusable/TestingWrapper/TestingWrapper";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  test("movie title appears", async () => {
    // element is initially not present...
    render(
      <TestingWrapper>
        <RandomPlanet planetId={10000} />
      </TestingWrapper>
    );

    // await screen.findByRole("alert", { name: /submit/i });
    // await waitFor(() => {
    //   expect(screen.getAllByRole("alert")).toHaveLength(1);
    // });
    await screen.findByText(/loading/i);

    // TODO: rewrite RandomPlanet (separate into dumb testable component and smart fetcher)

    // await screen.findByText(/wrong/i);

    // expect(screen.getByRole("alert")).toHaveTextContent(
    //   /OOps. Something went wrong with/i
    // );
  });
});
