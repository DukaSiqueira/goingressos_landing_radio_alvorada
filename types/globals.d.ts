interface LoginResponse {
  userData: UserData;
  accessToken: string;
  expires_in: number;
}

interface RegisterResponse {
  userData: UserData;
}

interface UserData {
  id: number;
  name: string;
  lastname?: string;
  email: string;
  ability: {
    action: string;
    subject: string;
  }[];
  phone: string;
  document: string;
  photo: string;
  birth: string;
  promUser: boolean;
  avatar: string;
  extras: Any[];
  resume: {
    account: string;
    tickets: number;
    notifications: number;
  };
  role: string;
  roleName: string;
  moreEmps: boolean;
  company?: string;
  companyDomain?: string;
}

interface PlansResponse {
  back_url: string;
  billing_day: number;
  created_at: string;
  currency_id: string;
  description: string;
  frequency: number;
  frequency_type: string;
  id: number;
  image: string;
  price: number;
  status: string;
  subscribers: number;
  title: string;
  transaction_amount: number;
  updated_at: string;
}

interface AuthContextType {
  token: string;
  setToken: (token: string) => void;
  user: UserData | null;
  setUser: (user: UserData) => void;
}

interface Subscription {
  application_id: number;
  auto_recurring: {
    currency_id: string;
    frequency: number;
    frequency_type: string;
    transaction_amount: number;
    billing_day: number;
  }
  back_url: string;
  reason: string;
  status: string;
  subscription_id: string;
  id: string;
  payer_email: string;
  preapproval_plan_id: number;
  date_created: string;
  last_modified: string;
  next_payment_date: string;
  summarized: {
    last_charged_date: string;
  }
}

interface MySubscription {
  plan: PlansResponse;
  subscription: Subscription;
}