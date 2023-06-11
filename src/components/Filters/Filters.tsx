// CONTEXT
import { useAppContext } from "../../context/AppContext";
// STYLES
import "./Filters.css";

export function Filters() {
  const { filters, setFilters, displayValues, resetFilters } = useAppContext();

  return (
    <div className="Filters">
      <h3>Filters</h3>

      <div className="filters_1">
        <select
          name="country"
          value={filters.country}
          onChange={({ target }) => setFilters((prevFilters) => ({ ...prevFilters, [target.name]: target.value }))}
        >
          <option value="all">Country</option>
          <option value="Spain">Spain</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
        <select
          name="version"
          value={filters.version}
          onChange={({ target }) => setFilters((prevFilters) => ({ ...prevFilters, [target.name]: target.value }))}
        >
          <option value="all">Version</option>
          <option value="Development">Development</option>
          <option value="Stage">Stage</option>
          <option value="Production">Production</option>
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
