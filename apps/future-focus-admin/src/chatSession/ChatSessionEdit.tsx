import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CounselorTitle } from "../counselor/CounselorTitle";
import { UserTitle } from "../user/UserTitle";

export const ChatSessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
