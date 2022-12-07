import { Form, Formik } from "formik";
import router, { useRouter } from "next/router";
import * as React from "react";
import InputField from "../../components/inputField";
import Layout from "../../components/Layout";
import { useSinglePostQuery, useUpdateMutation } from "../../types-and-hooks";
import { toErrorMap } from "../../utils/toErrorMap";

interface IUpdatePostProps {}

const UpdatePost: React.FunctionComponent<IUpdatePostProps> = (props) => {
  const router = useRouter();
  const [postType, setType] = React.useState<boolean>(false);
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const { data, loading, error } = useSinglePostQuery({
    variables: { id: intId },
  });
  const [updatePost] = useUpdateMutation();

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data?.singlePost) {
    return (
      <Layout>
        <h1>could not fund post</h1>
      </Layout>
    );
  }

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
          initialValues={{
            title: data?.singlePost?.title,
            content: data?.singlePost?.content,
            imgURL: data?.singlePost?.imgURL,
            type: data?.singlePost?.type,
          }}
          onSubmit={async (val, { setErrors }) => {
            if (postType) {
              val.type = "news";
            } else {
              val.type = "posts";
            }
            if (val.title && val.title.length <= 10) {
              setErrors(
                toErrorMap([{ field: "title", message: "title is too short" }])
              );
              return;
            }
            if (val.imgURL && val.imgURL.length <= 10) {
              setErrors(
                toErrorMap([
                  { field: "imgURL", message: "imageURL is too short" },
                ])
              );
              return;
            }
            if (val.title && val.imgURL) {
              const res = await updatePost({
                variables: {
                  updatePostId: intId,
                  type: val.type,
                  title: val.title,
                  content: val.content,
                  imgUrl: val.imgURL,
                },
              });
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
                Update Post
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default UpdatePost;
