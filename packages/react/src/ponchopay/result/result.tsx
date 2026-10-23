"use client";

import type {ResultVariants} from "@heroui/styles";
import type {ComponentPropsWithRef} from "react";

import {resultVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";

import {Icon} from "../icon";

const STATUS_ICONS = {
  danger: "x",
  info: "info",
  success: "check",
  warning: "triangle-alert",
} as const;

/* -------------------------------------------------------------------------------------------------
 * Result Context
 * -----------------------------------------------------------------------------------------------*/
type ResultContext = {
  slots?: ReturnType<typeof resultVariants>;
  status: NonNullable<ResultVariants["status"]>;
};

const ResultContext = createContext<ResultContext>({status: "success"});

/* -------------------------------------------------------------------------------------------------
 * Result Root
 * -----------------------------------------------------------------------------------------------*/
interface ResultRootProps extends ComponentPropsWithRef<"div">, ResultVariants {}

const ResultRoot = ({children, className, status = "success", ...props}: ResultRootProps) => {
  const slots = React.useMemo(() => resultVariants({status}), [status]);

  return (
    <ResultContext.Provider value={{slots, status}}>
      <div className={slots.base({className})} data-slot="result" data-status={status} {...props}>
        {children}
      </div>
    </ResultContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Result Icon (defaults to the status icon)
 * -----------------------------------------------------------------------------------------------*/
interface ResultIconProps extends ComponentPropsWithRef<"div"> {}

const ResultIcon = ({children, className, ...props}: ResultIconProps) => {
  const {slots, status} = useContext(ResultContext);

  return (
    <div aria-hidden className={slots?.icon({className})} data-slot="result-icon" {...props}>
      {children ?? <Icon name={STATUS_ICONS[status]} size={40} strokeWidth={3} />}
    </div>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Result Title
 * -----------------------------------------------------------------------------------------------*/
interface ResultTitleProps extends ComponentPropsWithRef<"h2"> {}

const ResultTitle = ({children, className, ...props}: ResultTitleProps) => {
  const {slots} = useContext(ResultContext);

  return (
    <h2 className={slots?.title({className})} data-slot="result-title" {...props}>
      {children}
    </h2>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Result Description
 * -----------------------------------------------------------------------------------------------*/
interface ResultDescriptionProps extends ComponentPropsWithRef<"p"> {}

const ResultDescription = ({className, ...props}: ResultDescriptionProps) => {
  const {slots} = useContext(ResultContext);

  return (
    <p className={slots?.description({className})} data-slot="result-description" {...props} />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Result Actions
 * -----------------------------------------------------------------------------------------------*/
interface ResultActionsProps extends ComponentPropsWithRef<"div"> {}

const ResultActions = ({className, ...props}: ResultActionsProps) => {
  const {slots} = useContext(ResultContext);

  return <div className={slots?.actions({className})} data-slot="result-actions" {...props} />;
};

ResultRoot.displayName = "HeroUI.Result";
ResultIcon.displayName = "HeroUI.Result.Icon";
ResultTitle.displayName = "HeroUI.Result.Title";
ResultDescription.displayName = "HeroUI.Result.Description";
ResultActions.displayName = "HeroUI.Result.Actions";

export {ResultRoot, ResultIcon, ResultTitle, ResultDescription, ResultActions};
export type {
  ResultRootProps,
  ResultIconProps,
  ResultTitleProps,
  ResultDescriptionProps,
  ResultActionsProps,
};
