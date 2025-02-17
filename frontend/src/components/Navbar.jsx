import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { LogOut, MessageSquare, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {logout, authUser } = useAuthStore();
  return <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
  backdrop-blur-lg bg-base-100/80">
    <div className="container mx-auto px-4 py-1">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center hover:opacity-80 transition-all">
            <div className="w-24 h-24 flex items-center justify-center">
              {/* Replace the icon with your logo image */}
              <img
                src="/nimbus.png"
                alt="Logo"
                className="w-20 h-20"
              />
            </div>
            <h1 className="text-3xl font-bold underline underline-offset-4">Nimbus</h1>
          </Link>
        </div>

        <div className="flex items-center gap-6">
            <Link
              to={"/settings"}
              className={`
              btn btn-m gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-m gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-m" />
                  <span className="hidden sm:inline text-m">Logout</span>
                </button>
              </>
            )}
          </div>
      </div>
    </div>
  </header>;
}

export default Navbar