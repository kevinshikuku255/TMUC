import React, { useState } from "react";
import { useLoadContext } from "../../Context";
import { useMutation } from "@apollo/client";
import { SIGN_USER } from "../../Graphql/student";
import "./popup.scss";

const Popup = () => {
  const [values, setValues] = useState({ name: "", admition: "", phone: "" });
  const [, dispatch] = useLoadContext();
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  //   let example = "SBE/BA/00033/017";

  //phone validation
  const phoneRegex =
    /^(?:0)?((7|1)(?:(?:[1234679][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
  if (values.phone.length === 10 && !phoneRegex.test(values.phone)) {
    setValues({ ...values, phone: "wrong!!!" });
  }

  //admitionition validation
  const admitionRegex = /[A-Z][A-Z][A-Z]\/[A-Z][A-Z]\/[0-9]{5}\/[0-9]{3}/;

  if (values.admition.length === 16 && !admitionRegex.test(values.admition)) {
    setValues({ ...values, admition: "wrong!!!" });
  }

  const [signup, { loading }] = useMutation(SIGN_USER, {
    variables: values,
    onError: (cc) => {
      console.log(cc);
    },
    onCompleted: () => {
      localStorage.setItem("user", JSON.stringify(values));
      dispatch({
        type: "POPED",
        payload: false,
      });
    },
  });

  if (
    values.admition.length === 16 &&
    values.admition !== "" &&
    values.name.length >= 7
  ) {
    signup();
    setValues({ name: "", admition: "", phone: "" });
  }

  return (
    <div className="container">
      {loading && <h5>confirming your details ...</h5>}
      {!loading && (
        <div className="form">
          <input
            type="text"
            autoComplete="off"
            name="name"
            placeholder="Your full name"
            spellCheck={false}
            value={values.name}
            onChange={changeHandler}
            autoFocus={true}
          />
          <input
            type="text"
            autoComplete="off"
            name="phone"
            placeholder="Your correct phone"
            value={values.phone.trim()}
            spellCheck={false}
            onChange={changeHandler}
          />
          <input
            type="text"
            autoComplete="off"
            name="admition"
            placeholder="Admition number"
            value={values.admition.trim().toLocaleUpperCase()}
            spellCheck={false}
            onChange={changeHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Popup;
