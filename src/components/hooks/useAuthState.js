import {
        useEffect,
        useState
} from "react";
import app from "../Firebase/firebase.init";

const useAuthState = () => {
        const [users, setUser] = useState({});

        useEffect(() => {
                onAuthStateChanged(app, (user) => {
                        if (user) {
                                setUser(user);
                        } else {
                                setUser({});
                        }
                });
        }, [])

        return users;
}