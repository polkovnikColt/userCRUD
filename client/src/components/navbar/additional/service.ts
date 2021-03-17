import {LinkInterface} from "../../../types/types";

export const getLinks = ():LinkInterface[] => {
    return [{link: "Main", href: "/"},
           {link: "User", href: "/user"}];
}