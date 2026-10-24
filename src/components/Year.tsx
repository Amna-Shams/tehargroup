"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** Current year, resolved on the client so static pages never go stale. */
export function Year() {
  const y = useSyncExternalStore(noop, () => new Date().getFullYear(), () => 2026);
  return <>{y}</>;
}
