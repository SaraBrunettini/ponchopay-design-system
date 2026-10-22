"use client";

import {createContext, useContext} from "react";
import {TextContext} from "react-aria-components/Text";

/**
 * Collection roots (TagGroup, etc.) whose children are fed to RAC CollectionBuilder
 * mount a Hidden tree *before* TextContext slots exist. Wrap those roots with
 * `FieldSlotsGate` so Description / ErrorMessage can wait for the visible pass.
 */
const FieldSlotsGateContext = createContext(false);

/**
 * Whether RAC `TextContext.slots[slot]` is available for rendering.
 * Outside a `FieldSlotsGate`, always `true` (standalone / TextField / etc.).
 * Inside a gate, `true` only after the collection root's visible Provider mounts.
 */
const useHasTextSlot = (slot: string): boolean => {
  const gated = useContext(FieldSlotsGateContext);

  const textContext = useContext(TextContext) as {
    slots?: Record<string, unknown>;
  } | null;

  if (!gated) return true;

  return textContext?.slots?.[slot] != null;
};

export {FieldSlotsGateContext, useHasTextSlot};
