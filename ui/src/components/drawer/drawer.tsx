import React from "react"

import DrawerLink from "components/drawer/drawerLink";

interface Props {
    // drawerSwitch: boolean;
    // urlTo: string,
    // buttonName: string 
}

const drawer = (props: Props) => {

    return (
        <div>
            <DrawerLink urlTo={"/"} buttonName={"Home"} />
            <DrawerLink urlTo={"/videos"} buttonName={"Videos"} />
            <DrawerLink urlTo={"/articles"} buttonName={"Articles"} />
            <DrawerLink urlTo={"/new-video"} buttonName={"Create a new video"} />
        {/* <Divider /> */}
        </div>
    )
}

export default drawer;