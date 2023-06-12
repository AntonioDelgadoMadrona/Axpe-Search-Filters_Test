// DEPENDENCIES
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const AllTheProviders = ({ children }: any) => {
  return children;
};

const customRender = (
  ui: JSX.Element,
  options: RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement> | undefined = {}
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

export { userEvent };

// override render method
export { customRender as render };
