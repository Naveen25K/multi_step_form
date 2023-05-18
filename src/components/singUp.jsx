import UserContact from "./UserContact";
import UserDetails from "./UserDetails";
import UserLogin from "./UserLogin";

export const signUp = (form, nextBtn, prevBtn, handleChange, submitForm) => {
  const { step } = form;
  switch (step) {
    case 1:
      return (
        <UserLogin
          form={form}
          nextBtn={nextBtn}
          prevBtn={prevBtn}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <UserDetails
          form={form}
          nextBtn={nextBtn}
          prevBtn={prevBtn}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <UserContact
          form={form}
          prevBtn={prevBtn}
          handleChange={handleChange}
          submitForm={submitForm}
        />
      );
    default:
      return <UserLogin form={form} nextBtn={nextBtn} prevBtn={prevBtn} />;
  }
};
