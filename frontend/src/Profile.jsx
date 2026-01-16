import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading profile...</div>;

  if (!isAuthenticated || !user) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={user.picture}
        alt={user.name}
        style={{ width: 110, height: 110, borderRadius: "50%" }}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
