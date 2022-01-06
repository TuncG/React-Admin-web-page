import { useState } from "react";
import Card from "../UI/Card/Card";
import CustomizedTables from "../UI/Table/Table";
import classes from "./AdminPage.module.css";
import Button from "../UI/Button/Button";
import BasicModal from "../UI/Modal/Modal";

const test = () => {};

const AdminPage = (props) => {
  const [state, setState] = useState(true);
  return (
    <div>
      <div className={classes["table-margins"]}>
        <Button onClick={() => setState(false)}> Add Row </Button>
        {state === false && <BasicModal />}
        <CustomizedTables />
      </div>
    </div>
  );
};

export default AdminPage;
