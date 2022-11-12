import { Box } from "@mui/system";
import React from "react";

const DefaultImg = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #18264f",
          borderRadius: 5,
          width: "20vh",
          height: "20vh",
          backgroundImage: "url(images/default.jpg)",
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}
      ></Box>
    </>
  );
};

export default DefaultImg;
