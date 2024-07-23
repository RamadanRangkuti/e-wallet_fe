import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useStoreSelector = useSelector.withTypes<RootState>();
export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
