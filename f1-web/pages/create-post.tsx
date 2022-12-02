import { Form, Formik } from "formik";
import router from "next/router";
import * as React from "react";
import { useState } from "react";
import InputField from "../components/inputField";
import Layout from "../components/Layout";
import { useCreatePostMutation } from "../types-and-hooks";
import { toErrorMap } from "../utils/toErrorMap";

interface ICreatePostProps {}

const CreatePost: React.FunctionComponent<ICreatePostProps> = (props) => {
  const [postType, setType] = useState<boolean>(false);
  const [createPost] = useCreatePostMutation();

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
          initialValues={{ title: "", content: "", imgURL: "", type: "post" }}
          onSubmit={async (val, { setErrors }) => {
            if (postType) {
              val.type = "news";
            } else {
              val.type = "posts";
            }
            if (val.title.length <= 10) {
              setErrors(
                toErrorMap([{ field: "title", message: "title is too short" }])
              );
              return;
            }
            if (val.imgURL.length <= 10) {
              setErrors(
                toErrorMap([
                  { field: "imgURL", message: "imageURL is too short" },
                ])
              );
              return;
            }
            const res = await createPost({ variables: { postInput: val } });
            router.push("/");
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
              <InputField name={"title"} label={"Title"} placeholder="Title" />
              <InputField
                name={"content"}
                label={"Content"}
                placeholder="Content"
                textArea
              />
              <InputField
                name={"imgURL"}
                label={"imgURL"}
                placeholder="imgURL"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "10px",
                }}
              >
                <div
                  onClick={() => setType(true)}
                  style={
                    postType
                      ? {
                          borderBottom: "3px solid red",
                          fontWeight: "600",
                          fontSize: "20px",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                >
                  News
                </div>
                <div
                  onClick={() => setType(false)}
                  style={
                    !postType
                      ? {
                          borderBottom: "3px solid red",
                          fontWeight: "600",
                          fontSize: "20px",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                >
                  Posts
                </div>
              </div>
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
                Add Post
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default CreatePost;
