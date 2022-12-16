/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {
  Stack,
  IconButton,
  Button,
  Box,
  TextField,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";

function ForgetPassword(props) {
  //const dispatch = useDispatch();
  return (
    <Stack direction="row">
      <Stack sx={{ flex: 5 }} spacing={2}>
        <Box>
          <IconButton onClick={props.handleReturnLogin}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <h4 style={{ fontSize: "24px" }}>Quên mật khẩu ?</h4>
        <p style={{ fontSize: "15px" }}>
          Vui lòng nhập thông tin tài khoản để lấy lại mật khẩu
        </p>
        <form>
          <Stack spacing={2}>
            <Stack>
              <TextField
                label="Email"
                variant="standard"
              />
            </Stack>

            <Button
              variant="contained"
              color="error"
            >
              Lấy lại mật khẩu
            </Button>
          </Stack>
        </form>
      </Stack>
      <span style={{ position: "absolute", top: 0, right: 0 }}>
        <IconButton onClick={props.closeModalForgetPWD}>
          <CloseIcon />
        </IconButton>
      </span>

    </Stack>
  );
}

export default ForgetPassword;
