export const courtList: Record<string, string>[] = [
  {
    id: "1",
    name: "Platz 1",
    description: "Westkurve",
    imgSrc:
      "https://images.unsplash.com/photo-1611588849922-f5b78aeacce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
  {
    id: "2",
    name: "Platz 2",
    description: "Waschhaus",
    imgSrc:
      "https://images.unsplash.com/photo-1519046947096-f43d6481532b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const today = new Date();

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date);
}

export const newDayList: Record<string, string>[] = [
  {
    name: formatDate(today),
    date: today.toLocaleDateString(),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
    date: today.toLocaleDateString(),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
    date: today.toLocaleDateString(),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
    date: today.toLocaleDateString(),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
    date: today.toLocaleDateString(),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
    date: today.toLocaleDateString(),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
    date: today.toLocaleDateString(),
  },
  // {
  //   name: formatDate(today),
  // },
];

// A List of the hours of the day counting hourly from 12:00 to 22:00
export const hourList: Record<string, string>[] = [
  {time: "12:00"},
  {time: "13:00"},
  {time: "14:00"},
  {time: "15:00"},
  {time: "16:00"},
  {time: "17:00"},
  {time: "18:00"},
  {time: "19:00"},
  {time: "20:00"},
  {time: "21:00"},
  {time: "22:00"},
];

export type Team = {
  teamId: number;
  teamName: string;
  teamBookings: Booking[];
  bookingCounter: number;
};

export type Booking = {
  bookingId: number;
  date: Date;
  time: string;
  court: Court;
  team: Team;
};

export type Court = {
  courtId: number;
  name: string;
  description: string;
  imgSrc: string;
  location: string;
  courtBookings: Booking[];
};
