import React from "react";
import { render, waitFor } from "@testing-library/react";
import HomeProfiles from "../components/HomeComponents/HomeProfiles";

describe("<HomeProfiles />", () => {
  it("renders and displays properly", async () => {
    const { container } = render(<HomeProfiles />);
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});