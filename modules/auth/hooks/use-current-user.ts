import { useSession } from "next-auth/react";

// this component for client user fetch

export const useCurrentUser = () => {
    const session = useSession();

    return session?.data?.user
}