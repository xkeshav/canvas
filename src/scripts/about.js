console.log("about.js");

import { isUserUsingMobile } from "../common/helper";

if (isUserUsingMobile) {
  console.log("watching from mobile");
} else {
  console.log("watching  from right device");
}
