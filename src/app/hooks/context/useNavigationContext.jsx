// This component or hook avoids having to name the context every time you call 
// useContext() . To reduce code rendering.

import { useContext } from 'react'
import { NavigationContext } from '../../context/creatContext/NavigationContext'

const useNavigationContext = () => {
  return useContext(NavigationContext);
}
export default useNavigationContext;