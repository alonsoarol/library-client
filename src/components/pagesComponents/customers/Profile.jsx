import { Box, Button, Checkbox, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";
import { putPermission } from "../../../api/accounts.queries";
import axios from "axios";

export const Profile = ({ targedUser }) => {
  useEffect(() => {
    Object.entries(targedUser).length
      ? setChecks({
          read: targedUser.permissions.read,
          write: targedUser.permissions.write,
          admin: targedUser.permissions.admin,
        })
      : null;
  }, [targedUser]);

  const [checks, setChecks] = useState({
    read: false,
    write: false,
    admin: false,
  });

  const changePermission = async (e) => {
    setChecks({ ...checks, [e.target.name]: !checks[e.target.name] });
  };

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
  }, [checks]);
  return (
    <Stack
      bgcolor="black"
      color="white"
      margin="auto"
      padding={3}
      width="100%"
      height="100%"
      direction="column"
    >
      <Typography variant="h4" textAlign="center">
        {`${targedUser.name} ${targedUser.surname}`}
      </Typography>
      <Stack
        flex={1}
        // border="1px solid"
        justifyContent="start"
        alignItems="center"
        mt={3}
      >
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={targedUser.picture}
            style={{ width: 100, height: 100, marginBottom: 30 }}
          />
          <Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="overline" fontWeight={700}>
                id:
              </Typography>
              <Typography variant="overline">{targedUser._id}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="overline" fontWeight={700}>
                name:
              </Typography>
              <Typography variant="overline">{targedUser.name}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="overline" fontWeight={700}>
                surname:
              </Typography>
              <Typography variant="overline">{targedUser.surname}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="overline" fontWeight={700}>
                email:
              </Typography>
              <Typography variant="overline">{targedUser.email}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="overline" fontWeight={700}>
                gender:
              </Typography>
              <Typography variant="overline">{targedUser.gender}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
