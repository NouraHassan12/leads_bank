import { configureStore } from "@reduxjs/toolkit";
import registrationSliceReducer from "./Slices/AuthSlice/registrationSlice";
import loginSliceReducer from "./Slices/AuthSlice/LoginSlice";
import leadbankSliceReducer from "./Slices/BankLeadSlice/BankLeadSlice";
import serviceTypesSliceReducer from "./Slices/ServiceType/ServiceTypeSlice"
import countriesSliceReducer from "./Slices/CountriesAndStatesSlice/CountriesAndStatesSlice";
import citiesSliceReducer from "./Slices/CountriesAndStatesSlice/CitiesSlice";
import  sold_leadsSliceReducer from "./Slices/SoldLeadsSlice/SoldLeadsSlice"

export const store = configureStore({
    reducer: {
     
      registered_user: registrationSliceReducer,
      auth_user : loginSliceReducer ,
      lead_bank :leadbankSliceReducer,
      serviceTypes : serviceTypesSliceReducer,
      countries : countriesSliceReducer,
      cities : citiesSliceReducer,
      sold_leads : sold_leadsSliceReducer
    
    },
  });