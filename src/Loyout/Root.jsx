import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar"
import { Outlet } from 'react-router-dom';
function Root() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavigationBar />
      <Outlet/>
    </div>
  )
}

export default Root