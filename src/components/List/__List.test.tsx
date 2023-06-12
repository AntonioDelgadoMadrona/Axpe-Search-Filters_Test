// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { elements } from "../../assets/elements";
// COMPONENTS
import { List } from "./List";
// MOCKS
vi.mock("../../context/AppContext", () => ({
  useAppContext: vi.fn().mockReturnValue({
    filters: { country: "Spain", version: "Development", text: "" },
    elements: [
      { country: "Spain", version: "Development", text: "Element 1" },
      { country: "Spain", version: "Stage", text: "Element 2" },
      { country: "Spain", version: "Production", text: "Element 3" },
    ],
  }),
}));

describe("Filters component", () => {
  test("render properly", () => {
    render(<List />);
    expect(screen.getByText("List")).toBeTruthy();
    expect(screen.getByText("Element 1")).toBeTruthy();
  });
});
