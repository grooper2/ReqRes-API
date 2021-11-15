import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  it("renders and displays properly", async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});