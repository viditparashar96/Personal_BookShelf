import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Myshelf from "./_root/pages/Myshelf";

const App = () => {
  return (
    <div className="dark ">
      {/* Public */}
      <Routes>
        {/* <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route> */}

        {/* Private */}
        <Route element={<RootLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/myshelf" element={<Myshelf />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
