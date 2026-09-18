import { beforeEach, describe, expect, it, vi } from "vitest";
import { useUIStore } from "@/store/ui-store";

beforeEach(() => {
  useUIStore.setState({
    mobileMenuOpen: false,
    enquiryDrawerOpen: false,
    toasts: [],
  });
});

describe("useUIStore", () => {
  it("toggles the mobile menu", () => {
    expect(useUIStore.getState().mobileMenuOpen).toBe(false);
    useUIStore.getState().toggleMobileMenu();
    expect(useUIStore.getState().mobileMenuOpen).toBe(true);
    useUIStore.getState().toggleMobileMenu();
    expect(useUIStore.getState().mobileMenuOpen).toBe(false);
  });

  it("opens the enquiry drawer and closes the menu", () => {
    useUIStore.setState({ mobileMenuOpen: true });
    useUIStore.getState().openEnquiryDrawer();
    const state = useUIStore.getState();
    expect(state.enquiryDrawerOpen).toBe(true);
    expect(state.mobileMenuOpen).toBe(false);
  });

  it("pushes, then auto-dismisses toasts", () => {
    vi.useFakeTimers();
    useUIStore.getState().pushToast({ title: "Saved", tone: "success" });
    expect(useUIStore.getState().toasts.length).toBe(1);

    vi.advanceTimersByTime(5100);
    expect(useUIStore.getState().toasts.length).toBe(0);
    vi.useRealTimers();
  });

  it("caps queued toasts at a rolling window", () => {
    const { pushToast } = useUIStore.getState();
    pushToast({ title: "a", tone: "info" });
    pushToast({ title: "b", tone: "info" });
    pushToast({ title: "c", tone: "info" });
    expect(useUIStore.getState().toasts.length).toBe(3);
  });
});