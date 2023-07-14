import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

function Page404(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login" style={{ paddingTop: 0 }}>
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">404 page not found</b>
              <p className="cities__status-description">We could not find such a page<br /><br /></p>
              <button className="login__submit form__submit button" type="submit">
                <Link to="/">На главную страницу</Link>
              </button>
            </div>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page404;
