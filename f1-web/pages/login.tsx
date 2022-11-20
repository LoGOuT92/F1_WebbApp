import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as React from "react";
import InputField from "../components/inputField";
import Layout from "../components/Layout";
import { useLoginMutation } from "../types-and-hooks";
import { toErrorMap } from "../utils/toErrorMap";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const router = useRouter();
  const [login] = useLoginMutation();
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
          initialValues={{ email: "", password: "" }}
          onSubmit={async (val, { setErrors }) => {
            const res = await login({
              variables: { email: val.email, password: val.password },
            });
            if (res.data?.login.errors) {
              setErrors(toErrorMap(res.data.login.errors));
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
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default Login;
