/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
import { useEffect, useState } from "react";
import { getSaleByEmployee } from "../../../api/sales.queries";
import { useQuery } from "react-query";
import { useLoginStore } from "../../../context/loginStore";

export const SalesScreen = ({ targedUser }) => {
  const [test, setTest] = useState();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedSale, setSelectedSale] = useState({});
  const connectedUser = useLoginStore((state) => state.connectedUser);
  const { data, isLoading } = useQuery(["getSaleByEmployee"], () =>
    getSaleByEmployee(targedUser._id)
  );

  useEffect(() => {}, [selectedSale]);

  return (
    <Stack
      bgcolor="black"
      color="white"
      margin="auto"
      padding={3}
      width="100%"
      height="85%"
      direction="column"
    >
      <Typography textAlign="center" mb={3} variant="h4">
        Sales
      </Typography>

      <Stack direction="row" height={200} spacing={0}>
        <Stack width={150} overflow="auto">
          <Typography textAlign="center" height={35} p={0.8} bgcolor="red">
            date
          </Typography>
          <Stack overflow="auto">
            <List>
              {data &&
                data.map((item, index) => (
                  <>
                    <ListItemButton
                      color="white"
                      key={index}
                      selected={selectedIndex === index}
                      onClick={() => {
                        setSelectedIndex(index);
                        setSelectedSale(item);
                      }}
                    >
                      <ListItemIcon>
                        <Typography color="white">{item.date}</Typography>
                      </ListItemIcon>
                      <ListItemText
                      // primary={}
                      />
                    </ListItemButton>
                  </>
                ))}
            </List>
          </Stack>
        </Stack>
        <Stack maxHeight={180} width={500} overflow="auto">
          <table
            css={css`
              border-collapse: collapse;
              & > thead > tr > th {
                height: 35px;
                padding-left: 10px;
                text-align: left;
                position: sticky;
                top: 0;
                background: #1976d2;
              }
              & > tbody > tr > td {
                padding: 5px 10px;
              }
              & > tfoot > tr > th {
                padding-left: 10px;
                text-align: left;
                height: 5vh;
                color: #1976d2;
              }
            `}
          >
            <thead>
              <tr>
                <th>code</th>
                <th>title</th>
                <th>price</th>
              </tr>
            </thead>
            {Object.entries(selectedSale).length !== 0 && (
              <tbody>
                {selectedSale.sold_items.map((item, index) => (
                  <>
                    <tr>
                      <td>{item.code}</td>
                      <td>{item.title}</td>
                      <td>$ {item.public_price}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            )}
            <tfoot>
              <tr>
                <th colSpan={2}>TOTAL:</th>
                <th>
                  ${" "}
                  {Object.entries(selectedSale).length !== 0 &&
                    selectedSale.total}
                </th>
              </tr>
            </tfoot>
          </table>
        </Stack>
      </Stack>
    </Stack>
  );
};
