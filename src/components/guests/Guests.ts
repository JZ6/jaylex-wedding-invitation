import _guestList from 'guests.json';

export interface Guest {
  guests: object;
  language: string;
}

type _guestListInterface = Record<string, Guest>;

const guestList = _guestList as _guestListInterface;

export function getGuestUrlParam() {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const guestParam = params.get('guest') ?? '';
  return guestParam;
}

export function getGuestData(guestParam: string) {
  if (guestParam in guestList) {
    return guestList[guestParam];
  }
  return false;
}

export function getGuestNames(guestData: boolean | Guest) {
  if (guestData) {
    const { guests } = guestData as Guest;
    const names = Object.keys(guests);
    return names;
  }
  return [];
}

export function getWelcomeMessage(guestData: boolean | Guest) {
  let welcomeMessage = 'Hm, your invitation seems to be invalid, please reach out to Jay!';

  const names = getGuestNames(guestData);

  if (names.length > 0) {
    welcomeMessage = `Hi ${names.join(', ').replace(/, ([^,]*)$/, ' and $1')}`;
    if (names.length > 2) {
      welcomeMessage = `Hi ${names.join(', ').replace(/, ([^,]*)$/, ', and $1')}`;
    }
  }

  return welcomeMessage;
}
