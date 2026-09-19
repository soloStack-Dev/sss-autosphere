import { describe, expect, it } from "vitest";
import { translate } from "@/lib/i18n";

describe("translate", () => {
  it("resolves an English key", () => {
    expect(translate("en", "hero.titlePart1")).toBe("Genuine Spares,");
  });

  it("resolves a Tamil key from the Tamil catalog", () => {
    expect(translate("ta", "hero.titlePart1")).toBe(
      "ஜெனுயின் ஸ்பேர்ஸ்,",
    );
  });

  it("resolves a Hindi key from the Hindi catalog", () => {
    expect(translate("hi", "hero.titlePart1")).toBe("असली स्पेयर्स,");
  });

  it("resolves array items via dotted paths", () => {
    expect(translate("en", "home.services.0.title")).toBe(
      "Automobile Spare Parts",
    );
    expect(translate("ta", "home.categories.0.title")).toBe(
      "கார் ஸ்பேர் பார்ட்ஸ்",
    );
    expect(translate("hi", "home.categories.1.title")).toBe(
      "कार बॉडी पार्ट्स",
    );
  });

  it("falls back to English when a key is missing in a locale", () => {
    expect(translate("ta", "missing.deep.key")).toBe("missing.deep.key");
  });

  it("falls back to the key when missing everywhere", () => {
    expect(translate("en", "not.defined.anywhere")).toBe(
      "not.defined.anywhere",
    );
  });
});