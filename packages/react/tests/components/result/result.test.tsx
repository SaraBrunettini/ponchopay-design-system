import {render, screen} from "@heroui/testing/helpers";

import {Result} from "@/ponchopay/result";

describe("Result", () => {
  it("renders title, description, actions, and a default status icon", () => {
    render(
      <Result data-testid="result">
        <Result.Icon data-testid="icon" />
        <Result.Title>£50.00 paid</Result.Title>
        <Result.Description>We&apos;ll let them know.</Result.Description>
        <Result.Actions>
          <button type="button">Done</button>
        </Result.Actions>
      </Result>,
    );

    expect(screen.getByTestId("result")).toHaveAttribute("data-status", "success");
    expect(screen.getByRole("heading", {name: "£50.00 paid"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Done"})).toBeInTheDocument();
    expect(screen.getByTestId("icon").querySelector('[data-icon="check"]')).not.toBeNull();
  });

  it("supports other statuses", () => {
    render(
      <Result data-testid="result" status="danger">
        <Result.Icon data-testid="icon" />
      </Result>,
    );

    expect(screen.getByTestId("result").className).toEqual(
      expect.stringContaining("result--danger"),
    );
    expect(screen.getByTestId("icon").querySelector('[data-icon="x"]')).not.toBeNull();
  });
});
