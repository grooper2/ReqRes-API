import React from "react";
import { render, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import RegisterModal from "../components/registerModal/RegisterModal";

describe("<Home />", () => {
  it("renders and displays properly", async () => {
    const { container } = render(<Home />);
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it("registers a friend", async () =>{
    const mockedClick = jest.fn();

    const { getByText } = render(<Home />);

    const button = getByText("Register a friend");
    button.onclick = mockedClick;
    button.click(button);
    expect(mockedClick).toHaveBeenCalledTimes(1);
  });

  it("close response container", async () =>{
    const mockedClick = jest.fn();

    const { getByRole } = render(<Home />);
    
    const button = getByRole("button");
    button.onclick = mockedClick;
    button.click(button);
    expect(mockedClick).toHaveBeenCalledTimes(1);
  });

  it("close modal", async () =>{
    const mockedClick = jest.fn();

    const { getByTestId } = render(<RegisterModal toggleModal={mockedClick} children={"children"}/>);
    
    const button = getByTestId("modal");
    button.click(button);
    expect(mockedClick).toHaveBeenCalledTimes(1);

    button.className = "not-modal-container";
    button.click(button);
    expect(mockedClick).toHaveBeenCalledTimes(1);
  });


});