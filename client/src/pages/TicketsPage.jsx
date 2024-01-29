import { useAuth } from "../context/AuthContext";
function TicketsPage() {

  const {user} = useAuth()
  console.log(user);

  return (
    // <div>TicketsPage</div>

    <input type="file" accept="image/*" capture="camera"></input>
    )
}

export default TicketsPage