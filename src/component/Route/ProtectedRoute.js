import { React,Fragment} from "react"; 
import { useSelector } from "react-redux";
import { Route ,Navigate, Outlet} from "react-router-dom";


const ProtectedRoute = ({element:Component,...rest}) => {
    const {loading,isAuthenticated,user}=useSelector((state)=>state.user);


  return (

<Fragment>
    {loading && (
        <Route
        { ...rest}
        render={(props)=>{
            if(!isAuthenticated){
                return  <Navigate to="/login" />;
            }
            else{
                
                return <Component {...props}/>;
            }
        }}

         />
    )
    
    }
</Fragment>
   
  );
};

export default ProtectedRoute