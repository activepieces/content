'use client'
import { MutableRefObject, useEffect, useRef } from 'react';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface CollapsiblePropertiesProps {
  props: Record<string, any>;
  expand: boolean;
}

export function CollapsibleProperties(props: CollapsiblePropertiesProps) {
  const propertiesDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
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
  const propertyTypeIcons: Record<string, string> = {
    SHORT_TEXT: "text.svg",
    LONG_TEXT: "text.svg",
    DROPDOWN: "dropdown.svg",
    STATIC_DROPDOWN: "dropdown.svg",
    NUMBER: "number.svg",
    CHECKBOX: "checkbox.svg",
    OAUTH2: "connection.svg",
    SECRET_TEXT: "connection.svg",
    ARRAY: "array.svg",
    OBJECT: "dictionary.svg",
    BASIC_AUTH: "connection.svg",
    JSON: "dictionary.svg",
    MULTI_SELECT_DROPDOWN: "dropdown.svg",
    STATIC_MULTI_SELECT_DROPDOWN: "dropdown.svg",
    DYNAMIC: "Dynamic",
    CUSTOM_AUTH: "connection.svg",
    DATE_TIME: "date.svg",
    FILE: "files.svg",
  };
  useEffect(() => {
    if (props.expand) {
      propertiesDiv.current?.style.setProperty("height", propertiesDiv.current?.scrollHeight + "px");
    }
    else {
      propertiesDiv.current?.style.setProperty("height", "0px");
    }
  }, [props.expand])



  return (
    <div className="text-white overflow-hidden h-0 bg-[#1B1C20]  transition-all px-[47px]  " ref={propertiesDiv}>
      <div>
        {Object.entries(props.props).filter(([key, prpoperty]) => {
          return prpoperty.type !== "DYNAMIC";
        }).map(([key, property]) => (
          <div
            key={key}
            className='flex gap-[25px] items-center'
          >
            <Image src={"/properties_icons/" + propertyTypeIcons[property.type]} alt={propertyTypeStrings[property.type]} height={25} width={25}  ></Image>
            <div>
              <div className="text-white text-[22px] font-semibold leading-[60px] tracking-wide">
                {property.displayName}
              </div>
            </div>
            {property.required && <div className="w-[104px]  h-[30px] p-[7px] bg-zinc-800 rounded justify-center items-center gap-2.5 inline-flex">
              <div className="text-zinc-300 text-[22px] font-normal leading-[60px] tracking-wide">Required</div>
            </div>}
          </div>
        ))}
      </div>
    </div>

  );
}

export default CollapsibleProperties;
