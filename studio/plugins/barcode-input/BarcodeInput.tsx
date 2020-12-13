import * as React from "react";
import { FormBuilderInput, patches } from "part:@sanity/form-builder";
import Fieldset from "part:@sanity/components/fieldsets/default";
import Barcode from "react-barcode";
import styles from "./BarcodeInput.css";

const { setIfMissing } = patches;


interface Field {
  name: string;
  type: string;
}

interface FieldPatchEvent {
  prefixAll: (value: string) => FieldPatchEvent;
  prepend: (value: any) => FieldPatchEvent;
}

interface Props {
  level: number;
  value: {
    barcode: string;
    format?: string;
  };
  onChange: (value: FieldPatchEvent) => any;
  type: {
    name: string;
    title: string;
    description: string;
    fields: Field[]
  };
  onFocus: () => any;
  onBlur: () => any;
}

interface State {
  valid: boolean;
}

export default class BarcodeInput extends React.PureComponent<Props, State> {
  state = {
    valid: true,
  };

  handleFieldChange = (field: Field, fieldPatchEvent: FieldPatchEvent) => {
    const { onChange, type } = this.props;
    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    );
  };

  handleValid = (valid: boolean) => {
    this.setState({ valid });
  };

  render() {
    const { level, type, value } = this.props;
    const { valid } = this.state;
    return (
      <Fieldset
        level={level}
        legend={type.title}
        description={type.description}
      >
        <div className={valid ? styles.barcodeValid : styles.barcodeInvalid}>
          {value && value.barcode && (
            <Barcode
              textAlign="center"
              value={value.barcode}
              format={value.format || ""}
              valid={this.handleValid}
            />
          )}
        </div>
        {!valid && (
          <p className={styles.errorMessage}>Not valid {value.format}</p>
        )}
        <div className={styles.fieldWrapper}>
          {type.fields.map((field) => (
            <FormBuilderInput
              key={field.name}
              type={field.type}
              //@ts-ignore
              value={value && value[field.name]}
              onChange={(patchEvent: FieldPatchEvent) =>
                this.handleFieldChange(field, patchEvent)
              }
              onBlur={this.props.onBlur}
              onFocus={this.props.onFocus}
            />
          ))}
        </div>
      </Fieldset>
    );
  }
}
