import { List, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useQuery } from "react-query";
import { CustomersListRow } from "../customers/CustomersListRow";
import { getAccounts } from "../../../api/accounts.queries";

export const CustomersList = ({ setTargetUser }) => {
  const { data, error, isLoading } = useQuery(["getAccounts"], getAccounts);
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <Stack width={300} bgcolor="white" color="black" flex={1}>
      <Typography
        textAlign="center"
        variant="h4"
        color="#1976D2"
        bgcolor="black"
      >
        accounts
      </Typography>
      <Stack overflow="auto" maxHeight={400}>
        <List component="nav" aria-label="main mailbox folders">
          {data &&
            data.map((item, index) => (
              <CustomersListRow
                key={item._id}
                user={item}
                index={index}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                setTargetUser={setTargetUser}
              />
            ))}
        </List>
      </Stack>
    </Stack>
  );
};
