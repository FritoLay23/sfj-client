import { useAuthStore } from "../../store/auth.store";
import UsersSet from "../../components/UsersSet.c";

const UsersP = ({ Comp }) => {
  const profile = useAuthStore((state) => state.profile);

  return (
    <main>
      <>{Comp ? <Comp /> : <UsersSet />}</>
    </main>
  );
};
export default UsersP;
