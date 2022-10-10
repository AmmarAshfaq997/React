import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserByIdQuery } from "../../store/slices/user/userSlice";
import {
  useGetPostsByIdQuery,
  useUpdatePostMutation,
} from "../../store/slices/blog/blogSlice";

export default () => {
  let randNum = useMemo(() => Math.floor(Math.random() * 10) + 1, []);

  const [editIndex, setEditIndex] = useState<number>(-1);
  let history = useNavigate();
  const {
    data: dataPosts,
    isLoading: isLoadingPosts,
    isSuccess: isSuccesPosts,
    isError: isErroPosts,
    error: errorPosts,
  } = useGetPostsByIdQuery(randNum);

  const [updatePost, { isLoading: isLoadingUpdatePost }] =
    useUpdatePostMutation();

  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErroUser,
    error: errorUser,
  } = useGetUserByIdQuery(randNum);
  const onSeeDetail = (data: any) => {
    history(`/posts/${data.id}`, {
      state: {
        data,
      },
    });
  };
  const onEditClick = (data: any) => {
    setEditIndex(data);
  };

  const onSubmitForm = async (data: any) => {
    console.log(data, "kjsdkjskdsjkjdk");
    try {
      await updatePost({ ...data }).unwrap();
      setEditIndex(-1);
    } catch (err) {
      console.log("Failed to update");
    }
  };
  return {
    onSeeDetail,
    onEditClick,
    editIndex,
    onSubmitForm,
    randNum,
    dataPosts,
    isLoadingPosts,
    isSuccesPosts,
    isErroPosts,
    errorPosts,
    dataUser,
    isLoadingUser,
    isSuccessUser,
    isErroUser,
    errorUser,
    isLoadingUpdatePost,
  };
};
