import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <Box sx={{ width: 280, display: "flex", alignItems: "center" }}>
      <span className="w-[23px] h-[20px] rounded-full bg-[#46A358] "></span>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        sx={{
          color: "#46A358",
          marginLeft: "13px",
        }}
      />
    </Box>
  );
}
