import React, { FC, useState, useEffect, createContext } from 'react'

type DropdownContextType = {
  active: boolean
  onClickTrigger: () => void
}

export const DropdownContext = createContext<DropdownContextType>({
  active: false,
  onClickTrigger: () => {
    /* noop */
  },
})

export const Dropdown: FC = ({ children }) => {
  const [active, setActive] = useState(false)

  return (
    <DropdownContext.Provider
      value={{
        active,
        onClickTrigger: () => {
          const newActive = !active
          setActive(newActive)
        },
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}
