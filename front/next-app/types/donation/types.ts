export interface Donation {
  id: number;
  degreeOfNecessity: number;
  recruitmentDetails: string;
  deadline: string;
  organizationId: number;
  createdAt: string;
  updatedAt: string;
  organization: Organization;
  requestCategories: RequestCategory[];
}

export interface DonationHistory {
  id: number;
  name: string;
  recruitmentDetails: string;
  explanation: string;
  deadline: string;
  category: "衣類" | "家具・家電" | "書籍・学用品" | "食品・日用品" | "防災用品" | "ペット用品" | "おもちゃ・ベビー用品";
  createdAt: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Organization {
  id: number;
  donationOrganizationName: string;
  iconImage: string;
  organizationImages: string[];
}

export interface RequestCategory {
  id: number;
  name: string;
  pivot?: {
    donationRequestId: number;
    categoryId: number;
  };
}