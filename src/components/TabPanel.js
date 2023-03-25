import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DiscreteSlider from "./DiscreteSlider";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    catId: "1",
    price: 2.973,
    title: "Standart Ped",
  },
  {
    id: "p2",
    catId: "1",
    price: 3.327,
    title: "Süper Ped",
  },
  {
    id: "p3",
    catId: "1",
    price: 3.748,
    title: "Süper+ Ped",
  },

  {
    id: "p4",
    catId: "2",
    price: 1.972,
    title: "Günlük Ped",
  },
  {
    id: "p5",
    catId: "2",
    price: 2.092,
    title: "Süper Günlük Ped",
  },
  {
    id: "p6",
    catId: "3",
    price: 3.377,
    title: "Mini Tampon",
  },

  {
    id: "p7",
    catId: "3",
    price: 3.701,
    title: "Standart Tampon",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Product Tabs"
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: "black" } }}
          centered
        >
          <Tab
            sx={{ textTransform: "none", width: "33.3%" }}
            label="beije Ped"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none", width: "33.4%" }}
            label="beije Günlük Ped"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none", width: "33.3%" }}
            label="beije Tampon"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DiscreteSlider item={DUMMY_PRODUCTS[0]} />
        <DiscreteSlider item={DUMMY_PRODUCTS[1]} />
        <DiscreteSlider item={DUMMY_PRODUCTS[2]} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DiscreteSlider item={DUMMY_PRODUCTS[3]} maxVal={100} />
        <DiscreteSlider item={DUMMY_PRODUCTS[4]} maxVal={100} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DiscreteSlider item={DUMMY_PRODUCTS[5]} />
        <DiscreteSlider item={DUMMY_PRODUCTS[6]} />
      </TabPanel>
    </Box>
  );
}
