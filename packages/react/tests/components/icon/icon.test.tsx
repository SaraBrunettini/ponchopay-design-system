import {render, screen} from "@heroui/testing/helpers";

import {Icon} from "@/ponchopay/icon";

describe("Icon", () => {
  it("renders a Lucide icon by kebab-case name", () => {
    render(<Icon data-testid="icon" name="piggy-bank" />);
    const icon = screen.getByTestId("icon");

    expect(icon).toHaveAttribute("data-slot", "icon");
    expect(icon).toHaveAttribute("data-icon", "piggy-bank");
    expect(icon.querySelector("svg")).not.toBeNull();
  });

  it("resolves names with numbers", () => {
    render(<Icon data-testid="icon" name="trash-2" />);

    expect(screen.getByTestId("icon").querySelector("svg")).not.toBeNull();
  });

  it("renders payment brand marks", () => {
    render(<Icon data-testid="icon" name="brand-google" />);

    expect(screen.getByTestId("icon").querySelectorAll("path")).toHaveLength(4);
  });

  it("renders nothing inside the wrapper for an unknown name", () => {
    render(<Icon data-testid="icon" name="not-a-real-icon" />);

    expect(screen.getByTestId("icon").querySelector("svg")).toBeNull();
  });

  it("is decorative without a label", () => {
    render(<Icon data-testid="icon" name="check" />);

    expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
  });

  it("exposes an image role with a label", () => {
    render(<Icon label="Loading" name="loader-circle" />);

    expect(screen.getByRole("img", {name: "Loading"})).toBeInTheDocument();
  });

  it("exposes the spin modifier and size", () => {
    render(<Icon spin data-testid="icon" name="loader-circle" size={24} />);
    const icon = screen.getByTestId("icon");

    expect(icon.className).toEqual(expect.stringContaining("icon--spin"));
    expect(icon).toHaveStyle({height: "24px", width: "24px"});
  });
});
