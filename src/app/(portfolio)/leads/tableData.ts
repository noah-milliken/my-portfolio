type Payment = {
  id: string;
  firstName: string;
  lastName: string;
  hasVisited: boolean;
  lastVisited: boolean;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  linkedIn: string;
};
