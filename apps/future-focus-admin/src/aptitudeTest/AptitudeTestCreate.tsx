import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AptitudeTestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="testDescription" multiline source="testDescription" />
        <TextInput label="testName" source="testName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
