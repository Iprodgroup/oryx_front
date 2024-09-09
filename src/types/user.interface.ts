interface Settings {
  regp: number;
  usa: number;
  delivered: number;
  balance: number;
  bonus: number;
  disable: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  phone: string;
  balance: string;
  cashback: string;
  tariff_id: string;
  fname: string;
  surname: string;
  settings: Settings;
  social_id: string | null;
  address: string | null;
  city: string | null;
  fio: string;
  ref_id: string;
  id_orx: string;
  parcelActiveCount: number;
  delivery_method: 'pickup' | 'address' | 'pvz';
  delivery_address?: string;
}
