import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export function useQueryParams(query: string) {
  const [queryValue, setQueryValue] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get(query);
    if (!token) {
      navigate("/");
      return;
    }

    setQueryValue(token);
  }, [searchParams]);

  return { query: queryValue };
}
