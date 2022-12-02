import { useField } from "formik";
import * as React from "react";

interface IInputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  textArea?: boolean;
}

const InputField: React.FunctionComponent<IInputFieldProps> = ({
  label,
  textArea,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <label htmlFor={field.name} style={{ fontWeight: "600", fontSize: 20 }}>
        {label}
      </label>
      {textArea ? (
        <textarea
          style={{
            width: "100%",
            padding: "15px 10px",
            fontSize: "15px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder}
        ></textarea>
      ) : (
        <input
          style={{
            height: "30px",
            width: "100%",
            padding: "15px 10px",
            fontSize: "15px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder}
        ></input>
      )}
      {error ? (
        <label
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontWeight: "600",
          }}
        >
          {error}
        </label>
      ) : null}
    </div>
  );
};

export default InputField;
