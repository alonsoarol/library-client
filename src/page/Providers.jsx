import { useRef } from "react";
import { PageBanner } from "../components/PageBanner";
import { BsTruck } from "react-icons/bs";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { CustomInput } from "../components/common/CustomInput";
import { CustomButton } from "../components/common/CustomButton";
import { DropMenu } from "../components/common/DropMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import HistoryIcon from "@mui/icons-material/History";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLoginStore } from "../context/loginStore";
import {
  createProvider,
  getProviders,
  deleteProviders,
} from "../api/providers.queries";
import { RiBarcodeFill } from "react-icons/ri";
import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { PBDialog } from "../components/pagesComponents/pageBanner/PBDialog";
import { useState } from "react";

export const Providers = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [targedProvider, setTargedProvider] = useState("");
  const codeRef = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const locationRef = useRef("");

  const connectedUser = useLoginStore((state) => state.connectedUser);
  const queryClient = useQueryClient();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { mutate: deleteProvidersMutation } = useMutation(deleteProviders, {
    onSuccess: () => {
      queryClient.invalidateQueries("getProviders");
      enqueueSnackbar("Provider deleted succesfully", {
        variant: "success",
      });
    },
    onError: (error) => {
      enqueueSnackbar("Something was wrong", {
        variant: "error",
      });
    },
  });
  const {
    mutate,
    isLoading: isMutating,
    reset,
    isError,
  } = useMutation(createProvider, {
    onSuccess: () => {
      queryClient.invalidateQueries("getProviders");
      enqueueSnackbar("provider registered succesfully", {
        variant: "success",
      });
      reset();
    },
    onError: (error) => {
      enqueueSnackbar("something was wrong", { variant: "error" });
      reset();
    },
  });
  const { data, isLoading } = useQuery(["getProviders"], getProviders);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!connectedUser.permissions.write) {
      return enqueueSnackbar("you have not permissions", {
        variant: "warning",
      });
    }
    const obj = {
      code: codeRef.current.value,
      name: nameRef.current.value,
      location: locationRef.current.value,
      email: emailRef.current.value,
      phone_number: phoneRef.current.value,
    };
    mutate(obj);
    e.target.reset();
  };
  const confirmDeleteProv = () => {
    targedProvider && deleteProvidersMutation(targedProvider);
    setOpenDialog(false);
  };

  return (
    <>
      <PageBanner title="Providers" icon={<BsTruck />} />

      <PBDialog
        title="Are you sure to delete the provider?"
        open={openDialog}
        func={() => confirmDeleteProv(targedProvider)}
        close={() => setOpenDialog(false)}
      />
      <div className="provider-container">
        <div className="Addprovider-card-container">
          <div className="Addprovider-card">
            <div className="Addprovider-card-header">
              <h1>Add Provider</h1>
            </div>
            <form
              className="Addprovider-card-form"
              onSubmit={(e) => handlerSubmit(e)}
            >
              <div className="Addprovider-form-item">
                <CustomInput
                  placeholder="code"
                  icon={<RiBarcodeFill />}
                  Ref={codeRef}
                  type="text"
                  size="ms"
                />
              </div>
              <div className="Addprovider-form-item">
                <CustomInput
                  placeholder="name"
                  icon={<BsTruck />}
                  Ref={nameRef}
                  type="text"
                  size="ms"
                />
              </div>
              <div className="Addprovider-form-item">
                <CustomInput
                  placeholder="email"
                  icon={<FiMail />}
                  Ref={emailRef}
                  type="text"
                  size="ms"
                />
              </div>
              <div className="Addprovider-form-item">
                <CustomInput
                  placeholder="Phone"
                  icon={<FiPhone />}
                  Ref={phoneRef}
                  type="text"
                  size="ms"
                />
              </div>
              <div className="Addprovider-form-item">
                <CustomInput
                  placeholder="Location"
                  icon={<GoLocation />}
                  Ref={locationRef}
                  type="text"
                  size="ms"
                />
              </div>
              <CustomButton
                title={isMutating && !isError ? "sending.." : "submit"}
                width="15vw"
                height="6vh"
              />
            </form>
          </div>
        </div>
        <div className="providers-card-container">
          <div className="providers-card">
            <div className="providers-card-header">
              <h1>Providers</h1>
            </div>
            <table>
              <thead className="thth">
                <tr>
                  <th>code</th>
                  <th>name</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>location</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td>loading..</td>
                  </tr>
                ) : (
                  data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.code}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone_number}</td>
                      <td>{item.location}</td>
                      <td>
                        <IconButton
                          aria-label="delete"
                          color="primary"
                          onClick={() => {
                            if (!connectedUser.permissions.write) {
                              return enqueueSnackbar(
                                "you have not permissions",
                                { variant: "warning" }
                              );
                            }
                            setOpenDialog(true);
                            setTargedProvider(item._id);
                          }}
                        >
                          <DeleteIcon color="white" />
                        </IconButton>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
