import React from "react";
import Card from "../UI/Card/Card";
import CustomizedTables from "../UI/Table/Table";
import classes from "./AdminPage.module.css";

const AdminPage = (props) => {
  console.log("heeeeeeeeeeeeee");
  return (
    <div>
      <div className={classes["table-margins"]}>
        <CustomizedTables />
      </div>
    </div>
  );
};

export default AdminPage;
