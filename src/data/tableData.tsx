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
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
  },
  {
    name: formatDate(new Date(today.setDate(today.getDate() + 1))),
  },
  // {
  //   name: formatDate(today),
  // },
];
