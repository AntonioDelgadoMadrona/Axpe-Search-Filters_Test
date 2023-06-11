// STYLES
import "./List.css";

export function List() {
  const elements = [
    { country: "Spain", version: "Development", text: "Spain Development" },
    { country: "Spain", version: "Stage", text: "Spain Stage" },
    { country: "Spain", version: "Production", text: "Spain Production" },
    { country: "France", version: "Development", text: "France Development" },
    { country: "France", version: "Stage", text: "France Stage" },
    { country: "France", version: "Production", text: "France Production" },
    { country: "Germany", version: "Development", text: "Germany Development" },
    { country: "Germany", version: "Stage", text: "Germany Stage" },
    { country: "Germany", version: "Production", text: "Germany Production" },
  ];
  return (
    <div className="List">
      <h3>List</h3>
      <div className="list_ul">
        {elements.map((element) => {
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
