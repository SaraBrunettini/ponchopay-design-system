"use client";

import type {PageVariants} from "@heroui/styles";
import type {ComponentPropsWithRef} from "react";

import {pageVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";

/* -------------------------------------------------------------------------------------------------
 * Page Context
 * -----------------------------------------------------------------------------------------------*/
type PageContext = {
  slots?: ReturnType<typeof pageVariants>;
};

const PageContext = createContext<PageContext>({});

/* -------------------------------------------------------------------------------------------------
 * Page Root
 * -----------------------------------------------------------------------------------------------*/
interface PageRootProps extends ComponentPropsWithRef<"div">, PageVariants {}

const PageRoot = ({children, className, variant, ...props}: PageRootProps) => {
  const slots = React.useMemo(() => pageVariants({variant}), [variant]);

  return (
    <PageContext.Provider value={{slots}}>
      <div className={slots.base({className})} data-slot="page" {...props}>
        {children}
      </div>
    </PageContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Page Header
 * -----------------------------------------------------------------------------------------------*/
interface PageHeaderSlotProps extends ComponentPropsWithRef<"header"> {}

const PageHeaderSlot = ({className, ...props}: PageHeaderSlotProps) => {
  const {slots} = useContext(PageContext);

  return <header className={slots?.header({className})} data-slot="page-header-slot" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Page Content
 * -----------------------------------------------------------------------------------------------*/
interface PageContentProps extends ComponentPropsWithRef<"main"> {}

const PageContent = ({className, ...props}: PageContentProps) => {
  const {slots} = useContext(PageContext);

  return <main className={slots?.content({className})} data-slot="page-content" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Page Footer
 * -----------------------------------------------------------------------------------------------*/
interface PageFooterProps extends ComponentPropsWithRef<"footer"> {}

const PageFooter = ({className, ...props}: PageFooterProps) => {
  const {slots} = useContext(PageContext);

  return <footer className={slots?.footer({className})} data-slot="page-footer" {...props} />;
};

PageRoot.displayName = "HeroUI.Page";
PageHeaderSlot.displayName = "HeroUI.Page.Header";
PageContent.displayName = "HeroUI.Page.Content";
PageFooter.displayName = "HeroUI.Page.Footer";

export {PageRoot, PageHeaderSlot, PageContent, PageFooter};
export type {PageRootProps, PageHeaderSlotProps, PageContentProps, PageFooterProps};
