import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CareerPathEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="careerDescription"
          multiline
          source="careerDescription"
        />
        <TextInput label="careerName" source="careerName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
