import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "@/components/layout/breadcrumb";

describe("Breadcrumb", () => {
  it("renders a home link plus the provided trail", () => {
    render(<Breadcrumb items={[{ label: "Payment" }]} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Payment")).toBeInTheDocument();
  });

  it("marks the last item as current", () => {
    render(<Breadcrumb items={[{ label: "Privacy Policy" }]} />);
    expect(screen.getByText("Privacy Policy")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});