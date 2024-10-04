// import { AxiosRequestConfig, CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }

// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     apiClient
//       .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
//       .then((res) => {
//         setData(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message)
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, deps ? [...deps] : []);

//   return { data, error, isLoading };
// };

// export default useData;


// import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }

// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     const fetchUsers = async () => {

//         try{
//             const res = await apiClient
//               .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
//             setData(res.data.results);
//             setLoading(false);
//         }
//         catch(err) {
//             if (err instanceof CanceledError) return;
//             setError((err as AxiosError).message)
//             setLoading(false);
//         };
//     }

//     fetchUsers();

//     return () => controller.abort();
//   }, deps ? [...deps] : []);

//   return { data, error, isLoading };
// };

// export default useData;






















import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: any[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true); // Move loading state up here.
      try {
        const res = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        });
        setData(res.data.results);
        setLoading(false);
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message); // Safely cast to AxiosError
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // Cleanup function to cancel fetch on unmount.
  }, deps); // Avoid creating a new array unnecessarily.

  return { data, error, isLoading };
};

export default useData;
