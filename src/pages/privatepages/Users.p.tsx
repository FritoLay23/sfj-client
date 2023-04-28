import { useAuthStore } from "../../store/auth.store";

const UsersP = ({ Comp }) => {

  const profile = useAuthStore(state => state.profile);

    return (
  
        <main>
          <>{Comp ? <Comp /> : <h1>{JSON.stringify(profile)}</h1>}</>
        </main>
  
    );
  };
  export default UsersP;