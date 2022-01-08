import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const { open, setOpen } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <label for="fname">Desert name:</label>
            <input type="text" id="name" name="name" value=""></input>
            <label for="lname">Calories:</label>
            <input type="text" id="calories" name="calories" value=""></input>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
