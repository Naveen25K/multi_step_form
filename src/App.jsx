import { useEffect, useState } from "react";
import "./App.css";
import UserLogin from "./components/UserLogin";
import { signUp } from "./components/singUp";

function App() {
  // state for first form completing all fields
  const [form1, setForm1] = useState(false);

  // state for 2nd form completing all fields

  const [form2, setForm2] = useState(false);

  // sate for 3rd or final form completing all fields

  const [form3, setForm3] = useState(false);
  // setting state for all the form input values get and set
  const [form, setForm] = useState({
    step: 1,
    email: "",
    password: "",
    fname: "",
    lname: "",
    address: "",
    country_code: "",
    phone: "",
    checked: false,
  });

  // form 1 validation

  const inputValidate = (e) => {
    let password =
      /(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/.test(
        form.password
      );
    if (form.email === "") {
      alert("Email Field is Mandatory");
    } else if (!form.email.includes("@")) {
      e.target.focus();
    } else if (
      !form.email.includes(".in") &&
      !form.email.includes(".com") &&
      !form.email.includes(".net")
    ) {
      alert("include either .in or .com or .net at the end of your email");
    } else if (!password) {
      alert(
        "password Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters"
      );
    } else {
      setForm1(true);
    }
  };

  // useffect for first form (user login)
  useEffect(() => {
    if (form1) {
      nextBtn();
    }
  }, [form1]);

  // form 2 validation user Details

  const userDetailValidate = () => {
    let char = /^[A-Za-z]+$/.test(form.fname);
    let char2 = /^[A-Za-z]+$/.test(form.lname);
    if (form.fname === "") {
      alert("First name is empty");
    } else if (!char) {
      alert("Allow only alphabets first name");
    } else if (form.fname.length < 2) {
      alert("Minimum of 2 character required");
    } else if (form.fname.length > 50) {
      alert("maximum 50 character required");
    } else if (form.lname === "") {
      alert("Last name is empty");
    } else if (!char2) {
      alert("Allow only alphabets for last name");
    } else if (form.address.length < 10) {
      alert("Required. Minimum length 10 in address");
    } else {
      setForm2(true);
    }
  };

  // useffect for first form (user login)
  useEffect(() => {
    if (form2) {
      nextBtn();
    }
  }, [form2]);

  // form 3 or last form validation for submission

  const userContactFinalValidate = () => {
    if (form.phone === "") {
      alert("phone number filed is empty.");
    } else if (form.phone.length !== 10) {
      alert("Only 10 digit numbers are allowed");
    } else if (!form.checked) {
      alert("checkbox input must be selected");
    } else {
      setForm3(true);
    }
  };

  // useffect for first form (user login)
  useEffect(() => {
    if (form3) {
      submitForm();
    }
  }, [form3]);

  // submit button form

  const submitForm = () => {
    const { step } = form;
    {
      form3
        ? setForm((prev) => {
            return { ...prev, step: step + 1 };
          })
        : userContactFinalValidate();
    }
  };

  // next btn

  const nextBtn = () => {
    const { step } = form;
    if (form.step === 1) {
      {
        form1
          ? setForm((prev) => {
              return { ...prev, step: step + 1 };
            })
          : inputValidate();
      }
    }
    if (form.step === 2) {
      {
        form2
          ? setForm((prev) => {
              return { ...prev, step: step + 1 };
            })
          : userDetailValidate();
      }
    }
  };

  // pervious button

  const prevBtn = () => {
    const { step } = form;
    if (step === 2) {
      setForm1(false);
    }
    if (step === 3) {
      setForm2(false);
    }
    setForm((prev) => {
      return { ...prev, step: step - 1 };
    });
  };

  // input handle change

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return <>{signUp(form, nextBtn, prevBtn, handleChange, submitForm)}</>;
}

export default App;
