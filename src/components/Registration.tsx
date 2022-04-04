import CritLogo from '../../public/images/critLogo.svg'
import RegistrationForm from './RegistrationForm'

const Registration = () => {
  return (
    <section className="registration">
      <div className="registration__wrapper">
        <div className="registration__top">
          <CritLogo />
        </div>
        <div className="registration__bottom">
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}

export default Registration
