import { useMemo } from "react";
import { useGetUserByIdQuery } from "../../store/slices/user/userSlice";
export default () => {
  let randNum = useMemo(() => Math.floor(Math.random() * 10) + 1, []);

  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErroUser,
    error: errorUser,
  } = useGetUserByIdQuery(randNum);

  return {
    randNum,
    data: dataUser,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErroUser,
    error: errorUser,
  };
};
