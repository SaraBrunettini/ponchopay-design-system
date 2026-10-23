import {render, screen} from "@heroui/testing/helpers";

import {ActionBar} from "@/ponchopay/action-bar";

describe("ActionBar", () => {
  it("renders its actions with the default horizontal orientation", () => {
    render(
      <ActionBar data-testid="bar">
        <button type="button">Pay</button>
      </ActionBar>,
    );
    const bar = screen.getByTestId("bar");

    expect(bar).toHaveAttribute("data-slot", "action-bar");
    expect(bar).toHaveAttribute("data-orientation", "horizontal");
    expect(screen.getByRole("button", {name: "Pay"})).toBeInTheDocument();
  });

  it("exposes the vertical modifier", () => {
    render(<ActionBar data-testid="bar" orientation="vertical" />);

    expect(screen.getByTestId("bar").className).toEqual(
      expect.stringContaining("action-bar--vertical"),
    );
  });
});
