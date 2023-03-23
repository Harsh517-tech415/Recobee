import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const username = useRef(),
    password = useRef();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        mt: "10%",
        ml: { sm: "15%", lg: "45%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        width: "450px",
        border: "2px solid orange",
      }}
    >
      <Stack sx={{}}>
        <Typography sx={{ display: "flex", justifyContent: "left" }}>
          Username
        </Typography>
        <input
          ref={username}
          placeHolder="Enter Username"
          style={{
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            width: "414px",
            height: "41.6px",
          }}
        />
        <Typography sx={{ display: "flex", justifyContent: "left", mt: "4%" }}>
          Password
        </Typography>
        <input
          type="password"
          ref={password}
          placeHolder="Enter Password"
          style={{
            fontSize: "16px",
            display: "flex",
            justifyContent: "center",
            width: "414px",
            height: "41.6px",
          }}
        />
        <Button
          variant="contained"
          color="warning"
          sx={{ width: "414px", mt: "4%" }}
          onClick={() => {
            if (username.current.value === "xyz" && password.current.value === "xyz")
             {
              navigate("/");
            }
          }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
