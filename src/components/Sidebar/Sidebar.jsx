import React, { useState } from "react";
import { TextField } from "../TextField";
import { BaseSidebar, SidebarContent } from "./style";

export default function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm);

  return (
    <BaseSidebar>
      <SidebarContent>
        <TextField title="Search by name" value={searchTerm} onChange={onChange} />
      </SidebarContent>
    </BaseSidebar>
  );
}
