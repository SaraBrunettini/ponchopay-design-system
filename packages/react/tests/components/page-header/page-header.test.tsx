import {render, screen} from "@heroui/testing/helpers";

import {PageHeader} from "@/ponchopay/page-header";

describe("PageHeader", () => {
  it("renders the title as a level-one heading with a description", () => {
    render(
      <PageHeader>
        <PageHeader.Toolbar>
          <PageHeader.Actions>
            <button type="button">Account</button>
          </PageHeader.Actions>
        </PageHeader.Toolbar>
        <PageHeader.Title>Pay and Request</PageHeader.Title>
        <PageHeader.Description>Pay your providers</PageHeader.Description>
      </PageHeader>,
    );

    expect(screen.getByRole("heading", {level: 1, name: "Pay and Request"})).toBeInTheDocument();
    expect(screen.getByText("Pay your providers")).toHaveAttribute(
      "data-slot",
      "page-header-description",
    );
    expect(screen.getByRole("button", {name: "Account"}).parentElement).toHaveAttribute(
      "data-slot",
      "page-header-actions",
    );
  });
});
