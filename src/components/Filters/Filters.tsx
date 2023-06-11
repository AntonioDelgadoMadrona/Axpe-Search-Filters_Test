// DEPENDENCIES
import { useState } from "react";
// STYLES
import "./Filters.css";

interface FiltersProps {
  country: string;
  version: string;
  text: string;
}

export function Filters() {
  const displayValues: String[] = ["country", "version"];
  const initialState: FiltersProps = {
    country: "all",
    version: "all",
    text: "",
  };
  const [filters, setFilters] = useState<FiltersProps>({ ...initialState });

  const handleFilter = ({ target }: any) => {
    const { name, value } = target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="Filters">
      <h3>Filters</h3>

      <div className="filters_1">
        <select name="country" value={filters.country} onChange={handleFilter}>
          <option value="all">Country</option>
          <option value="Spain">Spain</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
        <select name="version" value={filters.version} onChange={handleFilter}>
          <option value="all">Version</option>
          <option value="Development">Development</option>
          <option value="Stage">Stage</option>
          <option value="Production">Production</option>
        </select>
        <button onClick={() => setFilters({ ...initialState })}>Clear all filters</button>
      </div>

      <div className="filters_2">
        {displayValues.map((key, index) => {
          if (filters[key] !== initialState[key]) {
            return (
              <button key={index} onClick={() => setFilters({ ...filters, [key]: "all" })}>
                {filters[key]} <span>x</span>
              </button>
            );
          }
        })}
      </div>

      <div className="filters_3">
        <span>🔎</span>
        <input type="text" name="text" id="text" placeholder="Search..." value={filters.text} onChange={handleFilter} />
      </div>

      {JSON.stringify(filters)}
    </div>
  );
}
