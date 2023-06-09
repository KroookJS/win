import { Button, LinkStyle } from "@/ui/Button";
import { ButtonBase, Select } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import Link from "next/link";
import React from "react";

export default function AddCatigory() {
  return (
    <div>
      <Select />
      <SelectInput autoWidth={true} multiple={true} native={true} />
      <Link href="/uploads/AddTitle" style={LinkStyle}>
        <Button>Назад</Button>
      </Link>
      <Link href="/" style={LinkStyle}>
        <ButtonBase>Загрузить</ButtonBase>
      </Link>
    </div>
  );
}
