/* eslint-disable-next-line */
export interface CollapsiblePropertiesProps {
  props: Record<string, any>;
}

export function CollapsibleProperties(props: CollapsiblePropertiesProps) {

  const propertyTypeStrings: Record<string, string> = {
    SHORT_TEXT: "Short Text",
    LONG_TEXT: "Long Text",
    DROPDOWN: "Dropdown",
    STATIC_DROPDOWN: "Static Dropdown",
    NUMBER: "Number",
    CHECKBOX: "Checkbox",
    OAUTH2: "OAuth2",
    SECRET_TEXT: "Secret Text",
    ARRAY: "Array",
    OBJECT: "Object",
    BASIC_AUTH: "Basic Auth",
    JSON: "JSON",
    MULTI_SELECT_DROPDOWN: "Multi Dropdown",
    STATIC_MULTI_SELECT_DROPDOWN: "Static Multi Dropdown",
    DYNAMIC: "Dynamic",
    CUSTOM_AUTH: "Custom Auth",
    DATE_TIME: "Date Time",
    FILE: "File",
  };
  function isSensitiveType(type: string): boolean {
    return ["CUSTOM_AUTH", "OAUTH2", "SECRET_TEXT", "BASIC_AUTH"].includes(
      type
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
      />
      <div className="h-12 w-full pl-8 flex items-center">
        <h1 className="font-normal text-gray-400">Show Properties</h1>
      </div>

      <div className="absolute top-[15px] left-0 text-gray-400 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <div className="text-white overflow-hidden transition-transform duration-500 max-h-0 peer-checked:max-h-fit">
        <div>
          {Object.values(props.props).map((property) => (
            <div
              className="border-b-[1px] border-separator py-3 relative"
              key={property.name}
            >
              <div>
                <span className="font-normal text-white block">
                  {property.displayName}
                  <span className="ml-2 text-muted">Required</span>
                </span>
                <span className="font-normal text-muted absolute top-3 right-3">
                  {propertyTypeStrings[property.type]}
                </span>
              </div>
              <div className="text-muted text-sm mt-2">
                {isSensitiveType(property.type) ? null : (
                  <p>
                    {property.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleProperties;
