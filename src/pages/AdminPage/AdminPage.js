import { useState } from "react";
import CustomizedTables from "../../components/UI/Table/Table";
import classes from "./AdminPage.module.css";
import Button from "../../components/UI/Button/Button";
import BasicModal from "../../components/UI/Modal/Modal";

const AdminPage = (props) => {
  const [modelOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className={classes["table-margins"]}>
        <Button onClick={() => setModalOpen(true)}> Add Row </Button>
        <BasicModal open={modelOpen} setOpen={setModalOpen} />
        <CustomizedTables />
      </div>
    </div>
  );
};

export default AdminPage;
