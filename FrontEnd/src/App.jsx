import { Route , Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/Regist";
import Upload from "./Components/Upload/upload";
import Main from "./Components/Main/Main";
import Collection from "./pages/Collection";
import Dashboard from "./Components/ContentAdmin/Dashboard";
import Index from "./Admin/Index";
import UserManager from "./Admin/UserManager";
import CollectionManager from "./Admin/CollectionManager";
import InCollectionManager from "./Admin/InCollectionManager";
import GalleryManager from "./Admin/GalleryManager";
import GotTagManager from "./Admin/GotTagManager";
import GallerySingle from "./Components/GallerySingle/GallerySingle";
import FormUpload from "./Components/Form/FormUpload";
import DropdownButton from "./Components/DropdownButton/DropdownButton";
function App(){
      return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Main/>}/>
                     <Route path="/Upload" element={<Upload/>}/>
                </Route>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
            </Routes>
            {/* <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/aboutdata" element={<AboutData/>}/>
                <Route path="/aboutfollower" element={<AboutFollower/>}/>
                <Route path="/aboutcollection" element={<AboutCollection/>}/>
                <Route path="/aboutwatching" element={<AboutWatching/>}/>
                <Route path="/aboutprofile" element={<EditProfile/>}/>
                <Route path="/aboutnotification" element={<EditNotification/>}/>
            </Routes> */}
            {/* <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/usermanager" element={<UserManager/>}/>
                <Route path="/collectionmanager" element={<CollectionManager/>}/>
                <Route path="/gottagmanager" element={<GotTagManager/>}/>
                <Route path="/gallerymanager" element={<GalleryManager/>}/>
                <Route path="/incollectionmanager" element={<InCollectionManager/>}/>
            </Routes>  */}
        {/* <Upload></Upload> */}
        {/* <FormUpload></FormUpload> */}
        </>
      )
}
export default App;