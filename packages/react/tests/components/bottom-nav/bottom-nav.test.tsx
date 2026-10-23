import {render, screen} from "@heroui/testing/helpers";

import {BottomNav} from "@/ponchopay/bottom-nav";

describe("BottomNav", () => {
  it("renders a labelled navigation landmark with links", () => {
    render(
      <BottomNav>
        <BottomNav.Item href="/home">Home</BottomNav.Item>
        <BottomNav.Action href="/pay">Pay</BottomNav.Action>
      </BottomNav>,
    );

    expect(screen.getByRole("navigation", {name: "Main"})).toBeInTheDocument();
    expect(screen.getByRole("link", {name: "Home"})).toHaveAttribute("href", "/home");
    expect(screen.getByRole("link", {name: "Pay"})).toHaveAttribute(
      "data-slot",
      "bottom-nav-action",
    );
  });

  it("supports marking the current tab", () => {
    render(
      <BottomNav>
        <BottomNav.Item isCurrent href="/home">
          Home
        </BottomNav.Item>
        <BottomNav.Item href="/activity">Activity</BottomNav.Item>
      </BottomNav>,
    );

    const current = screen.getByRole("link", {name: "Home"});

    expect(current).toHaveAttribute("aria-current", "page");
    expect(current).toHaveAttribute("data-current", "true");
    expect(screen.getByRole("link", {name: "Activity"})).not.toHaveAttribute("aria-current");
  });
});
