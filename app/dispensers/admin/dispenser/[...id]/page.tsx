import React from "react";

import DispenserAdminDetails from "@/app/components/dispenserAdminDetails";

export default function Page({ params }: { params: { id: string } }) {

  return (
    <DispenserAdminDetails id={params.id[0]} />
  );
}
