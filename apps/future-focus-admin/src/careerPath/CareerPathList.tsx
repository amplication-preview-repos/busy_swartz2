import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CareerPathList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CareerPaths"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="careerDescription" source="careerDescription" />
        <TextField label="careerName" source="careerName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="stepsToAchieve" source="stepsToAchieve" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
