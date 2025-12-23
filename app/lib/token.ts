import Cookies from "js-cookie";

function convertDateToDays(date: Date): number {
  if (!date) {
    return 1;
  }

  const targetDate: Date = new Date(date);
  const today: Date = new Date();

  // Calculate difference in milliseconds
  const diffTime: number = targetDate.getTime() - today.getTime();

  const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function set(name: string, value: string, expiry: Date) {
  const days = convertDateToDays(expiry);
  Cookies.set(name, value, {
    expires: days,
    secure: true,
    path: "/",
    sameSite: "Lax",
    domain: window.location.hostname,
  });
}

function get(name: string) {
  return Cookies.get(name);
}

function remove(name: string) {
  Cookies.remove(name);
}

export default { set, get, remove };
