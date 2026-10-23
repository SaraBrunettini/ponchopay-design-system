"use client";

import type {SummaryListVariants} from "@heroui/styles";
import type {ComponentPropsWithRef} from "react";

import {summaryListVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";

import {dataAttr} from "../../utils/assertion";

/* -------------------------------------------------------------------------------------------------
 * SummaryList Context
 * -----------------------------------------------------------------------------------------------*/
type SummaryListContext = {
  slots?: ReturnType<typeof summaryListVariants>;
};

const SummaryListContext = createContext<SummaryListContext>({});

/* -------------------------------------------------------------------------------------------------
 * SummaryList Root
 * -----------------------------------------------------------------------------------------------*/
interface SummaryListRootProps extends ComponentPropsWithRef<"dl"> {}

const SummaryListRoot = ({children, className, ...props}: SummaryListRootProps) => {
  const slots = React.useMemo(() => summaryListVariants(), []);

  return (
    <SummaryListContext.Provider value={{slots}}>
      <dl className={slots.base({className})} data-slot="summary-list" {...props}>
        {children}
      </dl>
    </SummaryListContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * SummaryList Row
 * -----------------------------------------------------------------------------------------------*/
interface SummaryListRowProps extends ComponentPropsWithRef<"div"> {
  /** Emphasises the row as the total, with a divider above. */
  isTotal?: SummaryListVariants["isTotal"];
}

const SummaryListRow = ({className, isTotal, ...props}: SummaryListRowProps) => {
  const {slots} = useContext(SummaryListContext);

  return (
    <div
      className={slots?.row({className, isTotal})}
      data-slot="summary-list-row"
      data-total={dataAttr(!!isTotal)}
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * SummaryList Label
 * -----------------------------------------------------------------------------------------------*/
interface SummaryListLabelProps extends ComponentPropsWithRef<"dt"> {}

const SummaryListLabel = ({className, ...props}: SummaryListLabelProps) => {
  const {slots} = useContext(SummaryListContext);

  return <dt className={slots?.label({className})} data-slot="summary-list-label" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * SummaryList Value
 * -----------------------------------------------------------------------------------------------*/
interface SummaryListValueProps extends ComponentPropsWithRef<"dd"> {}

const SummaryListValue = ({className, ...props}: SummaryListValueProps) => {
  const {slots} = useContext(SummaryListContext);

  return <dd className={slots?.value({className})} data-slot="summary-list-value" {...props} />;
};

SummaryListRoot.displayName = "HeroUI.SummaryList";
SummaryListRow.displayName = "HeroUI.SummaryList.Row";
SummaryListLabel.displayName = "HeroUI.SummaryList.Label";
SummaryListValue.displayName = "HeroUI.SummaryList.Value";

export {SummaryListRoot, SummaryListRow, SummaryListLabel, SummaryListValue};
export type {
  SummaryListRootProps,
  SummaryListRowProps,
  SummaryListLabelProps,
  SummaryListValueProps,
};
