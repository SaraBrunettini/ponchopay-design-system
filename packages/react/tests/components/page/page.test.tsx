import {render, screen} from "@heroui/testing/helpers";

import {Page} from "@/ponchopay/page";

describe("Page", () => {
  it("renders header, main content, and footer landmarks", () => {
    render(
      <Page>
        <Page.Header>Header</Page.Header>
        <Page.Content>Body</Page.Content>
        <Page.Footer>Footer</Page.Footer>
      </Page>,
    );

    expect(screen.getByRole("banner")).toHaveTextContent("Header");
    expect(screen.getByRole("main")).toHaveTextContent("Body");
    expect(screen.getByRole("contentinfo")).toHaveTextContent("Footer");
  });

  it("exposes BEM block, data-slot, and the surface modifier", () => {
    render(<Page data-testid="page" variant="surface" />);
    const page = screen.getByTestId("page");

    expect(page).toHaveAttribute("data-slot", "page");
    expect(page.className).toEqual(expect.stringContaining("page--surface"));
  });
});
