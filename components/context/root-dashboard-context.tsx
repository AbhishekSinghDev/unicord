"use client";

import axios, { AxiosError } from "axios";

import { ServerInterface } from "@/lib/interfaces";
import { createContext, useEffect, useState, useContext } from "react";

interface RootDashboardContextInterface {
  servers: Array<ServerInterface> | undefined;
  setServers: (e: any) => void;
  selectedServer: ServerInterface | undefined;
  setSelectedServer: (e: any) => void;
}

interface DashboardContextProviderInterface {
  children: React.ReactNode;
}

const DashboardContext = createContext<
  RootDashboardContextInterface | undefined
>(undefined);

export const RootDashboardContextProvider: React.FC<
  DashboardContextProviderInterface
> = ({ children }) => {
  const [servers, setServers] = useState<Array<ServerInterface> | undefined>(
    undefined
  );
  const [selectedServer, setSelectedServer] = useState<
    ServerInterface | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [jwtToken, setJwtToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllServers = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("clerk-db-jwt");
        setJwtToken(token);
        const { data } = await axios.get("api/v1/team/all-teams", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        if (data.teams) {
          setServers(data.teams);
          setSelectedServer(data.teams[0]);
        }
      } catch (err) {
        const error = err as AxiosError;
        const data: any = error.response?.data;
        if (data?.message) {
          alert(data.message);
          return;
        }
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (jwtToken) fetchAllServers();
  }, [jwtToken]);

  if (isLoading) {
    return <p>Loading servers</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <DashboardContext.Provider
      value={{ servers, setSelectedServer, setServers, selectedServer }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useRootDashboard = (): {
  servers: Array<ServerInterface> | undefined;
  setServers: (e: any) => void;
  selectedServer: ServerInterface | undefined;
  setSelectedServer: (e: any) => void;
} => {
  const dashboardContext = useContext(DashboardContext);
  if (!dashboardContext) {
    throw new Error("useRootDashboard is defined outside of the provider");
  }

  return dashboardContext;
};
