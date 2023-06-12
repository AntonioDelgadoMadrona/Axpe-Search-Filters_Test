// CONTEXT
import { useAppContext } from "../../context/AppContext";
// STYLES
import "./Filters.css";

export function Filters() {
  const { filters, setFilters, displayValues, resetFilters, elements } = useAppContext();

  // CREATE ARRAYS OF UNIQUE VALUES
  const countries = [...new Set(elements.map((element) => element.country))];
  const versions = [...new Set(elements.map((element) => element.version))];

  return (
    <div className="Filters">
      <h3>Filters</h3>

      <div className="filters_1">
        <select
          name="country"
          value={filters.country}
          onChange={({ target }) => setFilters((prevFilters) => ({ ...prevFilters, [target.name]: target.value }))}
          data-testid="select-country"
        >
          <option value="all">Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          name="version"
          value={filters.version}
          onChange={({ target }) => setFilters((prevFilters) => ({ ...prevFilters, [target.name]: target.value }))}
          data-testid="select-version"
        >
          <option value="all">Version</option>
          {versions.map((version) => (
            <option key={version} value={version}>
              {version}
            </option>
          ))}
        </select>
        <button onClick={() => resetFilters()}>Clear all filters</button>
      </div>

      <div className="filters_2">
        {displayValues.map((key) => {
          if (filters[key] !== "all") {
            return (
              <button key={key} onClick={() => setFilters({ ...filters, [key]: "all" })}>
                {filters[key]} <span>x</span>
              </button>
            );
          }
        })}
      </div>

      <div className="filters_3">
        <span>🔎</span>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search..."
          value={filters.text}
          onChange={({ target }) => setFilters((prevFilters) => ({ ...prevFilters, [target.name]: target.value }))}
        />
      </div>
    </div>
  );
}
