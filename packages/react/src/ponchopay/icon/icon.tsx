"use client";

import type {IconVariants} from "@heroui/styles";
import type {LucideIcon} from "lucide-react";
import type {ComponentPropsWithRef, ReactNode} from "react";

import {iconVariants} from "@heroui/styles";
import {icons} from "lucide-react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Payment brand marks (not in Lucide). Apple and Klarna follow currentColor; Google keeps its colours.
 * -----------------------------------------------------------------------------------------------*/
const BRAND_ICONS: Record<string, {viewBox: string; content: ReactNode}> = {
  "brand-apple": {
    content: (
      <path
        d="M14.1 10.6c0-2.3 1.7-3.4 1.8-3.5-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.7-2.8-.7-1.5 0-2.8.8-3.6 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.2 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.6 1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.9-2.2-3.3zM11.7 3.6c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2z"
        fill="currentColor"
      />
    ),
    viewBox: "0 0 17 20",
  },
  "brand-google": {
    content: (
      <>
        <path
          d="M45.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.8h12c-.2 2-1.5 5-4.4 7l6.8 5.3c4-3.7 6.7-9.2 6.7-16z"
          fill="#4285F4"
        />
        <path
          d="M24 46c6 0 11-2 14.4-5.4l-6.8-5.3c-1.9 1.3-4.4 2.2-7.6 2.2-5.9 0-10.9-3.9-12.7-9.3l-7.1 5.5C7.7 41 15.3 46 24 46z"
          fill="#34A853"
        />
        <path
          d="M11.3 28.2A13.4 13.4 0 0 1 10.6 24c0-1.5.3-2.9.7-4.2l-7.1-5.6A22 22 0 0 0 2 24c0 3.6.9 6.9 2.2 9.8z"
          fill="#FBBC05"
        />
        <path
          d="M24 10.2c4.2 0 7 1.8 8.6 3.3l6-5.9C34.9 4.1 30 2 24 2 15.3 2 7.7 7 4.2 14.2l7.1 5.6C13.1 14.1 18.1 10.2 24 10.2z"
          fill="#EA4335"
        />
      </>
    ),
    viewBox: "0 0 48 48",
  },
  "brand-klarna": {
    content: (
      <>
        <path
          d="M3 2.5h3.2v15H3zM13.6 2.5h-3.3a7.6 7.6 0 0 1-3.1 6.2l-1.2.9 5 7.9h4l-4.4-7a10.7 10.7 0 0 0 3-8z"
          fill="currentColor"
        />
        <circle cx="16.3" cy="15.7" fill="currentColor" r="1.8" />
      </>
    ),
    viewBox: "0 0 20 20",
  },
};

/** Kebab-case Lucide name ("trash-2", "circle-check") -> its PascalCase export ("Trash2", "CircleCheck"). */
const toLucideKey = (name: string) =>
  name.replace(/(^|-)([a-z0-9])/g, (_match, _sep, char: string) => char.toUpperCase());

/* -------------------------------------------------------------------------------------------------
 * Icon Root
 * -----------------------------------------------------------------------------------------------*/
interface IconRootProps extends Omit<ComponentPropsWithRef<"span">, "children"> {
  /** Accessible name. Without it the icon is decorative (`aria-hidden`). */
  label?: string;
  /** Kebab-case Lucide name (e.g. `piggy-bank`), or `brand-apple` / `brand-google` / `brand-klarna`. */
  name: string;
  /** Width and height in pixels. @default 16 */
  size?: number;
  /** Rotate continuously, e.g. `loader-circle` while loading. */
  spin?: IconVariants["spin"];
  /** Lucide stroke width. @default 2 */
  strokeWidth?: number;
}

const IconRoot = ({
  className,
  label,
  name,
  size = 16,
  spin,
  strokeWidth = 2,
  style,
  ...props
}: IconRootProps) => {
  const brand = BRAND_ICONS[name];
  const Lucide = (icons as Record<string, LucideIcon | undefined>)[toLucideKey(name)];

  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={iconVariants({className, spin})}
      data-icon={name}
      data-slot="icon"
      role={label ? "img" : undefined}
      style={{height: size, width: size, ...style}}
      {...props}
    >
      {brand ? (
        <svg height={size} viewBox={brand.viewBox} width={size}>
          {brand.content}
        </svg>
      ) : Lucide ? (
        <Lucide size={size} strokeWidth={strokeWidth} />
      ) : null}
    </span>
  );
};

IconRoot.displayName = "HeroUI.Icon";

export {IconRoot};
export type {IconRootProps};
