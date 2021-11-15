import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";

describe("<Login />", () => {
  it("renders and displays properly", async () => {
    const { container } = render(<Login />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});