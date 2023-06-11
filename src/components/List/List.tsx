// CONTEXT
import { useAppContext } from "../../context/AppContext";
// STYLES
import "./List.css";

export function List() {
  const { elements, filters } = useAppContext();

  const filteredElements = elements.filter((element) => {
    const textMatch = element.text.toLowerCase().includes(filters.text.toLowerCase());
    const countryMatch = element.country === filters.country || filters.country === "all";
    const versionMatch = element.version === filters.version || filters.version === "all";
    return textMatch && countryMatch && versionMatch;
  });

  return (
    <div className="List">
      <h3>List</h3>
      <div className="list_ul">
        {filteredElements.map((element) => {
          return (
            <div key={element.text}>
              <p>
                <span>Country:</span> {element.country}
              </p>
              <p>
                <span>Version:</span> {element.version}
              </p>
              <p>
                <span>Text:</span> {element.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
