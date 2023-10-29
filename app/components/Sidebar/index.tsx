import Count from "./Count";
import Message from "./Message";
import Time from "./Time";
import UserName from "./UserName";
import UserPhoto from "./UserPhoto";

const Sidebar = () => {
  return (
    <aside
      className="w-full p-5 border-gray-500 lg:max-w-sm border-1"
      style={{ boxShadow: "0 0 2px #ababab" }}
    >
      <UserName />
      <UserPhoto />
      <Message /> 
      <Time />
      <Count />
    </aside>
  );
};

export default Sidebar;
