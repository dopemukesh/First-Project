import { useEffect, useState } from "react";

export function useCurrentUser() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        position: "",
        avatar: "",
    });

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setIsLoggedIn(user.isLoggedIn);
            setIsAdmin(user.isAdmin);
            setUserData({
                name: user.name,
                email: user.email,
                position: user.position,
                avatar: user.picture,
            });
        }
    }, []);

    return { isLoggedIn, userData, isAdmin };
}
