import { Link } from 'react-router-dom'
import c from 'classnames'
import { useText } from '../lib'
import { isExtension } from '../utils/env'
import { useAuth, useUser } from '../data/auth'
import { useCurrentChain } from '../data/chain'
import { useApp } from '../hooks'
import Icon from '../components/Icon'
import ModalContent from '../components/ModalContent'
import Share from './Share'
import User from './User'
import Preconfigured from './Preconfigured'
import s from './Header.module.scss'

const Header = ({ className }: { className: string }) => {
  const { CONNECT } = useText()
  const { signOut } = useAuth()
  const user = useUser()
  const { goBack, refresh, authModal, modal } = useApp()
  const { localterra: isLocalTerra } = useCurrentChain()

  const share = () =>
    modal.open(
      <ModalContent close={modal.close}>
        <Share />
      </ModalContent>
    )

  return (
    <header className={c(s.header, isExtension && s.extension, className)}>
      {isExtension ? (
        user ? (
          <div className={s.container}>
            <User {...user} />
            <Link to="/settings" className={s.link}>
              <Icon name="settings" size={20} />
            </Link>
          </div>
        ) : null
      ) : (
        <div className={s.container}>
          <div className={s.connect}>
            {user ? (
              <User {...user} />
            ) : (
              <button
                className={c('btn btn-primary btn-sm', s.button)}
                onClick={authModal.open}
              >
                {CONNECT}
              </button>
            )}

            {isLocalTerra && (
              <Preconfigured className={c('btn btn-sm', s.button, s.select)} />
            )}
          </div>

          <section
            className={c('btn-icon-group', s.actions, !user && 'desktop-large')}
          >
            {goBack && (
              <Link to={goBack} className="btn-icon">
                <Icon name="arrow_back" size={20} />
              </Link>
            )}

            <button className="btn-icon" onClick={refresh}>
              <Icon name="refresh" size={20} />
            </button>

            <button className="btn-icon" onClick={share}>
              <Icon name="share" size={20} />
            </button>

            {user && (
              <button onClick={signOut} className="btn-icon">
                <Icon name="exit_to_app" size={20} />
              </button>
            )}
          </section>
        </div>
      )}
    </header>
  )
}

export default Header
