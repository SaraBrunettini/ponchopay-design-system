import {render, screen} from "@heroui/testing/helpers";

import {SummaryList} from "@/ponchopay/summary-list";

describe("SummaryList", () => {
  it("renders label and value pairs as a description list", () => {
    render(
      <SummaryList>
        <SummaryList.Row>
          <SummaryList.Label>Fee</SummaryList.Label>
          <SummaryList.Value>£0.00</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row isTotal data-testid="total">
          <SummaryList.Label>Total</SummaryList.Label>
          <SummaryList.Value>£50.00</SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>,
    );

    expect(screen.getAllByRole("term")).toHaveLength(2);
    expect(screen.getAllByRole("definition")).toHaveLength(2);
    const total = screen.getByTestId("total");

    expect(total).toHaveAttribute("data-total", "true");
    expect(total.className).toEqual(expect.stringContaining("summary-list__row--total"));
  });
});
