export interface Recipient {
  id: number;
  user_id: string;
  name: string;
  fname: string;
  surname: string;
  country: string;
  city: string;
  pnum: string;
  pby: string;
  pdate: string;
  phone: string;
  address: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  confirm: string;
  registration: string | null;
  fio: string;
  files: string;
}
