import {render, screen} from "@heroui/testing/helpers";

import {FormItem} from "@/ponchopay/form-item";

describe("FormItem", () => {
  it("renders children without a message when there is no error", () => {
    render(
      <FormItem data-testid="item">
        <span>Control</span>
      </FormItem>,
    );

    expect(screen.getByTestId("item")).not.toHaveAttribute("data-error");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("renders the error as an alert and marks the item invalid", () => {
    render(
      <FormItem data-testid="item" error="Choose how often you want to pay.">
        <span>Control</span>
      </FormItem>,
    );

    expect(screen.getByTestId("item")).toHaveAttribute("data-error", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("Choose how often you want to pay.");
    expect(screen.getByRole("alert")).toHaveAttribute("data-slot", "form-item-message");
  });

  it("supports placing the message manually", () => {
    render(
      <FormItem>
        <FormItem.Message>Custom message</FormItem.Message>
      </FormItem>,
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Custom message");
  });
});
