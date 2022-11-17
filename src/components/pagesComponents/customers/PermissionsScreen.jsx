import { Typography, Checkbox, Stack, Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import { deleteAccount } from "../../../api/accounts.queries";

export const PermissionsScreen = ({ targedUser }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteUser } = useMutation(deleteAccount, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAccounts");
      console.log("borrado");
    },
    onError: () => {
      console.log("no borrado");
    },
  });

  const [checks, setChecks] = useState({
    read: false,
    write: false,
    admin: false,
  });

  const changePermission = async (e) => {
    setChecks({ ...checks, [e.target.name]: !checks[e.target.name] });
  };

  useEffect(() => {
    Object.entries(targedUser).length
      ? setChecks({
          read: targedUser.permissions.read,
          write: targedUser.permissions.write,
          admin: targedUser.permissions.admin,
        })
      : null;
  }, [targedUser]);

  useEffect(() => {
    if (Object.entries(targedUser).length) {
      const fc = async () => {
        await axios.put(
          `http://localhost:4000/account/permissions/${targedUser._id}`,
          { permissions: checks }
        );
      };
      fc();
    }
    queryClient.invalidateQueries("getAccounts");
  }, [checks]);

  return (
    <>
      <Stack flex={1}>
        <Typography variant="h4" textAlign="center" mt={3} mb={2}>
          Permissions
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Stack direction="row" alignItems="center">
            <Checkbox
              name="read"
              size="small"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
              onClick={(e) => changePermission(e)}
              checked={checks && checks.read ? true : false}
            />
            <Typography variant="overline">read</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Checkbox
              name="write"
              size="small"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
              onClick={(e) => changePermission(e)}
              checked={checks && checks.write ? true : false}
            />
            <Typography variant="overline">write</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Checkbox
              name="admin"
              size="small"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
              onClick={(e) => changePermission(e)}
              checked={checks && checks.admin ? true : false}
            />
            <Typography variant="overline">admin</Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="end" alignItems="end" mt={10} height="100%">
          <Button onClick={() => deleteUser(targedUser._id)} variant="outlined">
            delete account
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
