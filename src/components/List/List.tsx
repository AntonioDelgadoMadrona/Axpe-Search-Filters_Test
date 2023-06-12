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
        {filteredElements.map((element) => (
          <div key={element.text}>
            {Object.keys(element).map((key) => (
              <p key={element[key]}>
                <span>{key}:</span> {element[key]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
