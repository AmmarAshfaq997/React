import React, { useMemo } from "react";
import type { RootState } from "../../store/store";
import { useAppSelector, useAppDispatch } from "../../hooks/stateFunHooks";
import { useParams, useLocation } from "react-router-dom";
import { useGetUserByIdQuery } from "../../store/slices/user/userSlice";

export default () => {
  let randNum = useMemo(() => Math.floor(Math.random() * 10) + 1, []);

  const dispatch = useAppDispatch();
  let { id } = useParams();
  const location = useLocation();
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErroUser,
    error: errorUser,
  } = useGetUserByIdQuery(randNum);
  return {
    id,
    location,
    data: dataUser,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErroUser,
    error: errorUser,
  };
};
