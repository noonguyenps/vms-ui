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
              src="https://th.bing.com/th/id/OIP.DdOqmHLCBPrDUFc0mdC_rAHaEK?pid=ImgDet&rs=1"
              alt=""
            />
          </Box>
          <Box width="24%">
            <img
              style={{ maxHeight: "160px" }}
              src="https://th.bing.com/th/id/OIP.WWmuZi-NHJ2nCT_IejWtGQHaE4?pid=ImgDet&w=1024&h=676&rs=1"
              alt=""
            />
          </Box>
          <Box width="24%">
            <img
              style={{ maxHeight: "160px" }}
              src="https://th.bing.com/th/id/OIP.Qm0veDaTuxXLa_RTtdcRnAHaEK?pid=ImgDet&rs=1"
              alt=""
            />
          </Box>
          <Box width="24%">
            <img
              style={{ maxHeight: "160px" }}
              src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Box>
          <Box width="59%">
            <img
              style={{ maxHeight: "200px" }}
              src="https://th.bing.com/th/id/OIP.NZtfot858OjoU8G0Y5TE9AHaEo?w=277&h=180&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
          </Box>
          <Box width="20%">
            <img
              style={{ maxHeight: "200px" }}
              src="https://th.bing.com/th/id/OIP.GfmPuOsPm0Jkc_d0AFTD-QHaFj?w=239&h=180&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
export default Home;