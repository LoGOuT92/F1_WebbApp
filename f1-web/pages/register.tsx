import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as React from "react";
import InputField from "../components/inputField";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import { useRegisterMutation } from "../types-and-hooks";
import { toErrorMap } from "../utils/toErrorMap";

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "20px",
          flex: "0.3",
          borderBottom: "5px solid red",
          borderRight: "5px solid red",
          borderBottomRightRadius: "15px",
          padding: "5ch",
        }}
      >
        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          onSubmit={async (val, { setErrors }) => {
            const res = await register({ variables: { options: val } });
            if (res.data?.register.errors) {
              setErrors(toErrorMap(res.data.register.errors));
            } else {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <InputField
                name={"username"}
                label={"Username"}
                placeholder="username"
              />
              <InputField
                name={"email"}
                label={"Email"}
                placeholder="email"
                type="email"
              />
              <InputField
                name={"password"}
                label={"Password"}
                placeholder="password"
                type="password"
              />
              <button
                type="submit"
                style={{
                  marginTop: 8,
                  height: "50px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  backgroundColor: "red",
                }}
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default Register;
