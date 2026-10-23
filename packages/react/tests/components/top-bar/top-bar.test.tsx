import {render, screen} from "@heroui/testing/helpers";

import {TopBar} from "@/ponchopay/top-bar";

describe("TopBar", () => {
  it("renders start, title, and end parts", () => {
    render(
      <TopBar data-testid="bar">
        <TopBar.Start>
          <button type="button">Back</button>
        </TopBar.Start>
        <TopBar.Title>Review</TopBar.Title>
        <TopBar.End>
          <button type="button">Close</button>
        </TopBar.End>
      </TopBar>,
    );

    expect(screen.getByTestId("bar")).toHaveAttribute("data-slot", "top-bar");
    expect(screen.getByRole("heading", {name: "Review"})).toHaveAttribute(
      "data-slot",
      "top-bar-title",
    );
    expect(screen.getByRole("button", {name: "Back"}).parentElement).toHaveAttribute(
      "data-slot",
      "top-bar-start",
    );
    expect(screen.getByRole("button", {name: "Close"}).parentElement).toHaveAttribute(
      "data-slot",
      "top-bar-end",
    );
  });

  it("renders free content in the middle", () => {
    render(
      <TopBar>
        <TopBar.Content>
          <input aria-label="Search" />
        </TopBar.Content>
      </TopBar>,
    );

    expect(screen.getByRole("textbox", {name: "Search"}).parentElement).toHaveAttribute(
      "data-slot",
      "top-bar-content",
    );
  });
});
