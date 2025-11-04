import { Link, useRouteContext } from '@tanstack/react-router'
import { LocaleSwitcher } from '../atoms/LocaleSwitcher'
import { ThemeToggle } from '../atoms/ThemeToggle'

export const Header = () => {
  const { user } = useRouteContext({ from: '__root__' })

  return (
    <header className="flex justify-between items-center p-2 bg-amber-800">
      <Link to="/">Home</Link>
      <nav className="flex items-center gap-2">
        {user ? (
          <div className="flex items-center gap-2">
            <span>Connecté: {user.email}</span>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout">Déconnexion</Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
        <ThemeToggle />
        <LocaleSwitcher />
      </nav>
    </header>
  )
}
