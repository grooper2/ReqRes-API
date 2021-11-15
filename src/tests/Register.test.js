import React from "react";
import { render, waitFor} from "@testing-library/react";
import Register from "../pages/Register";

describe("<Register />", () => {
  it("renders and displays properly", async () => {
    const { container } = render(<Register />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});