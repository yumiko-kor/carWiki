// 컴포넌트
import { LoginMain, LoginContent } from "../../components/login";
import RouteChangeTracker from "../../utils/RouteChangeTracker";

const Login = () => {
    RouteChangeTracker();
    
    return (
        <>
            <LoginMain />
            <LoginContent />
        </>
    );
};

export default Login;