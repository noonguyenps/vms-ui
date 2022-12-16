import React, { useState, useEffect } from "react";
import "./Home.scss";

import { Grid, Stack, Button, Box } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  return (
    <>
      <Stack spacing={2} className="container home">
        <Stack sx={{ margin: "10", fontSize:'24px', padding:"10px" }} direction='row' justifyContent='center' alignContent='center'>
          Hãy tin tưởng chúng tôi. Là nơi hỗ trợ lưu trữ cho bạn
        </Stack>
        <Box id="section3">
          <Box width="24%">
            <img
              style={{ maxHeight: "160px" }}
              src="https://res.cloudinary.com/duk2lo18t/image/upload/v1671208787/frontend/OIP_nkejoq.jpg"
              alt=""
            />
          </Box>
          <Box width="24%">
            <img
              style={{ maxHeight: "160px" }}
              src="https://res.cloudinary.com/duk2lo18t/image/upload/v1671208787/frontend/OIP_1_nloebm.jpg"
              alt=""
            />
          </Box>
          <Box width="24%">
            <img
              style={{ maxHeight: "160px" }}
              src="https://res.cloudinary.com/duk2lo18t/image/upload/v1671208787/frontend/OIP_2_nc697i.jpg"
              alt=""
            />
          </Box>
          <Box width="24%">
            <img
              style={{ maxHeight: "160px" }}
              src="https://res.cloudinary.com/duk2lo18t/image/upload/v1671208787/frontend/download_yjec76.jpg"
              alt=""
            />
          </Box>
        </Box>
        <Stack sx={{ margin: "10", fontSize:'24px', padding:"10px" }} direction='row' justifyContent='center' alignContent='center'>
          Trải nghiệm của bạn là quan trọng với chúng tôi
        </Stack>
        <Box id="section3">
          <Box width="20%">
            <img
              style={{ maxHeight: "200px" }}
              src="https://res.cloudinary.com/duk2lo18t/image/upload/v1671208787/frontend/download_1_picwjo.jpg"
              alt=""
            />
          </Box>
          <Box width="59%">
            <img
              style={{ maxHeight: "200px" }}
              src="https://res.cloudinary.com/duk2lo18t/image/upload/v1671208787/frontend/OIP_3_ckurk6.jpg"
              alt=""
            />
          </Box>
          <Box width="20%">
            <img
              style={{ maxHeight: "200px" }}
              src="https://res.cloudinary.com/duk2lo18t/image/upload/v1671208787/frontend/OIP_4_ehauog.jpg"
              alt=""
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
export default Home;
