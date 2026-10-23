import {render, screen, setupUser} from "@heroui/testing/helpers";

import {List} from "@/ponchopay/list";

describe("List", () => {
  it("renders a static row with its parts", () => {
    render(
      <List>
        <List.Heading>Suggested</List.Heading>
        <List.Item data-testid="row">
          <List.Media>LN</List.Media>
          <List.Content>
            <List.Title>Little Nest Nursery</List.Title>
            <List.Description>Last paid 3 Oct</List.Description>
          </List.Content>
          <List.End>info</List.End>
        </List.Item>
      </List>,
    );

    expect(screen.getByRole("heading", {name: "Suggested"})).toBeInTheDocument();
    const row = screen.getByTestId("row");

    expect(row).toHaveAttribute("data-slot", "list-item");
    expect(row.className).not.toEqual(expect.stringContaining("list__item--interactive"));
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders an interactive row as a link and calls onPress", async () => {
    const user = setupUser();
    const onPress = vi.fn();

    render(
      <List>
        <List.Item onPress={onPress}>
          <List.Content>
            <List.Title>Visa Debit</List.Title>
          </List.Content>
        </List.Item>
      </List>,
    );

    const row = screen.getByRole("link", {name: "Visa Debit"});

    expect(row.className).toEqual(expect.stringContaining("list__item--interactive"));
    await user.click(row);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
