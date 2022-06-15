import React, { useState } from "react";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { BaseSidebar, SidebarContent } from "./style";

export default function Sidebar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <BaseSidebar>
      <SidebarContent>
        <TextField title="Search by name" value={searchTerm} onChange={onChange} />
        <Button onClick={() => onSearch(searchTerm)}>Buscar</Button>
      </SidebarContent>
    </BaseSidebar>
  );
}
