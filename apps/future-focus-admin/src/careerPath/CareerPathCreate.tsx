import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CareerPathCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="careerDescription"
          multiline
          source="careerDescription"
        />
        <TextInput label="careerName" source="careerName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
