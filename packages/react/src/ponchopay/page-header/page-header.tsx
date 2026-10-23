"use client";

import type {ComponentPropsWithRef} from "react";

import {pageHeaderVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * PageHeader Context
 * -----------------------------------------------------------------------------------------------*/
type PageHeaderContext = {
  slots?: ReturnType<typeof pageHeaderVariants>;
};

const PageHeaderContext = createContext<PageHeaderContext>({});

/* -------------------------------------------------------------------------------------------------
 * PageHeader Root
 * -----------------------------------------------------------------------------------------------*/
interface PageHeaderRootProps extends ComponentPropsWithRef<"div"> {}

const PageHeaderRoot = ({children, className, ...props}: PageHeaderRootProps) => {
  const slots = React.useMemo(() => pageHeaderVariants(), []);

  return (
    <PageHeaderContext.Provider value={{slots}}>
      <div className={slots.base({className})} data-slot="page-header" {...props}>
        {children}
      </div>
    </PageHeaderContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * PageHeader Toolbar
 * -----------------------------------------------------------------------------------------------*/
interface PageHeaderToolbarProps extends ComponentPropsWithRef<"div"> {}

const PageHeaderToolbar = ({className, ...props}: PageHeaderToolbarProps) => {
  const {slots} = useContext(PageHeaderContext);

  return <div className={slots?.toolbar({className})} data-slot="page-header-toolbar" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * PageHeader Actions
 * -----------------------------------------------------------------------------------------------*/
interface PageHeaderActionsProps extends ComponentPropsWithRef<"div"> {}

const PageHeaderActions = ({className, ...props}: PageHeaderActionsProps) => {
  const {slots} = useContext(PageHeaderContext);

  return <div className={slots?.actions({className})} data-slot="page-header-actions" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * PageHeader Title
 * -----------------------------------------------------------------------------------------------*/
interface PageHeaderTitleProps extends ComponentPropsWithRef<"h1"> {}

const PageHeaderTitle = ({children, className, ...props}: PageHeaderTitleProps) => {
  const {slots} = useContext(PageHeaderContext);

  return (
    <h1 className={slots?.title({className})} data-slot="page-header-title" {...props}>
      {children}
    </h1>
  );
};

/* -------------------------------------------------------------------------------------------------
 * PageHeader Description
 * -----------------------------------------------------------------------------------------------*/
interface PageHeaderDescriptionProps extends ComponentPropsWithRef<"p"> {}

const PageHeaderDescription = ({className, ...props}: PageHeaderDescriptionProps) => {
  const {slots} = useContext(PageHeaderContext);

  return (
    <p className={slots?.description({className})} data-slot="page-header-description" {...props} />
  );
};

PageHeaderRoot.displayName = "HeroUI.PageHeader";
PageHeaderToolbar.displayName = "HeroUI.PageHeader.Toolbar";
PageHeaderActions.displayName = "HeroUI.PageHeader.Actions";
PageHeaderTitle.displayName = "HeroUI.PageHeader.Title";
PageHeaderDescription.displayName = "HeroUI.PageHeader.Description";

export {
  PageHeaderRoot,
  PageHeaderToolbar,
  PageHeaderActions,
  PageHeaderTitle,
  PageHeaderDescription,
};
export type {
  PageHeaderRootProps,
  PageHeaderToolbarProps,
  PageHeaderActionsProps,
  PageHeaderTitleProps,
  PageHeaderDescriptionProps,
};
