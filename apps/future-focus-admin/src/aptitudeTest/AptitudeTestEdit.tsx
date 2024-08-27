import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AptitudeTestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="testDescription" multiline source="testDescription" />
        <TextInput label="testName" source="testName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
