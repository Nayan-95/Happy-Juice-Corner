import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Card, CardContent, Grid, Container, useMediaQuery, useTheme } from "@mui/material";

const menu = {
  maggi: [
    { item: "Plain Maggi", price: 25 },
    { item: "Veg Maggi", price: 30 },
    { item: "Egg Maggi", price: 35 },
    { item: "Double Egg Maggi", price: 50 },
    { item: "Cheese Maggi", price: 40 },
    { item: "Pouch Maggi", price: 40 },
  ],
  egg: [
    { item: "Double Egg Omelet", price: 30 },
    { item: "Bread Omelet", price: 40 },
    { item: "Boiled Egg", price: 30 },
  ],
  beverages: [
    { item: "Hot Milk", price: 20 },
    { item: "Horlicks", price: 25 },
    { item: "Bournvita", price: 20 },
    { item: "Hot Coffee", price: 15 },
    { item: "Cold Coffee (Full)", price: 50 },
  ],
  milkshakes: [
    { item: "Banana Shake (Half)", price: 20 },
    { item: "Banana Shake (Full)", price: 40 },
    { item: "Spl Banana Shake", price: 50 },
    { item: "Choco. Banana", price: 50 },
    { item: "Oreo Shake (Half)", price: 35 },
    { item: "Oreo Shake (Full)", price: 65 },
    { item: "Papaya shake (Half)", price: 20 },
    { item: "Papaya shake (Full)", price: 40 },
    { item: "Apple shake", price: 25 },
    { item: "Pineapple Shake (Half)", price: 25 },
    { item: "Pineapple Shake (Full)", price: 50 },
    { item: "Cold Coffee (Half)", price: 25 },
    { item: "Cold Coffee (Full)", price: 50 },
    { item: "Lassi", price: 50 },
    { item: "Spl Lassi", price: 60 },
    { item: "Cheku shake (SEA)", price: 125 },
    { item: "Mango shake (SEA)", price: 50 },
    { item: "Strawberry Shake (SEA)", price: 60 },
    { item: "NRMI", price: 50 },
  ],
  juices: [
    { item: "Mosambi (Half)", price: 40 },
    { item: "Mosambi (Full)", price: 60 },
    { item: "Orange (Half)", price: 40 },
    { item: "Orange (Full)", price: 60 },
    { item: "Pineapple (Half)", price: 40 },
    { item: "Pineapple (Full)", price: 60 },
    { item: "Black Grapes (Half)", price: 40 },
    { item: "Black Grapes (Full)", price: 60 },
    { item: "Green Grapes (Half)", price: 40 },
    { item: "Green Grapes (Full)", price: 60 },
    { item: "Watermelon (Half)", price: 40 },
    { item: "Watermelon (Full)", price: 60 },
    { item: "Annar (Half)", price: 50 },
    { item: "Annar (Full)", price: 70 },
    { item: "Mix Juice (Half)", price: 40 },
    { item: "Mix Juice (Full)", price: 60 },
    { item: "Lemon Water", price: 10 },
  ],
  salads: [
    { item: "Papaya Salad", price: 40 },
    { item: "Fruit Salad", price: 40 },
    { item: "Pineapple Salad", price: 40 },
  ],
};

const MenuTab = ({ title, items }) => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ 
      padding: { xs: 2, sm: 2.5, md: 3 }, 
      textAlign: "center",
      backgroundColor: "#1A3238"
    }}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        gutterBottom 
        sx={{ 
          fontWeight: "bold", 
          color: "#F7B538",
          mb: 3
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {items.map((dish, index) => (
          <Grid 
            item 
            xs={6}  // Full width on mobile
            sm={6}  // Full width on tablet
            md={6}   // Two columns on small desktop
            lg={4}   // Three columns on larger screens
            key={index}
          >
            <Card sx={{ 
              bgcolor: "#2C4A52",
              borderRadius: 2, 
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              height: isMobileOrTablet ? "70px" : "100%",
              width:isMobileOrTablet ? "80vw":"inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: isMobileOrTablet ? "space-between" : "center",
              transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
                bgcolor: "#325A64"
              }
            }}>
              <CardContent sx={{ 
                width: "100%",
                padding: isMobileOrTablet ? "12px 16px" : 2,
                "&:last-child": { 
                  paddingBottom: isMobileOrTablet ? "12px" : 2 
                },
                display: "flex",
                flexDirection: isMobileOrTablet ? "row" : "column",
                justifyContent: isMobileOrTablet ? "space-between" : "center",
                alignItems: isMobileOrTablet ? "center" : "center",
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: "600", 
                  color: "#F7F7F7",
                  fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.25rem' },
                  textAlign: isMobileOrTablet ? "left" : "center",
                  marginRight: isMobileOrTablet ? 2 : 0
                }}>
                  {dish.item}
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: "#F7B538", 
                  fontWeight: "600",
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.1rem' },
                  mt: isMobileOrTablet ? 0 : 1,
                  minWidth: isMobileOrTablet ? "50px" : "auto",
                  textAlign: isMobileOrTablet ? "right" : "center"
                }}>
                  ₹{dish.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default function LandingPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const tabNames = ["Maggi", "Egg", "Beverages", "Milkshakes", "Juices", "Salads"];
  const tabComponents = [
    <MenuTab title="Maggi" items={menu.maggi} />,
    <MenuTab title="Egg Dishes" items={menu.egg} />,
    <MenuTab title="Beverages" items={menu.beverages} />,
    <MenuTab title="Milkshakes" items={menu.milkshakes} />,
    <MenuTab title="Juices" items={menu.juices} />,
    <MenuTab title="Salads" items={menu.salads} />,
  ];
  
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      background: "linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)", 
      minHeight: "100vh",
      padding: { xs: 1, sm: 2, md: 3 }
    }}>
      <Container maxWidth="lg">
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          align="center" 
          gutterBottom 
          sx={{ 
            color: "#F7B538", 
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            pt: { xs: 2, sm: 3 },
            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          HAPPY JUICE CORNER
        </Typography>
        <Typography 
          align="center" 
          gutterBottom 
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, 
            color: "#D4D4D4",
            mb: { xs: 3, sm: 4 }
          }}
        >
          6658011445 | 6372080775 | 7008047535
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          mb: 3
        }}>
          <Tabs
            value={tabIndex}
            onChange={(e, newVal) => setTabIndex(newVal)}
            variant={isMobileOrTablet ? "scrollable" : "standard"}
            scrollButtons={isMobileOrTablet ? "auto" : false}
            allowScrollButtonsMobile
            textColor="inherit"
            indicatorColor="secondary"
            centered={!isMobileOrTablet}
            sx={{ 
              backgroundColor: "#2C4A52", 
              borderRadius: 2, 
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              maxWidth: '100%',
              "& .MuiTab-root": {
                fontWeight: "600",
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                minWidth: { xs: 'auto', sm: 90 },
                px: { xs: 1, sm: 2 },
                color: "#D4D4D4",
                "&.Mui-selected": {
                  color: "#F7B538"
                }
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#F7B538",
                height: 3
              }
            }}
          >
            {tabNames.map((name, idx) => (
              <Tab 
                label={name} 
                key={idx}
              />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ 
          borderRadius: 3, 
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          overflow: "hidden",
          mb: 3
        }}>
          {tabComponents[tabIndex]}
        </Box>
      </Container>
    </Box>
  );
}