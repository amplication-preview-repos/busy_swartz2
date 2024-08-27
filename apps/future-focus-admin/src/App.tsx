import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AptitudeTestList } from "./aptitudeTest/AptitudeTestList";
import { AptitudeTestCreate } from "./aptitudeTest/AptitudeTestCreate";
import { AptitudeTestEdit } from "./aptitudeTest/AptitudeTestEdit";
import { AptitudeTestShow } from "./aptitudeTest/AptitudeTestShow";
import { CounselorList } from "./counselor/CounselorList";
import { CounselorCreate } from "./counselor/CounselorCreate";
import { CounselorEdit } from "./counselor/CounselorEdit";
import { CounselorShow } from "./counselor/CounselorShow";
import { CareerPathList } from "./careerPath/CareerPathList";
import { CareerPathCreate } from "./careerPath/CareerPathCreate";
import { CareerPathEdit } from "./careerPath/CareerPathEdit";
import { CareerPathShow } from "./careerPath/CareerPathShow";
import { ChatSessionList } from "./chatSession/ChatSessionList";
import { ChatSessionCreate } from "./chatSession/ChatSessionCreate";
import { ChatSessionEdit } from "./chatSession/ChatSessionEdit";
import { ChatSessionShow } from "./chatSession/ChatSessionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FutureFocus"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AptitudeTest"
          list={AptitudeTestList}
          edit={AptitudeTestEdit}
          create={AptitudeTestCreate}
          show={AptitudeTestShow}
        />
        <Resource
          name="Counselor"
          list={CounselorList}
          edit={CounselorEdit}
          create={CounselorCreate}
          show={CounselorShow}
        />
        <Resource
          name="CareerPath"
          list={CareerPathList}
          edit={CareerPathEdit}
          create={CareerPathCreate}
          show={CareerPathShow}
        />
        <Resource
          name="ChatSession"
          list={ChatSessionList}
          edit={ChatSessionEdit}
          create={ChatSessionCreate}
          show={ChatSessionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
