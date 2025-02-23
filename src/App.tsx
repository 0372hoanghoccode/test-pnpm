import { useState } from "react";
import { Layout } from "./components/layout";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";
import { UserDetails } from "./components/UserDetails";
import type { User } from "./api";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsEditing(true);
    setIsViewing(false);
  };

  const handleView = (user: User) => {
    setSelectedUser(user);
    setIsViewing(true);
    setIsEditing(false);
  };

  const handleSuccess = () => {
    setSelectedUser(null);
    setIsEditing(false);
    setIsViewing(false);
  };

  const handleAddNewUser = () => {
    setSelectedUser(null);
    setIsEditing(true);
    setIsViewing(false);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <Button onClick={handleAddNewUser}>Add New User</Button>
          </div>
          {isEditing || isViewing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isEditing && (
                <UserForm user={selectedUser} onSuccess={handleSuccess} />
              )}
              {isViewing && selectedUser && <UserDetails user={selectedUser} />}
            </div>
          ) : (
            <UserList onEdit={handleEdit} onView={handleView} />
          )}
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
