import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "/public/avatar-1.png",
    name: "",
    email: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = Buffer.from(token!, "base64").toString("ascii");
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={user.avatar}
        width={90}
        height={90}
        alt="profile"
        className="img-fluid mb-20 img-avatar-member"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
