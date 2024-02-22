export enum UserRole {
  ADMIN = "ADMIN",
  SELLER = "SELLER",
  BUYER = "BUYER",
}

export enum ShopType {
  INDIVIDUAL = "INDIVIDUAL",
  TRADER_BUSINESS = "TRADER_BUSINESS",
}
export enum ArtSpecialization {
  PAINTING = "PAINTING",
  JEWELLERY = "JEWELLERY",
  POTTERY = "POTTERY",
  DECORATION = "DECORATION",
  OTHER = "OTHER",
}

interface User {
  userData: {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    userRole?: UserRole;
  };

  RegistrationDate?: Date;
  tokens: { refreshToken?: string; AccessToken?: string };

  sellerDetails?: {
    storeName?: string;
    storeEmail?: string;
    storePhoneNumber?: string;
    sellerAddress?: string;
    shopAddress?: string;
    SellerBio?: string;
    country?: string;

    storeAddress?: string;
    cnic?: string;
    kyc?: string;
    state?: string;
    area?: string;
    district?: string;
    shopType?: ShopType;
    artSpecialization?: ArtSpecialization | string;
  };
}

export default User;
