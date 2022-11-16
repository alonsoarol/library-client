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
import { createProvider, getProviders } from "../api/providers.queries";
import { RiBarcodeFill } from "react-icons/ri";
import { useSnackbar } from "notistack";

export const Providers = () => {
  const codeRef = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const locationRef = useRef("");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["getProviders"], getProviders);
  const {
    mutate,
    error,
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
      enqueueSnackbar(error.response.data, { variant: "error" });
      reset();
    },
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    const obj = {
      code: codeRef.current.value,
      name: nameRef.current.value,
      location: locationRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    mutate(obj);
    e.target.reset();
  };

  return (
    <>
      <PageBanner title="Providers" icon={<BsTruck />} />

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
                      <td>{item.phone}</td>
                      <td>{item.location}</td>
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
