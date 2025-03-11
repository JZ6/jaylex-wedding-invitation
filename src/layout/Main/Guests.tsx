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

export function getGuestData(guestName: string) {
  if (guestName in guestList) {
    return guestList[guestName];
  }
  return false;
}

export function getWelcomeMessage(guestData: boolean | Guest) {
  let welcomeMessage = 'Hm, your invitation seems to be invalid, please reach out to Jay!';

  if (guestData) {
    const { guests } = guestData as Guest;
    const names = Object.keys(guests);
    welcomeMessage = `Hi ${names.join(', ').replace(/, ([^,]*)$/, ' and $1')}`;
    if (names.length > 2) {
      welcomeMessage = `Hi ${names.join(', ').replace(/, ([^,]*)$/, ', and $1')}`;
    }
  }

  return welcomeMessage;
}
