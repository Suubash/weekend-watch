import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useMovies = (url: string) => {
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnReconnect: true,
    suspense: true,
  });

  return {
    movies: data,
    isLoading: !error && !data,
    error,
  };
};

export default useMovies;
