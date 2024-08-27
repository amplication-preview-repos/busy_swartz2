import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CounselorTitle } from "../counselor/CounselorTitle";
import { UserTitle } from "../user/UserTitle";

export const ChatSessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="counselor.id"
          reference="Counselor"
          label="Counselor"
        >
          <SelectInput optionText={CounselorTitle} />
        </ReferenceInput>
        <TextInput label="sessionId" source="sessionId" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
