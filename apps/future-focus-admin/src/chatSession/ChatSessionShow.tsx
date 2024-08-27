import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COUNSELOR_TITLE_FIELD } from "../counselor/CounselorTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ChatSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="chatContent" source="chatContent" />
        <ReferenceField
          label="Counselor"
          source="counselor.id"
          reference="Counselor"
        >
          <TextField source={COUNSELOR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="sessionId" source="sessionId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
