"use client";

import { useMemo } from "react";
import { create } from "zustand";
import en from "./en";
import ta from "./ta";
import hi from "./hi";

export type Locale = "en" | "ta" | "hi";

export const locales: Array<{ code: Locale; label: string; native: string }> = [
  { code: "en", label: "English", native: "English" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "hi", label: "Hindi", native: "हिंदी" },
];

type Catalog = Record<string, unknown>;

const catalogs: Record<Locale, Catalog> = { en, ta, hi };

function getPath(obj: unknown, path: string): unknown {
  let current: unknown = obj;
  for (const part of path.split(".")) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

/** Resolve a dotted key like "hero.title" with en fallback. */
export function translate(locale: Locale, key: string): string {
  const value =
    getPath(catalogs[locale], key) ?? getPath(catalogs.en, key);
  return typeof value === "string" ? value : key;
}

const STORAGE_KEY = "sss-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "ta" || saved === "hi" || saved === "en") return saved;
  } catch {
    /* storage unavailable */
  }
  const nav = (navigator.language ?? "en").toLowerCase();
  if (nav.startsWith("ta")) return "ta";
  if (nav.startsWith("hi")) return "hi";
  return "en";
}

export const useLocaleStore = create<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>((set) => ({
  locale: getInitialLocale(),
  setLocale: (locale) => {
    set({ locale });
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage unavailable */
    }
    document.documentElement.lang = locale;
  },
}));

/** Hook returning the current locale's translator. Re-renders on switch. */
export function useT() {
  const locale = useLocaleStore((s) => s.locale);
  return useMemo(() => (key: string) => translate(locale, key), [locale]);
}

/** Hook returning the full resolved catalog for the active locale (en fallback for missing keys). */
export function useCatalog() {
  const locale = useLocaleStore((s) => s.locale);
  return useMemo<Catalog>(() => {
    const merged: Catalog = { ...catalogs.en };
    if (locale !== "en") {
      Object.assign(merged, catalogs[locale]);
    }
    return merged;
  }, [locale]);
}