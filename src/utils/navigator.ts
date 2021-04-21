import { CommonActions } from '@react-navigation/native';

let navigator: any;

export const setNavigator = (ref: any) => {
  navigator = ref;
};

export const getNavigator = () => navigator;

export const redirect = (route: string, params?: object) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: route,
      params,
    }),
  );
};
