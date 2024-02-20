import type User from "./userInterface";
import { UserRole, ShopType, ArtSpecialization } from "./userInterface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userRole: UserRole.BUYER,
  },

  tokens: { refreshToken: undefined, AccessToken: undefined },
  RegistrationDate: undefined,

  sellerDetails: {
    storeName: "",
    storeEmail: "",
    storePhoneNumber: "",
    sellerAddress: "",
    shopAddress: "",
    SellerBio: "",
    country: "",

    storeAddress: "",
    state: "",
    area: "",
    district: "",
    shopType: ShopType.INDIVIDUAL,
    artSpecialization: ArtSpecialization.PAINTING,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    updateSellerDetails: (state, action) => {
      state.sellerDetails = { ...state.sellerDetails, ...action.payload };
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
  },
});


export const { setUser } = userSlice.actions

export default userSlice.reducer;
