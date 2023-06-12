// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { elements } from "../../assets/elements";
// COMPONENTS
import { Filters } from "./Filters";
// MOCKS
vi.mock("../../context/AppContext", () => ({
  useAppContext: vi.fn().mockReturnValue({
    filters: { country: "all", version: "all", text: "" },
    setFilters: vi.fn(),
    displayValues: ["country", "version"],
    resetFilters: vi.fn(),
    elements: [...elements],
  }),
}));

describe("Filters component", () => {
  beforeEach(() => {
    render(<Filters />);
  });

  test("renders Filters component", () => {
    const filtersHeading = screen.getByText("Filters");
    expect(filtersHeading).toBeTruthy();
  });

  test("the initial selected option is 'all'", () => {
    const countrySelect = screen.getByTestId("select-country");
    const versionSelect = screen.getByTestId("select-version");

    const countryOption = countrySelect.getElementsByTagName("option");
    const versionOption = versionSelect.getElementsByTagName("option");

    expect(countryOption[0].selected).toBeTruthy();
    expect(countryOption[1].selected).toBeFalsy();
    expect(countryOption[2].selected).toBeFalsy();

    expect(versionOption[0].selected).toBeTruthy();
    expect(versionOption[1].selected).toBeFalsy();
    expect(versionOption[2].selected).toBeFalsy();
  });
});
