import guestList from "./guests.json";

export function getGuestData(guestName) {
  if (guestList.hasOwnProperty(guestName)) {
    return guestList[guestName];
  }
  return false;
}

export function getWelcomeMessage(guestData) {
  let welcomeMessage =
    "Hm, your invitation seems to be invalid, please reach out to Jay!";

  if (guestData) {
    welcomeMessage = `Hello ${guestData.names
      .join(", ")
      .replace(/, ([^,]*)$/, ", and $1")}`;
  }

  return welcomeMessage;
}
