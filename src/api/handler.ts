import axios, { AxiosError, AxiosResponse } from 'axios';

export const handleRequestSuccess = <Type>(response: AxiosResponse): ApiResponse<Type> => {
  return {
    message: 'Success',
    status: response.status as ApiStatus,
    success: true,
    data: response.data,
  };
};

export const handleRequestError = (error: Error | AxiosError): ApiResponse<null> => {
  const data: ApiResponse<null> = {
    message: 'Server error',
    status: 500,
    success: false,
    data: null,
  };
  if (axios.isAxiosError(error)) {
    if (error.response) {
      data.message = error.response.data.message ?? 'No message';
      data.status = error.response.status as ApiStatus;
    } else if (error.request) {
      const request = error.request as XMLHttpRequest;
      data.message = request.responseText;
      data.status = request.status as ApiStatus;
    } else {
      data.message = error.message;
      data.status = (error.status ?? 500) as ApiStatus;
    }
  } else {
    data.message = error.message;
  }
  return data;
};
