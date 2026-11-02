import { NavLink } from "react-router-dom";
import { navigation } from "../model/data.ts";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <>
      <div
        className={`mobile-drawer${isOpen ? " mobile-drawer--open" : ""}`}
        id="mobile-drawer"
        role="dialog"
      >
        <ul className="mobile-drawer__list">
          {navigation.menuArray.map((item) => (
            <li key={item.to}>
              <NavLink
                className={({ isActive }) =>
                  `mobile-drawer__link${isActive ? " mobile-drawer__link--active" : ""}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mobile-drawer__backdrop${isOpen ? " mobile-drawer__backdrop--visible" : ""}`}
        onClick={onClose}
      />
    </>
  );
}
