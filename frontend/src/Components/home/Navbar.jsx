import React from "react";
import { navData } from "../../constants/data";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductByCategory } from "../../redux/actions/productAction";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCategory = (category) => {
    let modifiedCategory;

    switch (category) {
      case "Grocery":
        modifiedCategory = "Grocery";
        break;
      case "Mobiles":
        modifiedCategory = "Mobiles";
        break;
      case "Fashion":
        modifiedCategory = "Fashion";
        break;
      case "Electronics":
        modifiedCategory = "Electronics";
        break;
      case "Home & Furniture":
        modifiedCategory = "Homefurniture";
        break;
      case "Appliances":
        modifiedCategory = "Appliance";
        break;
      case "Beauty, Toys & More":
        modifiedCategory = "Beautyandtoys";
        break;
      case "Two Wheelers":
        modifiedCategory = "Twowheelers";
        break;
      default:
        modifiedCategory = "Unknown";
        break;
    }
    dispatch(getProductByCategory(modifiedCategory));
    navigate(`/product/category/${category}`);
  };
  return (
    <Box>
      <Box
        paddingX="10px"
        paddingY="8px"
        bgcolor="#fff"
        display="flex"
        justifyContent="space-between"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      >
        {navData.map((items) => (
          <Box padding="12px 8px" textAlign="center" key={items.text}>
            <img
              src={items.url}
              alt="items"
              width="64"
              onClick={() => handleCategory(items.text)}
            />

            <Typography
              fontSize="14px"
              fontWeight="700"
              fontFamily="inherit"
              marginTop="10px"
              width="6.5rem"
            >
              {items.text}{" "}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Navbar;
