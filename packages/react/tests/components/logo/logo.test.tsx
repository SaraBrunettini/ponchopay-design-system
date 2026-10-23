import {render, screen} from "@heroui/testing/helpers";

import {Logo} from "@/ponchopay/logo";

describe("Logo", () => {
  it("renders an image with the default accessible name", () => {
    render(<Logo />);

    expect(screen.getByRole("img", {name: "PonchoPay"})).toBeInTheDocument();
  });

  it("supports overriding the accessible name", () => {
    render(<Logo alt="PonchoPay home" />);

    expect(screen.getByRole("img", {name: "PonchoPay home"})).toBeInTheDocument();
  });

  it("exposes BEM block, data-slot, and default modifiers", () => {
    render(<Logo data-testid="logo" />);
    const logo = screen.getByTestId("logo");

    expect(logo).toHaveAttribute("data-slot", "logo");
    expect(logo).toHaveAttribute("data-variant", "logo");
    expect(logo.className).toEqual(expect.stringContaining("logo--auto"));
  });

  it("renders the symbol without the wordmark", () => {
    render(<Logo data-testid="full" />);
    render(<Logo data-testid="symbol" variant="symbol" />);

    const full = screen.getByTestId("full").querySelectorAll("path").length;
    const symbol = screen.getByTestId("symbol");

    expect(symbol).toHaveAttribute("data-variant", "symbol");
    expect(symbol.className).toEqual(expect.stringContaining("logo--symbol"));
    expect(symbol.querySelectorAll("path").length).toBeLessThan(full);
  });

  it("exposes the forced theme modifier", () => {
    render(<Logo data-testid="logo" theme="dark" />);

    expect(screen.getByTestId("logo").className).toEqual(expect.stringContaining("logo--dark"));
  });

  it("applies the height to the root", () => {
    render(<Logo data-testid="logo" height={40} />);

    expect(screen.getByTestId("logo")).toHaveStyle({height: "40px"});
  });
});
