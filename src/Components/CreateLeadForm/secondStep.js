import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Rate,
  Select,
  DatePicker,
  Space,
  Switch,
  Alert,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesAction } from "../../Redux/Slices/CountriesAndStatesSlice/CountriesAndStatesSlice";
import { getcitiesAction } from "../../Redux/Slices/CountriesAndStatesSlice/CitiesSlice";
import { getStatesAction } from "../../Redux/Slices/CountriesAndStatesSlice/stateSlice";
import { AddLeadContainer, WarnDiv } from "./CreateLeadStyle";
import {
  InputLabel,
  MenuItem,
  Grid,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Modal,
  FormControl,
} from "@mui/material";
// Google Maps
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  geocodeByPlaceId,
} from "react-places-autocomplete";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
const SecondStep = ({
  data,
  onSuccess,
  current,
  steps,
  next,
  form,
  setCurrent,
  sceNext,
  previous,
  set_last_time_you_communicated,
  set_country_id,
  set_city_id,
  country_id,
  setAddressSwitch,
  addressSwitch,
  coordinates,
  setCoordinates,
  address,
  setAddress,
  full_address,
  setFullAddress,
  zip_code,
  setPostalCode,
  street,
  setStreetLoc,
  country,
  state,
  setState,
  setCountry,
}) => {
  const dispatch = useDispatch();

  // Google maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCrr_bBNHxQ0lZKadmJYpqS2vOebczD1m4",
    libraries: ["places"],
  });

  const [value, setValue] = useState();
  const all_countries = useSelector((state) => state.countries);
  const all_cities = useSelector((state) => state.cities);
  // const [address, setAddress] = React.useState("");
  // const [full_address, setFullAddress] = React.useState("");
  // const [zip_code, setPostalCode] = React.useState("");
  // const [street, setStreetLoc] = React.useState("");
  // const [country, setCountry] = React.useState("");
  // const [state, setState] = React.useState("");
  const [showData, setShowData] = React.useState(false);
  const [route, setRoute] = React.useState("");
  const allstates = useSelector((state) => state.states);
  console.log(allstates?.states?.data?.states, "__allstates");

  console.log(all_countries?.isLodaing, "all_countries");
  console.log(country_id, "__country_id in sec step");
  console.log(all_cities?.cities?.data, "__all_cities");
  console.log(data , ":::::::::::::::::data::::::::::::")

  // Geocoding

  // Google Maps style
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  // Geocoding

  Geocode.setLocationType("ROOFTOP");
  Geocode.setApiKey("AIzaSyCrr_bBNHxQ0lZKadmJYpqS2vOebczD1m4");
  React.useEffect(() => {
    console.log(coordinates, "{{{{{{{coordinates}}}}}}}}}}}}}}}");
    Geocode.fromLatLng(coordinates.lat, coordinates.lng).then(
      (response) => {
        console.log(response.results[0], "response");
        const address = response.results[0].formatted_address;
        let street, city, state, country, postalCode, route, county;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "street_number":
                street = response.results[0].address_components[i].long_name;
                break;
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "postal_code":
                postalCode =
                  response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;

              case "route":
                route = response.results[0].address_components[i].long_name;
                break;

              case "administrative_area_level_2":
                county = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        // Set the Normal states
        // setPostalCode({...data,zip_code:postalCode});
        setPostalCode(postalCode);
        setFullAddress(address);
        setStreetLoc(street);
        setCountry(country);
        setState(state);
        setRoute(route);

        // Not Normal
        // data.zip_code = postalCode;
        // data.street = route + " " + street;
        // data.city_name = city;
        // data.location = address;
        // data.county = county;
        console.log(state, "+++++state");
        console.log("county", county);
        console.log("city", city);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [coordinates]);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    setShowData(true);
  };

  const onChangeAddressSwitch = (checked) => {
    setAddressSwitch(checked);
    console.log(`switch to address switch  ${checked}`);
  };

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    set_last_time_you_communicated(dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  useEffect(() => {
    const stateData = { id: 231 };
    dispatch(getStatesAction(stateData));
  }, []);

  useEffect(() => {
    // console.log(ref , "_____________________ref")
    // console.log(ref.current?.innerText || "ref not set!");
    dispatch(getCountriesAction());
    const counrtyData = { id: country_id };
    dispatch(getcitiesAction(counrtyData));
  }, [country_id]);

  if (!isLoaded) {
    return <p>loading...</p>;
  }

  return (
    <AddLeadContainer>
      <Form
        form={form}
        onSuccess={onSuccess}
        data={data}
        autoComplete="off"
        layout="vertical"
        style={{ margin: "50px" }}
      >
        <Form.Item
          style={{ width: "48%", display: "flex" }}
          label="Manual Adress ?"
          name="is_alter_address"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <typography style={{ margin: "0px 8px" }}>No</typography>
          <Switch onChange={onChangeAddressSwitch} />
          <typography style={{ margin: "0px 8px" }}>Yes</typography>
        </Form.Item>

        <div style={{ display: "flex" }}>
          <div>
            {addressSwitch ? (
              <Grid item xs={18} md={9} sm={18}>
                <div style={{ display: "flex" }}>
                  <Form.Item
                    style={{ width: "48%", marginRight: "20px" }}
                    label="state"
                    name="alter_state"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      showSearch={false}
                      showArrow
                      placeholder="State"
                      getPopupContainer={() =>
                        document.getElementById("dropdown")
                      }
                      loading={allstates?.isLodaing}
                      onSelect={(value) => {
                        // set_country_id(value);
                        set_city_id(value);
                      }}
                    >
                      {allstates?.states?.data?.states &&
                        allstates?.states?.data?.states?.map((item, i) => (
                          <Select.Option value={item.id} key={item.enumId}>
                            {item.name}
                          </Select.Option>
                        ))}
                    </Select>
                    {/* ))} */}
                  </Form.Item>

                  <Form.Item
                    style={{ width: "48%", marginLeft: "20px" }}
                    label="city"
                    name="alter_city"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                    {/* <Select
                      showSearch={false}
                      showArrow
                      getPopupContainer={() =>
                        document.getElementById("dropdown")
                      }
                      loading={all_cities?.isLodaing}
                      onSelect={(value) => {
                        set_country_id(value);
                      }}
                    >
                      {all_cities?.cities?.data &&
                        all_cities?.cities?.data?.map((item, i) => (
                          <Select.Option value={item.id} key={item.enumId}>
                            {item.name}
                          </Select.Option>
                        ))}
                    </Select> */}
                  </Form.Item>
                </div>

                <div style={{ display: "flex" }}>
                  <Form.Item
                    style={{ width: "48%", marginRight: "20px" }}
                    label="street address"
                    name="alter_address"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    style={{ width: "48%", marginLeft: "20px" }}
                    label="zip code"
                    name="alter_zip_code"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
              </Grid>
            ) : (
              <>
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div >
                      <div style={{ display: "flex" }}>
                      <TextField
                        style={{ width: "70%" }}
                        sx={{ mb: 3 }}
                        // fullWidth
                        {...getInputProps({
                          placeholder: "Type Your address",
                        })}
                      ></TextField>
                      </div>
                     

                      <div style={{ boxShadow: "5px 5px 5px #a6a6a6" }}>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active
                              ? "#41b6e6"
                              : "#fff",
                            textAlign: "center",
                            fontSize: "13px",
                          };

                          return (
                            <MenuItem
                              style={{ border: "1px solid black" }}
                              {...getSuggestionItemProps(suggestion, {
                                style,
                              })}
                            >
                              {suggestion.description}
                            </MenuItem>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>

                {showData === true ? (
                  <>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          required
                          name="country"
                          label="country"
                          disabled
                          value={country}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          required
                          name="state"
                          label="state"
                          disabled
                          value={state}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={18} sm={18} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          required
                          label="Full Address"
                          value={full_address}
                          disabled
                        ></TextField>
                      </Grid>

                      <Grid item xs={18} sm={18} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          name="zip_code"
                          label="ZIP"
                          value={zip_code}
                          disabled
                        />
                      </Grid>
                    </Grid>
                  </>
                ) : (
                  <Alert
                    style={{ width: "70%", marginTop: "15px" }}
                    message="Please Select One of the Suggested addresses After You type
                The Address"
                    type="warning"
                    showIcon
                  />

                  // <h6>
                  //   Please Select One of the Suggested addresses After You type
                  //   The Address
                  // </h6>
                )}
              </>
            )}

            {/* {!addressSwitch && (
              <>
                <PlacesAutocomplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <TextField
                        sx={{ mb: 3 }}
                        fullWidth
                        {...getInputProps({
                          placeholder: "Type Your address",
                        })}
                      ></TextField>

                      
                      <div style={{boxShadow:"5px 5px 5px #a6a6a6"}}>

                    
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                            textAlign: "center",
                            fontSize: "13px",
                          };

                          return (
                            <MenuItem
                              style={{ border: "1px solid black" }}
                              {...getSuggestionItemProps(suggestion, {
                                style,
                              })}
                            >
                              {suggestion.description}
                            </MenuItem>
                          );
                        })}
                  
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>

                {showData === true ? (
                  <>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          required
                          name="country"
                          label="country"
                          disabled
                          value={country}
                        />

   

                      </Grid>
                      <Grid item xs={6} sm={6} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          required
                          name="state"
                          label="state"
                          disabled
                          value={state}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={18} sm={18} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          required
                          label="Full Address"
                          value={full_address}
                          disabled
                        ></TextField>
                      </Grid>



                      <Grid item xs={18} sm={18} sx={{ mb: 2 }}>
                        <TextField
                          fullWidth
                          name="zip_code"
                          label="ZIP"
                         value={zip_code}
                          disabled

                        />
                      </Grid>

                    
                    </Grid>
                  </>
                ) : (
                
                    <h6>
                      Please Select One of the Suggested addresses After You type
                      The Address
                    </h6>
                
                )}
              </>
 
            )} */}
          </div>

          <div>
            <div className="tetstttttttt">
              <GoogleMap
                mapContainerStyle={mapStyles}
                style={{ position: "absolute !important" }}
                zoom={25}
                center={coordinates}
                mapTypeId={"satellite"}
              >
                <Marker
                  position={coordinates}
                  draggable={true}
                  onDragEnd={(e) =>
                    setCoordinates({
                      ...coordinates,
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                    })
                  }
                />
              </GoogleMap>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: "150px" }}>
          <Form.Item
            // style={{ width: "48%", marginLeft: "20px" }}
            label="add your rating and review"
            name="rate"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Rate onChange={setValue} value={value} />
          </Form.Item>
        </div>
        <div style={{ display: "flex" }}>
          <h3>last time you communicated</h3>
        </div>

        <div style={{ display: "flex" }}>
          {/* <Form.Item
            style={{
              width: "48%",
              marginRight: "20px",
              width: "50%",
              display: "flex",
            }}
            label="date"
            name="date"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker style={{ width: "350%" }} />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="time to contact"
            name="time_to_contact"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="demo">5:00 pm </Select.Option>
              <Select.Option value="demo2">3:00 pm</Select.Option>
            </Select>
          </Form.Item> */}

          <Form.Item
            style={{
              width: "48%",
              // display:"flex"
              marginRight: "20px",
              // height: "40px",
              // marginTop: "25px",
            }}
            label="last time you communicated"
            name="last_time_you_communicated"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              onChange={onChange}
              onOk={onOk}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="Lead source"
            name="source"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="manual">manual</Select.Option>
              <Select.Option value="call_center"> call center</Select.Option>
              <Select.Option value="apn"> apn</Select.Option>
            </Select>
          </Form.Item>
        </div>

        {/* {current < steps - 1 && ( */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            style={{ width: "35%", backgroundColor: "#2d3282" }}
            type="primary"
            htmlType="submit"
            onClick={() => previous()}
          >
            Previous
          </Button>

          <Button
            style={{ width: "35%", backgroundColor: "#2d3282" }}
            type="primary"
            htmlType="submit"
            onClick={() => sceNext()}
          >
            Next
          </Button>
        </div>

        {/* )} */}
      </Form>
    </AddLeadContainer>
  );
};

export default SecondStep;
