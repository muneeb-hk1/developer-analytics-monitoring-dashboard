import { useQuery } from "@tanstack/react-query";

import { getUsersAnalytics } from "../api/analytics.api";

export type AnalyticsItem = {
  id: number;
  month: string;
  users: number;
};

export function useUsersAnalytics() {

  return useQuery<AnalyticsItem[]>({
    queryKey: ["users-analytics"],
    queryFn: getUsersAnalytics,
  });

}  