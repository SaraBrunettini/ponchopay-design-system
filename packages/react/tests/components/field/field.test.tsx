import {render, screen, setupUser} from "@heroui/testing/helpers";

import {Radio} from "@/components/radio";
import {RadioGroup} from "@/components/radio-group";
import {Field} from "@/ponchopay/field";

describe("Field", () => {
  it("renders a group with orientation and state hooks", () => {
    render(
      <Field isDisabled isInvalid data-testid="field" orientation="horizontal">
        <input aria-label="Search" />
      </Field>,
    );
    const field = screen.getByTestId("field");

    expect(field).toHaveAttribute("role", "group");
    expect(field).toHaveAttribute("data-orientation", "horizontal");
    expect(field).toHaveAttribute("data-invalid", "true");
    expect(field).toHaveAttribute("data-disabled", "true");
    expect(field.className).toEqual(expect.stringContaining("field--horizontal"));
  });

  it("exposes data-slot on its layout parts", () => {
    render(
      <Field.Group data-testid="group">
        <Field.Content data-testid="content">
          <Field.Title>Tax-Free Childcare</Field.Title>
        </Field.Content>
        <Field.Card data-testid="card">
          <Field.Reveal data-testid="reveal" />
        </Field.Card>
      </Field.Group>,
    );

    expect(screen.getByTestId("group")).toHaveAttribute("data-slot", "field-group");
    expect(screen.getByTestId("content")).toHaveAttribute("data-slot", "field-content");
    expect(screen.getByText("Tax-Free Childcare")).toHaveAttribute("data-slot", "field-title");
    expect(screen.getByTestId("card")).toHaveAttribute("data-slot", "field-card");
    expect(screen.getByTestId("reveal")).toHaveAttribute("data-slot", "field-reveal");
  });

  it("supports forcing the selected and disabled card state", () => {
    render(<Field.Card isDisabled isSelected data-testid="card" />);
    const card = screen.getByTestId("card");

    expect(card).toHaveAttribute("data-selected", "true");
    expect(card).toHaveAttribute("data-disabled", "true");
  });

  it("selects the radio when its card header is clicked", async () => {
    const user = setupUser();

    render(
      <RadioGroup aria-label="Pay from" name="pay-from">
        <Field.Card>
          <Radio value="tfc">
            <Radio.Content>
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Field.Content>
                <Field.Title>Tax-Free Childcare</Field.Title>
              </Field.Content>
            </Radio.Content>
          </Radio>
        </Field.Card>
      </RadioGroup>,
    );

    await user.click(screen.getByText("Tax-Free Childcare"));

    expect(screen.getByRole("radio", {name: "Tax-Free Childcare"})).toBeChecked();
  });
});
