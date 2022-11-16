import { Box, Button, Checkbox, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";
import { putPermission } from "../../../api/accounts.queries";
import axios from "axios";

export const Profile = ({ targetUser }) => {
  useEffect(() => {
    Object.entries(targetUser).length
      ? setChecks({
          read: targetUser.permissions.read,
          write: targetUser.permissions.write,
          admin: targetUser.permissions.admin,
        })
      : null;
  }, [targetUser]);

  const [checks, setChecks] = useState({
    read: false,
    write: false,
    admin: false,
  });

  const changePermission = async (e) => {
    setChecks({ ...checks, [e.target.name]: !checks[e.target.name] });
  };

  useEffect(() => {
    if (Object.entries(targetUser).length) {
      const fc = async () => {
        await axios.put(
          `http://localhost:4000/account/permissions/${targetUser._id}`,
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
      direction="row"
    >
      <Stack flex={1}>
        <img
          src={targetUser.picture}
          style={{ width: 100, height: 100, marginBottom: 30 }}
        />
        <Stack direction="row" spacing={1}>
          <Typography variant="overline" fontWeight={700}>
            id:
          </Typography>
          <Typography variant="overline">{targetUser._id}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="overline" fontWeight={700}>
            name:
          </Typography>
          <Typography variant="overline">{targetUser.name}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="overline" fontWeight={700}>
            surname:
          </Typography>
          <Typography variant="overline">{targetUser.surname}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="overline" fontWeight={700}>
            email:
          </Typography>
          <Typography variant="overline">{targetUser.email}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Typography variant="overline" fontWeight={700}>
            gender:
          </Typography>
          <Typography variant="overline">{targetUser.gender}</Typography>
        </Stack>
      </Stack>
      <Stack flex={1}>
        <Typography variant="overline">Permissions</Typography>
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
        <Stack>
          <Button>delete account</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
