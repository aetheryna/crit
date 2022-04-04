const RegistrationForm = () => {
  return (
    <form className="registration-form">
      <h1>Join the Family</h1>

      <div className="registration-form__wrap">
        <div className="registration-form__left">
          <input id="text-username" type="text" className="registration-form__text-input text-field" placeholder="Enter a username" />
          <input id="text-password" type="text" className="registration-form__text-input text-field" placeholder="Enter a password" />
          <input id="text-password-confirm" type="text" className="registration-form__text-input text-field" placeholder="Enter your password again" />
          <input id="text-email" type="text" className="registration-form__text-input text-field" placeholder="Enter a email" />
          <button className="registration-form__button registration-form__button--desktop button button--primary"> Sign up </button>
        </div>

        <div className="registration-form__right">
          <input id="text-username" type="file" accept="image/png, image/gif, image/jpeg" className="registration-form__text-input profile-picture" />
        </div>
      </div>

      <button className="registration-form__button registration-form__button--mobile button button--primary"> Sign up </button>
    </form>
  )
}

export default RegistrationForm
