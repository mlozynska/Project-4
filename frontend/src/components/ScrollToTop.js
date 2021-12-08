import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// const ScrollToTop = ({ history }) => {

// useEffect(() => {
//   const unlisten = history.listen(() => {
//     window.scrollTo(0, 0)
//   })
//   return () => {
//     unlisten()
//   }
// }, [])
// return null


const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return children || null
}
export default withRouter(ScrollToTop)
