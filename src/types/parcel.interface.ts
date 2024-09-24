export interface Parcel {
  id: number;
  name: string | null;
  user_id: string;
  track: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  recipient_id: string;
  country: string | null;
  country_out: string;
  city: string | null;
  city_out: string;
  prod_price: string;
  pid: string | null;
  weight: string | null;
  date_out: string | null;
  payed: string;
  in_fio: string | null;
  in_city: string | null;
  in_address: string | null;
  in_comment: string | null;
  in_track: string | null;
  in_date: string | null;
  in_phone: string | null;
  in_status: string;
  integration_id: string | null;
  user_fio: string;
  goods: Good[];
  user_fio: string | null;
}

interface Good {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  parcel_id: string;
  name: string;
  currency: string;
  price: string;
}
