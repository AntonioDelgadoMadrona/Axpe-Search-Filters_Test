// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../utils/test-utils";
// CONTEXT
import { AppProvider, useAppContext } from "./AppContext";
// MOCKS
vi.mock("./AppContext.tsx", async () => {
  const actual: Object = await vi.importActual("./AppContext.tsx");
  return {
    ...actual,
    useAppContext: vi.fn().mockReturnValue({
      filters: { country: "Spain", version: "all", text: "" },
    }),
  };
});

describe("AppContext", () => {
  it("should return the Context Provider", async () => {
    const ChildComponent = () => {
      const { filters } = useAppContext();
      return <p>{filters.country}</p>;
    };
    render(
      <AppProvider>
        <ChildComponent />
      </AppProvider>
    );

    expect(screen.getByText("Spain")).toBeTruthy();
  });
});
