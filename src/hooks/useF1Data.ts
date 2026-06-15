// src/hooks/useF1Data.ts
import { useEffect, useState } from "react";
import { Driver, Race } from "../types";

interface F1Data {
  drivers: Driver[];
  races: Race[];
}

let cache: F1Data | null = null;

export function useF1Data() {
  const [data, setData] = useState<F1Data | null>(cache);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache) return;

    Promise.all([
      fetch("/data/drivers.json").then((r) => r.json()),
      fetch("/data/races.json").then((r) => r.json()),
    ])
      .then(([drivers, races]) => {
        cache = { drivers, races };
        setData(cache);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}