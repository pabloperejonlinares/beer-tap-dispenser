import React from "react";

import DispenserDetails from "@/app/components/dispenserDetails";

export default function Page({ params }: { params: { id: string } }) {

  return (
    <DispenserDetails id={params.id[0]} status={params.id[1]} />
  );
}
