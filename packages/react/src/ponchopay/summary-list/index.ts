import type {ComponentProps} from "react";

import {SummaryListLabel, SummaryListRoot, SummaryListRow, SummaryListValue} from "./summary-list";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const SummaryList = Object.assign(SummaryListRoot, {
  Label: SummaryListLabel,
  Root: SummaryListRoot,
  Row: SummaryListRow,
  Value: SummaryListValue,
});

export type SummaryList = {
  Props: ComponentProps<typeof SummaryListRoot>;
  RootProps: ComponentProps<typeof SummaryListRoot>;
  RowProps: ComponentProps<typeof SummaryListRow>;
  LabelProps: ComponentProps<typeof SummaryListLabel>;
  ValueProps: ComponentProps<typeof SummaryListValue>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {SummaryListRoot, SummaryListRow, SummaryListLabel, SummaryListValue};

export type {
  SummaryListRootProps,
  SummaryListRootProps as SummaryListProps,
  SummaryListRowProps,
  SummaryListLabelProps,
  SummaryListValueProps,
} from "./summary-list";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {summaryListVariants} from "@heroui/styles";

export type {SummaryListVariants} from "@heroui/styles";
