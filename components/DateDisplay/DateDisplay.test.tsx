import { render, screen } from "@testing-library/react";
import DateDisplay from "./DateDisplay";

describe("DateDisplay", () => {
  it("renders the date in the expected format", () => {
    // środa, 19 maja 2021
    render(<DateDisplay dateString="Wed May 19 2021" />);

    const displayedDate = screen.getByText("środa, 19 maja 2021");

    expect(displayedDate).toBeInTheDocument();
  });
});
