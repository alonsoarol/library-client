import {
  Box,
  Button,
  Checkbox,
  Typography,
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState } from "react";

export const SalesScreen = () => {
  const [test, setTest] = useState([
    { name: "arol" },
    { name: "leo" },
    { name: "jime" },
    { name: "emma" },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Stack
      bgcolor="black"
      color="white"
      margin="auto"
      padding={3}
      width="100%"
      height="100%"
      direction="row"
    >
      <Typography>Sales</Typography>
      <Stack>
        <List>
          {test &&
            test.map((item, index) => (
              <ListItemButton
                color="white"
                key={index}
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              >
                <ListItemIcon>
                  <Typography color="white">{item.name}</Typography>
                </ListItemIcon>
                <ListItemText
                // primary={}
                />
              </ListItemButton>
            ))}

          <Divider />
        </List>
      </Stack>
    </Stack>
  );
};
