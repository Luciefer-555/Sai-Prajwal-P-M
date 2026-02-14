"use client";

import { checkEnvs } from "@/lib/actions";
import { SetupToolbar } from "@joycostudio/v0-setup";

export const V0Setup = () => {
  return (
    <SetupToolbar
      title="SAI PRAJWAL PM PORTFOLIO "
      description="Building AI tools, web applications, and thoughtful digital experiences"
      envCheckAction={checkEnvs}
    />
  );
};

export default V0Setup;
