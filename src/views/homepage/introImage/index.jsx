import React from "react";
import { MiddleImg, Group } from "styles/introImage";

import group from "assets/images/group.png";

function IntroImage() {
  return (
    <MiddleImg>
      <Group src={group} alt="group" />
    </MiddleImg>
  );
}

export default IntroImage;
