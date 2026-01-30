
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  mainImage: string;
  gallery: string[];
  details: string;
  color: string;
}

export interface ContactInfo {
  type: 'email' | 'wechat' | 'feishu';
  label: string;
  value: string;
  qrCode?: string;
}
