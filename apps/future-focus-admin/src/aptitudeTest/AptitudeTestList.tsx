import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AptitudeTestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AptitudeTests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="testDescription" source="testDescription" />
        <TextField label="testName" source="testName" />
        <TextField label="testQuestions" source="testQuestions" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
